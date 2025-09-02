import GoogleAd from "@/components/ui/google-ad";
import { Card } from "@/components/ui/card";

// Replace these with your actual Google AdSense publisher ID and ad unit IDs
const AD_CLIENT = "ca-pub-XXXXXXXXXXXXXXXXX"; // Replace with your publisher ID
const AD_SLOTS = {
  banner: "XXXXXXXXXX", // Replace with your banner ad unit ID
  sidebar: "XXXXXXXXXX", // Replace with your sidebar ad unit ID
  inArticle: "XXXXXXXXXX", // Replace with your in-article ad unit ID
  footer: "XXXXXXXXXX" // Replace with your footer ad unit ID
};

export const BannerAd = ({ className = "" }: { className?: string }) => (
  <Card className={`p-4 bg-muted/30 ${className}`}>
    <div className="text-center">
      <p className="text-xs text-muted-foreground mb-2">Advertisement</p>
      <GoogleAd
        adClient={AD_CLIENT}
        adSlot={AD_SLOTS.banner}
        adFormat="auto"
        style={{ minHeight: '90px' }}
        className="w-full"
      />
    </div>
  </Card>
);

export const SidebarAd = ({ className = "" }: { className?: string }) => (
  <Card className={`p-4 bg-muted/30 ${className}`}>
    <div className="text-center">
      <p className="text-xs text-muted-foreground mb-2">Advertisement</p>
      <GoogleAd
        adClient={AD_CLIENT}
        adSlot={AD_SLOTS.sidebar}
        adFormat="auto"
        style={{ minHeight: '250px' }}
        className="w-full"
      />
    </div>
  </Card>
);

export const InArticleAd = ({ className = "" }: { className?: string }) => (
  <Card className={`p-4 bg-muted/30 my-8 ${className}`}>
    <div className="text-center">
      <p className="text-xs text-muted-foreground mb-2">Advertisement</p>
      <GoogleAd
        adClient={AD_CLIENT}
        adSlot={AD_SLOTS.inArticle}
        adFormat="auto"
        style={{ minHeight: '200px' }}
        className="w-full"
      />
    </div>
  </Card>
);

export const FooterAd = ({ className = "" }: { className?: string }) => (
  <Card className={`p-4 bg-muted/30 ${className}`}>
    <div className="text-center">
      <p className="text-xs text-muted-foreground mb-2">Advertisement</p>
      <GoogleAd
        adClient={AD_CLIENT}
        adSlot={AD_SLOTS.footer}
        adFormat="auto"
        style={{ minHeight: '100px' }}
        className="w-full"
      />
    </div>
  </Card>
);