import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Globe, Lock, DollarSign, Zap, Award } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const RasAlKhaimahOffshore = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const benefits = [
    {
      icon: Award,
      title: 'Established Jurisdiction',
      description: 'Well-established offshore center with proven track record'
    },
    {
      icon: DollarSign,
      title: 'Competitive Fees',
      description: 'Competitive pricing with excellent value for money'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Strong regulatory framework ensuring full compliance'
    },
    {
      icon: Globe,
      title: 'Professional Services',
      description: 'Access to comprehensive professional and support services'
    }
  ];

  const features = [
    {
      title: 'Minimum Capital USD 1,000',
      description: 'Reasonable minimum capital requirement for incorporation',
      icon: DollarSign
    },
    {
      title: 'Tax Benefits',
      description: 'Zero corporate and personal income tax advantages',
      icon: Shield
    },
    {
      title: 'Confidentiality',
      description: 'Strong privacy protection and confidentiality laws',
      icon: Lock
    },
    {
      title: 'Quick Setup',
      description: 'Efficient company formation in 5-7 working days',
      icon: Zap
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Name Reservation',
      description: 'Reserve your company name with RAK authorities'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'Prepare and authenticate all required documents'
    },
    {
      step: '03',
      title: 'Incorporation',
      description: 'Complete incorporation process with RAK offshore'
    },
    {
      step: '04',
      title: 'Company Setup',
      description: 'Receive certificates and complete company setup'
    }
  ];

  const useCases = [
    'International Trading',
    'Investment Holding',
    'Asset Protection',
    'Estate Planning',
    'Professional Services',
    'Consulting Activities'
  ];

  const advantages = [
    {
      title: 'Strategic Location',
      description: 'Excellent location for Middle East and international business operations'
    },
    {
      title: 'Business Friendly',
      description: 'Supportive business environment with streamlined procedures'
    },
    {
      title: 'Cost Effective',
      description: 'Competitive setup and maintenance costs compared to other jurisdictions'
    },
    {
      title: 'Professional Support',
      description: 'Access to experienced professionals and service providers'
    }
  ];

  const complianceFeatures = [
    {
      title: 'Annual Returns',
      description: 'Simple annual return filing requirements'
    },
    {
      title: 'Audit Requirements',
      description: 'Flexible audit requirements based on company activities'
    },
    {
      title: 'Reporting Standards',
      description: 'Clear reporting standards and compliance guidelines'
    },
    {
      title: 'Regulatory Support',
      description: 'Ongoing regulatory support and guidance'
    }
  ];

  const faqs = [
    {
      question: "Why choose RAK ICC for offshore business?",
      answer: "RAK ICC is known for its cost-effectiveness, privacy, and international recognition, making it ideal for global trading and holding companies."
    },
    {
      question: "Can RAK ICC companies trade in the UAE mainland?",
      answer: "No, they cannot trade within the UAE mainland but can conduct international business and hold UAE real estate in approved zones."
    },
    {
      question: "What is the cost of RAK ICC incorporation?",
      answer: "It is one of the most affordable, starting from AED 9,000–12,000, making it popular with startups and investors."
    },
    {
      question: "How long does setup take?",
      answer: "RAK ICC incorporation is fast, usually completed within 2–3 working days with proper documentation."
    },
    {
      question: "Is 100% foreign ownership allowed?",
      answer: "Yes, RAK ICC permits 100% foreign ownership with no local sponsor or partner."
    },
    {
      question: "What activities are permitted?",
      answer: "Global trading, consultancy, asset protection, IP holding, and investment management are common permitted activities."
    },
    {
      question: "Do I need a physical office?",
      answer: "No physical office is required; only a registered agent and official registered address in RAK are mandatory."
    },
    {
      question: "Are visas available with RAK ICC?",
      answer: "No, RAK ICC offshore companies cannot issue residency visas."
    },
    {
      question: "Can RAK ICC companies open UAE bank accounts?",
      answer: "Yes, Bizvisor assists with corporate bank account openings, subject to KYC and compliance approval."
    },
    {
      question: "Can RAK ICC companies own property in Dubai?",
      answer: "Yes, they can own freehold properties in designated areas, subject to developer approval."
    },
    {
      question: "What taxes apply to RAK ICC companies?",
      answer: "There is 0% corporate tax, 0% VAT, and complete profit repatriation, making it tax-efficient."
    },
    {
      question: "Do I need annual audits?",
      answer: "Yes, RAK ICC requires maintaining proper accounting records and filing audited financials annually."
    },
    {
      question: "Is RAK ICC accepted for international banking?",
      answer: "Yes, RAK ICC has strong global recognition, making it easier to open international bank accounts."
    },
    {
      question: "What documents are required for setup?",
      answer: "Passport copies, proof of residence, shareholder details, and business activity descriptions are required."
    },
    {
      question: "Why use Bizvisor for RAK ICC incorporation?",
      answer: "Bizvisor ensures quick registration, bank account facilitation, and compliance handling for smooth offshore operations."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alert-success to-green-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              RAK Offshore Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ras Al Khaimah Offshore Company Formation
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your offshore company in Ras Al Khaimah, a well-established offshore jurisdiction offering competitive advantages and comprehensive professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start Formation
              </Link>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-alert-success transition-all duration-200 font-semibold"
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
              Why Choose RAK Offshore?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              RAK offers an established offshore jurisdiction with competitive advantages and comprehensive services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-alert-success" />
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

      {/* Features Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Key Features
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive features that make RAK offshore companies ideal for international business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-alert-success" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              RAK Offshore Advantages
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Unique advantages that make RAK an attractive offshore jurisdiction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-heading-dark">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-grey-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Compliance & Reporting
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Clear compliance requirements and ongoing support for your RAK offshore company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Ideal Use Cases
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              RAK offshore companies are perfect for various international business activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark">
                  {useCase}
                </h3>
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
              Formation Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Efficient process to establish your RAK offshore company with complete compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-alert-success rounded-2xl flex items-center justify-center mx-auto mb-6">
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
      <FAQSection 
        title="Frequently Asked Questions About RAK Offshore Formation"
        faqs={faqs} 
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-alert-success to-green-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Form Your RAK Offshore Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance on RAK offshore company formation and establish your international business presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Start Formation
            </Link>
            <button 
              onClick={openCalendly}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-alert-success transition-all duration-200 font-semibold"
            >
              Schedule Consultation
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

export default RasAlKhaimahOffshore;