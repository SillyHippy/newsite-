// Dynamic Content Feed Builder for Just Legal Solutions
// Aggregates local events, voice search phrases, and key HTML updates into feed.json

const fs = require('fs');
const path = require('path');

const feedPath = path.join(__dirname, '../../public/feed.json');
const eventsPath = path.join(__dirname, '../../public/local-events/calendar.txt');
const networkingPath = path.join(__dirname, '../../public/local-events/networking.txt');
const voicePhrasesPath = path.join(__dirname, '../../public/voice-search/phrases.txt');
const voiceLogPath = path.join(__dirname, '../../public/voice-search-log.txt');
const whyChooseUsPath = path.join(__dirname, '../../public/why-choose-us.html');
const weekendEmergencyPath = path.join(__dirname, '../../public/weekend-emergency.html');
const localLegalEventsPath = path.join(__dirname, '../../public/local-legal-events.html');

function readText(file) {
  try {
    return fs.readFileSync(file, 'utf8').trim();
  } catch {
    return '';
  }
}

function extractHtmlTitle(file) {
  const html = readText(file);
  const match = html.match(/<title>(.*?)<\/title>/);
  return match ? match[1] : '';
}

const items = [];

// Local Events
if (fs.existsSync(eventsPath)) {
  items.push({
    id: 'local-events-calendar',
    title: 'Upcoming Legal Events',
    content_text: readText(eventsPath),
    url: 'https://justlegalsolutions.org/local-legal-events.html',
    date_published: new Date().toISOString()
  });
}
if (fs.existsSync(networkingPath)) {
  items.push({
    id: 'business-networking',
    title: 'Business Networking Opportunities',
    content_text: readText(networkingPath),
    url: 'https://justlegalsolutions.org/local-legal-events.html',
    date_published: new Date().toISOString()
  });
}
// Voice Search Phrases
if (fs.existsSync(voicePhrasesPath)) {
  items.push({
    id: 'voice-search-phrases',
    title: 'Voice Search Optimized Phrases',
    content_text: readText(voicePhrasesPath),
    url: 'https://justlegalsolutions.org/voice-friendly.html',
    date_published: new Date().toISOString()
  });
}
// Voice Search Log
if (fs.existsSync(voiceLogPath)) {
  items.push({
    id: 'voice-search-log',
    title: 'Voice Search Log',
    content_text: readText(voiceLogPath),
    url: 'https://justlegalsolutions.org/voice-friendly.html',
    date_published: new Date().toISOString()
  });
}
// Why Choose Us
if (fs.existsSync(whyChooseUsPath)) {
  items.push({
    id: 'why-choose-us',
    title: extractHtmlTitle(whyChooseUsPath),
    content_html: readText(whyChooseUsPath),
    url: 'https://justlegalsolutions.org/why-choose-us.html',
    date_published: new Date().toISOString()
  });
}
// Weekend Emergency
if (fs.existsSync(weekendEmergencyPath)) {
  items.push({
    id: 'weekend-emergency',
    title: extractHtmlTitle(weekendEmergencyPath),
    content_html: readText(weekendEmergencyPath),
    url: 'https://justlegalsolutions.org/weekend-emergency.html',
    date_published: new Date().toISOString()
  });
}
// Local Legal Events
if (fs.existsSync(localLegalEventsPath)) {
  items.push({
    id: 'local-legal-events',
    title: extractHtmlTitle(localLegalEventsPath),
    content_html: readText(localLegalEventsPath),
    url: 'https://justlegalsolutions.org/local-legal-events.html',
    date_published: new Date().toISOString()
  });
}

const feed = {
  version: 'https://jsonfeed.org/version/1',
  title: 'Just Legal Solutions Feed',
  home_page_url: 'https://justlegalsolutions.org/',
  feed_url: 'https://justlegalsolutions.org/feed.json',
  items
};

fs.writeFileSync(feedPath, JSON.stringify(feed, null, 2));
console.log('✅ Dynamic feed.json built and saved.');
