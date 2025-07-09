import React from 'react';
import { ArrowRight, Calculator, Phone, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
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
            <source src="https://ik.imagekit.io/dust/dubai.mp4?updatedAt=1752077048587" type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-primary-navy to-blue-700"></div>
          </video>
        </div>
        
        {/* Subtle overlay for text readability without hiding video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        
        {/* Content - Centered and minimal */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Hook Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block mb-2">Your Business</span>
            <span className="block text-primary-red drop-shadow-2xl">Starts Here</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Launch your UAE company in 7 days with 100% ownership and expert guidance
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={openCalendly}
              className="group bg-primary-red text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Start Your Journey
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <Link
              to="/cost-calculator"
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-navy transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Calculator className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Calculate Cost
            </Link>
          </div>
          
          {/* Quick Stats - Minimal and elegant */}
          <div className="flex justify-center items-center space-x-12 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">2000+</div>
              <div className="text-sm uppercase tracking-wider">Companies</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">7 Days</div>
              <div className="text-sm uppercase tracking-wider">Setup</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+ Years</div>
              <div className="text-sm uppercase tracking-wider">Experience</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        
        {/* WhatsApp Button */}
        <WhatsAppButton 
          message="Hello! I'm interested in starting a business in UAE. Can you provide me with more information about your services?"
        />
      </section>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={closeCalendly}
        url="https://calendly.com/saidtouma-bizvisor/consultation?month=2025-06"
      />
    </>
  );
};

export default Hero;