import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import SocialShare from "@/components/ui/social-share";
import heroImage from "@/assets/hero-shrine.jpg";

interface ArticleHeroProps {
  title: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags?: string[];
}

const ArticleHero = ({ 
  title, 
  category, 
  author, 
  publishDate, 
  readTime, 
  tags = [] 
}: ArticleHeroProps) => {
  return (
    <div className="container mx-auto px-6 lg:px-12 xl:px-24 py-8">
      <div className="max-w-4xl">
        <Badge variant="secondary" className="mb-4">
          {category}
        </Badge>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{publishDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{readTime}</span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Social Share */}
        <SocialShare title={title} className="gap-3" />
      </div>
    </div>
  );
};

export default ArticleHero;