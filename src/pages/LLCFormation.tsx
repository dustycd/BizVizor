import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Globe, DollarSign, Users, Zap, FileText, Shield, TrendingUp, MapPin, Award, Calculator, Star, Home, CreditCard } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const LLCFormation = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Dubai LLC Company Formation | Limited Liability Company Setup – Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Form your Dubai LLC with Bizvisor and enjoy limited liability, legal protection, and full setup support. Affordable packages and fast processing.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Form your Dubai LLC with Bizvisor and enjoy limited liability, legal protection, and full setup support. Affordable packages and fast processing.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const setupSteps = [
    {
      step: '1',
      title: 'Select a name and location',
      description: 'Follow government regulations for your business name and pick a location that works for your venture'
    },
    {
      step: '2',
      title: 'Choose a business activity',
      description: 'Find the appropriate category from over 2,000 options and get the required approvals from different authorities'
    },
    {
      step: '3',
      title: 'Submit your documents',
      description: 'Share personal and company documents with DED after the necessary attestations and approvals'
    },
    {
      step: '4',
      title: 'Get your licenses',
      description: 'Following your approvals, tenancy contract and payment, receive your trade license and start the visa process'
    }
  ];

  const requiredDocuments = [
    'Your passport (if you are the investor)',
    'Emirates ID copy',
    'Passport copy of the local sponsor, if any',
    'List of shareholders with details on shares and role',
    'NOC if shareholders work for another company in the UAE',
    'Personal documents of all shareholders',
    'Completed DED registration form from DED',
    'Attested tenancy contract for your office space',
    'Memorandum of Association attested by a public notary',
    'Certificate of Incorporation',
    'Board resolution'
  ];

  const llcPros = [
    'Obtaining authorizations and clearances from different departments',
    'Writing association memorandums of understanding and other essential contracts',
    'Help to bring local equity',
    'Locating local partners for the establishment of an LLC in Dubai',
    'Assisting with bank account opening',
    'Helping to locate the appropriate office location',
    'Deal with additional document formalities'
  ];

  const llcBenefits = [
    {
      title: 'Preferential Residence Rights',
      description: 'The investor\'s family is granted preferential residence rights',
      icon: Users
    },
    {
      title: 'Branch Establishment',
      description: 'An investor may start branches',
      icon: Building2
    },
    {
      title: 'Uninterrupted Business',
      description: 'The investor can enjoy doing business without interruption by sleeping partners or corporation service agents',
      icon: Shield
    },
    {
      title: 'Asset Ownership',
      description: 'The corporation, not the local partner, would own the documents and the assets',
      icon: FileText
    },
    {
      title: 'Banking Services',
      description: 'The investor is able to get credit cards and open bank accounts',
      icon: CreditCard
    }
  ];

  const whyChooseBizvisor = [
    {
      title: 'Assistance from A-Z',
      description: 'We will guide you through every process from name selection (harder than you think) to identifying and notarising documents, to submitting your approvals.',
      icon: FileText
    },
    {
      title: 'Connections that matter',
      description: 'Bizvisor has strong ties with regulatory authorities and governing bodies to help you easily complete your process and get your approvals.',
      icon: Globe
    },
    {
      title: 'Experienced team',
      description: 'Our dedicated professionals have in-depth experience and knowledge in different aspects of LLC company formation in Dubai.',
      icon: Award
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              LLC Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Easy LLC Formation in Dubai UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Be a big player in the Dubai business world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start LLC Formation
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Let Bizvisor Simplify Your LLC Company Setup In Dubai
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                If you are planning to start your business in one of the world's strongest economies, Bizvisor is here to help. We have been at the forefront of many successful business setups over the years, and with the help of our experience in Limited Liability Company Formation in Dubai, we can make the process hassle-free for you.
              </p>
              <p>
                There are multiple options available when you're setting up a company in Dubai. You can choose Dubai mainland company formation, Dubai free zone business setup, or opt for an LLC company.
              </p>
              <p>
                Unlike free zones, LLC company formation has no limitations. The owner can open a company anywhere in the UAE or the GCC with this option. They can also apply for multiple residences, and there is no limitation in terms of real estate ownership.
              </p>
              <p>
                The Department of Economic Development (DED) plays a vital role in forming LLC companies in Dubai. DED issues the required licenses. Bizvisor's experienced team will help you at every step so that you can prioritize your core business functions instead of admin and paperwork.
              </p>
              <p>
                Our dedicated team of experts guides you through each critical step in LLC company formation. From meticulously handling documentation and obtaining government approvals to assisting with office space setup and residence processing, we are your dependable companions throughout this journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-12 text-white max-w-2xl mx-auto">
              <Building2 className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="text-3xl font-bold mb-4">
                Start your LLC in Dubai
              </h2>
              <div className="text-4xl font-bold mb-6">from AED 5,500</div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="bg-white text-primary-red px-8 py-3 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
                >
                  Get Started Today
                </button>
                <Link 
                  to="/cost-calculator"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold inline-flex items-center justify-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Cost
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLC Pros Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Pros of LLC Company Formation In UAE
            </h2>
            
            <div className="bg-grey-50 rounded-xl p-8">
              <div className="space-y-4">
                {llcPros.map((pro, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-grey-700">{pro}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLC Benefits Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              LLC Business Setup In Dubai Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {llcBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      {/* Required Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Documents Required for Setting Up an LLC in Dubai
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              These are some of the common documents* that you will need:
            </p>
            
            <div className="bg-grey-50 rounded-xl p-8">
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

      {/* Setup Steps Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Steps to Set Up Your LLC in Dubai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {setupSteps.map((step, index) => (
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

      {/* Why Choose Bizvisor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Get the Best LLC Company Setup Service in Dubai
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Setting up an LLC company in Dubai can be quite a complex task, with extensive documentation and approvals required. While the government ensures that these procedures are fairly smooth and streamlined, it always helps to have expert guidance. Here's why Bizvisor is your top pick:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseBizvisor.map((reason, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Form Your LLC in Dubai?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through the complete LLC formation process with professional support and compliance.
          </p>
          <p className="text-lg text-white/90 mb-8">
            Call us at +971 56 496 0040 to easily setup your LLC in the UAE
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

export default LLCFormation;