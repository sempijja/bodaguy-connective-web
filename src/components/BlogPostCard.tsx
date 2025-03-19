
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { CalendarIcon, Clock, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  className?: string;
  style?: React.CSSProperties;
  variant?: 'default' | 'featured';
}

const BlogPostCard = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
  author,
  className,
  style,
  variant = 'default'
}: BlogPostCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  if (variant === 'featured') {
    return (
      <Link to={`/blog/${id}`} className={cn(
        "group relative overflow-hidden block rounded-3xl",
        className
      )} style={style}>
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        
        <div className="relative z-10 p-8 flex flex-col h-full min-h-[420px]">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full self-start mb-4">
            {category}
          </span>
          
          <div className="mt-auto max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-white/80 mb-6 line-clamp-2">{excerpt}</p>
            
            <div className="flex items-center gap-4">
              <Avatar className="border-2 border-white">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-white font-medium">{author.name}</div>
                <div className="flex items-center text-white/60 text-sm">
                  <CalendarIcon size={14} className="mr-1" />
                  <span>{formattedDate}</span>
                  <span className="mx-2">•</span>
                  <Clock size={14} className="mr-1" />
                  <span>{readTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  return (
    <article className={cn(
      "group overflow-hidden flex flex-col bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-bodaguy-200",
      className
    )} style={style}>
      <Link to={`/blog/${id}`} className="relative overflow-hidden h-52">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-bodaguy-500 text-white text-xs font-medium rounded-full">
          {category}
        </span>
      </Link>
      
      <div className="flex flex-col p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-bodaguy-600 transition-colors mb-3">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{author.name}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{readTime} read</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
