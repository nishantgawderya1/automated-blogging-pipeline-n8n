import CategoryHero from '../components/CategoryHero';
import ArticleGrid from '../components/ArticleGrid';
import { articles } from '../data/articles';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1800&q=85';

export default function HomePage() {
  return (
    <main>
      <CategoryHero image={HERO_IMAGE} />
      <ArticleGrid articles={articles} />
    </main>
  );
}
