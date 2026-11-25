import { createFileRoute } from "@tanstack/react-router";
import { BrandsPage } from "@/components/site/pages";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/brands")({
  head: () =>
    pageHead(
      "Brand partners",
      "Our brand selection approach and forthcoming confirmed partner portfolio.",
    ),
  component: BrandsPage,
});
