import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Globe, Lock, DollarSign, Zap, Award, Users, FileText, Calculator } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const RasAlKhaimahOffshore = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const benefits = [
    {
      icon: Award,
      title: 'Established Jurisdiction',
      description: 'Well-established offshore center with proven track record'
    },
    {
      icon: DollarSign,
      title: 'Competitive Fees',
      description: 'Competitive pricing with excellent value for money'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Strong regulatory framework ensuring full compliance'
    },
    {
      icon: Globe,
      title: 'Professional Services',
      description: 'Access to comprehensive professional and support services'
    }
  ];

  const features = [
    {
      title: 'Minimum Capital USD 1,000',
      description: 'Reasonable minimum capital requirement for incorporation',
      icon: DollarSign
    },
    {
      title: 'Tax Benefits',
      description: 'Zero corporate and personal income tax advantages',
      icon: Shield
    },
    {
      title: 'Confidentiality',
      description: 'Strong privacy protection and confidentiality laws',
      icon: Lock
    },
    {
      title: 'Quick Setup',
      description: 'Efficient company formation in 5-7 working days',
      icon: Zap
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Name Reservation',
      description: 'Reserve your company name with RAK authorities'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'Prepare and authenticate all required documents'
    },
    {
      step: '03',
      title: 'Incorporation',
      description: 'Complete incorporation process with RAK offshore'
    },
    {
      step: '04',
      title: 'Company Setup',
      description: 'Receive certificates and complete company setup'
    }
  ];

  const useCases = [
    'International Trading',
    'Investment Holding',
    'Asset Protection',
    'Estate Planning',
    'Professional Services',
    'Consulting Activities'
  ];

  const advantages = [
    {
      title: 'Strategic Location',
      description: 'Excellent location for Middle East and international business operations'
    },
    {
      title: 'Business Friendly',
      description: 'Supportive business environment with streamlined procedures'
    },
    {
      title: 'Cost Effective',
      description: 'Competitive setup and maintenance costs compared to other jurisdictions'
    },
    {
      title: 'Professional Support',
      description: 'Access to experienced professionals and service providers'
    }
  ];

  const complianceFeatures = [
    {
      title: 'Annual Returns',
      description: 'Simple annual return filing requirements'
    },
    {
      title: 'Audit Requirements',
      description: 'Flexible audit requirements based on company activities'
    },
    {
      title: 'Reporting Standards',
      description: 'Clear reporting standards and compliance guidelines'
    },
    {
      title: 'Regulatory Support',
      description: 'Ongoing regulatory support and guidance'
    }
  ];

  const faqs = [
    {
      question: "Why choose RAK ICC for offshore business?",
      answer: "RAK ICC is known for its cost-effectiveness, privacy, and international recognition, making it ideal for global trading and holding companies."
    },
    {
      question: "Can RAK ICC companies trade in the UAE mainland?",
      answer: "No, they cannot trade within the UAE mainland but can conduct international business and hold UAE real estate in approved zones."
    },
    {
      question: "What is the cost of RAK ICC incorporation?",
      answer: "It is one of the most affordable, starting from AED 9,000–12,000, making it popular with startups and investors."
    },
    {
      question: "How long does setup take?",
      answer: "RAK ICC incorporation is fast, usually completed within 2–3 working days with proper documentation."
    },
    {
      question: "Is 100% foreign ownership allowed?",
      answer: "Yes, RAK ICC permits 100% foreign ownership with no local sponsor or partner."
    },
    {
      question: "What activities are permitted?",
      answer: "Global trading, consultancy, asset protection, IP holding, and investment management are common permitted activities."
    },
    {
      question: "Do I need a physical office?",
      answer: "No physical office is required; only a registered agent and official registered address in RAK are mandatory."
    },
    {
      question: "Are visas available with RAK ICC?",
      answer: "No, RAK ICC offshore companies cannot issue residency visas."
    },
    {
      question: "Can RAK ICC companies open UAE bank accounts?",
      answer: "Yes, Bizvisor assists with corporate bank account openings, subject to KYC and compliance approval."
    },
    {
      question: "Can RAK ICC companies own property in Dubai?",
      answer: "Yes, they can own freehold properties in designated areas, subject to developer approval."
    },
    {
      question: "What taxes apply to RAK ICC companies?",
      answer: "There is 0% corporate tax, 0% VAT, and complete profit repatriation, making it tax-efficient."
    },
    {
      question: "Do I need annual audits?",
      answer: "Yes, RAK ICC requires maintaining proper accounting records and filing audited financials annually."
    },
    {
      question: "Is RAK ICC accepted for international banking?",
      answer: "Yes, RAK ICC has strong global recognition, making it easier to open international bank accounts."
    },
    {
      question: "What documents are required for setup?",
      answer: "Passport copies, proof of residence, shareholder details, and business activity descriptions are required."
    },
    {
      question: "Why use Bizvisor for RAK ICC incorporation?",
      answer: "Bizvisor ensures quick registration, bank account facilitation, and compliance handling for smooth offshore operations."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alert-success to-green-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              RAK Offshore Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ras Al Khaimah Offshore Company Formation
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your offshore company in Ras Al Khaimah, a well-established offshore jurisdiction offering competitive advantages and comprehensive professional services.
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
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-alert-success transition-all duration-200 font-semibold"
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
              Unlock Opportunities With Ras Al Khaimah Offshore Company In Dubai, UAE
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                The Ras Al Khaimah Offshore Company is a shining example of success in the business sector in Dubai, United Arab Emirates. Establishing a Ras Al Khaimah offshore company in Dubai is a wise business decision with many benefits.
              </p>
              <p>
                Dubai is renowned for its dynamic business landscape, and the offshore business setup in RAK is no exception. Let's delve into the critical aspects of Ras Al Khaimah Offshore Company formation and explore why this choice could be your gateway to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of RAK Offshore Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Benefits Of Ras Al Khaimah Offshore Company In Dubai, United Arab Emirates
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Establishing a Ras Al Khaimah Offshore Company in Dubai, UAE, presents a multitude of benefits that can empower your business endeavors:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-alert-success" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                TAX EFFICIENCY
              </h3>
              <p className="text-grey-600 text-center">
                One of the most enticing benefits is the favorable tax environment. Ras Al Khaimah offshore companies are not subject to corporate or income taxes in the UAE, providing a substantial advantage for international businesses.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-alert-success" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                ASSET SECURITY
              </h3>
              <p className="text-grey-600 text-center">
                Offshore companies provide solid safeguards for your assets. Your personal belongings are kept separate from your business, shielding them from legal and financial risks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-alert-success" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                CONFIDENTIALITY
              </h3>
              <p className="text-grey-600 text-center">
                Offshore companies in RAK offer high privacy and confidentiality in business dealings.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-alert-success" />
              </div>
              <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                BANKING FACILITIES
              </h3>
              <p className="text-grey-600 text-center">
                Access to world-class banking services is simplified, with international and local banks catering to offshore companies' needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bizvisor Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              The Bizvisor Advantages
            </h2>
            <div className="bg-grey-50 rounded-xl p-8 mb-12">
              <p className="text-lg text-grey-600 leading-relaxed text-center">
                Choosing the right partner for your Ras Al Khaimah Offshore Company setup is crucial. At Bizvisor, we understand that each business is unique and requires a tailored approach. Our dedicated team specializes in providing a seamless experience for your offshore business journey in Dubai, UAE.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-heading-dark mb-8 text-center">
              With Bizvisor, You Benefit From:
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-grey-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-heading-dark mb-3">
                  Expertise
                </h4>
                <p className="text-grey-600">
                  We have in-depth knowledge of the local business landscape, regulations, and procedures. Our experts ensure that your Ras Al Khaimah offshore company fully complies with UAE laws.
                </p>
              </div>

              <div className="bg-grey-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-heading-dark mb-3">
                  Tailored Solutions
                </h4>
                <p className="text-grey-600">
                  Customize services to meet your business needs, ensuring you have the most suitable setup for your industry and goals.
                </p>
              </div>

              <div className="bg-grey-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-heading-dark mb-3">
                  End-to-End Support
                </h4>
                <p className="text-grey-600">
                  Our services cover every aspect of your offshore business venture, from company registration to ongoing support.
                </p>
              </div>

              <div className="bg-grey-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-heading-dark mb-3">
                  Transparent Pricing
                </h4>
                <p className="text-grey-600">
                  We offer clear and competitive pricing structures, ensuring you know what to expect at every process stage.
                </p>
              </div>

              <div className="bg-grey-50 rounded-xl p-6 md:col-span-2">
                <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-heading-dark mb-3">
                  Global Reach
                </h4>
                <p className="text-grey-600">
                  Our international network of partners and contacts allows us to facilitate seamless global expansion for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Bizvisor Offers A Comprehensive Suite Of Support Services For Ras Al Khaimah Offshore Company Setup
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Company Registration
              </h3>
              <p className="text-grey-600">
                We guide you through the entire registration process, ensuring a hassle-free experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Corporate Banking
              </h3>
              <p className="text-grey-600">
                Assistance opening business bank accounts with reputable banks in Dubai.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Legal Compliance
              </h3>
              <p className="text-grey-600">
                We update you with all legal and regulatory requirements, ensuring full compliance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Visa Services
              </h3>
              <p className="text-grey-600">
                Helping you obtain the necessary visas for business owners and employees.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Accounting and Bookkeeping
              </h3>
              <p className="text-grey-600">
                Professional accounting services to maintain your financial records accurately.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-heading-dark mb-3">
                Company Liquidation
              </h3>
              <p className="text-grey-600">
                When the time comes, we will help you smoothly and legally dissolve your offshore company.
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
              Why Choose RAK Offshore?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              RAK offers an established offshore jurisdiction with competitive advantages and comprehensive services.
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

      {/* Features Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Key Features
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive features that make RAK offshore companies ideal for international business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-alert-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-alert-success" />
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
              RAK Offshore Advantages
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Unique advantages that make RAK an attractive offshore jurisdiction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mr-4">
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

      {/* Compliance Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Compliance & Reporting
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Clear compliance requirements and ongoing support for your RAK offshore company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Ideal Use Cases
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              RAK offshore companies are perfect for various international business activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Formation Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Efficient process to establish your RAK offshore company with complete compliance.
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
      <FAQSection 
        title="Frequently Asked Questions About RAK Offshore Formation"
        faqs={faqs} 
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-alert-success to-green-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Ras Al Khaimah Offshore Company In Dubai, United Arab Emirates
          </h1>
          <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
            Your Launchpad to Offshore Excellence
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us at +971 56 496 0040 for Ajman offshore company formation at the best cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564960040">
              <button className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold">
                Call +971 56 496 0040
              </button>
            </a>
            <button 
              onClick={openCalendly}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-alert-success transition-all duration-200 font-semibold"
            >
              Schedule Free Consultation
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

export default RasAlKhaimahOffshore;