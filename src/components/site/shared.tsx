import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, type Product } from "@/data/catalogue";
import type { ReactNode } from "react";

export function QuoteLink({
  children = "Request a quote",
  variant = "default",
}: {
  children?: ReactNode;
  variant?: "default" | "outline" | "inverse";
}) {
  return (
    <Button asChild variant={variant} className="site-button">
      <Link to="/contact">
        {children}
        <ArrowUpRight />
      </Link>
    </Button>
  );
}
export function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{label}</span>
        <h2>{title.replace(/\\n/g, "\n")}</h2>
      </div>
      {children}
    </div>
  );
}
export function PageHero({
  label,
  title,
  description,
  image,
}: {
  label: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero-image" : ""}`}>
      {image && <img className="cover-image" src={image} alt={label} />}
      <div className="container page-hero-content">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={12} />
          <span>{label}</span>
        </div>
        <span className="eyebrow">MAHAVEER CONSTRUCTION SUPPLIERS</span>
        <h1>{title.replace(/\\n/g, "\n")}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="product-photo">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="photo-arrow">
          <ArrowUpRight size={20} />
        </span>
      </Link>
      <div className="product-info">
        <span className="eyebrow">{product.category}</span>
        <h3>
          <Link to="/products/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>
        <p>{product.description}</p>
        <div className="product-actions">
          <Link to="/products/$slug" params={{ slug: product.slug }}>
            View details <ArrowRight size={14} />
          </Link>
          <Link to="/contact" search={{ product: product.name }}>
            Enquire <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
export function RelatedProducts({
  categories,
  exclude,
}: {
  categories: string[];
  exclude?: string;
}) {
  const items = products
    .filter((p) => categories.includes(p.category) && p.slug !== exclude)
    .slice(0, 3);
  return (
    <section className="section container">
      <SectionHeading label="MATERIALS FOR YOUR PROJECT" title="Related products" />
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={17} />
          {item}
        </li>
      ))}
    </ul>
  );
}
export function EnquiryBand() {
  return (
    <section className="enquiry-band">
      <div className="container">
        <div>
          <span className="eyebrow">LET’S BUILD SOMETHING THAT LASTS</span>
          <h2>
            Your next project.
            <br />
            Our full attention.
          </h2>
        </div>
        <div>
          <p>
            Tell us what you’re building.
            <br />
            Let’s find the right materials for the job.
          </p>
          <QuoteLink variant="inverse">Discuss your project</QuoteLink>
        </div>
      </div>
    </section>
  );
}
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Mahaveer Construction Suppliers` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Mahaveer Construction Suppliers` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
