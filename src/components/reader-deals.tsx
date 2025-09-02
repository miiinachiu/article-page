import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ReaderDeals = () => {
  const deals = [
    {
      id: 1,
      brand: "Agoda",
      title: "日本酒店專屬優惠",
      description: "預訂日本精選酒店享受高達30%折扣，包含東京、大阪、京都熱門住宿",
      discount: "高達30%折扣",
      validUntil: "2025.12.31",
      buttonText: "立即預訂",
      brandColor: "bg-[#FF6B35]",
      logoText: "Agoda"
    },
    {
      id: 2,
      brand: "Hotels.com",
      title: "神社周邊住宿推薦",
      description: "預訂神社附近精選住宿，體驗道地日本文化，享受免費取消政策",
      discount: "買10晚送1晚",
      validUntil: "2025.11.30",
      buttonText: "查看優惠",
      brandColor: "bg-[#D32F2F]",
      logoText: "Hotels.com"
    },
    {
      id: 3,
      brand: "Booking.com",
      title: "溫泉旅館特價",
      description: "精選日本傳統溫泉旅館，享受正宗日式服務與美食體驗",
      discount: "限時8折",
      validUntil: "2025.10.15",
      buttonText: "立即預訂",
      brandColor: "bg-[#003580]",
      logoText: "Booking.com"
    },
    {
      id: 4,
      brand: "Expedia",
      title: "機加酒套裝優惠",
      description: "預訂日本機票+酒店套裝，享受額外折扣與專屬服務",
      discount: "套裝優惠20%",
      validUntil: "2025.12.25",
      buttonText: "查看套裝",
      brandColor: "bg-[#FFC72C]",
      logoText: "Expedia"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            輕旅行讀者優惠
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            專為輕旅行讀者精選的住宿優惠，讓您的日本之旅更加精彩且經濟實惠
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {deals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 shadow-md bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`${deal.brandColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {deal.logoText}
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {deal.discount}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {deal.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {deal.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    有效期限：{deal.validUntil}
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-full transition-all duration-200 hover:shadow-md hover:scale-105"
                  >
                    {deal.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            * 優惠條件以各平台最新公告為準，輕旅行保留修改權利
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReaderDeals;