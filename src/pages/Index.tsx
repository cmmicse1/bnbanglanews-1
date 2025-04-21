
import Header from "@/components/Header";
import BreakingNewsTicker from "@/components/BreakingNewsTicker";
import HeroSection from "@/components/HeroSection";
import NewsSections from "@/components/NewsSections";
import EditorsPicks from "@/components/EditorsPicks";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { breakingNews, featuredArticle, articlesByCategory, editorsPicks } from "@/data/mockArticles";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BreakingNewsTicker news={breakingNews} />
      <main>
        <HeroSection article={featuredArticle} />
        <NewsSections articles={articlesByCategory} />
        <EditorsPicks articles={editorsPicks} />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
