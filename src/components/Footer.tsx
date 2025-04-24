
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Rss } from "lucide-react";

const footerLinks = {
  "সংবাদ বিভাগ": [
    { name: "সর্বশেষ", path: "/?category=সর্বশেষ" },
    { name: "রাজনীতি", path: "/?category=রাজনীতি" },
    { name: "বাণিজ্য", path: "/?category=বাণিজ্য" },
    { name: "খেলা", path: "/?category=খেলা" },
    { name: "বিনোদন", path: "/?category=বিনোদন" },
    { name: "আন্তর্জাতিক", path: "/?category=আন্তর্জাতিক" },
  ],
  "সম্পাদকীয়": [
    { name: "আমাদের সম্পর্কে", path: "#about" },
    { name: "যোগাযোগ", path: "#contact" },
    { name: "বিজ্ঞাপন", path: "#advertise" },
    { name: "আর্কাইভ", path: "#archive" },
  ],
  "নীতিমালা": [
    { name: "গোপনীয়তা নীতি", path: "#privacy" },
    { name: "ব্যবহারের শর্তাবলী", path: "#terms" },
    { name: "কুকি নীতি", path: "#cookies" },
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="news-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/">
              <h2 className="text-2xl font-bold text-white mb-4">
                BnBangla.news
              </h2>
            </Link>
            <p className="mb-6 text-sm">
              ঢাকা, বাংলাদেশ<br />
              ফোন: +৮৮০ ২ XXXXXXXX<br />
              ইমেইল: news@bnbangla.news
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4 text-lg">{category}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} BnBangla.news. সর্বস্বত্ব সংরক্ষিত</p>
          <p className="mt-2 md:mt-0">বাংলাদেশের সর্বাধিক পঠিত অনলাইন সংবাদপত্র</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
