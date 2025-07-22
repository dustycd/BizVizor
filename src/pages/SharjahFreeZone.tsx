import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, MapPin, DollarSign, Shield, Zap, Building2, Users, TrendingUp, FileText, Award } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const SharjahFreeZone = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Sharjah Free Zone Company Setup | Fast Business Formation with Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Set up your Sharjah Free Zone company with expert support from Bizvisor. Enjoy low costs, strategic location, and full foreign ownership in Sharjah\'s top zones.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Set up your Sharjah Free Zone company with expert support from Bizvisor. Enjoy low costs, strategic location, and full foreign ownership in Sharjah\'s top zones.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const benefits = [
    {
      icon: Users,
      title: 'Enjoy 100% ownership of your capital and profits',
      description: 'Full foreign ownership – there is no need to partner with a local entity'
    },
    {
      icon: DollarSign,
      title: 'Get 100% exemption on imports and exports',
      description: 'No corporate or personal income taxes with convenient 24-hour licensing services'
    },
    {
      icon: Zap,
      title: 'Cheaper lease rents',
      description: 'Lower cost labor force available with access to national and multinational banking'
    },
    {
      icon: Globe,
      title: 'Well served by air and sea ports',
      description: 'Strategic location with unparalleled access to shipping routes'
    }
  ];

  const sharjahFreeZones = [
    {
      name: 'Hamriyah Free Zone',
      description: 'Situated close to three ports, Hamriyah Free Zone is one of the most affordable free zones in the UAE. Benefit from modern infrastructure and logistics, investor-friendly incentives and other perks like 100% business ownership, zero currency restrictions and no customs duty.',
      minShareholders: 'One',
      sectors: 'Oil and gas, shipping automotive, pharma, food processing',
      documents: ['Application form', 'Passport and visa copies', 'Reference from the bank', 'Signed legal documents']
    },
    {
      name: 'SAIF (Sharjah Airport International Free Zone)',
      description: 'Enjoy excellent infrastructure and connectivity at SAIF zone, including access to office and warehouse spaces. The world\'s first 9001 certified airport free zone, it offers you quick customs clearances and easy access to airports, seaports, highways and more.',
      minShareholders: 'Two',
      sectors: 'Industries, IT, manufacturing, logistics',
      documents: ['Application form', 'Passport and visa copies', 'Project summary', 'Previous 3 months\' bank statement', 'MOA & AOA of the company']
    },
    {
      name: 'SHAMS Free Zone',
      description: 'Sharjah Media City (SHAMS) free zone offers a strong focus on creativity and opportunity, with a promise to \'shape tomorrow together\'. SHAMS offers affordable business setup and licenses to individuals or startups looking to make their mark in creative industries.',
      minShareholders: 'One',
      sectors: 'Media, creative fields, marketing and advertising, tech startups, events, ecommerce',
      documents: ['Application form', 'Passport copy', 'NOC from UAE sponsor', 'Specimen signature of the shareholder', 'Company business plan']
    },
    {
      name: 'SRTIP Free Zone',
      description: 'Focused on innovation, knowledge and future-readiness, the Sharjah Research, Technology and Innovation Park (SRTIP) focuses on incubating new initiatives around technology, energy, healthcare and the environment through consistent R & D and collaboration.',
      minShareholders: 'One',
      sectors: 'Energy, health, environment, entertainment, media, investment banking',
      documents: ['Passport copy', 'Visa or entry stamp copy', 'Passport size photo', 'Business specific documents']
    },
    {
      name: 'USARTC Free Zone',
      description: 'The U.S.A. Regional Trade Center (USARTC) facilitates small and medium businesses from the USA to leverage the growth and opportunities in the Middle East by setting up an enterprise in the emirate.',
      minShareholders: 'One',
      sectors: 'US-based SMEs in manufacturing, agriculture, services, trading and exports',
      documents: ['Passport copy', 'Copy of educational certificates', '2 passport-sized photographs']
    },
    {
      name: 'SPC Free Zone',
      description: 'A subsidiary of Sharjah Book Authority, SPC FZ is perfect for activities such as printing, publishing, E-commerce, consultancies and IT and more than a thousand other business activities.',
      minShareholders: 'One',
      sectors: 'Printing, publishing, ecommerce, consultancies, IT',
      documents: ['Passport copy', 'Visa or entry stamp copy', 'Passport size photo', 'Business specific documents']
    }
  ];

  const licenseTypes = [
    {
      title: 'Commercial License',
      description: 'A commercial license is mandatory if your company plans to trade, buy, or sell goods. Some commercial activities include car rental, logistics, and real estate services.',
      icon: Building2
    },
    {
      title: 'Trading License',
      description: 'Businesses consisting of industrial and manufacturing activities require trading licenses. Activities like food products manufacturing, metal casing, furniture manufacturing, packaging and more.',
      icon: TrendingUp
    },
    {
      title: 'Professional License',
      description: 'You must apply for a professional license if you are an artist, artisan, or professional service provider. Mandatory for management consultancies, auditing firms, law companies, accounting corporations, educational institutes, medical services.',
      icon: Users
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Decide on the right free zone',
      description: 'This will depend on the nature of your business, budget, location and facilities needed'
    },
    {
      step: '02',
      title: 'Create a business plan',
      description: 'Establish your goals, costs, and financial projections'
    },
    {
      step: '03',
      title: 'Identify a business name',
      description: 'Follow regulations around suitable names and reserve it with the chosen free zone'
    },
    {
      step: '04',
      title: 'Complete your registration',
      description: 'Finish application procedures including licensing, documentation and make the necessary payment'
    }
  ];

  const bizvisorServices = [
    {
      title: 'Step-by-step guidance',
      description: 'From helping you understand Sharjah business license fees to putting together all the requirements for your application, our experienced team is on hand to guide you',
      icon: FileText
    },
    {
      title: 'Partnerships with free zones',
      description: 'Leverage our close relationships with Sharjah Free Zones, especially Shams and SRTIP',
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Quick and reliable business setup in Sharjah Free Zones
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
              Your path to prosperity starts here
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Establish your company in Sharjah Free Zone with expert support from Bizvisor. Enjoy low costs, strategic location, and full foreign ownership in Sharjah's top zones.
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

      {/* Why Sharjah Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Why set up your company in Sharjah Free Zone?
            </h2>
            <div className="space-y-6 text-lg text-grey-600 leading-relaxed">
              <p>
                Spread over 2,600 sq km, Sharjah is UAE's third largest emirate, with territories on both the Gulf of Oman and the Arabian Gulf. It's the only emirate with this advantage, giving the region unparalleled access to shipping routes. The location is perfect for different kinds of businesses as it lies between Africa, Europe, and Asia.
              </p>
              <p>
                Sharjah offers impressive infrastructure that attracts more than 5 million investors and tourists yearly. The crime rate is extremely low due to a vigilant and effective judicial system. A business license in Sharjah free zone will allow you to make the most of these advantages.
              </p>
              <p>
                The UAE government has taken critical steps to make Sharjah a free zone suitable for foreign investors. Here, you can find plenty of impressive business opportunities. Investors can get land at a reasonable cost to set up a company in the Sharjah Free Zone. Labor is also affordable, and the free zones provide incentives to small and medium businesses.
              </p>
              <p>
                If you plan to start a company in a Sharjah Free Zone, contact Bizvisor. Our professional team knows all the international standards and local requirements to set up your business quickly.
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
              Benefits of Company Setup in Sharjah Free Zone
            </h2>
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

          {/* Pricing Highlight */}
          <div className="mt-16 bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Setup your business in Sharjah Free zone</h3>
            <div className="text-4xl font-bold mb-4">for as low as AED 5,500*</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-red-100 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Inclusive of Office Lease Agreement for banking purposes
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Inclusive of 3-5 activities
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Multiple shareholders permitted
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Combine E-commerce & Media Activities
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Upgrade to Residence packages at a nominal cost
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Most cost-effective free zone in the UAE
              </div>
            </div>
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-3 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Sharjah Free Zones List */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              A list of Sharjah free zones
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sharjahFreeZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  Business setup in {zone.name}
                </h3>
                <p className="text-grey-600 mb-4 leading-relaxed">
                  {zone.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-heading-dark mb-2 text-sm">Min. Shareholders:</h4>
                    <p className="text-grey-600 text-sm">{zone.minShareholders}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading-dark mb-2 text-sm">Common Sectors:</h4>
                    <p className="text-grey-600 text-sm">{zone.sectors}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-heading-dark mb-2 text-sm">Required Documents:</h4>
                  <div className="space-y-1">
                    {zone.documents.slice(0, 3).map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center text-xs text-grey-600">
                        <div className="w-1.5 h-1.5 bg-primary-red rounded-full mr-2 flex-shrink-0"></div>
                        {doc}
                      </div>
                    ))}
                    {zone.documents.length > 3 && (
                      <div className="text-xs text-grey-500">
                        +{zone.documents.length - 3} more documents
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Sharjah Free Zones Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Compare Sharjah Free Zones
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-primary-red text-white">
                  <th className="px-4 py-3 text-left font-semibold text-sm">Sharjah Free Zone</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Min. Shareholders</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Documents Required*</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Common Sectors</th>
                </tr>
              </thead>
              <tbody>
                {sharjahFreeZones.map((zone, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-grey-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-semibold text-heading-dark text-sm border-b border-grey-200">
                      {zone.name.replace('Free Zone', '').replace('(Sharjah Airport International Free Zone)', '').trim()}
                    </td>
                    <td className="px-4 py-3 text-grey-700 text-sm border-b border-grey-200">
                      {zone.minShareholders}
                    </td>
                    <td className="px-4 py-3 text-grey-700 text-sm border-b border-grey-200">
                      <div className="space-y-1">
                        {zone.documents.slice(0, 2).map((doc, docIndex) => (
                          <div key={docIndex} className="text-xs">– {doc}</div>
                        ))}
                        {zone.documents.length > 2 && (
                          <div className="text-xs text-grey-500">+{zone.documents.length - 2} more</div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-grey-700 text-sm border-b border-grey-200">
                      {zone.sectors}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-grey-600">
              *For a complete list of documents for each Sharjah Free Zone, speak to a Bizvisor consultant.
            </p>
          </div>
        </div>
      </section>

      {/* License Types Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Which Sharjah Free Zone license is best for your business?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              If you want to set up a business in the UAE, you require an appropriate license depending on the business activity you want to perform. Generally, there are three types of Sharjah Free Zone licenses:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {licenseTypes.map((license, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <license.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Steps for business setup in a Sharjah Free Zone
            </h2>
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

      {/* How Bizvisor Can Help Section */}
      <section className="py-20 bg-grey-50">
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
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-red" />
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
            Ready to Start Your Sharjah Free Zone Company?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us at +971 56 496 0040 to make the business setup process in Sharjah Free Zone hassle-free and affordable.
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
      <section className="py-20 bg-gradient-to-r from-primary-navy to-blue-700">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Get Expert Guidance Today
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