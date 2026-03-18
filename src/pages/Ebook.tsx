import { useState } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";
import stefanAuthor from "@/assets/stefan-author.jpeg";

const chapters = [
  { number: "01", title: "Ways of Working", body: "A concrete look at how real working environments form — and what it takes to change them without losing people." },
  { number: "02", title: "Work the System, Not the People", body: "Why individual heroics don't scale. How to design the conditions where good work happens naturally." },
  { number: "03", title: "Quarterly Planning & Work Breakdown", body: "A practical model for connecting strategy to execution without drowning in process and governance." },
  { number: "04", title: "Making Strategy Stick", body: "What actually happens between the strategy deck and Monday morning. How to close the gap." },
  { number: "05", title: "Leadership in Complexity", body: "Leading when you can't predict outcomes. How to build trust, make decisions, and move forward without a playbook." },
  { number: "06", title: "Take Care of Yourself First", body: "The chapter no one writes. Why sustainable impact starts with how you manage yourself." },
];

const readers = [
  "Delivery leaders who've inherited a stalled programme and need to move it, not just report on it.",
  "Change managers in regulated industries who are tired of frameworks that don't survive contact with reality.",
  "Senior operators who want a book written by someone who's been in the room, not someone who's studied it.",
  "Leaders and coaches navigating complexity who want honest accounts, not polished success stories.",
];

export default function Ebook() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();
  const fade3 = useScrollFade();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block px-3 py-1 text-[11px] font-body font-semibold uppercase tracking-[0.15em] mb-6"
              style={{ backgroundColor: "var(--col-accent)", color: "var(--col-white)" }}
            >
              Chapter one available now
            </span>
            <h1 className="font-head text-[56px] md:text-[96px] uppercase leading-[0.92] mb-4" style={{ color: "var(--col-white)" }}>
              Notes
              <br />
              From The
              <br />
              Whiteboard
            </h1>
            <p className="font-head text-[20px] md:text-[24px] uppercase mb-8" style={{ color: "var(--col-primary)", lineHeight: 1.1 }}>
              Standalone chapters for leaders & change-drivers in complex organisations
            </p>
            <p className="font-body text-[17px] leading-relaxed mb-10 max-w-[50ch]" style={{ color: "rgba(247,246,245,0.6)" }}>
              Not a handbook. Not consultant-speak. Just what I've seen, tried, and learned over 20+ years inside complex organisations. Written for people who do the work.
            </p>

            {/* Sign-up form */}
            {!submitted ? (
              <div>
                <p className="font-body text-[14px] mb-3" style={{ color: "rgba(247,246,245,0.5)" }}>
                  Sign up to get the first chapter — Ways of Working — as a free PDF.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 text-[14px] font-body outline-none"
                    style={{
                      backgroundColor: "rgba(247,246,245,0.08)",
                      color: "var(--col-white)",
                      border: "1px solid rgba(197,195,198,0.15)",
                    }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-[13px] font-body font-semibold uppercase tracking-[0.08em] transition-opacity hover:opacity-90 shrink-0"
                    style={{ backgroundColor: "var(--col-accent)", color: "var(--col-white)" }}
                  >
                    Get chapter one free
                  </button>
                </form>
              </div>
            ) : (
              <div className="px-4 py-3 max-w-[480px]" style={{ backgroundColor: "rgba(197,195,198,0.08)", border: "1px solid rgba(197,195,198,0.15)" }}>
                <p className="font-body text-[15px]" style={{ color: "var(--col-white)" }}>
                  ✓ You're in. Check your inbox — the first chapter is on its way.
                </p>
              </div>
            )}
          </div>

          {/* Book cover */}
          <div className="relative p-[44px] md:p-[52px] flex flex-col justify-between overflow-hidden min-h-[450px]" style={{ backgroundColor: "#0a0a0a" }}>
            <span className="block text-[10px] font-body font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(197,195,198,0.3)" }}>
              Coming 2025
            </span>
            <h3 className="font-head text-[52px] md:text-[64px] uppercase leading-none my-auto" style={{ color: "var(--col-white)" }}>
              Notes
              <br />
              From The
              <br />
              Whiteboard
            </h3>
            <p className="text-[12px] font-body" style={{ color: "rgba(197,195,198,0.4)" }}>
              Stefan Eskam
            </p>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full" style={{ border: "1px solid rgba(197,195,198,0.06)" }} />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full" style={{ border: "1px solid rgba(197,195,198,0.06)" }} />
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade1.ref}>
          <div className={fade1.className}>
            <span className="eyebrow block mb-6">Six standalone chapters</span>
            <p className="font-body text-[17px] leading-relaxed mb-12 max-w-[60ch]" style={{ color: "var(--col-secondary)" }}>
              Each chapter follows the same structure: a concrete situation from practice → the problem behind the problem → what the theory says → what I did → what happened → what I'd do differently → a question for the reader.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--col-primary)" }}>
              {chapters.map((ch) => (
                <div key={ch.title} className="p-8" style={{ backgroundColor: "var(--col-bg)" }}>
                  <span className="block text-[11px] font-body font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "var(--col-accent)" }}>
                    Chapter {ch.number}
                  </span>
                  <h3 className="font-head text-[22px] uppercase mb-4" style={{ color: "var(--col-text)" }}>{ch.title}</h3>
                  <p className="font-body text-[14px] leading-relaxed" style={{ color: "var(--col-secondary)" }}>{ch.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto max-w-[700px]" ref={fade2.ref}>
          <div className={fade2.className}>
            <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>Who it's for</span>
            <div className="space-y-6">
              {readers.map((r, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0" style={{ color: "var(--col-accent)" }}>→</span>
                  <p className="font-body text-[16px] leading-relaxed" style={{ color: "rgba(197,195,198,0.7)" }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author note */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade3.ref}>
          <div className={`${fade3.className} grid grid-cols-1 md:grid-cols-2 gap-16 items-start`}>
            <div>
              <div className="w-24 h-24 mb-6 overflow-hidden">
                <img src={stefanAuthor} alt="Stefan Eskam" className="w-full h-full object-cover" />
              </div>
              <p className="font-body text-[15px] leading-relaxed" style={{ color: "var(--col-secondary)" }}>
                Stefan Eskam is a senior change and delivery leader with over twenty years of experience in financial services, MedTech, and large-scale product organisations. He lives and works in Copenhagen.
              </p>
            </div>
            <div>
              <p className="font-head text-[28px] md:text-[36px] uppercase leading-[0.95]" style={{ color: "var(--col-text)" }}>
                "I'm missing honest accounts from people who've been in it. Not frameworks. Not success stories without scars. Something that looks like reality."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-up CTA */}
      <section className="py-20 md:py-24 px-6 md:px-10" style={{ backgroundColor: "var(--col-accent)" }}>
        <div className="max-w-site mx-auto text-center">
          <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-4" style={{ color: "var(--col-white)" }}>
            Get chapter one.
          </h2>
          <p className="font-body text-[16px] mb-8 max-w-[45ch] mx-auto" style={{ color: "rgba(247,246,245,0.6)" }}>
            Sign up and be the first to read it when it drops.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 text-[14px] font-body outline-none"
                style={{
                  backgroundColor: "rgba(247,246,245,0.12)",
                  color: "var(--col-white)",
                  border: "1px solid rgba(247,246,245,0.2)",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 text-[13px] font-body font-semibold uppercase tracking-[0.08em] transition-opacity hover:opacity-90 shrink-0"
                style={{ backgroundColor: "var(--col-text)", color: "var(--col-white)" }}
              >
                Sign up
              </button>
            </form>
          ) : (
            <p className="font-body text-[16px]" style={{ color: "var(--col-white)" }}>
              ✓ You're in. Chapter one is on its way.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
