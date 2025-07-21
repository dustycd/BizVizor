import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Globe, DollarSign, Users, Zap, FileText, Shield, TrendingUp, MapPin, Award, Calculator, Star } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const CompanyRegistration = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Company Registration in Dubai | Business Setup Experts – Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Register your company in Dubai with expert guidance from Bizvisor. Mainland, Free Zone & Offshore business setup with fast approvals and no hidden fees.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Register your company in Dubai with expert guidance from Bizvisor. Mainland, Free Zone & Offshore business setup with fast approvals and no hidden fees.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const dubaiAdvantages = [
    {
      title: 'Strategic Global Hub',
      description: 'A hub that is well connected to the West and the East',
      icon: Globe
    },
    {
      title: 'Investor-Friendly Policies',
      description: 'A forward thinking Government focused on investor-friendly policies',
      icon: Shield
    },
    {
      title: 'Premium Infrastructure',
      description: 'Ready infrastructure, duty exemptions and premium facilities in free zones',
      icon: Building2
    },
    {
      title: 'Global Workforce Access',
      description: 'Access to raw materials and a skilled workforce from around the world',
      icon: Users
    },
    {
      title: 'World-Class Lifestyle',
      description: 'World-class lifestyle, healthcare and safety for your employees',
      icon: Star
    },
    {
      title: 'Diverse Business Verticals',
      description: 'Thousands of business verticals covered from wholesale, import-export, retail, media, services, ecommerce and more',
      icon: TrendingUp
    }
  ];

  const registrationSteps = [
    {
      step: '01',
      title: 'Choose Your Business Activity',
      description: 'Decide on the type of business you want to set up, whether it\'s a commercial, industrial, or professional entity.'
    },
    {
      step: '02',
      title: 'Select a Legal Form',
      description: 'Determine the legal structure that suits your business model, such as a Limited Liability Company (LLC), Sole Establishment, or Free Zone Company.'
    },
    {
      step: '03',
      title: 'Trade Name Approval & Licensing',
      description: 'Reserve your trade name and secure the necessary licenses based on your business activity and chosen legal form.'
    }
  ];

  const services = [
    {
      title: 'Business Activity Consultation',
      description: 'Our expert team has years\' of experience with company formation in Dubai and will help you choose the business activity that will drive optimal growth',
      icon: TrendingUp
    },
    {
      title: 'Legal Structure Advisory',
      description: 'Confused between mainland, free zone and offshore company formation? Get expert recommendations on the legal structure that aligns with your business goals.',
      icon: Shield
    },
    {
      title: 'Documentation Assistance',
      description: 'Get the complete support you need to submit the necessary documentation with minimum hassles.',
      icon: FileText
    },
    {
      title: 'License Procurement',
      description: 'Understand the type of license needed and efficiently secure it to operate legally in Dubai.',
      icon: Building2
    },
    {
      title: 'PRO Services',
      description: 'Get your documents, business setup and visa procurements easily handled by our trained and experienced Emirati PROs who will liaise with government institutions for you.',
      icon: Users
    }
  ];

  const businessPackages = [
    {
      name: 'Sharjah Free Zone',
      price: 'Starting From AED 5,500*',
      features: [
        'Inclusive of Office Lease Agreement for Banking purposes',
        'Inclusive of 3-5 Activities',
        'Multiple shareholders permitted',
        'Combine E-commerce & Media Activities',
        'Upgrade to Residence packages at a nominal cost, if required',
        'Most cost-effective free zone in the UAE'
      ],
      color: 'bg-primary-red',
      link: '/sharjah-free-zone-business-set-up'
    },
    {
      name: 'Dubai Free Zone',
      price: 'Starting From AED 12,500*',
      features: [
        'Upgrade to visa package at a minimal cost of AED 1,850',
        'Free desk space is included in the package',
        'Prestigious Dubai address for your company',
        'Renewal rates locked for a lifetime',
        'Extendable to unlimited visa options',
        'Multiple Activities Possible in a single license',
        'Mix of Service & Commercial Business Activities',
        'Dedicated Account manager throughout the licensing tenure',
        'Bank account assistance'
      ],
      color: 'bg-primary-navy',
      link: '/freezone-company-setup-in-dubai'
    },
    {
      name: 'Dubai Mainland',
      price: 'Starting From AED 12,900*',
      features: [
        'LLC Licenses with 100% Ownership',
        'No paid-up share capital required',
        'Business license within a day',
        'Up to 10 activities in a single license',
        'Individual or multiple shareholding structures',
        'Easy and fast visa quota upgradation',
        'Free Company Stamp',
        'Choose from Commercial, Trading, or Service activities',
        '0 Balance Corporate Bank Accounts'
      ],
      color: 'bg-alert-success',
      link: '/dubai-mainland-company-formation'
    }
  ];

  const topTips = [
    {
      number: '01',
      title: 'Market Research',
      description: 'Understand the local market and consumer preferences to tailor your business strategy.',
      icon: TrendingUp
    },
    {
      number: '02',
      title: 'Legal Compliance',
      description: 'Ensure you adhere to all legal requirements for company registration and operation.',
      icon: Shield
    },
    {
      number: '03',
      title: 'Financial Planning',
      description: 'Develop a comprehensive financial plan to manage costs and investments effectively.',
      icon: DollarSign
    },
    {
      number: '04',
      title: 'Localization Strategy',
      description: 'Adapt your products/services to resonate with the cultural and social norms of Dubai.',
      icon: MapPin
    },
    {
      number: '05',
      title: 'Networking',
      description: 'Build strong relationships with local businesses and potential clients to foster growth.',
      icon: Users
    },
    {
      number: '06',
      title: 'Digital Presence',
      description: 'Establish a robust online presence to reach a wider audience.',
      icon: Globe
    },
    {
      number: '07',
      title: 'Sustainability Planning',
      description: 'Integrate sustainability practices to align with Dubai\'s future-oriented vision.',
      icon: Award
    }
  ];

  const whyChooseBizvisor = [
    {
      title: 'Step-by-step guidance',
      description: 'From helping you understand Dubai company registration costs to putting together all the requirements for your application, our experienced team is on hand to guide you.',
      icon: FileText
    },
    {
      title: 'Extensive network',
      description: 'Leverage our close relationship with the necessary entities and free zones, and take advantage of our partnerships.',
      icon: Globe
    },
    {
      title: 'Experienced team',
      description: 'Bizvisor has professionals with the right experience and knowledge to assist you with business setup, PRO services, concierge services, banking and more.',
      icon: Award
    }
  ];

  const commonConcerns = [
    'Feeling overwhelmed by the documents, permits and applications required?',
    'Confused about licensing procedures and visa requirements?',
    'Not clear on actual vs hidden costs?',
    'Worried about language barriers and liaising with local authorities?',
    'On a tight deadline?'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Company Registration Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Simplify your company formation in Dubai with Bizvisor
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Build your success in Dubai's vibrant economy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Register Your Company
              </Link>
              <Link 
                to="/cost-calculator"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Setup Cost
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dubai Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Company Registration in Dubai - Why Leading Businesses Choose This City
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Setting up a business in Dubai is a strategic move that can propel your enterprise to new heights. Dubai offers:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dubaiAdvantages.map((advantage, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

          <div className="text-center mt-12">
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our expert team is dedicated to fulfilling all Dubai company registration requirements, assisting in strategizing and navigating the legal nuances.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Steps Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Easy Steps to Register Your Company in the UAE
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {registrationSteps.map((step, index) => (
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Enjoy end-to-end Dubai company formation and registration services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
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

      {/* Common Concerns Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-heading-dark mb-6 text-center">
                Common Business Setup Concerns
              </h2>
              <div className="space-y-4 mb-8">
                {commonConcerns.map((concern, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-grey-700 text-lg">{concern}</p>
                  </div>
                ))}
              </div>
              <div className="bg-primary-red/10 rounded-xl p-6 text-center">
                <p className="text-lg font-semibold text-primary-red mb-4">
                  Bizvisor's team of experts is here to help make your new company registration in Dubai a seamless process.
                </p>
                <button 
                  onClick={openCalendly}
                  className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
                >
                  Get Expert Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Business Setup package in Dubai
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {businessPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`${pkg.color} text-white p-6 text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-xl font-semibold">{pkg.price}</div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-grey-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={pkg.link}
                    className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Tips Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Top tips for launching a company in Dubai, UAE
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              To make your business dreams a reality, it is important to research and prep before and during the process of company registration in Dubai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-white">{tip.number}</span>
                  </div>
                  <div className="w-10 h-10 bg-primary-navy/10 rounded-lg flex items-center justify-center">
                    <tip.icon className="w-5 h-5 text-primary-navy" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {tip.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {tip.description}
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
              Your Trusted Business Setup Consultant for Company Registration in Dubai
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Embark on your entrepreneurial journey with confidence, guided by Bizvisor – your reputable partner for seamless company registration in Dubai, UAE. We combine industry expertise, legal acumen, and an unwavering commitment to realizing your business aspirations within the dynamic Dubai landscape.
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
            Ready to Register Your Company in Dubai?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through the complete company registration process with professional support and compliance.
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

export default CompanyRegistration;