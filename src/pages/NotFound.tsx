
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-news-primary mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you were looking for. The article might have been moved or deleted.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-news-primary text-white py-3 px-6 rounded-md hover:bg-news-secondary transition-colors"
          >
            Return to Home Page
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
