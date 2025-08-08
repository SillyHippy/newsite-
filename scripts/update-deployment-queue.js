
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Update deployment status after successful city deployment
const updateDeploymentQueue = (cityDataArg) => {
  if (!cityDataArg || cityDataArg === 'null') {
    console.log('No city to update in deployment queue');
    return;
  }

  const city = JSON.parse(cityDataArg);
  const statusFile = path.join(process.cwd(), 'deployment-status.json');
  
  let status = {
    deployed: [],
    nextIndex: 0,
    lastDeployment: null
  };

  if (fs.existsSync(statusFile)) {
    status = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
  }

  // Add deployed city to list
  status.deployed.push({
    name: city.name,
    county: city.county,
    slug: `process-server-${city.name.toLowerCase().replace(/\s+/g, '-')}`,
    deployedAt: new Date().toISOString(),
    priority: city.priority
  });

  // Update next index
  status.nextIndex = status.nextIndex + 1;
  status.lastDeployment = new Date().toISOString();

  // Write updated status
  fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));

  console.log(`✅ Updated deployment queue - ${city.name} marked as deployed`);
  console.log(`📊 Total deployed: ${status.deployed.length}`);
  console.log(`🎯 Next deployment index: ${status.nextIndex}`);
};

// Get city data from command line argument
const cityDataArg = process.argv[2];
updateDeploymentQueue(cityDataArg);
