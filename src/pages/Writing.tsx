import { Link } from "react-router-dom";
import { useScrollFade } from "@/hooks/useScrollFade";
import avatar from "@/assets/character-coffee.jpeg";
import { articles, type Article } from "@/data/articles";

function ArticleRow({ article, isLast }: { article: Article; isLast: boolean }) {
  const fade = useScrollFade();
  const href = `/writing/${article.slug}`;
  return (
    <article
      ref={fade.ref}
      className={`${fade.className} ${!isLast ? "border-b" : ""} py-12 md:py-16`}
      style={{ borderColor: "rgba(26,26,26,0.12)" }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <Link
          to={href}
          className="block shrink-0 w-full md:w-[300px] h-[300px] overflow-hidden"
        >
          <img
            src={article.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <p
            className="font-body text-[11px] uppercase tracking-[0.15em] mb-4"
            style={{ color: "rgba(26,26,26,0.55)" }}
          >
            {article.date}
          </p>
          <h2
            className="font-head text-[28px] md:text-[40px] uppercase leading-[0.95] mb-5"
            style={{ color: "var(--col-text)" }}
          >
            <Link to={href} className="hover:opacity-70 transition-opacity">
              {article.title}
            </Link>
          </h2>
          <p
            className="font-body text-[16px] leading-relaxed mb-6 max-w-[60ch]"
            style={{ color: "rgba(26,26,26,0.75)" }}
          >
            {article.excerpt}
          </p>
          <Link
            to={href}
            className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
            style={{ color: "var(--col-text)" }}
          >
            Read more <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Writing() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--col-text)" }}
      >
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>
              Writing
            </span>
            <h1
              className="font-head text-[48px] md:text-[96px] uppercase leading-[0.92] mb-8"
              style={{ color: "var(--col-white)" }}
            >
              Writing
            </h1>
            <p
              className="font-body text-[17px] leading-relaxed max-w-[58ch]"
              style={{ color: "rgba(247,246,245,0.7)" }}
            >
              Observations from twenty years working across complex organisations. No
              frameworks. No conclusions. Just things I've noticed that turned out to matter.
            </p>
          </div>
          <div className="flex justify-end items-end h-full">
            <img
              src={avatar}
              alt="Stefan Eskam"
              className="block w-full max-w-[300px] h-auto"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </section>

      {/* Article list */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "var(--col-bg)" }}
      >
        <div className="max-w-site mx-auto">
          {articles.map((a, i) => (
            <ArticleRow key={a.slug} article={a} isLast={i === articles.length - 1} />
          ))}
        </div>
      </section>
    </>
  );
}
