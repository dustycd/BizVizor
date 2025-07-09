import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight, Users, Home, UserCheck, Clock } from 'lucide-react';

const ProServices = () => {
  const services = [
    {
      title: 'Ejari Registration',
      icon: FileText,
      description: 'Complete Ejari registration services for residential and commercial properties in Dubai.',
      features: ['Residential Ejari', 'Commercial Ejari', 'Ejari Renewal', 'Ejari Cancellation'],
      price: 'Starting from AED 500'
    },
    {
      title: 'Family Residence Visa',
      icon: Users,
      description: 'Comprehensive family visa services to bring your loved ones to the UAE.',
      features: ['Spouse Visa', 'Children Visa', 'Parents Visa', 'Domestic Helper Visa'],
      price: 'Starting from AED 3,000'
    },
    {
      title: 'Maid Residence Service',
      icon: Home,
      description: 'Complete domestic helper visa processing and documentation services.',
      features: ['Visa Application', 'Medical Tests', 'Emirates ID', 'Labor Contract'],
      price: 'Starting from AED 2,500'
    },
    {
      title: 'PRO Services',
      icon: UserCheck,
      description: 'Professional government relations services for all your business needs.',
      features: ['License Renewal', 'Visa Processing', 'Document Attestation', 'Government Liaison'],
      price: 'Starting from AED 1,000'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times for all visa and documentation services'
    },
    {
      icon: UserCheck,
      title: 'Expert Guidance',
      description: 'Professional PRO officers with extensive government experience'
    },
    {
      icon: CheckCircle,
      title: 'Complete Compliance',
      description: 'Ensure full compliance with UAE immigration and labor laws'
    },
    {
      icon: FileText,
      title: 'Document Support',
      description: 'Complete assistance with all required documentation'
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

  const visaTypes = [
    {
      type: 'Employment Visa',
      duration: '2-3 Years',
      requirements: ['Valid Passport', 'Medical Certificate', 'Educational Certificates', 'Employment Contract'],
      processing: '5-7 working days'
    },
    {
      type: 'Investor Visa',
      duration: '2-10 Years',
      requirements: ['Investment Proof', 'Business License', 'Bank Statements', 'Property Documents'],
      processing: '7-10 working days'
    },
    {
      type: 'Family Visa',
      duration: '1-3 Years',
      requirements: ['Sponsor Documents', 'Relationship Proof', 'Medical Certificates', 'Salary Certificate'],
      processing: '10-15 working days'
    },
    {
      type: 'Visit Visa',
      duration: '30-90 Days',
      requirements: ['Passport Copy', 'Sponsor Documents', 'Hotel Booking', 'Return Ticket'],
      processing: '2-3 working days'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alert-success to-green-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              PRO Business Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional PRO Services in UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Complete PRO services for visa processing, government relations, and business compliance. Let our experienced professionals handle all your government-related requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-alert-success px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Get PRO Services
              </Link>
              <a href="#visa-types-section">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-alert-success transition-all duration-200 font-semibold">
                Check Requirements
                </button>
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
              Why Choose Our PRO Services?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our experienced PRO team ensures smooth and efficient processing of all your government-related requirements.
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

      {/* Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our PRO Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive PRO services to handle all your visa, documentation, and government relation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-alert-success rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-heading-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-red font-semibold text-sm mb-3">
                      {service.price}
                    </p>
                    <p className="text-grey-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                      <span className="text-grey-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  className="w-full bg-alert-success text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section id="visa-types-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              UAE Visa Types & Requirements
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Understanding different visa types and their requirements for successful application processing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-heading-dark">
                    {visa.type}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm text-grey-600">Duration</div>
                    <div className="font-semibold text-primary-red">{visa.duration}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-grey-600 mb-2">Processing Time</div>
                  <div className="font-medium text-heading-dark">{visa.processing}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-grey-600 mb-3">Required Documents</div>
                  <div className="space-y-2">
                    {visa.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center text-sm text-grey-700">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/contact"
                  className="text-alert-success font-medium flex items-center group hover:text-green-600 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
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
              Simple and efficient process to handle all your PRO service requirements.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-blue-700">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Professional PRO Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced PRO team handle all your government relations and visa processing needs efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-alert-success text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Get PRO Services
            </Link>
            <a href="tel:+971412344567">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold">
              Call +971 4 123 4567
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProServices;