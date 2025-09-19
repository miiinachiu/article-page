import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import SocialShare from "@/components/ui/social-share";
import { SidebarAd } from "@/components/ad-placements";
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
    <div className="container mx-auto px-6 pt-8 pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Badge variant="secondary" className="mb-4">
            {category}
          </Badge>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
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
          <SocialShare title={title} className="gap-3 mb-0" />
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            {/* Sidebar Ad */}
            <SidebarAd />
            
            {/* Hot Topics */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">熱門話題</h3>
              <div className="space-y-3">
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">2025年春節生肖吉祥物推薦</p>
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">日本櫻花季最佳賞花地點</p>
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">京都神社參拜完整指南</p>
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">東京近郊一日遊推薦</p>
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">大阪賞楓推薦</p>
                </a>
              </div>
            </Card>

            {/* Related Articles */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">相關文章</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">2025出國打包行李必看：各國登機行李規範、最新行動電源攜帶限制</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">2025年9月壽星生日優惠餐廳！火鍋、燒烤、吃到飽，各式餐廳生日優惠一次看</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">2025社群爆紅美食推薦給你！黑衣人冰棒和奶油烤年糕超級夯</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">興安夜市美食推薦！不用出國，就能吃到最道地緬甸料理！</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">2025台北花海推薦！向日葵、圓仔花、波斯菊、菊花輪番綻放，捷運輕鬆到達</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;