import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const categories = [
  { id: 'latest', name: 'সর্বশেষ', path: 'সর্বশেষ' },
  { id: 'politics', name: 'রাজনীতি', path: 'রাজনীতি' },
  { id: 'business', name: 'বাণিজ্য', path: 'বাণিজ্য' },
  { id: 'sports', name: 'খেলা', path: 'খেলা' },
  { id: 'entertainment', name: 'বিনোদন', path: 'বিনোদন' },
  { id: 'international', name: 'আন্তর্জাতিক', path: 'আন্তর্জাতিক' },
  { id: 'lifestyle', name: 'লাইফস্টাইল', path: 'লাইফস্টাইল' },
  { id: 'tech', name: 'প্রযুক্তি', path: 'প্রযুক্তি' }
];

const Header = () => {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleCategoryClick = (category: string) => {
    navigate(`/?category=${category}`);
  };

  return (
    <header className="bg-white shadow-sm">
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
          <ul className="flex items-center justify-between space-x-4 overflow-x-auto whitespace-nowrap">
            {categories.map(category => (
              <li key={category.id}>
                <button 
                  onClick={() => handleCategoryClick(category.path)} 
                  className="hover:text-purple-600 px-2 py-1 text-sm font-medium transition-colors"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
