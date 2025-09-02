import { Card } from "@/components/ui/card";
import { BannerAd, SidebarAd, InArticleAd } from "@/components/ad-placements";
import omamoricollection from "@/assets/omamori-collection.jpg";
import templeInterior from "@/assets/temple-interior.jpg";

const ArticleContent = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Top Banner Ad */}
      <BannerAd className="mb-8" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <article className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="text-lg leading-relaxed text-foreground/90">
                <p>
                  Visiting Japanese shrines is a must-do experience for many travelers to Japan. Beyond the spiritual significance, many visitors are drawn to the unique and beautiful omamori (お守り) or protective charms that each shrine offers. These small tokens combine traditional craftsmanship with modern design, creating collectible items that serve as meaningful souvenirs.
                </p>
                <p className="mt-4">
                  From anime-themed designs like Demon Slayer to character collaborations with Sanrio, and iconic symbols like Mount Fuji, today's omamori showcase an incredible variety of artistic styles while maintaining their sacred purpose.
                </p>
              </div>

              {/* Featured Image */}
              <Card className="overflow-hidden">
                <img 
                  src={omamoricollection}
                  alt="Collection of colorful Japanese omamori charms"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    A beautiful collection of traditional omamori featuring various designs and purposes
                  </p>
                </div>
              </Card>

              {/* Article Sections */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">What Makes Omamori Special?</h2>
                <p className="text-foreground/90 mb-4">
                  Omamori are more than just decorative items. Each charm is blessed by shrine priests and contains prayers written on paper or wood, sealed inside a beautifully crafted fabric pouch. Traditional purposes include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li><strong>Academic Success</strong> - Popular among students before exams</li>
                  <li><strong>Health and Safety</strong> - Protection from illness and accidents</li>
                  <li><strong>Love and Relationships</strong> - Bringing good fortune in romance</li>
                  <li><strong>Business Success</strong> - Prosperity in work and finances</li>
                  <li><strong>Travel Safety</strong> - Protection during journeys</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Popular Modern Designs</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">Anime Collaborations</h3>
                    <p className="text-foreground/90">
                      Many shrines now offer omamori featuring popular anime characters, with Demon Slayer (Kimetsu no Yaiba) being particularly popular at certain temples.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">Character Themes</h3>
                    <p className="text-foreground/90">
                      Sanrio characters like Hello Kitty and My Melody have been incorporated into traditional designs, appealing to both children and adults.
                    </p>
                  </Card>
                </div>
              </section>

              {/* In-Article Ad */}
              <InArticleAd />

              <Card className="overflow-hidden">
                <img 
                  src={templeInterior}
                  alt="Peaceful Japanese temple interior"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    The serene interior of a traditional Japanese temple where omamori are blessed
                  </p>
                </div>
              </Card>

              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Where to Find the Best Omamori</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Kiyomizu-dera, Kyoto</h3>
                    <p className="text-foreground/90">Famous for love omamori and beautiful traditional designs with seasonal variations.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Senso-ji, Tokyo</h3>
                    <p className="text-foreground/90">Offers a wide variety of omamori including unique designs featuring Tokyo landmarks.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Fujisan Hongū Sengen Taisha</h3>
                    <p className="text-foreground/90">Specializes in Mount Fuji-themed omamori, perfect for climbing safety and achievement.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Collecting Tips</h2>
                <div className="bg-accent/30 rounded-lg p-6 space-y-3">
                  <p className="text-foreground/90">
                    <strong>Respect the Purpose:</strong> Remember that omamori are sacred items. While collecting is fine, treat them with respect.
                  </p>
                  <p className="text-foreground/90">
                    <strong>One Year Rule:</strong> Traditional belief suggests replacing omamori annually, returning old ones to the shrine.
                  </p>
                  <p className="text-foreground/90">
                    <strong>Display Considerations:</strong> Keep omamori in clean, respectful places. Avoid tossing them in bags with other items.
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            {/* Sidebar Ad */}
            <SidebarAd />
            
            {/* Hot Topics */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">熱門話題</h3>
              <div className="space-y-3">
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">2025年春節生肖吉祥物推薦</p>
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">日本櫻花季最佳賞花地點</p>
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">京都神社參拜完整指南</p>
                </a>
                <a href="#" className="block hover:text-primary transition-colors">
                  <p className="font-medium text-sm">東京近郊一日遊推薦</p>
                </a>
              </div>
            </Card>

            {/* Related Articles */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">相關文章</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">Japanese Tea Ceremony: A Guide to Traditional Culture</p>
                    <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">Best Time to Visit Japan: Seasonal Guide</p>
                    <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">Traditional Japanese Crafts You Must See</p>
                    <p className="text-xs text-muted-foreground mt-1">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <h3 className="font-bold text-lg mb-3 text-primary">Stay Updated</h3>
              <p className="text-sm text-foreground/90 mb-4">Get the latest travel tips and cultural insights delivered to your inbox.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="w-full bg-primary text-primary-foreground text-sm font-medium py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </Card>

            {/* Bottom Sidebar Ad */}
            <SidebarAd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;