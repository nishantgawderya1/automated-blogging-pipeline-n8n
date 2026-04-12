import ArticleCard from './ArticleCard';
import FeaturedAd from './FeaturedAd';
import Pagination from './Pagination';

const featuredAd = {
  title: 'BASELWORLD RETURNS',
  subtitle:
    "The world's most prestigious watch fair opens its doors. Discover the pieces that will define the next decade.",
  cta: 'EXPLORE THE FAIR',
  image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80',
};

export default function ArticleGrid({
  articles,
  categories,
  activeCategory,
  onCategoryChange,
  currentPage,
  totalPages,
  onPageChange,
}) {
  const [featured, ...rest] = articles;

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14" id="article-grid">

      {/* Category filter bar */}
      {categories && (
        <div className="flex items-center gap-6 mb-10 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => onCategoryChange(cat)}
              className={`font-sans-ui text-[10px] uppercase tracking-[0.18em] whitespace-nowrap pb-0.5 transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-[#111111] border-b border-[#111111]'
                  : 'text-[#888888] hover:text-[#111111]'
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="flex-1 h-px bg-[#e0e0e0] hidden lg:block" />
        </div>
      )}

      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <span className="font-sans-ui text-[10px] uppercase tracking-[0.18em] text-[#888888]">
          Latest Stories
        </span>
        <div className="flex-1 h-px bg-[#e0e0e0]" />
      </div>

      {articles.length === 0 ? (
        <p className="font-editorial italic text-[#888888] text-center py-16">
          No articles found in this category yet.
        </p>
      ) : (
        <>
          {/* Primary 3-column grid: [Large] [Middle stack] [Ad] */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr_1fr] gap-8 lg:gap-0 mb-16">

            {/* LEFT — large featured card */}
            <div className="lg:pr-8 lg:border-r lg:border-[#e8e8e8]">
              {featured && <ArticleCard article={featured} size="large" />}
            </div>

            {/* CENTER — stacked articles */}
            <div className="lg:px-8 lg:border-r lg:border-[#e8e8e8] flex flex-col gap-8">
              {rest.slice(0, 3).map((article) => (
                <div key={article.id}>
                  <ArticleCard article={article} size="normal" />
                  <div className="mt-8 h-px bg-[#f0f0f0]" />
                </div>
              ))}
            </div>

            {/* RIGHT — featured ad */}
            <div className="lg:pl-8">
              <FeaturedAd ad={featuredAd} />
            </div>
          </div>

          {/* Secondary horizontal list */}
          {rest.length > 3 && (
            <>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-[#e0e0e0]" />
                <span className="font-sans-ui text-[10px] uppercase tracking-[0.18em] text-[#888888]">
                  More to Explore
                </span>
                <div className="flex-1 h-px bg-[#e0e0e0]" />
              </div>
              <div className="flex flex-col gap-8">
                {rest.slice(3).map((article) => (
                  <ArticleCard key={article.id} article={article} horizontal />
                ))}
              </div>
            </>
          )}
        </>
      )}

      {/* Pagination */}
      <Pagination
        current={currentPage}
        total={totalPages}
        onChange={onPageChange}
      />
    </section>
  );
}
