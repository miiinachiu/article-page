import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";

const ArticleHeader = () => {
  return (
    <header className="bg-primary shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-primary-foreground">輕旅行</h1>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors">
                首頁
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors">
                國外旅遊
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors">
                日本旅遊
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors">
                美食
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors">
                住宿
              </a>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">登入/註冊</span>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;