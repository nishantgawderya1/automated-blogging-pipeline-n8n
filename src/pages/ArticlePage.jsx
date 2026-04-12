import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, articles } from '../hooks/useArticles';
import ArticleCard from '../components/ArticleCard';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

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

  // Related posts — same category, exclude current, max 3
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== slug)
    .slice(0, 3);

  // Split content on double newlines into paragraphs
  const paragraphs = article.content
    ? article.content.split('\n\n').filter(Boolean)
    : [];

  // Split keywords into tags
  const keywords = article.keywords
    ? article.keywords.split(',').map((k) => k.trim()).filter(Boolean)
    : [];

  return (
    <main className="bg-white" id="article-page">
      {/* Hero image */}
      {article.image && (
        <div className="w-full aspect-[16/7] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      )}

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

        {/* Description / dek */}
        {article.description && (
          <p className="font-editorial italic text-[#555555] text-xl md:text-2xl leading-relaxed mb-10 border-l-2 border-[#e0e0e0] pl-5">
            {article.description}
          </p>
        )}

        <div className="h-px bg-[#e0e0e0] mb-10" />

        {/* Body copy */}
        <div className="font-editorial text-[1.1rem] leading-[1.9] text-[#222222] space-y-6">
          {paragraphs.length > 0 ? (
            paragraphs.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            // Fallback placeholder if content field is empty (e.g. n8n test post)
            <p className="text-[#888888] italic">Content coming soon.</p>
          )}
        </div>

        {/* Keywords / tags */}
        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12">
            {keywords.map((k) => (
              <span
                key={k}
                className="font-sans-ui text-[9px] uppercase tracking-[0.14em] text-[#888888] border border-[#e0e0e0] px-3 py-1"
              >
                {k}
              </span>
            ))}
          </div>
        )}

        <div className="h-px bg-[#e0e0e0] mt-12 mb-8" />

        {/* Source link */}
        {article.sourceUrl && (
          <p className="font-sans-ui text-[10px] uppercase tracking-[0.12em] text-[#aaaaaa] mb-6">
            Source:{' '}
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors border-b border-[#cccccc]"
            >
              Original article ↗
            </a>
          </p>
        )}

        {/* Back link */}
        <Link
          to="/"
          id="back-to-home"
          className="font-sans-ui text-[10px] uppercase tracking-[0.12em] text-[#888888] hover:text-[#111111] transition-colors border-b border-[#cccccc] hover:border-[#111111] pb-0.5"
        >
          ← All Watches &amp; Jewellery
        </Link>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans-ui text-[10px] uppercase tracking-[0.18em] text-[#888888]">
              Related Stories
            </span>
            <div className="flex-1 h-px bg-[#e0e0e0]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((post) => (
              <ArticleCard key={post.slug} article={post} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
