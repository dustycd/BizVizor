import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, ArrowRight, FileText, BarChart3, TrendingUp, Shield, Users, Award, Eye, DollarSign } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const AccountingServices = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Professional Accounting & Bookkeeping Services in UAE | Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Streamline your business finances with expert accounting and bookkeeping services in the UAE. Trusted by SMEs and large businesses. Get a free consultation now!');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Streamline your business finances with expert accounting and bookkeeping services in the UAE. Trusted by SMEs and large businesses. Get a free consultation now!';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const services = [
    {
      title: 'VAT Services',
      description: 'Streamline your VAT compliance by ensuring that implementation is carried out in line with regulations and payments are made on schedule.',
      features: ['VAT Registration', 'Monthly/Quarterly Returns', 'VAT Compliance Review', 'Implementation Support'],
      icon: FileText
    },
    {
      title: 'Tax Services',
      description: 'Minimize your tax headaches, with a team of specialists who are experts in the latest tax laws for the UAE and your industry. Easily navigate complexities and find ways to optimize your tax liability.',
      features: ['Tax Planning', 'Tax Optimization', 'Industry Expertise', 'Compliance Management'],
      icon: Calculator
    },
    {
      title: 'Corporate Tax Registration',
      description: 'Now navigate UAE\'s mandatory corporate tax with ease, including paperwork and registration for all types of businesses. Meet your deadlines and avoid penalties with our assistance.',
      features: ['Tax Registration', 'Paperwork Handling', 'Deadline Management', 'Penalty Avoidance'],
      icon: Shield
    },
    {
      title: 'Bank Statement Reconciliation',
      description: 'Save hours on manual reconciliations with our speedy automated process. Eliminate errors and spot discrepancies in your accounts.',
      features: ['Automated Process', 'Error Elimination', 'Discrepancy Detection', 'Time Saving'],
      icon: BarChart3
    },
    {
      title: 'Payables and Receivables',
      description: 'Gain real time visibility into payments due, manage your cash flow better and stay ahead of fines and penalties from late payments. Our automations will help you put your focus where it\'s needed.',
      features: ['Real-time Visibility', 'Cash Flow Management', 'Payment Tracking', 'Automation Tools'],
      icon: DollarSign
    },
    {
      title: 'Financial Reports',
      description: 'Get professional assistance to translate your financial data into easy reports with actionable insights. Whether you\'re looking to make smarter business decisions or secure funding, these reports will empower you.',
      features: ['Actionable Insights', 'Professional Reports', 'Business Intelligence', 'Funding Support'],
      icon: TrendingUp
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Team of Experts',
      description: 'We have a staff of expert bookkeepers who help companies to manage accurate and effective financial records.'
    },
    {
      icon: Award,
      title: 'Breadth of Knowledge',
      description: 'Not only do we cover different aspects of accounting and bookkeeping, we have specialized knowledge in each.'
    },
    {
      icon: TrendingUp,
      title: 'Depth of Experience',
      description: 'We have handled financial affairs for companies in different emirates, industries and sizes effectively over the years.'
    },
    {
      icon: Shield,
      title: 'Understanding of Complex Legalities',
      description: 'Our team are experts in financial regulations as well accustomed to dealing with varied use cases, issues and factors that influence your company\'s fiscal health.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Our rates for bookkeeping and accounting services in Dubai are reasonable. When you sign on with us, there will be no hidden surprises in your bill!'
    },
    {
      icon: Eye,
      title: 'Helps You Make Educated Choices',
      description: 'Steer your enterprise to success by identifying financial opportunities and gaps based on trustworthy data.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Professional Accounting Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Accounting & Bookkeeping Services in Dubai, UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Focus on your core business while we take care of your financial operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Get Accounting Services
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Reliable Accounting and Bookkeeping Services in Dubai, UAE
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed mb-8">
              Entrust your accounting and bookkeeping services in the UAE to Bizvisor's team of specialists, and ensure that you are 100% fiscally compliant with the country's rules and regulations. Bookkeeping, a private enterprise accounting process component, refers to carefully recording financial transactions. Over the last few years, we've earned a strong reputation for providing the most dependable bookkeeping service in the UAE. We will assist you in maintaining a correct book of accounts to handle your accounting and tax preparation requirements while adhering to UAE tax rules. We ensure the security and prosperity of your company via precise accounting and accounts management, which is more than simply tracking your payables and receivables. Bizvisor is one of the top accounting and bookkeeping companies in the UAE, providing exceptional services and keeping records of the day-to-day transactions in a company entity.
            </p>
            <div className="bg-primary-red/10 rounded-xl p-6 mb-8">
              <p className="text-xl font-semibold text-primary-red">
                'Discover professional accounting and bookkeeping services starting from AED 799 per month'
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Benefit From Bizvisor's Expertise With Bookkeeping In Dubai
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              As one of leading professional accounting firms in the UAE, Bizvisor provides businesses with complete bookkeeping services. Here's why you would work with us:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Explore Our Accounting Services in Dubai, UAE
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              One of the best accounting firms in Dubai, Bizvisor is a professional organization that offers bookkeeping and accounting for private enterprises in Dubai. Accounting and bookkeeping services have grown more streamlined internationally, making them more technical and complex. We cover all aspects of accounting and strive to understand your private enterprise's accounting and bookkeeping needs, and long-term objectives, to create a package that meets all your demands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
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
                <Link 
                  to="/contact"
                  className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Exclusive Packages
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Specially designed packages to simplify your Account Management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-heading-dark mb-4">BASIC PLAN</h3>
              <div className="text-4xl font-bold text-primary-red mb-2">AED 799</div>
              <div className="text-grey-600 mb-6">per month*</div>
              <div className="text-sm font-semibold text-primary-navy mb-6">Up To 50 Monthly Transactions</div>
              
              <div className="text-left space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">Get Free VAT & ESR Assessment</h4>
                </div>
                
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">Updating Day To Day Transactions</h4>
                  <ul className="space-y-1 text-sm text-grey-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Sales
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Purchase
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      General
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">Monthly Accounting Reports</h4>
                  <ul className="space-y-1 text-sm text-grey-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Sales
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Accounts Receivable
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Accounts Payable
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Bank Reconciliation
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">Financial Statements</h4>
                  <ul className="space-y-1 text-sm text-grey-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Balance Sheet
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Income Statement
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>

            {/* Advanced Plan */}
            <div className="bg-primary-red rounded-xl p-8 text-center text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-navy text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">ADVANCED PLAN</h3>
              <div className="text-4xl font-bold mb-2">AED 1,899</div>
              <div className="text-red-100 mb-6">per month*</div>
              <div className="text-sm font-semibold mb-6">Up To 150 Monthly Transactions</div>
              
              <div className="text-left space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Get Free VAT Consultation & ESR Notification Guidance With Annual Accounting Plan</h4>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Updating Day To Day Transactions</h4>
                  <ul className="space-y-1 text-sm text-red-100">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Sales
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Purchase
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      General
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Monthly Accounting Reports</h4>
                  <ul className="space-y-1 text-sm text-red-100">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Sales
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Accounts Receivable
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Accounts Payable
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Bank Reconciliation
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Financial Statements</h4>
                  <ul className="space-y-1 text-sm text-red-100">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Balance Sheet
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Income Statement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-white mr-2" />
                      Cash Flow Statement
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-white text-primary-red py-3 rounded-lg hover:bg-grey-100 transition-colors font-semibold inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-heading-dark mb-4">PREMIUM PLAN</h3>
              <div className="text-4xl font-bold text-primary-red mb-2">AED 3,099</div>
              <div className="text-grey-600 mb-6">per month*</div>
              <div className="text-sm font-semibold text-primary-navy mb-6">Up To 400 Monthly Transactions</div>
              
              <div className="text-left space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">Get Free VAT Consultation & ESR Notification Guidance With Annual Accounting Plan</h4>
                </div>
                
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">Updating Day To Day Transactions</h4>
                  <ul className="space-y-1 text-sm text-grey-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Sales
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Purchase
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      General
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">Monthly Accounting Reports</h4>
                  <ul className="space-y-1 text-sm text-grey-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Sales
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Accounts Receivable
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Accounts Payable
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Bank Reconciliation
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-heading-dark mb-2">Financial Statements</h4>
                  <ul className="space-y-1 text-sm text-grey-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Balance Sheet
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Income Statement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Fixed Asset Register
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2" />
                      Financial Analysis
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Outsource Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Why Should You Outsource Accounting And Bookkeeping In Dubai, UAE?
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed mb-8">
              A comprehensive day-to-day accounting of your company is vital for tracking your firm's revenue, assets, and obligations. Outsourcing accounting services in Dubai, UAE, to accounting firms is highly recommended because we can ensure that your business's financial picture is clear, easy to understand, relevant and comparable, underscoring its reliability to your key decision makers, which will help with financial strategy and planning.
            </p>
            <p className="text-lg text-grey-600 leading-relaxed mb-6">
              Other benefits of outsourcing bookkeeping and accounting services to bookkeeping businesses in Dubai and UAE include:
            </p>
            <div className="bg-grey-50 rounded-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Assistance in resolving technical accounting issues that cannot be resolved in-house.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Assistance in meeting International Financial Reporting Standards and local legislation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Assistance in seamlessly transferring, sharing, managing, and closing accounts throughout a company's merger, acquisition, and liquidation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Fulfilling IFRS's need for educated accountants for comprehensive accounting as well as local organizations' requirements.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Assistance in presenting a fair and detailed study of your financial status and health to local banks, shareholders, and investors.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              How Are Accounting And Bookkeeping Services In Dubai Different?
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-grey-600 leading-relaxed">
                Accounting and bookkeeping are critical for maintaining a company's financial records, but their breadth and complexity vary. The systematic recording, structuring, and classifying of economic activities such as sales, purchases, receipts, and payments is the primary focus of bookkeeping. It is concerned with keeping correct and up-to-date financial records. On the other hand, accounting involves a more extensive range of operations, such as understanding and analyzing financial data, creating financial statements, doing financial planning, and offering decision-making insights. At Bizvisor, we offer comprehensive accounting and booking services to our discerning clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Accounting?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert accountants handle your books while you focus on growing your business. Get started today.
          </p>
          <p className="text-lg text-white/90 mb-8">
            Call us at +971 56 496 0040 to simplify your bookkeeping and accounting in Dubai and the UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Get Free Consultation
            </button>
            <a href="tel:+971564960040">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold">
                Call +971 56 496 0040
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

export default AccountingServices;