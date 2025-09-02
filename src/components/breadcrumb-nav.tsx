import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => {
  return (
    <nav className="bg-secondary/50 border-b">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          <Home className="h-4 w-4 text-muted-foreground" />
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;