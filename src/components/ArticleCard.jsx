import { Link } from 'react-router-dom';

export default function ArticleCard({ article, size = 'normal', horizontal = false }) {
  const isLarge = size === 'large';

  if (horizontal) {
    return (
      <article className="group flex flex-col sm:flex-row gap-5 border-b border-[#e8e8e8] pb-8">
        <Link
          to={`/article/${article.slug}`}
          id={`card-img-${article.id}`}
          className="block shrink-0 w-full sm:w-48 md:w-56 overflow-hidden"
        >
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center gap-2">
          <span className="font-sans-ui text-[9px] uppercase tracking-[0.15em] text-[#888888]">
            {article.category} — {article.date}
          </span>
          <Link to={`/article/${article.slug}`} id={`card-title-${article.id}`}>
            <h3 className="font-editorial text-lg md:text-xl font-bold uppercase tracking-[0.03em] text-[#111111] leading-tight group-hover:underline decoration-1 underline-offset-2 transition-all duration-200">
              {article.title}
            </h3>
          </Link>
          <p className="font-editorial italic text-[#888888] text-sm md:text-base leading-relaxed">
            {article.description}
          </p>
          <Link
            to={`/article/${article.slug}`}
            className="mt-1 inline-block font-sans-ui text-[10px] uppercase tracking-[0.12em] text-[#111111] border-b border-[#111111] pb-0.5 w-fit hover:text-[#888888] hover:border-[#888888] transition-colors duration-200"
          >
            Read More
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col gap-4">
      <Link
        to={`/article/${article.slug}`}
        id={`card-img-${article.id}`}
        className="block overflow-hidden"
      >
        <div className={`w-full overflow-hidden ${isLarge ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-2 px-1">
        <span className="font-sans-ui text-[9px] uppercase tracking-[0.15em] text-[#888888]">
          {article.category} — {article.date}
        </span>

        <Link to={`/article/${article.slug}`} id={`card-title-${article.id}`}>
          <h2
            className={`font-editorial font-bold uppercase tracking-[0.03em] text-[#111111] leading-tight group-hover:underline decoration-1 underline-offset-2 transition-all duration-200 ${
              isLarge ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-lg md:text-xl'
            }`}
          >
            {article.title}
          </h2>
        </Link>

        <p
          className={`font-editorial italic text-[#888888] leading-relaxed ${
            isLarge ? 'text-base md:text-lg' : 'text-sm md:text-base'
          }`}
        >
          {article.description}
        </p>

        <Link
          to={`/article/${article.slug}`}
          className="mt-1 inline-block font-sans-ui text-[10px] uppercase tracking-[0.12em] text-[#111111] border-b border-[#111111] pb-0.5 w-fit hover:text-[#888888] hover:border-[#888888] transition-colors duration-200"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
