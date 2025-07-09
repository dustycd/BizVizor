import React from 'react';
import { ArrowRight, BarChart3, Users, Target, CheckCircle, Phone, Building2, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import CalendlyModal from './CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const Hero = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  return (
    <>
      <section className="pt-28 pb-12 relative overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              minWidth: '100%', 
              minHeight: '100%'
            }}
            onError={(e) => {
              console.log('Video failed to load:', e);
              // Hide video container on error and show fallback
              const videoContainer = e.currentTarget.parentElement;
              if (videoContainer) {
                videoContainer.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary-navy to-blue-700"></div>';
              }
            }}
          >
            <source src="https://ik.imagekit.io/dust/dubai.mp4?updatedAt=1752077048587" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gradient-to-br from-primary-navy to-blue-700"></div>
          </video>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 -z-5"></div>
        
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white drop-shadow-lg">Start Your Business in</span>
                <br />
                <span className="text-primary-red drop-shadow-lg bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm inline-block mt-2">UAE</span>
                <span className="text-white drop-shadow-lg"> Today</span>
              </h1>
              <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed drop-shadow-md bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                Complete business setup solutions across UAE mainland, free zones, and offshore jurisdictions. Get 100% ownership, expert guidance, and seamless registration process.
              </p>
              
              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  '100% Foreign Ownership',
                  'Fast 7-Day Setup',
                  'Expert PRO Services',
                  'Complete Compliance'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 drop-shadow-sm" />
                    <span className="text-white font-medium drop-shadow-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={openCalendly}
                  className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold flex items-center justify-center group hover:shadow-2xl transform hover:-translate-y-1 shadow-xl backdrop-blur-sm"
                >
                  Start Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={openCalendly}
                  className="border-2 border-white bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold flex items-center justify-center shadow-xl backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Expert Advice
                </button>
              </div>

              {/* Cost Calculator CTA */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/30 shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-heading-dark mb-2">
                      Calculate Your Setup Cost
                    </h3>
                    <p className="text-grey-600 text-sm">
                      Get instant estimates for your UAE business formation with our interactive calculator
                    </p>
                  </div>
                  <Link
                    to="/cost-calculator"
                    className="bg-primary-navy text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center group hover:shadow-xl transform hover:-translate-y-0.5 shadow-md whitespace-nowrap"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">2000+</div>
                  <div className="text-sm text-white/90 drop-shadow-sm">Companies Formed</div>
                </div>
                <div className="text-center bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">7</div>
                  <div className="text-sm text-white/90 drop-shadow-sm">Days Average Setup</div>
                </div>
                <div className="text-center bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">15+</div>
                  <div className="text-sm text-white/90 drop-shadow-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-fade-in">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/30">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-heading-dark mb-2">Popular Business Setup Options</h3>
                  <p className="text-grey-600">Choose the perfect structure for your business</p>
                </div>
                
                <div className="space-y-4">
                  <Link 
                    to="/mainland-formation"
                    className="bg-primary-red/10 rounded-xl p-4 hover:bg-primary-red/20 transition-all duration-200 cursor-pointer block group hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center mr-3">
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading-dark">Dubai Mainland</h4>
                          <p className="text-sm text-grey-600">100% ownership, local market access</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary-red group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  
                  <Link 
                    to="/freezone-setup"
                    className="bg-primary-navy/10 rounded-xl p-4 hover:bg-primary-navy/20 transition-all duration-200 cursor-pointer block group hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-navy rounded-lg flex items-center justify-center mr-3">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading-dark">Free Zone</h4>
                          <p className="text-sm text-grey-600">Tax benefits, 100% repatriation</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary-navy group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  
                  <Link 
                    to="/offshore-formation"
                    className="bg-alert-success/10 rounded-xl p-4 hover:bg-alert-success/20 transition-all duration-200 cursor-pointer block group hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-alert-success rounded-lg flex items-center justify-center mr-3">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading-dark">Offshore</h4>
                          <p className="text-sm text-grey-600">Asset protection, privacy</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-alert-success group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>

                {/* Calculator CTA in Visual */}
                <div className="mt-6 pt-6 border-t border-grey-200">
                  <Link
                    to="/cost-calculator"
                    className="w-full bg-gradient-to-r from-primary-navy to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Setup Cost
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating WhatsApp Button */}
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