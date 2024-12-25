import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Shield } from 'lucide-react';

export function SignUp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000); // Time decreased to 2 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100/50 to-white/60 dark:from-gray-900/50 dark:to-gray-800/70 flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 dark:opacity-20">
        <div className="circuit-pattern"></div>
      </div>

      <div className="max-w-md w-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-8 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-12 h-12 text-purple-600 dark:text-purple-400" />
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-2">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-300">Join us in securing the digital frontier</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 pl-10 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
              <User className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 pl-10 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
              <Mail className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 pl-10 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="Create a password"
              />
              <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type="password"
                className="w-full px-4 py-2 pl-10 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="Confirm your password"
              />
              <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 dark:hover:from-purple-600 dark:hover:to-indigo-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium">
            Sign in
          </Link>
        </p>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .circuit-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80h-80z' fill='none' stroke='%23purple' stroke-width='1'/%3E%3Cpath d='M30 30h40v40h-40z' fill='none' stroke='%23purple' stroke-width='1'/%3E%3Cpath d='M10 50h20M70 50h20M50 10v20M50 70v20' stroke='%23purple' stroke-width='1'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
