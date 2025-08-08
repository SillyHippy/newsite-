// This script scans the 'content' folder for markdown files and generates feed.xml and feed.json in the 'public' folder.
const fs = require('fs');
const path = require('path');
const contentDir = path.join(__dirname, '../content');
const publicDir = path.join(__dirname, '../public');
const xmlItems = [];
const jsonItems = [];
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
try {
  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const title = content.split('\n')[0].replace(/^# /, '').trim();
    const url = `https://justlegalsolutions.org/${file.replace('.md', '')}`;
    const updated = new Date().toISOString();
    xmlItems.push(`  <entry>\n    <title>${title}</title>\n    <link href="${url}"/>\n    <updated>${updated}</updated>\n    <id>${url}</id>\n  </entry>`);
    jsonItems.push({
      id: url,
      url,
      title,
      content_text: content,
      date_modified: updated
    });
  });
  const xmlFeed = `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n  <title>Just Legal Solutions Feed</title>\n  <link href="https://justlegalsolutions.org/feed.xml"/>\n  <updated>${new Date().toISOString()}</updated>\n  <author>\n    <name>Just Legal Solutions</name>\n  </author>\n  <id>https://justlegalsolutions.org/</id>\n${xmlItems.join('\n')}\n</feed>`;
  fs.writeFileSync(path.join(publicDir, 'feed.xml'), xmlFeed);
  const jsonFeed = {
    version: "https://jsonfeed.org/version/1",
    title: "Just Legal Solutions Feed",
    home_page_url: "https://justlegalsolutions.org/",
    feed_url: "https://justlegalsolutions.org/feed.json",
    items: jsonItems
  };
  fs.writeFileSync(path.join(publicDir, 'feed.json'), JSON.stringify(jsonFeed, null, 2));
} catch (err) {
  console.error('Feed generation failed:', err);
  process.exit(1);
}
