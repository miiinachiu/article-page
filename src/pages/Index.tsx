import ArticleHeader from "@/components/article-header";
import BreadcrumbNav from "@/components/breadcrumb-nav";
import ArticleHero from "@/components/article-hero";
import ArticleContent from "@/components/article-content";
import ReaderDeals from "@/components/reader-deals";
import ArticleFooter from "@/components/article-footer";

const Index = () => {
  const breadcrumbItems = [
    { label: "國外旅遊", href: "#" },
    { label: "日本旅遊", href: "#" },
    { label: "日本神社特色御守推薦" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ArticleHeader />
      <BreadcrumbNav items={breadcrumbItems} />
      <ArticleHero 
        title="日本神社特色御守推薦：鬼滅之刃、三麗鷗、富士山，造型御守一次收"
        category="日本旅遊"
        author="輕旅行_SASA"
        publishDate="2025.09.02"
        readTime="5 min read"
        tags={["日本", "神社", "御守", "文化", "旅遊"]}
      />
      <ArticleContent />
      <ReaderDeals />
      <ArticleFooter />
    </div>
  );
};

export default Index;
