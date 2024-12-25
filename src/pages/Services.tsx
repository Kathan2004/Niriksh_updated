import React from 'react';
import { Shield, Lock, Server, Globe, Bell, Users } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Link } from 'react-router-dom'; // Correct import of Link

const services = [
  {
    icon: Shield,
    title: 'Impersonation Protection',
    description:
      'Advanced AI systems to detect and mitigate impersonation attacks across digital platforms, protecting your brand and users.',
    features: [
      'Real-time impersonation detection',
      'Automated response system',
      'Brand reputation protection',
      'Cross-platform protection',
    ],
  },
  {
    icon: Lock,
    title: 'Takedown Services',
    description:
      'Specialized takedown services for identifying and removing malicious content, phishing sites, and unauthorized use of your intellectual property.',
    features: [
      'Phishing site removal',
      'Content removal from malicious websites',
      'Intellectual property protection',
      '24/7 monitoring for new threats',
    ],
  },
  {
    icon: Server,
    title: 'Data Privacy Protection',
    description:
      'Robust solutions to safeguard your sensitive data and ensure compliance with global privacy regulations.',
    features: [
      'End-to-end data encryption',
      'Secure storage solutions',
      'GDPR and CCPA compliance',
      'Data breach response',
    ],
  },
  {
    icon: Globe,
    title: 'Anti-Phishing & Fraud Prevention',
    description:
      'Cutting-edge technology to identify and prevent phishing attacks, fraudulent transactions, and identity theft.',
    features: [
      'Email phishing detection',
      'SMS and voice phishing protection',
      'Fraudulent transaction monitoring',
      'Real-time alerts and response',
    ],
  },
  {
    icon: Bell,
    title: 'Continuous Security Monitoring',
    description:
      'Round-the-clock security monitoring of your digital assets to detect and respond to threats swiftly.',
    features: [
      '24/7 threat monitoring',
      'Automated incident response',
      'Threat intelligence feeds',
      'Security analytics and reporting',
    ],
  },
  {
    icon: Users,
    title: 'Cybersecurity Consulting',
    description:
      'Expert consulting services to help organizations develop and maintain effective cybersecurity strategies.',
    features: [
      'Security audits',
      'Vulnerability assessments',
      'Risk management',
      'Compliance consulting',
    ],
  },
];

export function Services() {
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
          subtitle="OUR SERVICES"
          title="Comprehensive Cybersecurity Solutions"
          description="Protect your digital assets from impersonation, phishing, and other cyber threats with our specialized services"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {services.map((service, index) => (
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
                  <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-col gap-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-2.5 h-2.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-600 dark:bg-purple-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-purple-100 mb-6">
            Every organization has unique security needs. Contact us to discuss your requirements and get a tailored solution.
          </p>
          <Link to="/contact">
            <button className="bg-white dark:bg-purple-800 text-purple-600 dark:text-white px-6 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-700 transition-colors">
              Get in Touch
            </button>
          </Link>
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
