import React, { useState, useEffect } from 'react';
import { ArrowUp, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMinimized(false); // Reset minimized state when hiding
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 md:hidden">
      {isMinimized ? (
        // Minimized state - small button
        <button
          onClick={toggleMinimize}
          className="w-12 h-12 bg-primary-red text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
          aria-label="Expand business setup form"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      ) : (
        // Expanded state - full CTA
        <div className="bg-primary-red text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-4 max-w-xs">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h4 className="font-semibold text-sm mb-1">Ready to Start?</h4>
              <p className="text-xs text-red-100">Get your UAE business setup quote</p>
            </div>
            <button
              onClick={toggleMinimize}
              className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center ml-2 flex-shrink-0"
              aria-label="Minimize"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          
          <button
            onClick={scrollToContact}
            className="w-full bg-white text-primary-red py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm"
          >
            Start Your Business
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;