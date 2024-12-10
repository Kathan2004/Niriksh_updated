import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MobileHero() {
  return (
    <section className="pt-6 pb-16 px-4 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="text-center mb-8">
        <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-2">सुरक्षा हमारी प्राथमिकता</h3>
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
          Secure Your Digital Future
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Protecting Indian businesses with next-generation cybersecurity solutions.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            to="/contact"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="border border-purple-600 text-purple-600 dark:text-purple-400 px-6 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Advanced Protection</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">AI-powered threat detection</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">24/7 Monitoring</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Round-the-clock security</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Compliance Ready</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Meet regulatory standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}