import React, { useState } from 'react';
import { Shield, Target, Cpu, Globe, Eye } from 'lucide-react';

const features = [
  {
    id: 'industry-expertise',
    title: 'Industry Expertise',
    icon: Shield,
    description: 'We understand the unique challenges and opportunities of your industry, providing tailored cybersecurity solutions that resonate with Indian businesses.',
    points: [
      'Specialized solutions for different sectors',
      'Deep understanding of Indian market',
      'Compliance with local regulations',
      'Industry-specific threat intelligence'
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'detection-accuracy',
    title: 'Detection Accuracy',
    icon: Target,
    description: 'Our AI-powered detection system achieves unprecedented accuracy in identifying threats, minimizing false positives while ensuring no genuine threats slip through.',
    points: [
      '99.9% threat detection accuracy',
      'AI-powered analysis',
      'Real-time threat assessment',
      'Minimal false positives'
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'automation-copilot',
    title: 'Automation Copilot',
    icon: Cpu,
    description: 'Our intelligent automation system works alongside your team, handling routine tasks and enabling your security experts to focus on strategic decisions.',
    points: [
      'Automated threat response',
      'Smart workflow automation',
      'Intelligent task prioritization',
      'Seamless integration capabilities'
    ],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'browser-infrastructure',
    title: 'Browser Infrastructure',
    icon: Globe,
    description: 'Built on cutting-edge browser technology, our infrastructure provides seamless protection across all web-based threats and applications.',
    points: [
      'Advanced browser protection',
      'Cross-platform compatibility',
      'Zero-day threat prevention',
      'Secure browsing environment'
    ],
    image: "https://images.unsplash.com/photo-1558494944-9f5578f707d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'continuous-visibility',
    title: 'Continuous Visibility',
    icon: Eye,
    description: 'Maintain complete visibility over your security landscape with our comprehensive monitoring and reporting system.',
    points: [
      '24/7 security monitoring',
      'Real-time threat visualization',
      'Comprehensive reporting',
      'Security posture assessment'
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function WhyChooseUs() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4">
            Why Choose निरीक्ष for Your Security?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            In today's connected world, cybersecurity is more than protection—it's empowerment.
          </p>
        </div>
        
        <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-8">
          <div className="grid md:grid-cols-12 gap-6">
            {/* Sidebar Navigation */}
            <div className="md:col-span-4 lg:col-span-3 space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                    selectedFeature.id === feature.id 
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <feature.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{feature.title}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="md:col-span-8 lg:col-span-9 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <selectedFeature.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedFeature.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedFeature.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {selectedFeature.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="relative h-64 overflow-hidden rounded-lg">
                  <img
                    src={selectedFeature.image}
                    alt={selectedFeature.title}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}