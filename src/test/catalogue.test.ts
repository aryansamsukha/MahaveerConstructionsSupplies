import { describe, expect, it } from "vitest";
import { contact, filterProducts, whatsappUrl } from "@/data/catalogue";
describe("catalogue and contact rules", () => {
  it("filters products by category and search text", () => {
    expect(filterProducts("membrane", "Waterproofing").map((p) => p.slug)).toEqual([
      "waterproofing-membranes",
    ]);
    expect(filterProducts("membrane", "Flooring")).toEqual([]);
  });
  it("uses the supplied WhatsApp number", () => {
    expect(contact.phone).toBe("+91 97824 99222");
    expect(whatsappUrl("Hello")).toBe("https://wa.me/919782499222?text=Hello");
  });
});
