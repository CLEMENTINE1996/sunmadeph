const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const KEY_FILE = './service-account.json';
const FOLDER_ID = '16GxZd6zk5cPEYJY59_V7r6-60VxIKne7';
const DEST_DIR = path.join(__dirname, 'content/blogs');

async function syncDrive() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  const drive = google.drive({ version: 'v3', auth });

  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
  }

  const res = await drive.files.list({
    q: `'${FOLDER_ID}' in parents and trashed = false`,
    fields: 'files(id, name)',
  });

  const files = res.data.files;
  if (!files.length) return console.log('No files found.');

  for (const file of files) {
    const dest = fs.createWriteStream(path.join(DEST_DIR, file.name));
    const response = await drive.files.get(
      { fileId: file.id, alt: 'media' },
      { responseType: 'stream' }
    );
    
    response.data.pipe(dest);
    console.log(`Synced: ${file.name}`);
  }
}

syncDrive().catch(console.error);