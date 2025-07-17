import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckCircle, ArrowRight, Users, Clock, Shield, FileText } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const MaidResidenceService = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const services = [
    {
      title: 'Housemaid Visa',
      description: 'Complete visa processing for domestic housemaids including all documentation and procedures.',
      features: ['2-Year Visa Validity', 'Medical Test Assistance', 'Emirates ID Processing', 'Work Permit Included'],
      price: 'Starting from AED 2,500',
      nationality: 'Philippines, Indonesia, Sri Lanka, India'
    },
    {
      title: 'Driver Visa',
      description: 'Professional visa services for personal drivers with complete documentation support.',
      features: ['2-Year Visa Validity', 'Driving License Support', 'Medical Clearance', 'Employment Contract'],
      price: 'Starting from AED 2,800',
      nationality: 'India, Pakistan, Bangladesh, Nepal'
    },
    {
      title: 'Nanny Visa',
      description: 'Specialized visa processing for nannies and childcare providers.',
      features: ['2-Year Visa Validity', 'Childcare Certification', 'Medical Screening', 'Background Verification'],
      price: 'Starting from AED 3,000',
      nationality: 'Philippines, Sri Lanka, India'
    },
    {
      title: 'Cook Visa',
      description: 'Complete visa services for personal cooks and kitchen staff.',
      features: ['2-Year Visa Validity', 'Health Certificate', 'Cooking Skills Verification', 'Employment Documentation'],
      price: 'Starting from AED 2,600',
      nationality: 'India, Pakistan, Bangladesh'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Ensure full compliance with UAE labor and immigration laws'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick visa processing with minimal delays and complications'
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'Handle all required paperwork and government procedures'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Professional support throughout the entire visa process'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Discuss requirements and choose the right domestic helper'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'Prepare all required documents and applications'
    },
    {
      step: '03',
      title: 'Visa Application',
      description: 'Submit visa application to immigration authorities'
    },
    {
      step: '04',
      title: 'Arrival & Setup',
      description: 'Assist with arrival procedures and Emirates ID'
    }
  ];

  const requirements = [
    {
      category: 'Sponsor Requirements',
      documents: [
        'Valid UAE Residence Visa',
        'Minimum Salary AED 10,000',
        'Employment Contract',
        'Accommodation Certificate',
        'Medical Insurance Coverage',
        'NOC from Current Employer'
      ]
    },
    {
      category: 'Helper Requirements',
      documents: [
        'Valid Passport (6 months validity)',
        'Medical Fitness Certificate',
        'Police Clearance Certificate',
        'Educational Certificates',
        'Experience Certificates',
        'Passport Size Photographs'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Medical Test Coordination',
      description: 'Complete medical examination coordination and follow-up',
      icon: Shield
    },
    {
      title: 'Emirates ID Processing',
      description: 'Full Emirates ID application and collection services',
      icon: FileText
    },
    {
      title: 'Labor Contract Preparation',
      description: 'Professional labor contract drafting and registration',
      icon: Users
    },
    {
      title: 'Visa Renewal Services',
      description: 'Timely visa renewal before expiration dates',
      icon: Clock
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Maid Residence Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Domestic Helper Visa Services in Dubai
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Complete domestic helper visa processing services for maids, drivers, nannies, and cooks. Professional assistance with all documentation and legal requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Apply for Helper Visa
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
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose Our Domestic Helper Services?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Professional domestic helper visa services with expert guidance and comprehensive support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-navy" />
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

      {/* Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Domestic Helper Visa Types
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive visa services for all types of domestic helpers and household staff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-red font-semibold text-sm mb-2">
                      {service.price}
                    </p>
                    <p className="text-grey-500 text-xs">
                      Common Nationalities: {service.nationality}
                    </p>
                  </div>
                </div>
                
                <p className="text-grey-600 mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-grey-700">
                      <CheckCircle className="w-4 h-4 text-alert-success mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Visa Requirements
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Essential requirements for domestic helper visa applications in the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {req.category}
                </h3>
                <div className="space-y-3">
                  {req.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="flex items-center text-grey-700">
                      <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                      {doc}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive support services to complete your domestic helper visa process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {service.description}
                </p>
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
              Visa Application Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Simple and efficient process to bring your domestic helper to the UAE.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Domestic Helper Visa Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get professional assistance with domestic helper visa applications and enjoy peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Start Visa Application
            </Link>
            <button 
              onClick={openCalendly}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold"
            >
              Free Consultation
            </button>
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

export default MaidResidenceService;