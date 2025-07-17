import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight, Users, Clock, Shield, Globe } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const ProResidenceServices = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const services = [
    {
      title: 'Employment Visa Processing',
      description: 'Complete employment visa processing for new hires and job changes.',
      features: ['Work Permit Processing', 'Medical Test Coordination', 'Emirates ID Application', 'Labor Card Processing'],
      price: 'Starting from AED 2,500',
      duration: '5-7 working days'
    },
    {
      title: 'Visa Renewal Services',
      description: 'Professional visa renewal services to ensure continuous legal status.',
      features: ['Visa Extension', 'Document Updates', 'Medical Renewals', 'Status Verification'],
      price: 'Starting from AED 1,800',
      duration: '3-5 working days'
    },
    {
      title: 'Visa Cancellation',
      description: 'Proper visa cancellation procedures for job changes or departures.',
      features: ['Cancellation Processing', 'Final Settlement', 'NOC Issuance', 'Status Clearance'],
      price: 'Starting from AED 800',
      duration: '2-3 working days'
    },
    {
      title: 'Document Attestation',
      description: 'Complete document attestation services for various government procedures.',
      features: ['Educational Certificates', 'Marriage Certificates', 'Birth Certificates', 'Commercial Documents'],
      price: 'Starting from AED 300',
      duration: '3-7 working days'
    },
    {
      title: 'Labor Card Services',
      description: 'Labor card processing and renewal for all types of employment.',
      features: ['New Labor Card', 'Labor Card Renewal', 'Profession Changes', 'Employer Transfer'],
      price: 'Starting from AED 1,200',
      duration: '5-7 working days'
    },
    {
      title: 'Government Liaison',
      description: 'Professional representation for all government-related procedures.',
      features: ['Ministry Visits', 'Immigration Services', 'Municipality Procedures', 'Court Representations'],
      price: 'Starting from AED 500',
      duration: 'As required'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Save valuable time with our efficient government relations services'
    },
    {
      icon: Shield,
      title: 'Expert Knowledge',
      description: 'Benefit from our deep understanding of UAE regulations and procedures'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Dedicated PRO officers for personalized attention and support'
    },
    {
      icon: Globe,
      title: 'Complete Solutions',
      description: 'One-stop solution for all your government-related requirements'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'Understand your specific PRO service requirements'
    },
    {
      step: '02',
      title: 'Document Collection',
      description: 'Gather all necessary documents and paperwork'
    },
    {
      step: '03',
      title: 'Government Processing',
      description: 'Handle all government procedures and submissions'
    },
    {
      step: '04',
      title: 'Completion & Delivery',
      description: 'Complete the process and deliver final documents'
    }
  ];

  const governmentEntities = [
    {
      name: 'Ministry of Human Resources',
      services: ['Labor Card Processing', 'Work Permit Applications', 'Employment Contracts']
    },
    {
      name: 'General Directorate of Residency',
      services: ['Visa Processing', 'Entry Permits', 'Residence Renewals']
    },
    {
      name: 'Emirates Identity Authority',
      services: ['Emirates ID Applications', 'ID Renewals', 'Status Updates']
    },
    {
      name: 'Dubai Health Authority',
      services: ['Medical Fitness Tests', 'Health Card Processing', 'Medical Renewals']
    },
    {
      name: 'Dubai Municipality',
      services: ['Trade License Services', 'Permits & Approvals', 'Compliance Certificates']
    },
    {
      name: 'UAE Courts',
      services: ['Document Attestation', 'Legal Procedures', 'Court Representations']
    }
  ];

  const documentTypes = [
    {
      category: 'Educational Documents',
      documents: ['Degree Certificates', 'Diploma Certificates', 'Transcripts', 'Professional Licenses']
    },
    {
      category: 'Personal Documents',
      documents: ['Marriage Certificates', 'Birth Certificates', 'Divorce Certificates', 'Death Certificates']
    },
    {
      category: 'Commercial Documents',
      documents: ['Commercial Licenses', 'Articles of Association', 'Power of Attorney', 'Commercial Contracts']
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-grey-700 to-grey-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              PRO Residence Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional PRO Services in Dubai
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Comprehensive PRO (Public Relations Officer) services for all your government-related procedures in the UAE. Expert handling of visas, permits, and official documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Get PRO Services
              </Link>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-grey-700 transition-all duration-200 font-semibold"
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
              Why Choose Our PRO Services?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Professional PRO services with experienced officers and comprehensive government relations expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-grey-700/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-grey-700" />
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
              Our PRO Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive PRO services to handle all your government-related requirements efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-grey-700 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-red font-semibold text-sm mb-1">
                      {service.price}
                    </p>
                    <p className="text-grey-500 text-xs">
                      Duration: {service.duration}
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
                  className="w-full bg-grey-700 text-white py-3 rounded-lg hover:bg-grey-800 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Get Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Entities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Government Entities We Work With
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              We maintain strong relationships with all major government entities in the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentEntities.map((entity, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading-dark">
                    {entity.name}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {entity.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-grey-700">
                      <div className="w-1.5 h-1.5 bg-primary-red rounded-full mr-2 flex-shrink-0"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Attestation Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Document Attestation Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Professional document attestation services for all types of certificates and legal documents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {documentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {type.category}
                </h3>
                <div className="space-y-3">
                  {type.documents.map((doc, docIndex) => (
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Service Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Streamlined process to handle all your PRO service requirements efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-grey-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
            Need Professional PRO Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced PRO officers handle all your government-related procedures efficiently and professionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Get PRO Services
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

export default ProResidenceServices;