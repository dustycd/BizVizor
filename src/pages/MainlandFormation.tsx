import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Users, MapPin, FileText, Globe, Briefcase, Calculator, Award, Star, ChevronDown, ChevronUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const MainlandFormation = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I own 100% of a Dubai Mainland business?",
      answer: "Yes, for most activities, foreign entrepreneurs can now own 100% of their Mainland company."
    },
    {
      question: "Do I need to rent an office for a Mainland license?",
      answer: "Yes, physical office space is mandatory. Bizvisor offers affordable options like Flexi Desks."
    },
    {
      question: "How long does the setup take?",
      answer: "With complete documents, the setup typically takes 4–7 working days."
    },
    {
      question: "Can I apply for employee visas under my license?",
      answer: "Absolutely. Mainland licenses allow a flexible quota based on your office size and business activity."
    }
  ];

  const services = [
    {
      title: 'Accounting & Book-Keeping',
      description: 'Professional financial management and bookkeeping services for your mainland company.',
      features: ['Monthly Financial Reports', 'VAT Registration & Filing', 'Payroll Management', 'Bank Reconciliation']
    },
    {
      title: 'Auditing Services',
      description: 'Comprehensive auditing services to ensure compliance and financial transparency.',
      features: ['Annual Audit Reports', 'Internal Audit Services', 'Compliance Reviews', 'Risk Assessment']
    },
    {
      title: 'Company Liquidation',
      description: 'Professional company closure and liquidation services with full legal compliance.',
      features: ['Asset Liquidation', 'Legal Documentation', 'Creditor Settlement', 'Final Compliance']
    },
    {
      title: 'Branch Office Setup',
      description: 'Establish branch offices for international companies in Dubai mainland.',
      features: ['License Processing', 'Office Registration', 'Bank Account Opening', 'Visa Processing']
    },
    {
      title: 'Company Registration',
      description: 'Complete company registration process for Dubai mainland businesses.',
      features: ['Trade License', 'MOA Preparation', 'DED Registration', 'Chamber Membership']
    },
    {
      title: 'E-Commerce Formation',
      description: 'Specialized setup for e-commerce businesses with online trading capabilities.',
      features: ['E-Commerce License', 'Online Payment Setup', 'Digital Compliance', 'Platform Integration']
    },
    {
      title: 'LLC Formation',
      description: 'Limited Liability Company formation with 100% foreign ownership.',
      features: ['100% Ownership', 'Local Sponsor Arrangement', 'Share Capital Setup', 'Legal Documentation']
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Trade anywhere in Dubai & UAE',
      description: 'Operate freely across all Emirates without restrictions'
    },
    {
      icon: FileText,
      title: 'Access UAE government tenders',
      description: 'Participate in government contracts and public sector opportunities'
    },
    {
      icon: Users,
      title: 'Unlimited visa quota',
      description: 'No restrictions on the number of employee visas you can obtain'
    },
    {
      icon: MapPin,
      title: 'Physical office in prime locations',
      description: 'Establish your presence in Dubai\'s prestigious business districts'
    },
    {
      icon: Briefcase,
      title: 'Combine multiple business activities',
      description: 'Add various business activities under one license'
    },
    {
      icon: DollarSign,
      title: 'No capital repatriation restrictions',
      description: 'Full freedom to repatriate profits and capital'
    }
  ];


  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Discuss your requirements and choose the right service'
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'Prepare and verify all required documents'
    },
    {
      step: '03',
      title: 'Application',
      description: 'Submit applications to relevant authorities'
    },
    {
      step: '04',
      title: 'Completion',
      description: 'Receive approvals and complete the process'
    }
  ];

  // Helper function to get the correct link for each mainland service
  const getServiceLink = (serviceTitle: string) => {
    const serviceUrls: { [key: string]: string } = {
      'Accounting & Book-Keeping': '/accounting-bookkeeping-services-dubai-uae',
      'Auditing Services': '/auditing-firm-dubai',
      'Company Liquidation': '/company-liquidation-in-dubai-uae',
      'Branch Office Setup': '/branch-office-of-a-foreign-company-uae',
      'Company Registration': '/company-registration-dubai',
      'E-Commerce Formation': '/ecommerce-company-setup-dubai-uae',
      'LLC Formation': '/llc-company-formation-dubai-uae'
    };
    
    const url = serviceUrls[serviceTitle] || '/contact';
    
    return (
      <Link 
        to={url}
        className="text-primary-red font-medium flex items-center group hover:text-primary-navy transition-colors"
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    );
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Dubai Mainland Company Formation
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Start Your Mainland Company in Dubai with Confidence
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                100% foreign ownership. Transparent pricing. Get your license issued in as little as 5 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openCalendly}
                  className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Get Free Consultation
                </button>
                <Link 
                  to="/cost-calculator"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold inline-flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate My License Cost
                </Link>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dubai Business District and Professional Handshake"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Set Up a Mainland Company in Dubai?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Dubai Mainland licenses allow you to operate freely across the UAE, work with government entities, and grow without limits on employee visas or business activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-grey-600 text-sm text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mainland License Types Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Mainland License Types We Offer
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Bizvisor helps you choose the right license type based on your business activity and target market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional License */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-navy" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                Professional License
              </h3>
              <p className="text-grey-600 text-center mb-6 leading-relaxed">
                For consultancy, IT, and service-oriented businesses
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Management Consulting
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  IT Services & Software
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Legal & Financial Services
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Marketing & Advertising
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Engineering Services
                </div>
              </div>
            </div>

            {/* Commercial License */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20">
              <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary-red" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                Commercial License
              </h3>
              <p className="text-grey-600 text-center mb-6 leading-relaxed">
                For trading, retail, ecommerce
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Import & Export Trading
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Retail & Wholesale
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  E-commerce Platforms
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Distribution Services
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  General Trading
                </div>
              </div>
            </div>

            {/* Industrial License */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20">
              <div className="w-16 h-16 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-alert-success" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                Industrial License
              </h3>
              <p className="text-grey-600 text-center mb-6 leading-relaxed">
                For manufacturing, warehousing, and production
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Manufacturing Operations
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Warehousing & Storage
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Production Facilities
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Assembly Operations
                </div>
                <div className="flex items-center text-sm text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                  Logistics Services
                </div>
              </div>
            </div>
          </div>

          {/* CTA Below License Types */}
          <div className="text-center mt-12">
            <p className="text-grey-600 mb-6">
              Not sure which license type is right for your business?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
              >
                Get Expert Guidance
              </button>
              <Link 
                to="/cost-calculator"
                className="border-2 border-primary-red text-primary-red px-8 py-3 rounded-lg hover:bg-primary-red hover:text-white transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Calculate License Cost
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How to Start Your Mainland Business with Bizvisor
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our proven 5-step process ensures smooth and efficient mainland company formation with expert guidance at every stage.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop Process Flow */}
            <div className="hidden lg:block relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-primary-red/20"></div>
              
              <div className="grid grid-cols-5 gap-4">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="bg-grey-50 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-heading-dark mb-2 text-sm">
                      Free Consultation & Activity Selection
                    </h3>
                    <p className="text-xs text-grey-600">
                      Discuss your business goals and select the right activities for your license
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="bg-grey-50 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-heading-dark mb-2 text-sm">
                      Name Reservation & Initial Approvals
                    </h3>
                    <p className="text-xs text-grey-600">
                      Reserve your company name and obtain initial approvals from authorities
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="bg-grey-50 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-heading-dark mb-2 text-sm">
                      Document Processing & Office Lease
                    </h3>
                    <p className="text-xs text-grey-600">
                      Process all required documents and secure your business office location
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <div className="bg-grey-50 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-heading-dark mb-2 text-sm">
                      License Issuance & MOA Signing
                    </h3>
                    <p className="text-xs text-grey-600">
                      Receive your trade license and complete MOA signing procedures
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <span className="text-2xl font-bold text-white">5</span>
                  </div>
                  <div className="bg-grey-50 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-heading-dark mb-2 text-sm">
                      Visa Applications & Corporate Bank Account Opening
                    </h3>
                    <p className="text-xs text-grey-600">
                      Process visa applications and open your corporate bank account
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Process Flow */}
            <div className="lg:hidden space-y-6">
              {[
                {
                  number: "1",
                  title: "Free Consultation & Activity Selection",
                  description: "Discuss your business goals and select the right activities for your license"
                },
                {
                  number: "2", 
                  title: "Name Reservation & Initial Approvals",
                  description: "Reserve your company name and obtain initial approvals from authorities"
                },
                {
                  number: "3",
                  title: "Document Processing & Office Lease", 
                  description: "Process all required documents and secure your business office location"
                },
                {
                  number: "4",
                  title: "License Issuance & MOA Signing",
                  description: "Receive your trade license and complete MOA signing procedures"
                },
                {
                  number: "5",
                  title: "Visa Applications & Corporate Bank Account Opening",
                  description: "Process visa applications and open your corporate bank account"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </div>
                  <div className="bg-grey-50 rounded-xl p-4 flex-1 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-heading-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-grey-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Below Process */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-8 text-white max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Mainland Company?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our expert team will guide you through each step of the process. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
                >
                  Start Step 1: Free Consultation
                </button>
                <Link 
                  to="/cost-calculator"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Calculate Total Cost
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Cost Breakdown Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Dubai Mainland Company Setup Cost (2025)
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Company formation costs vary based on activity, number of visas, and office space needs. We offer custom packages for startups and growing businesses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Cost Breakdown Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* License Fees */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-primary-red">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-red" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-red">AED 12,500</div>
                    <div className="text-sm text-grey-600">Starting from</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-2">License Fees</h3>
                <p className="text-grey-600 text-sm">
                  Government fees for trade license registration and initial approvals
                </p>
              </div>

              {/* Local Service Agent */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-primary-navy">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-navy" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-navy">AED 5,000–8,000</div>
                    <div className="text-sm text-grey-600">per year</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-2">Local Service Agent</h3>
                <p className="text-grey-600 text-sm">
                  Required for certain activities - professional local representation
                </p>
              </div>

              {/* Office Lease */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-alert-success">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-alert-success/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-alert-success" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-alert-success">AED 6,000</div>
                    <div className="text-sm text-grey-600">per year</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-2">Office Lease</h3>
                <p className="text-grey-600 text-sm">
                  Starting from flexi desks - scalable office solutions available
                </p>
              </div>

              {/* Visa Processing */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-grey-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-grey-700/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-grey-700" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-grey-700">AED 3,500–7,000</div>
                    <div className="text-sm text-grey-600">per visa</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-2">Visa Processing</h3>
                <p className="text-grey-600 text-sm">
                  Residence visa fees for owners, employees, and family members
                </p>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 text-white text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Complete Package Starting From</h3>
              <div className="text-4xl font-bold mb-2">AED 27,000</div>
              <p className="text-red-100 mb-6">
                Includes license, office space, and 1 visa - customizable based on your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="bg-white text-primary-red px-8 py-3 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
                >
                  Get a Custom Quote
                </button>
                <Link 
                  to="/cost-calculator"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold inline-flex items-center justify-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Use Cost Calculator
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-xl p-6 border border-grey-200">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">What's Included in Our Service</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-grey-600">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                        Trade license processing
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                        MOA preparation & signing
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                        Office lease assistance
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                        Visa application support
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                        Bank account opening
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                        Ongoing compliance support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bizvisor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Work with Bizvisor?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Choose Bizvisor for proven expertise, transparent processes, and comprehensive support throughout your mainland company formation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 15+ Years Experience */}
            <div className="bg-grey-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary-red" />
              </div>
              <div className="text-4xl font-bold text-primary-red mb-3">15+</div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Years of Setup Experience
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Over a decade of expertise in UAE mainland company formation with deep knowledge of regulations and processes.
              </p>
            </div>

            {/* 1000+ Companies Registered */}
            <div className="bg-grey-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20">
              <div className="w-20 h-20 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-primary-navy" />
              </div>
              <div className="text-4xl font-bold text-primary-navy mb-3">1000+</div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Companies Registered
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Successfully registered over 1000 mainland companies across diverse industries and business activities.
              </p>
            </div>

            {/* Free Consultation & Custom Planning */}
            <div className="bg-grey-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20">
              <div className="w-20 h-20 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-alert-success" />
              </div>
              <div className="text-2xl font-bold text-alert-success mb-3">FREE</div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Consultation & Custom Planning
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Complimentary consultation with tailored business setup plans designed for your specific requirements.
              </p>
            </div>

            {/* 100% Regulatory Compliance */}
            <div className="bg-grey-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary-red" />
              </div>
              <div className="text-4xl font-bold text-primary-red mb-3">100%</div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Regulatory Compliance
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Full compliance with UAE mainland regulations ensuring your business setup meets all legal requirements.
              </p>
            </div>

            {/* Transparent Pricing & No Delays */}
            <div className="bg-grey-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20 md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-navy" />
              </div>
              <div className="text-2xl font-bold text-primary-navy mb-3">NO</div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Hidden Costs or Delays
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Transparent pricing with no hidden fees and guaranteed timelines for efficient mainland company formation.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 text-white text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold mb-1">4.9/5 Rating</div>
                <div className="text-red-100">Based on 500+ reviews</div>
              </div>
              
              <div className="flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-white mb-3" />
                <div className="text-2xl font-bold mb-1">98% Success Rate</div>
                <div className="text-red-100">Consistently exceeding expectations</div>
              </div>
              
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-white mb-3" />
                <div className="text-2xl font-bold mb-1">Licensed & Certified</div>
                <div className="text-red-100">DED Licensed CSP #1145129</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Mainland Formation Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive services to establish and manage your Dubai mainland company with complete support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-grey-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-grey-600">
                      <CheckCircle className="w-4 h-4 text-alert-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {getServiceLink(service.title)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              FAQs – Dubai Mainland Company Formation
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about Dubai mainland company formation and our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-grey-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-grey-50 transition-colors duration-200"
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

          {/* FAQ CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Get personalized answers from our Dubai mainland formation experts. Schedule your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="bg-white text-primary-navy px-8 py-3 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
                >
                  Ask Our Experts
                </button>
                <button 
                  onClick={openCalendly}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Bottom Banner) */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Set Up Your Mainland Business in Dubai
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            End-to-end company formation. Free consultation. No hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Start My Business
            </button>
            <button 
              onClick={openCalendly}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold"
            >
              Talk to a Specialist
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

export default MainlandFormation;