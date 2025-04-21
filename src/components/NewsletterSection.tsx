
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit to a backend here
    setIsSubmitted(true);
  };
  
  return (
    <section id="subscribe" className="bg-news-primary text-white py-16">
      <div className="news-container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay informed with our newsletter</h2>
        <p className="mb-8 opacity-90">
          Get the latest news and in-depth analysis delivered to your inbox every morning.
        </p>
        
        {isSubmitted ? (
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Thank you for subscribing!</h3>
            <p>You'll receive our next newsletter in your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit"
              className="bg-white text-news-primary hover:bg-white/90 hover:text-news-primary"
            >
              Subscribe
            </Button>
          </form>
        )}
        
        <p className="mt-4 text-sm opacity-70">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
