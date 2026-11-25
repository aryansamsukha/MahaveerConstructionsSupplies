import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/site/pages";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): { category?: string } =>
    typeof search["category"] === "string" ? { category: search["category"] } : {},
  head: () =>
    pageHead(
      "Product catalogue",
      "Browse and search construction materials, waterproofing, flooring, insulation and concrete systems.",
    ),
  component: Page,
});
function Page() {
  const { category } = Route.useSearch();
  return (
    <ProductsPage key={category || "all"} {...(category ? { initialCategory: category } : {})} />
  );
}
