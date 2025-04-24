
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleCategoryClick = (category: string) => {
    navigate(`/?category=${category.toLowerCase()}`);
  };

  return (
    <header className="bg-white">
      <div className="border-b">
        <div className="news-container py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">{today}</div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-purple-600">
                <Search className="h-5 w-5" />
              </button>
              <Link to="/admin" className="text-sm hover:text-purple-600">Admin</Link>
            </div>
          </div>
          <div className="text-center mb-4">
            <Link to="/" className="inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-purple-700 font-playfair">
                BnBangla.news
              </h1>
              <p className="text-sm text-gray-600 mt-1">সর্বশেষ বাংলা সংবাদ</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b">
        <nav className="news-container py-3">
          <ul className="flex items-center justify-center space-x-8 text-sm font-medium">
            <li>
              <button 
                onClick={() => handleCategoryClick('সর্বশেষ')} 
                className="hover:text-purple-600"
              >
                সর্বশেষ
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('রাজনীতি')} 
                className="hover:text-purple-600"
              >
                রাজনীতি
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('বাণিজ্য')} 
                className="hover:text-purple-600"
              >
                বাণিজ্য
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('খেলা')} 
                className="hover:text-purple-600"
              >
                খেলা
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('বিনোদন')} 
                className="hover:text-purple-600"
              >
                বিনোদন
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('আন্তর্জাতিক')} 
                className="hover:text-purple-600"
              >
                আন্তর্জাতিক
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
