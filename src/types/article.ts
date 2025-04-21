
export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  image: string;
  author: string;
  date: string;
  timeToRead?: string;
  featured?: boolean;
}
