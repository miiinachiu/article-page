interface StructuredDataProps {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  image: string;
}

const StructuredData = ({ 
  title, 
  description, 
  author, 
  publishDate, 
  category, 
  tags, 
  image 
}: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "articleSection": category,
    "keywords": tags.join(", "),
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 800
    },
    "publisher": {
      "@type": "Organization",
      "name": "輕旅行",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;