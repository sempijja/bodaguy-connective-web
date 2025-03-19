
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';
import NewsCard from '@/components/NewsCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageTransition from '@/components/PageTransition';

const Newsroom = () => {
  // News categories
  const categories = ['All', 'Press Releases', 'Company News', 'Product Updates', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Mock news data
  const news = [
    {
      id: '1',
      title: 'Bodaguy Raises $30M in Series B Funding to Expand Operations',
      excerpt: 'The new funding will enable Bodaguy to expand its services to 15 new cities across the United States and enhance its technology platform for both drivers and customers.',
      date: '2023-06-15',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
      category: 'Press Releases'
    },
    {
      id: '2',
      title: 'Bodaguy Launches New Same-Day Delivery Feature for Business Customers',
      excerpt: 'Business customers can now offer same-day delivery to their customers through Bodaguy\'s expanded delivery network and optimized routing technology.',
      date: '2023-05-22',
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80',
      category: 'Product Updates'
    },
    {
      id: '3',
      title: 'Bodaguy Partners with Major Retail Chain to Handle Last-Mile Delivery',
      excerpt: 'The partnership will allow the retail chain to offer faster delivery options to customers while leveraging Bodaguy\'s extensive network of delivery drivers.',
      date: '2023-04-18',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
      category: 'Company News'
    },
    {
      id: '4',
      title: 'Bodaguy Announces New Driver Benefits Program',
      excerpt: 'The new program offers drivers health insurance options, retirement benefits, and additional perks designed to improve driver satisfaction and retention.',
      date: '2023-03-30',
      image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=1200&q=80',
      category: 'Company News'
    },
    {
      id: '5',
      title: 'Bodaguy to Host Annual Driver Conference in Chicago',
      excerpt: 'The two-day event will feature workshops, networking opportunities, and sessions focused on maximizing earnings and improving the driver experience.',
      date: '2023-02-15',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=1200&q=80',
      category: 'Events'
    },
    {
      id: '6',
      title: 'Bodaguy App Gets Major Redesign for Enhanced User Experience',
      excerpt: 'The updated app features a more intuitive interface, faster performance, and new features designed to make package sending and tracking easier than ever.',
      date: '2023-01-10',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
      category: 'Product Updates'
    }
  ];
  
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
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <NewsCard
              {...featuredNews}
              variant="featured"
              className="animate-fade-in"
            />
          </div>
        </section>
        
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
            
            {/* Load More Button */}
            <div className="mt-12 text-center">
              <Button 
                variant="outline" 
                className="rounded-full"
              >
                Load More News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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
                For press inquiries, please contact our media relations team. We're happy to provide information, arrange interviews, and assist with any media-related requests.
              </p>
              <div className="pt-4">
                <a 
                  href="mailto:press@bodaguy.com" 
                  className="text-bodaguy-600 font-medium hover:text-bodaguy-700 transition-colors"
                >
                  press@bodaguy.com
                </a>
              </div>
              <div className="pt-2">
                <a 
                  href="tel:+18889876543" 
                  className="text-bodaguy-600 font-medium hover:text-bodaguy-700 transition-colors"
                >
                  +1 (888) 987-6543
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
