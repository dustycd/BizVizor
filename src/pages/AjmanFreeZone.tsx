import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap, Building2, Users, TrendingUp, ShoppingCart, User, FileText, Award } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const AjmanFreeZone = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Ajman Free Zone Company Formation | Affordable Setup with Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Looking to start a business in Ajman? Bizvisor offers quick company formation in Ajman Free Zone with flexible packages, no income tax, and 100% ownership.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Looking to start a business in Ajman? Bizvisor offers quick company formation in Ajman Free Zone with flexible packages, no income tax, and 100% ownership.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: 'Tax Advantages',
      description: 'Tax-free zone with no corporate or personal income tax for businesses'
    },
    {
      icon: Zap,
      title: 'Simplified Bureaucracy',
      description: 'AFZA simplifies company setup with various packages and support services'
    },
    {
      icon: Building2,
      title: 'Best Leasing Options',
      description: 'Flexible lease options for offices and warehouses to scale as needed'
    },
    {
      icon: Globe,
      title: 'Reach Important Markets',
      description: 'Well-connected to UAE and region, allowing access to large markets'
    },
    {
      icon: Users,
      title: 'Varied Business Activities',
      description: 'Participate in trading, manufacturing, services, consulting and advertising'
    },
    {
      icon: DollarSign,
      title: 'Full Foreign Ownership',
      description: 'Complete control over your company with 100% foreign ownership'
    },
    {
      icon: MapPin,
      title: 'Strategic Location',
      description: 'Close to major ports, airports, and road networks for regional access'
    },
    {
      icon: TrendingUp,
      title: 'High-Quality Infrastructure',
      description: 'Modern office and warehouse spaces with utilities and telecommunications'
    }
  ];

  const licenseTypes = [
    {
      title: 'Industrial or Manufacturing License',
      description: 'Covers enterprises built around different functions in manufacturing from raw materials sourcing, finished goods and export',
      icon: Building2
    },
    {
      title: 'Commercial License',
      description: 'For a range of commercial activities and trading operations',
      icon: ShoppingCart
    },
    {
      title: 'Services License',
      description: 'Perfect for consultancies from any industry or services sector',
      icon: Users
    },
    {
      title: 'E-commerce License',
      description: 'Includes B2B and B2C online trading activities',
      icon: Globe
    },
    {
      title: 'Freelancer Package',
      description: 'Affordable licenses for freelancers from a range of industries, along with residence and family visa',
      icon: User
    }
  ];

  const requiredDocuments = [
    'Application form with all fields filled out',
    'Passport copy',
    'NOC if applicable',
    'Business plan for service or manufacturing license applicants'
  ];

  const process = [
    {
      step: '01',
      title: 'Decide on your business activities',
      description: 'This is necessary to understand the type of license you need to apply for'
    },
    {
      step: '02',
      title: 'Choose your business name',
      description: 'Follow the free zone and UAE\'s detailed guidelines to select and reserve the name'
    },
    {
      step: '03',
      title: 'Apply for a license',
      description: 'Submit your form and documents along with the fee needed to secure the license'
    },
    {
      step: '04',
      title: 'Get your visas',
      description: 'This will depend on the package or type of license you have selected'
    }
  ];

  const bizvisorServices = [
    {
      title: 'Step-by-step guidance',
      description: 'From helping you understand Ajman Free Zone company setup costs to putting together all the requirements for your application, our experienced team is on hand to guide you',
      icon: FileText
    },
    {
      title: 'Partnerships with free zones',
      description: 'Leverage our close relationship with free zones in the country, including Ajman Free Zone',
      icon: Building2
    },
    {
      title: 'Experienced team',
      description: 'Bizvisor has professionals with the right experience and knowledge to assist you with business setup, PRO services, concierge services, banking and more.',
      icon: Award
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Easy business setup in Ajman Free Zone
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
              Empowering your business dreams in Ajman, UAE
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Looking to start a business in Ajman? Bizvisor offers quick company formation in Ajman Free Zone with flexible packages, no income tax, and 100% ownership.
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Work with expert business setup consultants in Ajman
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                Setting up your business in Ajman Free Zone is not overly complex, but it does need an adept eye to avoid delays and unnecessary hitches. Trying to figure out the process and organize your Ajman free zone company formation as an individual can be a daunting exercise, and mistakes in your application could cause it to be delayed or denied. That is why it is essential to work with a company setup professional like Bizvisor to start your firm. With Bizvisor, all you need to do is hand over the necessary documents and information about the nature of your firm. Then, you can sit back and let the specialists do the rest.
              </p>
              <p>
                The Ajman Free Zone (AFZ) was founded in 1988 across the street from the Ajman Port. Enterprises in the Ajman Free Zone have easy access to international airports. Small and medium sized firms (SMEs) and startups can particularly benefit from setting up their establishments in Ajman Free Zone. This is primarily due to its low cost of living and excellent infrastructure.
              </p>
              <p>
                AFZ provides low-cost smart offices for entrepreneurs and startups and executive offices for significant organizations. Companies establishing themselves in AFZ are guaranteed complete confidentiality with minimal financial disclosures. However, the formation of an Ajman Free Zone company requires the display of a minimum capital and the processing of extensive documents.
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
              Benefits of setting up a company in Ajman Free Zone
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      {/* License Types Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Types of licenses available
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenseTypes.map((license, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                  <license.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  {license.title}
                </h3>
                <p className="text-grey-600">
                  {license.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Documents required
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              These are some of the common documents* that you will need to produce during the company setup process:
            </p>
            
            <div className="bg-grey-50 rounded-xl p-8">
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
                  *For a complete list of requirements and documents for Ajman Free Zone company setup, speak to a Bizvisor consultant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Steps for business setup in Ajman Free Zone
            </h2>
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

      {/* How Bizvisor Can Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How Bizvisor can help
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              At Bizvisor, we have a team of professionals who can fulfill all the requirements quickly so that you can focus on your other priority tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bizvisorServices.map((service, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-navy" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-grey-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Call to Action with Phone Number */}
      <section className="py-20 bg-primary-navy">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Ajman Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us at +971 56 496 0040 to make the business setup process in Ajman Free Zone hassle-free and affordable.
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
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

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