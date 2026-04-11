import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'FASHION', to: '/fashion' },
  { label: 'BEAUTY', to: '/beauty' },
  { label: 'WATCHES & JEWELLERY', to: '/' },
  { label: 'CULTURE', to: '/culture' },
  { label: 'LIVING', to: '/living' },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#e0e0e0] sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link
            to="/"
            className="font-editorial text-3xl lg:text-4xl font-bold tracking-[0.08em] text-[#111111] leading-none select-none"
            id="site-logo"
          >
            GRAZIA
          </Link>

          {/* Nav links — center */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                id={`nav-link-${link.label.toLowerCase().replace(/[^a-z]/g, '-')}`}
                className={({ isActive }) =>
                  `font-sans-ui text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? 'text-[#111111] border-b border-[#111111]'
                      : 'text-[#888888] hover:text-[#111111]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Search icon */}
          <button
            id="search-toggle"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Open search"
            className="p-2 text-[#111111] hover:text-[#888888] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        <nav className="lg:hidden flex gap-5 pb-3 overflow-x-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-sans-ui text-[10px] uppercase tracking-[0.1em] font-medium whitespace-nowrap pb-0.5 ${
                  isActive
                    ? 'text-[#111111] border-b border-[#111111]'
                    : 'text-[#888888]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="border-t border-[#e0e0e0] bg-white px-6 lg:px-10 py-4 flex items-center gap-4">
          <input
            id="search-input"
            autoFocus
            type="text"
            placeholder="Search watches & jewellery..."
            className="flex-1 font-editorial text-lg text-[#111111] placeholder:text-[#bbbbbb] outline-none bg-transparent"
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="font-sans-ui text-[11px] uppercase tracking-[0.1em] text-[#888888] hover:text-[#111111] transition-colors"
          >
            CLOSE
          </button>
        </div>
      )}
    </header>
  );
}
