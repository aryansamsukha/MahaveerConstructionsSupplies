import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  SlidersHorizontal,
  Building2,
  Layers,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  categories,
  filterProducts,
  images,
  industries,
  projects,
  solutions,
} from "@/data/catalogue";
import { CheckList, EnquiryBand, PageHero, ProductCard, QuoteLink, SectionHeading } from "./shared";

export function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Built on purpose.\nFocused on progress."
        description="Mahaveer Construction Suppliers brings a project-led approach to construction materials and engineering applications."
        image={images.building}
      />
      <section className="section container editorial-grid">
        <div>
          <span className="eyebrow">OUR COMPANY</span>
          <h2>
            Materials are our business.
            <br />
            Partnership is our approach.
          </h2>
        </div>
        <div>
          <p className="lead">
            The right material is the one that meets the demands of your project.
          </p>
          <p>
            Our focus spans construction materials, concrete protection, waterproofing, flooring,
            insulation and civil infrastructure applications. We start with your requirements and
            work toward an appropriate material solution.
          </p>
          <p>
            We believe that construction supply should be thoughtful, clearly communicated and
            grounded in the application. That approach shapes the relationships we aim to build with
            contractors, engineers and project teams.
          </p>
        </div>
      </section>
      <section className="wide-photo container">
        <img src={images.bridge} alt="Engineering geometry of a concrete cable-stayed bridge" />
        <span className="image-caption">MATERIALS. ENGINEERING. INFRASTRUCTURE.</span>
      </section>
      <section className="section container mission-grid">
        <div>
          <span className="eyebrow">OUR MISSION</span>
          <h2>
            Make the right
            <br />
            materials accessible.
          </h2>
          <p>
            Connect construction projects with considered material solutions, through clear
            communication and an application-focused approach.
          </p>
        </div>
        <div>
          <span className="eyebrow">OUR VISION</span>
          <h2>
            Help shape a<br />
            stronger built world.
          </h2>
          <p>
            Build lasting relationships with the people creating the structures and infrastructure
            of tomorrow.
          </p>
        </div>
      </section>
      <section className="section muted-section">
        <div className="container">
          <SectionHeading label="OUR PRINCIPLES" title="The standards behind our approach." />
          <div className="values-grid">
            {[
              {
                icon: ShieldCheck,
                title: "Quality commitment",
                text: "Material selection should consider suitability, compatibility and the requirements of the job.",
              },
              {
                icon: Compass,
                title: "Technical focus",
                text: "Understanding the application comes before recommending a material system.",
              },
              {
                icon: Layers,
                title: "Integrity",
                text: "Clear information, realistic expectations and transparent project conversations.",
              },
              {
                icon: Building2,
                title: "Customer relationships",
                text: "An attentive approach to contractors, engineers and construction teams.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
export function ProductsPage({ initialCategory = "All products" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const items = filterProducts(query, category);
  return (
    <>
      <PageHero
        label="Products"
        title="Materials for\nwhat comes next."
        description="Explore construction materials by application. Find the right starting point for your project."
      />
      <section className="section container catalogue-section">
        <div className="catalogue-toolbar">
          <div className="search-input">
            <Search size={19} />
            <Input
              aria-label="Search products"
              placeholder="Search materials, products or applications"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <Button variant="ghost" size="sm" onClick={() => setQuery("")}>
                Clear
              </Button>
            )}
          </div>
          <span>
            <SlidersHorizontal size={16} /> PRODUCT CATALOGUE
          </span>
        </div>
        <div className="catalogue-layout">
          <aside className="catalogue-filters">
            <span className="eyebrow">CATEGORIES</span>
            {["All products", ...categories].map((c) => (
              <Button
                key={c}
                variant="ghost"
                className={category === c ? "filter-button selected" : "filter-button"}
                onClick={() => setCategory(c)}
              >
                {c}
                <ArrowRight size={14} />
              </Button>
            ))}
            <div className="filter-help">
              <span className="eyebrow">NEED GUIDANCE?</span>
              <p>Let’s discuss the demands of your project.</p>
              <QuoteLink />
            </div>
          </aside>
          <div>
            <div className="result-heading">
              <h2>{category}</h2>
              <span aria-live="polite">{items.length} products</span>
            </div>
            <p className="catalogue-disclaimer">
              Indicative material categories. Brand availability and specifications are confirmed
              during enquiry.
            </p>
            {items.length > 0 ? (
              <div className="product-grid catalogue-grid">
                {items.map((p) => (
                  <ProductCard product={p} key={p.slug} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <Search size={32} />
                <h3>No materials found</h3>
                <p>Try another search or browse all categories.</p>
                <Button
                  onClick={() => {
                    setQuery("");
                    setCategory("All products");
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
export function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="The challenge comes first.\nThe solution follows."
        description="Application-focused material systems across the construction lifecycle."
        image={images.repair}
      />
      <section className="section container">
        <SectionHeading
          label="OUR AREAS OF FOCUS"
          title="Considered solutions. Built around you."
        />
        <div className="solution-grid">
          {solutions.map((s, i) => (
            <Link
              to="/solutions/$slug"
              params={{ slug: s.slug }}
              key={s.slug}
              className="solution-card"
            >
              <img src={s.image} alt={s.title} loading="lazy" />
              <div>
                <span className="eyebrow">0{i + 1} / MATERIAL SOLUTIONS</span>
                <h3>
                  {s.title}
                  <ArrowUpRight size={23} />
                </h3>
                <p>{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
export function BrandsPage() {
  return (
    <>
      <PageHero
        label="Brands"
        title="Strong products.\nConsidered partnerships."
        description="Our approach to brand selection puts your application and material requirements first."
      />
      <section className="section container editorial-grid">
        <div>
          <span className="eyebrow">OUR PARTNER PORTFOLIO</span>
          <h2>
            Quality deserves
            <br />
            the right name.
          </h2>
        </div>
        <div>
          <p className="lead">Confirmed brand information is being prepared.</p>
          <p>
            We will publish partner names, logos and product ranges once the business confirms its
            authorised relationships. No brand representation is implied by this concept.
          </p>
          <QuoteLink>Enquire about a brand</QuoteLink>
        </div>
      </section>
      <section className="container brand-placeholder-grid">
        {[
          "Waterproofing systems",
          "Flooring & coatings",
          "Insulation materials",
          "Concrete & civil materials",
        ].map((c, i) => (
          <div key={c} className="brand-placeholder">
            <span className="brand-symbol">
              <Layers size={32} />
            </span>
            <span className="eyebrow">PARTNER SLOT 0{i + 1}</span>
            <h3>{c}</h3>
            <p>Brand confirmation pending</p>
          </div>
        ))}
      </section>
      <section className="section container">
        <SectionHeading
          label="OUR SELECTION PRINCIPLES"
          title="The application leads the choice."
        />
        <CheckList
          items={[
            "Suitability for the intended application",
            "Compatibility with the wider material system",
            "Availability confirmed for each enquiry",
            "Technical documentation requested for the selected product",
          ]}
        />
      </section>
      <EnquiryBand />
    </>
  );
}
export function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Different sectors.\nOne considered approach."
        description="Construction supply for the structures, spaces and networks that shape everyday life."
        image={images.roads}
      />
      <section className="section container sector-list">
        {industries.map((s, i) => (
          <article className="sector-row" key={s.title}>
            <img src={s.image} alt={s.title} loading="lazy" />
            <div>
              <span className="eyebrow">SECTOR 0{i + 1}</span>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <p>
                Discuss your application, site conditions and material requirements with us to
                identify the right starting point.
              </p>
              <Button asChild variant="link" className="text-action">
                <Link to="/contact">
                  Discuss your requirements
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </section>
      <EnquiryBand />
    </>
  );
}
export function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="See the bigger picture."
        description="Explore illustrative project applications across infrastructure, commercial construction and industry."
        image={images.bridge}
      />
      <section className="section container">
        <div className="project-notice">
          <ShieldCheck size={20} />
          <p>
            Illustrative portfolio — these are application concepts, not completed Mahaveer
            projects. Confirmed project references will be added when supplied.
          </p>
        </div>
        <div className="project-list-grid">
          {projects.map((p) => (
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              key={p.slug}
              className="project-card"
            >
              <div className="project-photo">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="sample-label">ILLUSTRATIVE PROJECT</span>
              </div>
              <div className="project-caption">
                <div>
                  <span className="eyebrow">{p.sector}</span>
                  <h3>{p.title}</h3>
                </div>
                <ArrowUpRight />
              </div>
              <p>{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
