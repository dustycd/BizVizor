import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Shield, CheckCircle, ArrowRight, Globe, Lock, DollarSign, Zap, Award, ChevronDown, ChevronUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const JafzaOffshore = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const benefits = [
    {
      icon: Award,
      title: 'International Recognition',
      description: 'Globally recognized and respected offshore jurisdiction'
    },
    {
      icon: Globe,
      title: 'Banking Access',
      description: 'Easy access to international banking and financial services'
    },
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Strong legal framework for asset protection and privacy'
    },
    {
      icon: DollarSign,
      title: 'Investment Flexibility',
      description: 'Freedom to invest in various asset classes globally'
    }
  ];

  const features = [
    {
      title: 'Minimum Capital USD 1,000',
      description: 'Low minimum capital requirement for company formation',
      icon: DollarSign
    },
    {
      title: 'Tax Efficiency',
      description: 'Zero corporate and personal income tax on offshore activities',
      icon: Shield
    },
    {
      title: 'Global Presence',
      description: 'Establish international presence with JAFZA credibility',
      icon: Globe
    },
    {
      title: 'Professional Services',
      description: 'Access to world-class professional and financial services',
      icon: Award
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Name Approval',
      description: 'Submit and get approval for your company name'
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'Prepare and submit all required incorporation documents'
    },
    {
      step: '03',
      title: 'Registration',
      description: 'Complete registration with JAFZA offshore authorities'
    },
    {
      step: '04',
      title: 'Certificate & Setup',
      description: 'Receive incorporation certificate and complete setup'
    }
  ];

  const useCases = [
    'International Trading',
    'Investment Holding',
    'Asset Management',
    'Intellectual Property',
    'International Consulting',
    'Global Business Operations'
  ];

  const advantages = [
    {
      title: 'World-Class Infrastructure',
      description: 'Access to premium facilities and business infrastructure'
    },
    {
      title: 'Strategic Location',
      description: 'Gateway between East and West for international business'
    },
    {
      title: 'Regulatory Excellence',
      description: 'Well-established regulatory framework and compliance standards'
    },
    {
      title: 'Business Support',
      description: 'Comprehensive business support services and facilities'
    }
  ];

  const faqs = [
    {
      question: "Why choose JAFZA Offshore for company formation?",
      answer: "JAFZA Offshore is highly reputed, ideal for holding companies, international trading, and asset protection, and is recognized by global banks."
    },
    {
      question: "Can a JAFZA Offshore company trade in the UAE mainland?",
      answer: "No, JAFZA Offshore entities cannot operate in the UAE mainland but can hold investments and own approved Dubai properties."
    },
    {
      question: "What is the cost of forming a JAFZA Offshore company?",
      answer: "Setup costs are higher than other offshore jurisdictions, starting from AED 18,000–22,000, reflecting its premium status."
    },
    {
      question: "How long does incorporation take?",
      answer: "The process typically takes 5–7 working days due to stricter compliance and background checks."
    },
    {
      question: "Is 100% foreign ownership allowed?",
      answer: "Yes, JAFZA Offshore permits 100% foreign ownership with no local sponsor required."
    },
    {
      question: "What activities are allowed under JAFZA Offshore?",
      answer: "International trading, asset holding, intellectual property registration, and investment management are common activities."
    },
    {
      question: "Do I need a physical office?",
      answer: "No, only a registered agent and legal registered address within JAFZA are required."
    },
    {
      question: "Are visas available with JAFZA Offshore?",
      answer: "No, JAFZA Offshore does not issue residency visas for shareholders or staff."
    },
    {
      question: "Can JAFZA Offshore companies own Dubai properties?",
      answer: "Yes, they are allowed to own properties in designated freehold areas like Palm Jumeirah and Emirates Hills."
    },
    {
      question: "What taxes apply to JAFZA Offshore?",
      answer: "Enjoy 0% corporate tax, 0% VAT, and full repatriation of capital and profits, making it highly tax-efficient."
    },
    {
      question: "Do I need annual audits?",
      answer: "Yes, JAFZA Offshore requires companies to maintain audited financial statements and submit them annually."
    },
    {
      question: "Is it good for international banking?",
      answer: "Yes, JAFZA Offshore's strong reputation makes it ideal for opening corporate bank accounts in UAE and abroad."
    },
    {
      question: "What documents are required for setup?",
      answer: "You need passport copies, proof of address, bank reference letters, and shareholder details."
    },
    {
      question: "Can Bizvisor assist in bank account opening?",
      answer: "Yes, Bizvisor has relationships with leading UAE banks, making the account opening process seamless."
    },
    {
      question: "Why choose Bizvisor for JAFZA Offshore?",
      answer: "Bizvisor offers expert consultation, quick approvals, and compliance support, ensuring hassle-free setup."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              JAFZA Offshore Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              JAFZA Offshore Company Formation
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your offshore company in JAFZA, one of the most prestigious and internationally recognized offshore jurisdictions in the UAE. Perfect for global business operations.
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
              Why Choose JAFZA Offshore?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              JAFZA offers premium offshore services with international recognition and world-class infrastructure.
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

      {/* Features Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Key Features
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive features that make JAFZA offshore companies ideal for international business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary-navy" />
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
              JAFZA Advantages
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Unique advantages that set JAFZA apart as a premier offshore jurisdiction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4">
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

      {/* Use Cases Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Ideal Use Cases
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              JAFZA offshore companies are perfect for various international business activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Formation Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Professional process to establish your JAFZA offshore company with complete compliance.
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about JAFZA Offshore company formation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
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
                        <ChevronUp className="w-5 h-5 text-primary-navy" />
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
            Ready to Form Your JAFZA Offshore Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance on JAFZA offshore company formation and establish your international business presence.
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
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold"
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

export default JafzaOffshore;