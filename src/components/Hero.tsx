import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';
import { WaveAnimation } from './waves/WaveAnimation';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-12 md:py-20 bg-gradient-to-b from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/50 transition-colors">
        <div className="container mx-auto px-4 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-4">
              सुरक्षा हमारी प्राथमिकता
            </h3>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-purple-600 dark:text-purple-400 leading-tight">
              Because Your Digital Identity Matters
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Empowering Indian enterprises with cutting-edge cybersecurity solutions.
From tackling impersonations to executing red team simulations, we safeguard what matters most.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 mb-16">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transform hover:scale-105 transition-all"
              >
                Request Demo
              </button>
              <button 
                onClick={() => window.location.href = '/about'}
                className="px-8 py-3 bg-white border-2 border-purple-600 text-black-600 hover:bg-purple-50 rounded-lg transform hover:scale-105 transition-all"
              >
                Learn More
              </button>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 md:p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all hover:bg-purple-50 dark:hover:bg-purple-900/80">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Impersonation Protection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Prevent impersonation threats with advanced detection and monitoring.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 p-6 md:p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all hover:bg-purple-50 dark:hover:bg-purple-900/80">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Takedown Services</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Efficient removal of phishing websites and malicious content.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 p-6 md:p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all hover:bg-purple-50 dark:hover:bg-purple-900/80">
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
      <WaveAnimation color="rgb(243, 244, 246)" className="z-10 dark:hidden" />
      <WaveAnimation color="rgb(17, 24, 39)" className="z-10 hidden dark:block" />
    </section>
  );
}
