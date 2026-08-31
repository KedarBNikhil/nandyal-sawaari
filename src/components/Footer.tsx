import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary" aria-label="Sawaari home">
              Sawaari
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Local mobility for Nandyal. Connecting customers with nearby captains for simple, convenient rides.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Support email and contact information will be added soon.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Sawaari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
