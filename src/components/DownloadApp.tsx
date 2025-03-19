
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadAppProps {
  className?: string;
  variant?: "default" | "light" | "dark";
}

const DownloadApp = ({ className, variant = "default" }: DownloadAppProps) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-3",
      className
    )}>
      <Button 
        asChild
        className={cn(
          "rounded-full flex items-center gap-2 transition-all",
          variant === "light" && "bg-white text-gray-900 hover:bg-gray-100",
          variant === "dark" && "bg-gray-900 text-white hover:bg-gray-800",
          variant === "default" && "bg-bodaguy-600 text-white hover:bg-bodaguy-700"
        )}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5227 7.39016C18.2451 6.65625 18.6747 5.61259 18.5851 4.5C17.6247 4.53125 16.4918 5.06016 15.7456 5.81016C15.0653 6.46875 14.5513 7.5 14.6618 8.57266C15.7149 8.63906 16.7779 8.12406 17.5227 7.39016Z" fill="currentColor"/>
            <path d="M20.8293 16.6284C20.8714 19.9859 23.8143 21.1284 24.0001 21.2096C23.9951 21.2409 23.5516 22.7502 22.3759 24.3049C21.3823 25.6409 20.3528 26.9712 18.6973 26.9996C17.0799 27.0284 16.5304 26.1218 14.6968 26.1218C12.8632 26.1218 12.2595 26.9712 10.7305 26.9996C9.12845 27.0284 7.93312 25.5446 6.93111 24.2143C4.87892 21.4809 3.29548 16.6112 5.40314 13.2887C6.4483 11.6359 8.27486 10.5615 10.2596 10.5334C11.8242 10.5049 13.2889 11.4959 14.2526 11.4959C15.2162 11.4959 16.9953 10.2934 18.8774 10.4502C19.5947 10.4796 21.6469 10.7333 22.9998 12.5643C22.8897 12.6343 20.7948 13.8199 20.8293 16.6284Z" fill="currentColor"/>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-[10px] leading-none">Download on the</span>
            <span className="text-sm font-medium">App Store</span>
          </div>
        </a>
      </Button>
      
      <Button 
        asChild
        variant="outline"
        className={cn(
          "rounded-full flex items-center gap-2 transition-all",
          variant === "light" && "bg-white text-gray-900 hover:bg-gray-100 border-white",
          variant === "dark" && "bg-transparent text-white hover:bg-gray-800/30 border-gray-700",
          variant === "default" && "bg-white border-gray-200"
        )}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.10156 2.61328C1.8125 2.9375 1.65625 3.41406 1.65625 4.01562V19.9844C1.65625 20.5859 1.8125 21.0625 2.10156 21.3867L2.17188 21.4453L12.2344 11.3828V11.3125V11.2422L2.17188 1.17969L2.10156 2.61328Z" fill="#00D7FE"/>
            <path d="M15.7539 14.9062L12.2344 11.3867V11.3164V11.2461L15.7539 7.72656L15.8359 7.77344L19.9961 10.1445C21.1367 10.7812 21.1367 11.8516 19.9961 12.4961L15.8359 14.8672L15.7539 14.9062Z" fill="#FFBC00"/>
            <path d="M15.8359 14.8672L12.2344 11.2656L2.10156 21.3984C2.52344 21.8437 3.20312 21.8906 3.97656 21.4453L15.8359 14.8672Z" fill="#F3554C"/>
            <path d="M15.8359 7.76562L3.97656 1.18750C3.20312 0.742187 2.52344 0.789062 2.10156 1.23437L12.2344 11.3672L15.8359 7.76562Z" fill="#01E05A"/>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-[10px] leading-none">GET IT ON</span>
            <span className="text-sm font-medium">Google Play</span>
          </div>
        </a>
      </Button>
    </div>
  );
};

export default DownloadApp;
