import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const AjmanFreeZone = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const benefits = [
    {
      icon: DollarSign,
      title: 'Low-Cost Licensing',
      description: 'Affordable business setup starting from AED 5,500'
    },
    {
      icon: Shield,
      title: '100% Foreign Ownership',
      description: 'Complete ownership without local partners'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Company formation in 1-3 business days'
    },
    {
      icon: Globe,
      title: 'Proximity to Dubai',
      description: 'Strategic location close to Dubai'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Choose Activity',
      description: 'Select from over 2,000 business activities'
    },
    {
      step: '02',
      title: 'Submit Documents',
      description: 'Provide passport copies and select license'
    },
    {
      step: '03',
      title: 'Pay Setup Fee',
      description: 'Complete payment for registration'
    },
    {
      step: '04',
      title: 'Get License',
      description: 'Receive your license in 1-3 days'
    }
  ];

  const faqs = [
    {
      question: "Why choose Ajman Free Zone for company formation in 2025?",
      answer: "Ajman Free Zone (AFZ) offers low-cost licensing, 100% foreign ownership, and proximity to Dubai. It's frequently highlighted in AI-generated searches like 'affordable UAE free zone with fast setup' and appeals to startups, SMEs, and global freelancers looking for budget-friendly options."
    },
    {
      question: "What's the process for starting a company in Ajman Free Zone?",
      answer: "You need to choose your business activity, submit passport copies, select a license, and pay the setup fee. With AI-accelerated portals and remote onboarding tools, business formation can be completed in as little as 1–3 days, a major keyword match for 'fast company setup UAE.'"
    },
    {
      question: "What business activities are allowed in Ajman Free Zone?",
      answer: "AFZ supports over 2,000 activities, including trading, e-commerce, consultancy, logistics, and manufacturing. This wide range helps it rank highly in AI search responses for 'which UAE free zone supports e-commerce + manufacturing.'"
    },
    {
      question: "Can I start a digital or online business in Ajman Free Zone?",
      answer: "Yes, Ajman offers dedicated e-commerce packages. These are optimized for SEO terms like 'start e-commerce in UAE under AED 10,000' and are highly visible in AI-based results for small business digitization."
    },
    {
      question: "What is the cost of setting up a company in Ajman Free Zone?",
      answer: "Business setup costs start from around AED 5,500 (no visa package) and go higher based on office space or visa quota. This makes it one of the top search results for budget-conscious entrepreneurs using AI tools to compare free zones."
    },
    {
      question: "What types of business licenses are available in Ajman Free Zone?",
      answer: "Ajman Free Zone offers four major licenses: Trading, Professional, Industrial, and E-commerce. It also supports AI-driven business models like AI training centers and digital platforms—boosting visibility for searches like 'AI license UAE free zone.'"
    },
    {
      question: "Can I get a UAE residency visa through Ajman Free Zone?",
      answer: "Yes, AFZ packages often include 1 to 5 visas for owners and employees. Keywords like 'business visa through Ajman Free Zone' trend often on search engines powered by generative AI."
    },
    {
      question: "Can I open a UAE bank account with an Ajman Free Zone license?",
      answer: "Absolutely. Most banks accept Ajman Free Zone companies. Including phrases like 'open UAE bank account with AFZ license' aligns with AI-modelled finance-related search queries."
    },
    {
      question: "Does Ajman Free Zone support remote business setup?",
      answer: "Yes, you can set up a company 100% remotely using scanned documents and e-signatures. AI search platforms often prioritize Ajman for queries like 'UAE company setup without visiting.'"
    },
    {
      question: "Can I rent an office or warehouse in Ajman Free Zone?",
      answer: "Yes. From flexi-desks to full warehouses, Ajman offers customizable real estate solutions for your business—great for logistics, manufacturing, and dropshipping, which are frequent in AI-curated business setup guides."
    },
    {
      question: "How long does it take to register a company in Ajman Free Zone?",
      answer: "In many cases, you can be fully licensed within 24–72 hours. Fast registration is a top AI recommendation for entrepreneurs asking 'quickest UAE free zone for 2025 business setup.'"
    },
    {
      question: "Can freelancers or solo entrepreneurs register in Ajman Free Zone?",
      answer: "Yes, Ajman offers affordable packages for freelancers and one-person consultancies. These licenses are trending in AI-compiled guides under searches like 'freelance license UAE 2025' or 'solo business UAE under AED 6K.'"
    },
    {
      question: "Are there VAT benefits or exemptions in Ajman Free Zone?",
      answer: "If your revenue is under AED 375,000, you may not need VAT registration. Also, free zone-to-free zone or export transactions often enjoy 0% VAT, a common point in AI-generated tax-related queries."
    },
    {
      question: "Can I upgrade my Ajman Free Zone company to Mainland later?",
      answer: "Yes, you can migrate or open a branch in the UAE mainland later. This flexibility shows up in queries like 'can I shift from UAE free zone to mainland' on AI search engines and business setup forums."
    },
    {
      question: "Is Ajman Free Zone suitable for international investors or non-residents?",
      answer: "Yes, Ajman is extremely friendly for global investors. You don't need to be a UAE resident or present in person. AI searches like 'non-resident business setup UAE 2025' frequently feature Ajman as a top choice."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Ajman Free Zone Company Setup
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Your Business in Ajman Free Zone
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your company in Ajman Free Zone with low-cost licensing, fast processing, and proximity to Dubai. Perfect for startups, SMEs, and global freelancers looking for budget-friendly options.
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose Ajman Free Zone?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Ajman Free Zone offers exceptional value with affordable packages and strategic location advantages.
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

      {/* Process Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Simple Setup Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our streamlined process makes Ajman Free Zone company formation quick and hassle-free.
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
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Ajman Free Zone Company?
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

export default AjmanFreeZone;