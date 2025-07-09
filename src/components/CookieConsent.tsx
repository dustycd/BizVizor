import React, { useState, useEffect } from 'react';
import { Cookie, X, CheckCircle, Settings, Shield, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
    
    // Initialize analytics and other services here
    initializeServices(allAccepted);
  };

  const handleAcceptSelected = () => {
    const selectedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(selectedPreferences));
    setIsVisible(false);
    
    // Initialize only selected services
    initializeServices(selectedPreferences);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true, // Necessary cookies cannot be rejected
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(rejected));
    setIsVisible(false);
  };

  const initializeServices = (consent: any) => {
    // Initialize Google Analytics if analytics cookies are accepted
    if (consent.analytics) {
      // Add Google Analytics initialization code here
      console.log('Analytics cookies accepted - initializing tracking');
    }
    
    // Initialize marketing tools if marketing cookies are accepted
    if (consent.marketing) {
      // Add marketing tools initialization code here
      console.log('Marketing cookies accepted - initializing marketing tools');
    }
    
    // Initialize functional tools if functional cookies are accepted
    if (consent.functional) {
      // Add functional tools initialization code here
      console.log('Functional cookies accepted - initializing functional tools');
    }
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Cannot change necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      id: 'necessary' as keyof CookiePreferences,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      icon: Shield,
      required: true
    },
    {
      id: 'functional' as keyof CookiePreferences,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
      icon: Settings,
      required: false
    },
    {
      id: 'analytics' as keyof CookiePreferences,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      icon: Eye,
      required: false
    },
    {
      id: 'marketing' as keyof CookiePreferences,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant advertisements.',
      icon: CheckCircle,
      required: false
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-end justify-center p-3 sm:p-4">
      {/* Backdrop - removed blur for better performance */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Cookie Banner - Made smaller and more mobile-friendly */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg sm:max-w-2xl max-h-[85vh] overflow-hidden">
        {/* Header - Made more compact */}
        <div className="bg-gradient-to-r from-primary-navy to-blue-700 text-white p-4 sm:p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <Cookie className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold mb-1">Cookie Preferences</h2>
                <p className="text-blue-100 text-xs sm:text-sm">
                  We use cookies to enhance your browsing experience.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors ml-2 flex-shrink-0"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content - Made more compact */}
        <div className="p-4 sm:p-5 max-h-64 sm:max-h-80 overflow-y-auto">
          <div className="mb-4 sm:mb-5">
            <p className="text-grey-700 leading-relaxed mb-3 text-sm sm:text-base">
              We respect your privacy and are committed to protecting your personal data. This website uses cookies to improve your experience, analyze site traffic, and for marketing purposes.
            </p>
            <p className="text-xs sm:text-sm text-grey-600">
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
              <Link to="/privacy-policy" className="text-primary-red hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* Cookie Types - Only show when details are expanded */}
          {showDetails && (
            <div className="mb-4 sm:mb-5 space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-heading-dark mb-3">Cookie Categories</h3>
              {cookieTypes.map((type) => (
                <div key={type.id} className="bg-grey-50 rounded-lg p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start flex-1">
                      <div className="w-8 h-8 bg-primary-navy/10 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                        <type.icon className="w-4 h-4 text-primary-navy" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-heading-dark mb-1 text-sm">{type.title}</h4>
                        <p className="text-xs text-grey-600">{type.description}</p>
                      </div>
                    </div>
                    <div className="ml-3">
                      {type.required ? (
                        <div className="bg-grey-300 rounded-full px-2 py-1">
                          <span className="text-xs font-medium text-grey-600">Required</span>
                        </div>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences[type.id]}
                            onChange={() => handlePreferenceChange(type.id)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-grey-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-red"></div>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions - Made more compact */}
        <div className="bg-grey-50 p-4 sm:p-5 border-t border-grey-200">
          <div className="flex flex-col gap-2 sm:gap-3">
            {/* First row - Customize and Reject buttons */}
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center justify-center px-3 py-2 text-primary-navy border border-primary-navy rounded-lg hover:bg-primary-navy hover:text-white transition-colors font-medium text-sm flex-1"
              >
                <Settings className="w-4 h-4 mr-1" />
                {showDetails ? 'Hide' : 'Customize'}
              </button>
              
              <button
                onClick={handleRejectAll}
                className="flex-1 px-3 py-2 text-grey-600 border border-grey-300 rounded-lg hover:bg-grey-100 transition-colors font-medium text-sm"
              >
                Reject All
              </button>
            </div>
            
            {/* Second row - Accept buttons */}
            <div className="flex gap-2 sm:gap-3">
              {showDetails && (
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 px-3 py-2 bg-primary-navy text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  Accept Selected
                </button>
              )}
              
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-3 py-2 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
          
          <p className="text-xs text-grey-500 mt-2 text-center">
            You can change your preferences at any time in our cookie settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;