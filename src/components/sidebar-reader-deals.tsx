import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SidebarReaderDeals = () => {
  const deals = [
    {
      id: 1,
      brand: "Agoda",
      title: "日本酒店專屬優惠",
      discount: "高達30%折扣",
      buttonText: "立即預訂",
      brandColor: "bg-[#FF6B35]",
      logoText: "Agoda"
    },
    {
      id: 2,
      brand: "Hotels.com", 
      title: "神社周邊住宿推薦",
      discount: "買10晚送1晚",
      buttonText: "查看優惠",
      brandColor: "bg-[#D32F2F]",
      logoText: "Hotels.com"
    },
    {
      id: 3,
      brand: "Booking.com",
      title: "溫泉旅館特價",
      discount: "限時8折",
      buttonText: "立即預訂",
      brandColor: "bg-[#003580]",
      logoText: "Booking.com"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          輕旅行讀者優惠
        </h3>
        <p className="text-xs text-muted-foreground">
          專屬優惠精選
        </p>
      </div>
      
      <div className="space-y-3">
        {deals.map((deal) => (
          <Card key={deal.id} className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2 px-3 pt-3">
              <div className="flex items-center justify-between mb-2">
                <div className={`${deal.brandColor} text-white px-2 py-1 rounded text-xs font-semibold`}>
                  {deal.logoText}
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {deal.discount}
                </Badge>
              </div>
              <CardTitle className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                {deal.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0 px-3 pb-3">
              <Button 
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs rounded-full transition-all duration-200 hover:shadow-sm"
              >
                {deal.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <p className="text-xs text-muted-foreground">
          * 優惠條件以各平台最新公告為準
        </p>
      </div>
    </div>
  );
};

export default SidebarReaderDeals;