import React from 'react';
import { Lock, Server, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MobileHero() {
  return (
    <section className="relative pt-8 pb-20 px-6 bg-gradient-to-b from-gray-100 to-purple-50 dark:from-gray-900 dark:to-purple-900 overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-purple-600 dark:text-purple-400 font-medium mb-2">सुरक्षा हमारी प्राथमिकता</h3>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-snug mb-4">
          Secure Your Digital <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Future
          </span>
        </h1>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 max-w-sm mx-auto">
          Empowering Indian businesses with advanced cybersecurity solutions tailored to safeguard what matters most.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-all"
          >
            Request Demo
          </Link>
          <Link
            to="/about"
            className="border border-purple-600 text-purple-600 dark:text-purple-400 px-5 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 dark:hover:bg-gray-800 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <ShieldAlert className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Impersonation Takedown</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Remove threats before they harm your reputation.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <Lock className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">24/7 Monitoring</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Proactive protection around the clock.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <Server className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Scalable Security</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Solutions built to grow with your business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
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
          position: absolute;
          width: 100%;
          height: 10vh;
          min-height: 80px;
          max-height: 100px;
        }
        .wave-parallax > use {
          animation: wave-move 15s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        }
        .wave-parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 10s;
        }
        .wave-parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 12s;
        }
        .wave-parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 15s;
        }
        .wave-parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 18s;
        }
        @keyframes wave-move {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
