'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    try {
      const consent = localStorage.getItem('nch_cookie_consent');
      if (!consent) {
        // Slight delay for smooth visual appearance
        const timer = setTimeout(() => {
          setShowBanner(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if localStorage is inaccessible
      setShowBanner(false);
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('nch_cookie_consent', 'accepted');
    } catch {
      // Ignore storage errors
    }
    setShowBanner(false);
  };

  const handleDeclineNonEssential = () => {
    try {
      localStorage.setItem('nch_cookie_consent', 'essential_only');
    } catch {
      // Ignore storage errors
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside 
      role="region" 
      aria-label="Cookie consent banner" 
      className="fixed bottom-0 inset-x-0 z-[999] p-4 sm:p-6 transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl border border-gray-200/90 rounded-2xl sm:rounded-3xl shadow-2xl shadow-gray-900/15 p-5 sm:p-6 md:p-7">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
          {/* Left: Text & Icon */}
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex flex-shrink-0 w-11 h-11 rounded-2xl bg-primary-50 text-primary-600 items-center justify-center border border-primary-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 13v.01" />
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                We value your privacy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                NextCodeHub uses cookies and similar technologies to enhance site navigation, analyze calculator usage, and support our free tools through personalized Google AdSense advertising. You can accept all cookies or choose essential cookies only. Read our{' '}
                <Link 
                  href="/cookie-policy" 
                  className="font-medium text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors"
                >
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link 
                  href="/privacy-policy" 
                  className="font-medium text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={handleDeclineNonEssential}
              className="px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold text-sm transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm shadow-md shadow-primary-600/20 hover:shadow-lg transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
