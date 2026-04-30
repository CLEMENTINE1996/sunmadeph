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
    if (file.name === 'products.json') {
      const dataFilePath = path.join(DATA_DIR, file.name);
      
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      
      console.log(`Syncing Products Data: ${file.name}`);
      await downloadFolder(drive, file.id, dataFilePath);
      continue; 
    }

    const currentLocalPath = path.join(localPath, file.name);

    if (file.mimeType === 'application/vnd.google-apps.folder') {
      // It's a folder, go inside it
      await downloadFolder(drive, file.id, currentLocalPath);
    } else {
      // It's a file, download it
      const dest = fs.createWriteStream(currentLocalPath);
      const response = await drive.files.get(
        { fileId: file.id, alt: 'media' },
        { responseType: 'stream' }
      );
      response.data.pipe(dest);
      console.log(`Synced: ${file.name} to ${localPath}`);
    }
  }
}

async function startSync() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  const drive = google.drive({ version: 'v3', auth });

  console.log('Starting cleaning local folders...');
  cleanLocalFolders(); // Ensure we start with a clean slate before syncing

  console.log('Starting sync...');
  await downloadFolder(drive, FOLDER_ID, DEST_DIR);
  console.log('Sync complete!');
}

startSync().catch(console.error);