
import { Article } from "@/types/article";
import ArticleCard from "./ArticleCard";

interface EditorsPicksProps {
  articles: Article[];
}

const EditorsPicks = ({ articles }: EditorsPicksProps) => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="news-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Editor's Picks</h2>
        <div className="space-y-6">
          {articles.map(article => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              variant="compact" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
