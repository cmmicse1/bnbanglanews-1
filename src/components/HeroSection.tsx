
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

interface HeroSectionProps {
  article: {
    category: string;
    title: string;
    excerpt?: string;
    image: string;
    author: string;
    date: string;
    timeToRead?: string;
  };
}

const HeroSection = ({ article }: HeroSectionProps) => {
  return (
    <section className="news-container py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <Badge variant="outline" className="mb-4 text-news-accent border-news-accent">
            {article.category}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {article.title}
          </h2>
          {article.excerpt && (
            <p className="text-lg mb-4 text-gray-700">
              {article.excerpt}
            </p>
          )}
          <div className="flex items-center text-sm text-news-muted mb-6">
            <span className="mr-4">By {article.author}</span>
            <span className="mr-4">{article.date}</span>
            {article.timeToRead && (
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.timeToRead}
              </span>
            )}
          </div>
          <Link 
            to="#article" 
            className="inline-block border-b-2 border-news-accent text-news-primary font-medium hover:text-news-accent transition-colors"
          >
            Continue Reading
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
