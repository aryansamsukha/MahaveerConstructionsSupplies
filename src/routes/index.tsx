import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Materials. Engineering. Infrastructure.",
      "Mahaveer Construction Suppliers: reliable construction materials and engineering solutions for the projects shaping tomorrow.",
    ),
  component: HomePage,
});
