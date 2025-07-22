import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Globe, Lock, DollarSign, Zap, Users, TrendingUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const OffshoreFormation = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const offshoreJurisdictions = [
    {
      name: 'Ajman Offshore',
      description: 'Cost-effective offshore solution with excellent privacy protection and business flexibility.',
      benefits: ['Low Setup Cost', 'Privacy Protection', 'Asset Protection', 'Tax Efficiency'],
      minCapital: 'No Minimum',
      setupTime: '3-5 days'
    },
    {
      name: 'Jafza Offshore',
      description: 'Premium offshore jurisdiction with world-class infrastructure and international recognition.',
      benefits: ['International Recognition', 'Banking Access', 'Investment Flexibility', 'Global Presence'],
      minCapital: 'USD 1,000',
      setupTime: '5-7 days'
    },
    {
      name: 'RAK Offshore',
      description: 'Established offshore center with comprehensive services and competitive advantages.',
      benefits: ['Established Jurisdiction', 'Competitive Fees', 'Professional Services', 'Regulatory Compliance'],
      minCapital: 'USD 1,000',
      setupTime: '5-7 days'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Protect your assets from potential risks and liabilities'
    },
    {
      icon: Lock,
      title: 'Privacy & Confidentiality',
      description: 'Maintain complete privacy of ownership and operations'
    },
    {
      icon: DollarSign,
      title: 'Tax Optimization',
      description: 'Benefit from tax-efficient structures and planning'
    },
    {
      icon: Globe,
      title: 'International Presence',
      description: 'Establish global presence with international credibility'
    }
  ];

  const features = [
    {
      title: 'No Physical Presence Required',
      description: 'Operate your offshore company without maintaining physical presence in the jurisdiction.',
      icon: Globe
    },
    {
      title: 'Flexible Ownership Structure',
      description: 'Enjoy flexible ownership structures with nominee services available.',
      icon: Users
    },
    {
      title: 'International Banking',
      description: 'Access to international banking services and financial institutions.',
      icon: DollarSign
    },
    {
      title: 'Investment Flexibility',
      description: 'Freedom to invest in various asset classes and jurisdictions.',
      icon: TrendingUp
    },
    {
      title: 'Confidentiality Protection',
      description: 'Strong confidentiality laws protecting beneficial ownership information.',
      icon: Lock
    },
    {
      title: 'Quick Formation',
      description: 'Fast and efficient company formation process with minimal documentation.',
      icon: Zap
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Choose Jurisdiction',
      description: 'Select the most suitable offshore jurisdiction for your needs'
    },
    {
      step: '02',
      title: 'Prepare Documents',
      description: 'Prepare and notarize all required incorporation documents'
    },
    {
      step: '03',
      title: 'Submit Application',
      description: 'Submit application to the relevant offshore authority'
    },
    {
      step: '04',
      title: 'Company Formation',
      description: 'Receive certificate of incorporation and company documents'
    }
  ];

  const useCases = [
    {
      title: 'International Trading',
      description: 'Facilitate international trade and commerce with global reach',
      icon: Globe
    },
    {
      title: 'Investment Holding',
      description: 'Hold investments and assets in a tax-efficient structure',
      icon: DollarSign
    },
    {
      title: 'Intellectual Property',
      description: 'Protect and monetize intellectual property assets',
      icon: Shield
    },
    {
      title: 'Estate Planning',
      description: 'Efficient estate planning and wealth preservation strategies',
      icon: Lock
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-grey-700 to-grey-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Offshore Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Offshore company formation in Dubai
            </h1>
            <p className="text-xl mb-4 opacity-90 leading-relaxed font-medium">
              Enjoy hassle-free setup with the leading experts in the UAE
            </p>
            <p className="text-lg mb-8 opacity-80">
              Create offshore companies for asset protection, tax optimization, and international business operations. Choose from established UAE offshore jurisdictions with proven track records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start Formation
              </Link>
              <a href="#jurisdictions-section">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-grey-700 transition-all duration-200 font-semibold">
                Compare Jurisdictions
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Up Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Speed up your offshore company setup in Dubai
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                Offshore companies in Dubai do not require a license to start trading. The company can begin to do business with a certificate of incorporation. The setup process in Dubai is quick and hassle-free, however, there are rules and regulations the investor must know before registering an offshore company in the UAE. Bizvisor can be your helping hand here. We have been in this business for years and know all the legal requirements. Contact us to save your time and effort and take advantage of our knowledge and experience.
              </p>
              <p>
                We have been working closely with government authorities for years, so we can easily and quickly establish your offshore business in the UAE. By hiring professionals like Bizvisor for your Dubai offshore company formation services, you can also save money on documentation and other business setup processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Offshore Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              What is an offshore company in Dubai?
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-grey-600 leading-relaxed mb-6">
                Offshore companies are companies established in the UAE's free zones, but operate outside the UAE. They are ideal for entrepreneurs within the country who are strictly looking at markets outside the country, while enjoying the benefits of offshore formation in Dubai, such as tax breaks, asset security and a legal framework designed to foster business growth.
              </p>
              <p className="text-lg text-grey-600 leading-relaxed">
                Offshore companies in Dubai or the UAE cannot conduct business within UAE borders. However, business owners enjoy exemptions on several fronts including VAT, physical office space requirements, legalities and more.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-grey-700 to-grey-900 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Get your offshore company setup in Dubai
                </h3>
                <div className="text-4xl font-bold mb-6">starting from AED 6,000</div>
                <button 
                  onClick={openCalendly}
                  className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Options Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              The best options for your offshore business setup in Dubai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Offshore Company Formation in Dubai
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Setup your offshore company in one of the biggest commercial hubs in the world.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Offshore Company Formation in Jebel Ali
              </h3>
              <p className="text-grey-600 leading-relaxed">
                JAFZA or Jebal Ali Free Zone offshore companies benefit from being part of a thriving business destination.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Offshore Company Formation in Ajman
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Take advantage of the affordable costs and numerous benefits offered by establishing an offshore company here.
              </p>
            </div>

            <div className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Offshore Company Formation in RAK
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Enjoy low establishment fees, asset security and tax benefits at RAK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KYC Requirements Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Decode 'Know Your Customer' (KYC) requirements for offshore companies
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-grey-600 leading-relaxed mb-6">
                When you set up an offshore company in the UAE, you must follow a strict method called "Know Your Customer" (KYC). As a business owner, you are required to hand over documents like copies of passports, address proof, bank reference letters, and investor information. The KYC process verifies investor information and prevents identity theft, financial scams, and money laundering.
              </p>
              <p className="text-lg text-grey-600 leading-relaxed">
                We know anything to do with documents and paperwork can be confusing, and so Bizvisor will provide you with a comprehensive and definitive list of documents. We'll help you put together your docket for submission to the appropriate authorities.
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
              What are the benefits of registering an offshore company in Dubai?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto mb-8">
              If you compare the rules and regulations in the UAE with other countries, you will find that the UAE has a well-regulated banking system, top-class infrastructure and amenities, trusted telecommunication networks, and quick access to international markets. The other benefits of offshore company registration in Dubai are:
            </p>
          </div>

          <div className="bg-grey-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-grey-700">Business-friendly legal structure with transparent rules and regulations</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-grey-700">Flexible registration and documentation processes</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-grey-700">Neutral taxation systems</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-grey-700">Best systems to keep assets secure</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-grey-700">Central hub for international markets</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-grey-700">Availability of reliable sources for global funding</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-grey-700">No double taxation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Set Up Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How to set up an offshore company in Dubai, step by step
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-grey-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Select your structure and activity
              </h3>
              <p className="text-grey-600">
                This includes identifying shareholders, directors and secretary in line with legal requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-grey-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Identify your business name
              </h3>
              <p className="text-grey-600">
                You will need to identify and share three options to the authorities, from which one will be chosen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-grey-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Submit your application
              </h3>
              <p className="text-grey-600">
                Fill out the form, gather your attested documents and pay the required fees
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-grey-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4">
                Open your bank account
              </h3>
              <p className="text-grey-600">
                Receive your incorporation certificate and open your company bank account
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-6 border border-grey-200 max-w-2xl mx-auto">
              <p className="text-grey-700">
                Are you planning to register your company in Dubai? Bizvisor's skilled team can do it on your behalf so that you can focus on your other priority work.
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
              Why Choose Offshore Formation?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Offshore companies offer unique advantages for international business, asset protection, and tax planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-grey-700/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-grey-700" />
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

      {/* Jurisdictions Section */}
      <section id="jurisdictions-section" className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              UAE Offshore Jurisdictions
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Choose from established UAE offshore jurisdictions, each offering unique advantages for different business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offshoreJurisdictions.map((jurisdiction, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-grey-700 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark">
                      {jurisdiction.name}
                    </h3>
                    <p className="text-sm text-primary-red font-medium">
                      Setup: {jurisdiction.setupTime}
                    </p>
                  </div>
                </div>
                
                <p className="text-grey-600 mb-4">
                  {jurisdiction.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm text-grey-600 mb-2">Minimum Capital</div>
                  <div className="font-semibold text-heading-dark">{jurisdiction.minCapital}</div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {jurisdiction.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-grey-600">
                      <CheckCircle className="w-4 h-4 text-alert-success mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={getOffshoreUrl(jurisdiction.name)}
                  className="w-full bg-grey-700 text-white py-3 rounded-lg hover:bg-grey-800 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Offshore Company Features
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive features and benefits that make offshore companies ideal for international business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-grey-700 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-grey-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Common Use Cases
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Discover how offshore companies can benefit different types of business activities and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-grey-700/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-7 h-7 text-grey-700" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {useCase.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Formation Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Simple and efficient process to establish your offshore company with complete legal compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-grey-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-gradient-to-r from-grey-700 to-grey-900">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Form Your Offshore Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us at +971 56 496 0040 to make the offshore company formation process in Dubai and the UAE hassle-free and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564960040">
              <button className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold">
                Call +971 56 496 0040
              </button>
            </a>
            <button 
              onClick={openCalendly}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-grey-700 transition-all duration-200 font-semibold"
            >
              Schedule Consultation
            </button>
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

// Helper function to get the correct URL for each offshore jurisdiction
const getOffshoreUrl = (jurisdictionName: string): string => {
  const jurisdictionUrls: { [key: string]: string } = {
    'Ajman Offshore': '/ajman-offshore-company-formation-dubai-uae',
    'Jafza Offshore': '/jafza-offshore-company-formation-dubai-uae',
    'RAK Offshore': '/ras-al-khaimah-offshore-company-formation-dubai-uae'
  };
  
  return jurisdictionUrls[jurisdictionName] || '/contact';
};

export default OffshoreFormation;