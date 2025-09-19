import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ReaderDeals = () => {
  const deals = [
    {
      id: 1,
      platform: "klook",
      title: "東京神社御守購買體驗 門票",
      price: "4,000 日圓",
      image: "/api/placeholder/120/80"
    },
    {
      id: 2,
      platform: "KKday", 
      title: "京都清水寺新型態美術館門票 御守文化體驗",
      price: "4,000 日圓",
      image: "/api/placeholder/120/80"
    },
    {
      id: 3,
      platform: "Viator",
      title: "淺草寺御守製作工作坊 半日遊",
      price: "3,500 日圓", 
      image: "/api/placeholder/120/80"
    }
  ];

  return (
    <section className="py-8">
      <div className="mb-6">
        <div className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium inline-block mb-4">
          輕旅行讀者優惠
        </div>
      </div>
      
      <div className="space-y-6">
        {deals.map((deal) => (
          <div key={deal.id} className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
            <img 
              src={deal.image} 
              alt={deal.title}
              className="w-20 h-14 object-cover rounded flex-shrink-0"
            />
            <div className="flex-1">
              <div className="text-sm text-primary font-medium mb-1">
                {deal.platform}
              </div>
              <h3 className="font-medium text-foreground leading-snug">
                {deal.title}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold text-foreground">
                {deal.price}
              </div>
              <Button 
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-4 py-2 rounded font-medium"
              >
                查看詳情
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-foreground/60 mt-4">
        請在合作網頁上，確認最新費用和相關內容。
      </p>
    </section>
  );
};

export default ReaderDeals;