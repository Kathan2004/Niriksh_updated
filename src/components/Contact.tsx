import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function Contact(): JSX.Element {
  return (
    <section className="relative py-16 bg-gradient-to-b from-purple-100 to-purple-50 dark:from-gray-900 dark:to-purple-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="संपर्क करें"
          title="Get in Touch"
          description="Have questions about our cybersecurity solutions? Our team is here to help protect your digital assets."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-xl shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                  placeholder="राहुल शर्मा"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                  placeholder="rahul@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="How can we help secure your business?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a
                      href="mailto:sales@niriksh.com"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      sales@niriksh.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Loni Kalbhor, Pune<br />
                    Maharashtra, India
                  </p>
                </div>
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
          height: 15vh;
          margin-bottom: -7px;
          min-height: 100px;
          max-height: 150px;
        }
        
        .wave-parallax > use {
          animation: wave-move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .wave-parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
        .wave-parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
        .wave-parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
        .wave-parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
        
        @keyframes wave-move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
      `}</style>
    </section>
  );
}