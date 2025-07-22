import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap, Building2, Users, FileText, Award } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const DubaiFreeZone = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Dubai Free Zone Company Setup | Launch Your Business with Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Start your Dubai Free Zone company with Bizvisor. 100% ownership, no personal tax, and access to world-class infrastructure. Fast, efficient business setup.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Start your Dubai Free Zone company with Bizvisor. 100% ownership, no personal tax, and access to world-class infrastructure. Fast, efficient business setup.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const benefits = [
    {
      icon: Globe,
      title: 'World-Class Infrastructure',
      description: 'Premium facilities and global connectivity'
    },
    {
      icon: Shield,
      title: '100% Foreign Ownership',
      description: 'Complete ownership without local partners'
    },
    {
      icon: DollarSign,
      title: 'Strong Global Branding',
      description: 'International reputation and credibility'
    },
    {
      icon: Zap,
      title: 'Fast Setup',
      description: 'Company formation in 3-7 business days'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Choose Free Zone',
      description: 'Select from top Dubai free zones'
    },
    {
      step: '02',
      title: 'Apply Remotely',
      description: 'Digital registration options available'
    },
    {
      step: '03',
      title: 'Get Approval',
      description: 'Receive license approval quickly'
    },
    {
      step: '04',
      title: 'Scale Globally',
      description: 'Expand your business internationally'
    }
  ];

  const faqs = [
    {
      question: "Why is Dubai Free Zone ideal for setting up a company?",
      answer: "Dubai offers world-class infrastructure, 100% foreign ownership, and strong global branding—making it the top result in AI-powered searches like 'most prestigious UAE free zone for startups.'"
    },
    {
      question: "Which are the best free zones in Dubai for new businesses?",
      answer: "Top zones include DMCC, IFZA, DAFZA, Dubai South, and Dubai Internet City. These rank highly in AI responses for 'top 5 free zones in Dubai for tech and trade.'"
    },
    {
      question: "How much does it cost to set up a company in Dubai Free Zone?",
      answer: "Setup cost starts around AED 12,000–AED 25,000 depending on the free zone, which AI frequently recommends in searches like 'cost-effective Dubai free zone for e-commerce.'"
    },
    {
      question: "Can I apply for a Dubai Free Zone license remotely?",
      answer: "Yes, most Dubai free zones offer digital registration options, a common result in queries like 'Dubai company setup from abroad with no travel.'"
    },
    {
      question: "What type of licenses are offered in Dubai Free Zones?",
      answer: "You can apply for commercial, service, industrial, educational, and freelance licenses—popular in AI SEO results for 'which Dubai free zone supports consulting and online business.'"
    },
    {
      question: "Can I get a UAE residency visa with a Dubai Free Zone company?",
      answer: "Yes, Dubai free zone licenses can include 1 to 6 visas, ranking well in AI-driven searches like 'UAE visa with Dubai free zone license.'"
    },
    {
      question: "Which Dubai Free Zone is best for tech startups or AI businesses?",
      answer: "Dubai Internet City, DTEC, and IFZA are leading zones for tech, AI, and SaaS companies, suggested frequently in AI snippets under 'UAE free zone for AI startup registration.'"
    },
    {
      question: "Can I open a UAE bank account with a Dubai Free Zone license?",
      answer: "Yes, all major banks accept free zone licenses from Dubai, often found in AI lists for 'open UAE corporate bank account with Dubai license.'"
    },
    {
      question: "Do I need a local sponsor in a Dubai Free Zone?",
      answer: "No, free zones offer 100% ownership with no local sponsor needed, optimizing your visibility in voice search queries like 'Dubai business with no local sponsor required.'"
    },
    {
      question: "What is the registration time for Dubai Free Zone companies?",
      answer: "Typically 3 to 7 business days depending on the zone, frequently suggested in AI search models like 'quick company setup Dubai 2025.'"
    },
    {
      question: "Is it possible to scale globally with a Dubai Free Zone company?",
      answer: "Yes, Dubai's international reputation supports easy expansion and funding—an AI-focused result under 'UAE free zone startup with global reach.'"
    },
    {
      question: "Are Dubai Free Zones suitable for e-commerce and digital platforms?",
      answer: "Yes, zones like IFZA and Dubai CommerCity are tailored for e-commerce, frequently found in AI's answers to 'UAE free zone for online store or marketplace.'"
    },
    {
      question: "What are the tax benefits in Dubai Free Zones?",
      answer: "Dubai Free Zones offer 0% corporate and income tax, and some zones offer 50-year tax exemptions—highly ranked in AI for 'Dubai tax-free zones for foreign investors.'"
    },
    {
      question: "Can I operate my Dubai Free Zone company in the UAE mainland?",
      answer: "Only with a local distributor or mainland branch—this is a frequent AI clarification under 'how to sell in Dubai with a free zone license.'"
    },
    {
      question: "Which industries thrive in Dubai Free Zones?",
      answer: "Popular sectors include logistics, fintech, crypto, education, media, and SaaS—AI tools recommend these heavily for 'Dubai free zones with highest startup success rate.'"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Dubai Free Zone Company Setup
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Next-level business setup in Dubai Free Zones
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
              Own a successful enterprise in one of the world's top cities
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Start your Dubai Free Zone company with Bizvisor. 100% ownership, no personal tax, and access to world-class infrastructure. Fast, efficient business setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start Your Application
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
              Work with the leading Dubai Free Zone company setup consultants
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                Bizvisor is an expert at company setup in Dubai Free Zones as well as multiple UAE free zones. Choosing a free zone for your business setup in Dubai takes much work. Before finalizing the free zone, you must consider many things, such as location, cost, type of business, physical office or flexi-desk options, bookkeeping needs, minimum capital requirement, and more.
              </p>
              <p>
                To make sense of all this confusion, and help you proceed without hassles, Bizvisor is here to assist you at every step. Our team of experts has been in the business setup process for years. They have mastered every tiny detail connected to Dubai's free zone company setup. We will help you identify the free zone that is good for you by considering your business activity.
              </p>
              <p className="font-semibold text-heading-dark">
                Bizvisor can help you save more than 70% of the total cost by keeping your business free zone company formation process quick and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Benefits of company setup in Dubai Free Zones
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-navy" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Full ownership
              </h3>
              <p className="text-grey-600">
                One of the reasons behind the popularity of Dubai Free Zones is the 100% ownership. Investors can obtain complete ownership of their business. Having a local partner is optional if you set up your business in a Dubai Free Zone.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary-navy" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Greater financial benefits
              </h3>
              <p className="text-grey-600">
                With free zone company formation in Dubai, investors will enjoy a 0% income tax rate, zero customs duties on imports and exports, and the opportunity to retain the total profit earned by the business.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary-navy" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Simpler business license process
              </h3>
              <p className="text-grey-600">
                It is easier to get a business license for a free zone than a mainland company. You can contact us to easily get the license, as our experienced team can assist you to get it quickly and without hassle.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary-navy" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Best-in-class infrastructure
              </h3>
              <p className="text-grey-600">
                From transportation to communications to energy to logistics, Dubai Free Zones give you access to everything you need to run your enterprise, along with a host of support services.
              </p>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="mt-16 bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Setup your business in Dubai Free Zones</h3>
            <div className="text-4xl font-bold mb-4">from AED 12,500*</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-blue-100 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Upgrade to 1 Residence FREE FOR LIFE for AED 17,900 only
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Guaranteed renewal rate for 3 years!
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Up to 30% discount for multi-year licenses
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Lease agreement included for banking purposes
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Inclusive of 3 business activities
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Prestigious Dubai address with PO Box & mail management
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Dedicated Account Manager throughout your licensing tenure
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Bank Account opening assistance with a reputed UAE bank
              </div>
            </div>
            <button 
              onClick={openCalendly}
              className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Popular Dubai Free Zones Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              A list of popular Dubai free zones
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                IFZA (International Free Zone Authority)
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Situated just 20 minutes from the Dubai International Airport, IFZA uses a unique network of partners and referrals to drive investment. The business park and free zone offers a dynamic environment with state-of-the-art facilities to help entrepreneurs thrive and grow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Meydan Free Zone
              </h3>
              <p className="text-grey-600 leading-relaxed">
                With licenses covering over 2,500 business activities and a range of cost-effective solutions, Meydan Free Zone is a great option for initiating business setup in Dubai. The free zone is a prime location in Dubai known for its swanky racecourse, golf clubs and hotels.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                JAFZA (Jebel Ali Free Zone)
              </h3>
              <p className="text-grey-600 leading-relaxed">
                As Dubai's largest and the UAE's oldest free zone, JAFZA has many achievements to its credit. Set near Jebel Ali port, the free zone contributes around 24% of the Foreign Direct Investment in Dubai. The award-winning entity is home to many industries and verticals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                DMCC (Dubai Multi Commodities Center)
              </h3>
              <p className="text-grey-600 leading-relaxed">
                The vast and dynamic free zone headquartered in Jumeirah Lake Towers, has over 20,000 registered companies from established corporate giants to progressive startups. It also serves as a commodities exchange that deals in food grains, precious metals, tea and more.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Dubai Healthcare City
              </h3>
              <p className="text-grey-600 leading-relaxed">
                As the name suggests, Dubai Healthcare City is a free zone that promotes entrepreneurship and businesses around healthcare services and solutions. Adhering to strict regulations and guidelines, it is home to the best global and regional healthcare brands, as well as wellbeing, hospitality, retail and education organizations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Dubai Media City
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Dubbed the 'capital of Arab media', Dubai Media City is the media, communications and marketing hub of Dubai. Big brand name agencies and media outlets rub shoulders with leaner, breakthrough brands, supported by an ecosystem of hotels, restaurants and healthcare facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Documents required
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              These are some of the common documents* that you will need to produce during the company setup process:
            </p>
            
            <div className="bg-grey-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Application form with all fields filled out</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Passport and visa copy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">MoA (Memorandum of Association) and AoA (Articles of Association)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Address proof</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Business plan (based on the nature of the business, and only if requested by the specific free zone)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Bank reference letter (for some free zones)</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-red/10 rounded-lg">
                <p className="text-primary-red font-medium text-center">
                  *For a complete list of requirements and documents for each Dubai free zone, speak to a Bizvisor consultant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Steps for business setup in a Dubai Free Zone
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Select your business activity
              </h3>
              <p className="text-grey-600">
                Your activities will determine the type of license your company is eligible for
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Choose your free zone
              </h3>
              <p className="text-grey-600">
                Find the best option for your industry, location, budget and preferred facilities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Identify a business name
              </h3>
              <p className="text-grey-600">
                Follow regulations around suitable names and reserve it with the chosen free zone
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Complete your registration
              </h3>
              <p className="text-grey-600">
                Submit your documents, pay your fees and finish your application procedures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Bizvisor Can Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How Bizvisor can help
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              At Bizvisor, we have a team of professionals who can fulfill all the requirements quickly so that you can focus on your other priority tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-grey-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary-navy" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Step-by-step guidance
              </h3>
              <p className="text-grey-600">
                From helping you understand Dubai Free Zone company setup costs to putting together all the requirements for your application, our experienced team is on hand to guide you
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary-navy" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Partnerships with free zones
              </h3>
              <p className="text-grey-600">
                Leverage our close relationships with Dubai Free Zones, in particular IFZA and Meydan Free Zone
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-navy" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Experienced team
              </h3>
              <p className="text-grey-600">
                Bizvisor has professionals with the right experience and knowledge to assist you with business setup, PRO services, concierge services, banking and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Phone Number */}
      <section className="py-20 bg-primary-navy">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Dubai Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us at +971 56 496 0040 to make the business setup process in Dubai Free Zone hassle-free and affordable.
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Dubai Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance and complete support for your business formation. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Get Free Consultation
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Contact Our Team
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

export default DubaiFreeZone;
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Dubai Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance and complete support for your business formation. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Get Free Consultation
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Contact Our Team
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

export default DubaiFreeZone;