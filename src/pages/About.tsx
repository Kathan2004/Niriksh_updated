import React from 'react';
import { Shield, Users, Target, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About निरीक्ष</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering Indian businesses with next-generation cybersecurity solutions since 2020.
            We're committed to protecting your digital assets with cutting-edge technology and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At निरीक्ष, we're on a mission to revolutionize cybersecurity for Indian businesses.
              We combine advanced AI technology with deep industry expertise to provide unmatched
              protection against evolving cyber threats.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">5+</h3>
                <p className="text-gray-600 dark:text-gray-300">Clients Protected</p>
              </div>
              <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">86.7 % </h3>
                <p className="text-gray-600 dark:text-gray-300">Threat Detection</p>
              </div>
              <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">24/7</h3>
                <p className="text-gray-600 dark:text-gray-300">Support</p>
              </div>
              <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">10+</h3>
                <p className="text-gray-600 dark:text-gray-300">Expert Team</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="Cybersecurity"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f"
              alt="Team"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Technology"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Office"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Shield className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Advanced Protection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              State-of-the-art security measures to protect your digital assets
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Skilled professionals with years of cybersecurity experience
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Target className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Precise Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailored security solutions for your specific needs
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Globe className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Standards</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Following international security best practices
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Constantly evolving our solutions to stay ahead of threats
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building trust through transparent and ethical practices
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Delivering exceptional service and results consistently
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}