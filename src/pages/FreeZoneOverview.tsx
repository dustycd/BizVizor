import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap, Building2, Users, TrendingUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const FreeZoneOverview = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Business Setup in UAE Free Zones | Start Your Company Today';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Launch your business in UAE Free Zones with 100% ownership, fast licensing, and zero tax benefits. Bizvisor helps you set up seamlessly across all Emirates.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Launch your business in UAE Free Zones with 100% ownership, fast licensing, and zero tax benefits. Bizvisor helps you set up seamlessly across all Emirates.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: '100% ownership of your company',
      description: 'The primary benefit of UAE free zones is that international investors may keep 100% ownership of their enterprises without needing a local partner.'
    },
    {
      icon: DollarSign,
      title: 'Financial benefits',
      description: '0% income tax rate, no customs taxes on imports and exports, 100% repatriation of corporate earnings, and lower cost of business setup.'
    },
    {
      icon: Zap,
      title: 'Quick setup',
      description: 'With the right assistance, UAE free zone business setup is smooth and can be done in a few hours with our skilled team.'
    },
    {
      icon: TrendingUp,
      title: 'Access to industry insights',
      description: 'Many UAE free zones are industry-specific, providing entrepreneurs immediate access to information and experience from others in their sector.'
    },
    {
      icon: Building2,
      title: 'Best-in-class infrastructure',
      description: 'Free zones offer readymade infrastructure including state-of-the-art working spaces, warehouses, business parks, and lifestyle amenities.'
    },
    {
      icon: Globe,
      title: 'Opportunity to work in growth markets',
      description: 'The UAE is a top area of economic growth in media, tourism, healthcare, logistics, education, trading, and IT sectors.'
    }
  ];

  const topFreeZones = [
    {
      name: 'Dubai Free Zone',
      description: 'Setting up a company in Dubai\'s Free Zones is a terrific opportunity to extend an existing business or establish a new one, thanks to 100% ownership and eased immigration regulations.',
      advantages: ['International Recognition', 'Premium Infrastructure', 'Global Connectivity', 'Tech & Finance Focus'],
      industries: ['Technology', 'Finance', 'Media', 'E-commerce'],
      minCost: 'AED 15,000',
      setupTime: '3-7 days',
      link: '/freezone-company-setup-in-dubai'
    },
    {
      name: 'Sharjah Free Zone',
      description: 'Sharjah Free Zones provide a contemporary and creative environment for startups and entrepreneurs in the media and technology sectors, and enterprises involved in commerce, import, and export.',
      advantages: ['Affordable Packages', 'Flexible Terms', 'Quick Processing', 'Business Support'],
      industries: ['Trading', 'Manufacturing', 'Services', 'Media'],
      minCost: 'AED 8,000',
      setupTime: '2-5 days',
      link: '/sharjah-free-zone-business-set-up'
    },
    {
      name: 'Ajman Free Zone',
      description: 'Ajman Free Zone Authority (AFZA) is a Free Zone at the entry point to the Arabian Gulf, ideal for merchants and related companies, strengthening the Ajman economy.',
      advantages: ['Low Cost', 'Fast Processing', 'Dubai Proximity', 'Simple Documentation'],
      industries: ['Trading', 'Services', 'E-commerce', 'Consulting'],
      minCost: 'AED 6,000',
      setupTime: '1-3 days',
      link: '/ajman-free-zones-company-formation-uae'
    },
    {
      name: 'RAK Free Zone',
      description: 'Ras Al Khaimah Economic Zone (RAKEZ) provides free zone and non-free zone business registration with the lowest company establishment cost in the UAE.',
      advantages: ['Flexible Packages', 'Competitive Fees', 'Strategic Location', 'Business Friendly'],
      industries: ['Manufacturing', 'Trading', 'Services', 'Logistics'],
      minCost: 'AED 7,500',
      setupTime: '2-5 days',
      link: '/ras-al-khaimah-free-zone-business-setup'
    },
    {
      name: 'UAQ Free Zone',
      description: 'Ultra-low cost setup with simple documentation and digital registration.',
      advantages: ['Ultra Low Cost', 'Simple Process', 'Digital Setup', 'Quick Approval'],
      industries: ['Trading', 'Services', 'E-commerce', 'Freelance'],
      minCost: 'AED 5,750',
      setupTime: '1-3 days',
      link: '/umm-al-quwain-free-zones-company-formation-uae'
    },
    {
      name: 'Fujairah Free Zone',
      description: 'Strategic East Coast location with port access and manufacturing facilities.',
      advantages: ['Port Access', 'Manufacturing Focus', 'Strategic Location', 'Logistics Hub'],
      industries: ['Manufacturing', 'Logistics', 'Trading', 'Industrial'],
      minCost: 'AED 8,500',
      setupTime: '2-4 days',
      link: '/business-setup-fujairah-free-zone-uae'
    }
  ];

  const comparisonFactors = [
    {
      factor: 'Setup Cost',
      description: 'Initial investment required for company formation',
      icon: DollarSign
    },
    {
      factor: 'Processing Time',
      description: 'Time required to complete company registration',
      icon: Zap
    },
    {
      factor: 'Business Activities',
      description: 'Types of business activities allowed',
      icon: Building2
    },
    {
      factor: 'Visa Allocation',
      description: 'Number of visas available with license',
      icon: Users
    },
    {
      factor: 'Office Requirements',
      description: 'Physical office space requirements',
      icon: MapPin
    },
    {
      factor: 'Growth Potential',
      description: 'Scalability and expansion opportunities',
      icon: TrendingUp
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Select your business activity',
      description: 'The type of license you require depends on the activities your business engages in'
    },
    {
      step: '02',
      title: 'Choose your free zone',
      description: 'This will depend on your industry, location, budget, facilities and other requirements'
    },
    {
      step: '03',
      title: 'Identify a business name',
      description: 'Follow regulations around suitable names and reserve your option with the chosen free zone'
    },
    {
      step: '04',
      title: 'Complete your registration',
      description: 'Finish your formalities and make your payment to get your visa, license and set up a bank account'
    }
  ];

  const documentsNeeded = [
    'Application form with all fields filled out',
    'MoA (Memorandum of Association) and AoA (Articles of Association)',
    'References from bank (for some Free Zones)',
    'NOC from current sponsor (if applicable)',
    'Passport copy',
    'Passport size photograph'
  ];

  const bizvisorServices = [
    {
      title: 'Step-by-step guidance',
      description: 'From helping you understand UAE free zone company setup cost to putting together all the requirements for your application, our experienced team is on hand to guide you.',
      icon: Users
    },
    {
      title: 'Partnerships with free zones',
      description: 'Leverage our close relationships with free zones in Dubai, Sharjah and other emirates.',
      icon: Building2
    },
    {
      title: 'Experienced team',
      description: 'Bizvisor has professionals with the right experience and knowledge to assist you with business setup, PRO services, concierge services, banking and more.',
      icon: Shield
    }
  ];

  const originalProcess = [
    {
      step: '01',
      title: 'Choose Free Zone',
      description: 'Select the most suitable free zone for your business needs'
    },
    {
      step: '02',
      title: 'Select License Type',
      description: 'Choose from trading, service, or industrial licenses'
    },
    {
      step: '03',
      title: 'Submit Application',
      description: 'Complete application with required documents'
    },
    {
      step: '04',
      title: 'Get Approval',
      description: 'Receive license approval and start operations'
    }
  ];

  const faqs = [
    {
      question: "What is a UAE Free Zone and why should I choose it?",
      answer: "UAE Free Zones are designated areas offering 100% foreign ownership, tax benefits, and simplified business setup procedures. They're ideal for international businesses wanting to establish a presence in the UAE without local partners."
    },
    {
      question: "Which is the best free zone for my business?",
      answer: "The best free zone depends on your business activity, budget, visa requirements, and growth plans. Dubai free zones offer prestige and infrastructure, while northern emirates provide cost-effective solutions."
    },
    {
      question: "How much does it cost to set up a free zone company?",
      answer: "Costs vary by free zone and package type, ranging from AED 5,750 (UAQ) to AED 25,000+ (premium Dubai zones). This includes government fees, office space, and visa allocations."
    },
    {
      question: "Can I operate in UAE mainland with a free zone license?",
      answer: "Free zone companies can sell to UAE mainland through a local distributor or by establishing a mainland branch. Direct mainland sales require additional approvals and arrangements."
    },
    {
      question: "What are the visa benefits of free zone setup?",
      answer: "Most free zone packages include 1-6 residence visas for owners and employees. Visa eligibility depends on the license type, office space, and specific free zone regulations."
    },
    {
      question: "How long does free zone company formation take?",
      answer: "Free zone setup typically takes 1-7 business days depending on the zone and completeness of documentation. Some zones offer same-day processing for urgent applications."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              UAE Free Zone Company Setup
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              UAE Free Zone Company Formation
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
              How to simplify business setup in UAE Free Zones
            </h2>
            <p className="text-xl mb-2 font-medium">
              Your express lane to entrepreneurial success
            </p>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your business in UAE's premier free zones with 100% foreign ownership, tax benefits, and streamlined setup processes. Choose from 40+ specialized free zones across the Emirates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
              >
                Free Consultation
              </button>
              <a href="#free-zones-comparison">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold">
                Compare Free Zones
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
              Work with a best-in-class business setup services
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed mb-8 text-center">
              Bizvisor is honored to assist you with your free zone company formation in the UAE. Our experienced team will assist you with launching your company in no time!
            </p>
            
            <div className="bg-grey-50 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-semibold text-heading-dark mb-6 text-center">We assist with:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Free zone business registration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Free zone licensing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Free zone residence services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">PRO services</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-heading-dark mb-6">
              What is a free zone company in the UAE?
            </h3>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                A free zone company is one that is registered in one of the 40+ free zones currently operating in the UAE. A free zone is an economic zone that follows its own specific rules and regulations, all of which are designed to be business and investor-friendly.
              </p>
              <p>
                Unlike mainland companies, UAE free zones permit 100% foreign ownership and are flexible in their terms. You can even begin the process of establishing a free zone company without entering the UAE. This means that non-resident corporations can greatly benefit from UAE free trade zones, which include the simplicity of single-window administration and minimal bureaucratic red tape.
              </p>
              <p>
                In fact, UAE free zones have collectively attracted foreign direct investment in the form of 200,000 firms that contribute to GDP growth.
              </p>
              <p>
                The UAE government has established several free zones for specific commercial activity, promoting entrepreneurship and innovation. These offer flexi-desk and flexi-office configurations, access to free-hold property, and investor privacy with low reporting duties.
              </p>
              <p className="font-medium text-heading-dark">
                Free zones differ from each other on their specific focus areas, costs and documentation, but the core benefits remain the same.
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
              Advantages of UAE free zone company formation
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              UAE free zones offer unparalleled advantages for international businesses looking to establish their Middle East presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* A list of free zones in the UAE Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              A list of free zones in the UAE
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Emirates in the UAE have created free zones to attract foreign investment and offer entrepreneurs an opportunity to realize their business goals. UAE Free Zones include:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {topFreeZones.map((zone, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark mb-2">
                      {zone.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-grey-600 mb-3">
                      <span className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        From {zone.minCost}
                      </span>
                      <span className="flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        {zone.setupTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-grey-600 mb-4 text-sm">
                  {zone.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-heading-dark mb-2 text-sm">Key Advantages:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {zone.advantages.map((advantage, advIndex) => (
                      <div key={advIndex} className="flex items-center text-xs text-grey-600">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2 flex-shrink-0" />
                        {advantage}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-heading-dark mb-2 text-sm">Popular Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {zone.industries.map((industry, indIndex) => (
                      <span key={indIndex} className="bg-primary-navy/10 text-primary-navy px-2 py-1 rounded text-xs">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={zone.link}
                  className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold inline-flex items-center justify-center text-sm"
                >
                  Learn More About {zone.name.split(' ')[0]}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How to register a company in UAE free zones, step by step
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
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

      {/* Documents Needed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Documents needed to complete your UAE free zone business setup
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              The following is a list of documents needed for the process. Specific free zones may require additional documents. Bizvisor would be happy to assist you in collating your documents based on the free zone you select.
            </p>
            
            <div className="bg-grey-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {documentsNeeded.map((document, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                    <span className="text-grey-700">{document}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Bizvisor Can Help Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How Bizvisor can help
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              At Bizvisor, we have a team of professionals who can fulfill all the requirements quickly so that you can focus on your business priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bizvisorServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
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

      {/* Call to Action with Phone Number */}
      <section className="py-20 bg-primary-navy">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Free Zone Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us at +971 56 496 0040 to make the business setup process in UAE Free Zones hassle-free and efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564960040">
              <button className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold">
                Call +971 56 496 0040
              </button>
            </a>
            <button 
              onClick={openCalendly}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Factors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How to Choose the Right Free Zone
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Consider these key factors when selecting the most suitable free zone for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisonFactors.map((factor, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="w-6 h-6 text-primary-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {factor.factor}
                </h3>
                <p className="text-grey-600 text-sm">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Process Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Free Zone Setup Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our streamlined process makes free zone company formation quick and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {originalProcess.map((step, index) => (
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={closeCalendly}
        url="https://calendly.com/saidtouma-bizvisor/consultation?month=2025-06"
      />
    </div>
  );
};

export default FreeZoneOverview;