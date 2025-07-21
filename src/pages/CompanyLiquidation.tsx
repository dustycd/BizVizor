import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight, AlertTriangle, Shield, Users, Clock, Building2, Eye, TrendingDown } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';
import FAQSection from '../components/FAQSection';

const CompanyLiquidation = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  // Set meta tags for SEO
  useEffect(() => {
    document.title = 'Dubai Company Liquidation Services | Fast & Hassle-Free Closure – Bizvisor';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Close your UAE company legally with Bizvisor. We offer end-to-end company liquidation services in Dubai with government compliance & document support.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Close your UAE company legally with Bizvisor. We offer end-to-end company liquidation services in Dubai with government compliance & document support.';
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const liquidationTypes = [
    {
      title: 'Voluntary Liquidation',
      description: 'In a voluntary liquidation, the shareholders of a corporation opt to wind up the company because they do not have enough money to pay its creditors. Priority is given to creditors in this sort of liquidation.',
      icon: Users
    },
    {
      title: 'Compulsory Liquidation',
      description: 'Compulsory liquidation is a sort of corporate liquidation that a court orders. The company\'s assets are allocated among creditors and donors depending on the priority of claims.',
      icon: Shield
    }
  ];

  const liquidatorTasks = [
    {
      title: 'Assessing and managing the firm\'s assets and liabilities',
      description: 'As the liquidator, we assess your company\'s financial condition, including its assets, debts, and commitments. We ensure that assets are correctly accounted for, evaluated, and sold to maximize recoveries for creditors and stakeholders.',
      icon: TrendingDown
    },
    {
      title: 'Distribution of proceeds and management of creditor claims',
      description: 'The liquidator is in charge of distributing the asset sale proceeds to creditors in the order of priority established by law. We analyze and authenticate creditor claims, ensuring fair and equitable distribution treatment.',
      icon: Users
    },
    {
      title: 'Communicating with stakeholders',
      description: 'The liquidator serves as a liaison between creditors, stockholders, and workers. We offer frequent updates on the liquidation process, respond to requests and concerns, and assist with the appropriate documents and processes.',
      icon: Eye
    },
    {
      title: 'Completing legal and administrative requirements',
      description: 'The liquidator produces and files relevant legal papers, such as the statement of affairs and final liquidators\' report, which outline the company\'s financial status and the results of the liquidation process.',
      icon: FileText
    },
    {
      title: 'Discharging the company\'s responsibilities',
      description: 'The liquidator ensures that the company\'s outstanding debts, dues, and obligations are handled and satisfied. This covers the payment of employee benefits such as gratuities and notice period fees.',
      icon: Shield
    }
  ];

  const requiredDocuments = [
    'Power of Attorney (if any)',
    'Copy of the license',
    'De-registration application form',
    'Resolution of the shareholders',
    'Copy of your Emirates ID card',
    'Copies of all shareholders\' passports',
    'Copy of the Memorandum of Association (MOA), with any changes'
  ];

  const freeZoneProcess = [
    {
      step: '01',
      title: 'Notify Free Zone Authority',
      description: 'Notifying the Free Zone authority of the decision to close'
    },
    {
      step: '02',
      title: 'Publication of Notice',
      description: 'Publishing of a liquidation notice by the authority'
    },
    {
      step: '03',
      title: 'Obtain NOCs',
      description: 'Obtaining NOCs from necessary authorities, departments and utility provider, by the business owner'
    },
    {
      step: '04',
      title: 'Cancel Visas',
      description: 'Canceling all staff visas and work permits'
    },
    {
      step: '05',
      title: 'Close Bank Accounts',
      description: 'Closing bank accounts'
    },
    {
      step: '06',
      title: 'Receive Termination Letter',
      description: 'Receiving a formal termination letter from the Free Zone authority'
    }
  ];

  const companyTypes = [
    { name: 'LLCs', icon: Building2 },
    { name: 'Offshore organizations', icon: Shield },
    { name: 'Free Zone firms', icon: FileText }
  ];

  const faqs = [
    {
      question: "What is company liquidation in Dubai?",
      answer: "Liquidation is the formal process of closing a company by settling debts, canceling licenses, and distributing remaining assets as per UAE law."
    },
    {
      question: "When should I liquidate my company?",
      answer: "You should liquidate if you're exiting UAE operations, merging with another business, or unable to meet financial obligations."
    },
    {
      question: "What is the cost of company liquidation in Dubai?",
      answer: "Liquidation costs range between AED 8,000 and AED 15,000, depending on government fees, clearances, and audit requirements."
    },
    {
      question: "How long does the liquidation process take?",
      answer: "The entire process usually takes 45–60 days, depending on pending debts, employee visa cancellations, and authority approvals."
    },
    {
      question: "What documents are required for liquidation?",
      answer: "You need the trade license copy, shareholder resolution, audited financials, utility clearance, immigration clearance, and bank account closure letters."
    },
    {
      question: "Do I need to clear all debts before liquidation?",
      answer: "Yes, all outstanding debts, employee dues, and supplier payments must be settled before you can legally liquidate."
    },
    {
      question: "Can Bizvisor handle complete company liquidation?",
      answer: "Yes, Bizvisor manages everything—legal notices, audits, authority clearances, and license cancellation."
    },
    {
      question: "What happens if I don't liquidate properly?",
      answer: "Improper liquidation can lead to hefty fines, visa bans, and blacklisting by UAE authorities."
    },
    {
      question: "Can I liquidate with active employees?",
      answer: "No, all employee visas must be canceled, and their dues cleared before starting liquidation."
    },
    {
      question: "Does liquidation affect shareholder visas?",
      answer: "Yes, shareholder and dependent visas linked to the company will automatically be canceled after liquidation."
    },
    {
      question: "Is liquidation easier for free zone companies?",
      answer: "Yes, free zones have simpler procedures and faster approval timelines compared to mainland liquidation."
    },
    {
      question: "What is voluntary vs. compulsory liquidation?",
      answer: "Voluntary liquidation is shareholder-initiated, while compulsory liquidation happens via court order due to insolvency."
    },
    {
      question: "Can Bizvisor help recover deposits after liquidation?",
      answer: "Yes, Bizvisor ensures all security deposits with free zones, DED, and immigration are refunded after clearances."
    },
    {
      question: "Is an audit mandatory before liquidation?",
      answer: "Yes, a final audit report confirming the company's financial status is required for official closure."
    },
    {
      question: "Why use Bizvisor for liquidation?",
      answer: "Bizvisor ensures a fast, penalty-free exit, handling legal, financial, and government requirements end-to-end."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-alert-mistake to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Company Liquidation Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Company Liquidation in Dubai, UAE
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ending One Chapter, Opening New Possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-alert-mistake px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Get Liquidation Services
              </Link>
              <button 
                onClick={openCalendly}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-alert-mistake transition-all duration-200 font-semibold"
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
              Find Trusted Company Liquidation Services in Dubai, UAE
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed mb-6">
              Closing your business in Dubai, or elsewhere in the UAE? There are numerous things to consider, such as company and business name cancellation, employee payments, cancellation of taxation registrations, and other relevant legal obligations. Selling a company is only sometimes the best solution.
            </p>
            <p className="text-lg text-grey-600 leading-relaxed mb-6">
              In Dubai and the UAE, corporate liquidation is when a business ceases operations and activities when it confronts a severe financial crisis and cannot handle its current obligations. Bizvisor provides company liquidation services across the UAE, for various company establishments such as:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {companyTypes.map((type, index) => (
                <div key={index} className="bg-grey-50 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-alert-mistake/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-6 h-6 text-alert-mistake" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading-dark">
                    {type.name}
                  </h3>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-grey-600 leading-relaxed">
              The procedure involves extensive paperwork and agreements with the parties involved and other government bodies. De-registration is a critical component of the company liquidation procedure. Additional terms for corporate liquidation include cancellation of the company, dissolution of the corporation, and so on. Company liquidation in the UAE may be more convenient and less stressful if handled professionally and diligently.
            </p>
          </div>
        </div>
      </section>

      {/* Liquidation Types Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Company Liquidation Types
            </h2>
            <p className="text-lg text-grey-600">
              Liquidation may be:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {liquidationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-alert-mistake/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-alert-mistake" />
                </div>
                <h3 className="text-2xl font-semibold text-heading-dark mb-4 text-center">
                  {type.title}
                </h3>
                <p className="text-grey-600 leading-relaxed text-center">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Warning Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-alert-mistake/10 border-l-4 border-alert-mistake rounded-xl p-8">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-alert-mistake mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-heading-dark mb-4">
                    Avoid Legal Headaches By Following The Correct Liquidation Procedure
                  </h2>
                  <p className="text-lg text-grey-700 leading-relaxed mb-4">
                    This is extremely important for a number of reasons.
                  </p>
                  <p className="text-lg text-grey-700 leading-relaxed mb-4">
                    If you do not follow the correct legal liquidation procedures, you could end up with severe penalties and fines. Merely clearing all your debt is not sufficient. The company trade license has to be liquidated following the approved, government mandated process.
                  </p>
                  <p className="text-lg text-grey-700 leading-relaxed">
                    In addition, failure to do so may result in the company and every single shareholder and director being blacklisted. This may impact future business ventures and the ability to move freely through the UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bizvisor Services Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Let Bizvisor Simplify This Critical Step
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Appointing Bizvisor as your business liquidator will help simplify the process. Our primary tasks as part of the company liquidation process in the UAE include the following:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liquidatorTasks.map((task, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mb-4">
                  <task.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {task.title}
                </h3>
                <p className="text-grey-600 text-sm leading-relaxed">
                  {task.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary-navy rounded-xl p-8 text-white max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed">
                Overall, the function of a corporate liquidator is to effectively wind up the company's affairs, protect creditors' interests, and promote the firm's orderly dissolution. At Bizvisor, we have years of experience providing business liquidation advice and services to a varied clientele. If you're looking for a quick, seamless and efficient way to liquidate your company, look no further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6 text-center">
              Documents Required For Hassle Free Business Liquidation
            </h2>
            <p className="text-lg text-grey-600 text-center mb-8">
              The following are some of the documents you will need to complete the liquidation process.
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
                  Your Bizvisor consultant will assist you in gathering and submitting the necessary documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Zone Process Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Seamless Free Zone Liquidation Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              While Free Zones do not legally require a company liquidator, it will still simplify the process by hiring one. This is because different free zone authorities may have different rules and procedures. Generally, the process includes the following steps:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeZoneProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-alert-mistake rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-grey-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-6 border border-grey-200 max-w-2xl mx-auto">
              <p className="text-grey-700">
                There may be multiple processes and documents required at each stage. Bizvisor can help you easily navigate the steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About Company Liquidation"
        faqs={faqs} 
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Professional Company Liquidation Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced team handle your company closure with complete legal compliance and minimal hassle.
          </p>
          <p className="text-lg text-white/90 mb-8">
            Call us at +971 56 496 0040 to hire Bizvisor as your professional company liquidator in Dubai
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

export default CompanyLiquidation;