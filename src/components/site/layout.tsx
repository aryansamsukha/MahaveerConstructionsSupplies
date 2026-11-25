import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, categories, solutions, whatsappUrl } from "@/data/catalogue";
import { QuoteLink } from "./shared";
const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Solutions", to: "/solutions" },
  { name: "Brands", to: "/brands" },
  { name: "Industries", to: "/industries" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
] as const;
export function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="Mahaveer Construction Suppliers home">
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M3 33V13L12 6L20 13L28 6L37 13V33H29V17L24 21V33H16V21L11 17V33H3Z"
          fill="currentColor"
        />
      </svg>
      <span>
        MAHAVEER<small>CONSTRUCTION SUPPLIERS</small>
      </span>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <div className="nav-item" key={link.to}>
              <Link to={link.to} className={isActive(link.to) ? "nav-link active" : "nav-link"}>
                <span>{link.name}</span>
                {(link.to === "/products" || link.to === "/solutions") && (
                  <ChevronDown size={13} className="nav-chevron" />
                )}
              </Link>
              {link.to === "/products" && (
                <div className="nav-dropdown">
                  <span className="nav-dropdown-label">Product Categories</span>
                  {categories.map((category) => (
                    <Link key={category} to="/products" search={{ category }}>
                      <span>{category}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  ))}
                  <Link to="/products" className="nav-dropdown-all">
                    <span>Browse all products</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              )}
              {link.to === "/solutions" && (
                <div className="nav-dropdown">
                  <span className="nav-dropdown-label">Engineering Solutions</span>
                  {solutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      to="/solutions/$slug"
                      params={{ slug: solution.slug }}
                    >
                      <span>{solution.title}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  ))}
                  <Link to="/solutions" className="nav-dropdown-all">
                    <span>All solutions</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="header-quote">
          <QuoteLink />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={isActive(link.to) ? "mobile-nav-link active" : "mobile-nav-link"}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <div className="mobile-nav-actions">
            <QuoteLink />
          </div>
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Wordmark />
          <p>
            Materials. Engineering. Infrastructure.
            <br />A considered approach to construction supply.
          </p>
          <a className="footer-phone" href={contact.phoneHref}>
            <Phone size={15} />
            {contact.phone}
          </a>
          <a
            href={whatsappUrl("Hello Mahaveer, I would like to discuss a project.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={15} /> Connect on WhatsApp <ArrowUpRight size={14} />
          </a>
          {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
        </div>
        <div>
          <span className="footer-label">EXPLORE</span>
          {links
            .filter((l) => l.to !== "/")
            .map((link) => (
              <Link key={link.to} to={link.to}>
                {link.name}
              </Link>
            ))}
        </div>
        <div>
          <span className="footer-label">PRODUCTS & SOLUTIONS</span>
          {categories.map((category) => (
            <Link key={category} to="/products" search={{ category }}>
              {category}
            </Link>
          ))}
          <Link to="/solutions">
            All solutions <ArrowUpRight size={13} />
          </Link>
        </div>
        <div className="footer-project">
          <span className="footer-label">HAVE A PROJECT IN MIND?</span>
          <h3>
            Let’s move
            <br />
            it forward.
          </h3>
          <QuoteLink variant="inverse">Start a conversation</QuoteLink>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Mahaveer Construction Suppliers.</span>
        <span>Built on trust. Focused on progress.</span>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Back to top"
          title="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            })
          }
        >
          <ArrowUpRight className="back-top" />
        </Button>
      </div>
    </footer>
  );
}
