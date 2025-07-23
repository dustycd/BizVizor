import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Gift, ArrowRight, CheckCircle, Star, Heart, Handshake, Award } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const Referral = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const howItWorks = [
    {
      step: '01',
      title: 'Refer a Friend or Associate',
      description: 'Refer a friend or associate to Bizvisor for their company formation needs.',
      icon: Users,
      color: 'bg-primary-navy'
    },
    {
      step: '02',
      title: 'They Complete Their Setup',
      description: 'Once your referee successfully closes their company formation with us, you earn an incredible 20% discount off your company license fee!',
      icon: CheckCircle,
      color: 'bg-primary-red'
    },
    {
      step: '03',
      title: 'Future Benefits',
      description: 'And there\'s more! If you are not ready to form your company immediately, worry not. We\'ll credit the 20% discount to your account for future use when you\'re all set.',
      icon: Gift,
      color: 'bg-alert-success'
    }
  ];

  const benefits = [
    {
      icon: Gift,
      title: '20% Discount',
      description: 'Earn 20% off your company license fee for each successful referral'
    },
    {
      icon: Users,
      title: 'Help Friends',
      description: 'Help your friends and associates with their business formation needs'
    },
    {
      icon: Star,
      title: 'Future Credits',
      description: 'Credits can be saved for future use when you\'re ready to form your company'
    },
    {
      icon: Heart,
      title: 'Mutual Success',
      description: 'Both you and your referral benefit from our expert services'
    }
  ];

  const whyRefer = [
    {
      title: 'Trusted Expertise',
      description: 'Refer with confidence knowing Bizvisor has 15+ years of experience in UAE business formation',
      icon: Award
    },
    {
      title: 'Comprehensive Services',
      description: 'From mainland to free zone setups, we handle all types of business formation needs',
      icon: CheckCircle
    },
    {
      title: 'Proven Success',
      description: 'Over 2000+ companies formed with a 98% success rate across 25+ countries',
      icon: Star
    },
    {
      title: 'Exceptional Support',
      description: 'End-to-end support ensuring smooth and hassle-free company formation process',
      icon: Handshake
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      role: 'Business Owner',
      content: 'I referred three colleagues to Bizvisor and saved significantly on my own company setup. The process was seamless and the team was incredibly professional.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Entrepreneur',
      content: 'The referral program is fantastic! Not only did I help my friends with their business setup, but I also got a great discount on my own company formation.',
      rating: 5
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-red to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Referral Program
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Referees
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
              Join the Success at <span className="text-white font-bold">Bizvisor!</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              At Bizvisor, we cherish the trust our clients place in us to assist in forming their companies. We're excited to introduce our new <strong>Referral Program</strong> to extend our gratitude and reward your support!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
              >
                Start Referring Today
              </button>
              <a href="#how-it-works">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold">
                Learn How It Works
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              How It Works
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our referral program is simple and rewarding. Here's how you can start earning benefits today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-grey-200 hidden md:block"></div>
                  )}
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 bg-grey-50 rounded-xl p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-bold text-primary-red bg-primary-red/10 px-3 py-1 rounded-full mr-3">
                          Step {step.step}
                        </span>
                        <h3 className="text-xl font-bold text-heading-dark">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-grey-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Referral Program Benefits
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Enjoy exclusive benefits when you refer friends and associates to Bizvisor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      {/* Why Refer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Refer to Bizvisor?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              When you refer someone to Bizvisor, you're connecting them with the best in UAE business formation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyRefer.map((reason, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-navy rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-dark mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-grey-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              What Our Referrers Say
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Hear from clients who have benefited from our referral program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-grey-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-grey-200 pt-4">
                  <div className="font-semibold text-heading-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-red">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-grey-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-heading-dark mb-4 text-center">
                Terms & Conditions
              </h3>
              <p className="text-grey-600 text-center text-sm leading-relaxed">
                Discount is credited solely upon the successful closure of a full company formation by the referred party and may not be exchangeable for cash. The discount is applicable on your next company license and is valid for 1 year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            JOIN, REFER, AND SAVE WITH BIZVISOR!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start referring today and enjoy exclusive benefits while helping your network succeed in their business ventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Start Referring Now
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
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

export default Referral;