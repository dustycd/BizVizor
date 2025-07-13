import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calculator } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CalendlyModal from './CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Mainland Formation', href: '/mainland-formation' },
        { name: 'Sharjah Free Zone', href: '/sharjah-freezone' },
        { name: 'Ajman Free Zone', href: '/ajman-freezone' },
        { name: 'RAK Free Zone', href: '/rak-freezone' },
        { name: 'UAQ Free Zone', href: '/uaq-freezone' },
        { name: 'Dubai Free Zone', href: '/dubai-freezone' },
        { name: 'Fujairah Free Zone', href: '/fujairah-freezone' },
        { name: 'PRO Services', href: '/pro-services' },
        { name: 'Offshore Formation', href: '/offshore-formation' },
        { name: 'Accounting Services', href: '/accounting-services' },
        { name: 'Visa Services', href: '/visa-services' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src="/logo.b.png" 
                alt="Bizvisor" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="flex items-center text-grey-600 hover:text-primary-red transition-colors duration-200 font-medium py-2 text-sm">
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-grey-200 py-3 z-50 animate-fade-in">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-3 text-grey-600 hover:text-primary-red hover:bg-grey-50 transition-colors duration-200 text-sm font-medium"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-grey-600 hover:text-primary-red transition-colors duration-200 font-medium py-2 text-sm"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Cost Calculator Button */}
              <Link
                to="/cost-calculator"
                className="flex items-center bg-primary-navy text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Cost Calculator
              </Link>
              
              {/* Free Consultation Button */}
              <button 
                onClick={openCalendly}
                className="bg-primary-red text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-all duration-200 font-medium text-sm"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-grey-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-grey-600" />
              ) : (
                <Menu className="w-6 h-6 text-grey-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-grey-200 animate-slide-up">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="text-grey-600 hover:text-primary-red transition-colors duration-200 font-medium block py-3 px-2 rounded-lg hover:bg-grey-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 space-y-1 border-l-2 border-grey-200 pl-4">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="text-grey-500 hover:text-primary-red transition-colors duration-200 text-sm block py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Calculator Link */}
                <Link
                  to="/cost-calculator"
                  className="bg-primary-navy text-white font-medium flex items-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calculator className="w-5 h-5 mr-3" />
                  Cost Calculator
                </Link>
                
                {/* Mobile Free Consultation Button */}
                <div className="pt-2">
                  <button 
                    onClick={() => {
                      openCalendly();
                      setIsMenuOpen(false);
                    }}
                    className="bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium w-full"
                  >
                    Free Consultation
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={closeCalendly}
        url="https://calendly.com/saidtouma-bizvisor/consultation?month=2025-06"
      />
    </>
  );
};

export default Header;