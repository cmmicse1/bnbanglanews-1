
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const categories = [
  { name: "World", path: "#world" },
  { name: "Politics", path: "#politics" },
  { name: "Business", path: "#business" },
  { name: "Technology", path: "#technology" },
  { name: "Science", path: "#science" },
  { name: "Health", path: "#health" },
  { name: "Sports", path: "#sports" },
  { name: "Arts", path: "#arts" },
  { name: "Opinion", path: "#opinion" },
];

const Header = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b">
      <div className="news-container">
        {/* Top bar with date and secondary actions */}
        <div className="flex justify-between items-center py-2 text-sm">
          <p className="text-news-muted">{formattedDate}</p>
          <div className="flex items-center gap-4">
            <Link to="#subscribe" className="hover:text-news-accent">Subscribe</Link>
            <Link to="#login" className="hover:text-news-accent">Log In</Link>
          </div>
        </div>
        
        {/* Main header with logo */}
        <div className="py-6 flex justify-between items-center">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="py-6">
                  <h2 className="text-xl font-bold mb-6">Sections</h2>
                  <nav className="flex flex-col gap-4">
                    {categories.map((category) => (
                      <Link 
                        key={category.name}
                        to={category.path}
                        className="text-lg hover:text-news-accent"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <Link to="/" className="flex-1 md:flex-none flex justify-center md:justify-start">
            <h1 className="text-3xl md:text-4xl font-bold font-playfair text-news-primary">
              Quill Chronicle
            </h1>
          </Link>
          
          <div className="hidden md:block">
            <Button variant="outline" className="rounded-full">
              Subscribe Now
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex justify-center py-3 overflow-x-auto">
          <ul className="flex gap-8">
            {categories.map((category) => (
              <li key={category.name}>
                <Link 
                  to={category.path} 
                  className="text-news-secondary hover:text-news-accent font-medium whitespace-nowrap"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
