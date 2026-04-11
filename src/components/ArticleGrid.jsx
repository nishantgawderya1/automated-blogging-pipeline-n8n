import ArticleCard from './ArticleCard';
import FeaturedAd from './FeaturedAd';
import { featuredAd } from '../data/articles';

export default function ArticleGrid({ articles }) {
  const [featured, ...rest] = articles;

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14" id="article-grid">

      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <span className="font-sans-ui text-[10px] uppercase tracking-[0.18em] text-[#888888]">
          Latest Stories
        </span>
        <div className="flex-1 h-px bg-[#e0e0e0]" />
      </div>

      {/* Primary 3-column grid: [Large] [Middle stack] [Ad] */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr_1fr] gap-8 lg:gap-0 mb-16">

        {/* LEFT — large featured card (~40% width) */}
        <div className="lg:pr-8 lg:border-r lg:border-[#e8e8e8]">
          {featured && <ArticleCard article={featured} size="large" />}
        </div>

        {/* CENTER — bold title + description, stacked articles */}
        <div className="lg:px-8 lg:border-r lg:border-[#e8e8e8] flex flex-col gap-8">
          {rest.slice(0, 3).map((article) => (
            <div key={article.id}>
              <ArticleCard article={article} size="normal" />
              <div className="mt-8 h-px bg-[#f0f0f0]" />
            </div>
          ))}
        </div>

        {/* RIGHT — featured ad / sponsored post */}
        <div className="lg:pl-8">
          <FeaturedAd ad={featuredAd} />
        </div>
      </div>

      {/* Divider with label */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-[#e0e0e0]" />
        <span className="font-sans-ui text-[10px] uppercase tracking-[0.18em] text-[#888888]">
          More to Explore
        </span>
        <div className="flex-1 h-px bg-[#e0e0e0]" />
      </div>

      {/* Secondary horizontal list */}
      <div className="flex flex-col gap-8">
        {rest.slice(3).map((article) => (
          <ArticleCard key={article.id} article={article} horizontal />
        ))}
      </div>
    </section>
  );
}
