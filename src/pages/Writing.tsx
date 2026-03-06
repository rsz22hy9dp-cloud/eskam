import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import postTeamCheckin from "@/assets/post-team-checkin.png";

const articles = [
  {
    date: "March 2025",
    title: "The check-in that had no reason to exist",
    excerpt: "People were doing their own thing. Busy, but not together. The goal was either missing or so vague it meant nothing. One question changed the room.",
    slug: "#",
    image: postTeamCheckin,
    body: `I was in a team check-in that had no real reason to exist.

People were doing their own thing. Busy, but not together. The goal was either missing or so vague it meant nothing. There was no accountability, no collaboration — and honestly, no reason for anyone to be in that room.

I did two things. I looked at the quality of the team's goal. Then I asked one question out loud: With what we know now and the time we have left until the deadline, what's the best plan before we meet again?

Something shifted. People stopped reporting and started solving. Blockers surfaced. Someone said something they'd clearly been sitting on for weeks. The check-in became the thing it was supposed to be.

I'm noticing that Ways of Working rarely breaks because of missing templates or unclear RACI charts. It breaks when there's no goal strong enough to make collaboration feel necessary.

The question didn't fix the team. But it gave them something worth working on together.`,
    featured: true,
  },
  { date: "February 2025", title: "Why delivery stalls aren't process problems", excerpt: "Most organisations respond to stalled delivery by adding process. More check-ins. More governance. More reporting. It almost never works, and here's why.", slug: "#" },
  { date: "January 2025", title: "The difference between coordination and ownership", excerpt: "Coordinators keep the lights on. Owners change the wiring. If you're hiring for delivery, know which one you need.", slug: "#" },
  { date: "December 2024", title: "Accountability without the overhead", excerpt: "You don't need a governance framework to make people accountable. You need clarity, rhythm, and someone willing to have the hard conversation.", slug: "#" },
  { date: "November 2024", title: "What hiring managers get wrong about delivery roles", excerpt: "The job spec says delivery. The interview tests for communication. The role requires ownership. These are three different things.", slug: "#" },
  { date: "October 2024", title: "Regulated industries and the speed myth", excerpt: "The idea that regulated industries can't move fast is wrong. They can't move carelessly. There's a difference, and it matters.", slug: "#" },
  { date: "September 2024", title: "The first two weeks matter more than the first two months", excerpt: "How you show up in the first fortnight sets the tone for everything. Ship something. Name a problem. Make a decision. Then keep going.", slug: "#" },
];

export default function Writing() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();

  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto">
          <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>Writing</span>
          <h1 className="font-head text-[48px] md:text-[96px] uppercase leading-[0.92] mb-6" style={{ color: "var(--col-white)" }}>
            Things worth saying
          </h1>
          <p className="font-body text-[18px] max-w-[55ch]" style={{ color: "rgba(247,246,245,0.6)" }}>
            Short, direct writing on change, delivery, and what actually works inside complex organisations.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 md:px-10 -mt-4" ref={fade1.ref}>
        <div className={`${fade1.className} max-w-site mx-auto`}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ backgroundColor: "var(--col-text)" }}>
            {featured.image && (
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <p className="font-body text-[12px] mb-4" style={{ color: "var(--col-primary)" }}>{featured.date}</p>
              <h2 className="font-head text-[32px] md:text-[48px] uppercase leading-[0.92] mb-6" style={{ color: "var(--col-white)" }}>
                {featured.title}
              </h2>
              <p className="font-body text-[16px] mb-8 max-w-[55ch]" style={{ color: "rgba(197,195,198,0.6)" }}>
                {featured.excerpt}
              </p>
              <span className="cta-text" style={{ color: "var(--col-accent)" }}>
                Read →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade2.ref}>
          <div className={`${fade2.className} grid grid-cols-1 md:grid-cols-3`}>
            {rest.map((article, i) => (
              <a
                key={i}
                href={article.slug}
                className="p-8 transition-colors duration-200 hover:bg-brand-white block"
                style={{ border: "1px solid var(--col-primary)" }}
              >
                <p className="font-body text-[12px] mb-3" style={{ color: "var(--col-primary)" }}>{article.date}</p>
                <h3 className="font-head text-[24px] md:text-[28px] uppercase leading-[0.95] mb-4" style={{ color: "var(--col-text)" }}>
                  {article.title}
                </h3>
                <p className="font-body text-[14px] leading-relaxed mb-6" style={{ color: "var(--col-secondary)" }}>
                  {article.excerpt}
                </p>
                <span className="cta-text" style={{ color: "var(--col-accent)" }}>Read →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ebook CTA */}
      <section className="py-20 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="eyebrow block mb-4" style={{ color: "var(--col-primary)" }}>Ebook</span>
            <h2 className="font-head text-[36px] md:text-[48px] uppercase leading-[0.92] mb-4" style={{ color: "var(--col-white)" }}>
              Notes From The Inside
            </h2>
            <p className="font-body text-[15px] max-w-[45ch]" style={{ color: "rgba(197,195,198,0.6)" }}>
              A practical guide to change and delivery leadership in complex organisations.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/ebook">Learn more</Link>
          </Button>
        </div>
      </section>
    </>
  );
}