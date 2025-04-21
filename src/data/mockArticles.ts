
import { Article } from "@/types/article";

export const featuredArticle: Article = {
  id: "1",
  category: "World",
  title: "Global Summit Addresses Climate Crisis with Groundbreaking Agreement",
  excerpt: "World leaders have reached a historic consensus on climate action, pledging significant reductions in carbon emissions and establishing a fund for climate-vulnerable nations.",
  image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=1000",
  author: "Eleanor Richards",
  date: "April 21, 2025",
  timeToRead: "6 min read",
  featured: true
};

export const breakingNews: string[] = [
  "Stock markets see record gains as new economic policies take effect",
  "Major tech breakthrough could revolutionize renewable energy storage",
  "International peace talks yield promising results in ongoing regional conflict",
  "Scientists announce significant advance in treatment of neurological disorders"
];

export const articlesByCategory: { [key: string]: Article[] } = {
  "World": [
    {
      id: "2",
      category: "World",
      title: "European Union Expands with Two New Member States",
      excerpt: "After years of negotiations, two Balkan nations have officially joined the European Union, marking a significant expansion eastward.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000",
      author: "Marco Visconti",
      date: "April 20, 2025"
    },
    {
      id: "3",
      category: "World",
      title: "Pacific Nations Form New Alliance for Climate Resilience",
      excerpt: "Island nations across the Pacific have united to combat rising sea levels with innovative infrastructure and policy solutions.",
      image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1000",
      author: "Amara Latu",
      date: "April 19, 2025"
    },
    {
      id: "4",
      category: "World",
      title: "Diplomatic Breakthrough in Middle East Peace Process",
      excerpt: "Long-standing adversaries have agreed to new talks mediated by international partners, raising hopes for regional stability.",
      image: "https://images.unsplash.com/photo-1599933310642-8f07bdaa4363?q=80&w=1000",
      author: "Yasmin Al-Fayez",
      date: "April 18, 2025"
    }
  ],
  "Technology": [
    {
      id: "5",
      category: "Technology",
      title: "Quantum Computing Achieves Major Milestone in Error Correction",
      excerpt: "Scientists have reduced quantum computing error rates below a critical threshold, bringing practical applications closer to reality.",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1000",
      author: "Dr. Alex Chen",
      date: "April 20, 2025"
    },
    {
      id: "6",
      category: "Technology",
      title: "AI System Develops Novel Pharmaceutical Compound",
      excerpt: "A machine learning algorithm has identified a promising new antibiotic candidate effective against resistant bacteria.",
      image: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=1000",
      author: "Sophia Patel",
      date: "April 19, 2025"
    },
    {
      id: "7",
      category: "Technology",
      title: "Brain-Computer Interface Allows Paralyzed Patients to Control Robotic Arms",
      excerpt: "A breakthrough neural implant has restored functional movement capabilities to individuals with spinal cord injuries.",
      image: "https://images.unsplash.com/photo-1592819695396-064b9572a660?q=80&w=1000",
      author: "Dr. James Rodriguez",
      date: "April 18, 2025"
    }
  ],
  "Business": [
    {
      id: "8",
      category: "Business",
      title: "Sustainable Investment Funds Outperform Traditional Markets",
      excerpt: "ESG-focused investment portfolios have delivered superior returns for the third consecutive year, shifting market dynamics.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000",
      author: "Vivian Wong",
      date: "April 20, 2025"
    },
    {
      id: "9",
      category: "Business",
      title: "Global Supply Chain Reforms Address Pandemic-Era Vulnerabilities",
      excerpt: "Major corporations have implemented resilient supply chain strategies to prevent future disruptions like those seen in 2020-22.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1000",
      author: "Robert Kiyomura",
      date: "April 19, 2025"
    },
    {
      id: "10",
      category: "Business",
      title: "Tech Startup Valuation Reaches Record $50 Billion After Latest Funding Round",
      excerpt: "The AI infrastructure company has become the most valuable pre-IPO startup in history after securing massive investment.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000",
      author: "Taylor Michaels",
      date: "April 18, 2025"
    }
  ]
};

export const editorsPicks: Article[] = [
  {
    id: "11",
    category: "Arts",
    title: "Resurgence of Traditional Crafts Among Millennials Drives Cultural Renaissance",
    image: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=1000",
    author: "Isabella Martinez",
    date: "April 19, 2025"
  },
  {
    id: "12",
    category: "Science",
    title: "Ancient Human Species Discovered in Remote Cave System Rewrites Evolutionary Timeline",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1000",
    author: "Dr. Michael Leakey",
    date: "April 18, 2025"
  },
  {
    id: "13",
    category: "Health",
    title: "Revolutionary Diet Study Challenges Conventional Wisdom on Nutrition and Aging",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000",
    author: "Dr. Nina Patel",
    date: "April 17, 2025"
  },
  {
    id: "14",
    category: "Opinion",
    title: "The Case for a Four-Day Workweek: Economic and Social Benefits",
    image: "https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=1000",
    author: "Julian Frost",
    date: "April 16, 2025"
  }
];
