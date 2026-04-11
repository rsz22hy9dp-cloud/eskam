import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollFade } from "@/hooks/useScrollFade";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

const contactLinks = [
  { label: "eskam@me.com", href: "mailto:eskam@me.com" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/stefaneskam/" },
  { label: "Book a call ↗", href: "#" },
];

export default function Contact() {
  const fade = useScrollFade();
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name,
        email: form.email,
        org: form.org || null,
        message: form.message,
      });
      if (error) throw error;
      toast.success("Message sent. Thank you.");
      setForm({ name: "", email: "", org: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-text)" }}>
        <div className="max-w-site mx-auto">
          <h1 className="font-head text-[56px] md:text-[96px] uppercase leading-[0.92]" style={{ color: "var(--col-white)" }}>
            Let's talk.
          </h1>
        </div>
      </section>

      {/* Form section */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ backgroundColor: "var(--col-bg)" }}>
        <div className="max-w-site mx-auto" ref={fade.ref}>
          <div className={`${fade.className} grid grid-cols-1 md:grid-cols-2 gap-16`}>
            {/* Left */}
            <div>
              <p className="font-body text-[17px] leading-relaxed mb-10" style={{ color: "var(--col-secondary)" }}>
                If you're carrying delivery risk and need someone who can own it, not just manage it, start here.
              </p>
              <div>
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex gap-3 py-4 font-body text-[16px] transition-colors"
                    style={{ borderBottom: "1px solid var(--col-primary)", color: "var(--col-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--col-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--col-secondary)")}
                  >
                    <span style={{ color: "var(--col-accent)" }}>→</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Name", key: "name" as const, type: "text" },
                { label: "Email", key: "email" as const, type: "email" },
                { label: "Organisation", key: "org" as const, type: "text" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block font-body text-[11px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "var(--col-secondary)" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required={field.key !== "org"}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 font-body text-[15px] outline-none transition-colors focus:border-brand-accent"
                    style={{
                      border: "1px solid var(--col-primary)",
                      backgroundColor: "var(--col-bg)",
                      color: "var(--col-text)",
                    }}
                  />
                </div>
              ))}
              <div>
                <label className="block font-body text-[11px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "var(--col-secondary)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 font-body text-[15px] outline-none resize-none transition-colors focus:border-brand-accent"
                  style={{
                    border: "1px solid var(--col-primary)",
                    backgroundColor: "var(--col-bg)",
                    color: "var(--col-text)",
                  }}
                />
              </div>
              <Button variant="default" type="submit" className="w-full" disabled={sending}>
                {sending ? "Sending…" : "Send"}
              </Button>
            </form>
          </div>

          <p className="font-body text-[13px] mt-8" style={{ color: "var(--col-secondary)" }}>
            I read every message and respond within two working days.
          </p>
        </div>
      </section>
    </>
  );
}
