import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
  Layers3,
  Compass,
  Truck,
  MoveUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, industries, projects, products, solutions } from "@/data/catalogue";
import { EnquiryBand, SectionHeading, QuoteLink } from "./shared";
export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img
          className="cover-image"
          src={images.bridge}
          alt="Cable-stayed concrete bridge under construction across a river"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="hero-eyebrow">
            <span /> MATERIALS. ENGINEERING. INFRASTRUCTURE.
          </span>
          <h1>
            Building the
            <br />
            foundation
            <br />
            of <em>progress.</em>
          </h1>
          <p>
            Reliable construction materials and engineering solutions
            <br className="desktop-break" /> for the projects shaping tomorrow.
          </p>
          <div className="hero-actions">
            <Button asChild className="site-button">
              <Link to="/products">
                Explore our products
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="inverse" className="site-button">
              <Link to="/contact">
                Discuss your project
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hero-bottom container">
          <a href="#introduction">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
          <span>FROM THE FIRST POUR. TO THE FINAL FINISH.</span>
          <span className="hero-index">
            01 <i /> 03
          </span>
        </div>
        <div className="vertical-hero-label">A STRONGER TOMORROW STARTS HERE</div>
      </section>
      <div className="capability-strip">
        <div className="container">
          {[
            { icon: ShieldCheck, text: "Quality-led material selection" },
            { icon: Layers3, text: "Comprehensive product solutions" },
            { icon: Compass, text: "Application-focused guidance" },
            { icon: Truck, text: "Project-focused supply" },
          ].map(({ icon: Icon, text }) => (
            <div key={text}>
              <Icon size={21} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <section id="introduction" className="section container intro-section">
        <div className="intro-image">
          <img
            src={images.building}
            alt="Concrete commercial building and construction crane"
            loading="lazy"
          />
          <div className="image-caption">
            PRECISION IN EVERY DETAIL <MoveUpRight size={18} />
          </div>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">THE MAHAVEER APPROACH</span>
          <h2>
            Strong foundations.
            <br />
            Stronger partnerships.
          </h2>
          <p className="lead">More than materials. A partner in what comes next.</p>
          <p>
            At Mahaveer Construction Suppliers, our focus is simple: connecting your project with
            the right construction materials and engineering solutions.
          </p>
          <p>
            From waterproofing and concrete protection to flooring and civil applications, we bring
            a considered, project-led approach to every requirement.
          </p>
          <Button asChild variant="link" className="text-action">
            <Link to="/about">
              Discover Mahaveer
              <ArrowUpRight />
            </Link>
          </Button>
          <div className="intro-note">
            <span>01 —</span> BUILT AROUND YOUR PROJECT
          </div>
        </div>
      </section>
      <section className="section products-section">
        <div className="container">
          <SectionHeading
            label="MATERIALS THAT MAKE A DIFFERENCE"
            title="The right products.\nFor every stage."
          >
            <Button asChild variant="link" className="text-action">
              <Link to="/products">
                Explore all products
                <ArrowUpRight />
              </Link>
            </Button>
          </SectionHeading>
          <div className="home-product-grid">
            {products.slice(0, 4).map((p, i) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="category-tile"
              >
                <img src={p.image} alt={p.name} loading="lazy" />
                <div className="category-shade" />
                <span className="category-number">0{i + 1}</span>
                <div className="category-caption">
                  <span className="eyebrow">{p.category}</span>
                  <h3>{p.category === "Concrete & Repair" ? "Concrete & repair" : p.category}</h3>
                  <ArrowUpRight />
                </div>
              </Link>
            ))}
          </div>
          <div className="catalogue-footnote">
            <span>Construction materials, selected with purpose.</span>
            <Link to="/products" search={{ category: "Road & Civil" }}>
              Road & civil products
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section solutions-section">
        <div className="container solutions-layout">
          <div>
            <span className="eyebrow">ENGINEERED AROUND YOUR NEEDS</span>
            <h2>
              Complex challenges.
              <br />
              Considered solutions.
            </h2>
            <p>
              Every structure has different demands. Explore material solutions shaped around the
              application, the environment and the project.
            </p>
            <Button asChild variant="inverse" className="site-button">
              <Link to="/solutions">
                Explore our solutions
                <ArrowUpRight />
              </Link>
            </Button>
            <img
              src={images.repair}
              alt="Construction professional repairing a concrete structure"
              loading="lazy"
            />
          </div>
          <div className="solution-list">
            {solutions.map((s, i) => (
              <Link to="/solutions/$slug" params={{ slug: s.slug }} key={s.slug}>
                <span className="solution-number">0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="brand-strip container">
        <div>
          <span className="eyebrow">THE RIGHT PARTNERS. THE RIGHT MATERIALS.</span>
          <h2>Quality without compromise.</h2>
        </div>
        <div className="brand-pending">
          <span>BRAND PARTNERS</span>
          <p>Confirmed partner portfolio coming soon.</p>
          <Link to="/brands">
            Our brand approach
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="section industry-section">
        <div className="container">
          <SectionHeading
            label="BUILT FOR THE WORLD AROUND US"
            title="Across sectors.\nBeyond expectations."
          >
            <Button asChild variant="link" className="text-action">
              <Link to="/industries">
                Industries we serve
                <ArrowUpRight />
              </Link>
            </Button>
          </SectionHeading>
          <div className="industry-home-grid">
            {industries.slice(0, 3).map((s, i) => (
              <Link to="/industries" key={s.title}>
                <img src={s.image} alt={s.title} loading="lazy" />
                <span>
                  0{i + 1} / {s.title}
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading label="MATERIALS IN CONTEXT" title="Where possibilities take shape.">
          <Button asChild variant="link" className="text-action">
            <Link to="/projects">
              View project applications
              <ArrowUpRight />
            </Link>
          </Button>
        </SectionHeading>
        <div className="project-home-grid">
          {projects.slice(0, 2).map((p) => (
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
                <ArrowUpRight size={24} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="strength-section">
        <div className="container">
          <span className="eyebrow">WHAT WE STAND FOR</span>
          <h2>
            Good materials are the start.
            <br />
            Trust is the foundation.
          </h2>
          <div className="strength-grid">
            {[
              {
                title: "Quality, considered.",
                text: "A focus on appropriate materials and compatibility with your project requirements.",
              },
              {
                title: "Knowledge, applied.",
                text: "A practical approach to understanding the application before selecting the solution.",
              },
              {
                title: "Partnership, valued.",
                text: "Clear conversations and an attentive approach to your construction supply needs.",
              },
              {
                title: "Progress, together.",
                text: "Supporting the people and projects shaping the built environment.",
              },
            ].map((s, i) => (
              <div key={s.title}>
                <span>0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
