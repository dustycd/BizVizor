import React from 'react';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

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
      number: '500+',
      label: 'Successful Projects',
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
      label: 'Client Satisfaction',
      description: 'Consistently exceeding expectations'
    }
  ];

  const values = [
    'Excellence in every engagement',
    'Data-driven decision making',
    'Collaborative partnership approach',
    'Sustainable business practices',
    'Innovation and continuous improvement',
    'Ethical and transparent operations'
  ];

  return (
    <section id="about" className="py-20 bg-grey-50">
      <div className="container mx-auto px-4 lg:px-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Your Trusted Partner in Business Excellence
            </h2>
            <p className="text-lg text-grey-600 mb-6 leading-relaxed">
              At Bizvisor, we believe every business has the potential for greatness. Our team of seasoned professionals brings decades of combined experience across industries, helping organizations unlock their full potential through strategic guidance and operational expertise.
            </p>
            <p className="text-lg text-grey-600 mb-8 leading-relaxed">
              We don't just provide advice – we partner with you to implement solutions that drive real, measurable results. Our collaborative approach ensures that every strategy is tailored to your unique challenges and opportunities.
            </p>

            {/* Values */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-heading-dark mb-4">Our Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0" />
                    <span className="text-grey-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-navy" />
                </div>
                <div className="text-2xl font-bold text-primary-red mb-2">
                  {item.number}
                </div>
                <div className="font-semibold text-heading-dark mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-grey-600">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;