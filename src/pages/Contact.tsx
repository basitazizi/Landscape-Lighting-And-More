import MapFrame from "../components/MapFrame";
import SectionHeader from "../components/SectionHeader";
import { business } from "../data/site";

export default function Contact() {
  return (
    <div className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Tell us what you want to light."
          text="Send a message, call, or email to start a free consultation."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <label className="text-sm text-gray-600">
                Name
                <input className="mt-2 h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition focus:border-gold" />
              </label>
              <label className="text-sm text-gray-600">
                Email
                <input
                  type="email"
                  className="mt-2 h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition focus:border-gold"
                />
              </label>
              <label className="text-sm text-gray-600">
                Message
                <textarea className="mt-2 min-h-40 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gold" />
              </label>
              <button
                type="submit"
                className="min-h-12 rounded-lg border border-gold bg-gold px-5 py-3 text-sm font-semibold uppercase text-black shadow-[0_0_34px_rgba(255,213,79,0.34)] transition hover:border-white hover:bg-white"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <a className="block text-lg text-gray-900 transition hover:text-gold" href={business.phoneHref}>
                {business.phone}
              </a>
              <a className="mt-3 block text-lg text-white transition hover:text-gold" href={business.emailHref}>
                {business.email}
              </a>
              <a
                href={business.googleReviews}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold uppercase text-gray-900 transition hover:border-gold/70 hover:text-gold"
              >
                Google Reviews
              </a>
            </div>
          </div>

          <MapFrame />
        </div>
      </div>
    </div>
  );
}
