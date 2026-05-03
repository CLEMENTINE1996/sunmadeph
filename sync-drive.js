const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const KEY_FILE = './service-account.json';
const FOLDER_ID = '16GxZd6zk5cPEYJY59_V7r6-60VxIKne7'; // Verified ID from your URL
const DEST_DIR = path.join(__dirname, 'content/blogs');
const DATA_DIR = path.join(__dirname, 'src/data');

function cleanLocalFolders() {
    if (fs.existsSync(DEST_DIR)) {
        console.log("Cleaning local blog folder for a fresh sync...");
        fs.rmSync(DEST_DIR, { recursive: true, force: true });
    }
    // Re-create the empty folder so the script has a place to download files
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

async function downloadFolder(drive, folderId, localPath) {
  if (!fs.existsSync(localPath)) {
    fs.mkdirSync(localPath, { recursive: true });
  }

  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType)',
  });

  if (!res.data.files.length) return;

  for (const file of res.data.files) {
    const jsonFiles = ['products.json', 'careers.json', 'branches.json', 'organizational-chart.json'];
    if (jsonFiles.includes(file.name)) {
      const dataFilePath = path.join(DATA_DIR, file.name);
      
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      
      console.log(`Syncing ${file.name}: ${file.name}`);
      
      // Use the file download logic here, NOT downloadFolder
      const dest = fs.createWriteStream(dataFilePath);
      const response = await drive.files.get(
        { fileId: file.id, alt: 'media' },
        { responseType: 'stream' }
      );
      
      // Wrap in a Promise to ensure it finishes before moving on
      await new Promise((resolve, reject) => {
        response.data
          .pipe(dest)
          .on('finish', resolve)
          .on('error', reject);
      });
      
      continue; 
    }

    const currentLocalPath = path.join(localPath, file.name);

    if (file.mimeType === 'application/vnd.google-apps.folder') {
      // It's a folder, go inside it
      await downloadFolder(drive, file.id, currentLocalPath);
    } else {
      const dest = fs.createWriteStream(currentLocalPath);
      const response = await drive.files.get(
        { fileId: file.id, alt: 'media' },
        { responseType: 'stream' }
      );

      await new Promise((resolve, reject) => {
        response.data
          .pipe(dest)
          .on('finish', resolve)
          .on('error', reject);
      });
      console.log(`Successfully downloaded: ${file.name}`);
    }
  }
}

async function startSync() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), 'service-account.json'),
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  const drive = google.drive({ version: 'v3', auth });

  if (process.env.GITHUB_ACTIONS !== 'true') {
    console.log('Local environment detected. Skipping cleaning to preserve existing files.');
  } else {
    console.log('GitHub environment detected. Cleaning local folders for fresh build...');
    cleanLocalFolders(); 
  }

  console.log('Starting sync...');
  await downloadFolder(drive, FOLDER_ID, DEST_DIR);
  console.log('Sync complete!');
}

startSync().catch(console.error);