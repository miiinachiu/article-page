import { Card } from "@/components/ui/card";
import { BannerAd, SidebarAd, InArticleAd } from "@/components/ad-placements";
import RelatedReading from "@/components/related-reading";
import ArticleImage from "@/components/article-image";
import omamoricollection from "@/assets/omamori-collection.jpg";
import templeInterior from "@/assets/temple-interior.jpg";
import blessingRitual from "@/assets/blessing-ritual.jpg";
import animeOmamori from "@/assets/anime-omamori.jpg";
import sanrioOmamori from "@/assets/sanrio-omamori.jpg";
import fujiOmamori from "@/assets/fuji-omamori.jpg";
import academicOmamori from "@/assets/academic-omamori.jpg";
import loveOmamori from "@/assets/love-omamori.jpg";
import businessOmamori from "@/assets/business-omamori.jpg";
import travelOmamori from "@/assets/travel-omamori.jpg";
import healthOmamori from "@/assets/health-omamori.jpg";
import kiyomizuTemple from "@/assets/kiyomizu-temple.jpg";
import sensojiTemple from "@/assets/sensoji-temple.jpg";

const ArticleContent = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <article className="prose prose-lg max-w-none">
            <div className="space-y-section">
              {/* Introduction */}
              <div className="text-lg leading-relaxed text-foreground/90">
                <p>
                  Japanese shrines offer more than spiritual solace—they provide unique omamori (お守り) charms that blend ancient traditions with modern designs. From anime collaborations to character-themed pieces, these protective talismans have evolved into collectible cultural artifacts that tell stories of Japan's rich heritage and contemporary creativity.
                </p>
                <p className="mt-4">
                  Whether you're seeking academic success, love fortune, or simply want to bring home a piece of Japanese spirituality, this comprehensive guide will help you discover the most fascinating omamori designs across Japan's most revered shrines.
                </p>
              </div>

              {/* Featured Image */}
              <ArticleImage
                src={omamoricollection}
                alt="Collection of colorful Japanese omamori charms displaying various traditional and modern designs"
                caption="A stunning collection of traditional and modern omamori showcasing the artistic diversity of Japanese protective charms"
              />

              {/* Section 1: The Sacred Origins of Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">The Sacred Origins of Omamori</h2>
                <p className="text-foreground/90 mb-4">
                  Omamori have protected the Japanese people for over a millennium, with roots tracing back to the Heian period (794-1185). These sacred amulets contain prayers or sutras written on paper or wood, blessed by shrine priests, and carefully sealed within beautiful fabric pouches.
                </p>
                <p className="text-foreground/90">
                  The word "omamori" literally means "to protect," and each charm is believed to hold the spiritual power of the deity (kami) from the shrine where it was blessed. Traditional colors like red, white, and gold carry specific meanings—red for protection against evil, white for purification, and gold for prosperity.
                </p>
                
                <ArticleImage
                  src={blessingRitual}
                  alt="Traditional Japanese shrine maiden performing omamori blessing ritual with sacred charms"
                  caption="A shrine maiden (miko) performing the traditional blessing ritual for omamori charms"
                  className="mt-element"
                />
              </section>

              {/* Section 2: Anime-Themed Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Anime-Themed Omamori: Modern Pop Culture Meets Ancient Tradition</h2>
                <p className="text-foreground/90 mb-4">
                  The fusion of traditional spirituality with modern anime culture has created some of the most sought-after omamori in Japan. Demon Slayer (Kimetsu no Yaiba) themed charms have become particularly popular, with designs featuring the distinctive patterns and colors of the anime's main characters.
                </p>
                <p className="text-foreground/90">
                  These anime omamori maintain their sacred purpose while appealing to younger generations and international fans. Popular designs include Tanjiro's checkered pattern for perseverance, Nezuko's bamboo motif for protection, and the Water Breathing technique symbols for strength and flow.
                </p>
                
                <Card className="overflow-hidden mt-6">
                   <img 
                     src={animeOmamori}
                     alt="Colorful anime-themed omamori featuring Demon Slayer character designs and motifs"
                     className="w-full h-[800px] object-cover"
                     style={{ maxWidth: '1200px', margin: '0 auto' }}
                   />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Anime-inspired omamori featuring popular Demon Slayer designs that blend traditional craftsmanship with modern pop culture
                    </p>
                  </div>
                </Card>
              </section>

              {/* Section 3: Sanrio Character Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Sanrio Character Omamori: Kawaii Culture in Sacred Form</h2>
                <p className="text-foreground/90 mb-4">
                  Sanrio characters like Hello Kitty, My Melody, and Kuromi have found their way into traditional Japanese spirituality through specially designed omamori. These collaborations represent the unique Japanese ability to blend the sacred with the cute (kawaii).
                </p>
                <p className="text-foreground/90">
                  Character omamori often focus on specific benefits—Hello Kitty for friendship and love, My Melody for sweet dreams and happiness, and Cinnamoroll for good luck and success. These designs appeal to both children and adults who grew up with these beloved characters.
                </p>
                
                <Card className="overflow-hidden mt-6">
                   <img 
                     src={sanrioOmamori}
                     alt="Cute Sanrio character themed omamori charms featuring Hello Kitty and other kawaii designs"
                     className="w-full h-[800px] object-cover"
                     style={{ maxWidth: '1200px', margin: '0 auto' }}
                   />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Adorable Sanrio character omamori that combine traditional Japanese spirituality with beloved kawaii culture
                    </p>
                  </div>
                </Card>
              </section>

              {/* In-Article Ad */}
              <InArticleAd />

              {/* Section 4: Mount Fuji Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Mount Fuji Omamori: Sacred Mountain Protection</h2>
                <p className="text-foreground/90 mb-4">
                  Mount Fuji, Japan's most sacred mountain, inspires some of the most beautiful omamori designs. These charms often feature the mountain's iconic silhouette in various artistic interpretations, from traditional woodblock print styles to modern minimalist designs.
                </p>
                <p className="text-foreground/90">
                  Fuji-themed omamori are particularly popular for protection during travel, achievement of goals, and overcoming challenges. The mountain's spiritual significance as a symbol of perseverance and reaching new heights makes these charms especially meaningful for those facing personal or professional challenges.
                </p>
                
                <Card className="overflow-hidden mt-6">
                   <img 
                     src={fujiOmamori}
                     alt="Mount Fuji themed omamori charms featuring the sacred mountain's silhouette in traditional designs"
                     className="w-full h-[800px] object-cover"
                     style={{ maxWidth: '1200px', margin: '0 auto' }}
                   />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Mount Fuji themed omamori showcasing the sacred mountain's spiritual power and artistic beauty
                    </p>
                  </div>
                </Card>
              </section>

              {/* Section 5: Academic Success Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Academic Success Omamori: The Student's Guardian</h2>
                <p className="text-foreground/90 mb-4">
                  Academic success omamori (gakugyō-jōju) are among the most popular types, especially during examination seasons. These charms often feature scholarly symbols like owls (wisdom), bamboo (growth and flexibility), and calligraphy brushes (learning and knowledge).
                </p>
                <p className="text-foreground/90">
                  The most famous academic omamori come from Kitano Tenmangu shrines, dedicated to Sugawara no Michizane, the deity of learning. Students across Japan visit these shrines before important exams, seeking divine assistance for their academic endeavors.
                </p>
                
                <Card className="overflow-hidden mt-6">
                   <img 
                     src={academicOmamori}
                     alt="Academic success omamori designed for students featuring scholarly symbols and educational motifs"
                     className="w-full h-[800px] object-cover"
                     style={{ maxWidth: '1200px', margin: '0 auto' }}
                   />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Academic success omamori featuring traditional symbols of learning and wisdom for student protection
                    </p>
                  </div>
                </Card>
              </section>

              {/* Section 6: Love and Relationship Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Love and Relationship Omamori: Matters of the Heart</h2>
                <p className="text-foreground/90 mb-4">
                  Love omamori (en-musubi) are designed to attract romantic relationships, strengthen existing bonds, or help find one's soulmate. These charms typically feature soft colors like pink, red, and white, often adorned with hearts, cherry blossoms, or paired symbols representing unity.
                </p>
                <p className="text-foreground/90">
                  Some love omamori are designed to be shared between couples, with matching designs that complete each other when brought together. Popular motifs include intertwined strings (representing the red thread of fate), paired animals, and traditional symbols of harmony and partnership.
                </p>
                
                <Card className="overflow-hidden mt-6">
                   <img 
                     src={loveOmamori}
                     alt="Love and relationship omamori charms in pink and red colors with romantic heart symbols"
                     className="w-full h-[800px] object-cover"
                     style={{ maxWidth: '1200px', margin: '0 auto' }}
                   />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Romantic love omamori designed to attract relationships and strengthen bonds between couples
                    </p>
                  </div>
                </Card>
              </section>

              {/* Section 7: Business Success Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Business Success Omamori: Prosperity and Career Growth</h2>
                <p className="text-foreground/90 mb-4">
                  Business success omamori (shōbai-hanjō) focus on career advancement, financial prosperity, and entrepreneurial success. These charms often incorporate gold elements, traditional prosperity symbols like coins or treasure ships, and powerful kanji characters representing wealth and success.
                </p>
                <p className="text-foreground/90">
                  Many business professionals keep these omamori in their briefcases, offices, or shops. The designs often feature the seven lucky gods (shichifukujin), especially Ebisu (patron of business) and Daikokuten (god of wealth), making them powerful symbols of commercial success.
                </p>
                
                <Card className="overflow-hidden mt-6">
                   <img 
                     src={businessOmamori}
                     alt="Business success omamori with gold and green colors featuring prosperity symbols for career growth"
                     className="w-full h-[800px] object-cover"
                     style={{ maxWidth: '1200px', margin: '0 auto' }}
                   />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Business prosperity omamori designed to attract wealth, career success, and entrepreneurial fortune
                    </p>
                  </div>
                </Card>
              </section>

              {/* Section 8: Travel Safety Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Travel Safety Omamori: Protection on the Journey</h2>
                <p className="text-foreground/90 mb-4">
                  Travel safety omamori (kōtsū-anzen) are essential companions for anyone embarking on journeys, whether daily commutes or international adventures. These charms often feature transportation symbols like airplanes, ships, cars, or traditional travel motifs.
                </p>
                <p className="text-foreground/90">
                  Modern travel omamori have adapted to include protection for air travel, with designs featuring wings, clouds, and aviation symbols. Many international travelers consider these charms essential accessories, believing they provide divine protection throughout their journeys.
                </p>
                
                <Card className="overflow-hidden mt-6">
                   <img 
                     src={travelOmamori}
                     alt="Travel safety omamori charms featuring airplane and road symbols for journey protection"
                     className="w-full h-[800px] object-cover"
                     style={{ maxWidth: '1200px', margin: '0 auto' }}
                   />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Travel protection omamori designed to ensure safe journeys and protect travelers during their adventures
                    </p>
                  </div>
                </Card>
              </section>

              {/* Section 9: Health and Wellness Omamori */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Health and Wellness Omamori: Physical and Spiritual Well-being</h2>
                <p className="text-foreground/90 mb-4">
                  Health omamori (kenk-anzen) focus on maintaining physical health, recovery from illness, and overall well-being. These charms often incorporate healing symbols like medicinal herbs, lotus flowers (representing purity and healing), and protective animals.
                </p>
                <p className="text-foreground/90">
                  During health challenges, many people turn to these specialized omamori for spiritual support alongside medical treatment. The designs emphasize renewal, strength, and the body's natural healing processes, providing comfort and hope during difficult times.
                </p>
                
                <Card className="overflow-hidden mt-6">
                   <img 
                     src={healthOmamori}
                     alt="Health and wellness omamori featuring medical symbols and healing herbs in green and white colors"
                     className="w-full h-[800px] object-cover"
                     style={{ maxWidth: '1200px', margin: '0 auto' }}
                   />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Health protection omamori designed to support physical wellness and spiritual healing
                    </p>
                  </div>
                </Card>
              </section>

              {/* Section 10: Famous Shrines for Omamori Collection */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Famous Shrines for Omamori Collection</h2>
                <p className="text-foreground/90 mb-4">
                  Certain shrines have become renowned for their unique and beautiful omamori designs. Each location offers charms that reflect local traditions, deities, and artistic styles, making shrine-hopping an essential activity for omamori collectors.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-semibold text-lg mb-2 text-primary">Kiyomizu-dera, Kyoto</h3>
                    <p className="text-foreground/90 mb-4">
                      Famous for its love omamori and seasonal designs that change with Kyoto's beautiful seasons. The temple's elevated position and UNESCO World Heritage status make its omamori particularly meaningful for visitors seeking both spiritual and cultural experiences.
                    </p>
                    
                    <Card className="overflow-hidden">
                      <img 
                        src={kiyomizuTemple}
                        alt="Kiyomizu-dera temple in Kyoto featuring traditional wooden architecture and seasonal beauty"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-muted-foreground">
                          The iconic Kiyomizu-dera temple, renowned for its love omamori and stunning seasonal views
                        </p>
                      </div>
                    </Card>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-semibold text-lg mb-2 text-primary">Senso-ji, Tokyo</h3>
                    <p className="text-foreground/90 mb-4">
                      Tokyo's oldest temple offers a wide variety of omamori, including unique designs featuring Tokyo landmarks. The bustling Asakusa district atmosphere adds to the spiritual energy of these traditional charms.
                    </p>
                    
                    <Card className="overflow-hidden">
                      <img 
                        src={sensojiTemple}
                        alt="Senso-ji temple in Tokyo with traditional pagoda and lanterns in the historic Asakusa district"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-muted-foreground">
                          Historic Senso-ji temple in Asakusa, offering diverse omamori designs reflecting Tokyo's spirit
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Section 11: Omamori Comparison Table */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Omamori Types Comparison Guide</h2>
                <p className="text-foreground/90 mb-6">
                  This comprehensive comparison table helps you choose the right omamori based on your specific needs and circumstances. Each type offers unique benefits and symbolic meanings rooted in Japanese spiritual traditions.
                </p>
                
                <Card className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="modern-table">
                    <thead>
                      <tr>
                        <th>Omamori Type</th>
                        <th>Primary Purpose</th>
                        <th>Best For</th>
                        <th>Common Colors</th>
                        <th>Popular Symbols</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Academic Success</td>
                        <td>Educational achievement</td>
                        <td>Students, exams</td>
                        <td>Blue, White, Gold</td>
                        <td>Owls, Books, Brushes</td>
                      </tr>
                      <tr>
                        <td>Love & Relationships</td>
                        <td>Romance, partnerships</td>
                        <td>Singles, couples</td>
                        <td>Pink, Red, White</td>
                        <td>Hearts, Cherry blossoms</td>
                      </tr>
                      <tr>
                        <td>Business Success</td>
                        <td>Career, prosperity</td>
                        <td>Professionals, entrepreneurs</td>
                        <td>Gold, Green, Red</td>
                        <td>Coins, Lucky gods</td>
                      </tr>
                      <tr>
                        <td>Health & Wellness</td>
                        <td>Physical well-being</td>
                        <td>Health recovery</td>
                        <td>Green, White, Blue</td>
                        <td>Herbs, Lotus, Cranes</td>
                      </tr>
                      <tr>
                        <td>Travel Safety</td>
                        <td>Journey protection</td>
                        <td>Travelers, commuters</td>
                        <td>Blue, Silver, White</td>
                        <td>Planes, Ships, Roads</td>
                      </tr>
                      <tr>
                        <td>Anime Themed</td>
                        <td>Pop culture connection</td>
                        <td>Fans, collectors</td>
                        <td>Character specific</td>
                        <td>Anime characters</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </Card>
              </section>

              {/* Section 12: Collecting and Care Guidelines */}
              <section>
                <h2 className="text-2xl font-bold mb-4 heading-gradient">Omamori Collecting and Care Guidelines</h2>
                <div className="bg-accent/10 rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Respectful Collecting</h3>
                    <p className="text-foreground/90">
                      Remember that omamori are sacred items first, collectibles second. Approach your collection with respect for the spiritual significance and cultural importance of these blessed charms.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Annual Renewal Tradition</h3>
                    <p className="text-foreground/90">
                      Traditional practice suggests replacing omamori annually, typically at New Year. Return old charms to the shrine for proper disposal through the omamori-burning ceremony (dondo-yaki).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Proper Display and Storage</h3>
                    <p className="text-foreground/90">
                      Keep omamori in clean, respectful places. Avoid placing them on the ground or in areas where they might be damaged. Many collectors use special displays or keep them in dedicated pouches.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Never Open the Pouch</h3>
                    <p className="text-foreground/90">
                      Traditional belief holds that opening an omamori releases its protective power. Keep the fabric pouch sealed to maintain the charm's spiritual effectiveness.
                    </p>
                  </div>
                </div>
              </section>

              <ArticleImage
                src={templeInterior}
                alt="Peaceful Japanese temple interior with traditional architecture and spiritual atmosphere"
                caption="The serene interior of a traditional Japanese temple where omamori receive their sacred blessings"
              />
            </div>
          </article>
          
          {/* Related Reading Section */}
          <RelatedReading />
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
                    <p className="font-medium text-sm line-clamp-2">2025出國打包行李必看：各國登機行李規範、最新行動電源攜帶限制</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">2025年9月壽星生日優惠餐廳！火鍋、燒烤、吃到飽，各式餐廳生日優惠一次看</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">2025社群爆紅美食推薦給你！黑衣人冰棒和奶油烤年糕超級夯</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">興安夜市美食推薦！不用出國，就能吃到最道地緬甸料理！</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm line-clamp-2">2025台北花海推薦！向日葵、圓仔花、波斯菊、菊花輪番綻放，捷運輕鬆到達</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Reader Deals Section */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-primary">輕旅行讀者優惠</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">A</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Agoda 日本酒店專屬優惠</p>
                        <p className="text-xs text-muted-foreground">高達30%折扣</p>
                      </div>
                    </div>
                    <a href="#" className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full hover:bg-primary/90 transition-colors">
                      立即預訂
                    </a>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#D32F2F] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">H</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Hotels.com 神社周邊住宿</p>
                        <p className="text-xs text-muted-foreground">買10晚送1晚</p>
                      </div>
                    </div>
                    <a href="#" className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full hover:bg-primary/90 transition-colors">
                      查看優惠
                    </a>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#003580] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">B</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Booking.com 溫泉旅館</p>
                        <p className="text-xs text-muted-foreground">限時8折優惠</p>
                      </div>
                    </div>
                    <a href="#" className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full hover:bg-primary/90 transition-colors">
                      立即預訂
                    </a>
                  </div>
                </div>
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