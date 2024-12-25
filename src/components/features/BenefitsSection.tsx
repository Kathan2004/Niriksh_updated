import React from 'react';
import { Shield, Bell, Monitor, Clock, Scale, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureGrid } from './FeatureGrid';

const benefits = [
  {
    icon: Shield,
    title: 'Phishing Protection',
    description: 'Advanced detection and prevention of sophisticated phishing attempts targeting your brand.'
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    description: 'Real-time notification system for immediate awareness of potential security threats.'
  },
  {
    icon: Monitor,
    title: 'Visual Analytics',
    description: 'Comprehensive security dashboards with actionable insights and trends.'
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Swift incident response system with automated threat containment.'
  },
  {
    icon: Scale,
    title: 'Scalable Security',
    description: 'Flexible security solutions that grow alongside your business needs.'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Robust encryption and security measures safeguarding sensitive information.'
  }
];

export function BenefitsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-purple-900/50 dark:to-gray-900/50 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-4">
            Key Benefits
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover how our comprehensive security solutions protect and empower your business
          </p>
        </motion.div>

        <FeatureGrid features={benefits} />
      </div>
    </section>
  );
}