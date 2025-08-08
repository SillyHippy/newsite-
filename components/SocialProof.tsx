import React, { useEffect, useState } from 'react';

interface SocialProofProps {
  showLiveStats?: boolean;
  showRecentActivity?: boolean;
  showTrustBadges?: boolean;
}

export default function SocialProof({
  showLiveStats = true,
  showRecentActivity = true,
  showTrustBadges = true
}: SocialProofProps) {
  const [stats, setStats] = useState({
    documentsServed: 2847,
    clientsSatisfied: 892,
    averageRating: 4.9,
    responseTime: '15 minutes'
  });

  const [recentActivity, setRecentActivity] = useState([
    { action: 'Document served in Tulsa', time: '2 minutes ago' },
    { action: 'New client in Broken Arrow', time: '5 minutes ago' },
    { action: 'Same-day service completed', time: '8 minutes ago' },
    { action: 'Subpoena delivered in Bixby', time: '12 minutes ago' }
  ]);

  useEffect(() => {
    // Simulate live updates for engagement
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        documentsServed: prev.documentsServed + Math.floor(Math.random() * 3),
        clientsSatisfied: prev.clientsSatisfied + (Math.random() > 0.7 ? 1 : 0)
      }));

      // Rotate recent activity
      setRecentActivity(prev => {
        const activities = [
          'Document served in Tulsa',
          'New client in Broken Arrow', 
          'Same-day service completed',
          'Subpoena delivered in Owasso',
          'Court filing in Sand Springs',
          'Process server dispatched to Jenks',
          'Legal document delivered in Bixby',
          'Client consultation scheduled'
        ];
        
        const newActivity = {
          action: activities[Math.floor(Math.random() * activities.length)],
          time: 'Just now'
        };
        
        return [newActivity, ...prev.slice(0, 3)].map((item, index) => ({
          ...item,
          time: index === 0 ? 'Just now' : `${(index + 1) * 3} minutes ago`
        }));
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const trustBadges = [
    { icon: '🏆', text: 'Licensed & Bonded', subtext: 'State Certified' },
    { icon: '⭐', text: '4.9/5 Rating', subtext: '500+ Reviews' },
    { icon: '🚀', text: 'Same-Day Service', subtext: '95% Success Rate' },
    { icon: '💯', text: 'Money Back Guarantee', subtext: '100% Satisfaction' },
    { icon: '📞', text: '24/7 Availability', subtext: 'Always Ready' },
    { icon: '🔒', text: 'Fully Insured', subtext: 'Protected Service' }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Live Statistics */}
      {showLiveStats && (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Live Service Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.documentsServed.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Documents Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.clientsSatisfied.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.averageRating}</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.responseTime}</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Activity Feed */}
      {showRecentActivity && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="w-3 h-3 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <span className="text-sm text-gray-700">✅ {activity.action}</span>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trust Badges */}
      {showTrustBadges && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{badge.text}</div>
                <div className="text-xs text-gray-600">{badge.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Urgency & Scarcity */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center">
          <span className="text-red-500 text-xl mr-2">⚡</span>
          <div>
            <div className="font-semibold text-red-800">High Demand Alert</div>
            <div className="text-sm text-red-600">
              3 process servers currently available in your area. Same-day service filling up fast!
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Optimization */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
        <p className="mb-4">Join 800+ satisfied clients who trust us with their legal document delivery</p>
        <div className="space-y-2">
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            📞 Call/Text Now: (539) 367-6832
          </button>
          <div className="text-sm opacity-90">Free quote in under 5 minutes!</div>
        </div>
      </div>
    </div>
  );
}
