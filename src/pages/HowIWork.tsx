import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import stefanWhiteboard from "@/assets/stefan-whiteboard.jpeg";
import stefanWorkshop1 from "@/assets/stefan-workshop-1.jpeg";

const phases = [
  {
    num: "01",
    title: "Understand the real problem",
    body: "Not the problem in the brief. The actual problem. Usually they are different. I spend the first week talking to the people doing the work and the people making the decisions. Then I tell you what I found — including the parts that are uncomfortable.",
  },
  {
    num: "02",
    title: "Clarify what needs to move",
    body: "Most organisations have too many priorities. I help leadership make explicit trade-offs about what matters now, what can wait, and what should stop. This is the work most people avoid. It is also the work that unlocks everything else.",
  },
  {
    num: "03",
    title: "Build rhythm without overhead",
    body: "Lightweight structures that make decisions visible and progress trackable. Not a new process. A cadence that the organisation will actually use — because it gives people what they need without adding to their workload.",
  },
  {
    num: "04",
    title: "Stay close to the work",
    body: "I do not hand over a report and leave. I stay close to execution until things are moving reliably. That means being reachable, being direct, and being honest when something is not working.",
  },
];

const notItems = [
  "A methodology pitch. I do not sell frameworks.",
  "A status-update layer. I own complexity, I do not just report on it.",
  "Gradual onboarding. I am operational within two weeks, not two months.",
];

export default function HowIWork() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();
  const fade3 = useScrollFade();

  return (
    <>
      <Seo
        title="How I Work — Stefan Eskam"
        description="A four-phase approach to closing the strategy-to-delivery gap: understand the real problem, clarify priorities, build rhythm, stay close to the work."
        path="/how-i-work"
      />
      {/* SECTION 1 — Hero */}
      <section
        className="relative py-24 md:py-32 px-6 md:px-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${stefanWhiteboard})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,26,26,0.65)" }} />
        <div className="max-w-site mx-auto relative z-10">
          <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>
            The approach
          </span>
          <h1
            className="font-head text-[48px] md:text-[96px] uppercase leading-[0.92] mb-6"
            style={{ color: "var(--col-white)" }}
          >
            No discovery
            <br />
            theatre
          </h1>
          <p
            className="font-body text-[17px] leading-relaxed max-w-[58ch]"
            style={{ color: "rgba(247,246,245,0.6)" }}
          >
            No six-week assessment. No methodology deck. No engagement framework with a branded
            name. I come in, understand the actual problem, and start moving things within the
            first two weeks. Here is what that looks like.
          </p>
        </div>
      </section>

      {/* SECTION 2 — The phases */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade1.ref}>
          <div className={fade1.className}>
            <span className="eyebrow block mb-6">What happens</span>
            <h2
              className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-16"
              style={{ color: "var(--col-text)" }}
            >
              From day one
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--col-primary)" }}>
              {phases.map((p) => (
                <div key={p.num} className="p-8 md:p-10" style={{ backgroundColor: "var(--col-bg)" }}>
                  <span
                    className="font-head text-[64px] leading-none block mb-4 select-none"
                    style={{ color: "transparent", WebkitTextStroke: "1px rgba(197,195,198,0.25)" }}
                  >
                    {p.num}
                  </span>
                  <h3
                    className="font-head text-[24px] uppercase leading-[0.92] mb-4"
                    style={{ color: "var(--col-text)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-body text-[15px] leading-relaxed"
                    style={{ color: "var(--col-secondary)" }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed action photo */}
      <section className="w-full">
        <img
          src={stefanWorkshop1}
          alt="Workshop in action"
          className="block w-full"
          style={{ height: "480px", objectFit: "cover", objectPosition: "center" }}
        />
      </section>

      {/* SECTION 3 — What I do not do */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto max-w-[700px]" ref={fade2.ref}>
          <div className={fade2.className}>
            <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>
              Also worth knowing
            </span>
            <h2
              className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-12"
              style={{ color: "var(--col-white)" }}
            >
              What you will
              <br />
              not get
            </h2>
            <div>
              {notItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 py-6"
                  style={{ borderBottom: "1px solid rgba(197,195,198,0.15)" }}
                >
                  <span className="font-body text-[15px] shrink-0" style={{ color: "var(--col-accent)" }}>
                    —
                  </span>
                  <p className="font-body text-[15px] leading-relaxed" style={{ color: "rgba(247,246,245,0.6)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-accent)" }}>
        <div className="max-w-site mx-auto text-center" ref={fade3.ref}>
          <div className={fade3.className}>
            <h2
              className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-6"
              style={{ color: "var(--col-white)" }}
            >
              Ready to start?
            </h2>
            <p
              className="font-body text-[17px] mb-10"
              style={{ color: "rgba(247,246,245,0.7)" }}
            >
              Let's talk about what you actually need.
            </p>
            <Button variant="ghost" asChild>
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
