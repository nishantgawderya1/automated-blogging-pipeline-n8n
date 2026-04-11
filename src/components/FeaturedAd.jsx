export default function FeaturedAd({ ad }) {
  return (
    <aside
      id="featured-ad"
      className="group relative overflow-hidden flex flex-col cursor-pointer h-full min-h-[380px]"
    >
      {/* Image fills card */}
      <div className="absolute inset-0">
        <img
          src={ad.image}
          alt={ad.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)' }}
      />

      {/* Sponsored label */}
      <div className="relative z-10 p-5">
        <span className="font-sans-ui text-[9px] uppercase tracking-[0.2em] text-white/70 bg-white/10 border border-white/30 px-2 py-1">
          Sponsored
        </span>
      </div>

      {/* Copy — sits at bottom */}
      <div className="relative z-10 mt-auto p-5 flex flex-col gap-2">
        <h3 className="font-editorial text-xl md:text-2xl font-bold uppercase tracking-[0.04em] text-white leading-tight">
          {ad.title}
        </h3>
        <p className="font-editorial italic text-white/80 text-sm leading-relaxed">
          {ad.subtitle}
        </p>
        <button
          id="featured-ad-cta"
          className="mt-3 inline-block font-sans-ui text-[10px] uppercase tracking-[0.14em] text-white border border-white/60 px-4 py-2 w-fit hover:bg-white hover:text-[#111111] transition-all duration-300"
        >
          {ad.cta}
        </button>
      </div>
    </aside>
  );
}
