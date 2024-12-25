import React from 'react';
import { Shield, Bell, Monitor, Clock, Scale, Lock } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const benefits = [
  {
    icon: Shield,
    title: 'Phishing Websites',
    description:
      'We identify and alert you about deceptive websites that masquerade as your brand, aiming to deceive your customers and tarnish your image.'
  },
  {
    icon: Bell,
    title: 'Real-Time Threat Detection',
    description:
      'Our advanced system identifies and responds to threats instantly, minimizing risks before they escalate into significant problems.'
  },
  {
    icon: Monitor,
    title: 'Comprehensive Monitoring',
    description:
      'Round-the-clock monitoring ensures complete visibility into your network, keeping you informed and secure at all times.'
  },
  {
    icon: Clock,
    title: 'Rapid Incident Response',
    description:
      'When incidents occur, our team acts swiftly to contain and resolve them, minimizing downtime and damage.'
  },
  {
    icon: Scale,
    title: 'Scalable Solutions',
    description:
      'Designed to grow with your business, our flexible security solutions adapt to meet evolving needs and challenges.'
  },
  {
    icon: Lock,
    title: 'Data Privacy Assurance',
    description:
      'Protecting sensitive information is our top priority, ensuring compliance and safeguarding your trust.'
  }
];

export function Benefits() {
  return (
    <>
      {/* Title Section */}
      <div className="text-center relative z-10 mb-12">
        <SectionHeader
          subtitle="निरीक्ष BENEFITS"
          title="Fully Automated And Secure"
          description="In today's connected world, cybersecurity is more than protection—it's empowerment."
        />
      </div>

      {/* Benefits Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-white/60 to-purple-50/60 dark:from-gray-800/50 dark:to-gray-900/50 p-6 rounded-3xl shadow-xl backdrop-blur-lg transform hover:scale-[1.03] transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
