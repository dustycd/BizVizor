import React from 'react';
import { Users, CheckCircle, ArrowRight, Import as Passport, Clock, Shield, Globe } from 'lucide-react';

const VisaServices = () => {
  const visaTypes = [
    {
      title: 'Employment Visa',
      description: 'Work permits and employment visas for professionals and skilled workers.',
      duration: '2-3 Years',
      processing: '5-7 working days',
      features: ['Work Permit', 'Residence Visa', 'Emirates ID', 'Medical Insurance'],
      requirements: ['Valid Passport', 'Educational Certificates', 'Medical Certificate', 'Employment Contract']
    },
    {
      title: 'Investor Visa',
      description: 'Long-term visas for investors and business owners in the UAE.',
      duration: '2-10 Years',
      processing: '7-10 working days',
      features: ['Multiple Entry', 'Family Sponsorship', 'Business Activities', 'Property Investment'],
      requirements: ['Investment Proof', 'Business License', 'Bank Statements', 'Property Documents']
    },
    {
      title: 'Family Residence Visa',
      description: 'Bring your family members to live with you in the UAE.',
      duration: '1-3 Years',
      processing: '10-15 working days',
      features: ['Spouse Visa', 'Children Visa', 'Parents Visa', 'Dependent Coverage'],
      requirements: ['Sponsor Documents', 'Relationship Proof', 'Medical Certificates', 'Salary Certificate']
    },
    {
      title: 'Visit Visa',
      description: 'Short-term visit visas for tourism and business purposes.',
      duration: '30-90 Days',
      processing: '2-3 working days',
      features: ['Tourism', 'Business Visit', 'Multiple Entry', 'Extension Available'],
      requirements: ['Passport Copy', 'Sponsor Documents', 'Hotel Booking', 'Return Ticket']
    },
    {
      title: 'Student Visa',
      description: 'Education visas for students pursuing studies in UAE institutions.',
      duration: '1 Year',
      processing: '7-10 working days',
      features: ['Study Permit', 'Part-time Work', 'Family Visit', 'Extension Options'],
      requirements: ['Admission Letter', 'Educational Documents', 'Medical Certificate', 'Financial Proof']
    },
    {
      title: 'Retirement Visa',
      description: 'Long-term visas for retirees who wish to live in the UAE.',
      duration: '5 Years',
      processing: '10-15 working days',
      features: ['Long-term Stay', 'Healthcare Access', 'Property Investment', 'Family Sponsorship'],
      requirements: ['Retirement Proof', 'Financial Statements', 'Health Insurance', 'Property Investment']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick visa processing with expedited services available'
    },
    {
      icon: Shield,
      title: 'Expert Guidance',
      description: 'Professional assistance throughout the visa application process'
    },
    {
      icon: Globe,
      title: 'Multiple Options',
      description: 'Wide range of visa types to suit different needs and purposes'
    },
    {
      icon: CheckCircle,
      title: 'High Success Rate',
      description: '98% success rate with proper documentation and guidance'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Assess your needs and choose the right visa type'
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'Prepare and verify all required documents'
    },
    {
      step: '03',
      title: 'Application',
      description: 'Submit visa application to immigration authorities'
    },
    {
      step: '04',
      title: 'Approval',
      description: 'Receive visa approval and complete the process'
    }
  ];

  const additionalServices = [
    {
      title: 'Medical Test Assistance',
      description: 'Complete support for mandatory medical examinations',
      icon: Shield
    },
    {
      title: 'Emirates ID Processing',
      description: 'Help with Emirates ID application and collection',
      icon: Passport
    },
    {
      title: 'Document Attestation',
      description: 'Attestation services for educational and personal documents',
      icon: CheckCircle
    },
    {
      title: 'Visa Renewal Services',
      description: 'Timely renewal of existing visas before expiration',
      icon: Clock
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alert-success to-green-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              UAE Visa Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete UAE Visa Services
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Professional visa processing services for all types of UAE visas. From employment to family visas, we handle the entire process with expert guidance and fast processing times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-alert-success px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold">
                Apply for Visa
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-alert-success transition-all duration-200 font-semibold">
                Check Requirements
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
              Why Choose Our Visa Services?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Professional visa services with expert guidance, fast processing, and high success rates for all UAE visa types.
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

      {/* Visa Types Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              UAE Visa Types
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Choose from various UAE visa types designed for different purposes and durations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-grey-600">Duration</div>
                    <div className="font-semibold text-primary-red">{visa.duration}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-heading-dark mb-2">
                  {visa.title}
                </h3>
                
                <p className="text-grey-600 mb-4">
                  {visa.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm text-grey-600 mb-2">Processing Time</div>
                  <div className="font-medium text-heading-dark">{visa.processing}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-grey-600 mb-3">Key Features</div>
                  <div className="space-y-2">
                    {visa.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-grey-700">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-grey-600 mb-3">Requirements</div>
                  <div className="space-y-2">
                    {visa.requirements.slice(0, 3).map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center text-sm text-grey-700">
                        <div className="w-1.5 h-1.5 bg-primary-red rounded-full mr-2 flex-shrink-0"></div>
                        {req}
                      </div>
                    ))}
                    {visa.requirements.length > 3 && (
                      <div className="text-sm text-grey-500">
                        +{visa.requirements.length - 3} more requirements
                      </div>
                    )}
                  </div>
                </div>
                
                <button className="w-full bg-alert-success text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive support services to complete your visa process and settlement in the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {service.description}
                </p>
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
              Visa Application Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Simple and efficient process to handle your visa application from start to finish.
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

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              General Requirements
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Common requirements for UAE visa applications across different visa types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-grey-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-heading-dark mb-4">Personal Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Valid Passport (6 months validity)
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Passport-size Photographs
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Medical Certificate
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  No Objection Certificate
                </li>
              </ul>
            </div>

            <div className="bg-grey-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-heading-dark mb-4">Educational Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Educational Certificates
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Degree Attestation
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Experience Certificates
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Professional Licenses
                </li>
              </ul>
            </div>

            <div className="bg-grey-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-heading-dark mb-4">Financial Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Bank Statements
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Salary Certificate
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Employment Contract
                </li>
                <li className="flex items-center text-grey-700">
                  <CheckCircle className="w-4 h-4 text-alert-success mr-3" />
                  Investment Proof
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-blue-700">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Apply for Your UAE Visa?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert assistance with your UAE visa application. Our team ensures fast processing and high success rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-alert-success text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-200 font-semibold">
              Start Visa Application
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold">
              Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaServices;