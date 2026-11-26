import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Education", "/education"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Articles", "/articles"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];
export default function Header() {
  const [dark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}, []);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5" : ""}`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-display font-bold text-xl tracking-tight relative z-10"
        >
          <span className="text-zinc-900 dark:text-white">dulaj</span>
          <span className="text-accent">.</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-6 text-sm" role="list">
          {links.map(([label, path]) => (
            <li key={path}>
              <NavLink
                end={path === "/"}
                to={path}
                className={({ isActive }) =>
                  `nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${isActive ? "active on text-zinc-900 dark:text-white" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {/* <button
            onClick={() => setDark((v) => !v)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? (
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button> */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Hire me →
          </Link>
          <button
            onClick={() => setMenu((v) => !v)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
            aria-label="Toggle menu"
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {menu && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
          <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium">
            {links.map(([label, path]) => (
              <li key={path}>
                <NavLink
                  end={path === "/"}
                  onClick={() => setMenu(false)}
                  to={path}
                  className="block text-zinc-700 dark:text-zinc-300 hover:text-accent"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
