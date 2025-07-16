import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const Home = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the cheapest Free Zone to start a business in Dubai?",
      answer: "Several Free Zones offer competitive pricing for startups, but Sharjah Media City (SHAMS) and International Free Zone Authority (IFZA) are among the most affordable, with packages starting around AED 5,750. The best option depends on your activity, visa needs, and whether you require a physical office."
    },
    {
      question: "How long does company setup take in Dubai?",
      answer: "The average company formation time is 3 to 5 working days, provided all documentation is correct. Some Free Zones offer express licensing in 1–2 days, while Mainland setups may take slightly longer due to extra government approvals."
    },
    {
      question: "Can I open a UAE bank account as a foreign business owner?",
      answer: "Yes, Bizvisor assists with corporate bank account opening for both Free Zone and Mainland companies. While KYC requirements vary by bank, our team ensures your documents are prepared and coordinated properly, increasing your approval chances."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-grey-600">
                Quick answers to help you get started with your UAE business setup
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-grey-50 rounded-xl border border-grey-200 overflow-hidden hover:shadow-md transition-all duration-200"
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
                        <ChevronUp className="w-5 h-5 text-primary-red" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-grey-400" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-grey-200">
                        <p className="text-grey-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Still have questions? Let's talk.
              </h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Get personalized answers from our UAE business setup experts. Schedule your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
                >
                  Schedule Free Consultation
                </button>
                <a href="tel:+971564960040">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold">
                    Call +971 56 496 0040
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      
      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={closeCalendly}
        url="https://calendly.com/saidtouma-bizvisor/consultation?month=2025-06"
      />
    </div>
  );
};

export default Home;