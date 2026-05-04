const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const FOLDER_ID = '16GxZd6zk5cPEYJY59_V7r6-60VxIKne7'; 
const BLOGS_DIR = path.join(__dirname, 'content/blogs');
const DATA_DIR = path.join(__dirname, 'src/data');
const IMAGES_BASE_DIR = path.join(__dirname, 'public', 'data', 'images');

/**
 * Utility to clean and prep directories
 */
function cleanLocalFolders() {
    [BLOGS_DIR, IMAGES_BASE_DIR, DATA_DIR].forEach(dir => {
        if (fs.existsSync(dir)) {
            console.log(`Cleaning ${dir}...`);
            fs.rmSync(dir, { recursive: true, force: true });
        }
        fs.mkdirSync(dir, { recursive: true });
    });
}

/**
 * Generic file downloader
 */
async function downloadFile(drive, fileId, destPath) {
    const dest = fs.createWriteStream(destPath);
    const response = await drive.files.get(
        { fileId: fileId, alt: 'media' },
        { responseType: 'stream' }
    );

    return new Promise((resolve, reject) => {
        response.data
            .pipe(dest)
            .on('finish', resolve)
            .on('error', reject);
    });
}

/**
 * Recursive downloader that maintains folder structure
 */
async function syncRecursive(drive, folderId, localPath) {
    if (!fs.existsSync(localPath)) fs.mkdirSync(localPath, { recursive: true });

    const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false`,
        fields: 'files(id, name, mimeType)',
    });

    for (const file of res.data.files) {
        const currentPath = path.join(localPath, file.name);
        if (file.mimeType === 'application/vnd.google-apps.folder') {
            await syncRecursive(drive, file.id, currentPath);
        } else {
            await downloadFile(drive, file.id, currentPath);
            console.log(`Synced: ${file.name} -> ${localPath.split(__dirname)[1]}`);
        }
    }
}

async function startSync() {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.join(process.cwd(), 'service-account.json'),
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });
    const drive = google.drive({ version: 'v3', auth });

    // ONLY clean folders if running in a GitHub Action environment
    if (process.env.GITHUB_ACTIONS === 'true') {
        console.log('Running in GitHub Actions: Cleaning local folders for a fresh sync...');
        cleanLocalFolders();
    } else {
        console.log('Running locally: Skipping folder wipe to preserve existing files.');
        
        // Optional: Ensure directories exist even if we don't wipe them
        [BLOGS_DIR, IMAGES_BASE_DIR, DATA_DIR].forEach(dir => {
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        });
    }

    console.log('Fetching root content from Google Drive...');
    const res = await drive.files.list({
        q: `'${FOLDER_ID}' in parents and trashed = false`,
        fields: 'files(id, name, mimeType)',
    });

    for (const item of res.data.files) {
        // ROUTE JSON FILES
        if (item.name.endsWith('.json')) {
            console.log(`Routing JSON: ${item.name} to src/data`);
            await downloadFile(drive, item.id, path.join(DATA_DIR, item.name));
            continue;
        }

        // ROUTE DATA-IMAGES FOLDER
        if (item.name === 'data-images' && item.mimeType === 'application/vnd.google-apps.folder') {
            console.log("Routing data-images structure to public/data/images/...");
            await syncRecursive(drive, item.id, IMAGES_BASE_DIR);
            continue;
        }

        // ROUTE EVERYTHING ELSE AS BLOGS
        if (item.name !== 'data-images' && item.mimeType === 'application/vnd.google-apps.folder') {
            console.log(`Routing Blog Folder: ${item.name} to content/blogs`);
            const blogPath = path.join(BLOGS_DIR, item.name);
            await syncRecursive(drive, item.id, blogPath); 
        }
    }

    console.log('✅ Sync complete! All files routed correctly.');
}

startSync().catch(console.error);