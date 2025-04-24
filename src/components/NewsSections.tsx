
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArticleCard from "./ArticleCard";
import { Article } from "@/types/article";

interface NewsSectionsProps {
  articles: {
    [key: string]: Article[];
  };
}

const NewsSections = ({ articles }: NewsSectionsProps) => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || Object.keys(articles)[0];
  const categories = Object.keys(articles);

  return (
    <section className="news-container py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        {selectedCategory === 'সর্বশেষ' ? 'সর্বশেষ সংবাদ' : `${selectedCategory} সংবাদ`}
      </h2>
      
      <Tabs defaultValue={selectedCategory} value={selectedCategory} className="w-full">
        <TabsList className="mb-6 bg-transparent border-b w-full justify-start overflow-x-auto">
          {categories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="data-[state=active]:border-b-2 data-[state=active]:border-news-accent data-[state=active]:shadow-none rounded-none"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles[category].map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default NewsSections;
