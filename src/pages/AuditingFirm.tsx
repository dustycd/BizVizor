import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, FileText, Eye, Users, Award, TrendingUp, Search, BarChart3 } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const AuditingFirm = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Top Auditing Firm in Dubai & UAE | Certified Audit Services – Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Looking for reliable audit services in Dubai? Bizvisor offers certified financial audits, internal audits, and compliance reports for UAE businesses.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Looking for reliable audit services in Dubai? Bizvisor offers certified financial audits, internal audits, and compliance reports for UAE businesses.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const auditServices = [
    {
      title: 'External Audits',
      description: 'Enjoy independent, unbiased, third-party assessment of your company finances to boost your credibility with stakeholders and ensure that there are no accounting errors.',
      icon: Eye
    },
    {
      title: 'Internal Audits',
      description: 'Our team of expert internal auditors will evaluate your organization\'s internal controls, processes, and regulatory compliance to identify risks and implement improvements.',
      icon: Shield
    },
    {
      title: 'Statutory Audits',
      description: 'We conduct legally mandated statutory audits of your financial statements and operations, to ensure compliance with UAE and international financial reporting standards.',
      icon: FileText
    },
    {
      title: 'Forensic Audits',
      description: 'Our certified fraud examiners meticulously investigate potential fraud, identifying suspicious activity and safeguarding your company in today\'s complex financial landscape.',
      icon: Search
    },
    {
      title: 'Due Diligence Audits',
      description: 'Get a detailed review of an organization\'s financial health to identify potential and risks, and better navigate Mergers & Acquisitions, joint ventures, and more.',
      icon: BarChart3
    },
    {
      title: 'Tax Audits',
      description: 'Safeguard your business and ensure that you comply with UAE tax regulations as our tax experts meticulously review your tax records to identify potential errors and minimize risks of penalties.',
      icon: TrendingUp
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expertise and Certification',
      description: 'Our team comprises certified auditors and financial consultants with extensive knowledge of local and international financial regulations, ensuring that your business remains compliant and well-prepared for the future.',
      icon: Award
    },
    {
      title: 'Tailored Solutions',
      description: 'We provide personalized audit, tax, and advisory services to meet your needs, helping you optimize your operations and financial strategies.',
      icon: Users
    },
    {
      title: 'Comprehensive Audit Reports',
      description: 'We generate detailed audit reports, including Qualified, Unqualified, Adverse Opinion, and Disclaimer Opinion reports, giving you a thorough understanding of your financial health and compliance status.',
      icon: FileText
    },
    {
      title: 'Proactive Advisory',
      description: 'Beyond audits, our advisory services encompass financial planning and performance assessment. We collaborate to develop plans that improve your company\'s long-term economic prospects.',
      icon: TrendingUp
    },
    {
      title: 'Operational Efficiency',
      description: 'We aim to streamline your financial processes and improve organizational performance. We provide insights and recommendations that contribute to cost-saving and efficiency gains.',
      icon: BarChart3
    },
    {
      title: 'Leading Auditing Firm in the UAE',
      description: 'When it comes to auditing of accounts in Dubai or other financial services, you need a partner you can trust implicitly with your financial matters.',
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: "Why is auditing important for companies in the UAE?",
      answer: "Auditing ensures financial transparency, tax compliance, and builds credibility with banks, investors, and government authorities—essential for license renewals."
    },
    {
      question: "Is annual auditing mandatory in Dubai?",
      answer: "Yes, most mainland and free zone companies are legally required to submit audited financial statements every year for license renewal and tax filing."
    },
    {
      question: "What is the cost of auditing in Dubai?",
      answer: "Annual audit fees range from AED 5,000 to AED 20,000, depending on company size, transaction complexity, and free zone requirements."
    },
    {
      question: "How long does an audit take?",
      answer: "Typically 2–4 weeks, depending on how organized your bookkeeping is. Bizvisor offers express audits for urgent submissions."
    },
    {
      question: "Can Bizvisor conduct audits for free zone companies?",
      answer: "Yes, Bizvisor is approved by major UAE free zones and provides compliant audits required for renewals."
    },
    {
      question: "What documents are required for an audit?",
      answer: "You need financial statements, invoices, bank statements, VAT filings, payroll records, and supporting documents for all transactions."
    },
    {
      question: "How does auditing help with corporate tax compliance?",
      answer: "An audit ensures accurate tax calculation, helping avoid FTA penalties for incorrect or under-reported income."
    },
    {
      question: "Do small businesses need audits?",
      answer: "Yes, some free zones and banks request audited reports even for SMEs to verify financial credibility."
    },
    {
      question: "Can Bizvisor fix financial discrepancies found during an audit?",
      answer: "Yes, Bizvisor identifies irregularities and helps correct records before finalizing reports, ensuring compliance."
    },
    {
      question: "What is an internal audit, and do I need it?",
      answer: "Internal audits check internal controls, detect fraud risks, and improve operational efficiency—recommended for growing businesses."
    },
    {
      question: "Do offshore companies need audits?",
      answer: "Yes, many offshore jurisdictions require annual audits to maintain banking relationships and international compliance."
    },
    {
      question: "How often should a company be audited?",
      answer: "At least once annually, but quarterly or half-yearly audits are advisable for companies with high transaction volumes."
    },
    {
      question: "Can Bizvisor audit e-commerce businesses?",
      answer: "Yes, Bizvisor specializes in auditing online sellers, handling complex payment gateways and international transactions."
    },
    {
      question: "Will Bizvisor submit reports to authorities?",
      answer: "Yes, Bizvisor submits audited statements directly to free zones or DED, saving you time."
    },
    {
      question: "Why choose Bizvisor for audits?",
      answer: "Bizvisor combines audit expertise with UAE tax compliance knowledge, ensuring fast, error-free audits that meet regulatory standards."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Trusted Auditing Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Trusted Auditing Firm in Dubai, UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Precision in Numbers, Trusted Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Get Audit Services
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Discover Our Proven And Professional Auditing Services In Dubai
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed mb-8">
              We pride ourselves on providing excellent audit, tax, and consultancy services at our famous auditing firm in Dubai, UAE. Our professional auditors and financial consultants are committed to supporting organizations in attaining operational and financial excellence while maintaining regulatory compliance. Explore how our auditing firm in the UAE can benefit your organization.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Work With A Top Auditing Firm In Dubai, UAE: Your Financial Guardians
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed text-center">
              Our core focus at Bizvisor is to provide comprehensive auditing services to businesses in Dubai and the wider UAE region. With years of experience and a solid commitment to excellence, we have established ourselves as a trustworthy partner for companies seeking to enhance their financial performance and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Auditing Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Auditing Services
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              As a corporate services provider, Bizvisor works with registered auditors and accountants to provide the following:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditServices.map((service, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-grey-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose Bizvisor As Your Auditing Company in Dubai?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-primary-red" />
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

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Local Expertise, Global Perspective
            </h2>
            <div className="bg-grey-50 rounded-xl p-8">
              <p className="text-lg text-grey-600 leading-relaxed mb-6">
                What sets Bizvisor apart as one of the premier auditing companies in Dubai is our ability to combine our local expertise with a global perspective. Dubai is a dynamic and ever-evolving business hub, and staying ahead of regulatory changes and financial trends is crucial. Our team of certified auditors and financial consultants possesses an in-depth understanding of Dubai's unique business environment and keeps a keen eye on international financial regulations and best practices.
              </p>
              
              <h3 className="text-2xl font-bold text-heading-dark mb-4">A Track Record of Success</h3>
              <p className="text-lg text-grey-600 leading-relaxed mb-6">
                Over the years, Bizvisor has built a remarkable track record of success by partnering with businesses of all sizes and across diverse industries. Our clients have consistently benefited from our tailored auditing services in the UAE, comprehensive audit reports, and proactive advisory services. We have helped businesses meet compliance standards and thrive by optimizing their financial strategies and operational efficiency.
              </p>
              
              <p className="text-lg text-grey-600 leading-relaxed">
                At Bizvisor, we are committed to enhancing your business's financial resilience and performance. Let us be your trusted auditing partner in Dubai, UAE, and embark on a journey to financial excellence together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About Auditing Services"
        faqs={faqs} 
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Professional Audit Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with Dubai's trusted auditing firm for comprehensive financial audits and compliance services.
          </p>
          <p className="text-lg text-white/90 mb-8">
            Call us at +971 56 496 0040 for a full suite of auditing services in Dubai and the UAE.
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

export default AuditingFirm;