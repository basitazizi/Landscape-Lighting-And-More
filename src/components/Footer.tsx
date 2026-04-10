import { Link } from "react-router-dom";
import { business } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer-shell border-t border-white/10 px-4 py-7 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Landscape Lighting & More" className="h-14 w-14 object-contain" />
          <div>
            <p className="text-sm font-semibold uppercase text-white">Landscape Lighting & More</p>
            <p className="mt-1 text-sm text-soft">San Diego outdoor lighting</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-[auto_auto] sm:items-center md:justify-end">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
            <Link className="hover:text-gold" to="/">
              Home
            </Link>
            <Link className="hover:text-gold" to="/services">
              Services
            </Link>
            <Link className="hover:text-gold" to="/booking">
              Booking
            </Link>
            <Link className="hover:text-gold" to="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70 sm:justify-end">
            <a className="hover:text-gold" href={business.phoneHref}>
              {business.phone}
            </a>
            <a className="hover:text-gold" href={business.emailHref}>
              {business.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
