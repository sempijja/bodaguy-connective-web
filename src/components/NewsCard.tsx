
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  className?: string;
  variant?: 'default' | 'featured';
}

const NewsCard = ({
  id,
  title,
  excerpt,
  date,
  image,
  category,
  className,
  variant = 'default'
}: NewsCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <article 
      className={cn(
        "group overflow-hidden flex flex-col bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-bodaguy-200",
        variant === 'featured' && "md:flex-row",
        className
      )}
    >
      <div 
        className={cn(
          "relative overflow-hidden",
          variant === 'default' && "h-52",
          variant === 'featured' && "h-64 md:h-auto md:w-1/2"
        )}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-bodaguy-500 text-white text-xs font-medium rounded-full">
          {category}
        </span>
      </div>
      
      <div 
        className={cn(
          "flex flex-col p-6",
          variant === 'featured' && "md:w-1/2"
        )}
      >
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <CalendarIcon size={14} className="mr-1" />
          <span>{formattedDate}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-bodaguy-600 transition-colors mb-3">
          <Link to={`/newsroom/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="mt-auto">
          <Button 
            asChild 
            variant="outline"
            size="sm"
            className="rounded-full"
          >
            <Link to={`/newsroom/${id}`}>
              Read more
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
