import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";

const principles = [
  {
    num: "01",
    title: "Clarity before action",
    body: [
      "Most delivery problems are decision problems in disguise. Work stalls because nobody has named the real blocker, or because three people think they own the same thing.",
      "Before anything else, I find out where the ambiguity is. Then I remove it. Not with a workshop. With a conversation and a decision.",
    ],
  },
  {
    num: "02",
    title: "Accountability, not oversight",
    body: [
      "Adding a governance layer rarely makes things faster. It makes people slower and more cautious. The work needs owners, not watchers.",
      "I set up lightweight structures where people know what they own, when it's due, and who to escalate to. Then I get out of the way.",
    ],
  },
  {
    num: "03",
    title: "Momentum is the product",
    body: [
      "Plans are fine. Roadmaps are fine. But the only thing that matters is whether delivery is moving. Not in theory. In practice.",
      "Everything I do is oriented towards one question: is the work actually landing? If not, why not, and what needs to change today?",
    ],
  },
];

const scenarios = [
  { situation: "The programme has stalled. Nobody owns the blockers.", response: "I identify the three decisions that will unlock movement, get them made within a week, and set up a rhythm so blockers surface before they stall delivery." },
  { situation: "Leadership is aligned on strategy but teams can't execute.", response: "I translate the strategy into a delivery structure teams can act on — clear priorities, realistic timelines, and visible accountability." },
  { situation: "Too many priorities. Everything is urgent.", response: "I work with leadership to cut the list to what actually matters this quarter. Then I make sure the rest gets communicated clearly." },
  { situation: "Regulatory change is competing with product delivery.", response: "I build a delivery model that handles both tracks without doubling governance. The goal is one rhythm, not two worlds." },
  { situation: "The last person in this role coordinated. They didn't own.", response: "I take ownership of the outcome, not the process. If something isn't working, I change it. I don't wait for permission." },
  { situation: "Nobody trusts the delivery plan.", response: "I rebuild credibility by shipping something small and visible in the first two weeks. Trust comes from outcomes, not presentations." },
];

const notItems = [
  { label: "Not a framework evangelist.", body: "I don't arrive with a branded methodology. I arrive with judgement and twenty years of knowing what actually works." },
  { label: "Not a consultant selling methodology.", body: "No engagement theatre. No discovery phase designed to justify the next phase. If it's not working, I'll tell you in week one." },
  { label: "Not a coordinator who needs clear air to work in.", body: "I operate in complexity. That's the whole point. If the environment were simple, you wouldn't need someone like me." },
];

export default function HowIWork() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();
  const fade3 = useScrollFade();

  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto">
          <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>Approach</span>
          <h1 className="font-head text-[40px] md:text-[80px] uppercase leading-[0.92] mb-6" style={{ color: "var(--col-white)" }}>
            I don't add process.
            <br />
            I remove the reasons
            <br />
            it stalls.
          </h1>
          <p className="font-body text-[18px] max-w-[55ch]" style={{ color: "rgba(247,246,245,0.6)" }}>
            The way I work is built on three principles. None of them involve a slide deck.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section ref={fade1.ref}>
        <div className={fade1.className}>
          {principles.map((p, i) => (
            <div
              key={p.num}
              className="py-24 md:py-32 px-6 md:px-10"
              style={{
                backgroundColor: i % 2 === 0 ? "var(--col-bg)" : "var(--col-white)",
                borderBottom: "1px solid var(--col-primary)",
              }}
            >
              <div className="max-w-site mx-auto relative">
                <span
                  className="font-head text-[100px] md:text-[120px] leading-none absolute top-0 left-0 select-none"
                  style={{ color: "transparent", WebkitTextStroke: "1px rgba(197,195,198,0.15)" }}
                >
                  {p.num}
                </span>
                <div className="pl-0 md:pl-40 pt-12 md:pt-0">
                  <h2 className="font-head text-[36px] md:text-[48px] uppercase leading-[0.92] mb-8" style={{ color: "var(--col-text)" }}>
                    {p.title}
                  </h2>
                  <div className="font-body text-[17px] leading-relaxed space-y-4 max-w-[55ch]" style={{ color: "var(--col-secondary)" }}>
                    {p.body.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto" ref={fade2.ref}>
          <div className={fade2.className}>
            <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>In practice</span>
            <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-16" style={{ color: "var(--col-white)" }}>
              What this looks like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(197,195,198,0.12)" }}>
              {scenarios.map((s, i) => (
                <div key={i} className="p-8" style={{ backgroundColor: "var(--col-text)" }}>
                  <p className="font-body text-[15px] font-semibold mb-4" style={{ color: "var(--col-white)" }}>
                    "{s.situation}"
                  </p>
                  <p className="font-body text-[14px] leading-relaxed" style={{ color: "rgba(197,195,198,0.6)" }}>
                    {s.response}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I am not */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto max-w-[700px]" ref={fade3.ref}>
          <div className={fade3.className}>
            <span className="eyebrow block mb-6">What I am not</span>
            <div>
              {notItems.map((item, i) => (
                <div key={i} className="flex gap-3 py-6" style={{ borderBottom: "1px solid var(--col-primary)" }}>
                  <span className="font-body text-[15px] shrink-0" style={{ color: "var(--col-accent)" }}>→</span>
                  <div>
                    <p className="font-body text-[15px] font-semibold mb-1" style={{ color: "var(--col-text)" }}>{item.label}</p>
                    <p className="font-body text-[14px]" style={{ color: "var(--col-secondary)" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 md:px-10" style={{ backgroundColor: "var(--col-accent)" }}>
        <div className="max-w-site mx-auto text-center">
          <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-8" style={{ color: "var(--col-white)" }}>
            Ready to find out if it's a fit?
          </h2>
          <Button variant="ghost" asChild>
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
