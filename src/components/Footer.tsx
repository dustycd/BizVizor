import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Mainland Formation', href: '/mainland-formation' },
    { name: 'Free Zone Setup', href: '/freezone-setup' },
    { name: 'PRO Services', href: '/pro-services' },
    { name: 'Offshore Formation', href: '/offshore-formation' },
    { name: 'Accounting Services', href: '/accounting-services' },
    { name: 'Visa Services', href: '/visa-services' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/bizvisordubai/', 
      icon: Facebook 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/bizvisor-uae/', 
      icon: Linkedin 
    },
    { 
      name: 'Twitter', 
      href: 'https://x.com/bizvisordubai', 
      icon: Twitter 
    },
    { 
      name: 'YouTube', 
      href: 'https://www.youtube.com/channel/UC37YHtujDj3Fd9SHa7c8OJw', 
      icon: Youtube 
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/bizvisordubai/', 
      icon: Instagram 
    }
  ];

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle link click with scroll to top
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only scroll to top for internal links (not external social links)
    if (href.startsWith('/') || href.startsWith('#')) {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-heading-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/">
                <img 
                  src="/logoo.png" 
                  alt="Bizvisor" 
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-grey-300 mb-6 leading-relaxed">
              Transforming businesses through expert advisory services. We partner with organizations to unlock their full potential and achieve sustainable growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary-red mr-3" />
                <a href="mailto:hello@bizvisor.com" className="text-sm text-grey-300 hover:text-primary-red transition-colors">
                  hello@bizvisor.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary-red mr-3" />
                <a href="tel:+971564960040" className="text-sm text-grey-300 hover:text-primary-red transition-colors">
                  +971 56 496 0040
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-primary-red mr-3" />
                <span className="text-sm text-grey-300">2909 Silver Tower Business Bay Dubai UAE</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    onClick={(e) => handleLinkClick(e, service.href)}
                    className="text-grey-300 hover:text-primary-red transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-grey-300 hover:text-primary-red transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-grey-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-grey-300 text-sm">
                Subscribe to our newsletter for the latest business insights and industry trends.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-grey-800 border border-grey-600 rounded-lg text-white placeholder-grey-400 focus:ring-2 focus:ring-primary-red focus:border-transparent"
              />
              <button 
                onClick={() => alert('Newsletter subscription coming soon!')}
                className="bg-primary-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-grey-700">
          <div className="bg-grey-800 rounded-lg p-6 mb-8">
            <h4 className="text-sm font-semibold text-white mb-3">Disclaimer</h4>
            <p className="text-xs text-grey-300 leading-relaxed">
              The data and services offered on this website by Bizvisor or any other social media Ads sponsored by Bizvisor are independent and not endorsed by, affiliated with, or otherwise connected to any government agencies. Bizvisor is a corporate service provider (CSP) licensed by Dubai Economic Department #1145129. Bizvisor is licensed to provide administrative services to public and private institutions and companies, whether inside or outside the United Arab Emirates, willing to conduct business, such as completing registration procedures, obtaining the necessary licenses from official authorities, and establishing partnerships with foreign companies. It provides secretarial and specialized services, like consulting, marketing, and administrative services.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-grey-300 mb-4 md:mb-0">
            © 2024 Bizvisor. All rights reserved. | 
            <Link 
              to="/privacy-policy" 
              onClick={(e) => handleLinkClick(e, '/privacy-policy')}
              className="hover:text-primary-red transition-colors ml-1"
            >
              Privacy Policy
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-grey-700 rounded-lg flex items-center justify-center hover:bg-primary-red transition-colors duration-200"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;