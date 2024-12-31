import React from 'react';
import { useParams } from 'react-router-dom';
import { TakedownAssetSummary } from '../../components/takedowns/TakedownAssetSummary';
import { TakedownConversation } from '../../components/takedowns/TakedownConversation';
import { TakedownActivityLog } from '../../components/takedowns/TakedownActivityLog';

// Mock data
const mockAsset = {
  id: 'TD-2024-001',
  domain: 'example-phish.com',
  type: 'Phishing',
  status: 'Active',
  priority: 'High',
  requestedBy: 'Karad',
  requestedDate: '2024-03-20',
  hostingProvider: 'Example Hosting',
  ipAddress: '192.168.1.1'
};

const mockMessages = [
  {
    id: 1,
    content: 'Identified suspicious phishing activity on this domain.',
    sender: 'Sahil',
    role: 'admin' as const,
    timestamp: '2024-03-20 14:30'
  },
  {
    id: 2,
    content: 'Initiating takedown process. Please provide additional evidence.',
    sender: ' Admin',
    role: 'superadmin' as const,
    timestamp: '2024-03-20 14:35'
  }
];

const mockActivities = [
  {
    id: 1,
    action: 'Takedown Request Created',
    user: 'Karad',
    timestamp: '2024-03-20 14:30',
    details: 'Initial takedown request submitted for domain example-phish.com'
  },
  {
    id: 2,
    action: 'Evidence Collection',
    user: 'Sarah Admin',
    timestamp: '2024-03-20 14:35',
    details: 'Additional evidence requested for takedown verification'
  }
];

export function TakedownAssetDetails() {
  const { id } = useParams();

  const handleSendMessage = (content: string) => {
    console.log('Sending message:', content);
    // Implement message sending logic
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Asset Summary - Left Column */}
        <div className="lg:col-span-3">
          <TakedownAssetSummary asset={mockAsset} />
        </div>

        {/* Conversation - Middle Column */}
        <div className="lg:col-span-5">
          <TakedownConversation 
            messages={mockMessages}
            onSendMessage={handleSendMessage}
          />
        </div>

        {/* Activity Log - Right Column */}
        <div className="lg:col-span-4">
          <TakedownActivityLog activities={mockActivities} />
        </div>
      </div>
    </div>
  );
}