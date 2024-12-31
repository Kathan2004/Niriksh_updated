import React, { useState } from 'react';
import { X, Globe, Code, Image, Shield, Database } from 'lucide-react';
import { Modal } from '../Modal';
import { WhoisPanel } from './panels/WhoisPanel';
import { HtmlPanel } from './panels/HtmlPanel';
import { ScreenshotPanel } from './panels/ScreenshotPanel';
import { LogosPanel } from './panels/LogosPanel';
import { DnsPanel } from './panels/DnsPanel';

interface AlertDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  alertData: {
    domain: string;
    whois: any;
    htmlCode: string;
    screenshot: string;
    logos: any;
    dns: any;
  };
}

const tabs = [
  { id: 'whois', label: 'Whois Details', icon: Globe },
  { id: 'html', label: 'HTML Code', icon: Code },
  { id: 'screenshot', label: 'Screenshot', icon: Image },
  { id: 'logos', label: 'Logos, Favicon', icon: Shield },
  { id: 'dns', label: 'DNS Details', icon: Database },
];

export function AlertDetailsModal({ isOpen, onClose, alertData }: AlertDetailsModalProps) {
  const [activeTab, setActiveTab] = useState('whois');

  const renderPanel = () => {
    switch (activeTab) {
      case 'whois':
        return <WhoisPanel data={alertData.whois} />;
      case 'html':
        return <HtmlPanel code={alertData.htmlCode} />;
      case 'screenshot':
        return <ScreenshotPanel image={alertData.screenshot} />;
      case 'logos':
        return <LogosPanel data={alertData.logos} />;
      case 'dns':
        return <DnsPanel data={alertData.dns} />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex h-[80vh]">
        {/* Left Sidebar */}
        <div className="w-64 border-r border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Alert Details
            </h2>
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 overflow-y-auto p-6">
          {renderPanel()}
        </div>
      </div>
    </Modal>
  );
}