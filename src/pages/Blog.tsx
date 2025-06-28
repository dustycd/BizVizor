import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'UAE Corporate Tax: Complete Guide for 2024',
    excerpt: 'Everything you need to know about the new UAE Corporate Tax regulations, compliance requirements, and how it affects your business operations.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Ahmed Al-Rashid',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Tax & Compliance'
  };

  const blogPosts = [
    {
      title: 'Dubai Mainland vs Free Zone: Which is Right for Your Business?',
      excerpt: 'A comprehensive comparison of Dubai mainland and free zone business setup options to help you make the right choice.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sarah Johnson',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'Business Setup'
    },
    {
      title: 'New UAE Golden Visa Requirements for 2024',
      excerpt: 'Updated requirements and application process for UAE Golden Visa across different categories and investment levels.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Michael Chen',
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'Visa Services'
    },
    {
      title: 'Top 5 Free Zones for E-commerce Businesses in UAE',
      excerpt: 'Discover the best UAE free zones for e-commerce businesses, including benefits, costs, and setup requirements.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Fatima Al-Zahra',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Free Zones'
    },
    {
      title: 'UAE VAT Registration: Step-by-Step Guide',
      excerpt: 'Complete guide to VAT registration in UAE, including requirements, process, and compliance obligations.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Ahmed Al-Rashid',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Tax & Compliance'
    },
    {
      title: 'Banking Requirements for New UAE Companies',
      excerpt: 'Essential guide to opening corporate bank accounts in UAE, including required documents and best practices.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sarah Johnson',
      date: 'December 3, 2024',
      readTime: '5 min read',
      category: 'Banking'
    },
    {
      title: 'Offshore Company Formation: Benefits and Considerations',
      excerpt: 'Understanding the advantages of offshore company formation in UAE and key factors to consider.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Michael Chen',
      date: 'November 30, 2024',
      readTime: '8 min read',
      category: 'Offshore'
    }
  ];

  const categories = [
    'All Posts',
    'Business Setup',
    'Tax & Compliance',
    'Visa Services',
    'Free Zones',
    'Banking',
    'Offshore'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-navy to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Business Insights & Updates
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Stay informed with the latest UAE business news, regulatory updates, and expert insights to help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-heading-dark mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-primary-red"></div>
          </div>

          <div className="bg-grey-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-heading-dark mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-grey-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-grey-500 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="text-primary-red font-semibold flex items-center group hover:text-primary-navy transition-colors">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-grey-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary-red text-white' 
                    : 'bg-white text-grey-600 hover:bg-primary-red hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-navy text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading-dark mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-grey-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-grey-500 mb-4">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-primary-red font-medium text-sm flex items-center group hover:text-primary-navy transition-colors">
                    Read More
                    <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-600">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay Updated with Business Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest UAE business updates, regulatory changes, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-grey-700 placeholder-grey-400 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-primary-navy text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;