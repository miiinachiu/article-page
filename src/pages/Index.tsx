import ArticleHeader from "@/components/article-header";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import ArticleHero from "@/components/article-hero";
import ArticleContent from "@/components/article-content";
import ReaderDeals from "@/components/reader-deals";
import ArticleFooter from "@/components/article-footer";
import StructuredData from "@/components/structured-data";
import heroImage from "@/assets/hero-shrine.jpg";

const Index = () => {
  const breadcrumbItems = [
    { label: "國外旅遊", href: "#" },
    { label: "日本旅遊", href: "#" },
    { label: "日本神社特色御守推薦" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData
        title="日本神社特色御守推薦：鬼滅之刃、三麗鷗、富士山，造型御守一次收"
        description="探索日本神社特色御守的魅力，從鬼滅之刃、三麗鷗到富士山造型，一次收集所有熱門御守設計與文化意義。"
        author="輕旅行_SASA"
        publishDate="2025-09-02"
        category="日本旅遊"
        tags={["日本", "神社", "御守", "文化", "旅遊"]}
        image={heroImage}
      />
      <ArticleHeader />
      <BreadcrumbNav items={breadcrumbItems} />
      <ArticleHero 
        title="日本神社特色御守推薦：鬼滅之刃、三麗鷗、富士山，造型御守一次收"
        category="日本旅遊"
        author="輕旅行_SASA"
        publishDate="2025.09.02"
        tags={["日本", "神社", "御守", "文化", "旅遊"]}
      />
      <ArticleContent />
      <div className="container mx-auto px-6">
        <ReaderDeals />
      </div>
      <ArticleFooter />
    </div>
  );
};

export default Index;
