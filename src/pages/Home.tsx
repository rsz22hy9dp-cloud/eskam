import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import stefanCasual from "@/assets/stefan-casual.jpeg";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 overflow-hidden"
      style={{ backgroundColor: "var(--col-text)", marginTop: "calc(var(--nav-h) * -1)" }}>
      
      {/* Watermark */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-head uppercase select-none pointer-events-none hidden md:block"
        style={{
          fontSize: "22vw",
          color: "transparent",
          WebkitTextStroke: "1px rgba(197,195,198,0.07)",
          lineHeight: 1
        }}>
        
        DELIVERY
      </div>

      <div className="max-w-site mx-auto w-full relative z-10 pt-[100px]">
        {/* Top metadata */}
        <div className="hero-animate hero-animate-1 flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6" style={{ borderBottom: "1px solid rgba(197,195,198,0.12)" }}>
          <span className="eyebrow" style={{ color: "var(--col-primary)" }}>
            Change & Delivery Leadership
          </span>
          <span className="text-[11px] hidden md:block" style={{ color: "rgba(197,195,198,0.3)" }}>
            Copenhagen / Financial Services · MedTech · Product
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-animate hero-animate-2 font-head uppercase text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] leading-[0.92] tracking-tight mb-8">
          <span style={{ color: "var(--col-white)" }}>Strategy</span>
          <br />
          <span style={{ color: "var(--col-white)" }}>doesn't</span>
          <br />
          <span style={{ color: "var(--col-white)" }}>stall.</span>
          <br />
          <span style={{ color: "var(--col-primary)" }}>Execution</span>
          <br />
          <span style={{ color: "var(--col-white)" }}>does.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="hero-animate hero-animate-3 font-body text-[16px] md:text-[18px] max-w-[50ch] mb-10"
          style={{ color: "rgba(247,246,245,0.6)" }}>
          
          Stefan Eskam helps senior leaders in complex organisations close the gap
          between decision and delivery, without adding governance overhead.
        </p>

        {/* CTAs */}
        <div className="hero-animate hero-animate-4 flex flex-wrap gap-4">
          <Button variant="primary" asChild>
            <Link to="/contact">Let's talk</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/how-i-work">How I work</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-3">
        <span className="text-[11px] font-body uppercase tracking-[0.12em]" style={{ color: "rgba(197,195,198,0.25)" }}>
          Scroll
        </span>
        <div className="scroll-pulse" />
      </div>
    </section>);

}

function ProblemSection() {
  const fade1 = useScrollFade();
  const fade2 = useScrollFade();

  return (
    <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-16">
          {/* Left */}
          <div ref={fade1.ref} className={fade1.className}>
            <span className="eyebrow block mb-6">The gap</span>
            <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92]" style={{ color: "var(--col-text)" }}>
              Most
              <br />
              organisations
              <br />
              have the
              <br />
              strategy.
            </h2>
          </div>

          {/* Right */}
          <div ref={fade2.ref} className={fade2.className}>
            <div className="font-body text-[17px] md:text-[19px] leading-relaxed space-y-6 mb-12" style={{ color: "var(--col-secondary)" }}>
              <p>
                What they lack is someone who can translate it into{" "}
                <strong style={{ color: "var(--col-text)" }}>decisions, momentum, and results.</strong>
              </p>
              <p>
                Programmes stall. Priorities blur. Leadership alignment turns into
                another meeting. The strategy is sound, but nothing lands.
              </p>
              <p>
                That's not a strategy problem. It's an execution problem. And it
                rarely gets solved by adding more process.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {[
              { stat: "20+", label: "Years inside complex organisations, not advising from the outside" },
              { stat: "0", label: "Frameworks sold. No methodology pitch. No engagement theatre." },
              { stat: "3", label: "Industries: financial services, MedTech, large-scale product" },
              { stat: "1", label: "Question that matters: does delivery actually move?" }].
              map((item) =>
              <div
                key={item.stat + item.label}
                className="p-[26px]"
                style={{
                  border: "1px solid var(--col-primary)",
                  backgroundColor: "var(--col-bg)"
                }}>
                
                  <p className="font-head text-[60px] leading-none mb-3" style={{ color: "var(--col-accent)" }}>
                    {item.stat}
                  </p>
                  <p className="font-body text-[13px] max-w-[22ch]" style={{ color: "var(--col-secondary)" }}>
                    {item.label}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function WhatIDoSection() {
  const fade = useScrollFade();
  const items = [
  {
    num: "01",
    title: "Reduce friction",
    body: "Find what's actually slowing things down and remove it. Not by adding oversight, but by clarifying what needs a decision and who owns it."
  },
  {
    num: "02",
    title: "Clarify priorities",
    body: "When everything is a priority, nothing moves. I help leadership cut to the work that matters and communicate it in a way teams can act on."
  },
  {
    num: "03",
    title: "Build execution systems",
    body: "Lightweight structures that make decisions stick. Rhythm, accountability, and visibility, without a governance layer no one believes in."
  }];


  return (
    <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
      <div className="max-w-site mx-auto" ref={fade.ref}>
        <div className={fade.className}>
          <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>
            What I do
          </span>
          <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-16" style={{ color: "var(--col-white)" }}>
            Where I add weight
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {items.map((item) =>
            <div
              key={item.num}
              className="relative p-8 transition-colors duration-200 hover:bg-[#1c1c1c]"
              style={{ border: "1px solid rgba(197,195,198,0.12)" }}>
              
                <span
                className="absolute top-4 right-4 font-head text-[76px] leading-none select-none"
                style={{ color: "rgba(197,195,198,0.07)" }}>
                
                  {item.num}
                </span>
                <div className="accent-line mb-6" />
                <h3 className="font-head text-[22px] uppercase mb-4" style={{ color: "var(--col-white)" }}>
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed" style={{ color: "rgba(197,195,198,0.6)" }}>
                  {item.body}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function WhoSection() {
  const fade = useScrollFade();
  const listItems = [
  "Financial services organisations navigating regulatory change alongside product delivery",
  "MedTech and healthcare businesses scaling complex product programmes",
  "Large product organisations where strategy and execution have come apart",
  "Hiring managers looking for a senior operator, not a consultant"];


  return (
    <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
      <div className="max-w-site mx-auto" ref={fade.ref}>
        <div className={`${fade.className} grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12`}>
          {/* Left */}
          <div>
            <span className="eyebrow block mb-6">Who this is for</span>
            <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-8" style={{ color: "var(--col-text)" }}>
              The right fit
            </h2>
            <div className="font-body text-[18px] leading-relaxed space-y-6 mb-10" style={{ color: "var(--col-secondary)" }}>
              <p>
                Senior leaders carrying delivery risk in regulated industries. Hiring
                managers who've been burned by people who coordinate well but don't
                own complexity.
              </p>
              <p>
                If you need someone who can walk into a difficult programme and make
                it move, without a six-week discovery phase and a slide deck, read on.
              </p>
            </div>
            <div>
              {listItems.map((item, i) =>
              <div
                key={i}
                className="flex gap-3 py-4"
                style={{ borderBottom: "1px solid var(--col-primary)" }}>
                
                  <span className="font-body text-[13px] shrink-0" style={{ color: "var(--col-accent)" }}>
                    →
                  </span>
                  <span className="font-body text-[13px]" style={{ color: "var(--col-secondary)" }}>
                    {item}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right — Callout */}
          <div className="relative p-10 flex flex-col justify-between overflow-hidden" style={{ backgroundColor: "var(--col-accent)" }}>
            <img src={stefanCasual} alt="Stefan Eskam" className="absolute inset-0 w-full h-full object-cover opacity-15" />
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(247,246,245,0.45)" }}>
                What's different
              </span>
              <h3 className="font-head text-[28px] md:text-[34px] uppercase leading-[0.95] mb-6" style={{ color: "var(--col-white)" }}>
                Institutional knowledge. Not a framework. Scar tissue. Not a slide
                deck.
              </h3>
              <p className="font-body text-[15px] leading-relaxed mb-8" style={{ color: "rgba(247,246,245,0.65)" }}>
                Twenty years of being inside the room, not briefing it. The difference
                shows quickly.
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>);

}

function ExperienceStrip() {
  const fade = useScrollFade();
  return (
    <section className="py-16 md:py-20 px-6 md:px-10" style={{ backgroundColor: "var(--col-secondary)" }}>
      <div className="max-w-site mx-auto" ref={fade.ref}>
        <div className={`${fade.className} flex flex-col md:flex-row items-start md:items-center gap-10`}>
          <div className="shrink-0">
            <span className="font-head text-[56px] leading-none" style={{ color: "var(--col-white)" }}>
              20+
              <br />
              Years
            </span>
          </div>

          <div className="hidden md:block w-px self-stretch" style={{ backgroundColor: "rgba(197,195,198,0.2)" }} />

          <p className="font-body text-[16px] leading-relaxed flex-1" style={{ color: "rgba(197,195,198,0.7)" }}>
            Not a consultant who parachutes in with a framework.{" "}
            <strong style={{ color: "var(--col-white)" }}>
              Someone who has spent two decades inside complex organisations
            </strong>
            , building the muscle memory to know what works, what doesn't, and why
            the gap between them is rarely what it looks like on paper.
          </p>

          <Button variant="ghost" asChild className="shrink-0">
            <Link to="/about">About Stefan</Link>
          </Button>
        </div>
      </div>
    </section>);

}

function EbookTease() {
  const fade = useScrollFade();
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: "var(--col-bg)", borderTop: "1px solid var(--col-primary)" }}>
      
      <div className="max-w-site mx-auto" ref={fade.ref}>
        <div className={`${fade.className} grid grid-cols-1 md:grid-cols-2 gap-16`}>
          {/* Left */}
          <div>
            <span className="eyebrow block mb-6">Practical writing</span>
            <span
              className="inline-block px-3 py-1 text-[11px] font-body font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ backgroundColor: "var(--col-accent)", color: "var(--col-white)" }}
            >
              Chapter one available now
            </span>
            <h2 className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-8" style={{ color: "var(--col-text)" }}>
              The ebook
            </h2>
            <div className="font-body text-[17px] leading-relaxed space-y-6 mb-10" style={{ color: "var(--col-secondary)" }}>
              <p>
                Not a handbook. Not consultant-speak. Just what I've seen, tried, and learned
                over 20+ years inside complex organisations. Six standalone chapters for
                leaders and change-drivers.
              </p>
              <p>
                Written for people who do the work, not people who study it.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" asChild>
                <Link to="/ebook">Get chapter one — free PDF</Link>
              </Button>
            </div>
          </div>

          {/* Right — Book cover */}
          <div
            className="relative p-[44px] md:p-[52px] flex flex-col justify-between overflow-hidden min-h-[400px]"
            style={{ backgroundColor: "var(--col-text)" }}>
            
            <span className="block text-[10px] font-body font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(197,195,198,0.3)" }}>
              Chapter one · Available now
            </span>
            <h3 className="font-head text-[48px] md:text-[52px] uppercase leading-none my-auto" style={{ color: "var(--col-white)" }}>
              Notes
              <br />
              From The
              <br />
              Whiteboard
            </h3>
            <p className="text-[12px] font-body" style={{ color: "rgba(197,195,198,0.4)" }}>
              Change & Delivery Leadership in Complex Organisations — Stefan Eskam
            </p>
            {/* Decorative circles */}
            <div
              className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full"
              style={{ border: "1px solid rgba(197,195,198,0.06)" }} />
            
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full"
              style={{ border: "1px solid rgba(197,195,198,0.06)" }} />
            
          </div>
        </div>
      </div>
    </section>);

}

function CTABand() {
  const fade = useScrollFade();
  return (
    <section className="py-20 md:py-24 px-6 md:px-10" style={{ backgroundColor: "var(--col-accent)" }}>
      <div className="max-w-site mx-auto" ref={fade.ref}>
        <div className={`${fade.className} flex flex-col md:flex-row items-start md:items-center justify-between gap-10`}>
          <h2 className="font-head text-[48px] md:text-[70px] uppercase leading-[0.92]" style={{ color: "var(--col-white)" }}>
            If this resonates,
            <br />
            let's talk.
          </h2>
          <div className="flex flex-col gap-3 items-start">
            <p className="text-[12px] font-body" style={{ color: "rgba(247,246,245,0.45)" }}>
              No form. No deck. Just a conversation.
            </p>
            <Button variant="ghost" asChild>
              <a href="mailto:eskam@me.com">Get in touch</a>
            </Button>
            <Button variant="ghost" asChild className="opacity-70">
              <a href="#">Book a call</a>
            </Button>
          </div>
        </div>
      </div>
    </section>);

}

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <WhatIDoSection />
      <WhoSection />
      <ExperienceStrip />
      <EbookTease />
      <CTABand />
    </>);

}