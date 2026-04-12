import { useState } from 'react';
import { articles, getFeaturedArticle } from '../hooks/useArticles';
import CategoryHero from '../components/CategoryHero';
import ArticleGrid from '../components/ArticleGrid';

const CATEGORIES = ['ALL', 'WATCHES', 'FINE JEWELLERY'];
const POSTS_PER_PAGE = 6;

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [page, setPage] = useState(1);

  const featured = getFeaturedArticle();

  const filtered =
    activeCategory === 'ALL'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
    setPage(1);
  }

  return (
    <main>
      <CategoryHero
        image={featured?.image || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1800&q=85'}
      />
      <ArticleGrid
        articles={paginated}
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </main>
  );
}
