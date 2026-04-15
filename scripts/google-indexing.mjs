import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { getAllPosts } from '../lib/mdxUtils.js';

// --- CONFIGURATION ---
const KEY_PATH = path.join(process.cwd(), 'credentials.json');
const SITE_URL = 'https://techwithpaaji.in';

/**
 * 1. Ensure you have a service account and downloaded the 'credentials.json' to the root directory.
 * 2. Empower the service account email in Search Console (Settings > Users and permissions > Add User).
 * 3. Run: node scripts/google-indexing.mjs <url1> <url2> ...
 *    OR: node scripts/google-indexing.mjs --all
 */

async function indexUrls() {
  if (!fs.existsSync(KEY_PATH)) {
    console.error('❌ Error: credentials.json not found in root directory.');
    return;
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing('v3');
  const authClient = await auth.getClient();
  google.options({ auth: authClient });

  let urls = process.argv.slice(2);

  if (urls.includes('--all')) {
    console.log('📂 Fetching all blog posts...');
    const posts = getAllPosts();
    urls = posts.map(post => `${SITE_URL}/blog/${post.slug}`);
    // Add main static pages too
    urls.push(SITE_URL);
    urls.push(`${SITE_URL}/blog`);
    urls.push(`${SITE_URL}/services`);
  }

  if (urls.length === 0) {
    console.log('ℹ️ Usage: node scripts/google-indexing.mjs <url1> <url2> ...');
    console.log('OR: node scripts/google-indexing.mjs --all');
    return;
  }

  console.log(`🚀 Starting indexing for ${urls.length} URLs...`);

  // Google has a quota (usually 200 per day). We process them in sequence.
  for (const url of urls) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ Success: ${url} (Status: ${response.status})`);
      // Small delay to be polite to the API
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`❌ Failed: ${url} - ${error.message}`);
      if (error.message.includes('quota')) {
        console.log('🛑 Quota reached for today. Stoping.');
        break;
      }
    }
  }
  
  console.log('✨ All done!');
}

indexUrls();

