import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calculator } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CalendlyModal from './CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background styling
      setIsScrolled(currentScrollY > 10);
      
      // Header visibility logic
      if (currentScrollY < 10) {
        // Always show header at the top
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsHeaderVisible(false);
        setIsServicesOpen(false); // Close dropdown when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/#services',
      hasDropdown: true,
      dropdownCategories: [
        {
          categoryName: 'Mainland Company Formation in Dubai',
          links: [
            { name: 'Accounting & Book-Keeping', href: '/accounting-bookkeeping-services-dubai-uae' },
            { name: 'Auditing Firm', href: '/auditing-firm-dubai' },
            { name: 'Dubai Company Liquidation', href: '/company-liquidation-in-dubai-uae' },
            { name: 'Branch Office Of Foreign Company', href: '/branch-office-of-a-foreign-company-uae' },
            { name: 'Company Registration in Dubai, UAE', href: '/company-registration-dubai' },
            { name: 'E-Commerce Company Formation', href: '/ecommerce-company-setup-dubai-uae' },
            { name: 'Dubai LLC Company Formation - Limited Liability Company', href: '/llc-company-formation-dubai-uae' }
          ]
        },
        {
          categoryName: 'Business Setup in UAE Free Zones',
          links: [
            { name: 'Sharjah Free Zone Company Setup', href: '/sharjah-free-zone-business-set-up' },
            { name: 'Company Formation in Ajman Free Zones', href: '/ajman-free-zones-company-formation-uae' },
            { name: 'Company Formation in Ras Al-Khaimah Free Zones', href: '/ras-al-khaimah-free-zone-business-setup' },
            { name: 'Company Formation in Umm Al Quwain Free Zones', href: '/umm-al-quwain-free-zones-company-formation-uae' },
            { name: 'Dubai Free Zone Company Setup', href: '/freezone-company-setup-in-dubai' },
            { name: 'Fujairah Free Zone Business Setup', href: '/business-setup-fujairah-free-zone-uae' }
          ]
        },
        {
          categoryName: 'PRO Business Services Overview',
          links: [
            { name: 'Ejari Registration', href: '/ejari-registration-dubai-uae', isRed: true },
            { name: 'Family Residence', href: '/family-residence-dubai-uae' },
            { name: 'Maid Residence Service', href: '/maid-residence-service-dubai-uae' },
            { name: 'Pro Residence Services', href: '/pro-residence-services-dubai-uae' }
          ]
        },
        {
          categoryName: 'Offshore Company Formation Overview',
          links: [
            { name: 'Ajman Offshore', href: '/ajman-offshore-company-formation-dubai-uae' },
            { name: 'Jafza Offshore', href: '/jafza-offshore-company-formation-dubai-uae' },
            { name: 'Ras al Khaimah Offshore', href: '/ras-al-khaimah-offshore-company-formation-dubai-uae' }
          ]
        }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderVisible ? 'top-0' : '-top-20'
      } ${
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
                        <div className="absolute top-full left-0 mt-1 w-[1000px] bg-white rounded-xl shadow-xl border border-grey-200 py-6 z-50 animate-fade-in">
                          <div className="grid grid-cols-4 gap-8 px-6">
                            {item.dropdownCategories?.map((category, categoryIndex) => (
                              <div key={category.categoryName}>
                                <h4 className="text-xs font-semibold text-grey-500 uppercase tracking-wider mb-3 border-b border-grey-100 pb-2">
                                  {category.categoryName}
                                </h4>
                                <div className="space-y-2">
                                  {category.links.map((link) => (
                                    <Link
                                      key={link.name}
                                      to={link.href}
                                      className={`${link.isRed ? 'text-primary-red' : 'text-grey-600'} hover:text-primary-red transition-colors duration-200 text-sm block py-1 hover:bg-grey-50 px-2 rounded`}
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
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
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="text-grey-600 hover:text-primary-red transition-colors duration-200 font-medium flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-grey-50"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isServicesOpen && (
                          <div className="mt-2 space-y-1">
                            {item.dropdownCategories?.map((category, categoryIndex) => (
                              <div key={category.categoryName} className="ml-4">
                                <div className="text-xs font-semibold text-grey-500 uppercase tracking-wider mb-2 px-2">
                                  {category.categoryName}
                                </div>
                                <div className="space-y-1 border-l-2 border-grey-200 pl-4">
                                  {category.links.map((link) => (
                                    <Link
                                      key={link.name}
                                      to={link.href}
                                      className="text-grey-600 hover:text-primary-red transition-colors duration-200 text-sm block py-2 px-2 rounded hover:bg-grey-50"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsServicesOpen(false);
                                      }}
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-grey-600 hover:text-primary-red transition-colors duration-200 font-medium block py-3 px-2 rounded-lg hover:bg-grey-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
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