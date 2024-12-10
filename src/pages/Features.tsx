import React from 'react';
import { Shield, Zap, Lock, Bell, Cloud, Users } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

const features = [
  {
    icon: Shield,
    title: 'Advanced Threat Protection',
    description: 'AI-powered security system that detects and prevents sophisticated cyber attacks in real-time.',
    benefits: [
      'Real-time threat detection',
      'Automated response system',
      'Behavioral analysis',
      'Zero-day protection'
    ]
  },
  {
    icon: Zap,
    title: 'Quick Response Time',
    description: 'Lightning-fast incident response system that minimizes the impact of security breaches.',
    benefits: [
      'Instant alerts',
      'Automated containment',
      'Rapid recovery',
      'Incident analysis'
    ]
  },
  {
    icon: Lock,
    title: 'Secure Authentication',
    description: 'Multi-layer authentication system to ensure only authorized access to your systems.',
    benefits: [
      'Multi-factor authentication',
      'Biometric security',
      'Single sign-on',
      'Access management'
    ]
  },
  {
    icon: Bell,
    title: '24/7 Monitoring',
    description: 'Round-the-clock security monitoring to keep your systems protected at all times.',
    benefits: [
      'Continuous monitoring',
      'Real-time alerts',
      'Performance tracking',
      'Security analytics'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Comprehensive cloud security solutions for your applications and data.',
    benefits: [
      'Cloud firewall',
      'Data encryption',
      'Access control',
      'Compliance management'
    ]
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team of security experts available 24/7 to assist you.',
    benefits: [
      'Technical support',
      'Security consulting',
      'Training programs',
      'Regular updates'
    ]
  }
];

export function Features() {
  return (
    <div className="relative py-16 bg-white dark:bg-gray-900">
      {/* Curved Boundary */}
      <div className="absolute inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="rgb(126 34 206)" // Purple shade for the wave
            className="wave-path"
            d="M0,256L48,224C96,192,192,128,288,106.7C384,85,480,107,576,128C672,149,768,171,864,186.7C960,203,1056,213,1152,186.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          subtitle="KEY FEATURES"
          title="Powerful Security Features"
          description="Discover the advanced features that make our security solutions stand out"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Animation */}
      <style jsx>{`
        .wave-path {
          animation: waveMotion 4s ease-in-out infinite;
        }

        @keyframes waveMotion {
          0% {
            d: path("M0,256L48,224C96,192,192,128,288,106.7C384,85,480,107,576,128C672,149,768,171,864,186.7C960,203,1056,213,1152,186.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
          }
          50% {
            d: path("M0,256L48,224C96,192,192,128,288,106.7C384,85,480,107,576,138.7C672,169,768,191,864,206.7C960,223,1056,233,1152,206.7C1248,180,1344,116,1392,84L1440,52L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
          }
          100% {
            d: path("M0,256L48,224C96,192,192,128,288,106.7C384,85,480,107,576,128C672,149,768,171,864,186.7C960,203,1056,213,1152,186.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
          }
        }
      `}</style>
    </div>
  );
}