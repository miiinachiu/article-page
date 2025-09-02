import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  image?: string;
  trending?: boolean;
}

const relatedArticles: RelatedArticle[] = [
  {
    id: "1",
    title: "Complete Guide to Japanese Temple Etiquette and Traditions",
    excerpt: "Master the art of respectful temple visits with our comprehensive guide to Japanese religious customs and spiritual practices.",
    category: "Culture",
    readTime: "8 min read",
    publishDate: "2 days ago",
    trending: true
  },
  {
    id: "2", 
    title: "Hidden Shrine Gems: 10 Off-the-Beaten-Path Sacred Sites in Japan",
    excerpt: "Discover lesser-known shrines that offer unique spiritual experiences away from the tourist crowds.",
    category: "Travel",
    readTime: "12 min read",
    publishDate: "5 days ago"
  },
  {
    id: "3",
    title: "Japanese Festivals Calendar: When and Where to Experience Traditional Celebrations",
    excerpt: "Plan your journey around Japan's most beautiful seasonal festivals and cultural celebrations.",
    category: "Events",
    readTime: "15 min read", 
    publishDate: "1 week ago"
  },
  {
    id: "4",
    title: "The Art of Japanese Calligraphy: Understanding Sacred Scripts and Symbols",
    excerpt: "Explore the spiritual significance behind the beautiful characters found on omamori and temple artifacts.",
    category: "Art",
    readTime: "10 min read",
    publishDate: "2 weeks ago",
    trending: true
  }
];

const RelatedReading = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 heading-gradient">Related Reading</h2>
      
      <div className="space-y-4">
        {relatedArticles.map((article) => (
          <div key={article.id} className="border-b border-border/30 pb-4 last:border-b-0">
            <h3 className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              {article.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedReading;