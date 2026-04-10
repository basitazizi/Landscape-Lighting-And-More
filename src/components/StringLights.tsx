const bulbs = Array.from({ length: 7 }, (_, index) => index);

export default function StringLights() {
  return (
    <div className="string-light-layer pointer-events-none absolute inset-x-0 top-28 z-[2] h-64 overflow-hidden sm:top-32">
      <div className="absolute left-1/2 top-4 h-px w-[112vw] -translate-x-1/2 rotate-[-2deg] bg-white/22 shadow-[0_0_22px_rgba(255,255,255,0.18)]" />
      <div className="mx-auto flex max-w-5xl justify-between px-4 sm:px-8">
        {bulbs.map((item) => (
          <div
            key={item}
            className="relative flex flex-col items-center"
            style={{ transform: `translateY(${item % 2 === 0 ? 4 : 18}px)` }}
          >
            <span className="h-9 w-px bg-white/22" />
            <span
              className="bulb-beam"
              style={{ animationDelay: `${item * 0.18}s` }}
            />
            <span
              className="bulb-halo"
              style={{ animationDelay: `${item * 0.18}s` }}
            />
            <span
              className="bulb-glow h-8 w-5 rounded-b-full rounded-t-sm border border-gold/50 bg-[radial-gradient(circle_at_50%_28%,#fff7c2_0%,#ffd54f_34%,#f1a71f_58%,rgba(255,213,79,0.22)_100%)]"
              style={{ animationDelay: `${item * 0.18}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
