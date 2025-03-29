
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  centered?: boolean;
  backgroundImage?: string;
}

const PageHeader = ({
  title,
  description,
  className,
  children,
  centered = true,
  backgroundImage,
}: PageHeaderProps) => {
  // With background image
  if (backgroundImage) {
    return (
      <div className={cn(
        "relative min-h-[300px] md:min-h-[400px] bg-cover bg-center flex items-center",
        className
      )} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className={cn(
          "container px-4 md:px-6 py-16 md:py-24 relative z-10 text-white",
          centered && "text-center"
        )}>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>
          {description && (
            <p className="text-lg md:text-xl max-w-3xl opacity-90 mb-8">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }
  
  // Without background image (default)
  return (
    <div className={cn(
      "bg-white border-b border-gray-200",
      className
    )}>
      <div className={cn(
        "container px-4 md:px-6 py-16 md:py-24",
        centered && "text-center"
      )}>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 ">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
