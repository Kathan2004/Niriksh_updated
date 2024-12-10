import React from 'react';
import { Shield, Lock, Server, Globe, Bell, Database } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Link } from 'react-router-dom'; // Correct import of Link

const services = [
  {
    icon: Shield,
    title: 'Threat Detection & Response',
    description: 'AI-powered system that identifies and neutralizes threats in real-time, providing comprehensive protection for your digital assets.',
    features: ['24/7 Monitoring', 'Automated Response', 'Threat Intelligence', 'Incident Analysis']
  },
  {
    icon: Lock,
    title: 'Access Management',
    description: 'Secure identity and access management solutions to protect your resources from unauthorized access and potential breaches.',
    features: ['Multi-factor Authentication', 'Role-based Access', 'Single Sign-On', 'Access Auditing']
  },
  {
    icon: Server,
    title: 'Cloud Security',
    description: 'Comprehensive cloud security solutions to protect your applications and data across multiple cloud platforms.',
    features: ['Cloud Firewall', 'Data Encryption', 'Container Security', 'Compliance Management']
  },
  {
    icon: Globe,
    title: 'Network Security',
    description: 'Advanced network security solutions to protect your infrastructure from external and internal threats.',
    features: ['Firewall Management', 'VPN Services', 'Network Monitoring', 'Intrusion Prevention']
  },
  {
    icon: Bell,
    title: 'Security Monitoring',
    description: 'Continuous monitoring of your security infrastructure to detect and respond to potential threats.',
    features: ['Real-time Alerts', 'Performance Monitoring', 'Security Analytics', 'Custom Dashboards']
  },
  {
    icon: Database,
    title: 'Data Protection',
    description: 'Comprehensive data protection solutions to secure your sensitive information and maintain compliance.',
    features: ['Data Encryption', 'Backup Solutions', 'DLP', 'Compliance Tools']
  }
];

export function Services() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="OUR SERVICES"
          title="Comprehensive Security Solutions"
          description="Protecting your digital assets with cutting-edge cybersecurity services"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-purple-50 dark:bg-gray-800 rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-600 dark:bg-purple-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-purple-100 mb-6">
            We understand that every business has unique security needs. Contact us to discuss your requirements.
          </p>
          <Link to="/contact">
            <button className="bg-white dark:bg-purple-800 text-purple-600 dark:text-white px-6 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-700 transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}