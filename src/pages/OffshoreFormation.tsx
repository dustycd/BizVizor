import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Globe, Lock, DollarSign, Zap, Users, TrendingUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const OffshoreFormation = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const offshoreJurisdictions = [
    {
      name: 'Ajman Offshore',
      description: 'Cost-effective offshore solution with excellent privacy protection and business flexibility.',
      benefits: ['Low Setup Cost', 'Privacy Protection', 'Asset Protection', 'Tax Efficiency'],
      minCapital: 'No Minimum',
      setupTime: '3-5 days'
    },
    {
      name: 'Jafza Offshore',
      description: 'Premium offshore jurisdiction with world-class infrastructure and international recognition.',
      benefits: ['International Recognition', 'Banking Access', 'Investment Flexibility', 'Global Presence'],
      minCapital: 'USD 1,000',
      setupTime: '5-7 days'
    },
    {
      name: 'RAK Offshore',
      description: 'Established offshore center with comprehensive services and competitive advantages.',
      benefits: ['Established Jurisdiction', 'Competitive Fees', 'Professional Services', 'Regulatory Compliance'],
      minCapital: 'USD 1,000',
      setupTime: '5-7 days'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Protect your assets from potential risks and liabilities'
    },
    {
      icon: Lock,
      title: 'Privacy & Confidentiality',
      description: 'Maintain complete privacy of ownership and operations'
    },
    {
      icon: DollarSign,
      title: 'Tax Optimization',
      description: 'Benefit from tax-efficient structures and planning'
    },
    {
      icon: Globe,
      title: 'International Presence',
      description: 'Establish global presence with international credibility'
    }
  ];

  const features = [
    {
      title: 'No Physical Presence Required',
      description: 'Operate your offshore company without maintaining physical presence in the jurisdiction.',
      icon: Globe
    },
    {
      title: 'Flexible Ownership Structure',
      description: 'Enjoy flexible ownership structures with nominee services available.',
      icon: Users
    },
    {
      title: 'International Banking',
      description: 'Access to international banking services and financial institutions.',
      icon: DollarSign
    },
    {
      title: 'Investment Flexibility',
      description: 'Freedom to invest in various asset classes and jurisdictions.',
      icon: TrendingUp
    },
    {
      title: 'Confidentiality Protection',
      description: 'Strong confidentiality laws protecting beneficial ownership information.',
      icon: Lock
    },
    {
      title: 'Quick Formation',
      description: 'Fast and efficient company formation process with minimal documentation.',
      icon: Zap
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Choose Jurisdiction',
      description: 'Select the most suitable offshore jurisdiction for your needs'
    },
    {
      step: '02',
      title: 'Prepare Documents',
      description: 'Prepare and notarize all required incorporation documents'
    },
    {
      step: '03',
      title: 'Submit Application',
      description: 'Submit application to the relevant offshore authority'
    },
    {
      step: '04',
      title: 'Company Formation',
      description: 'Receive certificate of incorporation and company documents'
    }
  ];

  const useCases = [
    {
      title: 'International Trading',
      description: 'Facilitate international trade and commerce with global reach',
      icon: Globe
    },
    {
      title: 'Investment Holding',
      description: 'Hold investments and assets in a tax-efficient structure',
      icon: DollarSign
    },
    {
      title: 'Intellectual Property',
      description: 'Protect and monetize intellectual property assets',
      icon: Shield
    },
    {
      title: 'Estate Planning',
      description: 'Efficient estate planning and wealth preservation strategies',
      icon: Lock
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-grey-700 to-grey-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Offshore Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Establish Your Offshore Company in UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Create offshore companies for asset protection, tax optimization, and international business operations. Choose from established UAE offshore jurisdictions with proven track records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start Formation
              </Link>
              <a 
                href="#jurisdictions-section"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-grey-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Compare Jurisdictions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose Offshore Formation?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Offshore companies offer unique advantages for international business, asset protection, and tax planning.
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

      {/* Jurisdictions Section */}
      <section id="jurisdictions-section" className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              UAE Offshore Jurisdictions
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Choose from established UAE offshore jurisdictions, each offering unique advantages for different business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offshoreJurisdictions.map((jurisdiction, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-grey-700 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark">
                      {jurisdiction.name}
                    </h3>
                    <p className="text-sm text-primary-red font-medium">
                      Setup: {jurisdiction.setupTime}
                    </p>
                  </div>
                </div>
                
                <p className="text-grey-600 mb-4">
                  {jurisdiction.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm text-grey-600 mb-2">Minimum Capital</div>
                  <div className="font-semibold text-heading-dark">{jurisdiction.minCapital}</div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {jurisdiction.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-grey-600">
                      <CheckCircle className="w-4 h-4 text-alert-success mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="w-full bg-grey-700 text-white py-3 rounded-lg hover:bg-grey-800 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Offshore Company Features
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive features and benefits that make offshore companies ideal for international business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-grey-700 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-grey-600">
                  {feature.description}
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
              Common Use Cases
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Discover how offshore companies can benefit different types of business activities and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-grey-700/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-7 h-7 text-grey-700" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {useCase.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {useCase.description}
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
              Formation Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Simple and efficient process to establish your offshore company with complete legal compliance.
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
            Ready to Form Your Offshore Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance on offshore company formation and choose the right jurisdiction for your business needs.
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

export default OffshoreFormation;