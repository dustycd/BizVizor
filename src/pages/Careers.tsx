import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Award, TrendingUp, Heart, Coffee } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Business Consultant',
      department: 'Business Development',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '5+ years',
      salary: 'AED 15,000 - 20,000',
      description: 'Lead client consultations and business formation processes for mainland and free zone companies.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '5+ years experience in UAE business formation',
        'Strong knowledge of UAE business laws',
        'Excellent communication skills in English and Arabic'
      ]
    },
    {
      title: 'PRO Services Specialist',
      department: 'Government Relations',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'AED 8,000 - 12,000',
      description: 'Handle visa processing, government relations, and PRO services for our clients.',
      requirements: [
        'Experience in UAE PRO services',
        'Knowledge of UAE immigration laws',
        'Strong relationships with government entities',
        'Fluency in Arabic and English'
      ]
    },
    {
      title: 'Accounting Manager',
      department: 'Finance',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '4+ years',
      salary: 'AED 12,000 - 16,000',
      description: 'Oversee accounting services for clients including bookkeeping, VAT filing, and financial reporting.',
      requirements: [
        'CPA or equivalent qualification',
        'Experience with UAE accounting standards',
        'Knowledge of VAT and corporate tax',
        'Proficiency in accounting software'
      ]
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '2+ years',
      salary: 'AED 6,000 - 10,000',
      description: 'Develop and execute digital marketing strategies to promote our business formation services.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        'Experience in digital marketing and SEO',
        'Knowledge of social media platforms',
        'Creative thinking and analytical skills'
      ]
    },
    {
      title: 'Customer Success Manager',
      department: 'Client Services',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'AED 10,000 - 14,000',
      description: 'Ensure client satisfaction and manage ongoing relationships with existing clients.',
      requirements: [
        'Experience in customer success or account management',
        'Strong interpersonal and communication skills',
        'Problem-solving abilities',
        'Knowledge of business services industry'
      ]
    },
    {
      title: 'Junior Business Consultant',
      department: 'Business Development',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '1-2 years',
      salary: 'AED 5,000 - 8,000',
      description: 'Support senior consultants in client onboarding and business formation processes.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        'Fresh graduate or 1-2 years experience',
        'Eagerness to learn UAE business regulations',
        'Good communication skills'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths and professional development'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and supportive work environment'
    },
    {
      icon: Award,
      title: 'Performance Rewards',
      description: 'Competitive salary with performance-based bonuses'
    }
  ];

  const culture = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and innovative solutions to help our clients succeed.'
    },
    {
      title: 'Collaboration',
      description: 'We work together as a team, supporting each other to achieve common goals.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from client service to professional development.'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Build your career with UAE's leading business formation specialists. We're looking for passionate professionals who want to help entrepreneurs achieve their dreams.
            </p>
            <button className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold">
              <a href="#open-positions">
                <button className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold">
                  View Open Positions
                </button>
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Work With Us?
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Join a dynamic team that's passionate about helping businesses succeed in the UAE market.
            </p>
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
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Culture & Values
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and contribute to our shared success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-heading-dark mb-4">
                  {item.title}
                </h3>
                <p className="text-grey-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role to advance your professional journey.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-8 hover:shadow-md transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-heading-dark">
                        {position.title}
                      </h3>
                      <span className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-grey-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {position.salary}
                      </div>
                    </div>
                    
                    <p className="text-grey-600 mb-4">
                      {position.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-heading-dark mb-2">Key Requirements:</h4>
                      <ul className="text-sm text-grey-600 space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <Link 
                      to="/contact"
                      className="bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold mb-3 inline-flex items-center justify-center"
                    >
                      Apply Now
                    </Link>
                    <Link 
                      to="/careers"
                      className="border-2 border-primary-navy text-primary-navy px-6 py-3 rounded-lg hover:bg-primary-navy hover:text-white transition-colors duration-200 font-semibold inline-flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Application Process
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our streamlined hiring process is designed to find the best talent while respecting your time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Apply Online',
                description: 'Submit your application and resume through our online portal'
              },
              {
                step: '02',
                title: 'Initial Review',
                description: 'Our HR team reviews your application and qualifications'
              },
              {
                step: '03',
                title: 'Interview Process',
                description: 'Phone/video interview followed by in-person meeting'
              },
              {
                step: '04',
                title: 'Final Decision',
                description: 'Reference checks and final decision within one week'
              }
            ].map((step, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our team of professionals and help shape the future of business formation in the UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#open-positions">
              <button className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold">
                Browse All Positions
              </button>
            </a>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Contact HR Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;