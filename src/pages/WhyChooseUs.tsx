import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  Lightbulb, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  Globe, 
  Clock, 
  Eye, 
  MessageSquare,
  ArrowRight,
  Star,
  Heart
} from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const WhyChooseUs = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const reasons = [
    {
      number: '1',
      title: 'Comprehensive Support Throughout Your Journey',
      description: 'Bizvisor doesn\'t just offer solutions; we provide a comprehensive partnership throughout your business journey. From the initial consultation to implementing strategies and beyond, we stand by your side, providing unwavering support.',
      details: 'Our dedicated professionals can address your concerns, provide guidance, and adapt strategy as your business evolves. We believe in building long-term relationships with our clients, understanding that your success is ours.',
      icon: Users,
      color: 'bg-primary-red'
    },
    {
      number: '2',
      title: 'Cultivating Innovation And Adaptability',
      description: 'In the ever-changing landscape of business, innovation and adaptability are key. Bizvisor fosters a culture of innovation within your organization, encouraging creative thinking and out-of-the-box solutions.',
      details: 'We help you adapt to market shifts, technological advancements, and emerging trends.',
      icon: Lightbulb,
      color: 'bg-primary-navy'
    },
    {
      number: '3',
      title: 'Personalized Strategies For Lasting Impact',
      description: 'Bizvisor takes the time to learn about your company, industry, and objectives. We delve deep into the core of your operations, identifying strengths to leverage and weaknesses to fortify.',
      details: 'Our strategies are meticulously crafted, ensuring a lasting and meaningful impact on your business. With Bizvisor, you don\'t just get generic advice; you get tailor-made solutions that resonate with your specific needs and aspirations.',
      icon: Target,
      color: 'bg-alert-success'
    },
    {
      number: '4',
      title: 'Expertise Beyond Compare',
      description: 'Our team possesses unparalleled expertise in the industry. We excel in sifting through vast data sources to craft the perfect solution for your business.',
      details: 'With a treasure trove of memorized frameworks and a knack for organized thinking, we transform data into actionable strategies.',
      icon: Award,
      color: 'bg-grey-700'
    },
    {
      number: '5',
      title: 'Effective Application Of Knowledge',
      description: 'Knowledge is power, but its actual value lies in its application. At Bizvisor, we not only accumulate knowledge but also harness it effectively.',
      details: 'We focus on delivering impulsive and optimal solutions that drive your business forward.',
      icon: TrendingUp,
      color: 'bg-primary-red'
    },
    {
      number: '6',
      title: 'Close Collaboration',
      description: 'We take pleasure in being skilled communicators who collaborate closely with our clients. Our approach ensures that we thoroughly understand your requirements.',
      details: 'This allows us to create personalized solutions that align with your business objectives.',
      icon: Users,
      color: 'bg-primary-navy'
    },
    {
      number: '7',
      title: 'Agility And Speed',
      description: 'In the fast-paced business world, agility and speed can make all the difference. Bizvisor stands out for its ability to act.',
      details: 'You can expect rapid responses, skill, and decisive actions when you partner with us.',
      icon: Zap,
      color: 'bg-alert-success'
    },
    {
      number: '8',
      title: 'Clarity And Transparency',
      description: 'Choosing Bizvisor is a clear-cut decision. Our transparency in operations and communication makes us a noticeable choice.',
      details: 'We believe in openness and honesty, ensuring that you are well-informed every step of the way.',
      icon: Eye,
      color: 'bg-grey-700'
    },
    {
      number: '9',
      title: 'Strategic Thinking',
      description: 'We are not just advisors; we are skilled strategists. Our team thinks analytically and rationally to craft strategies that drive success.',
      details: 'We carefully evaluate every aspect of your business to provide the most effective solutions.',
      icon: Target,
      color: 'bg-primary-red'
    },
    {
      number: '10',
      title: 'Specific Defensiveness',
      description: 'We take a respectful approach to making our case. Instead of giving generic advice, we initiate discussions clarifying your viewpoint.',
      details: 'This ensures that our recommendations are tailored to your unique needs.',
      icon: Shield,
      color: 'bg-primary-navy'
    },
    {
      number: '11',
      title: 'Thoughtful Word Selection',
      description: 'Words matter, and at Bizvisor, we carefully consider our word selection. Our communication is precise.',
      details: 'This ensures your message is conveyed effectively and accurately.',
      icon: MessageSquare,
      color: 'bg-alert-success'
    }
  ];

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

  const coreValues = [
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We put our clients first with personalized solutions tailored to their unique needs.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through honest communication, reliable service delivery, and unwavering commitment.'
    },
    {
      icon: TrendingUp,
      title: 'Excellence in Service',
      description: 'We strive for excellence in every client engagement and business formation process, delivering exceptional results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Growth',
      description: 'Embracing innovative solutions to help businesses grow and succeed in competitive markets.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Unlocking Success with Bizvisor
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 opacity-90">
              Your Trusted Business Setup Consultant in Dubai
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed font-medium">
              Achieve Great Heights with Bizvisor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
              >
                Start Your Journey
              </button>
              <Link 
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Choose Bizvisor?
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed">
              When selecting a consultant in Dubai, making the right choice is paramount to your company's success. At Bizvisor, we understand that the complexities of the business landscape demand a unique and tailored approach. Here are some compelling reasons why choosing Bizvisor is an intelligent decision:
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Our Track Record
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

      {/* Main Reasons Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              11 Compelling Reasons to Choose Bizvisor
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Discover what sets us apart and why we're the trusted choice for business setup and consultancy in Dubai.
            </p>
          </div>

          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="bg-grey-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start mb-6">
                      <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                        <span className="text-2xl font-bold text-white">{reason.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                          <reason.icon className="w-6 h-6 text-primary-navy" />
                        </div>
                        <h3 className="text-xl font-bold text-heading-dark mb-4">
                          {reason.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-grey-700 leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    <p className="text-grey-600 leading-relaxed">
                      {reason.details}
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={`https://images.pexels.com/photos/${getImageId(index)}/pexels-photo-${getImageId(index)}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={reason.title}
                      className="rounded-2xl shadow-xl w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-grey-50">
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
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-md transition-all duration-300">
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

      {/* Strategic Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Beyond Conventional Consultancy
              </h2>
              <p className="text-xl mb-6 opacity-90 leading-relaxed">
                At Bizvisor, we recognize that the entrepreneurial path is laden with challenges and opportunities. Our approach extends beyond conventional consultancy; we become your strategic allies, invested in your growth and stability.
              </p>
              <p className="text-lg mb-8 opacity-80">
                Our commitment to your success is not limited to boardroom discussions; we roll up our sleeves and work collaboratively to turn your visions into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
                >
                  Become Our Partner
                </button>
                <Link 
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold inline-flex items-center justify-center"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Clients Trust Bizvisor
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Our commitment to transparency, quality, and client satisfaction sets us apart in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-2xl font-bold text-primary-red mb-2">4.9/5 Rating</div>
              <div className="text-grey-600">Based on 500+ reviews</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <CheckCircle className="w-12 h-12 text-alert-success mx-auto mb-4" />
              <div className="text-2xl font-bold text-alert-success mb-2">98% Success Rate</div>
              <div className="text-grey-600">Consistently exceeding expectations</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <Shield className="w-12 h-12 text-primary-navy mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary-navy mb-2">Licensed & Certified</div>
              <div className="text-grey-600">DED Licensed CSP #1145129</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience the Bizvisor Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses who have chosen Bizvisor as their trusted partner for UAE business setup and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalendly}
              className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-grey-100 transition-all duration-200 font-semibold"
            >
              Schedule Free Consultation
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

// Helper function to get different image IDs for variety
const getImageId = (index: number): number => {
  const imageIds = [3184291, 3184465, 3184339, 3184360, 3184418, 3184292, 3182812, 3183150, 3183153, 3183197, 3183198];
  return imageIds[index % imageIds.length];
};

export default WhyChooseUs;