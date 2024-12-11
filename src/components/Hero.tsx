import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';
import { WaveAnimation } from './waves/WaveAnimation';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-12 md:py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900 transition-colors">
        <div className="container mx-auto px-4 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-4 animate-fade-in">सुरक्षा हमारी प्राथमिकता</h3>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-purple-600 dark:text-purple-400 leading-tight">
              Because Your Digital Identity Matters
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Empowering Indian businesses with next-generation cybersecurity solutions. 
              From startups to enterprises, we protect what matters most.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Advanced Protection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  AI-powered threat detection and response system built for Indian enterprises
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">24/7 Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Round-the-clock security operations center staffed by expert analysts
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Compliance Ready</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Built to meet Indian data protection and privacy regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40 md:h-56"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-purple-50 dark:text-gray-900"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      </div>
      
      <WaveAnimation 
        color="rgb(243, 244, 246)" 
        className="z-10 dark:hidden" 
        variant="hero" 
      />
      <WaveAnimation 
        color="rgb(17, 24, 39)" 
        className="z-10 hidden dark:block" 
        variant="hero" 
      />
    </section>
  );
}