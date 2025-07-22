import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight, Heart, Clock, Shield, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const FamilyResidence = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const visaTypes = [
    {
      title: 'Spouse Visa',
      description: 'Residence visa for your husband or wife to live and work in the UAE.',
      features: ['3-Year Validity', 'Work Permit Included', 'Renewable', 'Family Benefits'],
      price: 'Starting from AED 3,500',
      requirements: ['Marriage Certificate', 'Salary Certificate', 'Medical Insurance', 'Accommodation Proof']
    },
    {
      title: 'Children Visa',
      description: 'Residence visa for your children under 18 years of age.',
      features: ['Valid Until 18 Years', 'Education Access', 'Healthcare Benefits', 'Renewable'],
      price: 'Starting from AED 2,500',
      requirements: ['Birth Certificate', 'Passport Copy', 'Medical Certificate', 'School Enrollment']
    },
    {
      title: 'Parents Visa',
      description: 'Long-term residence visa for your parents to live with you in the UAE.',
      features: ['5-Year Validity', 'Healthcare Access', 'Multiple Entry', 'Renewable'],
      price: 'Starting from AED 4,000',
      requirements: ['Relationship Proof', 'Medical Insurance', 'Salary Certificate', 'Accommodation Proof']
    },
    {
      title: 'Domestic Helper Visa',
      description: 'Residence visa for domestic helpers including maids, drivers, and nannies.',
      features: ['2-Year Validity', 'Work Permit', 'Medical Coverage', 'Renewable'],
      price: 'Starting from AED 2,000',
      requirements: ['Employment Contract', 'Medical Certificate', 'Passport Copy', 'Sponsor Documents']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Family Unity',
      description: 'Keep your family together in the UAE with proper legal status'
    },
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Ensure full legal protection and rights for all family members'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick visa processing with expert handling of all procedures'
    },
    {
      icon: FileText,
      title: 'Complete Support',
      description: 'End-to-end assistance with documentation and applications'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Eligibility Check',
      description: 'Verify sponsor eligibility and salary requirements'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'Collect and prepare all required documents'
    },
    {
      step: '03',
      title: 'Application Submission',
      description: 'Submit visa applications to immigration authorities'
    },
    {
      step: '04',
      title: 'Visa Issuance',
      description: 'Receive approved visas and complete entry procedures'
    }
  ];

  const eligibilityRequirements = [
    {
      category: 'Sponsor Requirements',
      requirements: [
        'Valid UAE Residence Visa',
        'Minimum Salary AED 4,000 (for spouse)',
        'Minimum Salary AED 10,000 (for parents)',
        'Valid Employment Contract',
        'Accommodation Certificate',
        'Medical Insurance Coverage'
      ]
    },
    {
      category: 'General Documents',
      requirements: [
        'Attested Marriage Certificate',
        'Attested Birth Certificates',
        'Medical Fitness Certificates',
        'Passport Copies (6 months validity)',
        'Photographs (passport size)',
        'Relationship Proof Documents'
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alert-success to-green-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Family Residence Visa Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Guide To Family Residence In Dubai, UAE
            </h1>
            <p className="text-xl mb-4 opacity-90 leading-relaxed font-medium">
              Simplify the Process and Ensure Your Loved Ones Join You in Dubai
            </p>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Bring your loved ones to the UAE with our comprehensive family residence visa services. Professional assistance for spouse, children, parents, and domestic helper visas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-alert-success px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Apply for Family Visa
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
              Why Choose Our Family Visa Services?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Professional family visa services with expert guidance and comprehensive support throughout the process.
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

      {/* Visa Types Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Family Visa Types
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive family visa services for all your family members and domestic helpers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-alert-success rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark mb-2">
                      {visa.title}
                    </h3>
                    <p className="text-alert-success font-semibold text-sm mb-3">
                      {visa.price}
                    </p>
                  </div>
                </div>
                
                <p className="text-grey-600 mb-4">
                  {visa.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-heading-dark mb-2 text-sm">Key Features:</h4>
                  <div className="space-y-2">
                    {visa.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-grey-700">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-heading-dark mb-2 text-sm">Required Documents:</h4>
                  <div className="space-y-2">
                    {visa.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center text-sm text-grey-700">
                        <div className="w-1.5 h-1.5 bg-alert-success rounded-full mr-2 flex-shrink-0"></div>
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/contact"
                  className="w-full bg-alert-success text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Eligibility Requirements
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              General requirements for sponsoring family members in the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eligibilityRequirements.map((category, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center text-grey-700">
                      <CheckCircle className="w-4 h-4 text-alert-success mr-3 flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
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
              Family Visa Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Simple and efficient process to bring your family to the UAE.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Get answers to the most commonly asked questions about family residence visas in the UAE.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Who can sponsor a family residence visa in the UAE?",
                  answer: "UAE residents earning AED 4,000 per month (or AED 3,000 with employer housing) can sponsor their spouse and children. Investors and business owners can also sponsor their dependents with valid residency status."
                },
                {
                  question: "What is the validity of a family residence visa?",
                  answer: "Employee-sponsored family visas are usually valid for 2 years, while investors can get up to 3 years validity. The visa is linked to the sponsor's residency status."
                },
                {
                  question: "What documents are required?",
                  answer: "You need a salary certificate or labour contract, Ejari tenancy, Emirates ID, marriage and birth certificates (attested), family members' passport copies, photos, and medical fitness reports."
                },
                {
                  question: "What is the processing time for a family visa?",
                  answer: "The process typically takes 5–10 working days, including medical testing, Emirates ID typing, and visa stamping by GDRFA."
                },
                {
                  question: "Do I need Ejari to apply for a family visa?",
                  answer: "Yes, a valid Ejari tenancy contract is mandatory as proof of suitable housing for your family."
                },
                {
                  question: "What medical tests are required?",
                  answer: "Adults must undergo blood tests and chest X-rays to screen for infectious diseases such as HIV or TB before visa approval."
                },
                {
                  question: "Can I sponsor my parents under a family visa?",
                  answer: "Yes, but you need to earn at least AED 20,000 per month and provide medical insurance. Parent visas are subject to stricter GDRFA rules."
                },
                {
                  question: "Can women sponsor family members?",
                  answer: "Yes, women can sponsor their spouse or children if they earn AED 10,000+ (or AED 8,000 with housing) and meet job category requirements."
                },
                {
                  question: "Can I apply for a family visa online?",
                  answer: "Yes, applications can be submitted through the GDRFA or Amer online portals, but PRO services like Bizvisor ensure faster approvals and fewer errors."
                },
                {
                  question: "Can Bizvisor handle family visa renewals?",
                  answer: "Yes, Bizvisor manages renewals, cancellations, and Emirates ID updates, saving you from visiting government offices."
                },
                {
                  question: "Is health insurance mandatory for family visas?",
                  answer: "Yes, valid health insurance for each family member is required before visa stamping."
                },
                {
                  question: "What if my visa gets delayed?",
                  answer: "Bizvisor follows up directly with GDRFA to track pending applications and resolve approval delays."
                },
                {
                  question: "Can I change my family visa status while in UAE?",
                  answer: "Yes, status changes can be done without exiting the country if you are on a valid visit or tourist visa."
                },
                {
                  question: "What happens if my family visa expires?",
                  answer: "You have a 30-day grace period after expiry to renew the visa; otherwise, overstay fines will apply."
                },
                {
                  question: "Is Bizvisor's service faster than doing it yourself?",
                  answer: "Yes, Bizvisor's PRO experts can process family visas in as little as 5 days, ensuring accuracy and faster approvals."
                }
              ].map((faq, index) => (
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
                        <ChevronUp className="w-5 h-5 text-alert-success" />
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
            Ready to Bring Your Family to the UAE?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert assistance with family residence visa applications and enjoy a smooth process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-alert-success text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Start Family Visa Application
            </Link>
            <button 
              onClick={openCalendly}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold"
            >
              Free Consultation
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

export default FamilyResidence;