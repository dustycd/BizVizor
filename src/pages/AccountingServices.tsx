import React from 'react';
import { Calculator, CheckCircle, ArrowRight, FileText, BarChart3, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const AccountingServices = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const services = [
    {
      title: 'Bookkeeping Services',
      description: 'Professional bookkeeping to maintain accurate financial records for your business.',
      features: ['Daily Transaction Recording', 'Bank Reconciliation', 'Accounts Payable/Receivable', 'Financial Statements'],
      price: 'Starting from AED 1,500/month'
    },
    {
      title: 'VAT Registration & Filing',
      description: 'Complete VAT compliance services including registration, filing, and advisory.',
      features: ['VAT Registration', 'Monthly/Quarterly Returns', 'VAT Compliance Review', 'Penalty Management'],
      price: 'Starting from AED 2,000/month'
    },
    {
      title: 'Corporate Tax Services',
      description: 'Comprehensive corporate tax compliance and planning services.',
      features: ['Tax Registration', 'Tax Return Filing', 'Tax Planning', 'Compliance Management'],
      price: 'Starting from AED 3,000/year'
    },
    {
      title: 'Payroll Management',
      description: 'Complete payroll processing and employee benefits administration.',
      features: ['Salary Processing', 'WPS Compliance', 'End of Service Benefits', 'Payroll Reports'],
      price: 'Starting from AED 100/employee'
    },
    {
      title: 'Financial Reporting',
      description: 'Detailed financial reports and analysis for informed business decisions.',
      features: ['Monthly Reports', 'Cash Flow Analysis', 'Budget vs Actual', 'KPI Dashboards'],
      price: 'Starting from AED 2,500/month'
    },
    {
      title: 'Audit Support',
      description: 'Professional support for internal and external audit requirements.',
      features: ['Audit Preparation', 'Documentation Support', 'Compliance Review', 'Audit Liaison'],
      price: 'Starting from AED 5,000'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Ensure full compliance with UAE accounting and tax regulations'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Focus on growing your business while we handle the numbers'
    },
    {
      icon: BarChart3,
      title: 'Financial Insights',
      description: 'Get valuable insights from your financial data and reports'
    },
    {
      icon: Calculator,
      title: 'Cost Effective',
      description: 'Professional accounting services at competitive rates'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate your current accounting needs and requirements'
    },
    {
      step: '02',
      title: 'Setup',
      description: 'Implement accounting systems and processes'
    },
    {
      step: '03',
      title: 'Processing',
      description: 'Handle daily accounting operations and transactions'
    },
    {
      step: '04',
      title: 'Reporting',
      description: 'Provide regular reports and financial insights'
    }
  ];

  const complianceAreas = [
    {
      title: 'VAT Compliance',
      description: 'Complete VAT registration, filing, and compliance management',
      requirements: ['VAT Registration', 'Monthly/Quarterly Returns', 'Input Tax Recovery', 'Compliance Reviews']
    },
    {
      title: 'Corporate Tax',
      description: 'Corporate tax registration and filing for UAE businesses',
      requirements: ['Tax Registration', 'Annual Returns', 'Tax Planning', 'Compliance Management']
    },
    {
      title: 'ESR Compliance',
      description: 'Economic Substance Regulations compliance and reporting',
      requirements: ['ESR Assessment', 'Annual Notifications', 'Economic Substance Reports', 'Compliance Reviews']
    },
    {
      title: 'AML Compliance',
      description: 'Anti-Money Laundering compliance and reporting requirements',
      requirements: ['AML Policies', 'Suspicious Activity Reporting', 'Customer Due Diligence', 'Training Programs']
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
              Expert Accounting & Bookkeeping Services
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Comprehensive accounting services to keep your business compliant and financially healthy. From bookkeeping to tax filing, we handle all your accounting needs professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
              >
                Get Accounting Services
              </button>
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
              Why Choose Our Accounting Services?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Professional accounting services that help you maintain compliance, make informed decisions, and focus on growing your business.
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

      {/* Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Accounting Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive accounting solutions tailored to meet your business needs and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-red font-semibold text-sm mb-3">
                  {service.price}
                </p>
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
                <Link to="/contact" className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-center block">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              UAE Compliance Requirements
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Stay compliant with UAE regulations through our comprehensive compliance management services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-heading-dark">
                    {area.title}
                  </h3>
                </div>
                
                <p className="text-grey-600 mb-4">
                  {area.description}
                </p>
                
                <div className="space-y-2">
                  {area.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center text-sm text-grey-700">
                      <CheckCircle className="w-3 h-3 text-alert-success mr-2 flex-shrink-0" />
                      {req}
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
              Our Service Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Streamlined process to deliver professional accounting services efficiently and accurately.
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Transparent Pricing
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Choose from our flexible pricing packages designed to meet different business needs and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-grey-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-heading-dark mb-4">Startup Package</h3>
              <div className="text-4xl font-bold text-primary-red mb-2">AED 1,500</div>
              <div className="text-grey-600 mb-6">per month</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">Basic Bookkeeping</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">Monthly Reports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">VAT Filing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">Email Support</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block">
                Get Started
              </Link>
            </div>

            <div className="bg-primary-red rounded-xl p-8 text-center text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-navy text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Package</h3>
              <div className="text-4xl font-bold mb-2">AED 3,500</div>
              <div className="text-red-100 mb-6">per month</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-3" />
                  <span>Complete Bookkeeping</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-3" />
                  <span>Financial Reports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-3" />
                  <span>VAT & Tax Filing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-3" />
                  <span>Payroll Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-3" />
                  <span>Phone & Email Support</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-white text-primary-red py-3 rounded-lg hover:bg-grey-100 transition-colors font-semibold text-center block">
                Get Started
              </Link>
            </div>

            <div className="bg-grey-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-heading-dark mb-4">Enterprise Package</h3>
              <div className="text-4xl font-bold text-primary-red mb-2">AED 6,500</div>
              <div className="text-grey-600 mb-6">per month</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">Full Accounting Suite</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">Advanced Reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">All Tax Services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">Audit Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  <span className="text-grey-700">Dedicated Manager</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block">
                Get Started
              </Link>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Get Free Consultation
            </button>
            <Link to="/" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold text-center">
              View All Services
            </Link>
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