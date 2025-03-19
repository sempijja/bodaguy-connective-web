
import { MapPin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

interface JobCardProps {
  title: string;
  location: string;
  department: string;
  type: string;
  description: string;
  onApply: () => void;
  className?: string;
  style?: CSSProperties;
}

const JobCard = ({
  title,
  location,
  department,
  type,
  description,
  onApply,
  className,
  style,
}: JobCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-bodaguy-200",
        className
      )}
      style={style}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between mb-4">
        <div>
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          <div className="flex items-center text-gray-500 mt-1">
            <MapPin size={16} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="rounded-full">
            {department}
          </Badge>
          <Badge variant="outline" className="rounded-full border-bodaguy-200 text-bodaguy-700 bg-bodaguy-50">
            {type}
          </Badge>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
      
      <Button 
        onClick={onApply}
        className="rounded-full bg-bodaguy-600 hover:bg-bodaguy-700"
      >
        Apply Now
      </Button>
    </div>
  );
};

export default JobCard;
