'use client';

import { useEffect } from 'react';

export default function AdSenseBlock({ position = 'default', className = '' }) {
  // Ad positions: 'after-calculator', 'mid-content', 'mobile-sticky', 'sidebar'
  
  const adStyles = {
    'after-calculator': 'my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-[250px] flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600',
    'mid-content': 'my-6 p-4 bg-gray-50 dark:bg-gray-900 rounded min-h-[200px] flex items-center justify-center border border-gray-200 dark:border-gray-700',
    'mobile-sticky': 'fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg p-2 min-h-[100px] flex items-center justify-center border-t-2 border-gray-300 md:hidden',
    'sidebar': 'sticky top-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-[600px] flex items-center justify-center border border-gray-300 dark:border-gray-600',
    'default': 'my-4 p-4 bg-gray-100 dark:bg-gray-800 rounded min-h-[150px] flex items-center justify-center'
  };

  useEffect(() => {
    // Load AdSense script when component mounts
    // This will be automatically used when you get AdSense approval
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, []);

  return (
    <div className={`${adStyles[position] || adStyles.default} ${className}`} id={`ad-${position}`}>
      {/* Replace with actual AdSense code after approval */}
      {/* Example AdSense code structure:
      <ins className="adsbygoogle"
           style={{display:'block'}}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      */}
      
      <div className="text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Advertisement</p>
        <div className="text-gray-400 dark:text-gray-500 text-sm">
          [ AdSense Slot - {position} ]
        </div>
        <p className="text-xs text-gray-400 mt-2">Replace with actual AdSense code after approval</p>
      </div>
    </div>
  );
}
