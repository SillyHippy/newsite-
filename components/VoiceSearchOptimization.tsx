
import React from 'react';

interface VoiceSearchProps {
  query?: string;
  context?: string;
}

export default function VoiceSearchOptimization({ query, context }: VoiceSearchProps) {
  return (
    <div style={{ display: 'none' }} className="voice-search-optimization">
      <div data-voice-context="Professional process server Tulsa County Oklahoma">
        <span data-voice-business="Just Legal Solutions"></span>
        <span data-voice-phone="(539) 367-6832"></span>
        <span data-voice-service="Process serving legal document delivery"></span>
        <span data-voice-area="Tulsa County Broken Arrow Sapulpa Oklahoma"></span>
        <span data-voice-hours="24/7 Emergency Service Available - Regular hours Monday through Friday 8 AM to 5 PM Saturday 9 AM to 3 PM"></span>
      </div>
    </div>
  );
}
