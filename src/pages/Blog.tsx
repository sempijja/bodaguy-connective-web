
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';
import BlogPostCard from '@/components/BlogPostCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PageTransition from '@/components/PageTransition';
import { fetchBlogPosts, fetchBlogCategories } from '@/cms';
import type { BlogPost } from '@/types/blog';

const Blog = () => {
  // Blog state
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load data from CMS
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [posts, cats] = await Promise.all([
          fetchBlogPosts(),
          fetchBlogCategories()
        ]);
        
        setBlogPosts(posts);
        setCategories(cats);
      } catch (error) {
        console.error('Failed to load blog data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);
  
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
          description="Insights, tips, and stories from the world of on-demand delivery in Uganda."
        />
        
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
              <BlogPostCard
                {...featuredPost}
                variant="featured"
                className="animate-fade-in"
              />
            </div>
          </section>
        )}
        
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
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-96 bg-gray-100 rounded-2xl animate-pulse"></div>
                ))}
              </div>
            ) : (
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
            )}
            
            {/* No results */}
            {filteredPosts.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
            
            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="mt-12 text-center">
                <Button
                  variant="outline"
                  className="rounded-full"
                >
                  Load More Articles
                </Button>
              </div>
            )}
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
