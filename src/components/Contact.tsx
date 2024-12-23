import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { WaveAnimation } from './waves/WaveAnimation';

export function Contact(): JSX.Element {
  return (
    <section className="py-16 bg-purple-50 dark:bg-gray-900 transition-colors relative overflow-hidden pb-36">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="संपर्क करें"
          title="Get in Touch"
          description="Have questions about our cybersecurity solutions? Our team is here to help protect your digital assets."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
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

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 dark:text-white">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@niriksh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    sales@niriksh.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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

      <WaveAnimation color="rgb(126 34 206)" className="z-10" />
    </section>
  );
}
