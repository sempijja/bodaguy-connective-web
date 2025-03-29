
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';
import NewsCard from '@/components/NewsCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageTransition from '@/components/PageTransition';
import { fetchNewsItems, fetchNewsCategories } from '@/cms';
import type { NewsItem } from '@/types/news';

const Newsroom = () => {
  // News state
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load data from CMS
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [items, cats] = await Promise.all([
          fetchNewsItems(),
          fetchNewsCategories()
        ]);
        
        setNews(items);
        setCategories(cats);
      } catch (error) {
        console.error('Failed to load news data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Filter news by category
  const filteredNews = activeCategory === 'All'
    ? news
    : news.filter(item => item.category === activeCategory);
  
  // Featured news (first item)
  const featuredNews = news[0];
  
  return (
    <MainLayout>
      <PageTransition>
        <PageHeader
          title="Newsroom"
          description="Stay up to date with the latest news, updates, and announcements from Bodaguy."
        />
        
        {/* Featured News Section */}
        {featuredNews && (
          <section className="py-12 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
              <NewsCard
                {...featuredNews}
                variant="featured"
                className="animate-fade-in"
              />
            </div>
          </section>
        )}
        
        {/* News Filter & Subscribe */}
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
              
              {/* Subscribe */}
              <div className="flex w-full md:w-auto animate-fade-in">
                <div className="flex flex-1 md:flex-initial">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="rounded-l-full border-r-0 focus-visible:ring-0 focus-visible:ring-transparent"
                  />
                  <Button className="rounded-r-full bg-bodaguy-600 hover:bg-bodaguy-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* News Grid */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-80 bg-gray-100 rounded-2xl animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item, index) => (
                  <NewsCard
                    key={item.id}
                    {...item}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
              </div>
            )}
            
            {/* No results */}
            {filteredNews.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No news found</h3>
                <p className="text-gray-600">
                  Try selecting a different category to find what you're looking for.
                </p>
              </div>
            )}
            
            {/* Load More Button */}
            {filteredNews.length > 0 && (
              <div className="mt-12 text-center">
              <Button onClick={() => window.location.href = '/blog'}
                variant="outline" 
                className="rounded-full"
              >
                Load More News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Media Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Media Contact
              </h2>
              <p className="text-gray-600">
                For press inquiries, please contact our media relations team in Kampala. We're happy to provide information, arrange interviews, and assist with any media-related requests.
              </p>
              <div className="pt-4">
                <a 
                  href="mailto:bodaguyfrieght@gmail.com" 
                  className="text-bodaguy-600 font-medium hover:text-bodaguy-700 transition-colors"
                >
                  bodaguyfrieght@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <a 
                  href="tel:0393102562" 
                  className="text-bodaguy-600 font-medium hover:text-bodaguy-700 transition-colors"
                >
                  0393102562
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default Newsroom;
