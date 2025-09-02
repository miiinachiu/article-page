import { FooterAd } from "@/components/ad-placements";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleFooter = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Ad */}
        <FooterAd className="mb-8" />
        
        {/* Article Actions */}
        <Card className="p-6 mb-8">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">Enjoyed this article?</h3>
            <div className="flex justify-center gap-4 mb-4">
              <Button variant="outline" className="gap-2">
                <Heart className="h-4 w-4" />
                Like
              </Button>
              <Button variant="outline" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Comment
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Help us create more content like this by engaging with our articles!
            </p>
          </div>
        </Card>

        {/* Site Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 輕旅行. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
            <a href="#" className="hover:text-foreground transition-colors">Advertise</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ArticleFooter;