import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap, Building2, Users, TrendingUp } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const FreeZoneOverview = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const benefits = [
    {
      icon: Shield,
      title: '100% Foreign Ownership',
      description: 'Complete ownership without local partners or sponsors'
    },
    {
      icon: DollarSign,
      title: 'Tax Advantages',
      description: 'Zero corporate and personal income tax benefits'
    },
    {
      icon: Globe,
      title: 'Easy Repatriation',
      description: 'Full repatriation of capital and profits'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Fast company formation in 3-7 business days'
    }
  ];

  const topFreeZones = [
    {
      name: 'Dubai Free Zone',
      description: 'Premium free zones with world-class infrastructure and global connectivity.',
      advantages: ['International Recognition', 'Premium Infrastructure', 'Global Connectivity', 'Tech & Finance Focus'],
      industries: ['Technology', 'Finance', 'Media', 'E-commerce'],
      minCost: 'AED 15,000',
      setupTime: '3-7 days',
      link: '/freezone-company-setup-in-dubai'
    },
    {
      name: 'Sharjah Free Zone',
      description: 'Cost-effective solution with comprehensive business support and flexible packages.',
      advantages: ['Affordable Packages', 'Flexible Terms', 'Quick Processing', 'Business Support'],
      industries: ['Trading', 'Manufacturing', 'Services', 'Media'],
      minCost: 'AED 8,000',
      setupTime: '2-5 days',
      link: '/sharjah-free-zone-business-set-up'
    },
    {
      name: 'Ajman Free Zone',
      description: 'Budget-friendly option with fast processing and proximity to Dubai.',
      advantages: ['Low Cost', 'Fast Processing', 'Dubai Proximity', 'Simple Documentation'],
      industries: ['Trading', 'Services', 'E-commerce', 'Consulting'],
      minCost: 'AED 6,000',
      setupTime: '1-3 days',
      link: '/ajman-free-zones-company-formation-uae'
    },
    {
      name: 'RAK Free Zone',
      description: 'Flexible business packages with competitive advantages and strategic location.',
      advantages: ['Flexible Packages', 'Competitive Fees', 'Strategic Location', 'Business Friendly'],
      industries: ['Manufacturing', 'Trading', 'Services', 'Logistics'],
      minCost: 'AED 7,500',
      setupTime: '2-5 days',
      link: '/ras-al-khaimah-free-zone-business-setup'
    },
    {
      name: 'UAQ Free Zone',
      description: 'Ultra-low cost setup with simple documentation and digital registration.',
      advantages: ['Ultra Low Cost', 'Simple Process', 'Digital Setup', 'Quick Approval'],
      industries: ['Trading', 'Services', 'E-commerce', 'Freelance'],
      minCost: 'AED 5,750',
      setupTime: '1-3 days',
      link: '/umm-al-quwain-free-zones-company-formation-uae'
    },
    {
      name: 'Fujairah Free Zone',
      description: 'Strategic East Coast location with port access and manufacturing facilities.',
      advantages: ['Port Access', 'Manufacturing Focus', 'Strategic Location', 'Logistics Hub'],
      industries: ['Manufacturing', 'Logistics', 'Trading', 'Industrial'],
      minCost: 'AED 8,500',
      setupTime: '2-4 days',
      link: '/business-setup-fujairah-free-zone-uae'
    }
  ];

  const comparisonFactors = [
    {
      factor: 'Setup Cost',
      description: 'Initial investment required for company formation',
      icon: DollarSign
    },
    {
      factor: 'Processing Time',
      description: 'Time required to complete company registration',
      icon: Zap
    },
    {
      factor: 'Business Activities',
      description: 'Types of business activities allowed',
      icon: Building2
    },
    {
      factor: 'Visa Allocation',
      description: 'Number of visas available with license',
      icon: Users
    },
    {
      factor: 'Office Requirements',
      description: 'Physical office space requirements',
      icon: MapPin
    },
    {
      factor: 'Growth Potential',
      description: 'Scalability and expansion opportunities',
      icon: TrendingUp
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Choose Free Zone',
      description: 'Select the most suitable free zone for your business needs'
    },
    {
      step: '02',
      title: 'Select License Type',
      description: 'Choose from trading, service, or industrial licenses'
    },
    {
      step: '03',
      title: 'Submit Application',
      description: 'Complete application with required documents'
    },
    {
      step: '04',
      title: 'Get Approval',
      description: 'Receive license approval and start operations'
    }
  ];

  const faqs = [
    {
      question: "What is a UAE Free Zone and why should I choose it?",
      answer: "UAE Free Zones are designated areas offering 100% foreign ownership, tax benefits, and simplified business setup procedures. They're ideal for international businesses wanting to establish a presence in the UAE without local partners."
    },
    {
      question: "Which is the best free zone for my business?",
      answer: "The best free zone depends on your business activity, budget, visa requirements, and growth plans. Dubai free zones offer prestige and infrastructure, while northern emirates provide cost-effective solutions."
    },
    {
      question: "How much does it cost to set up a free zone company?",
      answer: "Costs vary by free zone and package type, ranging from AED 5,750 (UAQ) to AED 25,000+ (premium Dubai zones). This includes government fees, office space, and visa allocations."
    },
    {
      question: "Can I operate in UAE mainland with a free zone license?",
      answer: "Free zone companies can sell to UAE mainland through a local distributor or by establishing a mainland branch. Direct mainland sales require additional approvals and arrangements."
    },
    {
      question: "What are the visa benefits of free zone setup?",
      answer: "Most free zone packages include 1-6 residence visas for owners and employees. Visa eligibility depends on the license type, office space, and specific free zone regulations."
    },
    {
      question: "How long does free zone company formation take?",
      answer: "Free zone setup typically takes 1-7 business days depending on the zone and completeness of documentation. Some zones offer same-day processing for urgent applications."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              UAE Free Zone Company Setup
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              UAE Free Zone Company Formation
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your business in UAE's premier free zones with 100% foreign ownership, tax benefits, and streamlined setup processes. Choose from 40+ specialized free zones across the Emirates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
              >
                Free Consultation
              </button>
              <a href="#free-zones-comparison">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold">
                Compare Free Zones
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose UAE Free Zones?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              UAE free zones offer unparalleled advantages for international businesses looking to establish their Middle East presence.
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

      {/* Top Free Zones Section */}
      <section id="free-zones-comparison" className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Top UAE Free Zones for Business Setup
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Choose from the most popular UAE free zones, each offering unique advantages for different business types and industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {topFreeZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark mb-2">
                      {zone.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-grey-600 mb-3">
                      <span className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        From {zone.minCost}
                      </span>
                      <span className="flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        {zone.setupTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-grey-600 mb-4 text-sm">
                  {zone.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-heading-dark mb-2 text-sm">Key Advantages:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {zone.advantages.map((advantage, advIndex) => (
                      <div key={advIndex} className="flex items-center text-xs text-grey-600">
                        <CheckCircle className="w-3 h-3 text-alert-success mr-2 flex-shrink-0" />
                        {advantage}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-heading-dark mb-2 text-sm">Popular Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {zone.industries.map((industry, indIndex) => (
                      <span key={indIndex} className="bg-primary-navy/10 text-primary-navy px-2 py-1 rounded text-xs">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={zone.link}
                  className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold inline-flex items-center justify-center text-sm"
                >
                  Learn More About {zone.name.split(' ')[0]}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Factors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How to Choose the Right Free Zone
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Consider these key factors when selecting the most suitable free zone for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisonFactors.map((factor, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="w-6 h-6 text-primary-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {factor.factor}
                </h3>
                <p className="text-grey-600 text-sm">
                  {factor.description}
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
              Free Zone Setup Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our streamlined process makes free zone company formation quick and hassle-free.
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
            Ready to Start Your Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance on choosing the right free zone and complete support for your business formation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Get Free Consultation
            </button>
            <Link 
              to="/cost-calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Calculate Setup Cost
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

export default FreeZoneOverview;