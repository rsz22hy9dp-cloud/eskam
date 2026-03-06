import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import stefanAuthor from "@/assets/stefan-author.jpeg";

const chapters = [
  { title: "The Execution Gap", body: "Why strategy fails to land. The real reasons programmes stall, and what the pattern looks like from inside the room." },
  { title: "Decisions, Not Meetings", body: "How to replace alignment theatre with actual decision-making. A practical model for cutting through ambiguity." },
  { title: "Building Delivery Rhythm", body: "Lightweight structures that create momentum without governance overhead. What to set up in week one." },
  { title: "Owning Complexity", body: "The difference between coordinating and owning. How to take accountability in environments where nobody else will." },
  { title: "Regulated Environments", body: "Specific approaches for financial services, MedTech, and other industries where compliance shapes every decision." },
  { title: "The First Two Weeks", body: "A concrete playbook for landing well. What to do, what to avoid, and how to build credibility fast." },
];

const readers = [
  "Delivery leaders who've inherited a stalled programme and need to move it, not just report on it.",
  "Change managers in regulated industries who are tired of frameworks that don't survive contact with reality.",
  "Senior operators who want a book written by someone who's been in the room, not someone who's studied it.",
  "Hiring managers who want to understand what good delivery leadership actually looks like.",
];

export default function Ebook() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();
  const fade3 = useScrollFade();

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>Practical guide</span>
            <h1 className="font-head text-[56px] md:text-[96px] uppercase leading-[0.92] mb-4" style={{ color: "var(--col-white)" }}>
              Notes
              <br />
              From The
              <br />
              Inside
            </h1>
            <p className="font-head text-[20px] md:text-[24px] uppercase mb-8" style={{ color: "var(--col-primary)", lineHeight: 1.1 }}>
              Change & Delivery Leadership in Complex Organisations
            </p>
            <p className="font-body text-[17px] leading-relaxed mb-10 max-w-[50ch]" style={{ color: "rgba(247,246,245,0.6)" }}>
              Everything I've learned about making delivery work in regulated, complex organisations. Written for people who do the work, not people who study it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Buy the ebook</Button>
              <Button variant="ghost">Read a sample</Button>
            </div>
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
              Inside
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
            <span className="eyebrow block mb-6">What's inside</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--col-primary)" }}>
              {chapters.map((ch) => (
                <div key={ch.title} className="p-8" style={{ backgroundColor: "var(--col-bg)" }}>
                  <div className="accent-line mb-6" />
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
                Stefan Eskam is a senior change and delivery leader with over twenty years of experience in financial services, MedTech, and large-scale product organisations. He lives and works in London.
              </p>
            </div>
            <div>
              <p className="font-head text-[28px] md:text-[36px] uppercase leading-[0.95]" style={{ color: "var(--col-text)" }}>
                "I wrote the book I wanted to read fifteen years ago. The one that tells you what actually happens, not what's supposed to."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase CTA */}
      <section className="py-20 md:py-24 px-6 md:px-10" style={{ backgroundColor: "var(--col-accent)" }}>
        <div className="max-w-site mx-auto text-center">
          <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-4" style={{ color: "var(--col-white)" }}>
            Get the book.
          </h2>
          <p className="font-body text-[18px] mb-8" style={{ color: "rgba(247,246,245,0.6)" }}>£19.99</p>
          <Button variant="primary" className="mb-4">Buy now</Button>
          <p className="font-body text-[12px]" style={{ color: "rgba(247,246,245,0.45)" }}>
            Also available as a PDF download.
          </p>
        </div>
      </section>
    </>
  );
}
