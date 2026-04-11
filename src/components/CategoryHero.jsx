export default function CategoryHero({ image, category }) {
  return (
    <section className="w-full bg-white" id="category-hero">
      {/* Category heading */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 pb-6 text-center">
        <p className="font-sans-ui text-[10px] uppercase tracking-[0.18em] text-[#888888] mb-4">
          The Magazine
        </p>
        <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-[0.06em] text-[#111111] leading-none">
          Watches &amp; Jewellery
        </h1>
        <div className="mt-6 w-full h-px bg-[#111111]" />
      </div>

      {/* Full-width cinematic hero image */}
      <div className="w-full aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/7] overflow-hidden relative">
        <img
          src={image}
          alt="Watches & Jewellery editorial hero"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Subtle bottom gradient to blend with white bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))' }}
        />
      </div>
    </section>
  );
}
