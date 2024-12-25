import React from 'react';
import { Shield, Zap, Lock, Bell, Cloud, Users } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

const features = [
  {
    icon: Shield,
    title: 'Advanced Threat Protection',
    description:
      'AI-powered security system that detects and prevents sophisticated cyber attacks in real-time.',
    benefits: [
      'Real-time threat detection',
      'Automated response system',
      'Behavioral analysis',
      'Zero-day protection',
    ],
  },
  {
    icon: Zap,
    title: 'Quick Response Time',
    description:
      'Lightning-fast incident response system that minimizes the impact of security breaches.',
    benefits: [
      'Instant alerts',
      'Automated containment',
      'Rapid recovery',
      'Incident analysis',
    ],
  },
  {
    icon: Lock,
    title: 'Secure Authentication',
    description:
      'Multi-layer authentication system to ensure only authorized access to your systems.',
    benefits: [
      'Multi-factor authentication',
      'Biometric security',
      'Single sign-on',
      'Access management',
    ],
  },
  {
    icon: Bell,
    title: '24/7 Monitoring',
    description:
      'Round-the-clock security monitoring to keep your systems protected at all times.',
    benefits: [
      'Continuous monitoring',
      'Real-time alerts',
      'Performance tracking',
      'Security analytics',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description:
      'Comprehensive cloud security solutions for your applications and data.',
    benefits: [
      'Cloud firewall',
      'Data encryption',
      'Access control',
      'Compliance management',
    ],
  },
  {
    icon: Users,
    title: 'Expert Support',
    description:
      'Dedicated team of security experts available 24/7 to assist you.',
    benefits: [
      'Technical support',
      'Security consulting',
      'Training programs',
      'Regular updates',
    ],
  },
];

export function Features() {
  return (
    <div className="relative py-16 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/50">
      {/* Curved Boundary */}
      <div className="absolute inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="rgb(126 34 206)"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center bg-white/10 dark:bg-gray-900/30 backdrop-blur-md rounded-3xl p-6 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Decorative Border Animation */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Inner Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-200/20 dark:bg-purple-700/40 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-col gap-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-2.5 h-2.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
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
