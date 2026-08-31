import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/", exact: true },
  { label: "Services", to: "/", hash: "services" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-primary transition-opacity hover:opacity-90"
          aria-label="Sawaari home"
        >
          Sawaari
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.exact }}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border bg-background shadow-lg md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 lg:px-8" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                activeProps={{ className: "text-primary bg-accent" }}
                activeOptions={{ exact: item.exact }}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
