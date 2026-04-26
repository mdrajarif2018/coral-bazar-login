/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  Github, 
  Chrome,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, just show an error if either field is empty
      if (!email || !password) {
        setIsError(true);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0d8d0] font-sans selection:bg-[#e0d8d0]/30 flex overflow-hidden selection:text-[#050505]">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1a1410] blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0d121a] blur-[120px] rounded-full opacity-50" />
      </div>

      {/* Subtle Side Accents (Desktop only) */}
      <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center space-y-4 opacity-20 pointer-events-none">
        <div className="w-[1px] h-20 bg-white"></div>
        <span className="rotate-180 text-[9px] uppercase tracking-[0.5em] font-medium whitespace-nowrap font-mono" style={{ writingMode: 'vertical-rl' }}>Established MMXXIV</span>
      </div>
      
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center space-y-4 opacity-20 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.5em] font-medium whitespace-nowrap font-mono" style={{ writingMode: 'vertical-rl' }}>Terminal UI v.2.0.4</span>
        <div className="w-[1px] h-20 bg-white"></div>
      </div>

      <main className="relative z-10 w-full flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md flex flex-col items-center"
        >
          {/* Header/Logo */}
          <div className="mb-12 text-center">
            <div className="inline-block p-3 border border-white/10 rounded-full mb-6">
              <div className="w-4 h-4 bg-white/80 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[42px] font-light leading-tight tracking-tight text-white mb-2 font-serif"
            >
              AETHERIA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[11px] uppercase tracking-[0.4em] text-white/40 font-medium"
            >
              Secure Environment
            </motion.p>
          </div>

          {/* Login Card */}
          <div className="w-full bg-[#0d0d0d] border border-white/5 rounded-2xl p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden group/card">
            {/* Subtle card glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <AnimatePresence>
                {isError && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-[11px] uppercase tracking-wider text-center"
                  >
                    Authentication Failure: Missing Credentials
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                {/* Email Field */}
                <div className="group border-b border-white/10 pb-2 focus-within:border-[#e0d8d0]/40 transition-colors">
                  <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-1 font-semibold">
                    Identifier
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-[15px] py-1 text-white placeholder-white/10 focus:ring-0 font-light"
                      placeholder="Enter your credentials"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="group border-b border-white/10 pb-2 focus-within:border-[#e0d8d0]/40 transition-colors">
                  <div className="flex justify-between items-baseline">
                    <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-1 font-semibold">
                      Security Key
                    </label>
                    <button type="button" className="text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-wider font-mono">
                      Forgot?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-[15px] py-1 text-white placeholder-white/10 focus:ring-0 font-mono tracking-widest"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-1 flex items-center text-white/20 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#e0d8d0] text-[#050505] rounded-full text-sm font-semibold uppercase tracking-[0.15em] hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative shadow-lg shadow-[#e0d8d0]/5"
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-3 h-3 border border-black/30 border-t-black rounded-full animate-spin" />
                      <span className="text-[10px]">Processing...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span>Authorize Entry</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>

            {/* Footer context within card */}
            <div className="mt-10 pt-8 border-t border-white/5 flex justify-between items-center">
              <span className="text-[11px] text-white/20">New to the platform?</span>
              <button className="text-[10px] uppercase tracking-widest text-[#e0d8d0] hover:underline underline-offset-8 decoration-[#e0d8d0]/30 transition-all">
                Request Access
              </button>
            </div>
          </div>

          {/* Social Logins - Styled to match theme */}
          <div className="mt-8 flex gap-4 w-full">
             <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/5 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all text-[11px] uppercase tracking-widest font-mono">
                <Github size={16} /> GitHub
             </button>
             <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/5 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all text-[11px] uppercase tracking-widest font-mono">
                <Chrome size={16} /> Google
             </button>
          </div>

          {/* Footer Metadata */}
          <div className="mt-12 flex items-center space-x-8 opacity-30 group cursor-default">
            <div className="text-center group-hover:opacity-100 transition-opacity">
              <p className="text-[8px] uppercase tracking-widest mb-1">Encrypted</p>
              <p className="text-[10px] font-mono">AES-256</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="text-center group-hover:opacity-100 transition-opacity">
              <p className="text-[8px] uppercase tracking-widest mb-1">Region</p>
              <p className="text-[10px] font-mono uppercase">AS-SE-1</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
