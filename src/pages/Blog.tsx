
import { useState } from 'react';
import { Search } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';
import BlogPostCard from '@/components/BlogPostCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PageTransition from '@/components/PageTransition';

const Blog = () => {
  // Blog categories
  const categories = ['All', 'Business', 'Product', 'Driver Tips', 'Industry', 'Technology'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Mock blog data
  const blogPosts = [
    {
      id: '1',
      title: 'How On-Demand Delivery is Reshaping Local Businesses',
      excerpt: 'The rise of on-demand delivery services has transformed how local businesses connect with customers. Learn how small businesses are adapting to this new reality and thriving.',
      date: '2023-06-10',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=1200&q=80',
      category: 'Business',
      author: {
        name: 'Alex Morgan',
        avatar: 'https://source.unsplash.com/random/100x100?face&sig=1'
      }
    },
    {
      id: '2',
      title: '10 Tips for Maximizing Your Earnings as a Bodaguy Driver',
      excerpt: 'Discover insider strategies for increasing your earnings, managing your time efficiently, and providing excellent service as a delivery driver on the Bodaguy platform.',
      date: '2023-05-25',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1600321148073-e65f1c8a524e?auto=format&fit=crop&w=1200&q=80',
      category: 'Driver Tips',
      author: {
        name: 'Michael Chen',
        avatar: 'https://source.unsplash.com/random/100x100?face&sig=2'
      }
    },
    {
      id: '3',
      title: 'The Evolution of Last-Mile Delivery Technology',
      excerpt: 'From manual routing to AI-powered delivery networks, explore how technology has revolutionized last-mile delivery and what innovations are on the horizon.',
      date: '2023-04-12',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1502810217690-e438106c1d63?auto=format&fit=crop&w=1200&q=80',
      category: 'Technology',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://source.unsplash.com/random/100x100?face&sig=3'
      }
    },
    {
      id: '4',
      title: 'Bodaguy Business: How to Set Up Corporate Delivery Services',
      excerpt: 'A comprehensive guide for business owners looking to integrate Bodaguy\'s delivery services into their operations to improve customer satisfaction and streamline logistics.',
      date: '2023-03-08',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=1200&q=80',
      category: 'Business',
      author: {
        name: 'David Williams',
        avatar: 'https://source.unsplash.com/random/100x100?face&sig=4'
      }
    },
    {
      id: '5',
      title: 'Sustainable Delivery: How Bodaguy is Reducing Its Carbon Footprint',
      excerpt: 'Learn about our initiatives to promote eco-friendly delivery options, including electric vehicle incentives, optimized routing, and packaging guidelines.',
      date: '2023-02-18',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1504541891213-1b1dfdadb739?auto=format&fit=crop&w=1200&q=80',
      category: 'Industry',
      author: {
        name: 'Emma Garcia',
        avatar: 'https://source.unsplash.com/random/100x100?face&sig=5'
      }
    },
    {
      id: '6',
      title: 'Behind the Scenes: How Bodaguy Matches Drivers with Deliveries',
      excerpt: 'A deep dive into the sophisticated algorithms and systems that power our delivery matching engine to ensure efficient, timely deliveries for all parties.',
      date: '2023-01-30',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      category: 'Product',
      author: {
        name: 'Ryan Cooper',
        avatar: 'https://source.unsplash.com/random/100x100?face&sig=6'
      }
    }
  ];
  
  // Featured post is the first one
  const featuredPost = blogPosts[0];
  
  // Filter posts by category
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);
  
  // Search functionality
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <MainLayout>
      <PageTransition>
        <PageHeader
          title="Blog"
          description="Insights, tips, and stories from the world of on-demand delivery."
        />
        
        {/* Featured Post */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <BlogPostCard
              {...featuredPost}
              variant="featured"
              className="animate-fade-in"
            />
          </div>
        </section>
        
        {/* Blog filters */}
        <section className="py-8 bg-gray-50 border-y border-gray-200">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Categories */}
              <div className="flex overflow-x-auto no-scrollbar py-2 space-x-2 animate-fade-in">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      activeCategory === category
                        ? 'bg-bodaguy-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Search */}
              <div className="flex w-full md:w-auto animate-fade-in">
                <div className="relative flex items-center w-full md:w-auto">
                  <Search className="absolute left-3 text-gray-400" size={18} />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10 rounded-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard
                  key={post.id}
                  {...post}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="rounded-full"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Subscribe to our newsletter
              </h2>
              <p className="text-gray-600">
                Get the latest insights, tips, and updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full"
                />
                <Button className="rounded-full bg-bodaguy-600 hover:bg-bodaguy-700">
                  Subscribe
                </Button>
              </div>
              <div className="pt-4 text-sm text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </div>
          </div>
        </section>
        
        {/* Topics Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Popular Topics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'For Drivers',
                    topics: ['Earnings Tips', 'Vehicle Maintenance', 'Customer Service', 'Efficient Routes', 'Driver App Guide']
                  },
                  {
                    title: 'For Businesses',
                    topics: ['Integration Guide', 'Customer Satisfaction', 'Logistics Solutions', 'Delivery Analytics', 'Case Studies']
                  },
                  {
                    title: 'Industry Insights',
                    topics: ['Market Trends', 'Technology', 'Regulations', 'Sustainability', 'Future of Delivery']
                  },
                  {
                    title: 'Company Updates',
                    topics: ['Product Features', 'Expansion News', 'Community Initiatives', 'Driver Stories', 'Company Culture']
                  }
                ].map((section, index) => (
                  <div key={index} className="space-y-4 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                    <Separator />
                    <ul className="space-y-2">
                      {section.topics.map((topic, i) => (
                        <li key={i}>
                          <a 
                            href="#" 
                            className="text-gray-600 hover:text-bodaguy-600 transition-colors flex items-center"
                          >
                            <span className="h-1 w-1 rounded-full bg-gray-400 mr-2"></span>
                            {topic}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default Blog;
