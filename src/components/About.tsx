import React from 'react';
import { Award, Users, Globe, CheckCircle, Target, TrendingUp, Shield, Building2, FileText, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlyModal from './CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const About = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const achievements = [
    {
      icon: Award,
      number: '15+',
      label: 'Years of Excellence',
      description: 'Delivering exceptional results'
    },
    {
      icon: Users,
      number: '2000+',
      label: 'Companies Formed',
      description: 'Across diverse industries'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries Served',
      description: 'Global reach and expertise'
    },
    {
      icon: CheckCircle,
      number: '98%',
      label: 'Success Rate',
      description: 'Consistently exceeding expectations'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence in Service',
      description: 'We strive for excellence in every client engagement and business formation process.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest communication and reliable service delivery.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation & Growth',
      description: 'Embracing innovative solutions to help businesses grow and succeed in competitive markets.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Putting our clients first with personalized solutions tailored to their unique needs.'
    }
  ];

  const certifications = [
    {
      title: 'Dubai Economic Department Licensed',
      description: 'Licensed Corporate Service Provider (CSP) #1145129',
      icon: Building2
    },
    {
      title: 'Government Authorized',
      description: 'Authorized to provide PRO services and government relations',
      icon: Shield
    },
    {
      title: 'ISO Certified Operations',
      description: 'Quality management system certified for business services',
      icon: Award
    },
    {
      title: 'Professional Memberships',
      description: 'Member of UAE Business Council and Chamber of Commerce',
      icon: Users
    }
  ];

  const partnerships = [
    {
      name: 'Dubai Economic Department',
      description: 'Official partner for business licensing and registration services'
    },
    {
      name: 'UAE Free Zones',
      description: 'Authorized agent for multiple UAE free zone authorities'
    },
    {
      name: 'Banking Partners',
      description: 'Preferred partner with major UAE banks for account opening'
    },
    {
      name: 'Legal Network',
      description: 'Associated with top-tier legal firms for comprehensive support'
    }
  ];

  const trustIndicators = [
    {
      icon: Star,
      title: '4.9/5 Client Rating',
      description: 'Based on 500+ verified client reviews'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Professional indemnity insurance coverage'
    },
    {
      icon: FileText,
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear cost breakdown'
    },
    {
      icon: CheckCircle,
      title: 'Money-Back Guarantee',
      description: 'Satisfaction guaranteed or money back'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose Bizvisor
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Bizvisor is Your Trusted Partner
            </h1>
            <div className="text-xl mb-4 opacity-90 leading-relaxed font-medium">
              We help entrepreneurs launch their UAE companies with clarity, speed, and full compliance.
            </div>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              With 15+ years of expertise and 500+ successful business launches, we make UAE company formation effortless. Here's why entrepreneurs choose us as their trusted partner.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
                Our Story
              </h2>
              <p className="text-lg text-grey-600 mb-6 leading-relaxed">
                Founded in 2009, Bizvisor began with a simple mission: to make business formation in the UAE accessible, efficient, and transparent for entrepreneurs worldwide. What started as a small consultancy has grown into one of the region's most trusted business setup specialists.
              </p>
              <p className="text-lg text-grey-600 mb-6 leading-relaxed">
                Over the years, we've witnessed the UAE's transformation into a global business hub and have been proud to facilitate the dreams of thousands of entrepreneurs who chose to make the UAE their business home.
              </p>
              <p className="text-lg text-grey-600 leading-relaxed">
                Today, we continue to innovate and expand our services, always staying ahead of regulatory changes and market trends to provide our clients with the most current and effective business solutions.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dubai Business District"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Proven Track Record
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              <strong>Numbers that speak louder than words.</strong> Our track record demonstrates why 500+ entrepreneurs trust Bizvisor for their UAE business setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary-red/10"
              >
                <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-primary-red" />
                </div>
                <div className="text-4xl font-bold text-primary-red mb-2">
                  {item.number}
                </div>
                <div className="font-bold text-heading-dark mb-2 text-lg">
                  {item.label}
                </div>
                <div className="text-sm text-grey-600 font-medium">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 text-white text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold mb-1">4.9/5 Rating</div>
                <div className="text-red-100">Based on 500+ reviews</div>
              </div>
              
              <div className="flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-white mb-3" />
                <div className="text-2xl font-bold mb-1">98% Success Rate</div>
                <div className="text-red-100">Consistently exceeding expectations</div>
              </div>
              
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-white mb-3" />
                <div className="text-2xl font-bold mb-1">Licensed & Certified</div>
                <div className="text-red-100">DED Licensed CSP #1145129</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-8 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-primary-navy rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-grey-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Certifications & Credentials
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our official licenses and certifications demonstrate our commitment to professional excellence and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm text-grey-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Clients Trust Us
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our commitment to transparency, quality, and client satisfaction sets us apart in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <indicator.icon className="w-8 h-8 text-primary-navy" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {indicator.title}
                </h3>
                <p className="text-sm text-grey-600">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our strong partnerships with government entities and financial institutions ensure seamless service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-red rounded-xl flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading-dark">
                    {partnership.name}
                  </h3>
                </div>
                <p className="text-grey-600">
                  {partnership.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            To empower entrepreneurs and businesses by providing comprehensive, efficient, and transparent business formation services in the UAE. We are committed to turning business dreams into reality through expert guidance, innovative solutions, and unwavering support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Start Your Business Journey
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

export default About;