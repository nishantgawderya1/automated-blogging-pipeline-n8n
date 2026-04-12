// src/components/Pagination.jsx

export default function Pagination({ current, total, onChange }) {
  if (!total || total <= 1) return null;

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav
      className="flex items-center justify-center gap-1 mt-16 mb-4"
      aria-label="Pagination"
      id="pagination"
    >
      {/* Previous */}
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="font-sans-ui text-[11px] uppercase tracking-[0.12em] px-3 py-2 text-[#888888] hover:text-[#111111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* Page numbers */}
      {pages.map((p) => {
        // Always show first, last, current, and immediate neighbours
        const isVisible =
          p === 1 || p === total || Math.abs(p - current) <= 1;

        // Show ellipsis at position 2 or second-to-last if gap exists
        if (!isVisible) {
          if (p === 2 || p === total - 1) {
            return (
              <span
                key={p}
                className="font-sans-ui text-[11px] text-[#cccccc] px-1"
              >
                …
              </span>
            );
          }
          return null;
        }

        return (
          <button
            key={p}
            id={`page-btn-${p}`}
            onClick={() => onChange(p)}
            className={`font-sans-ui text-[11px] uppercase tracking-[0.1em] w-8 h-8 flex items-center justify-center transition-all duration-200 ${
              p === current
                ? 'bg-[#111111] text-white'
                : 'text-[#888888] hover:text-[#111111] border border-transparent hover:border-[#e0e0e0]'
            }`}
            aria-current={p === current ? 'page' : undefined}
          >
            {p}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="font-sans-ui text-[11px] uppercase tracking-[0.12em] px-3 py-2 text-[#888888] hover:text-[#111111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}
