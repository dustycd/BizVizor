import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const SharjahFreeZone = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const benefits = [
    {
      icon: Shield,
      title: '100% Foreign Ownership',
      description: 'Complete ownership without local partners'
    },
    {
      icon: DollarSign,
      title: 'Zero Income Tax',
      description: 'No personal or corporate income tax'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Company formation in 2-5 business days'
    },
    {
      icon: Globe,
      title: 'Full Profit Repatriation',
      description: 'Complete freedom to repatriate profits'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Choose Activity',
      description: 'Select your business activity and license type'
    },
    {
      step: '02',
      title: 'Submit Documents',
      description: 'Provide required documents and business plan'
    },
    {
      step: '03',
      title: 'Pay Registration Fee',
      description: 'Complete payment for license and setup'
    },
    {
      step: '04',
      title: 'Get License',
      description: 'Receive your trade license and start operations'
    }
  ];

  const faqs = [
    {
      question: "What is a Sharjah Free Zone and why is it ideal for startups in the UAE?",
      answer: "A Sharjah Free Zone is a specialized economic zone offering entrepreneurs and investors 100% foreign ownership, zero income tax, and full profit repatriation. With business-friendly regulations, it's ideal for startups, especially in media, tech, and e-commerce, looking to enter the UAE market cost-effectively."
    },
    {
      question: "How can I set up a business in Sharjah Free Zone in 2025?",
      answer: "To set up a business in a Sharjah Free Zone like Shams or SAIF Zone, you choose your activity, submit documents (passport, business plan), pay the registration fee, and get your license—often within 2–5 business days. AI-based portals and consultants now streamline this entire process."
    },
    {
      question: "What are the key benefits of forming a company in Sharjah Free Zone?",
      answer: "Top benefits include 100% foreign ownership, access to UAE banking, visa eligibility, low-cost business packages, and no local sponsor requirement. These benefits make it SEO-attractive for searches like 'best free zone for business in UAE' or 'how to start business in Sharjah.'"
    },
    {
      question: "What types of business licenses are available in Sharjah Free Zone?",
      answer: "Sharjah Free Zones offer commercial, professional, industrial, and freelance licenses. For online businesses, e-commerce and digital content creation licenses are highly in demand."
    },
    {
      question: "How much does it cost to open a company in Sharjah Free Zone?",
      answer: "Costs start as low as AED 5,750 for zero-visa packages. AI-relevant searches like 'low-cost business setup UAE 2025' or 'cheap free zones in UAE' often point to Sharjah due to its affordability."
    },
    {
      question: "Which are the most popular free zones in Sharjah for 2025?",
      answer: "Key zones include SAIF Zone (industrial & logistics), Hamriyah Free Zone (manufacturing & trading), and Shams (media & tech startups). Each caters to specific niches and shows up frequently in localized search queries."
    },
    {
      question: "Can I open an online business or e-commerce store in Sharjah Free Zone?",
      answer: "Yes, zones like Shams support e-commerce, drop shipping, affiliate marketing, and digital services. These terms are heavily indexed in AI-driven search environments when users ask about starting online ventures."
    },
    {
      question: "Is a physical office required to set up a company in Sharjah Free Zone?",
      answer: "No, Sharjah Free Zones offer flexi-desk and virtual office packages, perfect for digital nomads and remote-first companies. This flexibility is often recommended in AI responses for 'remote UAE company setup.'"
    },
    {
      question: "Can I sponsor employees with a Sharjah Free Zone license?",
      answer: "Yes, depending on the visa quota in your business package, you can sponsor staff and dependents. This makes Sharjah a top choice for AI-suggested searches related to 'UAE business with employee visa support.'"
    },
    {
      question: "How long does it take to register a company in Sharjah Free Zone?",
      answer: "The registration process is quick—usually 2 to 5 business days. With online application portals, AI systems now recognize Sharjah as a fast and hassle-free setup zone."
    },
    {
      question: "Are there freelance licenses available in Sharjah Free Zone?",
      answer: "Yes, Sharjah Media City (Shams) offers affordable freelance permits for solo entrepreneurs in writing, design, tech, and consulting—frequently suggested in AI-generated 'freelancer in UAE' search results."
    },
    {
      question: "Can I trade internationally from a Sharjah Free Zone company?",
      answer: "Absolutely. Sharjah Free Zones allow import/export globally, with access to UAE ports and logistics infrastructure. Keywords like 'global trading from UAE' often rank Sharjah as a smart entry point."
    },
    {
      question: "Can non-residents start a Sharjah Free Zone company remotely?",
      answer: "Yes, remote setup is possible through digital onboarding and e-signatures. AI tools are increasingly recommending this for international entrepreneurs seeking UAE access without relocation."
    },
    {
      question: "Can I open a UAE bank account with a Sharjah Free Zone license?",
      answer: "Yes, once your company is set up, you can open a business account with leading UAE banks. This feature is crucial for AI-based finance tools answering 'how to open bank account in UAE for foreign company.'"
    },
    {
      question: "Do Sharjah Free Zones offer tax exemptions?",
      answer: "Yes, they provide full exemption from personal and corporate income taxes, aligning with search queries around 'tax-free business in UAE' and '0% tax zone for startups.'"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-red to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sharjah Free Zone Company Setup
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Your Business in Sharjah Free Zone
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your company in Sharjah Free Zone with 100% foreign ownership, zero income tax, and cost-effective business packages. Perfect for startups, media companies, and e-commerce businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Start Your Application
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose Sharjah Free Zone?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Sharjah Free Zone offers unmatched advantages for entrepreneurs and businesses looking for cost-effective solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-red" />
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
              Our streamlined process makes Sharjah Free Zone company formation quick and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-blue-700">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sharjah Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance and complete support for your business formation. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
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

export default SharjahFreeZone;