import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Product, type Solution, projects, whatsappUrl } from "@/data/catalogue";
import { CheckList, EnquiryBand, PageHero, RelatedProducts, QuoteLink } from "./shared";
import { EnquiryForm } from "./contact";
export function ProductDetail({ product: p }: { product: Product }) {
  return (
    <>
      <section className="section container product-detail">
        <div className="detail-breadcrumb breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products">Products</Link>
          <ChevronRight size={12} />
          <span>{p.name}</span>
        </div>
        <div className="detail-main">
          <div className="detail-photo">
            <img src={p.image} alt={p.name} />
            <span>ILLUSTRATIVE MATERIAL PHOTOGRAPHY</span>
          </div>
          <div>
            <span className="eyebrow">{p.category}</span>
            <h1>{p.name}</h1>
            <p className="lead">{p.description}</p>
            <div className="detail-features">
              <h3>Material overview</h3>
              <CheckList items={p.features} />
            </div>
            <p className="spec-note">
              Brand, grade, pack size and technical specifications are confirmed against your
              project requirement. Request the relevant manufacturer’s technical data before
              selection.
            </p>
            <div className="detail-buttons">
              <Button asChild className="site-button">
                <Link to="/contact" search={{ product: p.name }}>
                  Enquire about this product
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" className="site-button">
                <a
                  href={whatsappUrl(`Hello Mahaveer, I would like to enquire about ${p.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle />
                  WhatsApp enquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section muted-section">
        <div className="container application-grid">
          <div>
            <span className="eyebrow">WHERE IT FITS</span>
            <h2>Applications</h2>
            <CheckList items={p.applications} />
            <p>
              Final suitability depends on site conditions, the design specification and
              manufacturer guidance.
            </p>
          </div>
          <EnquiryForm product={p.name} />
        </div>
      </section>
      <RelatedProducts categories={[p.category]} exclude={p.slug} />
    </>
  );
}
export function SolutionDetail({ solution: s }: { solution: Solution }) {
  return (
    <>
      <PageHero label="Solutions" title={s.title} description={s.description} image={s.image} />
      <section className="section container editorial-grid">
        <div>
          <span className="eyebrow">UNDERSTANDING THE CHALLENGE</span>
          <h2>
            The right starting point
            <br />
            makes the difference.
          </h2>
        </div>
        <div>
          <p className="lead">{s.problem}</p>
          <p>
            We approach each requirement by considering the substrate, exposure, project stage and
            intended use. Material options should align with the engineering specification and
            relevant manufacturer guidance.
          </p>
          <QuoteLink>Discuss this solution</QuoteLink>
        </div>
      </section>
      <section className="section muted-section">
        <div className="container mission-grid">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>
              A system.
              <br />
              Not just a product.
            </h2>
            <p>
              Consider preparation, materials and application together. Tell us about your project
              so the enquiry can focus on an appropriate solution.
            </p>
          </div>
          <div>
            <span className="eyebrow">KEY CONSIDERATIONS</span>
            <CheckList items={s.benefits} />
          </div>
        </div>
      </section>
      <RelatedProducts categories={s.categories} />
      <EnquiryBand />
    </>
  );
}
export function ProjectDetail({ project: p }: { project: (typeof projects)[number] }) {
  return (
    <>
      <PageHero label="Projects" title={p.title} description={p.description} image={p.image} />
      <section className="section container editorial-grid">
        <div>
          <span className="eyebrow">ILLUSTRATIVE PROJECT · NOT A CLIENT REFERENCE</span>
          <h2>Materials in context.</h2>
          <p>Sector: {p.sector}</p>
        </div>
        <div>
          <p className="lead">This is an application concept, not a completed Mahaveer project.</p>
          <p>
            It illustrates the environments where construction materials can be used. Project
            location, client, scope and execution details have not been supplied and are not
            implied.
          </p>
          <p>
            For a real project requirement, share your specification, site conditions and timeline
            with us.
          </p>
          <QuoteLink>Discuss a similar application</QuoteLink>
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
