import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/site/pages";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/solutions")({
  head: () =>
    pageHead(
      "Construction solutions",
      "Waterproofing, flooring, insulation, concrete repair and road material solutions.",
    ),
  component: SolutionsPage,
});
