import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";

const STORAGE_BASE = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/ebook`;

const chapters = [
  {
    number: "01",
    title: "Why Delivery Stalls",
    body: "Most programmes don't fail because of poor planning. They fail because no one owns the gap between the decision and the work. This chapter is about where that gap lives and how to close it fast.",
    file: "notes-from-the-whiteboard-ch1.pdf",
    filename: "Notes-from-the-Whiteboard-Ch1-Why-Delivery-Stalls.pdf",
  },
  {
    number: "02",
    title: "Clarifying Priorities at Speed",
    body: "When everything is a priority, nothing moves. This chapter is about how to have the conversation that cuts through it — without losing the room.",
    file: "notes-from-the-whiteboard-ch2.pdf",
    filename: "Notes-from-the-Whiteboard-Ch2-Clarifying-Priorities.pdf",
  },
  {
    number: "03",
    title: "Building Rhythm Without Overhead",
    body: "Status updates and governance layers rarely make delivery faster. This chapter covers what does — lightweight structures that teams will actually use.",
    file: "notes-from-the-whiteboard-ch3.pdf",
    filename: "Notes-from-the-Whiteboard-Ch3-Building-Rhythm.pdf",
  },
];

export default function Ebook() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();

  return (
    <>
      <Seo
        title="Notes From The Whiteboard — Free Ebook by Stefan Eskam"
        description="Three short chapters on why delivery stalls, how to clarify priorities at speed, and how to build rhythm without governance overhead. Free download."
        path="/ebook"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Notes From The Whiteboard",
          author: { "@type": "Person", name: "Stefan Eskam" },
          numberOfPages: 3,
          inLanguage: "en",
          url: "https://www.eskam.dk/ebook",
          description:
            "Three short chapters on why delivery stalls, how to clarify priorities at speed, and how to build rhythm without governance overhead.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
        }}
      />
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto">
          <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>
            Free ebook
          </span>
          <h1
            className="font-head text-[56px] md:text-[96px] uppercase leading-[0.92] mb-8"
            style={{ color: "var(--col-white)" }}
          >
            Notes
            <br />
            From The
            <br />
            Whiteboard
          </h1>
          <p
            className="font-body text-[17px] md:text-[20px] leading-relaxed max-w-[60ch]"
            style={{ color: "rgba(247,246,245,0.82)" }}
          >
            Three chapters on what actually works inside complex organisations. No theory.
            No framework introductions. Just what I have seen, tried, and found to be true.
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade1.ref}>
          <div className={`${fade1.className} flex flex-col gap-px`} style={{ backgroundColor: "var(--col-primary)" }}>
            {chapters.map((ch) => (
              <div
                key={ch.number}
                className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-12 items-start md:items-center"
                style={{ backgroundColor: "var(--col-bg)" }}
              >
                <span
                  className="font-head text-[64px] md:text-[88px] leading-none"
                  style={{ color: "var(--col-accent)" }}
                >
                  {ch.number}
                </span>
                <div>
                  <h2
                    className="font-head text-[26px] md:text-[34px] uppercase leading-tight mb-3"
                    style={{ color: "var(--col-text)" }}
                  >
                    {ch.title}
                  </h2>
                  <p
                    className="font-body text-[15px] md:text-[16px] leading-relaxed max-w-[60ch]"
                    style={{ color: "var(--col-secondary)" }}
                  >
                    {ch.body}
                  </p>
                </div>
                <a
                  href={`${STORAGE_BASE}/${ch.file}`}
                  download={ch.filename}
                  className="inline-block px-6 py-4 text-[12px] font-body font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-90 text-center shrink-0"
                  style={{ backgroundColor: "var(--col-accent)", color: "var(--col-white)" }}
                >
                  ↓ Download Chapter {ch.number} — Free PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-accent)" }}>
        <div className="max-w-site mx-auto text-center" ref={fade2.ref}>
          <div className={fade2.className}>
            <h2
              className="font-head text-[36px] md:text-[56px] uppercase leading-[1] mb-8 max-w-[24ch] mx-auto"
              style={{ color: "var(--col-white)" }}
            >
              If this is the kind of thinking you need on your next programme, let's talk.
            </h2>
            <Button variant="default" asChild>
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
