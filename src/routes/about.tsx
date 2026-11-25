import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages";
import { pageHead } from "@/components/site/shared";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Mahaveer",
      "A project-led construction material supplier focused on quality, applications and lasting partnerships.",
    ),
  component: AboutPage,
});
