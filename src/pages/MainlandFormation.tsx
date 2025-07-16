import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Users, MapPin, FileText, Globe, Briefcase, Calculator } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const MainlandFormation = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

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
      title: 'Initial Consultation',
      description: 'Discuss your business requirements and choose the right structure'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'Prepare and notarize all required documents and applications'
    },
    {
      step: '03',
      title: 'License Application',
      description: 'Submit applications to DED and relevant authorities'
    },
    {
      step: '04',
      title: 'Approval & Setup',
      description: 'Receive approvals and complete business setup process'
    }
  ];

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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our streamlined process ensures quick and hassle-free company formation in Dubai mainland.
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
            Ready to Start Your Dubai Mainland Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance and complete support for your business formation. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Get Free Consultation
            </button>
            <a href="tel:+971412344567">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold">
              Call +971 4 123 4567
              </button>
            </a>
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

export default MainlandFormation;