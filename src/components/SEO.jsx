import { useEffect } from "react";

const SEO = ({
  title,
  description,
  type = "website",
  image = null,
  url = null,
  article = null,
}) => {
  useEffect(() => {
    const siteName = "Ege Olgun";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultUrl = "https://egeolgun.com";
    const defaultImage = "https://egeolgun.com/og-image.jpg"; // Replace with your actual image URL later

    // Update <title> and <meta> tags
    document.title = fullTitle;

    // Manage meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        description ||
          "Portfolio of Ege Olgun – Mobile App Developer, Web Developer, SEO & Google AdSense Expert."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        description ||
        "Portfolio of Ege Olgun – Mobile App Developer, Web Developer, SEO & Google AdSense Expert.";
      document.head.appendChild(meta);
    }

    // JSON-LD Schema
    const jsonLd = buildJsonLd({
      title: fullTitle,
      description,
      type,
      image: image || defaultImage,
      url: url || defaultUrl,
      article,
      siteName,
    });

    // Remove existing schema
    const existing = document.getElementById("json-ld");
    if (existing) existing.remove();

    // Inject new schema
    const script = document.createElement("script");
    script.id = "json-ld";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const cleanup = document.getElementById("json-ld");
      if (cleanup) cleanup.remove();
    };
  }, [title, description, type, image, url, article]);

  return null;
};

// Build JSON-LD based on type
const buildJsonLd = ({
  title,
  description,
  type,
  image,
  url,
  article,
  siteName,
}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": url.split("/").slice(0, 3).join("/") + "/",
      name: siteName,
      url: url.split("/").slice(0, 3).join("/") + "/",
    },
    datePublished: article?.date,
    author: article
      ? {
          "@type": "Person",
          name: siteName,
          url: url.split("/").slice(0, 3).join("/") + "/",
        }
      : undefined,
    image: image
      ? {
          "@type": "ImageObject",
          url: image,
          width: "1200",
          height: "630",
        }
      : undefined,
  };

  // Override for blog posts
  if (type === "article" && article) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      image: image,
      author: {
        "@type": "Person",
        name: siteName,
        url: "https://egeolgun.com",
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: "https://egeolgun.com/logo.png", // Replace with your logo
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      datePublished: article.date,
      dateModified: article.date, // Update if you edit posts
      wordCount: article.readTime?.replace(" min read", "") * 200 || 1000, // Rough estimate
    };
  }

  // Default fallback
  return baseSchema;
};

export default SEO;
