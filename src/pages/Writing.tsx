import { useScrollFade } from "@/hooks/useScrollFade";
import avatar from "@/assets/character-coffee.jpeg";
import imgPapers from "@/assets/character-holding-papers.png";
import imgStressed from "@/assets/character-stressed.png";
import imgComputer from "@/assets/character-computer.jpeg";

const articles = [
  {
    id: "the-plan-wasnt-the-problem",
    image: imgPapers,
    date: "May 2025",
    title: "The Plan Wasn't the Problem",
    excerpt:
      "Most plans don't fail because they were wrong. They fail because nobody defended them. Every organisation I've worked in has a version of the same pattern.",
    body: [
      "Most plans don't fail because they were wrong. They fail because nobody defended them.",
      "Every organisation I've worked in has a version of the same pattern. A planning session produces something coherent — priorities agreed, capacity allocated, a sequence that makes sense. Then the week starts. An urgent request lands. A senior stakeholder needs something by Friday. Someone's pulled onto a different piece of work. The plan isn't abandoned. It just gets quietly eroded, one reasonable exception at a time.",
      "The plan itself was never the weak point. The boundary around it was.",
      "What I've noticed is that the teams who actually deliver on what they committed to aren't necessarily better at planning. They're better at saying no to things that aren't the plan. Not aggressively. Not with a long explanation. Just clearly, and early, before the exception becomes the norm.",
      "That boundary doesn't protect itself. Someone has to hold it. And in most organisations, that role is either unclear, unpopular, or both.",
      "The question worth asking isn't whether your plan was realistic. It's who's responsible for keeping it that way once the real world turns up.",
    ],
  },
  {
    id: "you-dont-change-behaviour-by-explaining-it",
    image: imgStressed,
    date: "April 2025",
    title: "You Don't Change Behaviour by Explaining It",
    excerpt:
      "Most change efforts spend a lot of time on the why. The why is rarely the problem. People aren't resistant because they don't understand it.",
    body: [
      "Most change efforts spend a lot of time on the why. The why is rarely the problem.",
      "People in complex organisations are not, in my experience, resistant to change because they don't understand it. They're resistant because the new way of working asks them to behave differently inside a system that still rewards the old way. The incentives haven't moved. The inherited habits — how decisions actually get made, whose opinion carries weight, what gets you into trouble — those remain largely intact.",
      "I've watched organisations run workshops, publish principles, redesign org charts, and still arrive at roughly the same place two years later. Not because people weren't trying. Because the surrounding context made the old behaviour the path of least resistance.",
      "What actually shifts things is narrower and less satisfying than most change programmes assume. It's a manager who consistently models the new behaviour under pressure. A process change that makes the old way genuinely harder. A decision made visibly differently, once, in a meeting that mattered.",
      "Small, but real. Not explained. Done.",
      "Behaviour follows consequence. It always has. The question is whether the consequences in your organisation are pointing in the direction you think they are.",
    ],
  },
  {
    id: "the-gap-has-a-name",
    image: imgComputer,
    date: "March 2025",
    title: "The Gap Has a Name",
    excerpt:
      "After twenty years working across complex organisations, the thing I keep returning to isn't strategy, and it isn't execution. It's the gap between them.",
    body: [
      "After twenty years working across complex organisations, the thing I keep returning to isn't strategy, and it isn't execution. It's the gap between them, and the fact that most organisations have learned to live in it rather than close it.",
      "Strategy meetings produce clarity. Or something that feels like clarity. Priorities are set. Direction is agreed. Everyone leaves the room with broadly the same understanding. Then the work begins, and the distance between what was decided and what actually happens starts to grow. Not dramatically. Gradually. Through a hundred small translations, assumptions, and handoffs that nobody fully tracks.",
      "The gap isn't a communication failure, though that's usually what gets blamed. It's structural. The people setting direction are rarely the people absorbing the consequences of that direction in practice. Feedback travels slowly, if it travels at all. The system keeps producing results that surprise the people who designed it.",
      "What I've found useful isn't a new framework. It's proximity. Leaders who spend time at the point where strategy meets delivery — not to supervise, but to understand — tend to make better decisions and catch misalignments before they become expensive.",
      "The gap doesn't close because you communicate more. It closes because someone decides to stand in it.",
    ],
  },
];

function ArticleRow({ article, isLast }: { article: typeof articles[number]; isLast: boolean }) {
  const fade = useScrollFade();
  return (
    <article
      ref={fade.ref}
      className={`${fade.className} ${!isLast ? "border-b" : ""} py-12 md:py-16`}
      style={{ borderColor: "rgba(26,26,26,0.12)" }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <a
          href={`#${article.id}`}
          className="block shrink-0 w-full md:w-[300px] h-[300px] overflow-hidden"
        >
          <img
            src={article.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>
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
            <a href={`#${article.id}`} className="hover:opacity-70 transition-opacity">
              {article.title}
            </a>
          </h2>
          <p
            className="font-body text-[16px] leading-relaxed mb-6 max-w-[60ch]"
            style={{ color: "rgba(26,26,26,0.75)" }}
          >
            {article.excerpt}
          </p>
          <a
            href={`#${article.id}`}
            className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
            style={{ color: "var(--col-text)" }}
          >
            Read more <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function FullArticle({ article }: { article: typeof articles[number] }) {
  const fade = useScrollFade();
  return (
    <article id={article.id} ref={fade.ref} className={`${fade.className} scroll-mt-24`}>
      <p
        className="font-body text-[11px] uppercase tracking-[0.15em] mb-4"
        style={{ color: "rgba(26,26,26,0.55)" }}
      >
        {article.date}
      </p>
      <h2
        className="font-head text-[36px] md:text-[56px] uppercase leading-[0.95] mb-8"
        style={{ color: "var(--col-text)" }}
      >
        {article.title}
      </h2>
      <div className="space-y-6">
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
        <div className="max-w-site mx-auto">
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
            className="font-body text-[17px] leading-relaxed max-w-[58ch] mb-12"
            style={{ color: "rgba(247,246,245,0.7)" }}
          >
            Observations from twenty years working across complex organisations. No
            frameworks. No conclusions. Just things I've noticed that turned out to matter.
          </p>
          <img
            src={avatar}
            alt="Stefan Eskam"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
            style={{ border: "1px solid rgba(247,246,245,0.2)" }}
          />
        </div>
      </section>

      {/* Article list */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: "var(--col-bg)" }}
      >
        <div className="max-w-site mx-auto">
          {articles.map((a, i) => (
            <ArticleRow key={a.id} article={a} isLast={i === articles.length - 1} />
          ))}
        </div>
      </section>

      {/* Full articles */}
      <section
        className="py-24 md:py-32 px-6 md:px-10 border-t"
        style={{ backgroundColor: "var(--col-bg)", borderColor: "rgba(26,26,26,0.12)" }}
      >
        <div className="max-w-[68ch] mx-auto space-y-24 md:space-y-32">
          {articles.map((a) => (
            <FullArticle key={a.id} article={a} />
          ))}
        </div>
      </section>
    </>
  );
}
