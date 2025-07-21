import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CheckCircle, ArrowRight, Globe, DollarSign, Users, Zap, FileText, Shield, TrendingUp, MapPin, Award, Calculator, Star, Smartphone, CreditCard } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const ECommerceFormation = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'E-Commerce Company Formation in Dubai | Online Business Setup – Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Start your e-commerce business in Dubai with ease. Bizvisor provides complete setup support including licensing, payment gateway, and legal compliance.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Start your e-commerce business in Dubai with ease. Bizvisor provides complete setup support including licensing, payment gateway, and legal compliance.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const setupSteps = [
    {
      step: '01',
      title: 'Jurisdiction Advisory',
      description: 'Advising on the best jurisdiction and helping you decide between mainland or free zone e-commerce license'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'Creating and submitting documents including application, company name, business strategy, and ownership details'
    },
    {
      step: '03',
      title: 'Business Premises',
      description: 'Choose appropriate business premises - serviced offices, functional offices, or warehouses for fulfillment centers'
    },
    {
      step: '04',
      title: 'License Approval',
      description: 'Obtain signatures from shareholders and submit applications to receive your e-commerce license'
    },
    {
      step: '05',
      title: 'Visa & Emirates ID',
      description: 'Apply for business manager\'s residency permission and Emirates ID card'
    },
    {
      step: '06',
      title: 'Banking & Payment Gateway',
      description: 'Open business bank account and apply for payment gateway integration'
    }
  ];

  const requiredDocuments = [
    'Application form',
    'Copy of your passport or visa/entry stamp',
    'Emirates ID for UAE residents',
    'Contact number, email and complete address of all company shareholders',
    'Share ratio for each',
    'Photos if required'
  ];

  const ecommerceBenefits = [
    {
      title: 'Rising Online Shopping Trends in the UAE',
      description: 'With the advancement of technology, more people in the UAE rely on the Internet for everyday activities such as entertainment and shopping. E-commerce businesses make shopping more accessible and straightforward.',
      icon: TrendingUp
    },
    {
      title: 'Preference for UAE-based Websites',
      description: 'Compared to foreign e-commerce enterprises, most consumers rely on local UAE-based e-commerce businesses. Consumer preference indicates enormous development possibilities.',
      icon: MapPin
    },
    {
      title: 'Increasing Number Of Tech-Savvy Consumers',
      description: 'Most clients today are connected to the Internet and are more comfortable with online purchasing than conventional brick-and-mortar stores.',
      icon: Smartphone
    },
    {
      title: 'Comprehensive Product Range',
      description: 'E-commerce trade licenses allow businesses to sell a variety of products online, such as fashion, electronics, sports gear, jewelry, furniture, and more.',
      icon: ShoppingCart
    }
  ];

  const whyChooseBizvisor = [
    {
      title: 'Step-by-step guidance',
      description: 'We will guide you on how to get an e-commerce license in Dubai, help you understand the e-commerce license cost in the UAE, and prepare everything you need for your application.',
      icon: FileText
    },
    {
      title: 'Deep relationships with entities',
      description: 'Our years of experience and familiarity with free zones, regulatory authorities and governing bodies will help you easily set up your e-commerce business.',
      icon: Globe
    },
    {
      title: 'Experienced team',
      description: 'Bizvisor has professionals with the right experience and knowledge to assist you with business setup, PRO services, concierge services, banking and more.',
      icon: Award
    }
  ];

  const licenseComparison = [
    {
      item: 'Company Size',
      ecommerce: 'For businesses that plan to scale and grow',
      etrader: 'Small, homegrown online businesses with a few products'
    },
    {
      item: 'Nationality of owner',
      ecommerce: 'Open to all nationalities',
      etrader: 'Primarily for UAE/GCC nationals'
    },
    {
      item: 'Platform',
      ecommerce: 'Full fledged website, social media and other digital platforms',
      etrader: 'Mainly via social media'
    },
    {
      item: 'Jurisdiction',
      ecommerce: 'Anywhere in the world',
      etrader: 'Business only within the UAE'
    },
    {
      item: 'Business Activities',
      ecommerce: 'More activities included',
      etrader: 'Fewer activities included'
    }
  ];

  const faqs = [
    {
      question: "Why start an e-commerce business in Dubai?",
      answer: "Dubai's booming digital economy, high internet penetration, and tax incentives make it ideal for online businesses targeting the UAE and GCC markets."
    },
    {
      question: "Do I need a license for e-commerce?",
      answer: "Yes, you need an e-commerce trade license, which can be obtained from Dubai mainland (DED) or specialized free zones like Dubai Commercity."
    },
    {
      question: "What is the cost of an e-commerce license?",
      answer: "Free zone licenses start at AED 5,500, while mainland licenses typically cost AED 10,000–15,000, excluding visa and warehouse expenses."
    },
    {
      question: "How long does it take to get an e-commerce license?",
      answer: "Licenses are usually issued within 3–5 working days, making it one of the quickest company setups."
    },
    {
      question: "Do I need an office for an e-commerce business?",
      answer: "Free zones offer virtual offices and flexi-desks, while mainland setups require an Ejari tenancy contract."
    },
    {
      question: "Can I sell outside the UAE with an e-commerce license?",
      answer: "Yes, you can trade internationally, but some products require export permits or compliance with destination country regulations."
    },
    {
      question: "Can I sell on Amazon or Noon with this license?",
      answer: "Yes, both Amazon.ae and Noon require a valid UAE trade license for seller registration."
    },
    {
      question: "Do I need a payment gateway in Dubai?",
      answer: "Yes, integrating UAE-approved payment gateways like Telr, PayFort, or Stripe UAE ensures secure online payments."
    },
    {
      question: "Are taxes applicable to e-commerce businesses?",
      answer: "Yes, 5% VAT applies to UAE sales, while cross-border transactions may be exempt. Corporate tax applies if your profit exceeds AED 375,000 annually."
    },
    {
      question: "Can I hire staff or freelancers for my online business?",
      answer: "Yes, you can sponsor employees under your license, but visa allocation depends on office space and free zone policies."
    },
    {
      question: "Do I need approvals for certain products?",
      answer: "Yes, products like food, supplements, and electronics require approvals from UAE regulatory authorities."
    },
    {
      question: "Can Bizvisor help with VAT registration?",
      answer: "Yes, Bizvisor handles VAT registration, filing, and compliance for online sellers to avoid penalties."
    },
    {
      question: "Can I run multiple online stores under one license?",
      answer: "Yes, as long as the product categories fall under the approved activities in your trade license."
    },
    {
      question: "Do I need to maintain inventory in Dubai?",
      answer: "Not necessarily; you can operate via drop-shipping or third-party fulfillment centers to save storage costs."
    },
    {
      question: "Why choose Bizvisor for e-commerce setup?",
      answer: "Bizvisor ensures quick licensing, secure payment gateway setup, VAT compliance, and banking assistance, helping you start operations seamlessly."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-red to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              E-Commerce Company Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Easily Get Your Ecommerce License in Dubai UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Transform Your Digital Dreams into Reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start E-Commerce Setup
              </Link>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold"
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
              Reliable E-commerce Company Formation in THE UAE with Bizvisor
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed mb-8">
              Dubai's thriving e-commerce sector and robust marketing infrastructure make it an attractive location for e-commerce companies. Starting an e-commerce firm in Dubai and obtaining an e-commerce trade license becomes a breeze with the help of E-Commerce Company Setup Consultants like Bizvisor. Allow us to ease your way through starting and expanding your e-commerce enterprise.
            </p>
            <p className="text-lg text-grey-600 leading-relaxed">
              Entrepreneurs and investors may capitalize on the increasing e-commerce business. The UAE has a highly business-friendly environment and modern infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How To Start An E-Commerce Business In Dubai
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto mb-8">
              Bizvisor can guide you through the complete process of e-commerce company formation in Dubai, UAE.
            </p>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              No formal qualifications are necessary to get an e-commerce license in Dubai and the UAE. Bizvisor can walk you through the complete e-commerce company registration procedure, which includes the following:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

          <div className="text-center mt-12">
            <div className="bg-primary-red/10 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-lg text-grey-700 leading-relaxed mb-4">
                Following that, your e-commerce business may begin operations online. Employee sponsorship, financial year setup, accounting, payroll, Corporate Tax and VAT registration, and other post-company setup operations may also be handled by Bizvisor's professional team.
              </p>
              <p className="text-xl font-semibold text-primary-red">
                Call us at +971 56 496 0040 to register your E-Commerce company in Dubai without any hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-12 text-white max-w-2xl mx-auto">
              <ShoppingCart className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="text-3xl font-bold mb-4">
                Start your e-commerce business in Dubai
              </h2>
              <div className="text-4xl font-bold mb-6">starting from AED 5,500</div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
                >
                  Get Started Today
                </button>
                <Link 
                  to="/cost-calculator"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold inline-flex items-center justify-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Cost
                </Link>
              </div>
            </div>
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
              These are some of the common documents* that you will need to get your e-commerce license in Dubai:
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
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

      {/* License Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              E-Commerce or E-trader License: Which is Better?
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              These licenses both deal with online businesses but there are some key differences between the two. You will need to base your decision around the following considerations:
            </p>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-navy text-white">
                      <th className="px-6 py-4 text-left font-semibold">Item</th>
                      <th className="px-6 py-4 text-left font-semibold">E-Commerce License</th>
                      <th className="px-6 py-4 text-left font-semibold">E-Trader License</th>
                    </tr>
                  </thead>
                  <tbody>
                    {licenseComparison.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-grey-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-heading-dark border-b border-grey-200">
                          {row.item}
                        </td>
                        <td className="px-6 py-4 text-grey-700 border-b border-grey-200">
                          {row.ecommerce}
                        </td>
                        <td className="px-6 py-4 text-grey-700 border-b border-grey-200">
                          {row.etrader}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Pros of E-commerce Business Setup in Dubai, UAE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecommerceBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-grey-600 leading-relaxed text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bizvisor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Bizvisor?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              At Bizvisor, we have a team of professionals who can fulfill all the requirements quickly so that you can focus on your other priority tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseBizvisor.map((reason, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-primary-navy" />
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

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About E-Commerce Formation"
        faqs={faqs} 
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Launch Your E-Commerce Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your digital dreams into reality with our comprehensive e-commerce setup services in Dubai.
          </p>
          <p className="text-lg text-white/90 mb-8">
            Call us at +971 56 496 0040 to make the e-commerce company formation process in Dubai hassle-free and affordable.
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

export default ECommerceFormation;