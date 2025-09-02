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
    <div className="relative overflow-hidden">
      {/* Hero Image with Gradient Overlay - 1200x630 aspect ratio */}
      <div className="relative aspect-[1200/630] w-full max-w-5xl mx-auto">
        <div className="container mx-auto px-6 lg:px-12 xl:px-24">
          <div className="relative h-full rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-end p-8">
              <div className="w-full">
                <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary-foreground backdrop-blur-sm">
                  {category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {title}
                </h1>
                
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-6 text-white/90">
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
                      <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/30 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Social Share */}
                <SocialShare title={title} className="gap-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;