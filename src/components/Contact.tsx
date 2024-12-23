import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function Contact(): JSX.Element {
  return (
    <section className="relative py-16 bg-gradient-to-b from-purple-100 to-purple-50 dark:from-gray-900 dark:to-purple-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="संपर्क करें"
          title="Get in Touch"
          description="Have questions about our cybersecurity solutions? Our team is here to help protect your digital assets."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="How can we help secure your business?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
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

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave-parallax">
            <use href="#wave" x="48" y="0" fill="rgba(126, 34, 206, 0.7)" />
            <use href="#wave" x="48" y="3" fill="rgba(126, 34, 206, 0.5)" />
            <use href="#wave" x="48" y="5" fill="rgba(126, 34, 206, 0.3)" />
            <use href="#wave" x="48" y="7" fill="rgba(126, 34, 206, 0.2)" />
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
