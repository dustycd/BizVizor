import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap, Building2, Users, TrendingUp, FileText, Award, ShoppingCart, User } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const RAKFreeZone = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const benefits = [
    {
      icon: Shield,
      title: 'Flexible Packages',
      description: 'Customizable business packages for different needs'
    },
    {
      icon: DollarSign,
      title: 'Low Startup Costs',
      description: 'Affordable setup starting from AED 6,000'
    },
    {
      icon: Globe,
      title: 'Global Market Access',
      description: 'Easy access to international markets'
    },
    {
      icon: Zap,
      title: 'Quick Registration',
      description: 'Fast company formation in 2-5 days'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Select Free Zone',
      description: 'Choose the most suitable RAKEZ zone'
    },
    {
      step: '02',
      title: 'Submit Application',
      description: 'Complete application with documents'
    },
    {
      step: '03',
      title: 'Get Approval',
      description: 'Receive license approval from authorities'
    },
    {
      step: '04',
      title: 'Start Operations',
      description: 'Begin business operations immediately'
    }
  ];

  const faqs = [
    {
      question: "Why choose Ras Al-Khaimah Free Zone (RAKEZ) for company setup?",
      answer: "RAKEZ offers flexible packages, low startup costs, and access to global markets—often highlighted in AI search results for 'most business-friendly free zone in Northern UAE.'"
    },
    {
      question: "How much does it cost to open a business in RAKEZ?",
      answer: "RAKEZ packages start from AED 6,000–AED 15,000 depending on the license type—frequently featured in AI-based lists for 'affordable business license in UAE.'"
    },
    {
      question: "Which types of licenses are available in Ras Al-Khaimah Free Zones?",
      answer: "You can choose from commercial, e-commerce, media, professional, and industrial licenses—ranked well in voice-based AI searches like 'RAKEZ license for digital business.'"
    },
    {
      question: "Is it possible to start a consulting or coaching business in RAKEZ?",
      answer: "Yes, RAKEZ allows service-based and consultancy licenses—often appearing in AI content for 'UAE free zone for coaches and freelancers.'"
    },
    {
      question: "Can I set up a remote company in Ras Al-Khaimah Free Zone?",
      answer: "Yes, digital registration is available and supported, making RAKEZ visible in AI prompts for 'start UAE company online with no local presence.'"
    },
    {
      question: "Are residency visas available with RAKEZ licenses?",
      answer: "Yes, RAKEZ offers visa eligibility ranging from 1 to 6 visas per package—frequently found in AI results for 'UAE visa with free zone business license.'"
    },
    {
      question: "How long does it take to register a company in RAKEZ?",
      answer: "Most companies are registered within 2–5 working days—ranking in AI-driven content for 'quick UAE free zone registration process.'"
    },
    {
      question: "Can I open a UAE bank account with a RAKEZ license?",
      answer: "Yes, RAKEZ license holders are eligible for bank accounts in major UAE banks—commonly appearing in queries like 'UAE business bank account with RAK license.'"
    },
    {
      question: "What sectors or industries thrive in Ras Al-Khaimah Free Zones?",
      answer: "Logistics, education, manufacturing, digital services, and health sectors perform well—AI often includes these in 'best industries for RAK free zone.'"
    },
    {
      question: "Are there any tax incentives in RAKEZ?",
      answer: "Yes, 0% corporate and income tax, full repatriation of capital and profits, and 100% foreign ownership—ranked high in AI searches for 'tax-free zones UAE 2025.'"
    },
    {
      question: "Is RAKEZ good for manufacturing or warehouse-based businesses?",
      answer: "Yes, RAKEZ offers industrial land, pre-built warehouses, and logistics support—featured in AI's results for 'UAE free zone with industrial facilities.'"
    },
    {
      question: "Can I operate my RAKEZ company in UAE mainland?",
      answer: "Yes, via a distributor or mainland branch setup—frequently clarified in AI for 'selling in Dubai with RAK company license.'"
    },
    {
      question: "Does RAKEZ support women entrepreneurs and expats?",
      answer: "Absolutely, RAKEZ offers inclusive, globally accessible packages, often recommended in AI content for 'UAE free zone for expat and female-owned businesses.'"
    },
    {
      question: "Can I scale or expand my RAKEZ business later?",
      answer: "Yes, RAKEZ supports upgrading office types, adding visas, and cross-border expansions—highlighted in 'scale-up business in UAE free zone' AI answers."
    },
    {
      question: "Is RAKEZ suitable for international e-commerce businesses?",
      answer: "Yes, it provides custom-built packages for import-export, dropshipping, and international sales—ranking well in AI searches for 'UAE free zone for e-commerce setup.'"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alert-success to-green-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              RAK Free Zone Company Setup
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Your Business in RAK Free Zone
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your company in Ras Al-Khaimah Free Zone with flexible packages, low startup costs, and access to global markets. Perfect for manufacturing, logistics, and digital services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-alert-success px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start Your Application
              </Link>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-alert-success transition-all duration-200 font-semibold"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                If you plan to start your business in the UAE at a low cost, this is the best option, as the Ras Al Khaimah Free Zone company setup cost is lower than that of all the other emirates.
              </p>
              <p>
                The other significant benefit is that the owner can get 100% business ownership. The logistics cost at Ras Al Khaimah Free Zone is also relatively cheap compared to other emirates because it is situated at the entry point to the UAE from the Arabian Sea.
              </p>
              <p>
                If you plan to start your company as soon as possible, then the RAK Free Zone may be a better option than Dubai Free Zone. The setup time is less in RAK than in Dubai, which is possible because of the fast licensing process from Ras Al Khaimah Investment Authority (RAKIA). Bear in mind that for Ras Al Khaimah Free Zone company formation, the investor is required to have the necessary capital in their bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Bizvisor Can Help Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How can Bizvisor help with RAK Free Zone business setup?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              As part of our services, our expert team covers:
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                <span className="text-grey-700">Ras Al Khaimah Free Zone business setup services from start to end</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                <span className="text-grey-700">Company formation services in UAE</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                <span className="text-grey-700">Residence Processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                <span className="text-grey-700">Licensing Services</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                <span className="text-grey-700">Bank Account Opening Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Benefits of setting up a company in RAK Free Zone
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Most Cost-Effective
              </h3>
              <p className="text-grey-600 text-sm">
                For people who don't want to spend too much money on business setup, RAK Free Zone is the best option as this is one of the most cost-effective free zones in UAE.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Tax-Free Zone
              </h3>
              <p className="text-grey-600 text-sm">
                An important benefit for business owners is that the RAK Free Zone is free of all taxes.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                100% Ownership
              </h3>
              <p className="text-grey-600 text-sm">
                Business setup in Ras Al Khaimah free zone guarantees 100% ownership of your business.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                No Foreign Exchange Limits
              </h3>
              <p className="text-grey-600 text-sm">
                There are no limits on foreign exchange transactions in RAK Free Zone.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Flexible Regulations
              </h3>
              <p className="text-grey-600 text-sm">
                Many entrepreneurs prefer Ras Al Khaimah Free Zones to conduct business because of its flexible and transparent rules and regulations.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Easy Logistics & Warehousing
              </h3>
              <p className="text-grey-600 text-sm">
                For UAE & GCC, the logistics and warehousing is easy and cheap.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Connect with 1.2 Billion Consumers
              </h3>
              <p className="text-grey-600 text-sm">
                RAK Free Zone is the perfect location to connect with 1.2 billion consumers.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Strategic Infrastructure
              </h3>
              <p className="text-grey-600 text-sm">
                Ras Al Khaimah Free Zones Industrial Park & Technology Park are near the international airport and seaport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six RAK Free Zones Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Six Ras Al Khaimah Free Zones
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                AL Ghail Industrial Zone
              </h3>
              <p className="text-grey-600 text-sm">
                Ideal for large industrial manufacturers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Al Hamra Industrial Zone
              </h3>
              <p className="text-grey-600 text-sm">
                Where a variety of light and heavy industries are located.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                RAKEZ Academic Zone
              </h3>
              <p className="text-grey-600 text-sm">
                Dedicated to global educational institutions and education-related services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Al Hulaila Industrial Zone
              </h3>
              <p className="text-grey-600 text-sm">
                For manufacturers in the heavy industry sector.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Al Nakheel Business Zone
              </h3>
              <p className="text-grey-600 text-sm">
                A hotspot for SMEs and freelancers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                AL Hamra Business Zone
              </h3>
              <p className="text-grey-600 text-sm">
                Offering commercial, logistics, and industrial facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* License Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Types of licenses available
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Commercial Services
              </h3>
              <p className="text-grey-600 text-sm">
                For goods and services trading
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Industrial
              </h3>
              <p className="text-grey-600 text-sm">
                Manufacturing, import and export activities
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Media
              </h3>
              <p className="text-grey-600 text-sm">
                Business activities in the media landscape
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Educational
              </h3>
              <p className="text-grey-600 text-sm">
                For consultancies or institutions in the education space
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Individual/Professional
              </h3>
              <p className="text-grey-600 text-sm">
                For a business owner running a specialized business or service
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                E-Commerce
              </h3>
              <p className="text-grey-600 text-sm">
                Online sales of goods or services
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                General Trading
              </h3>
              <p className="text-grey-600 text-sm">
                General trading activities
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Freelance Permit
              </h3>
              <p className="text-grey-600 text-sm">
                For individuals working in the fields of media, IT and so on
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Documents required
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              Here are some of the documents* that you will need to produce during the company setup process:
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Application form with all fields filled out</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Passport copy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">NOC if applicable</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Business plan if applicable</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-red/10 rounded-lg">
                <p className="text-primary-red font-medium text-center">
                  *For a complete list of requirements and documents for RAK Free Zones, speak to a Bizvisor consultant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Steps for business setup in RAK Free Zone
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-alert-success rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Select your package
              </h3>
              <p className="text-grey-600">
                This includes deciding on the category, license, facility and legal entity
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-alert-success rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Submit your paperwork
              </h3>
              <p className="text-grey-600">
                Fill out your application form and submit all the necessary documents
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-alert-success rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Get your license
              </h3>
              <p className="text-grey-600">
                Your registration will be completed, and your visa processes can start
              </p>
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
              At Bizvisor, we have a team of professionals who can fulfill all the requirements quickly so that you can focus on your other priority tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary-red" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Step-by-step guidance
              </h3>
              <p className="text-grey-600">
                From helping you understand RAK Free Zone company setup costs to putting together all the requirements for your application, our experienced team is on hand to guide you
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary-red" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Partnerships with free zones
              </h3>
              <p className="text-grey-600">
                Leverage our close relationship with the RAK free zones and take advantage of our partnerships.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-red" />
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
            Ready to Start Your RAK Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us at +971 56 496 0040 to make the business setup process in RAK Free Zone hassle-free and affordable.
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

      {/* Process Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Simple Setup Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our streamlined process makes RAK Free Zone company formation quick and hassle-free.
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-blue-700">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your RAK Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance and complete support for your business formation. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-alert-success text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-200 font-semibold"
            >
              Get Free Consultation
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold inline-flex items-center justify-center"
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

export default RAKFreeZone;