// src/hooks/useArticles.js
// Single source of truth for all post data.
// Vite's import.meta.glob eagerly imports every JSON in src/data/posts/
// at build time — no runtime fetching, no API needed.

const modules = import.meta.glob('../data/posts/*.json', { eager: true });

export const articles = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.id - a.id); // newest first

export const getArticleBySlug = (slug) =>
  articles.find((a) => a.slug === slug) ?? null;

export const getArticlesByCategory = (category) =>
  articles.filter((a) => a.category === category);

export const getFeaturedArticle = () =>
  articles.find((a) => a.featured === true) ?? articles[0] ?? null;
