import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ReaderDeals = () => {
  const experiences = [
    {
      id: 1,
      title: "東京神社御守製作體驗",
      description: "親手製作專屬御守，體驗日本傳統工藝文化",
      price: "¥3,500",
      duration: "2小時",
      rating: "4.8",
      reviews: "128",
      image: "/api/placeholder/300/200",
      category: "文化體驗"
    },
    {
      id: 2,
      title: "京都清水寺御守祈福之旅",
      description: "專業導遊帶領，深度了解御守文化與祈福儀式",
      price: "¥5,800",
      duration: "3小時",
      rating: "4.9",
      reviews: "256",
      image: "/api/placeholder/300/200",
      category: "神社參拜"
    },
    {
      id: 3,
      title: "淺草寺御守收藏導覽",
      description: "探索東京最古老寺廟的御守歷史與收藏秘訣",
      price: "¥2,800",
      duration: "1.5小時",
      rating: "4.7",
      reviews: "89",
      image: "/api/placeholder/300/200",
      category: "導覽體驗"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold heading-gradient mb-4">
            預定一個體驗
          </h2>
          <p className="text-foreground/70">
            深度體驗日本御守文化，創造難忘的旅行回憶
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg bg-card overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {experience.category}
                </Badge>
              </div>
              <CardContent className="p-5">
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {experience.title}
                </CardTitle>
                <CardDescription className="text-foreground/70 mb-4 line-clamp-2">
                  {experience.description}
                </CardDescription>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <span>⏱️ {experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-foreground/70">
                    <span>⭐ {experience.rating}</span>
                    <span>({experience.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary">
                    {experience.price}
                    <span className="text-sm font-normal text-foreground/70 ml-1">起</span>
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-md"
                  >
                    立即預訂
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