import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// --- CONFIGURATION ---
const KEY_PATH = path.join(process.cwd(), 'credentials.json');
const SITEMAP_URL = 'https://techwithpaaji.in/sitemap.xml';

/**
 * 1. Ensure you have a service account and downloaded the 'credentials.json' to the root directory.
 * 2. Empower the service account email in Search Console (Settings > Users and permissions > Add User).
 * 3. Run: node scripts/google-indexing.mjs
 */

async function indexUrls() {
  if (!fs.existsSync(KEY_PATH)) {
    console.error('❌ Error: credentials.json not found in root directory.');
    console.log('Please follow the walkthrough to set up the Google Indexing API.');
    return;
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing('v3');
  const authClient = await auth.getClient();
  google.options({ auth: authClient });

  // In a real scenario, we'd fetch URLs from sitemap.xml
  // For now, let's assume we pass them as arguments or fetch from a list
  const urls = process.argv.slice(2);

  if (urls.length === 0) {
    console.log('ℹ️ Usage: node scripts/google-indexing.mjs <url1> <url2> ...');
    console.log('Example: node scripts/google-indexing.mjs https://techwithpaaji.in/blog/throning-meaning-social-status-dating-trend');
    return;
  }

  console.log(`🚀 Starting indexing for ${urls.length} URLs...`);

  for (const url of urls) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ Success: ${url} (Status: ${response.status})`);
    } catch (error) {
      console.error(`❌ Failed: ${url} - ${error.message}`);
    }
  }
}

indexUrls();
