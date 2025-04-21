
import { Newspaper } from "lucide-react";

interface BreakingNewsTickerProps {
  news: string[];
}

const BreakingNewsTicker = ({ news }: BreakingNewsTickerProps) => {
  return (
    <div className="bg-news-accent text-white py-2 overflow-hidden">
      <div className="news-container flex items-center">
        <div className="flex items-center gap-2 mr-4 whitespace-nowrap">
          <Newspaper className="h-4 w-4" />
          <span className="font-bold">BREAKING:</span>
        </div>
        <div className="overflow-hidden relative w-full">
          <div className="animate-ticker inline-block whitespace-nowrap">
            {news.map((item, index) => (
              <span key={index} className="mr-12 inline-block">
                {item}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {news.map((item, index) => (
              <span key={`dup-${index}`} className="mr-12 inline-block">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
