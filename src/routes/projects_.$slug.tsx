import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/data/catalogue";
import { ProjectDetail } from "@/components/site/details";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/projects_/$slug")({
  loader: ({ params }) => {
    const item = projects.find((p) => p.slug === params.slug);
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
  return <ProjectDetail project={item} />;
}
