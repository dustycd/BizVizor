import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, CheckCircle, Target, TrendingUp, Shield } from 'lucide-react';

const About = () => {
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

  const team = [
    {
      name: 'Ahmed Al-Rashid',
      role: 'Managing Director',
      expertise: 'UAE Business Law & Corporate Formation',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '15+ years'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      expertise: 'Free Zone Setup & PRO Services',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '12+ years'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Business Consultant',
      expertise: 'Mainland Formation & Compliance',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '10+ years'
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'PRO Services Manager',
      expertise: 'Visa Processing & Government Relations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '8+ years'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Bizvisor
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Your trusted partner for UAE business formation and corporate services. With over 15 years of experience, we've helped thousands of entrepreneurs and businesses establish their presence in the UAE.
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
              Our Achievements
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-red" />
                </div>
                <div className="text-3xl font-bold text-primary-red mb-2">
                  {item.number}
                </div>
                <div className="font-semibold text-heading-dark mb-2">
                  {item.label}
                </div>
                <div className="text-sm text-grey-600">
                  {item.description}
                </div>
              </div>
            ))}
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

      {/* Team Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our experienced professionals bring deep expertise in UAE business law, corporate formation, and government relations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-lg font-semibold text-heading-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-red font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-grey-600 mb-3">
                  {member.expertise}
                </p>
                <div className="text-xs text-primary-navy font-medium">
                  {member.experience}
                </div>
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
          <div className="text-xl mb-4 opacity-90 leading-relaxed font-medium">
            We help entrepreneurs launch their UAE companies with clarity, speed, and full compliance.
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            To empower entrepreneurs and businesses by providing comprehensive, efficient, and transparent business formation services in the UAE. We are committed to turning business dreams into reality through expert guidance, innovative solutions, and unwavering support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Start Your Business Journey
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;