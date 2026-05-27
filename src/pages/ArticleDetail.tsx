import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { articles } from "@/data/articles";
import { Seo } from "@/components/Seo";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <Navigate to="/writing" replace />;

  return (
    <article
      className="py-12 md:py-16 px-6 md:px-10"
      style={{ backgroundColor: "var(--col-bg)" }}
    >
      <Seo
        title={`${article.title} — Stefan Eskam`}
        description={article.excerpt}
        path={`/writing/${article.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          author: { "@type": "Person", name: "Stefan Eskam", url: "https://www.eskam.dk/about" },
          datePublished: article.date,
          url: `https://www.eskam.dk/writing/${article.slug}`,
          mainEntityOfPage: `https://www.eskam.dk/writing/${article.slug}`,
        }}
      />
      <div className="max-w-site mx-auto mb-10">
        <Link
          to="/writing"
          className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
          style={{ color: "var(--col-text)" }}
        >
          <span aria-hidden>←</span> Back to Writing
        </Link>
      </div>

      <div className="max-w-[68ch] mx-auto">
        <img
          src={article.image}
          alt=""
          className="block mx-auto w-full max-w-[400px] h-auto mb-12"
        />
        <p
          className="font-body text-[11px] uppercase tracking-[0.15em] mb-4"
          style={{ color: "rgba(26,26,26,0.55)" }}
        >
          {article.date}
        </p>
        <h1
          className="font-head text-[40px] md:text-[72px] uppercase leading-[0.92] mb-10"
          style={{ color: "var(--col-text)" }}
        >
          {article.title}
        </h1>
        <div className="space-y-6 pb-24">
          {article.body.map((p, i) => (
            <p
              key={i}
              className="font-body text-[17px] leading-relaxed"
              style={{ color: "var(--col-text)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
