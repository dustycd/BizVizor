import React from 'react';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const FreeZoneSetup = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const freeZones = [
    {
      name: 'Sharjah Free Zone',
      description: 'Cost-effective setup with excellent connectivity and business-friendly environment.',
      benefits: ['Low Setup Cost', 'Quick Processing', 'Industrial Focus', 'Port Access'],
      minCapital: 'AED 50,000'
    },
    {
      name: 'Ajman Free Zone',
      description: 'Competitive pricing with comprehensive business support and modern facilities.',
      benefits: ['Affordable Packages', 'Business Support', 'Modern Infrastructure', 'Easy Access'],
      minCapital: 'AED 50,000'
    },
    {
      name: 'RAK Free Zone',
      description: 'Strategic location with excellent logistics and manufacturing capabilities.',
      benefits: ['Strategic Location', 'Manufacturing Hub', 'Logistics Excellence', 'Cost Effective'],
      minCapital: 'AED 50,000'
    },
    {
      name: 'UAQ Free Zone',
      description: 'Emerging free zone with competitive advantages and growing business community.',
      benefits: ['Competitive Rates', 'Growing Community', 'Business Incentives', 'Modern Facilities'],
      minCapital: 'AED 50,000'
    },
    {
      name: 'Dubai Free Zone',
      description: 'Premium location with world-class infrastructure and global connectivity.',
      benefits: ['Global Hub', 'Premium Location', 'World-class Infrastructure', 'International Access'],
      minCapital: 'AED 100,000'
    },
    {
      name: 'Fujairah Free Zone',
      description: 'Strategic east coast location with excellent port facilities and logistics.',
      benefits: ['Port Access', 'East Coast Location', 'Logistics Hub', 'Industrial Focus'],
      minCapital: 'AED 50,000'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '100% Foreign Ownership',
      description: 'Complete ownership without local partners'
    },
    {
      icon: DollarSign,
      title: 'Tax Benefits',
      description: '0% corporate and personal income tax'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Fast-track company formation process'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Easy access to international markets'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Choose Free Zone',
      description: 'Select the most suitable free zone for your business'
    },
    {
      step: '02',
      title: 'Submit Application',
      description: 'Complete application with required documents'
    },
    {
      step: '03',
      title: 'Get Approval',
      description: 'Receive license approval from authorities'
    },
    {
      step: '04',
      title: 'Start Operations',
      description: 'Begin your business operations immediately'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-red to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              UAE Free Zone Company Setup
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Establish Your Business in UAE Free Zones
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Choose from multiple UAE free zones offering 100% foreign ownership, tax benefits, and streamlined business setup processes. Find the perfect location for your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold text-center">
                Compare Free Zones
              </Link>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose UAE Free Zones?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              UAE free zones offer unmatched advantages for international businesses looking to establish operations in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {benefit.title}
                </h3>
                <p className="text-grey-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Zones Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Popular UAE Free Zones
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Choose from our selection of top UAE free zones, each offering unique advantages for different business types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark">
                      {zone.name}
                    </h3>
                    <p className="text-sm text-primary-red font-medium">
                      Min. Capital: {zone.minCapital}
                    </p>
                  </div>
                </div>
                
                <p className="text-grey-600 mb-4">
                  {zone.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {zone.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-grey-600">
                      <CheckCircle className="w-4 h-4 text-alert-success mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="w-full bg-primary-red text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold text-center block">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Simple Setup Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our streamlined process makes free zone company formation quick and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-grey-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Free Zone Comparison
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Compare key features and benefits of different UAE free zones to make the right choice.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-grey-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heading-dark">Free Zone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heading-dark">Min. Capital</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heading-dark">Setup Time</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heading-dark">Key Benefits</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-heading-dark">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-grey-200">
                  {freeZones.slice(0, 4).map((zone, index) => (
                    <tr key={index} className="hover:bg-grey-50">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-heading-dark">{zone.name}</div>
                      </td>
                      <td className="px-6 py-4 text-grey-600">{zone.minCapital}</td>
                      <td className="px-6 py-4 text-grey-600">5-7 days</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {zone.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                            <span key={benefitIndex} className="inline-block bg-primary-red/10 text-primary-red px-2 py-1 rounded text-xs">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Link to="/contact" className="text-primary-red font-medium hover:text-primary-navy transition-colors">
                          Learn More →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-blue-700">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Setup Your Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance to choose the right free zone and complete your business setup quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold text-center">
              Start Your Application
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold text-center">
              Compare All Zones
            </Link>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={closeCalendly}
        url="https://calendly.com/saidtouma-bizvisor/consultation?month=2025-06"
      />
    </div>
  );
};

export default FreeZoneSetup;