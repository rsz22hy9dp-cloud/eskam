import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import stefanHeadshot from "@/assets/stefan-headshot.jpeg";

const timeline = [
  {
    role: "Senior Agile Coach",
    org: "3Shape",
    date: "2023 – 2026",
    summary: "Created transparency, alignment and flow between strategy and execution in a fast-growing, increasingly complex product organisation.",
    highlights: [
      "Designed and launched a quarterly planning and alignment model across multiple teams and functions",
      "Improved transparency around priorities, dependencies, and capacity to support better leadership decisions",
      "Shifted planning conversations from activity to outcomes, improving focus and execution",
      "Acted as a trusted advisor to senior leaders on organisational design and ways of working",
    ],
    impact: [
      "Enabled senior leadership to make clearer priority and investment decisions by establishing shared change and delivery transparency",
      "Reduced coordination friction across multiple teams by introducing a common planning cadence and delivery language",
      "Increased predictability of delivery by improving decision flow between business, product and technology",
      "Strengthened organisational alignment without adding governance overhead",
    ],
  },
  {
    role: "Agile Coach / Change Agent",
    org: "SDC",
    date: "2022 – 2023",
    summary: "Played a key role in strengthening organisational agility in a complex, regulated environment.",
    highlights: [
      "Defined Agile direction and core practices in a regulated, multi-customer environment",
      "Helped leaders balance compliance demands with effective delivery",
      "Created shared language and structures that reduced coordination overhead across teams",
    ],
    impact: [
      "Helped leadership move from abstract ambition to concrete operating principles",
      "Improved consistency in delivery practices across teams operating under regulatory constraints",
      "Reduced uncertainty and rework by clarifying roles, decision rights and expectations",
    ],
  },
  {
    role: "Tribe Coach",
    org: "Danske Bank",
    date: "2002 – 2021",
    summary: "Held a range of senior roles across the bank, progressing through multiple roles with increasing scope and complexity, and with growing responsibility for complex initiatives involving multiple stakeholders.",
    highlights: [
      "Held senior responsibility for ways of working across large, multi-team setups",
      "Supported leadership teams in managing dependencies, priorities, and delivery risk",
      "Improved delivery flow and predictability without adding unnecessary process",
    ],
    impact: [
      "Delivered and supported strategic initiatives in one of the largest and most regulated financial institutions in the Nordics",
      "Helped senior leaders navigate large-scale change without disrupting critical customer and credit operations",
      "Built a reputation as a reliable operator in high-risk, high-complexity initiatives",
    ],
    footnote: "Other roles at Danske Bank included: Agile Coach, Business Analyst, People Manager & Privat Advisor.",
  },
];

const industries = [
  { title: "Financial Services", body: "Regulatory change, product delivery, and operational transformation in tier-one banks and asset managers. The environment where governance is heaviest and delivery risk is highest." },
  { title: "MedTech", body: "Scaling product programmes in regulated healthcare environments. Where compliance isn't optional and the stakes are measured in patient outcomes, not quarterly targets." },
  { title: "Large-Scale Product", body: "Complex product organisations where strategy has come apart from execution. Multiple teams, competing priorities, and no single owner of the outcome." },
];

export default function About() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();
  const fade3 = useScrollFade();

  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto">
          <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>About</span>
          <h1 className="font-head text-[48px] md:text-[96px] uppercase leading-[0.92] mb-6" style={{ color: "var(--col-white)" }}>
            The person
            <br />
            behind the work
          </h1>
          <p className="font-body text-[18px] max-w-[55ch]" style={{ color: "rgba(247,246,245,0.6)" }}>
            Twenty years of delivering complex change inside regulated industries. Not advising. Doing.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade1.ref}>
          <div className={`${fade1.className} grid grid-cols-1 md:grid-cols-[60%_40%] gap-16`}>
            <div className="font-body text-[17px] leading-relaxed space-y-6" style={{ color: "var(--col-secondary)" }}>
              <p>
                I've spent the last two decades inside complex organisations — financial services, MedTech, large-scale product businesses. Not as a consultant. As someone who owns the delivery.
              </p>
              <p>
                That distinction matters. Consultants observe and recommend. I sit in the room where decisions get made, and I make sure those decisions turn into outcomes. Not plans. Not decks. Outcomes.
              </p>
              <p>
                The organisations I work with are typically regulated, often global, and almost always dealing with more change than their structures were built to handle. My job is to make delivery work anyway.
              </p>
              <p>
                I don't sell a methodology. I don't arrive with a framework. I arrive with twenty years of scar tissue and a very low tolerance for work that doesn't move.
              </p>
            </div>
            <div className="w-full aspect-square overflow-hidden">
              <img src={stefanHeadshot} alt="Stefan Eskam" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto max-w-[700px]" ref={fade2.ref}>
          <div className={fade2.className}>
            <span className="eyebrow block mb-6">Career</span>
            <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-12" style={{ color: "var(--col-text)" }}>
              Timeline
            </h2>
            {timeline.map((item, i) => (
              <div key={i} className="py-10" style={{ borderBottom: "1px solid var(--col-primary)" }}>
                <h3 className="font-head text-[24px] uppercase mb-1" style={{ color: "var(--col-text)" }}>{item.role}</h3>
                <p className="font-body text-[14px] font-semibold mb-1" style={{ color: "var(--col-accent)" }}>{item.org} | {item.date}</p>
                <p className="font-body text-[15px] mt-4 mb-5" style={{ color: "var(--col-secondary)" }}>{item.summary}</p>
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="font-body text-[14px] pl-4" style={{ color: "var(--col-secondary)", borderLeft: "2px solid var(--col-primary)" }}>{h}</li>
                  ))}
                </ul>
                <p className="font-body text-[13px] font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--col-accent)" }}>Impact & Results</p>
                <ul className="space-y-2">
                  {item.impact.map((imp, j) => (
                    <li key={j} className="font-body text-[14px] pl-4" style={{ color: "var(--col-secondary)", borderLeft: "2px solid var(--col-accent)" }}>{imp}</li>
                  ))}
                </ul>
                {"footnote" in item && item.footnote && (
                  <p className="font-body text-[13px] italic mt-5" style={{ color: "var(--col-primary)" }}>{item.footnote}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto" ref={fade3.ref}>
          <div className={fade3.className}>
            <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>Industries</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {industries.map((item) => (
                <div key={item.title}>
                  <div className="accent-line mb-6" />
                  <h3 className="font-head text-[24px] uppercase mb-4" style={{ color: "var(--col-white)" }}>{item.title}</h3>
                  <p className="font-body text-[15px] leading-relaxed" style={{ color: "rgba(197,195,198,0.6)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto text-center">
          <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-8" style={{ color: "var(--col-text)" }}>
            Seen enough? Let's talk.
          </h2>
          <Button variant="default" asChild>
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
