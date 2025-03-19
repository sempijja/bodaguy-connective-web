
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container px-4 md:px-6 py-12 text-center">
        <div className="space-y-8 max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-bodaguy-600 opacity-20">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 -mt-16">Page not found</h2>
          <p className="text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full bg-bodaguy-600 hover:bg-bodaguy-700">
              <Link to="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
