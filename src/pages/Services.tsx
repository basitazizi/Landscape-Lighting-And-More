import ButtonLink from "../components/ButtonLink";
import SectionHeader from "../components/SectionHeader";
import { services } from "../data/site";

export default function Services() {
  return (
    <div className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Lighting designed around the property, not a template."
          text="Each service is planned for warm color, clean installation, and a balanced night view."
        />

        <div className="mt-14 space-y-10">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-72 w-full object-cover transition duration-700 hover:scale-105 sm:h-96"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">{service.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-soft">{service.description}</p>
                <ButtonLink to="/booking" className="mt-8">
                  Book This Service
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
