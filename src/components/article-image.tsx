import { Card } from "@/components/ui/card";

interface ArticleImageProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

const ArticleImage = ({ src, alt, caption, className = "" }: ArticleImageProps) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <img 
        src={src}
        alt={alt}
        className="w-full h-[800px] object-cover"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        loading="lazy"
        decoding="async"
      />
      <div className="p-4">
        <p className="text-sm text-muted-foreground">
          {caption}
        </p>
      </div>
    </Card>
  );
};

export default ArticleImage;