import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Link2, Bookmark } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface SocialShareProps {
  title: string;
  url?: string;
  className?: string;
}

const SocialShare = ({ title, url = window.location.href, className }: SocialShareProps) => {
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const bookmark = () => {
    toast({
      title: "Bookmarked!",
      description: "Article saved to your bookmarks.",
    });
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={shareToFacebook}
        className="gap-2"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareToTwitter}
        className="gap-2"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyLink}
        className="gap-2"
      >
        <Link2 className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={bookmark}
        className="gap-2"
      >
        <Bookmark className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SocialShare;