
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import PageTransition from '@/components/PageTransition';
import { fetchNewsItems } from '@/cms';
import type { NewsItem as NewsItemType } from '@/types/news';

const NewsItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<NewsItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedNews, setRelatedNews] = useState<NewsItemType[]>([]);
  
  useEffect(() => {
    const loadNewsItem = async () => {
      setIsLoading(true);
      try {
        const items = await fetchNewsItems();
        const foundItem = items.find(item => item.id === id);
        
        if (foundItem) {
          setNewsItem(foundItem);
          
          // Find related news (same category)
          const related = items
            .filter(item => item.id !== id && item.category === foundItem.category)
            .slice(0, 2);
          setRelatedNews(related);
        }
      } catch (error) {
        console.error('Failed to load news item:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (id) {
      loadNewsItem();
    }
  }, [id]);
  
  // Format date
  const formattedDate = newsItem?.date 
    ? new Date(newsItem.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : '';
  
  if (isLoading) {
    return (
      <MainLayout>
        <div className="container max-w-4xl px-4 md:px-6 mx-auto py-12">
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-64 bg-gray-200 rounded-xl animate-pulse mt-8"></div>
            <div className="space-y-2 mt-8">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" style={{width: `${Math.random() * 40 + 60}%`}}></div>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  if (!newsItem) {
    return (
      <MainLayout>
        <div className="container max-w-4xl px-4 md:px-6 mx-auto py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">News Item Not Found</h1>
          <p className="text-gray-600 mb-8">The news item you're looking for doesn't exist or has been removed.</p>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/newsroom">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Newsroom
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <PageTransition>
        <article className="pb-16">
          {/* Hero Section */}
          <header className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
            <div className="absolute inset-0">
              <img 
                src={newsItem.image} 
                alt={newsItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            </div>
            
            <div className="relative z-10 container px-4 md:px-6 mx-auto text-center text-white">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                {newsItem.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-4xl mx-auto">
                {newsItem.title}
              </h1>
              
              <div className="flex items-center justify-center text-sm">
                <Calendar className="mr-1 h-4 w-4" />
                {formattedDate}
              </div>
            </div>
          </header>
          
          {/* Content */}
          <div className="container max-w-4xl px-4 md:px-6 mx-auto">
            {/* Navigation */}
            <div className="py-6 border-b border-gray-200 flex justify-between items-center">
              <Link 
                to="/newsroom" 
                className="inline-flex items-center text-gray-600 hover:text-bodaguy-600 transition-colors text-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Newsroom
              </Link>
              
              <Button variant="ghost" size="sm" className="rounded-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none pt-8 prose-headings:text-gray-900 prose-p:text-gray-600">
              {newsItem.content ? (
                <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
              ) : (
                <p className="text-gray-600">
                  {newsItem.excerpt}
                </p>
              )}
            </div>
            
            {/* Contact */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Media Contact</h3>
              <p className="text-gray-600 mb-4">
                For more information about this news, please contact our media relations team:
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-bodaguy-600">
                <a href="mailto:press@bodaguy.com" className="hover:text-bodaguy-700 transition-colors">
                  press@bodaguy.com
                </a>
                <a href="tel:+256700123456" className="hover:text-bodaguy-700 transition-colors">
                  +256 700 123456
                </a>
              </div>
            </div>
            
            {/* Related News */}
            {relatedNews.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedNews.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/newsroom/${related.id}`}
                      className="group flex gap-4 items-start"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-bodaguy-600 transition-colors mb-1">
                          {related.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {new Date(related.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </PageTransition>
    </MainLayout>
  );
};

export default NewsItemPage;
