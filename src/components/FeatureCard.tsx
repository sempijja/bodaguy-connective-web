
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
  iconClassName,
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "group p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-md hover:border-bodaguy-200",
      className
    )}>
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-full bg-bodaguy-50 text-bodaguy-600 mb-5 transition-all duration-300 group-hover:bg-bodaguy-100",
        iconClassName
      )}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
