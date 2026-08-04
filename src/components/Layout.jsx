import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { type: "route", to: "/", label: "Home", end: true },
    { type: "route", to: "/about", label: "About" },
    { type: "anchor", to: "#contact", label: "Contact" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}`;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="text-lg font-semibold tracking-[0.24em] text-slate-800 sm:text-xl">
            SUNHOUR
          </NavLink>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden flex-1 items-center justify-end gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.type === "route" ? (
                <NavLink key={item.label} to={item.to} end={item.end} className={linkClass}>
                  {item.label}
                </NavLink>
              ) : (
                <a
                  key={item.label}
                  href={item.to}
                  className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-md md:hidden">
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.type === "route" ? (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-100"}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    key={item.label}
                    href={item.to}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          </div>
        )}
      </header>

      <main className="mt-16 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
