import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';

export function MobileHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-30 animate-slide bg-repeat"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="text-center max-w-full">
          <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-4 animate-fade-in text-sm">
            सुरक्षा हमारी प्राथमिकता
          </h3>
          <h1 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400 leading-tight animate-slide-up">
            Because Your Digital Identity Matters
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            Empowering Indian businesses with next-generation cybersecurity solutions.
          </p>

          <div className="flex flex-col gap-4 items-center mb-12 animate-fade-in-delay-2">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="w-full max-w-xs px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transform hover:scale-105 transition-all"
            >
              Request Demo
            </button>
            <button 
              onClick={() => window.location.href = '/about'}
              className="w-full max-w-xs px-6 py-3 bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transform hover:scale-105 transition-all"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-fade-in-delay-3">
            {[ 
              { 
                icon: Shield, 
                title: 'Impersonation Protection', 
                desc: 'Prevent impersonation threats with advanced detection and monitoring.' 
              },
              { 
                icon: Lock, 
                title: 'Takedown Services', 
                desc: 'Efficient removal of phishing websites and malicious content.' 
              },
              { 
                icon: Server, 
                title: '24/7 Monitoring', 
                desc: 'Round-the-clock protection for your business assets.' 
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all hover:bg-purple-50 dark:hover:bg-purple-900/80 border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave-parallax">
            <use href="#wave" x="48" y="0" fill="rgba(147, 51, 234, 0.7)" />
            <use href="#wave" x="48" y="3" fill="rgba(147, 51, 234, 0.5)" />
            <use href="#wave" x="48" y="5" fill="rgba(147, 51, 234, 0.3)" />
            <use href="#wave" x="48" y="7" fill="rgba(147, 51, 234, 0.2)" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .waves {
          position: relative;
          width: 100%;
          height: 12vh;
          margin-bottom: -5px;
          min-height: 80px;
          max-height: 120px;
        }

        .wave-parallax > use {
          animation: wave-move-forever 20s cubic-bezier(.55,.5,.45,.5) infinite;
        }

        .wave-parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 6s; }
        .wave-parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 9s; }
        .wave-parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 12s; }
        .wave-parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 18s; }

        @keyframes wave-move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.9s both;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
