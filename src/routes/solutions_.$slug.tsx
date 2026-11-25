import { createFileRoute, notFound } from "@tanstack/react-router";
import { solutions } from "@/data/catalogue";
import { SolutionDetail } from "@/components/site/details";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/solutions_/$slug")({
  loader: ({ params }) => {
    const item = solutions.find((p) => p.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) =>
    pageHead(
      loaderData?.title || "Unavailable",
      loaderData?.description || "The requested page is unavailable.",
    ),
  component: Page,
});
function Page() {
  const item = Route.useLoaderData();
  return <SolutionDetail solution={item} />;
}
