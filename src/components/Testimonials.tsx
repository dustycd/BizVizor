import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState<{ [key: number]: boolean }>({});

  const TRUNCATION_LENGTH = 200;

  const testimonials = [
    {
      name: 'Ava Kianirad',
      role: '5 reviews',
      content: 'I recently had the pleasure of working with Bizvisor for setting up my new company, and I couldn\'t be happier with the experience. Their team was incredibly professional, making the entire process smooth and straightforward. Communication was clear and timely throughout, ensuring I was well-informed at every step. Most importantly, they listened to my needs and provided the best possible options and pricing tailored specifically for me. Highly recommend Bizvisor for anyone looking to streamline their company setup process with a team that truly cares about your success!',
      rating: 5,
      timeAgo: '11 months ago',
      company: 'Company Formation'
    },
    {
      name: 'Damith Wickramasinghe',
      role: '4 reviews · 10 photos',
      content: 'I recently had the pleasure of working with Bizvisor to obtain my business license in Dubai, and I couldn\'t be happier with the experience! From start to finish, the process was smooth and hassle-free, thanks to the exceptional support and expertise of the team. A special thank you goes to Mr. Said and the Visa team for their outstanding service. They were incredibly knowledgeable and guided me every step of the way, answering all my questions and ensuring that I had all the necessary documents in order. Their professionalism and dedication truly made a difference in what could have been a complicated process. I highly recommend Bizvisor to anyone looking to establish their business in Dubai. Their commitment to customer satisfaction and efficiency is truly commendable. Thank you, Bizvisor, for making this experience so positive and seamless! ❤️',
      rating: 5,
      timeAgo: '11 months ago',
      company: 'Business License Dubai'
    },
    {
      name: 'Radhika Budhbhatti',
      role: 'Local Guide · 21 reviews · 6 photos',
      content: 'Highly recommend going through them - Special thanks to Mr. Said and Hildana for their assistance, they were extremely patient with me and guided me through the process and even after the service was completed they assisted me. Thank you very much for that. Great service, to the point and very professional.',
      rating: 5,
      timeAgo: '4 months ago',
      company: 'Business Setup'
    },
    {
      name: 'Mohammed Tahri Joutey',
      role: '1 review',
      content: 'I would like to extend my sincere gratitude to Bizvisor for their exceptional support in establishing my company in UAE and facilitating the EID process. Their team\'s availability, clear explanations, and remarkable responsiveness made the entire process smooth and efficient. They consistently went above and beyond, providing invaluable guidance at every step. I highly recommend Bizvisor for anyone looking to set up a business in UAE with confidence and ease. Thank you for your outstanding service and professionalism!',
      rating: 5,
      timeAgo: '8 months ago',
      company: 'UAE Company Setup'
    },
    {
      name: 'Alin BURLAN',
      role: '4 reviews',
      content: 'I had an exceptional experience with Bizvisor in opening my company in Dubai. Their team demonstrated professionalism, efficiency, and an in-depth understanding of the local business setup requirements. They guided me step-by-step through the process, ensuring everything was handled seamlessly and within a short time frame. Their personalized support and expert advice made the entire process stress-free, and I truly appreciated their attention to detail and transparency throughout. I highly recommend Bizvisor to anyone looking to set up a business in Dubai—they are reliable, knowledgeable, and client-focused. Thank you, Bizvisor, for making this journey smooth and successful!',
      rating: 5,
      timeAgo: '6 months ago',
      company: 'Dubai Company Setup'
    },
    {
      name: 'Mohammed Keshawarz',
      role: '1 review',
      content: 'Bizvisor is simply the best! Their team provided top-notch expertise and demonstrated an incredible level of professionalism throughout the entire process. From the initial consultation to the final solution, every step was handled with precision and a genuine commitment to my business needs. They took the time to understand our unique challenges and delivered results that exceeded expectations. Their customer service is outstanding—they are always available to answer questions, provide updates, and ensure everything runs smoothly. Thanks to Bizvisor, we were able to streamline our operations, improve efficiency, and ultimately achieve our goals. I would highly recommend Bizvisor to any business looking for reliable and effective consultancy services. They truly care about their clients\' success, and it shows in every aspect of their work. A five-star experience from start to finish!',
      rating: 5,
      timeAgo: '9 months ago',
      company: 'Business Consultancy'
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const shouldTruncate = (content: string) => content.length > TRUNCATION_LENGTH;

  const getTruncatedContent = (content: string) => {
    if (content.length <= TRUNCATION_LENGTH) return content;
    return content.substring(0, TRUNCATION_LENGTH).trim() + '...';
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
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
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedTestimonials[index];
            const needsTruncation = shouldTruncate(testimonial.content);
            const displayContent = isExpanded || !needsTruncation 
              ? testimonial.content 
              : getTruncatedContent(testimonial.content);

            return (
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
                <div className="mb-6">
                  <p className="text-grey-700 leading-relaxed">
                    "{displayContent}"
                  </p>
                  
                  {/* Expand/Collapse Button */}
                  {needsTruncation && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="mt-3 text-primary-red hover:text-primary-navy transition-colors duration-200 text-sm font-medium flex items-center group"
                    >
                      {isExpanded ? (
                        <>
                          Show Less
                          <ChevronUp className="w-4 h-4 ml-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      ) : (
                        <>
                          Read More
                          <ChevronDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Author Info */}
                <div className="border-t border-grey-200 pt-4">
                  <div className="font-semibold text-heading-dark mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-red font-medium mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-grey-500 mb-1">
                    {testimonial.company}
                  </div>
                  <div className="text-xs text-grey-400">
                    {testimonial.timeAgo}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2000+</div>
              <div className="text-sm opacity-90">Companies Formed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5.0</div>
              <div className="text-sm opacity-90">Average Rating</div>
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
      </div>
    </section>
  );
};

export default Testimonials;