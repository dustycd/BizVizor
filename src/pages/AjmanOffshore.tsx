import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Globe, Lock, DollarSign, Zap } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const AjmanOffshore = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const benefits = [
    {
      icon: DollarSign,
      title: 'Low Setup Cost',
      description: 'Most cost-effective offshore solution in the UAE'
    },
    {
      icon: Lock,
      title: 'Privacy Protection',
      description: 'Strong confidentiality laws protecting beneficial ownership'
    },
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Protect your assets from potential risks and liabilities'
    },
    {
      icon: Globe,
      title: 'International Business',
      description: 'Ideal for international trading and investment activities'
    }
  ];

  const features = [
    {
      title: 'No Minimum Capital',
      description: 'Start your offshore company without minimum capital requirements',
      icon: DollarSign
    },
    {
      title: 'Tax Efficiency',
      description: 'Zero corporate and personal income tax on offshore activities',
      icon: Shield
    },
    {
      title: 'Nominee Services',
      description: 'Nominee director and shareholder services available',
      icon: Lock
    },
    {
      title: 'Quick Formation',
      description: 'Company formation completed in 3-5 working days',
      icon: Zap
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Name Reservation',
      description: 'Reserve your preferred company name with Ajman authorities'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'Prepare and notarize all incorporation documents'
    },
    {
      step: '03',
      title: 'Registration',
      description: 'Submit application and complete registration process'
    },
    {
      step: '04',
      title: 'Certificate Issuance',
      description: 'Receive certificate of incorporation and company documents'
    }
  ];

  const useCases = [
    'International Trading',
    'Investment Holding',
    'Asset Protection',
    'Estate Planning',
    'Intellectual Property Holding',
    'International Consulting'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-grey-700 to-grey-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Ajman Offshore Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ajman Offshore Company Formation
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your offshore company in Ajman with the most cost-effective solution in the UAE. Perfect for international business, asset protection, and tax planning.
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
              Why Choose Ajman Offshore?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Ajman offers the most cost-effective offshore solution in the UAE with excellent privacy protection and business flexibility.
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

      {/* Features Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Key Features
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive features that make Ajman offshore companies ideal for international business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-grey-700/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-grey-700" />
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
              Ajman offshore companies are perfect for various international business activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-grey-700 rounded-xl flex items-center justify-center mx-auto mb-4">
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
              Simple and efficient process to establish your Ajman offshore company.
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
      <section className="py-20 bg-gradient-to-r from-grey-700 to-grey-900">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Form Your Ajman Offshore Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance on Ajman offshore company formation and start your international business today.
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
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-grey-700 transition-all duration-200 font-semibold"
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

export default AjmanOffshore;