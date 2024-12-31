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
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-purple-900/50 dark:to-gray-900/50 backdrop-blur-sm">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-30 animate-slide bg-repeat"></div>
      </div>
      
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
            Discover how our comprehensive security solutions protect and empower your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="group h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-800 p-0.5">
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[10px] flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
