import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap } from 'lucide-react';
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose RAK Free Zone?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              RAK Free Zone offers exceptional flexibility and business-friendly environment for entrepreneurs.
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