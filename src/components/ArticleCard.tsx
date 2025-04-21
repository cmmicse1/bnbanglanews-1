
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: {
    id: string;
    category: string;
    title: string;
    excerpt?: string;
    image: string;
    author: string;
    date: string;
    featured?: boolean;
  };
  variant?: 'default' | 'compact';
}

const ArticleCard = ({ article, variant = 'default' }: ArticleCardProps) => {
  if (variant === 'compact') {
    return (
      <div className="article-card group">
        <Link to={`#article/${article.id}`} className="flex gap-4 items-start">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-24 h-24 object-cover rounded"
          />
          <div>
            <Badge variant="outline" className="mb-1 text-xs text-news-accent border-news-accent">
              {article.category}
            </Badge>
            <h3 className="font-bold group-hover:text-news-accent transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-news-muted mt-1">
              {article.author} • {article.date}
            </p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="article-card group">
      <Link to={`#article/${article.id}`}>
        <div className="mb-4">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-48 object-cover rounded"
          />
        </div>
        <Badge variant="outline" className="mb-2 text-xs text-news-accent border-news-accent">
          {article.category}
        </Badge>
        <h3 className="text-xl font-bold mb-2 group-hover:text-news-accent transition-colors line-clamp-2">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-gray-700 mb-3 line-clamp-2">{article.excerpt}</p>
        )}
        <p className="text-sm text-news-muted">
          {article.author} • {article.date}
        </p>
      </Link>
    </div>
  );
};

export default ArticleCard;
