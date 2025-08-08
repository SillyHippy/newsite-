
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// City deployment queue with all required data
const cityQueue = [
  {
    name: 'Sand Springs',
    county: 'Tulsa County',
    zip: '74063',
    population: '20,000',
    features: ['Industrial hub', 'Arkansas River access', 'Manufacturing center', 'Growing business district'],
    keywords: ['Sand Springs process server', 'legal service Sand Springs', 'document delivery Sand Springs OK'],
    description: 'Professional process serving in Sand Springs with certified legal document delivery throughout Tulsa County.',
    priority: 1
  },
  {
    name: 'Owasso',
    county: 'Tulsa County', 
    zip: '74055',
    population: '36,000',
    features: ['Suburban community', 'Growing business district', 'Family-friendly area', 'Quality school system'],
    keywords: ['Owasso process server', 'legal document service Owasso', 'process serving Owasso OK'],
    description: 'Owasso process server services with professional legal document delivery throughout northern Tulsa County.',
    priority: 2
  },
  {
    name: 'Claremore',
    county: 'Rogers County',
    zip: '74017', 
    population: '19,000',
    features: ['Will Rogers birthplace', 'Historic downtown', 'Educational center', 'Healthcare hub'],
    keywords: ['Claremore process server', 'legal document service Claremore', 'Rogers County process serving'],
    description: 'Claremore process serving with experienced legal document delivery throughout Rogers County.',
    priority: 3
  },
  {
    name: 'Coweta',
    county: 'Wagoner County',
    zip: '74429',
    population: '10,000', 
    features: ['Growing community', 'Family businesses', 'Rural atmosphere', 'Agricultural center'],
    keywords: ['Coweta process server', 'Wagoner County legal service', 'process serving Coweta OK'],
    description: 'Professional process server services in Coweta with certified legal document delivery.',
    priority: 4
  },
  {
    name: 'Catoosa',
    county: 'Rogers County',
    zip: '74015',
    population: '8,000',
    features: ['Port of Catoosa', 'Industrial growth', 'Transportation hub', 'River commerce'],
    keywords: ['Catoosa process server', 'Rogers County process serving', 'legal documents Catoosa'],
    description: 'Catoosa process serving with professional legal document delivery throughout Rogers County.',
    priority: 5
  },
  {
    name: 'Bartlesville',
    county: 'Washington County',
    zip: '74003',
    population: '37,000',
    features: ['Oil industry heritage', 'Historic downtown', 'Cultural attractions', 'Business center'],
    keywords: ['Bartlesville process server', 'Washington County legal service', 'process serving Bartlesville OK'],
    description: 'Professional process serving in Bartlesville with reliable legal document delivery.',
    priority: 6
  },
  {
    name: 'Muskogee',
    county: 'Muskogee County', 
    zip: '74401',
    population: '38,000',
    features: ['Historic Three Forks area', 'Government center', 'Healthcare hub', 'Transportation junction'],
    keywords: ['Muskogee process server', 'Muskogee County legal service', 'process serving Muskogee OK'],
    description: 'Muskogee process server services with professional legal document delivery throughout eastern Oklahoma.',
    priority: 7
  },
  {
    name: 'Okmulgee',
    county: 'Okmulgee County',
    zip: '74447',
    population: '12,000',
    features: ['Oil capital heritage', 'Historic architecture', 'Small business center', 'Community focused'],
    keywords: ['Okmulgee process server', 'Okmulgee County legal service', 'process serving Okmulgee OK'],
    description: 'Professional process serving in Okmulgee with certified legal document delivery.',
    priority: 8
  },
  {
    name: 'Tahlequah', 
    county: 'Cherokee County',
    zip: '74464',
    population: '17,000',
    features: ['Cherokee Nation capital', 'University town', 'Cultural center', 'Historic significance'],
    keywords: ['Tahlequah process server', 'Cherokee County legal service', 'process serving Tahlequah OK'],
    description: 'Tahlequah process server services with professional legal document delivery throughout Cherokee County.',
    priority: 9
  },
  {
    name: 'Pryor',
    county: 'Mayes County',
    zip: '74361', 
    population: '9,000',
    features: ['Industrial center', 'Manufacturing hub', 'Transportation access', 'Growing economy'],
    keywords: ['Pryor process server', 'Mayes County legal service', 'process serving Pryor OK'],
    description: 'Professional process serving in Pryor with reliable legal document delivery throughout Mayes County.',
    priority: 10
  },
  {
    name: 'Skiatook',
    county: 'Tulsa County',
    zip: '74070',
    population: '8,000',
    features: ['Lake community', 'Residential growth', 'Small town charm', 'Outdoor recreation'],
    keywords: ['Skiatook process server', 'northern Tulsa County legal service', 'process serving Skiatook OK'],
    description: 'Skiatook process server services with professional legal document delivery in northern Tulsa County.',
    priority: 11
  }
];

// Get deployment status
const getDeploymentStatus = () => {
  const statusFile = path.join(process.cwd(), 'deployment-status.json');
  if (fs.existsSync(statusFile)) {
    return JSON.parse(fs.readFileSync(statusFile, 'utf8'));
  }
  return {
    deployed: [],
    nextIndex: 0,
    lastDeployment: null
  };
};

// Get next city to deploy
const getNextCity = () => {
  const status = getDeploymentStatus();
  
  if (status.nextIndex >= cityQueue.length) {
    console.log('All cities have been deployed!');
    return null;
  }
  
  return cityQueue[status.nextIndex];
};

// Main execution
const nextCity = getNextCity();

if (nextCity) {
  console.log(`::set-output name=city::${JSON.stringify(nextCity)}`);
  console.log(`Next city to deploy: ${nextCity.name}`);
} else {
  console.log('::set-output name=city::null');
  console.log('No more cities to deploy');
}
