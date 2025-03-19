
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PageTransition from '@/components/PageTransition';
import { fetchBlogPosts } from '@/cms';
import type { BlogPost as BlogPostType } from '@/types/blog';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  
  useEffect(() => {
    const loadPost = async () => {
      setIsLoading(true);
      try {
        const posts = await fetchBlogPosts();
        const foundPost = posts.find(p => p.id === id);
        
        if (foundPost) {
          setPost(foundPost);
          
          // Find related posts (same category)
          const related = posts
            .filter(p => p.id !== id && p.category === foundPost.category)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (id) {
      loadPost();
    }
  }, [id]);
  
  // Format date
  const formattedDate = post?.date 
    ? new Date(post.date).toLocaleDateString('en-US', {
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
  
  if (!post) {
    return (
      <MainLayout>
        <div className="container max-w-4xl px-4 md:px-6 mx-auto py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
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
          <header className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            </div>
            
            <div className="relative z-10 container px-4 md:px-6 mx-auto text-center text-white">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4 text-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span className="inline-flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="inline-flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {post.readTime} read
                </span>
              </div>
            </div>
          </header>
          
          {/* Content */}
          <div className="container max-w-4xl px-4 md:px-6 mx-auto">
            {/* Author */}
            <div className="flex items-center py-6 border-b border-gray-200">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-gray-500">Author</div>
              </div>
              <div className="ml-auto">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none pt-8 prose-headings:text-gray-900 prose-p:text-gray-600">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <p className="text-gray-600">
                  {post.excerpt}
                </p>
              )}
            </div>
            
            {/* Tags */}
            <div className="mt-8 py-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  {post.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Delivery
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Uganda
                </span>
              </div>
            </div>
            
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.id}`}
                      className="group block"
                    >
                      <div className="aspect-w-16 aspect-h-9 mb-3 overflow-hidden rounded-lg">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-bodaguy-600 transition-colors">
                        {relatedPost.title}
                      </h3>
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

export default BlogPost;
