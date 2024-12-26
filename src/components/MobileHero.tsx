import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';

export function MobileHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-12 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/50 transition-colors">
        <div className="container mx-auto px-4 pb-32">
          <div className="text-center max-w-full">
            <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-4 text-sm md:text-base">
              सुरक्षा हमारी प्राथमिकता
            </h3>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400 leading-tight">
              Because Your Digital Identity Matters
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-full md:max-w-2xl mx-auto">
              Empowering Indian enterprises with cutting-edge cybersecurity solutions.
From tackling impersonations to executing red team simulations, we safeguard what matters most.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transform hover:scale-105 transition-all w-full sm:w-auto"
              >
                Request Demo
              </button>
              <button 
                onClick={() => window.location.href = '/about'}
                className="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transform hover:scale-105 transition-all w-full sm:w-auto"
                style={{ color: '#6b21a8' }}  // Ensure text is visible on all backgrounds
              >
                Learn More
              </button>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 gap-6 mt-8 md:mt-16">
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all hover:bg-purple-50 dark:hover:bg-purple-900/80">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Impersonation Protection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Prevent impersonation threats with advanced detection and monitoring.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all hover:bg-purple-50 dark:hover:bg-purple-900/80">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Takedown Services</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Efficient removal of phishing websites and malicious content.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all hover:bg-purple-50 dark:hover:bg-purple-900/80">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">24/7 Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Round-the-clock protection for your business assets.
                </p>
              </div>
            </div>
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
