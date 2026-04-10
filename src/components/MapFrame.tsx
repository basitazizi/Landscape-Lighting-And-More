import { business } from "../data/site";

export default function MapFrame() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(255,213,79,0.08)]">
      <iframe
        title="San Diego service area map"
        src={business.mapEmbed}
        className="h-72 w-full grayscale invert contrast-125 md:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
