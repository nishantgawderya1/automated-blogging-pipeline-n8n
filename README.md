# 🛍️ Flaunt Basket

> **RSS → AI Rewrite → GitHub → Vercel → Live Blog**
> Fully automated luxury editorial blog powered by n8n, Google Gemini, and a React + Vite frontend. New articles publish themselves every morning — zero manual effort.

---

## ✨ What This Does

Every day at 8 AM, this workflow:

1. Pulls the latest articles from your RSS feed sources
2. Limits to the top 3 posts to keep costs low and quality high
3. Rewrites each article in your brand's luxury editorial voice using **Google Gemini AI**
4. Generates SEO-optimised title, description, keywords, and category
5. Extracts the hero image automatically from the source HTML
6. Commits a clean JSON file to `src/data/posts/` in this repo
7. Triggers a **Vercel rebuild** — post is live within 60 seconds

**No WordPress. No backend. No database. Just JSON files and a React frontend.**

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19 + Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router DOM v7 |
| **Automation** | n8n |
| **AI Model** | Google Gemini 1.5 Pro |
| **Hosting** | Vercel |

---

## 🗺️ Automation Flow

```
RSS Feed Trigger (8 AM daily)
        │
        ▼
Limit — Top 3 Posts
        │
        ▼
AI Agent — Gemini Rewrite
   ├── [sub] Google Gemini Chat Model
   └── [sub] Structured Output Parser
        │
        ▼
Code — Build Post + Base64
        │
        ▼
GitHub — Commit Post JSON  (→ src/data/posts/{slug}.json)
        │
        ▼
Vercel — Trigger Rebuild
        │
        ▼
Log — Success ✅

Error Trigger ──► Code — Format Error ──► [Notification node]
```

---

## 🧩 n8n Node Summary

| # | Node | Type | Key Setting |
|---|---|---|---|
| 1 | RSS Feed Trigger | `rssFeedReadTrigger` | Feed URL · 8 AM daily |
| 2 | Limit | `limit` | Max Items: 3 (use 1 for testing) |
| 3 | AI Agent | `langchain.agent` | System prompt with brand voice |
| 4 | Gemini Chat Model | `lmChatGoogleGemini` | `gemini-1.5-pro-latest` · temp `0.7` |
| 5 | Structured Output Parser | `outputParserStructured` | Enforces JSON schema |
| 6 | Code — Build Post | `code` | Slug + image extract + Base64 |
| 7 | GitHub — Commit JSON | `httpRequest PUT` | Contents API · PAT auth |
| 8 | Vercel — Trigger Rebuild | `httpRequest POST` | Deploy hook URL |
| 9 | Log — Success | `code` | Extend with Slack/Telegram |
| 10 | Error Trigger | `errorTrigger` | Catches failures silently |

### Key Node Details

**AI Agent prompt:**
```
Write a SEO-optimised blog post for Flaunt Basket on topic {{ $json.title }}
based on: {{ $json['content:encodedSnippet'] }}

Return ONLY raw JSON: title, description, category, date, content, keywords, featured
```

**Output Parser schema:**
```json
{ "title": "string", "description": "string", "category": "WATCHES or FINE JEWELLERY",
  "date": "string", "content": "string", "keywords": "string", "featured": false }
```

**Code node — image extraction priority:**
1. `<img src="...">` in `content:encoded` HTML
2. Direct `.jpg/.png/.webp` URL in raw text
3. RSS `enclosure.url` field
4. Empty string (graceful fallback)

> ⚠️ The `$('Limit1')` reference in the Code node must match your Limit node's **exact canvas name**.

**GitHub node:** `PUT https://api.github.com/repos/{USERNAME}/{REPO}/contents/src/data/posts/{slug}.json`
— Add a Fine-grained PAT (Contents: Read & Write) as a Header Auth credential (`Authorization: Bearer ...`).

**Vercel node:** `POST` your deploy hook URL (Vercel → Project → Settings → Git → Deploy Hooks).

---

## ⚛️ Frontend Architecture

The React + Vite frontend consumes the JSON files committed by the pipeline — no API, no backend.

### Project Structure

```
flaunt-basket/
└── src/
    ├── data/
    │   └── posts/            ← n8n writes JSON files here
    ├── hooks/
    │   └── useArticles.js    # Glob-imports all post JSONs
    ├── pages/
    │   ├── HomePage.jsx      # Article grid + featured hero
    │   └── ArticlePage.jsx   # Full article reader
    └── components/
        ├── Navbar.jsx · Footer.jsx · ArticleCard.jsx
        ├── ArticleGrid.jsx · CategoryHero.jsx · FeaturedAd.jsx
```

### Content Hook

```javascript
// src/hooks/useArticles.js
const modules = import.meta.glob('../data/posts/*.json', { eager: true });

export const articles = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => b.id - a.id);  // newest first

export const getArticleBySlug = (slug) =>
  articles.find(a => a.slug === slug) ?? null;
```

### JSON Post Schema

```typescript
{
  id: number;        // Unix timestamp ms — sort order
  slug: string;      // URL-safe identifier
  title: string;
  description: string;
  image: string;
  category: string;  // "FINE JEWELLERY" | "WATCHES"
  date: string;
  featured: boolean;
  content: string;   // Paragraphs separated by \n\n
  keywords: string;
  sourceUrl: string;
  publishedAt: string;
}
```

---

## 🛠️ Local Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
```

---

## ✅ Setup Checklist

- [ ] Google Gemini API key added to n8n
- [ ] GitHub Fine-grained PAT added to n8n (Contents: Read & Write)
- [ ] Vercel deploy hook URL added to Vercel node
- [ ] RSS Feed URL set in RSS Trigger node
- [ ] GitHub username + repo name replaced in GitHub node URL
- [ ] Brand voice updated in AI Agent system prompt
- [ ] `Limit1` node name matches the Code node reference
- [ ] `src/data/posts/` directory exists in repo
- [ ] Test with Limit = `1` before enabling schedule

---

## 🔧 Common Issues

| Problem | Fix |
|---|---|
| `Referenced node doesn't exist` | `$('Limit1')` must match the Limit node's exact name |
| GitHub returns 422 | SHA missing — add a SHA fetch step before the PUT |
| GitHub returns 401 | PAT expired or wrong scope — regenerate |
| AI returns empty fields | Lower Gemini temperature; check parser schema |
| Images not extracting | Verify `content:encoded` exists in RSS output |
| Vercel not rebuilding | Confirm deploy hook URL is correct and active |
| Posts not loading | Check `import.meta.glob` path matches `src/data/posts/` |

---

## 📄 License

MIT — free to use, fork, and modify.

*Built with n8n · Google Gemini · GitHub API · Vercel · React + Vite · Tailwind CSS*
