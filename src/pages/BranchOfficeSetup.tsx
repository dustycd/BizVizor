import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Globe, DollarSign, Users, Zap, FileText, Shield, TrendingUp, MapPin, Award } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const BranchOfficeSetup = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Open a Branch Office of Foreign Company in Dubai | Bizvisor UAE';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expand into the UAE by opening a branch of your foreign company in Dubai. Bizvisor handles licensing, documentation & regulatory approvals.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Expand into the UAE by opening a branch of your foreign company in Dubai. Bizvisor handles licensing, documentation & regulatory approvals.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const advantages = [
    {
      title: 'Strategic Location',
      description: 'Dubai\'s strategic geographical location offers access to markets in Europe, Asia, and Africa, making it a central hub for international trade.',
      icon: MapPin
    },
    {
      title: 'Tax Benefits',
      description: 'Dubai offers tax incentives for businesses, including zero income tax, import and export duties, and no restrictions on capital repatriation.',
      icon: DollarSign
    },
    {
      title: 'Global Connectivity',
      description: 'Dubai\'s cutting-edge infrastructure, including world-class airports and ports, enables businesses\' seamless connectivity.',
      icon: Globe
    },
    {
      title: 'Business-Friendly Regulations',
      description: 'The UAE government\'s commitment to ease of doing business includes simplified registration processes, foreign ownership, and investor-friendly policies.',
      icon: Shield
    },
    {
      title: 'Access to Skilled Workforce',
      description: 'Dubai attracts a diverse, skilled, multilingual workforce essential for business growth.',
      icon: Users
    },
    {
      title: 'Networking Opportunities',
      description: 'Being a business hub, Dubai offers excellent networking opportunities, connecting you with potential clients and partners.',
      icon: TrendingUp
    }
  ];

  const setupProcess = [
    {
      step: '01',
      title: 'Select a Local Service Agent',
      description: 'The LSA is usually an Emirati national and will help liaise with authorities for a nominal annual fee, but is not a shareholder in the company'
    },
    {
      step: '02',
      title: 'Obtain ministry approvals',
      description: 'File your application and submit documents to the Ministry of Economy and Federal Foreign Companies Committee to receive your permit letter and setup approval'
    },
    {
      step: '03',
      title: 'Apply for a business trade license',
      description: 'Apply for the relevant category of trade license based on your business activities to the Department of Economic Development (DED)'
    },
    {
      step: '04',
      title: 'Register with commercial bodies',
      description: 'Once you receive the trade license, register your branch with bodies such as Ministry of Economic Companies Register and Dubai Chamber of Commerce and Industry'
    }
  ];

  const requiredDocuments = [
    'Completed application form for branch office registration',
    'Board resolution from the company ratifying the opening of a branch in Dubai',
    'A copy of the parent company\'s certificate of incorporation',
    'An NOC from the parent company',
    'Memorandum and Articles of Association (MAA) from the parent company',
    'Trade name reservation certificate',
    'Passport copies of the company Director',
    'Power of attorney for the Branch Office Director'
  ];

  const whyChooseBizvisor = [
    {
      title: 'Expert Guidance',
      description: 'Our experienced consultants have in-depth knowledge of Dubai\'s business landscape, legal requirements, and procedures. From helping you understand the cost of setting up a branch office in Dubai to assisting you with all the documentation, we will be there every step of the way.',
      icon: Award
    },
    {
      title: 'Tailored Solutions',
      description: 'We provide personalized solutions that cater to your business needs and objectives.',
      icon: Users
    },
    {
      title: 'Efficiency and Speed',
      description: 'Bizvisor ensures a streamlined and prompt setup process, saving you time and money.',
      icon: Zap
    },
    {
      title: 'Ongoing Support',
      description: 'We offer continued support, assisting with documentation, regulatory compliance, and operational concerns.',
      icon: Shield
    }
  ];

  const supportServices = [
    {
      title: 'Company Registration',
      description: 'We handle all the paperwork, legalities, and registrations required to establish your branch office.',
      icon: Building2
    },
    {
      title: 'Market Research',
      description: 'Our team provides market insights and helps you adapt your business strategies for the UAE market.',
      icon: TrendingUp
    },
    {
      title: 'Legal Compliance',
      description: 'We ensure that your branch office adheres to all local regulations and business laws.',
      icon: Shield
    },
    {
      title: 'Financial Services',
      description: 'Bizvisor assists with financial management, including setting up bank accounts and managing finances efficiently.',
      icon: DollarSign
    },
    {
      title: 'Visa and Immigration Services',
      description: 'Our team assists with visa applications and ensures a smooth process for your staff\'s relocation.',
      icon: Users
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Branch Office Setup Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Branch Office Setup in Dubai, UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Unlock the doors to international growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Setup Branch Office
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
              Establish Your Foreign Company Branch Office In Dubai, UAE, With Bizvisor
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed mb-8">
              Establishing a branch office for your foreign company in Dubai, UAE, is an intelligent decision that opens doors to significant business prospects in the heart of the Middle East. Dubai isn't just a bustling global trade center but boasts an inviting and business-friendly atmosphere. Bizvisor, your trusted consulting partner, will guide you through this exciting journey.
            </p>
            
            <div className="bg-primary-red/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Expanding Your Company In Dubai
              </h3>
              <p className="text-grey-700 leading-relaxed">
                Expanding your business to Dubai involves the establishment of a branch office, essentially an extension of your foreign company. This structure allows you to tap into the flourishing UAE market, benefiting from the region's robust economy, strategic location, and the absence of income tax.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Advantages Of Setting Up A Branch Office In Dubai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-8 h-8 text-primary-navy" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {advantage.title}
                </h3>
                <p className="text-grey-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How To Open A Branch Office In Dubai - Step By Step
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {setupProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-red rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Required Documents Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Documents Required
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              These are some of the common documents* that you will need to produce during the branch office setup process in Dubai:
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-grey-700">{document}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-red/10 rounded-lg">
                <p className="text-primary-red font-medium text-center">
                  *For a complete list of requirements and documents, speak to a Bizvisor consultant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Zone vs Mainland Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Free Zone or Mainland - Where To Set Up A Branch?
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              You can choose to set up a branch office in one of these two economic zones. They each have their advantages:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-grey-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-primary-navy" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                  Mainland Company Branch
                </h3>
                <p className="text-grey-600 text-center">
                  Your setup and subsequent activities will be controlled by the UAE government's laws and regulations.
                </p>
              </div>
              
              <div className="bg-grey-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                  Free Zone Branch
                </h3>
                <p className="text-grey-600 text-center">
                  You will be required to follow the regulations and procedures of the free zone authority you select. In addition a free zone company has no capital requirement for branch office setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bizvisor Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose Bizvisor For Branch Office Setup In Dubai?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              We at Bizvisor know that opening a Dubai office is a big deal, and we're here to help your company succeed. Why should you choose us?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseBizvisor.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {reason.title}
                </h3>
                <p className="text-grey-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              At Bizvisor, We Offer A Comprehensive Range Of Support Services To Ensure The Success Of Your Branch Office In Dubai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-grey-600">
                  {service.description}
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
            Ready to Establish Your Branch Office in Dubai?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through the complete branch office setup process with professional support and compliance.
          </p>
          <p className="text-lg text-white/90 mb-8">
            Call us at +971 56 496 0040 for end-to-end assistance setting up your branch office in Dubai.
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

export default BranchOfficeSetup;