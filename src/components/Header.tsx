
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="news-container flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-purple-700">BnBangla.news</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
            <li><Link to="/admin" className="hover:text-purple-600">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
