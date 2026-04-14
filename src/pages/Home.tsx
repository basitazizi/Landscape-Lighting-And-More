import ButtonLink from "../components/ButtonLink";
import MapFrame from "../components/MapFrame";
import SectionHeader from "../components/SectionHeader";
import StringLights from "../components/StringLights";
import { business, services } from "../data/site";

export default function Home() {
  return (
    <>
      <section className="hero-section relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pt-40 lg:px-8">
        <div className="hero-graphic" aria-hidden="true">
          <div className="hero-ambient-wash" />
          <div className="hero-house-silhouette">
            <span className="hero-house-roof" />
            <span className="hero-house-body" />
            <span className="hero-house-wing hero-house-wing-left" />
            <span className="hero-house-wing hero-house-wing-right" />
            <span className="hero-house-window hero-house-window-one" />
            <span className="hero-house-window hero-house-window-two" />
            <span className="hero-house-window hero-house-window-three" />
          </div>
          <div className="hero-yard-lines">
            <span className="hero-yard-line hero-yard-line-one" />
            <span className="hero-yard-line hero-yard-line-two" />
            <span className="hero-yard-line hero-yard-line-three" />
          </div>
          <div className="hero-path-lights">
            <span className="hero-path-light hero-path-light-one" />
            <span className="hero-path-light hero-path-light-two" />
            <span className="hero-path-light hero-path-light-three" />
            <span className="hero-path-light hero-path-light-four" />
          </div>
          <div className="hero-light-dust" />
          <img className="hero-logo-watermark" src="/logo.png" alt="" />
        </div>
        <div className="hero-black-overlay" />
        <div className="hero-vignette" />
        <div className="hero-warm-field" />
        <div className="hero-headline-glow" />
        <div className="hero-fog" />
        <StringLights />
        <div className="hero-copy relative z-10 mx-auto max-w-6xl text-center">
          <img
            className="hero-logo-emblem mx-auto mb-7 h-24 w-24 object-contain sm:h-28 sm:w-28"
            src="/logo.png"
            alt="Landscape Lighting & More"
          />
          <p className="mb-8 text-xs font-semibold uppercase text-gold">
            San Diego Outdoor Lighting
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[0.88] text-gray-900 sm:text-7xl lg:text-8xl">
            Illuminate Your Outdoor Space
          </h1>
          <p className="mx-auto mt-9 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            Custom lighting design with a free night demonstration
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink to="/booking" className="hero-button w-full max-w-xs sm:w-auto sm:max-w-none">
              Book Consultation
            </ButtonLink>
            <ButtonLink
              to="/services"
              variant="secondary"
              className="hero-button-outline w-full max-w-xs sm:w-auto sm:max-w-none"
            >
              View Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Services"
              title="Outdoor lighting with a warm, intentional finish."
              text="Design, installation, repairs, and upgrades for homes and businesses across San Diego."
            />
            <ButtonLink to="/services" variant="secondary" className="md:self-end">
              View Services
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <article
                key={service.title}
                className="group rounded-lg border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_0_45px_rgba(255,213,79,0.12)]"
              >
                <div className="mb-8 h-px w-16 bg-gold/70 shadow-[0_0_18px_rgba(255,213,79,0.7)] transition group-hover:w-24" />
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-soft">{service.short}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <SectionHeader
            eyebrow="Consultation"
            title="Free Night Lighting Demonstration"
            text="See the design on your property before making a commitment."
          />
          <div className="rounded-lg border border-gold/25 bg-gold/[0.04] p-6 shadow-[0_0_55px_rgba(255,213,79,0.12)]">
            <ul className="space-y-4 text-base text-gray-900">
              {["We come to your property", "Show lighting setup live", "No commitment required"].map(
                (item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold shadow-[0_0_14px_rgba(255,213,79,0.9)]" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
            <ButtonLink to="/booking" className="mt-8 w-full">
              Book Free Consultation
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Contact" title="Serving San Diego properties." />
            <div className="mt-8 space-y-3 text-lg">
              <a className="block text-gray-900 transition hover:text-gold" href={business.phoneHref}>
                {business.phone}
              </a>
              <a className="block text-gray-900 transition hover:text-gold" href={business.emailHref}>
                {business.email}
              </a>
            </div>
          </div>
          <MapFrame />
        </div>
      </section>
    </>
  );
}
