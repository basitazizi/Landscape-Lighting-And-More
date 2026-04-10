import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="nav-shell mx-auto flex h-20 max-w-7xl items-center justify-between px-3 sm:px-5 lg:px-6">
        <NavLink to="/" className="brand-lockup" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <img
              src="/logo.png"
              alt="Landscape Lighting & More"
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
          </span>
          <span className="min-w-0 text-left">
            <span className="block text-[0.72rem] font-semibold uppercase leading-none text-white sm:text-sm">
              Landscape Lighting
            </span>
            <span className="mt-1 block text-[0.72rem] font-semibold uppercase leading-none text-gold sm:text-sm">
              & More
            </span>
          </span>
        </NavLink>

        <div className="nav-link-group hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : "text-white/75"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/booking"
          className="nav-consult hidden min-h-11 items-center justify-center rounded-lg border border-gold/70 bg-gold px-4 py-2 text-sm font-semibold uppercase text-black shadow-[0_0_28px_rgba(255,213,79,0.28)] transition hover:border-white hover:bg-white lg:inline-flex"
        >
          Book
        </NavLink>

        <button
          className="menu-toggle md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-6 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-6 bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div className={`mobile-panel mx-auto max-w-7xl md:hidden ${open ? "is-open" : ""}`}>
        <div className="mobile-panel-inner">
          <div className="grid gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `mobile-nav-link ${
                    isActive
                      ? "border-gold/70 bg-gold/10 text-gold"
                      : "border-white/10 bg-white/[0.03] text-white/75"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          </div>
        </div>
      </div>
    </header>
  );
}
