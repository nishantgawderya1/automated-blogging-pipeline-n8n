import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-[760px] mx-auto px-6 py-24 text-center">
        <h1 className="font-editorial text-4xl font-bold uppercase text-[#111111] mb-4">
          Article Not Found
        </h1>
        <Link
          to="/"
          className="font-sans-ui text-[11px] uppercase tracking-[0.12em] text-[#888888] hover:text-[#111111] transition-colors border-b border-[#888888] pb-0.5"
        >
          ← Back to Watches &amp; Jewellery
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white" id="article-page">
      {/* Hero image */}
      <div className="w-full aspect-[16/7] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Article content */}
      <article className="max-w-[760px] mx-auto px-6 lg:px-0 py-14">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-sans-ui text-[9px] uppercase tracking-[0.18em] text-[#888888]">
            {article.category}
          </span>
          <span className="text-[#cccccc]">—</span>
          <span className="font-sans-ui text-[9px] uppercase tracking-[0.12em] text-[#888888]">
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-editorial text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.03em] text-[#111111] leading-tight mb-6">
          {article.title}
        </h1>

        {/* Dek / description */}
        <p className="font-editorial italic text-[#555555] text-xl md:text-2xl leading-relaxed mb-10 border-l-2 border-[#e0e0e0] pl-5">
          {article.description}
        </p>

        <div className="h-px bg-[#e0e0e0] mb-10" />

        {/* Body copy — simulated editorial text */}
        <div className="font-editorial text-[1.1rem] leading-[1.9] text-[#222222] space-y-6">
          <p>
            The history of fine jewellery is a chronicle of human desire — our compulsion to adorn, to signal status, to mark love, and to preserve memory in metal and stone. Few pieces capture this impulse as completely as the subject of our story today.
          </p>
          <p>
            From the ateliers of the great maisons to the independent makers reshaping the landscape, the world of jewellery has rarely felt so alive. New materials sit alongside ancient techniques; digital design tools collaborate with hands that have shaped metal for decades.
          </p>
          <h2 className="font-editorial text-2xl font-bold uppercase tracking-[0.04em] text-[#111111] pt-4">
            Craftsmanship Beyond Compare
          </h2>
          <p>
            What separates truly great jewellery from merely beautiful jewellery is the depth of intention behind every decision. The choice of stone, the direction of the setting, the finish on the back of a piece that will never be seen — these are the marks of a maker who understands that excellence is not a performance for an audience, but a private conversation between craftsperson and material.
          </p>
          <p>
            In an era of fast fashion and disposable luxury, the enduring appeal of a meticulously crafted piece feels almost radical. To own a jewel of true quality is to participate in a kind of resistance — a refusal to accept the temporary, the convenient, the merely good enough.
          </p>
          <h2 className="font-editorial text-2xl font-bold uppercase tracking-[0.04em] text-[#111111] pt-4">
            The Modern Collector
          </h2>
          <p>
            Today's collector is more informed, more adventurous, and more personally expressive than any generation before. They research provenance, they ask about sustainability, they commission bespoke pieces that tell their own stories. The question is no longer which great house to patronise — it is which vision resonates most deeply with who you are, and who you intend to become.
          </p>
          <p>
            This editorial journal exists to guide that search — not with the language of salesmanship, but with the vocabulary of genuine appreciation for what is rare, considered, and beautifully made.
          </p>
        </div>

        <div className="h-px bg-[#e0e0e0] mt-12 mb-8" />

        {/* Back link */}
        <Link
          to="/"
          id="back-to-home"
          className="font-sans-ui text-[10px] uppercase tracking-[0.12em] text-[#888888] hover:text-[#111111] transition-colors border-b border-[#cccccc] hover:border-[#111111] pb-0.5"
        >
          ← All Watches &amp; Jewellery
        </Link>
      </article>
    </main>
  );
}
