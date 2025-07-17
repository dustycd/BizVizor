import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight, Home, Clock, Shield, Users, ChevronDown, ChevronUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const EjariRegistration = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const services = [
    {
      title: 'Residential Ejari',
      description: 'Complete Ejari registration for residential properties including apartments, villas, and shared accommodations.',
      features: ['Apartment Registration', 'Villa Registration', 'Shared Accommodation', 'Renewal Services'],
      price: 'Starting from AED 500'
    },
    {
      title: 'Commercial Ejari',
      description: 'Professional Ejari registration for commercial properties including offices, shops, and warehouses.',
      features: ['Office Registration', 'Retail Shop Registration', 'Warehouse Registration', 'Industrial Properties'],
      price: 'Starting from AED 750'
    },
    {
      title: 'Ejari Renewal',
      description: 'Hassle-free Ejari renewal services to ensure continuous compliance with Dubai regulations.',
      features: ['Annual Renewal', 'Document Updates', 'Status Verification', 'Compliance Check'],
      price: 'Starting from AED 300'
    },
    {
      title: 'Ejari Cancellation',
      description: 'Professional Ejari cancellation services when moving out or changing properties.',
      features: ['Cancellation Processing', 'Final Settlement', 'Document Clearance', 'Status Update'],
      price: 'Starting from AED 200'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Ensure full compliance with Dubai Municipality regulations'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick registration and renewal services within 24-48 hours'
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'Handle all required paperwork and documentation'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Professional guidance throughout the entire process'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Document Collection',
      description: 'Gather all required documents including tenancy contract and Emirates ID'
    },
    {
      step: '02',
      title: 'Application Submission',
      description: 'Submit Ejari application through official Dubai Land Department portal'
    },
    {
      step: '03',
      title: 'Processing & Verification',
      description: 'Dubai Municipality processes and verifies the application'
    },
    {
      step: '04',
      title: 'Certificate Issuance',
      description: 'Receive official Ejari certificate and registration number'
    }
  ];

  const requirements = [
    {
      category: 'Residential Ejari',
      documents: [
        'Valid Tenancy Contract',
        'Emirates ID (Tenant)',
        'Passport Copy (Tenant)',
        'Property Title Deed',
        'NOC from Developer (if applicable)',
        'DEWA Connection (if applicable)'
      ]
    },
    {
      category: 'Commercial Ejari',
      documents: [
        'Commercial Tenancy Contract',
        'Trade License Copy',
        'Emirates ID (Authorized Signatory)',
        'Property Title Deed',
        'NOC from Landlord',
        'Municipality Approval'
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-red to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Ejari Registration Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Ejari Registration in Dubai
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Complete Ejari registration services for residential and commercial properties in Dubai. Fast, reliable, and fully compliant with Dubai Municipality regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Register Your Ejari
              </Link>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold"
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
              Why Choose Our Ejari Services?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Professional Ejari registration services with expert guidance and fast processing times.
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

      {/* Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Ejari Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive Ejari registration services for all types of properties in Dubai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-red font-semibold text-sm mb-3">
                      {service.price}
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
                  className="w-full bg-primary-red text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
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
              Required Documents
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Essential documents needed for Ejari registration in Dubai.
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

      {/* Process Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Ejari Registration Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Simple and efficient process to complete your Ejari registration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-red rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about Ejari registration in Dubai.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Why is Ejari registration mandatory in Dubai?",
                  answer: "Ejari is a legal system by RERA that officially registers tenancy contracts to protect both tenants and landlords. Without Ejari, you cannot connect DEWA utilities, apply for visas, or get trade licenses. It also ensures transparency in rent-related disputes."
                },
                {
                  question: "What is the cost of Ejari registration?",
                  answer: "The standard fee for Ejari registration is between AED 120–200, depending on whether you register online via the Dubai REST app or through a trustee center. Some landlords or agents might charge additional service fees."
                },
                {
                  question: "How fast can I get my Ejari certificate?",
                  answer: "If you register online using the Dubai REST app, the certificate is generated instantly. For trustee offices, it usually takes 1–2 working days, but Bizvisor can help with express same-day registration."
                },
                {
                  question: "Can I register Ejari online?",
                  answer: "Yes, the Dubai REST app allows tenants to register Ejari by uploading the tenancy contract, Emirates ID, and required documents. It is the quickest method and is preferred by most UAE residents."
                },
                {
                  question: "What documents are required for Ejari registration?",
                  answer: "You need a valid tenancy contract, tenant's Emirates ID, passport with visa page, landlord's title deed, and a recent DEWA bill to confirm the property details."
                },
                {
                  question: "Who is responsible for Ejari registration – landlord or tenant?",
                  answer: "In residential leases, tenants usually handle Ejari registration, but for commercial properties, landlords or property managers often take responsibility."
                },
                {
                  question: "Can I register Ejari before signing a tenancy contract?",
                  answer: "No, a signed tenancy contract is mandatory before registering Ejari. RERA requires all tenancy details to be final before submission."
                },
                {
                  question: "What happens if I don't register Ejari?",
                  answer: "Without Ejari, you cannot apply for family or maid visas, utilities like DEWA will not be connected, and you won't have legal protection in rent disputes."
                },
                {
                  question: "Do I need a new Ejari for lease renewals?",
                  answer: "Yes, every lease renewal or contract extension requires a new Ejari registration to stay valid under RERA regulations."
                },
                {
                  question: "Can a short-term lease be registered with Ejari?",
                  answer: "Yes, even short-term rental contracts (monthly or yearly) must be registered, as RERA mandates Ejari for all tenancy agreements."
                },
                {
                  question: "Can Bizvisor help with Ejari corrections or cancellations?",
                  answer: "Yes, Bizvisor assists with updating tenant details, correcting contract errors, or cancelling Ejari when moving out or changing properties."
                },
                {
                  question: "Is Ejari registration needed for office spaces or warehouses?",
                  answer: "Yes, Ejari registration is mandatory for both residential and commercial spaces, including offices and warehouses."
                },
                {
                  question: "Can Ejari be transferred to a new tenant?",
                  answer: "No, each new tenant must register a fresh Ejari under their name when renting the same property."
                },
                {
                  question: "Do I need Ejari for my visa renewal?",
                  answer: "Yes, valid Ejari is required for family residence visas, maid visas, and even some work visa renewals in Dubai."
                },
                {
                  question: "Does Bizvisor offer same-day Ejari registration?",
                  answer: "Yes, Bizvisor's express service can complete your Ejari registration in just a few hours with all required documents ready."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-grey-50 rounded-xl shadow-sm border border-grey-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-grey-100 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-heading-dark pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-primary-red" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-grey-400" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-grey-100">
                        <p className="text-grey-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-blue-700">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Ejari Registration Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get professional Ejari registration services with fast processing and complete compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Register Your Ejari
            </Link>
            <button 
              onClick={openCalendly}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold"
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

export default EjariRegistration;