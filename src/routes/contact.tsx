import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/contact";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { product?: string } =>
    typeof search["product"] === "string" ? { product: search["product"] } : {},
  head: () =>
    pageHead(
      "Contact & project enquiries",
      "Discuss construction material requirements with Mahaveer Construction Suppliers. Call +91 97824 99222 or enquire on WhatsApp.",
    ),
  component: Page,
});
function Page() {
  const { product } = Route.useSearch();
  return <ContactPage key={product || "general"} {...(product ? { product } : {})} />;
}
