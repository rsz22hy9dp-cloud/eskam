import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import postTeamCheckin from "@/assets/post-team-checkin.png";
import postRefinement from "@/assets/post-refinement.png";
import postTeamGoal from "@/assets/post-team-goal.jpeg";
import postRoleClarity from "@/assets/post-role-clarity.jpeg";
import postProductIdeas from "@/assets/post-product-ideas.jpeg";

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
  {
    date: "January 2026",
    title: "The team that stopped seeing the point of refinement",
    excerpt: "They already knew what to build. The recipe came attached. But a team that never gets to shape the work will eventually stop trying.",
    slug: "#",
    image: postRefinement,
    body: `I once worked with a team that had stopped seeing the point of refinement.

"Why are we spending time on this? We already know what to do."

And they were right, in a way. By the time work reached them, the decisions had already been made. What to build. How to build it. The recipe came attached.

My job as a coach was to ask questions. To slow down and explore. To find the option with the most potential rather than just execute the obvious one.

They didn't like it. I could feel the frustration. Not aggressive, but real. Who is this person, and why is he making this harder?

I've seen this more than once. The details change. The dynamic doesn't.

I'm noticing that this is what low inclusion safety actually looks like in practice. Not conflict. Not disengagement. Just a team that has learned there's no point in thinking, because thinking isn't part of the job.

Psychological safety isn't just about whether people feel safe to speak up. It starts earlier than that. It starts with whether people feel they have anything worth contributing in the first place.

A team that never gets to shape the work will eventually stop trying.

Where in your process do people quietly stop thinking?`,
  },
  {
    date: "November 2025",
    title: "Most teams have a goal for the product — few have one for themselves",
    excerpt: "People were busy, but not really pulling together. A simple workshop changed everything: what do we each bring, and what do we want to become?",
    slug: "#",
    image: postTeamGoal,
    body: `Most teams have a goal for the product. Few have a goal for themselves.

I came into a team that had been working together for a while. On paper, things were fine. In practice, something was missing. People were busy, but not really pulling together.

I ran a workshop. Simple premise: what do we each bring to this team, and what do we actually want to become?

Not job titles. Not role descriptions. The real stuff. Current skills, hidden skills, things people wanted to learn. We put it all on the wall.

That's when the room changed. Not with conflict, but with recognition. "I didn't know you had that skill." Followed, almost every time, by: "Could we use that when...?"

I'm noticing that a team without a shared goal for itself will always default to the work. Which sounds fine, until the work gets hard and there's nothing holding people together.

Two goals. One for what you're building. One for who you're being while you build it.

The second one is where the magic is.

Does your team have a goal for itself, or just for the product?`,
  },
  {
    date: "October 2025",
    title: "Most role clarity problems aren't HR problems",
    excerpt: "Slow decisions. Repeated conversations. Capable people always slightly off-target. The problem wasn't information — it was structure.",
    slug: "#",
    image: postRoleClarity,
    body: `Most role clarity problems aren't HR problems.

They're design problems.

I've worked with organisations introducing new ways of working - where people were being asked to take on roles that didn't yet have a shared meaning.

The symptom was always the same.

Slow decisions. Repeated conversations. People who were capable but somehow always slightly off-target.

Leadership would respond with more communication. More updates. Better town halls. It rarely helped.

Because the problem wasn't information. It was structure.

People didn't know what was expected of them. Not because they hadn't been told, but because the role itself had never been properly defined. No shared language. No clarity on boundaries. No consistent understanding across teams of what the role was actually for.

So we started there.

Interviews to find the real baseline. Workshops to surface the misalignments. One-pagers that gave people clarity on their role, their boundaries, and their next step.

Not a document. A change process.

And deliberately the first step in something larger - because you can't build organisational change on top of role confusion.

I'm learning that when change stalls, the instinct is usually to push harder.

But often the real question is simpler: do people actually know what's expected of them? If the answer is unclear, that's where the work begins.`,
  },
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