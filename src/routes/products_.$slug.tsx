import { createFileRoute, notFound } from "@tanstack/react-router";
import { products } from "@/data/catalogue";
import { ProductDetail } from "@/components/site/details";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/products_/$slug")({
  loader: ({ params }) => {
    const item = products.find((p) => p.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) =>
    pageHead(
      loaderData?.name || "Unavailable",
      loaderData?.description || "The requested page is unavailable.",
    ),
  component: Page,
});
function Page() {
  const item = Route.useLoaderData();
  return <ProductDetail product={item} />;
}
