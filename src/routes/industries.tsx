import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/site/pages";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/industries")({
  head: () =>
    pageHead(
      "Industries served",
      "Construction material applications for roads, bridges, buildings and industrial projects.",
    ),
  component: IndustriesPage,
});
