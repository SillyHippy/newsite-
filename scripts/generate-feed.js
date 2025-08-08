
// This script scans the 'content' folder for markdown files and generates feed.xml and feed.json in the 'public' folder.
const fs = require('fs');
const path = require('path');

// CONFIG: Update these for your actual site
const SITE_URL = 'https://justlegalsolutions.org';
const SITE_NAME = 'Just Legal Solutions';
const AUTHOR_NAME = 'Just Legal Solutions';

const contentDir = path.join(__dirname, '../content');
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const xmlItems = [];
const rssItems = [];
const jsonItems = [];
const files = fs.existsSync(contentDir) ? fs.readdirSync(contentDir).filter(f => f.endsWith('.md')) : [];

try {
  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const title = lines[0].replace(/^# /, '').trim();
    const summary = lines[1] ? lines[1].replace(/^> /, '').trim() : '';
    const url = `${SITE_URL}/${file.replace('.md', '')}`;
    const updated = new Date().toISOString();
    // Atom
    xmlItems.push(`  <entry>\n    <title>${title}</title>\n    <link href="${url}"/>\n    <updated>${updated}</updated>\n    <id>${url}</id>\n    <summary>${summary}</summary>\n    <author><name>${AUTHOR_NAME}</name></author>\n  </entry>`);
    // RSS
    rssItems.push(`    <item>\n      <title>${title}</title>\n      <link>${url}</link>\n      <description>${summary}</description>\n      <pubDate>${updated}</pubDate>\n      <guid>${url}</guid>\n    </item>`);
    // JSON Feed
    jsonItems.push({
      id: url,
      url,
      title,
      summary,
      content_text: content,
      date_modified: updated,
      author: { name: AUTHOR_NAME }
    });
  });

  // Atom Feed
  const xmlFeed = `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n  <title>${SITE_NAME} Feed</title>\n  <link href="${SITE_URL}/feed.xml"/>\n  <updated>${new Date().toISOString()}</updated>\n  <author>\n    <name>${AUTHOR_NAME}</name>\n  </author>\n  <id>${SITE_URL}/</id>\n${xmlItems.join('\n')}\n</feed>`;
  fs.writeFileSync(path.join(publicDir, 'feed.xml'), xmlFeed);

  // RSS 2.0 Feed
  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>${SITE_NAME} Feed</title>\n    <link>${SITE_URL}/</link>\n    <description>Latest updates from ${SITE_NAME}</description>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n    <generator>Custom Feed Script</generator>\n${rssItems.join('\n')}\n  </channel>\n</rss>`;
  fs.writeFileSync(path.join(publicDir, 'feed.rss'), rssFeed);

  // JSON Feed
  const jsonFeed = {
    version: "https://jsonfeed.org/version/1",
    title: `${SITE_NAME} Feed`,
    home_page_url: `${SITE_URL}/`,
    feed_url: `${SITE_URL}/feed.json`,
    items: jsonItems
  };
  fs.writeFileSync(path.join(publicDir, 'feed.json'), JSON.stringify(jsonFeed, null, 2));

  console.log('✅ Dynamic feeds generated: feed.xml, feed.rss, and feed.json');
} catch (err) {
  console.error('Feed generation failed:', err);
  process.exit(1);
}
