import { Link } from "react-router-dom";

const footerNav = [
  { label: "About", to: "/about" },
  { label: "How I Work", to: "/how-i-work" },
  { label: "Writing", to: "/writing" },
  { label: "Contact", to: "/contact" },
];

const footerConnect = [
  { label: "Email", href: "mailto:eskam@me.com" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/stefaneskam/" },
  { label: "Book a call ↗", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--col-dark)" }}>
      <div className="max-w-site mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h4
              className="font-head text-[24px] uppercase mb-3"
              style={{ color: "var(--col-white)", lineHeight: 1 }}
            >
              Stefan Eskam
            </h4>
            <p className="text-[13px]" style={{ color: "rgba(197,195,198,0.35)" }}>
              Change & Delivery Leadership for complex organisations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="col-head mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {footerNav.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[14px] transition-colors"
                  style={{ color: "rgba(197,195,198,0.55)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--col-white)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(197,195,198,0.55)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="col-head mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              {footerConnect.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-[14px] transition-colors"
                  style={{ color: "rgba(197,195,198,0.55)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--col-white)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(197,195,198,0.55)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Ebook */}
          <div>
            <p className="col-head mb-4">Ebook</p>
            <Link
              to="/ebook"
              className="text-[14px] transition-colors"
              style={{ color: "rgba(197,195,198,0.55)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--col-white)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(197,195,198,0.55)")
              }
            >
              Notes From The Whiteboard
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row justify-between"
          style={{ borderTop: "1px solid rgba(197,195,198,0.07)" }}
        >
          <p className="text-[12px]" style={{ color: "rgba(197,195,198,0.2)" }}>
            © {new Date().getFullYear()} Stefan Eskam. All rights reserved.
          </p>
          <p className="text-[12px]" style={{ color: "rgba(197,195,198,0.2)" }}>
            Copenhagen, Denmark
          </p>
        </div>
      </div>
    </footer>
  );
}
