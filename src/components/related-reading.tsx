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
    <section className="my-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-bold heading-gradient">Related Reading</h2>
        <TrendingUp className="h-6 w-6 text-primary" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedArticles.map((article) => (
          <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {article.category}
                </Badge>
                {article.trending && (
                  <Badge variant="outline" className="text-accent border-accent/50 bg-accent/10">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
              
              <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{article.publishDate}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          View All Articles
        </button>
      </div>
    </section>
  );
};

export default RelatedReading;