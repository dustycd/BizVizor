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
    <div className="fixed inset-0 z-[10000] flex items-end justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      
      {/* Cookie Banner */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-navy to-blue-700 text-white p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <Cookie className="w-8 h-8 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Cookie Preferences</h2>
                <p className="text-blue-100 text-sm">
                  We use cookies to enhance your browsing experience and provide personalized content.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors ml-4"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="mb-6">
            <p className="text-grey-700 leading-relaxed mb-4">
              We respect your privacy and are committed to protecting your personal data. This website uses cookies to improve your experience, analyze site traffic, and for marketing purposes. You can choose which types of cookies to allow.
            </p>
            <p className="text-sm text-grey-600">
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
              <Link to="/privacy-policy" className="text-primary-red hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* Cookie Types */}
          {showDetails && (
            <div className="mb-6 space-y-4">
              <h3 className="text-lg font-semibold text-heading-dark mb-4">Cookie Categories</h3>
              {cookieTypes.map((type) => (
                <div key={type.id} className="bg-grey-50 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start flex-1">
                      <div className="w-10 h-10 bg-primary-navy/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <type.icon className="w-5 h-5 text-primary-navy" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-heading-dark mb-1">{type.title}</h4>
                        <p className="text-sm text-grey-600">{type.description}</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      {type.required ? (
                        <div className="bg-grey-300 rounded-full px-3 py-1">
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
                          <div className="w-11 h-6 bg-grey-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-red"></div>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="bg-grey-50 p-6 border-t border-grey-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-center px-4 py-2 text-primary-navy border border-primary-navy rounded-lg hover:bg-primary-navy hover:text-white transition-colors font-medium"
            >
              <Settings className="w-4 h-4 mr-2" />
              {showDetails ? 'Hide Details' : 'Customize'}
            </button>
            
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3 text-grey-600 border border-grey-300 rounded-lg hover:bg-grey-100 transition-colors font-medium"
            >
              Reject All
            </button>
            
            {showDetails && (
              <button
                onClick={handleAcceptSelected}
                className="flex-1 px-6 py-3 bg-primary-navy text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Accept Selected
              </button>
            )}
            
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-primary-red text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Accept All
            </button>
          </div>
          
          <p className="text-xs text-grey-500 mt-3 text-center">
            You can change your preferences at any time by visiting our cookie settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;