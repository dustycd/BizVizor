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
              Secure Your Office Space with Ejari Registration in Dubai
            </h1>
            <p className="text-xl mb-4 opacity-90 leading-relaxed font-medium">
              Register your tenancy now
            </p>
            <p className="text-lg mb-8 opacity-80">
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Ejari Registration for Businesses in Dubai
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                Renting an office space is usually a step on the licensing path for setting up a business in Dubai. Once you've found the right commercial property within your chosen mainland area or free zone and signed the tenancy contract, the next step is to complete your Ejari registration with The Real Estate Regulatory Authority (RERA).
              </p>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Complete your Ejari Registration
                </h3>
                <div className="text-4xl font-bold mb-6">starting from AED 120</div>
                <button 
                  onClick={openCalendly}
                  className="bg-white text-primary-red px-8 py-3 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Ejari Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              What Is Ejari?
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-grey-600 leading-relaxed">
                Ejari, meaning "my rent" in Arabic, is an online registration system implemented by RERA to facilitate and regulate the rental market in Dubai. It protects the rights of tenants and landlords by making sure all rental contracts are standardized, legally binding and integrated into the legal system. That way, in case of any disputes or conflicts, a clear legal framework is in place to resolve them.
              </p>
              <div className="mt-6 p-4 bg-primary-red/10 rounded-lg">
                <p className="text-primary-red font-medium text-center">
                  Ejari tenancy contract registration in Dubai is a must for all types of rental agreements, be it residential, commercial or office spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Is Ejari Important Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Why Is Ejari Registration in Dubai Important?
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              A few reasons Ejari registration is crucial for businesses in Dubai are:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-grey-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  Legal Protection
                </h3>
                <p className="text-grey-600">
                  It clearly outlines the lease terms, such as rent, duration, and responsibilities, to minimize misunderstandings and guarantee that your and your landlord's rights are protected legally.
                </p>
              </div>
              
              <div className="bg-grey-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  Regulatory Compliance
                </h3>
                <p className="text-grey-600">
                  It ensures that all tenancy contracts comply with Dubai's real estate laws.
                </p>
              </div>
              
              <div className="bg-grey-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  Utility Connections
                </h3>
                <p className="text-grey-600">
                  An Ejari certificate is typically necessary to activate your water and electricity services with the Dubai Electricity and Water Authority (DEWA).
                </p>
              </div>
              
              <div className="bg-grey-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  Licensing Requirements
                </h3>
                <p className="text-grey-600">
                  To apply for or renew your trade license, Ejari registration is mandatory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              How Do You Register Your Ejari Tenancy?
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              There are two ways you can register your Ejari tenancy contract in Dubai: online and offline. The online option is available through the Ejari portal on the Dubai Land Department (DLD) website and the Dubai Rest app. With the offline route, you'll need to stop by an approved real estate service trustee center or a typing center in Dubai.
            </p>
            
            {/* Online Registration Methods */}
            <div className="space-y-12">
              {/* DLD Website Method */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-heading-dark mb-6 text-center">
                  Ejari Registration Online Through the DLD Website
                </h3>
                <p className="text-grey-600 mb-6 text-center">
                  For DLD tenancy contract registration in Dubai, follow these steps:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { step: '01', text: 'Go to the official DLD website.' },
                    { step: '02', text: 'If you\'re a new user, create an account; if not, log in to your existing one.' },
                    { step: '03', text: 'Click the "Services" tab on the homepage and choose "Tenant" from the dropdown list.' },
                    { step: '04', text: 'Under "Real Estate Rental Services," select "Registration and renewal of lease application."' },
                    { step: '05', text: 'Click on "Access this service" to begin the Ejari registration process.' },
                    { step: '06', text: 'Fill in property and contract details such as location, type (commercial or office), rental amount, lease duration, and any other relevant information.' },
                    { step: '07', text: 'Upload the required documents.' },
                    { step: '08', text: 'Pay the Ejari registration fee.' },
                    { step: '09', text: 'Review all the documents and information you\'ve provided.' },
                    { step: '10', text: 'Submit your application and await the certificate.' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{item.step}</span>
                      </div>
                      <p className="text-grey-700 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dubai REST App Method */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-heading-dark mb-6 text-center">
                  Ejari Registration Online Through the Dubai REST App
                </h3>
                <p className="text-grey-600 mb-6 text-center">
                  If you prefer to use the Dubai REST app, take these steps:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { step: '01', text: 'Install the "Dubai REST" application on your device.' },
                    { step: '02', text: 'Navigate to the "Services" tab and select "RERA."' },
                    { step: '03', text: 'Click on "Register Ejari Contract."' },
                    { step: '04', text: 'Fill out the form with the correct details and upload the required documents.' },
                    { step: '05', text: 'Hit \'Submit\' to proceed with your application.' },
                    { step: '06', text: 'The landlord needs to approve the tenant\'s registration request via Dubai REST.' },
                    { step: '07', text: 'After approval, pay the Ejari registration fee using the app.' },
                    { step: '08', text: 'The Ejari contract will be generated immediately on the Dubai REST application.' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-primary-navy rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{item.step}</span>
                      </div>
                      <p className="text-grey-700 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Offline Method */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-heading-dark mb-6 text-center">
                  Offline Ejari Registration
                </h3>
                <p className="text-grey-600 mb-6 text-center">
                  Registering your Ejari tenancy in person through a service trustee or typing center, you'll need to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { step: '1', title: 'Head to a typing centre', text: 'Or a service trustee, with your documents' },
                    { step: '2', title: 'Share your rental specifics', text: 'Notify the center representative of the property type, rental price, lease term and so on.' },
                    { step: '3', title: 'Pay the fees', text: 'These are different for offline and online methods, and generally include VAT and other charges.' },
                    { step: '4', title: 'Complete the process', text: 'Obtain a copy of the contract and the Ejari certificate' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-alert-success rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading-dark text-sm mb-1">{item.title}</h4>
                        <p className="text-grey-700 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              What Ejari Registration Documents Do I Need?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Enlisting the help of an expert Ejari registration service provider like Bizvisor is always best if you want to be sure of the process's accuracy. However, if you're planning to do it yourself, you'll need to prepare the following documents*:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-grey-50 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Signed tenancy agreement in its original form.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Tenant's Emirates ID along with copies of their passport and visa.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Copy of the landlord's passport showing a clear signature.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Title deed copy provided by the landlord.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Trade license (for commercial properties).</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-red/10 rounded-lg">
                <p className="text-primary-red font-medium text-center">
                  *For a complete list of requirements and documents, speak to a Bizvisor consultant.
                </p>
              </div>
            </div>
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