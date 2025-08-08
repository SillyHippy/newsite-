#!/bin/bash
# Quick sitemap date updater
# Usage: ./update-sitemap.sh

# Get current date
CURRENT_DATE=$(date +%Y-%m-%d)

echo "🔄 Updating sitemap dates to $CURRENT_DATE..."

# Update sitemap.xml
sed -i.bak "s/<lastmod>[0-9-]*<\/lastmod>/<lastmod>$CURRENT_DATE<\/lastmod>/g" public/sitemap.xml

# Update dynamic sitemap route (optional)
sed -i.bak "s/lastModified = '[0-9-]*T/lastModified = '${CURRENT_DATE}T/g" app/api/sitemap/route.ts

echo "✅ Sitemap updated! Commit and push when ready."
echo "📋 Run: git add . && git commit -m 'Update sitemap dates' && git push"
