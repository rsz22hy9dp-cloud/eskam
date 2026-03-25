import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "How I Work", to: "/how-i-work" },
  { label: "Writing", to: "/writing" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-nav flex items-center justify-between px-6 md:px-10"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E0DED8",
        }}
      >
        <Link
          to="/"
          className="font-head text-[20px] uppercase tracking-tight"
          style={{ color: "var(--col-text)" }}
        >
          Stefan Eskam
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="cta-text transition-colors hover:text-brand-accent"
              style={{
                color:
                  location.pathname === link.to
                    ? "var(--col-text)"
                    : "var(--col-secondary)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="cta-text px-[24px] py-[10px] transition-colors hover:bg-[#333333]"
            style={{
              backgroundColor: "#1A1A1A",
              color: "#F5F4F0",
            }}
          >
            Let's talk
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={24} style={{ color: "var(--col-text)" }} />
            ) : (
              <Menu size={24} style={{ color: "var(--col-text)" }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-start justify-center px-10 gap-8"
          style={{ backgroundColor: "var(--col-text)", paddingTop: "var(--nav-h)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="font-head text-[48px] uppercase"
              style={{ color: "var(--col-white)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
