import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

interface Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  featured_media?: number;
  author?: number;
  categories?: number[];
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
    'wp:author'?: Array<{
      id: number;
      name: string;
      slug: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubscribing(true);
    // TODO: Implement newsletter subscription logic
    console.log('Newsletter subscription for:', email);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      alert('Thank you for subscribing to our newsletter!');
    }, 1000);
  };

  // Utility function to strip HTML tags
  const stripHtmlTags = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Format date to readable string
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get featured image URL from post
  const getFeaturedImageUrl = (post: Post): string => {
    // Try to get the featured image from embedded data
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    
    if (featuredMedia?.source_url) {
      return featuredMedia.source_url;
    }
    
    // Fallback to a default image based on post ID for variety
    const fallbackImages = [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];
    
    return fallbackImages[post.id % fallbackImages.length];
  };

  // Get author name from post
  const getAuthorName = (post: Post): string => {
    const author = post._embedded?.['wp:author']?.[0];
    return author?.name || 'Bizvisor Team';
  };

  // Get category name from post
  const getCategoryName = (post: Post): string => {
    const categories = post._embedded?.['wp:term']?.[0];
    const category = categories?.find(cat => cat.slug !== 'uncategorized');
    return category?.name || 'Business';
  };

  // Fetch posts from WordPress API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Add _embed parameter to get featured media and author data
        const response = await fetch('https://www.bizvisor.ae/wp-json/wp/v2/posts?_embed');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
        }
        
        const data: Post[] = await response.json();
        console.log('Fetched posts with embedded data:', data);
        setPosts(data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Featured post (first post from the API)
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.slice(1);

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

      {/* Loading State */}
      {loading && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-red mx-auto mb-4"></div>
              <p className="text-grey-600">Loading blog posts...</p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="text-center">
              <div className="bg-alert-mistake/10 border border-alert-mistake/20 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-alert-mistake font-medium mb-2">Error Loading Posts</p>
                <p className="text-grey-600 text-sm">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 bg-primary-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Post */}
      {!loading && !error && featuredPost && (
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
                    src={getFeaturedImageUrl(featuredPost)} 
                    alt={stripHtmlTags(featuredPost.title.rendered)}
                    className="w-full h-64 lg:h-full object-cover"
                    onError={(e) => {
                      // Fallback to default image if the featured image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {getCategoryName(featuredPost)}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-heading-dark mb-4">
                    {stripHtmlTags(featuredPost.title.rendered)}
                  </h3>
                  <p className="text-grey-600 mb-6 leading-relaxed">
                    {stripHtmlTags(featuredPost.excerpt.rendered).substring(0, 200)}...
                  </p>
                  <div className="flex items-center text-sm text-grey-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{getAuthorName(featuredPost)}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{formatDate(featuredPost.date)}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>5 min read</span>
                  </div>
                  <a
                    href={featuredPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-red font-semibold flex items-center group hover:text-primary-navy transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {!loading && !error && remainingPosts.length > 0 && (
        <section className="py-20 bg-grey-50">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-heading-dark mb-2">Latest Articles</h2>
              <div className="w-20 h-1 bg-primary-red mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={getFeaturedImageUrl(post)} 
                      alt={stripHtmlTags(post.title.rendered)}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        // Fallback to default image if the featured image fails to load
                        const target = e.target as HTMLImageElement;
                        const fallbackImages = [
                          'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
                          'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
                          'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
                          'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
                          'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
                        ];
                        target.src = fallbackImages[post.id % fallbackImages.length];
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-navy text-white px-3 py-1 rounded-full text-xs font-medium">
                        {getCategoryName(post)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-heading-dark mb-3 line-clamp-2">
                      {stripHtmlTags(post.title.rendered)}
                    </h3>
                    <p className="text-grey-600 text-sm mb-4 line-clamp-3">
                      {stripHtmlTags(post.excerpt.rendered).substring(0, 150)}...
                    </p>
                    <div className="flex items-center text-xs text-grey-500 mb-4">
                      <User className="w-3 h-3 mr-1" />
                      <span className="mr-3">{getAuthorName(post)}</span>
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{formatDate(post.date)}</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>5 min read</span>
                    </div>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-red font-medium text-sm flex items-center group hover:text-primary-navy transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!loading && !error && posts.length === 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16">
            <div className="text-center">
              <p className="text-grey-600">No blog posts available at the moment.</p>
            </div>
          </div>
        </section>
      )}

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
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-grey-700 placeholder-grey-400 focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="bg-primary-navy text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold disabled:bg-grey-600 disabled:cursor-not-allowed"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;