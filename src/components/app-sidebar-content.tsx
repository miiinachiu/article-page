import { Home, MapPin, Gift, Star, Settings } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import SidebarReaderDeals from "@/components/sidebar-reader-deals";
import RelatedReading from "@/components/related-reading";

const navigationItems = [
  { title: "首頁", url: "/", icon: Home },
  { title: "旅遊指南", url: "/guides", icon: MapPin },
  { title: "優惠專區", url: "/deals", icon: Gift },
  { title: "精選文章", url: "/featured", icon: Star },
  { title: "設定", url: "/settings", icon: Settings },
];

export function AppSidebarContent() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar className="border-r bg-background/95 backdrop-blur-sm">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>輕旅行導覽</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Related Reading Section - Only show when sidebar is expanded */}
        {!isCollapsed && (
          <SidebarGroup className="mt-6">
            <SidebarGroupContent>
              <div className="px-2">
                <RelatedReading />
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Reader Deals Section - Only show when sidebar is expanded */}
        {!isCollapsed && (
          <SidebarGroup className="mt-6">
            <SidebarGroupContent>
              <div className="px-2">
                <SidebarReaderDeals />
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}