import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Shield } from 'lucide-react';

export function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100/50 to-white/60 dark:from-gray-900/50 dark:to-gray-800/70 flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="binary-rain"></div>
      </div>

      <div className="max-w-md w-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-8 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-12 h-12 text-purple-600 dark:text-purple-400" />
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mb-2">Welcome back</h2>
          <p className="text-gray-600 dark:text-gray-300">Secure your digital presence</p>
        </div>

        <form className="space-y-6">
          <div className="relative">
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
                placeholder="Enter your password"
              />
              <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <Link to="/forgot-password" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 dark:hover:from-purple-600 dark:hover:to-indigo-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium">
            Sign up
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

        .binary-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(0deg, transparent, rgba(123, 31, 162, 0.1));
          background-size: 100% 100%;
          animation: rain 20s linear infinite;
          transform: translateZ(0);
        }

        @keyframes rain {
          0% { background-position: 50% 0%; }
          100% { background-position: 50% 100%; }
        }
      `}</style>
    </div>
  );
}
