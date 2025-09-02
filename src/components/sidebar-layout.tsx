import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebarContent } from "@/components/app-sidebar-content";
import { Menu } from "lucide-react";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block">
          <AppSidebarContent />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Mobile sidebar trigger - only visible on mobile */}
          <div className="lg:hidden sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
            <div className="flex items-center justify-between p-4">
              <h1 className="text-lg font-semibold text-foreground">輕旅行</h1>
              <SidebarTrigger className="lg:hidden">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
            </div>
          </div>

          {/* Desktop sidebar trigger - only visible on desktop when sidebar is collapsed */}
          <div className="hidden lg:block sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
            <div className="flex items-center p-4">
              <SidebarTrigger className="mr-4">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              <h1 className="text-lg font-semibold text-foreground">輕旅行</h1>
            </div>
          </div>

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>
        </div>

        {/* Mobile sidebar overlay */}
        <div className="lg:hidden">
          <AppSidebarContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SidebarLayout;