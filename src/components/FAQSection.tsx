import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  title = "Frequently Asked Questions", 
  faqs, 
  className = "" 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 bg-grey-50 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
            {title}
          </h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto">
            Get answers to the most commonly asked questions about our services and processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-grey-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-grey-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-heading-dark pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary-red" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-grey-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
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
  );
};

export default FAQSection;