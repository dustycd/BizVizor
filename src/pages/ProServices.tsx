import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight, Users, Home, UserCheck, Clock, DollarSign, Shield } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const ProServices = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  const proServicesList = [
    'Residence for Employees',
    'Labour and Immigration Cards', 
    'Application for Labour Quota',
    'Residence for Investors',
    'Residences for Family',
    'Green Residences',
    'Mission Residences', 
    'Golden Residences',
    'Retirement Residences',
    'Offshore & Security Passes (CICPA)',
    'Emirates ID Cards',
    'Registration of Company or Branch',
    'Yearly Renewals of License',
    'Changes to Trade Licenses, transfers',
    'Regulatory approvals and NOC letters',
    'Notarisation of Legal Documents',
    'Company Secretarial Services',
    'Payroll & WPS'
  ];

  const businessBenefits = [
    {
      number: '1',
      title: 'Prevents fines and delays',
      description: 'A professional service will ensure your paperwork is submitted correctly and on-time, avoiding costly fines and delays.'
    },
    {
      number: '2', 
      title: 'Simplifies essential services',
      description: 'Get the visas and permits employees and companies legally require. Easily gain access to bank accounts, utilities, and more.'
    },
    {
      number: '3',
      title: 'Saves Time & Money', 
      description: 'PROs will handle time consuming paperwork, freeing up your valuable time. Plus, their expertise often reduces processing costs.'
    },
    {
      number: '4',
      title: 'Offers Peace of Mind',
      description: 'Expert guidance from the right PRO companies in Dubai helps you navigate complex regulations, reducing stress and ensuring compliance.'
    }
  ];

  const costSavings = [
    {
      title: 'Cost Savings',
      description: 'We identify ways to reduce costs on various fees and documentation keeping more cash in your pocket.',
      icon: DollarSign
    },
    {
      title: 'Payroll Savings', 
      description: 'Bizvisor determines payroll strategies to boost your bottom line. This includes savings on salary, annual leave, travel expenses, medical reimbursements, transportation, petrol, parking and more.',
      icon: Users
    },
    {
      title: 'Financial Transparency',
      description: 'There are no hidden charges. We will provide you with complete details of fees and expenses with receipts.',
      icon: FileText
    },
    {
      title: 'Avoid Fines',
      description: 'Our team tracks renewals, ensuring you stay compliant and saving you from hefty fines.',
      icon: Shield
    },
    {
      title: 'Time Savings',
      description: 'We handle everything, freeing you to dedicate more man hours to your core business.',
      icon: Clock
    }
  ];

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
              Expert PRO Services in Dubai, UAE
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Expert PRO Services in Dubai, UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              You focus on growth, we focus on administrative tasks
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Hassle-Free Corporate PRO Services in Dubai From Bizvisor
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                Bizvisor is one of the leading PRO service providers in Dubai. We have been providing PRO services in Dubai to different businesses for years. The United Arab Emirates is one of the leading destinations for investment for businesses. But, to start any business in the UAE, you must follow the rules and regulations set by the UAE government.
              </p>
              <p>
                There are plenty of documentation processes, approvals and licenses required to successfully do business in the country. If you want to start your business effortlessly, hire Bizvisor as your PRO Company in Dubai. We will handle all the documentation on your behalf so you can devote more time to your business priorities.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-alert-success to-green-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Outsource your PRO services to Bizvisor
                </h3>
                <div className="text-4xl font-bold mb-6">starting from AED 900</div>
                <button 
                  onClick={openCalendly}
                  className="bg-white text-alert-success px-8 py-3 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are PRO Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              What Exactly Are PRO Services?
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-grey-600 leading-relaxed mb-6">
                If you are planning to start a business in Dubai, UAE, you will require the services of a Public Relations Officer or PRO. These are Government Liason Officers, usually Arabic speaking, who interact with the necessary government bodies to process documents, visas, licenses, renewals, labor contracts, clearing services, and other immigration and company related legal requirements.
              </p>
              <p className="text-lg text-grey-600 leading-relaxed">
                PROs are able to navigate the sometimes complex requirements with ease, and have years of experience in their roles. Bizvisor is one of the most successful PRO service providers in Dubai. There are plenty of PRO companies available in Dubai, but by hiring Bizvisor, you can definitely save up to 70%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best PRO Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Enjoy the Best PRO Services in Dubai
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Bizvisor's PRO services take care of everything, so you can focus on what matters:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proServicesList.map((service, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-alert-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-5 h-5 text-alert-success" />
                </div>
                <h3 className="text-sm font-semibold text-heading-dark">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How Your Dubai Business Will Benefit From a Professional PRO Service
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-alert-success rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{benefit.number}</span>
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

      {/* Cost Savings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Save Up To 70% When You Hire Bizvisor's PRO Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Not only does Bizvisor offer a wide range of services, but you also enjoy some of the most cost effective PRO services available. Here's what we offer:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costSavings.map((saving, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                  <saving.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  {saving.title}
                </h3>
                <p className="text-grey-600">
                  {saving.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Additional PRO Service Benefits
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
                  to={getProServiceUrl(service.title)}
                  className="w-full bg-alert-success text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Learn More
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
            Call us at +971 56 496 0040 for end-to-end assistance with PRO services in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564960040">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold">
                Call +971 56 496 0040
              </button>
            </a>
            <button 
              onClick={openCalendly}
              className="bg-alert-success text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-200 font-semibold"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={closeCalendly}
        url="https://calendly.com/saidtouma-bizvisor/consultation?month=2025-06"
      />
  );
};

// Helper function to get the correct URL for each PRO service
const getProServiceUrl = (serviceTitle: string): string => {
  const serviceUrls: { [key: string]: string } = {
    'Ejari Registration': '/ejari-registration-dubai-uae',
    'Family Residence Visa': '/family-residence-dubai-uae',
    'Maid Residence Service': '/maid-residence-service-dubai-uae',
    'PRO Services': '/pro-residence-services-dubai-uae'
  };
  
  return serviceUrls[serviceTitle] || '/contact';
};

export default ProServices;