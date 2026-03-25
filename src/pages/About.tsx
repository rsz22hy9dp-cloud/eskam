import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import stefanHeadshot from "@/assets/stefan-headshot.jpeg";

const career = [
  {
    org: "Danske Bank",
    period: "2002–2021",
    body: "Nineteen years. Multiple roles with increasing scope: Agile Coach, Business Analyst, Tribe Coach, People Manager. Delivery in one of the most regulated financial institutions in the Nordics. Learned what happens when strategy and execution lose contact — and how to reconnect them.",
  },
  {
    org: "SDC",
    period: "2022–2023",
    body: "Strengthened organisational agility in a complex, multi-customer regulated environment. Helped leadership move from abstract ambition to concrete operating principles.",
  },
  {
    org: "3Shape",
    period: "2023–Present",
    body: "Senior Agile Coach in a fast-growing product organisation. Built a quarterly planning and alignment model across multiple teams. Shifted leadership conversations from activity to outcomes.",
  },
];

export default function About() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();
  const fade3 = useScrollFade();

  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="flex-1">
              <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>
                Who I am
              </span>
              <h1
                className="font-head text-[48px] md:text-[96px] uppercase leading-[0.92] mb-6"
                style={{ color: "var(--col-white)" }}
              >
                Stefan Eskam
              </h1>
              <p
                className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] mb-8"
                style={{ color: "var(--col-accent)" }}
              >
                Change & Delivery Leadership in Complex Organisations
              </p>
              <p
                className="font-body text-[17px] leading-relaxed max-w-[58ch]"
                style={{ color: "rgba(247,246,245,0.6)" }}
              >
                Twenty years inside complex organisations. Not advising from the outside — inside.
                Carrying programmes that couldn't afford to fail, in environments where misalignment
                has a cost. That is the work I know. Not from a framework. From doing it.
              </p>
            </div>
            <div className="flex justify-center md:justify-end shrink-0">
              <img
                src={stefanHeadshot}
                alt="Stefan Eskam"
                className="w-[240px] md:w-auto md:max-w-[320px] rounded-lg md:rounded-none object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The career */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade1.ref}>
          <div className={fade1.className}>
            <span className="eyebrow block mb-6">The background</span>
            <h2
              className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-16"
              style={{ color: "var(--col-text)" }}
            >
              Where I built this
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {career.map((item) => (
                <div key={item.org}>
                  <div className="accent-line mb-6" />
                  <h3
                    className="font-head text-[24px] uppercase mb-1"
                    style={{ color: "var(--col-text)" }}
                  >
                    {item.org}
                  </h3>
                  <p
                    className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] mb-4"
                    style={{ color: "var(--col-accent)" }}
                  >
                    {item.period}
                  </p>
                  <p
                    className="font-body text-[15px] leading-relaxed"
                    style={{ color: "var(--col-secondary)" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — How I am different */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto" ref={fade2.ref}>
          <div className={fade2.className}>
            <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>
              What this means in practice
            </span>
            <h2
              className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-10"
              style={{ color: "var(--col-white)" }}
            >
              I know where
              <br />
              it breaks
            </h2>
            <div className="max-w-[62ch] space-y-6">
              <p
                className="font-body text-[17px] leading-relaxed"
                style={{ color: "rgba(247,246,245,0.6)" }}
              >
                Most delivery problems are not delivery problems. They are clarity problems.
                Someone has not made a decision, or the decision was made but never communicated
                in a way that teams can act on. I find where that is happening and fix it —
                without adding governance overhead, without a six-week discovery phase, and
                without a methodology pitch.
              </p>
              <p
                className="font-body text-[17px] leading-relaxed"
                style={{ color: "rgba(247,246,245,0.6)" }}
              >
                I have been inside the room when the regulatory deadline moved, when the vendor
                didn't deliver, when three senior stakeholders had three different priorities.
                That experience is not on a slide deck. It shows in the first two weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto text-center" ref={fade3.ref}>
          <div className={fade3.className}>
            <h2
              className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-6"
              style={{ color: "var(--col-text)" }}
            >
              If this is what
              <br />
              you need
            </h2>
            <p
              className="font-body text-[17px] mb-10"
              style={{ color: "var(--col-secondary)" }}
            >
              No form. No deck. Just a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" asChild>
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button variant="ghost-dark" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
