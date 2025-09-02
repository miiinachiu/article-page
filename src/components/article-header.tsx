import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";

const ArticleHeader = () => {
  return (
    <header className="bg-primary shadow-lg border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary-foreground tracking-tight">輕旅行</h1>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                景點
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                美食
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                住宿
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                登山健行
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                戶外休閒
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                國外旅遊
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                生活快訊
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                熱門話題
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                駐站玩家
              </a>
              <a href="#" className="px-3 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm font-medium transition-all duration-200 rounded-md">
                創作者星球
              </a>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/15 rounded-md transition-colors">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/15 rounded-md transition-colors">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">登入/註冊</span>
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden text-primary-foreground hover:bg-primary-foreground/15 rounded-md transition-colors">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;