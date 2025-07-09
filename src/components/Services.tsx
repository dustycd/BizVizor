import React from 'react';
import { 
  Building2, 
  FileText, 
  Calculator, 
  Search, 
  Globe, 
  Users,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlyModal from './CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const Services = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const serviceCategories = [
    {
      title: 'Mainland Company Formation',
      icon: Building2,
      description: 'Complete mainland company setup with 100% ownership and operational flexibility in Dubai.',
      color: 'bg-primary-red',
      services: [
        'Accounting & Book-Keeping',
        'Auditing Services',
        'Company Liquidation',
        'Branch Office Setup',
        'Company Registration',
        'E-Commerce Formation',
        'LLC Formation'
      ]
    },
    {
      title: 'UAE Free Zone Setup',
      icon: Globe,
      description: 'Comprehensive free zone company formation across all major UAE free zones.',
      color: 'bg-primary-navy',
      services: [
        'Sharjah Free Zone',
        'Ajman Free Zone',
        'RAK Free Zone',
        'UAQ Free Zone',
        'Dubai Free Zone',
        'Fujairah Free Zone'
      ]
    },
    {
      title: 'PRO Business Services',
      icon: FileText,
      description: 'Professional PRO services for visa processing and government relations.',
      color: 'bg-alert-success',
      services: [
        'Ejari Registration',
        'Family Residence Visa',
        'Maid Residence Service',
        'PRO Services'
      ]
    },
    {
      title: 'Offshore Formation',
      icon: Shield,
      description: 'Offshore company setup for international business and asset protection.',
      color: 'bg-grey-700',
      services: [
        'Ajman Offshore',
        'Jafza Offshore',
        'RAK Offshore'
      ]
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-red/10 text-primary-red px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Complete UAE Business Setup Solutions
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
              From mainland company formation to free zone setups, we provide comprehensive business establishment services across the UAE with expert guidance and seamless execution.
            </p>
          </div>

          {/* Cost Calculator Highlight */}
          <div className="bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Calculator className="w-12 h-12 text-white mr-4" />
                <h3 className="text-2xl lg:text-3xl font-bold">Calculate Your Business Setup Cost</h3>
              </div>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Get instant, transparent pricing for your UAE business formation. Our interactive calculator provides detailed cost breakdowns for all services and government fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/cost-calculator"
                  className="bg-white text-primary-navy px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Start Calculator
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button 
                  onClick={openCalendly}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Service Categories Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mr-5 flex-shrink-0`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-heading-dark mb-3">
                      {category.title}
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-grey-50 transition-colors duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                        <span className="text-grey-700 font-medium group-hover:text-primary-navy transition-colors">
                          {service}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-grey-400 group-hover:text-primary-red group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-grey-200">
                  <Link 
                    to={
                      category.title.includes('Mainland') ? '/mainland-formation' :
                      category.title.includes('Free Zone') ? '/freezone-setup' :
                      category.title.includes('PRO') ? '/pro-services' :
                      '/offshore-formation'
                    }
                    className="text-primary-red font-semibold hover:text-primary-navy transition-colors duration-200 flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-primary-navy" />
              </div>
              <h4 className="text-lg font-semibold text-heading-dark mb-2">Accounting Services</h4>
              <p className="text-grey-600 text-sm mb-4">Professional bookkeeping and financial management</p>
              <Link to="/accounting-services" className="text-primary-navy font-medium hover:text-primary-red transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-primary-red" />
              </div>
              <h4 className="text-lg font-semibold text-heading-dark mb-2">Business Consultation</h4>
              <p className="text-grey-600 text-sm mb-4">Expert guidance for your business setup journey</p>
              <Link to="/contact" className="text-primary-red font-medium hover:text-primary-navy transition-colors">
                Get Started →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-alert-success" />
              </div>
              <h4 className="text-lg font-semibold text-heading-dark mb-2">Visa Services</h4>
              <p className="text-grey-600 text-sm mb-4">Complete visa processing and PRO services</p>
              <Link to="/visa-services" className="text-alert-success font-medium hover:text-primary-red transition-colors">
                Apply Now →
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your UAE Business?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert guidance and seamless business setup services. Schedule your free consultation today and take the first step towards your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Schedule Free Consultation
              </button>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold"
              >
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
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

export default Services;