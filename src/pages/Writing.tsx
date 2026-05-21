import { useState } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Writing() {
  const fade = useScrollFade();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from("ebook_signups")
        .insert({ email });
      if (error) {
        if (error.code === "23505") {
          toast.info("You are already signed up.");
        } else {
          throw error;
        }
      } else {
        toast.success("You are on the list. All three chapters are coming.");
        setEmail("");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto">
          <span className="eyebrow block mb-6" style={{ color: "var(--col-primary)" }}>
            Practical writing
          </span>
          <h1
            className="font-head text-[48px] md:text-[96px] uppercase leading-[0.92] mb-6"
            style={{ color: "var(--col-white)" }}
          >
            Notes from
            <br />
            the whiteboard
          </h1>
          <p
            className="font-body text-[17px] leading-relaxed max-w-[58ch]"
            style={{ color: "rgba(247,246,245,0.6)" }}
          >
            What I have learned inside complex organisations — written for people who are in the
            same rooms, dealing with the same problems. No theory. No framework introductions.
            Just what I have seen, tried, and found to be true.
          </p>
        </div>
      </section>

      {/* SECTION 2 — What to expect */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade.ref}>
          <div className={fade.className}>
            <span className="eyebrow block mb-6">What to expect</span>
            <h2
              className="font-head text-[40px] md:text-[56px] uppercase leading-[0.92] mb-12"
              style={{ color: "var(--col-text)" }}
            >
              Inside the first three chapters
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-px mb-20"
              style={{ backgroundColor: "var(--col-primary)" }}
            >
              {[
                {
                  num: "01",
                  title: "Why Delivery Stalls",
                  body: "Most programmes don't fail because of poor planning. They fail because no one owns the gap between the decision and the work.",
                },
                {
                  num: "02",
                  title: "Clarifying Priorities at Speed",
                  body: "When everything is a priority, nothing moves. This chapter is about how to have the conversation that cuts through it — without losing the room.",
                },
                {
                  num: "03",
                  title: "Building Rhythm Without Overhead",
                  body: "Status updates, governance layers, and weekly reporting rarely make delivery faster. Here's what does.",
                },
              ].map((c) => (
                <div
                  key={c.num}
                  className="p-8 md:p-10"
                  style={{ backgroundColor: "var(--col-bg)" }}
                >
                  <span
                    className="font-head text-[64px] leading-none block mb-4 select-none"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(26,26,26,0.25)",
                    }}
                  >
                    {c.num}
                  </span>
                  <h3
                    className="font-head text-[22px] uppercase leading-[0.95] mb-4"
                    style={{ color: "var(--col-text)" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="font-body text-[15px] leading-relaxed"
                    style={{ color: "var(--col-secondary)" }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-[600px] mx-auto text-center">
              <h2
                className="font-head text-[40px] md:text-[56px] uppercase leading-[0.92] mb-6"
                style={{ color: "var(--col-text)" }}
              >
                The first three chapters
                <br />
                are here
              </h2>
              <p
                className="font-body text-[17px] mb-10"
                style={{ color: "var(--col-secondary)" }}
              >
                Sign up below to receive all three chapters.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-[10px] font-body text-[14px] outline-none"
                  style={{
                    backgroundColor: "var(--col-white)",
                    color: "var(--col-text)",
                    border: "1px solid var(--col-primary)",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-[22px] py-[10px] font-body text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--col-text)",
                    color: "var(--col-white)",
                  }}
                >
                  {loading ? "..." : "Get all three chapters"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

            </h2>
            <p
              className="font-body text-[17px] mb-10"
              style={{ color: "var(--col-secondary)" }}
            >
              Sign up below to receive all three chapters.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-[10px] font-body text-[14px] outline-none"
                style={{
                  backgroundColor: "var(--col-white)",
                  color: "var(--col-text)",
                  border: "1px solid var(--col-primary)",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-[22px] py-[10px] font-body text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200"
                style={{
                  backgroundColor: "var(--col-text)",
                  color: "var(--col-white)",
                }}
              >
                {loading ? "..." : "Get all three chapters"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
