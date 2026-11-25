import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/site/pages";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/projects")({
  head: () =>
    pageHead(
      "Project applications",
      "Explore clearly labelled illustrative infrastructure and construction project applications.",
    ),
  component: ProjectsPage,
});
