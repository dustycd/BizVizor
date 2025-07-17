import React from 'react';
import { Award, Users, Globe, CheckCircle, Target, TrendingUp, Shield, Building2, FileText, Star, Clock, Briefcase, MapPin, CreditCard, HelpCircle } from 'lucide-react';
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
      description: 'We strive for excellence in every client engagement and business formation process.',
      oneLiner: 'Delivering exceptional results that exceed expectations every time.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest communication and reliable service delivery.',
      oneLiner: 'Open communication and honest pricing with no hidden surprises.'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Every setup is handled with legal precision and up-to-date expertise.',
      oneLiner: 'Full regulatory compliance guaranteed with expert legal guidance.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Putting our clients first with personalized solutions tailored to their unique needs.',
      oneLiner: 'Your success is our priority—personalized service every step of the way.'
    }
  ];

  const services = [
    {
      icon: Globe,
      title: 'Free Zone Company Setup',
      description: 'Complete setup across all major UAE free zones with 100% foreign ownership'
    },
    {
      icon: Building2,
      title: 'Mainland Business Formation',
      description: 'Full mainland company formation with operational flexibility and market access'
    },
    {
      icon: Users,
      title: 'Visa & PRO Services',
      description: 'Comprehensive visa processing and government relations support'
    },
    {
      icon: CreditCard,
      title: 'Banking & Documentation Support',
      description: 'Bank account opening assistance and complete documentation services'
    },
    {
      icon: HelpCircle,
      title: 'Business License Advisory',
      description: 'Expert guidance on license types and regulatory compliance requirements'
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
                Established in 2009, Bizvisor has been at the forefront of UAE business setup—offering seamless, compliant, and cost-effective solutions for entrepreneurs and enterprises alike.
              </p>
              <p className="text-lg text-grey-600 mb-6 leading-relaxed">
                With over a decade of experience, we've supported thousands of businesses in navigating the complexities of Free Zone, Mainland, and Offshore formation across all Emirates.
              </p>
              <p className="text-lg text-grey-600 leading-relaxed">
                As the UAE continues to evolve into a global economic hub, Bizvisor remains committed to simplifying business formation and enabling founders to grow with confidence.
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

      {/* Our Achievements Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Achievements
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              <strong>Numbers that speak louder than words.</strong> Our track record demonstrates why 500+ entrepreneurs trust Bizvisor for their UAE business setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary-red/10">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-primary-red" />
              </div>
              <div className="text-4xl font-bold text-primary-red mb-2">
                1000+
              </div>
              <div className="font-bold text-heading-dark mb-2 text-lg">
                Businesses Launched
              </div>
              <div className="text-sm text-grey-600 font-medium">
                Across Free Zone, Mainland, and Offshore
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary-red/10">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-primary-red" />
              </div>
              <div className="text-4xl font-bold text-primary-red mb-2">
                25+
              </div>
              <div className="font-bold text-heading-dark mb-2 text-lg">
                Countries Served
              </div>
              <div className="text-sm text-grey-600 font-medium">
                Entrepreneurs, SMEs, and global firms
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary-red/10">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-primary-red" />
              </div>
              <div className="text-4xl font-bold text-primary-red mb-2">
                3-5
              </div>
              <div className="font-bold text-heading-dark mb-2 text-lg">
                Business Days
              </div>
              <div className="text-sm text-grey-600 font-medium">
                Average setup time
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary-red/10">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary-red" />
              </div>
              <div className="text-4xl font-bold text-primary-red mb-2">
                99%
              </div>
              <div className="font-bold text-heading-dark mb-2 text-lg">
                Approval Rate
              </div>
              <div className="text-sm text-grey-600 font-medium">
                License approval on first submission
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary-red/10 md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary-red" />
              </div>
              <div className="text-2xl font-bold text-primary-red mb-2">
                End-to-End
              </div>
              <div className="font-bold text-heading-dark mb-2 text-lg">
                Service Model
              </div>
              <div className="text-sm text-grey-600 font-medium">
                From setup to compliance and scaling
              </div>
            </div>
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

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive business formation services designed to make your UAE company setup seamless and successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-red/20">
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-grey-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Below Services */}
          <div className="text-center mt-12">
            <p className="text-grey-600 mb-6">
              Ready to explore our comprehensive business setup solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
              >
                Schedule Consultation
              </button>
              <Link 
                to="/cost-calculator"
                className="border-2 border-primary-red text-primary-red px-8 py-3 rounded-lg hover:bg-primary-red hover:text-white transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Calculate Setup Cost
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              From a small consultancy to UAE's trusted business formation partner - here's how we've grown alongside our clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-red/20 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* 2009 */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center md:items-start w-full">
                    <div className="md:w-1/2 md:text-right md:pr-8 mb-4 md:mb-0">
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-primary-red">
                        <div className="text-2xl font-bold text-primary-red mb-2">2009</div>
                        <h3 className="text-lg font-semibold text-heading-dark mb-2">Our Story Begins</h3>
                        <p className="text-grey-600 text-sm">Founded with a mission to simplify UAE business formation for entrepreneurs worldwide.</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-4 h-4 bg-primary-red rounded-full border-4 border-white shadow-lg relative z-10"></div>
                    <div className="md:w-1/2 md:pl-8"></div>
                  </div>
                </div>

                {/* 2015 */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center md:items-start w-full">
                    <div className="md:w-1/2 md:pr-8"></div>
                    <div className="hidden md:block w-4 h-4 bg-primary-red rounded-full border-4 border-white shadow-lg relative z-10"></div>
                    <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-primary-red">
                        <div className="text-2xl font-bold text-primary-red mb-2">2015</div>
                        <h3 className="text-lg font-semibold text-heading-dark mb-2">Expanded Across UAE</h3>
                        <p className="text-grey-600 text-sm">Extended our services to cover all Emirates with comprehensive free zone and mainland solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2018 */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center md:items-start w-full">
                    <div className="md:w-1/2 md:text-right md:pr-8 mb-4 md:mb-0">
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-primary-red">
                        <div className="text-2xl font-bold text-primary-red mb-2">2018</div>
                        <h3 className="text-lg font-semibold text-heading-dark mb-2">25+ Countries Served</h3>
                        <p className="text-grey-600 text-sm">Achieved global reach, helping entrepreneurs from over 25 countries establish their UAE presence.</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-4 h-4 bg-primary-red rounded-full border-4 border-white shadow-lg relative z-10"></div>
                    <div className="md:w-1/2 md:pl-8"></div>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center md:items-start w-full">
                    <div className="md:w-1/2 md:pr-8"></div>
                    <div className="hidden md:block w-4 h-4 bg-primary-red rounded-full border-4 border-white shadow-lg relative z-10"></div>
                    <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-primary-red">
                        <div className="text-2xl font-bold text-primary-red mb-2">2022</div>
                        <h3 className="text-lg font-semibold text-heading-dark mb-2">Trusted by 1000+ Businesses</h3>
                        <p className="text-grey-600 text-sm">Reached the milestone of helping over 1000 businesses successfully launch and scale in the UAE.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
              <p className="text-red-100 leading-relaxed">
                As the UAE continues to innovate and grow, we're committed to evolving our services and expanding our reach to help even more entrepreneurs achieve their business dreams.
              </p>
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
                <p className="text-sm text-primary-red font-medium mb-3">
                  {value.oneLiner}
                </p>
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