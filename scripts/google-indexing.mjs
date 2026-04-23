import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { getAllPosts } from '../lib/mdxUtils.js';

// --- CONFIGURATION ---
const KEY_PATH = path.join(process.cwd(), 'credentials.json');
const SITE_URL = 'https://techwithpaaji.in';

/**
 * Google's Indexing API is officially intended for JobPosting and livestream
 * pages, not standard blogs or service pages like this site.
 *
 * If you still need to test the script for a supported use case, run it with:
 * node scripts/google-indexing.mjs --force-unsupported <url1> <url2> ...
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
  const forceUnsupported = urls.includes('--force-unsupported');
  urls = urls.filter((url) => url !== '--force-unsupported');

  if (!forceUnsupported) {
    console.error(
      '⚠️ Google Indexing API is not meant for regular blog or service pages. Use sitemap.xml + Search Console URL Inspection instead.'
    );
    console.error(
      'If you are submitting a supported JobPosting or livestream URL, rerun with --force-unsupported.'
    );
    return;
  }

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
