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
        toast.success("You are on the list. Both chapters are coming.");
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

      {/* SECTION 2 — Coming soon */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto max-w-[600px] text-center" ref={fade.ref}>
          <div className={fade.className}>
            <h2
              className="font-head text-[48px] md:text-[72px] uppercase leading-[0.92] mb-6"
              style={{ color: "var(--col-text)" }}
            >
              The first two chapters
              <br />
              are here
            </h2>
            <p
              className="font-body text-[17px] mb-10"
              style={{ color: "var(--col-secondary)" }}
            >
              Sign up below to receive both chapters.
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
                {loading ? "..." : "Get both chapters"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
