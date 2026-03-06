import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import stefanHeadshot from "@/assets/stefan-headshot.jpeg";

const timeline = [
  { role: "Head of Delivery", org: "Global Financial Services Firm", date: "2019 – Present", desc: "Leading cross-functional delivery across regulatory and product change." },
  { role: "Senior Programme Manager", org: "MedTech Scale-up", date: "2015 – 2019", desc: "Built delivery capability from scratch across three product lines." },
  { role: "Change & Delivery Lead", org: "Tier 1 Bank", date: "2010 – 2015", desc: "Owned end-to-end delivery of regulatory transformation programmes." },
  { role: "Programme Manager", org: "Large Product Organisation", date: "2005 – 2010", desc: "Managed complex product launches across distributed teams." },
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
            <div className="w-full aspect-square" style={{ backgroundColor: "var(--col-primary)" }}>
              <div className="w-full h-full flex items-center justify-center font-head text-[24px] uppercase" style={{ color: "var(--col-secondary)" }}>
                Photo
              </div>
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
              <div key={i} className="py-8" style={{ borderBottom: "1px solid var(--col-primary)" }}>
                <h3 className="font-head text-[24px] uppercase mb-1" style={{ color: "var(--col-text)" }}>{item.role}</h3>
                <p className="font-body text-[14px] font-semibold mb-1" style={{ color: "var(--col-accent)" }}>{item.org}</p>
                <p className="font-body text-[12px] mb-3" style={{ color: "var(--col-primary)" }}>{item.date}</p>
                <p className="font-body text-[15px]" style={{ color: "var(--col-secondary)" }}>{item.desc}</p>
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
