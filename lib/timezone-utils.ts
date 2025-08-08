// Central Standard Time utilities for Oklahoma business
// Just Legal Solutions operates in CST (America/Chicago timezone)

export const OKLAHOMA_TIMEZONE = 'America/Chicago';

export function getCurrentCST() {
  return new Date().toLocaleString('en-US', { 
    timeZone: OKLAHOMA_TIMEZONE 
  });
}

export function getCurrentCSTDate() {
  return new Date().toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: 'numeric', 
    timeZone: OKLAHOMA_TIMEZONE 
  });
}

export function getCurrentCSTTime() {
  return new Date().toLocaleTimeString('en-US', { 
    timeZone: OKLAHOMA_TIMEZONE,
    hour12: true 
  });
}

export function formatCSTBusinessHours() {
  const now = new Date();
  const cstTime = new Date(now.toLocaleString("en-US", { timeZone: OKLAHOMA_TIMEZONE }));
  
  return {
    currentTime: cstTime.toLocaleTimeString('en-US', { hour12: true }),
    currentDate: cstTime.toLocaleDateString('en-US'),
    isBusinessHours: isCSBusinessHours(cstTime),
    timezone: 'CST (Central Standard Time)',
    location: 'Tulsa, Oklahoma'
  };
}

export function isCSBusinessHours(date?: Date) {
  const checkDate = date || new Date();
  const cstTime = new Date(checkDate.toLocaleString("en-US", { timeZone: OKLAHOMA_TIMEZONE }));
  const hour = cstTime.getHours();
  const dayOfWeek = cstTime.getDay();
  
  // 24/7 emergency service available, but standard business hours are Mon-Fri 8-6
  // For SEO purposes, we show 24/7 availability
  return true; // Always available for emergency service
}

export function getCSTISOString() {
  const now = new Date();
  const cstTime = new Date(now.toLocaleString("en-US", { timeZone: OKLAHOMA_TIMEZONE }));
  return cstTime.toISOString().split('T')[0]; // YYYY-MM-DD format
}

// For schema markup business hours (24/7 emergency service)
export const CST_BUSINESS_HOURS = {
  monday: { opens: "00:00", closes: "23:59" },
  tuesday: { opens: "00:00", closes: "23:59" },
  wednesday: { opens: "00:00", closes: "23:59" },
  thursday: { opens: "00:00", closes: "23:59" },
  friday: { opens: "00:00", closes: "23:59" },
  saturday: { opens: "00:00", closes: "23:59" },
  sunday: { opens: "00:00", closes: "23:59" }
};

// Standard business hours for contact purposes
export const CST_STANDARD_HOURS = {
  monday: { opens: "08:00", closes: "18:00" },
  tuesday: { opens: "08:00", closes: "18:00" },
  wednesday: { opens: "08:00", closes: "18:00" },
  thursday: { opens: "08:00", closes: "18:00" },
  friday: { opens: "08:00", closes: "18:00" },
  saturday: { opens: "10:00", closes: "14:00" },
  sunday: { opens: "Emergency Only", closes: "Emergency Only" }
};
