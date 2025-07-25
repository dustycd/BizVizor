import React from 'react';
import { ArrowRight, Calculator, Phone, Play, Star, CheckCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlyModal from './CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const Hero = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  return (
    <>
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Video failed to load:', e);
              const videoContainer = e.currentTarget.parentElement;
              if (videoContainer) {
                videoContainer.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary-navy to-blue-700"></div>';
              }
            }}
          >
            <source src="https://ik.imagekit.io/dust/dubai2.mp4?updatedAt=1752078730782" type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-primary-navy to-blue-700"></div>
          </video>
        </div>
        
        {/* Subtle overlay for text readability without hiding video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>
        
        {/* Content - Centered and minimal with mobile-first responsive design */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Hook Title - Mobile responsive sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            <span className="block text-white drop-shadow-2xl">Business Setup in Dubai Made Effortless</span>
          </h1>
          
          {/* Subtitle - Mobile responsive sizing */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 font-light max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-2">
            Start your UAE company in 3–5 days. Free consultation, expert guidance, 500+ businesses launched.
          </p>
          
          {/* Action Buttons - Mobile responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-14 lg:mb-16 px-2">
            <button 
              onClick={openCalendly}
              className="group bg-primary-red text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
              Start My Setup
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <Link
              to="/cost-calculator"
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
              Cost Calculator
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
        </div>
      </section>
      
      {/* Trust Strip */}
      <section className="py-8 bg-white border-b border-grey-200">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center">
              <div className="flex items-center mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-heading-dark">Rated 4.9/5</span>
              <span className="text-grey-600 ml-2">by 500+ clients</span>
            </div>
            
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-alert-success mr-3" />
              <span className="text-lg font-semibold text-heading-dark">500+ Businesses Launched</span>
            </div>
            
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-primary-navy mr-3" />
              <span className="text-lg font-semibold text-heading-dark">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>
      
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};

export default Hero;