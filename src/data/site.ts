export const business = {
  name: "Landscape Lighting & More",
  phone: "(619) 555-0198",
  phoneHref: "tel:+16195550198",
  email: "hello@landscapelightingmore.com",
  emailHref: "mailto:hello@landscapelightingmore.com",
  googleReviews: "https://www.google.com/search?q=Landscape+Lighting+%26+More+San+Diego+reviews",
  mapEmbed: "https://www.google.com/maps?q=San%20Diego%2C%20CA&output=embed",
};

export const serviceImages = {
  landscape:
    "https://images.pexels.com/photos/31188254/pexels-photo-31188254.jpeg?auto=compress&cs=tinysrgb&w=1600",
  system:
    "https://images.pexels.com/photos/32751744/pexels-photo-32751744.jpeg?auto=compress&cs=tinysrgb&w=1600",
  bistro:
    "https://images.pexels.com/photos/10285093/pexels-photo-10285093.jpeg?auto=compress&cs=tinysrgb&w=1200",
  maintenance:
    "https://images.pexels.com/photos/1389431/pexels-photo-1389431.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const services = [
  {
    title: "Landscape Lighting",
    short: "Layered lighting for entries, paths, palms, gardens, and outdoor living spaces.",
    description:
      "Warm architectural lighting placed for depth, curb appeal, and comfortable night use.",
    image: serviceImages.landscape,
  },
  {
    title: "12V System Installation & Repair",
    short: "Low-voltage design, troubleshooting, transformer work, and fixture replacement.",
    description:
      "Reliable 12V systems built for San Diego homes, with careful routing and clean finishes.",
    image: serviceImages.system,
  },
  {
    title: "Bistro Lighting",
    short: "String lighting layouts for patios, courtyards, dining areas, and gatherings.",
    description:
      "Elegant bistro lighting with balanced spacing, warm glow, and secure hardware.",
    image: serviceImages.bistro,
  },
  {
    title: "Maintenance / Upgrades",
    short: "Refresh older systems with LED fixtures, cleaner wiring, and better coverage.",
    description:
      "Service visits for repairs, adjustments, upgrades, timers, and seasonal refinements.",
    image: serviceImages.maintenance,
  },
];

export const reviews = [
  {
    name: "Marissa G.",
    text: "The night demo made the decision easy. The final lighting looks natural and polished.",
  },
  {
    name: "Daniel R.",
    text: "Clean install, great communication, and the backyard feels completely different at night.",
  },
  {
    name: "Priya S.",
    text: "They fixed our old 12V system and added path lights that match the house perfectly.",
  },
  {
    name: "James L.",
    text: "The bistro lights over our patio are warm, even, and exactly what we wanted.",
  },
];
