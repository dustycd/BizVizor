import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'David Thompson',
      role: 'CEO, TechFlow Solutions',
      content: 'Bizvisor transformed our operations completely. Their strategic insights helped us achieve 40% growth in just 18 months. The team\'s expertise and dedication are unmatched.',
      rating: 5,
      company: 'Technology Startup'
    },
    {
      name: 'Rachel Martinez',
      role: 'Founder, GreenEarth Initiatives',
      content: 'The financial advisory services provided by Bizvisor were game-changing for our sustainability business. They helped us secure funding and optimize our cash flow.',
      rating: 5,
      company: 'Environmental Services'
    },
    {
      name: 'James Wilson',
      role: 'COO, Manufacturing Plus',
      content: 'Process optimization recommendations from Bizvisor reduced our operational costs by 25% while improving quality. Their approach is methodical and results-driven.',
      rating: 5,
      company: 'Manufacturing'
    },
    {
      name: 'Lisa Chen',
      role: 'Director, RetailMax',
      content: 'Bizvisor\'s team development programs revolutionized our workplace culture. Employee satisfaction increased by 60% and productivity soared.',
      rating: 5,
      company: 'Retail Chain'
    },
    {
      name: 'Robert Anderson',
      role: 'President, FinanceFirst',
      content: 'The risk management strategies implemented by Bizvisor protected our company during market volatility. Their foresight and planning are exceptional.',
      rating: 5,
      company: 'Financial Services'
    },
    {
      name: 'Maria Rodriguez',
      role: 'VP Operations, LogiCorp',
      content: 'Working with Bizvisor was the best decision we made. Their comprehensive approach to business transformation delivered results beyond our expectations.',
      rating: 5,
      company: 'Logistics'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-40">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders across industries say about their experience working with Bizvisor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-grey-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary-red/10 rounded-lg flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary-red" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-grey-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author Info - Without Profile Picture */}
              <div className="border-t border-grey-200 pt-4">
                <div className="font-semibold text-heading-dark mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-primary-red font-medium mb-1">
                  {testimonial.role}
                </div>
                <div className="text-xs text-grey-500">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">92%</div>
              <div className="text-sm opacity-90">Repeat Business</div>
            </div>
          </div>
        </div>
      </div>
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-heading-dark mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-grey-600 mb-8 max-w-2xl mx-auto">
            Start your UAE business journey today and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/cost-calculator"
              className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Calculate Setup Cost
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-primary-red text-primary-red px-8 py-4 rounded-lg hover:bg-primary-red hover:text-white transition-all duration-200 font-semibold inline-flex items-center justify-center"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
    </section>
  );
};

export default Testimonials;