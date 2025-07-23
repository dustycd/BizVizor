import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Shield, CheckCircle, ArrowRight, Globe, Lock, DollarSign, Zap, Award, ChevronDown, ChevronUp, Building2, Home, Users } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const JafzaOffshore = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const benefits = [
    {
      icon: Award,
      title: 'International Recognition',
      description: 'Globally recognized and respected offshore jurisdiction'
    },
    {
      icon: Globe,
      title: 'Banking Access',
      description: 'Easy access to international banking and financial services'
    },
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Strong legal framework for asset protection and privacy'
    },
    {
      icon: DollarSign,
      title: 'Investment Flexibility',
      description: 'Freedom to invest in various asset classes globally'
    }
  ];

  const features = [
    {
      title: 'Minimum Capital USD 1,000',
      description: 'Low minimum capital requirement for company formation',
      icon: DollarSign
    },
    {
      title: 'Tax Efficiency',
      description: 'Zero corporate and personal income tax on offshore activities',
      icon: Shield
    },
    {
      title: 'Global Presence',
      description: 'Establish international presence with JAFZA credibility',
      icon: Globe
    },
    {
      title: 'Professional Services',
      description: 'Access to world-class professional and financial services',
      icon: Award
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Name Approval',
      description: 'Submit and get approval for your company name'
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'Prepare and submit all required incorporation documents'
    },
    {
      step: '03',
      title: 'Registration',
      description: 'Complete registration with JAFZA offshore authorities'
    },
    {
      step: '04',
      title: 'Certificate & Setup',
      description: 'Receive incorporation certificate and complete setup'
    }
  ];

  const useCases = [
    'International Trading',
    'Investment Holding',
    'Asset Management',
    'Intellectual Property',
    'International Consulting',
    'Global Business Operations'
  ];

  const advantages = [
    {
      title: 'World-Class Infrastructure',
      description: 'Access to premium facilities and business infrastructure'
    },
    {
      title: 'Strategic Location',
      description: 'Gateway between East and West for international business'
    },
    {
      title: 'Regulatory Excellence',
      description: 'Well-established regulatory framework and compliance standards'
    },
    {
      title: 'Business Support',
      description: 'Comprehensive business support services and facilities'
    }
  ];

  const faqs = [
    {
      question: "Why choose JAFZA Offshore for company formation?",
      answer: "JAFZA Offshore is highly reputed, ideal for holding companies, international trading, and asset protection, and is recognized by global banks."
    },
    {
      question: "Can a JAFZA Offshore company trade in the UAE mainland?",
      answer: "No, JAFZA Offshore entities cannot operate in the UAE mainland but can hold investments and own approved Dubai properties."
    },
    {
      question: "What is the cost of forming a JAFZA Offshore company?",
      answer: "Setup costs are higher than other offshore jurisdictions, starting from AED 18,000–22,000, reflecting its premium status."
    },
    {
      question: "How long does incorporation take?",
      answer: "The process typically takes 5–7 working days due to stricter compliance and background checks."
    },
    {
      question: "Is 100% foreign ownership allowed?",
      answer: "Yes, JAFZA Offshore permits 100% foreign ownership with no local sponsor required."
    },
    {
      question: "What activities are allowed under JAFZA Offshore?",
      answer: "International trading, asset holding, intellectual property registration, and investment management are common activities."
    },
    {
      question: "Do I need a physical office?",
      answer: "No, only a registered agent and legal registered address within JAFZA are required."
    },
    {
      question: "Are visas available with JAFZA Offshore?",
      answer: "No, JAFZA Offshore does not issue residency visas for shareholders or staff."
    },
    {
      question: "Can JAFZA Offshore companies own Dubai properties?",
      answer: "Yes, they are allowed to own properties in designated freehold areas like Palm Jumeirah and Emirates Hills."
    },
    {
      question: "What taxes apply to JAFZA Offshore?",
      answer: "Enjoy 0% corporate tax, 0% VAT, and full repatriation of capital and profits, making it highly tax-efficient."
    },
    {
      question: "Do I need annual audits?",
      answer: "Yes, JAFZA Offshore requires companies to maintain audited financial statements and submit them annually."
    },
    {
      question: "Is it good for international banking?",
      answer: "Yes, JAFZA Offshore's strong reputation makes it ideal for opening corporate bank accounts in UAE and abroad."
    },
    {
      question: "What documents are required for setup?",
      answer: "You need passport copies, proof of address, bank reference letters, and shareholder details."
    },
    {
      question: "Can Bizvisor assist in bank account opening?",
      answer: "Yes, Bizvisor has relationships with leading UAE banks, making the account opening process seamless."
    },
    {
      question: "Why choose Bizvisor for JAFZA Offshore?",
      answer: "Bizvisor offers expert consultation, quick approvals, and compliance support, ensuring hassle-free setup."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              JAFZA Offshore Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              JAFZA Offshore Company Formation in Dubai
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
              Your Gateway to a World of Opportunities
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your offshore company in JAFZA, one of the most prestigious and internationally recognized offshore jurisdictions in the UAE. Perfect for global business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start Formation
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
              JAFZA Offshore Business Formation in Dubai
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                For businesses, the UAE is one of the most perfect locations in the whole world. The attractive tax benefits make the UAE the first choice of foreign investors for business. It provides many opportunities to individuals who want to start their businesses in the country.
              </p>
              <p>
                Jafza is Dubai Port (DP), the world's flagship free zone set up in 1985. If you compare Jafza with UAE's other free zones, this is the fastest-growing and largest free zone. It has the 7th largest container port, Jebel Ali Sea Port.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Permitted Activities Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              A List of Permitted Activities in Dubai for Offshore Company Formation in JAFZA
            </h2>
            <p className="text-lg text-grey-600 max-w-4xl mx-auto mb-8">
              Dubai has developed an empire that enables all workplaces to explore and thrive, whether offshore, in a free zone, or on the mainland. They permit various activities, and the most significant part is that everything is fully controlled, perfect, and inclusive to benefit all stakeholders. Setting up an offshore firm in JAFZA is also relatively inexpensive. It's no surprise that Dubai is regarded as an excellent commercial location. When it comes to offshore operations, the emirate allows for a wide range of them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-3">
                Holding Firm
              </h3>
              <p className="text-grey-600">
                You may utilize your offshore firm as a holding company to manage your operations more efficiently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-3">
                Invest in Property
              </h3>
              <p className="text-grey-600">
                Property ownership is possible via your offshore corporation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-3">
                International Trading
              </h3>
              <p className="text-grey-600">
                You may conduct trading operations with your offshore business in JAFZA.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-3">
                Professional Services
              </h3>
              <p className="text-grey-600">
                You can carry out professional services worldwide using your offshore company in an offshore location.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-3">
                Intellectual Property Rights
              </h3>
              <p className="text-grey-600">
                Under the name of your offshore firm, you may register trademarks, patents, and copyrights and acquire and sell copyrights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Process of Dubai Offshore Company Formation – JAFZA (Jebel Ali Free Zone)
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              When all of the documentation is in order, establishing a JAFZA firm becomes much more straightforward. Setting up is easier with the following guidelines in place.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="bg-grey-50 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-heading-dark mb-3">
                    Select a Name
                  </h3>
                  <p className="text-grey-600 leading-relaxed">
                    Once you've decided on a company activity, adopt a good name and make sure you meet the naming requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-grey-50 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-heading-dark mb-3">
                    Please Provide Relevant Documents
                  </h3>
                  <p className="text-grey-600 leading-relaxed">
                    Once all the completed forms are completed, sign them and submit them for license approval and further action.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-grey-50 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-heading-dark mb-3">
                    Articles of Association and Memorandum of Association
                  </h3>
                  <p className="text-grey-600 leading-relaxed">
                    Present the MOA and the AOA in English. The authority then evaluates the documentation and authorizes it based on its integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-grey-50 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-heading-dark mb-3">
                    Bank Account Opening
                  </h3>
                  <p className="text-grey-600 leading-relaxed">
                    Once you've completed the preceding procedures, create an offshore bank account to facilitate commercial transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary-navy rounded-xl p-6 text-white max-w-2xl mx-auto">
              <p className="text-lg leading-relaxed">
                Upon completion of the papers, establishing a Dubai offshore business takes 6-7 working days. Keep the qualifications in mind to help the procedure go more smoothly.
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
              Advantages of Offshore Company Formation
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Foreigners may entirely own the offshore company</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">A UAE national does not necessarily need to be a shareholder or sponsor</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">A firm may own real estate on the Palm Islands or any other region approved by the JAFZA</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">There is no publicly available corporate officer registry</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Maintain several currency bank accounts</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">The corporation is not obligated to maintain books or records</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Current offshore legislation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">The offshore organization will be exempt from corporate and individual income taxes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Foreign currency is not restricted</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Offshore firms' revenues and funds are entirely returned</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">There are no workers or related costs since there is no need for an onshore office</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">It is legal to avoid paying certain income and profits taxes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">Setting up an offshore business needs very little money</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-grey-700">There is just one shareholder or director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bizvisor Support Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-grey-50 rounded-xl p-8">
              <p className="text-lg text-grey-600 leading-relaxed mb-6">
                Bizvisor can help you with the above Jafza offshore business formation process. The entire process requires time and effort, and as a business owner, you might need more time to spend valuable time on such activities. At Bizvisor, we can provide complete support from start to finish.
              </p>
              <p className="text-xl font-semibold text-primary-navy">
                Call us at +971 56 496 0040 to make the JAFZA Offshore business formation process in Dubai hassle-free and affordable.
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
              Why Choose JAFZA Offshore?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              JAFZA offers premium offshore services with international recognition and world-class infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
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

      {/* Features Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Key Features
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive features that make JAFZA offshore companies ideal for international business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary-navy" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              JAFZA Advantages
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Unique advantages that set JAFZA apart as a premier offshore jurisdiction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-heading-dark">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-grey-600">
                  {advantage.description}
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
              Ideal Use Cases
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              JAFZA offshore companies are perfect for various international business activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark">
                  {useCase}
                </h3>
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
              Professional process to establish your JAFZA offshore company with complete compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about JAFZA Offshore company formation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-grey-50 rounded-xl shadow-sm border border-grey-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-grey-100 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-heading-dark pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-primary-navy" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-grey-400" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-grey-100">
                        <p className="text-grey-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-blue-700">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your JAFZA Offshore Formation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us at +971 56 496 0040 to make the JAFZA Offshore business formation process in Dubai hassle-free and affordable.
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

export default JafzaOffshore;