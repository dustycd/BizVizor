import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  TrendingUp, 
  Building2, 
  Shield, 
  Users, 
  Heart,
  MapPin,
  Zap,
  Award,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import { useCalendly } from '../hooks/useCalendly';

const WhyDubai = () => {
  const { isOpen: isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const keyAdvantages = [
    {
      icon: TrendingUp,
      title: 'A Beacon Of Economic Growth',
      description: 'Dubai\'s economy stands as a testament to unwavering success. Unlike many regions heavily dependent on oil revenues, Dubai derives only about 5% of its economic strength from oil.',
      details: 'This strategic diversification has shielded Dubai from the volatility of oil prices, enabling it to bounce back stronger from the 2008 financial crisis. Experts anticipate that Dubai\'s economy will continue to soar, offering a robust platform for businesses to thrive.',
      color: 'bg-primary-red'
    },
    {
      icon: Globe,
      title: 'A Strategic Connection',
      description: 'Dubai\'s strategic location makes it a global trade powerhouse. The renowned Dubai International Airport and Jebel Ali Port are world-class infrastructure.',
      details: 'This strategic position reduces transit times and costs, positioning Dubai as the preferred choice for businesses aiming to expand across continents.',
      color: 'bg-primary-navy'
    },
    {
      icon: Building2,
      title: 'Fantastic Place For Business',
      description: 'Dubai\'s business-friendly policies and regulations have garnered global attention. The government\'s commitment to increasing innovation and entrepreneurship is evident.',
      details: 'Through initiatives like the Dubai Future Accelerators and the DIFC. The streamlined business processes, minimal bureaucracy, and enticing tax incentives make Dubai an ideal destination for startups and established enterprises.',
      color: 'bg-alert-success'
    },
    {
      icon: Shield,
      title: 'A Legal Environment That Is Friendly To Investors',
      description: 'One of Dubai\'s distinguishing advantages is its investor-friendly legal framework, which boosts company confidence and security.',
      details: 'The city\'s solid legislative system, founded on transparency and fairness principles, protects investors\' rights. Dubai\'s dedication to worldwide business standards is shown in its several free zones.',
      color: 'bg-grey-700'
    },
    {
      icon: Users,
      title: 'A Texture Of Talent',
      description: 'Dubai\'s diverse and multicultural workforce is a jewel in its crown. The city welcomes talent from every corner of the world.',
      details: 'This diversity sparks creativity and innovation and provides businesses with many skilled professionals.',
      color: 'bg-primary-red'
    },
    {
      icon: Heart,
      title: 'Life Beyond Business',
      description: 'Dubai offers an unparalleled quality of life, appealing to entrepreneurs and employees alike.',
      details: 'The city boasts world-class healthcare, education, and leisure facilities. Its famous skyline, stunning beaches, and rich tapestry of cultural events guarantee that life is fulfilling outside work.',
      color: 'bg-primary-navy'
    }
  ];

  const economicStats = [
    {
      icon: TrendingUp,
      number: '5%',
      label: 'Oil Dependency',
      description: 'Only 5% of economy from oil'
    },
    {
      icon: Globe,
      number: '200+',
      label: 'Nationalities',
      description: 'Diverse workforce'
    },
    {
      icon: Building2,
      number: '40+',
      label: 'Free Zones',
      description: 'Specialized business zones'
    },
    {
      icon: Award,
      number: '#1',
      label: 'Business Hub',
      description: 'Middle East leader'
    }
  ];

  const businessBenefits = [
    {
      title: 'Strategic Location',
      description: 'Gateway between East and West with world-class connectivity',
      icon: MapPin
    },
    {
      title: 'Tax Advantages',
      description: 'No personal income tax and competitive corporate tax rates',
      icon: Shield
    },
    {
      title: 'World-Class Infrastructure',
      description: 'Modern facilities, airports, ports, and telecommunications',
      icon: Building2
    },
    {
      title: 'Business-Friendly Policies',
      description: 'Streamlined processes and minimal bureaucracy',
      icon: Zap
    },
    {
      title: 'Diverse Talent Pool',
      description: 'Access to skilled professionals from around the world',
      icon: Users
    },
    {
      title: 'Quality of Life',
      description: 'Excellent healthcare, education, and lifestyle amenities',
      icon: Heart
    }
  ];

  const dubaiHighlights = [
    'Dubai International Financial Centre (DIFC) - top-tier financial regulatory environment',
    'Dubai Future Accelerators - innovation and entrepreneurship initiatives',
    'Complete foreign ownership in free zones',
    'Tax benefits and expedited company registration',
    'International treaties protecting investor capital',
    'Seamless connectivity through Dubai International Airport',
    'World-class Jebel Ali Port for global trade',
    'Multicultural and diverse business environment'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Why Dubai UAE
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Discover Limitless Opportunities: Invest in Dubai, UAE for Business Excellence
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed font-medium">
              Embark on Your Business Journey Today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openCalendly}
                className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
              >
                Start Your Journey
              </button>
              <Link 
                to="/cost-calculator"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-200 font-semibold inline-flex items-center justify-center"
              >
                Calculate Setup Cost
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
              Why Invest In Dubai UAE For Business?
            </h2>
            <p className="text-lg text-grey-600 leading-relaxed">
              Dubai, a shining beacon in the United Arab Emirates, continues to shine brightly on the global business stage, drawing in entrepreneurs, investors, and corporations with its unrivaled potential. The city's impressive economic diversification, unwavering resilience, and visionary leadership have created an irresistible magnet for those pursuing success in the heart of the Middle East. Here's why your business should set its sights on Dubai, UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Economic Stats Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Dubai by the Numbers
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Key statistics that showcase Dubai's position as a global business hub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {economicStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-primary-red" />
                </div>
                <div className="text-3xl font-bold text-primary-red mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-heading-dark mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-grey-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Dubai's Key Advantages for Business
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Discover the compelling reasons that make Dubai the preferred destination for global businesses.
            </p>
          </div>

          <div className="space-y-12">
            {keyAdvantages.map((advantage, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="bg-grey-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start mb-6">
                      <div className={`w-16 h-16 ${advantage.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                        <advantage.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-heading-dark mb-4">
                          {advantage.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-grey-700 leading-relaxed mb-4">
                      {advantage.description}
                    </p>
                    <p className="text-grey-600 leading-relaxed">
                      {advantage.details}
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={`https://images.pexels.com/photos/${getImageId(index)}/pexels-photo-${getImageId(index)}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={advantage.title}
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

      {/* DIFC Special Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-navy to-blue-700 rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Dubai International Financial Centre (DIFC)
              </h2>
              <p className="text-xl mb-6 opacity-90 leading-relaxed">
                One such place that provides an ordinary law jurisdiction within Dubai and a top-tier financial regulatory environment is the Dubai International Financial Centre (DIFC).
              </p>
              <p className="text-lg mb-8 opacity-80">
                Moreover, Dubai has solidified its status as a secure and alluring destination for global money by ratifying several international treaties and accords meant to protect investors' capital. Whether you are a small startup or a large organization, Dubai's investor-friendly regulatory framework ensures that your business activities run smoothly and confidently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openCalendly}
                  className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold"
                >
                  Explore DIFC Options
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
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Why Businesses Choose Dubai
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Comprehensive advantages that make Dubai the preferred destination for international businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="bg-grey-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      {/* Dubai Highlights Section */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Dubai Business Highlights
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Key features and initiatives that set Dubai apart as a global business destination.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {dubaiHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-alert-success mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-grey-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading-dark mb-6">
              Global Recognition
            </h2>
            <p className="text-lg text-grey-600 max-w-3xl mx-auto">
              Dubai's achievements and recognition on the global stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-grey-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-2xl font-bold text-primary-red mb-2">Top 10</div>
              <div className="text-grey-600">Global Financial Centers</div>
            </div>
            
            <div className="bg-grey-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <Award className="w-12 h-12 text-alert-success mx-auto mb-4" />
              <div className="text-2xl font-bold text-alert-success mb-2">#1</div>
              <div className="text-grey-600">Business Hub in Middle East</div>
            </div>
            
            <div className="bg-grey-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <Globe className="w-12 h-12 text-primary-navy mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary-navy mb-2">Global</div>
              <div className="text-grey-600">Trade & Investment Hub</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Discover Dubai's Business Opportunities?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses who have chosen Dubai as their gateway to global success. Start your business journey today.
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
  const imageIds = [3184291, 3184465, 3184339, 3184360, 3184418, 3184292];
  return imageIds[index % imageIds.length];
};

export default WhyDubai;