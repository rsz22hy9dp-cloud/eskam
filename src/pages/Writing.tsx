import { useScrollFade } from "@/hooks/useScrollFade";
import avatar from "@/assets/character-coffee.jpeg";
import imgPapers from "@/assets/character-holding-papers.png";
import imgStressed from "@/assets/character-stressed.png";
import imgComputer from "@/assets/character-computer.jpeg";

const articles = [
  {
    image: imgPapers,
    title: "The Plan Wasn't the Problem",
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
    image: imgStressed,
    title: "You Don't Change Behaviour by Explaining It",
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
    image: imgComputer,
    title: "The Gap Has a Name",
    body: [
      "After twenty years working across complex organisations, the thing I keep returning to isn't strategy, and it isn't execution. It's the gap between them, and the fact that most organisations have learned to live in it rather than close it.",
      "Strategy meetings produce clarity. Or something that feels like clarity. Priorities are set. Direction is agreed. Everyone leaves the room with broadly the same understanding. Then the work begins, and the distance between what was decided and what actually happens starts to grow. Not dramatically. Gradually. Through a hundred small translations, assumptions, and handoffs that nobody fully tracks.",
      "The gap isn't a communication failure, though that's usually what gets blamed. It's structural. The people setting direction are rarely the people absorbing the consequences of that direction in practice. Feedback travels slowly, if it travels at all. The system keeps producing results that surprise the people who designed it.",
      "What I've found useful isn't a new framework. It's proximity. Leaders who spend time at the point where strategy meets delivery — not to supervise, but to understand — tend to make better decisions and catch misalignments before they become expensive.",
      "The gap doesn't close because you communicate more. It closes because someone decides to stand in it.",
    ],
  },
];

function Article({ image, title, body }: typeof articles[number]) {
  const fade = useScrollFade();
  return (
    <article ref={fade.ref} className={fade.className}>
      <img
        src={image}
        alt=""
        className="w-full h-[320px] md:h-[520px] object-cover mb-12"
      />
      <div className="max-w-[68ch] mx-auto">
        <h2
          className="font-head text-[36px] md:text-[56px] uppercase leading-[0.95] mb-8"
          style={{ color: "var(--col-text)" }}
        >
          {title}
        </h2>
        <div className="space-y-6">
          {body.map((p, i) => (
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

      {/* Articles */}
      <section
        className="py-24 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--col-bg)" }}
      >
        <div className="max-w-site mx-auto space-y-32 md:space-y-48">
          {articles.map((a) => (
            <Article key={a.title} {...a} />
          ))}
        </div>
      </section>
    </>
  );
}
