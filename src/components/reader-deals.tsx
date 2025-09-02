import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ReaderDeals = () => {
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
    },
    {
      id: 4,
      brand: "Expedia",
      title: "機加酒套裝優惠",
      discount: "套裝優惠20%",
      buttonText: "查看套裝",
      brandColor: "bg-[#FFC72C]",
      logoText: "Expedia"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            輕旅行讀者優惠
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {deals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-md bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className={`${deal.brandColor} text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block`}>
                    {deal.logoText}
                  </div>
                  <CardTitle className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {deal.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs mb-3">
                    {deal.discount}
                  </Badge>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-1 rounded-full transition-all duration-200 hover:shadow-md hover:scale-105 w-full text-xs"
                  >
                    {deal.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReaderDeals;