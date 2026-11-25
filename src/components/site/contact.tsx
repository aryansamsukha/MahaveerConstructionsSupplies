import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact, products, whatsappUrl } from "@/data/catalogue";
import { PageHero } from "./shared";
export function EnquiryForm({ product = "" }: { product?: string }) {
  const [ready, setReady] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setReady(
      `Hello Mahaveer Construction Suppliers,\n\nI would like to enquire about a project.\nName: ${data.get("name")}\nCompany: ${data.get("company") || "Not specified"}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nProduct / requirement: ${data.get("product") || "General enquiry"}\n\n${data.get("message")}`,
    );
  }
  function download() {
    const url = URL.createObjectURL(new Blob([ready], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "mahaveer-project-enquiry.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  if (ready)
    return (
      <div className="enquiry-ready" role="status">
        <CheckCircle2 size={36} />
        <span className="eyebrow">YOUR PROJECT ENQUIRY</span>
        <h2>Ready for the conversation.</h2>
        <p>Your enquiry is prepared, not yet sent. Send it directly to Mahaveer on WhatsApp.</p>
        <pre>{ready}</pre>
        <Button asChild className="site-button">
          <a href={whatsappUrl(ready)} target="_blank" rel="noreferrer">
            Send on WhatsApp
            <MessageCircle />
          </a>
        </Button>
        <div className="ready-actions">
          <Button variant="link" onClick={download}>
            <Download />
            Save enquiry
          </Button>
          <Button variant="link" onClick={() => setReady("")}>
            Start another enquiry
          </Button>
        </div>
      </div>
    );
  return (
    <form onSubmit={submit} className="enquiry-form">
      <span className="eyebrow">TELL US ABOUT YOUR PROJECT</span>
      <h2>Let’s get the details right.</h2>
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <Input name="name" required placeholder="Full name" autoComplete="name" />
        </label>
        <label>
          Company
          <Input name="company" placeholder="Company or organisation" autoComplete="organization" />
        </label>
        <label>
          Email address <span>*</span>
          <Input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>
        <label>
          Phone number <span>*</span>
          <Input
            name="phone"
            type="tel"
            required
            pattern="[+0-9() \-]{7,20}"
            title="Enter a valid phone number of 7 to 20 characters"
            placeholder="Your contact number"
            autoComplete="tel"
          />
        </label>
        <label className="form-full">
          Product / requirement
          <Input
            name="product"
            defaultValue={product}
            list="product-options"
            placeholder="Select a product or describe your requirement"
          />
          <datalist id="product-options">
            {products.map((p) => (
              <option value={p.name} key={p.slug} />
            ))}
          </datalist>
        </label>
        <label className="form-full">
          Project details <span>*</span>
          <Textarea
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="Tell us about your application, quantities, location and timeline…"
          />
        </label>
      </div>
      <div className="form-submit">
        <Button type="submit" className="site-button">
          Prepare enquiry
          <ArrowUpRight />
        </Button>
        <span>
          Your details are only shared when you send
          <br />
          the prepared message on WhatsApp.
        </span>
      </div>
    </form>
  );
}
export function ContactPage({ product = "" }: { product?: string }) {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s build\nsomething lasting."
        description="A new project. A material requirement. A technical question. The conversation starts here."
      />
      <section className="section container contact-layout">
        <div>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>
            Every good project
            <br />
            starts with a conversation.
          </h2>
          <p>Share your requirements and connect directly with Mahaveer Construction Suppliers.</p>
          <div className="contact-details">
            <a href={contact.phoneHref}>
              <Phone />
              <div>
                <span>CALL US</span>
                <strong>{contact.phone}</strong>
              </div>
              <ArrowUpRight />
            </a>
            <div>
              <Mail />
              <div>
                <span>EMAIL</span>
                <strong>{contact.email || "Email address awaiting confirmation"}</strong>
                {contact.email && (
                  <a href={`mailto:${contact.email}`}>
                    Send an email
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
            <div>
              <MapPin />
              <div>
                <span>VISIT US</span>
                <strong>{contact.address || "Business address coming soon"}</strong>
              </div>
            </div>
          </div>
          <Button asChild variant="outline" className="site-button">
            <a
              href={whatsappUrl(
                `Hello Mahaveer, I would like to discuss ${product || "a project"}.`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle /> Chat on WhatsApp
              <ArrowUpRight />
            </a>
          </Button>
          <div className="map-area">
            <MapPin size={28} />
            <strong>Mahaveer Construction Suppliers</strong>
            <span>{contact.address || "Map will be available when the address is confirmed."}</span>
          </div>
        </div>
        <EnquiryForm product={product} />
      </section>
    </>
  );
}
