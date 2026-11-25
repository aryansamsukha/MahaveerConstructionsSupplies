import bridge from "@/assets/bridge.webp.asset.json";
import waterproofing from "@/assets/waterproofing.webp.asset.json";
import flooring from "@/assets/flooring.webp.asset.json";
import insulation from "@/assets/insulation.webp.asset.json";
import repair from "@/assets/repair.webp.asset.json";
import roads from "@/assets/roads.webp.asset.json";
import building from "@/assets/building.webp.asset.json";

export const images = {
  bridge: bridge.url,
  waterproofing: waterproofing.url,
  flooring: flooring.url,
  insulation: insulation.url,
  repair: repair.url,
  roads: roads.url,
  building: building.url,
};
export const contact = {
  phone: "+91 97824 99222",
  phoneHref: "tel:+919782499222",
  whatsapp: "919782499222",
  email: "mahaveercontructionsuppliers@gmail.com",
  address: "",
};
export const categories = [
  "Waterproofing",
  "Flooring",
  "Insulation",
  "Concrete & Repair",
  "Road & Civil",
] as const;
export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  applications: string[];
};
export const products: Product[] = [
  {
    slug: "waterproofing-membranes",
    name: "Waterproofing membranes",
    category: "Waterproofing",
    image: images.waterproofing,
    description:
      "Membrane systems for managing water ingress in roofs, foundations and below-ground structures.",
    features: [
      "Surface protection systems",
      "Sheet-based waterproofing options",
      "Selection tailored to the substrate",
    ],
    applications: ["Roof terraces", "Basements and foundations", "Retaining structures"],
  },
  {
    slug: "protective-floor-coatings",
    name: "Protective floor coatings",
    category: "Flooring",
    image: images.flooring,
    description:
      "Floor coating systems for functional, durable surfaces in commercial and industrial environments.",
    features: [
      "Industrial surface protection",
      "Finish options to suit the application",
      "Substrate preparation guidance",
    ],
    applications: ["Warehouses", "Manufacturing facilities", "Commercial interiors"],
  },
  {
    slug: "thermal-insulation-boards",
    name: "Thermal insulation boards",
    category: "Insulation",
    image: images.insulation,
    description:
      "Rigid insulation solutions for thermal management across building envelopes and roof systems.",
    features: [
      "Board-based insulation options",
      "Building-envelope applications",
      "Project-specific material selection",
    ],
    applications: ["Roof assemblies", "External walls", "Commercial buildings"],
  },
  {
    slug: "concrete-repair-mortars",
    name: "Concrete repair mortars",
    category: "Concrete & Repair",
    image: images.repair,
    description:
      "Repair materials for restoring concrete surfaces and addressing localised deterioration.",
    features: [
      "Concrete restoration systems",
      "Compatible surface preparation",
      "Application-specific selection",
    ],
    applications: ["Concrete buildings", "Bridge structures", "Industrial maintenance"],
  },
  {
    slug: "concrete-treatment-systems",
    name: "Concrete treatment systems",
    category: "Concrete & Repair",
    image: images.building,
    description:
      "Construction-stage and protective treatment options for concrete in civil engineering works.",
    features: [
      "Concrete surface treatments",
      "Construction-stage material options",
      "Selection guided by project requirements",
    ],
    applications: ["Civil structures", "Commercial developments", "Infrastructure works"],
  },
  {
    slug: "road-joint-sealants",
    name: "Road & joint sealants",
    category: "Road & Civil",
    image: images.roads,
    description:
      "Joint sealing and surface protection materials for road and civil infrastructure applications.",
    features: [
      "Joint-management solutions",
      "Civil infrastructure applications",
      "Project-specific compatibility review",
    ],
    applications: ["Roads and highways", "Concrete pavements", "Infrastructure joints"],
  },
];
export type Solution = {
  slug: string;
  title: string;
  image: string;
  description: string;
  problem: string;
  benefits: string[];
  categories: string[];
};
export const solutions: Solution[] = [
  {
    slug: "waterproofing",
    title: "Waterproofing",
    image: images.waterproofing,
    description:
      "Protecting structures from the ground up. Material systems for roofs, basements and water-exposed concrete.",
    problem:
      "Water ingress can compromise finishes, accelerate deterioration and disrupt the use of a building. A suitable system starts with understanding the substrate and exposure.",
    benefits: [
      "A coordinated approach to water protection",
      "Materials selected for the structure",
      "Attention to junctions and critical details",
    ],
    categories: ["Waterproofing"],
  },
  {
    slug: "flooring",
    title: "Industrial flooring",
    image: images.flooring,
    description: "Purpose-led flooring systems for demanding industrial and commercial spaces.",
    problem:
      "Floor surfaces need to respond to traffic, maintenance requirements and the working environment. Preparation and system compatibility are essential.",
    benefits: [
      "Surface systems for the intended use",
      "A considered approach to finish and maintenance",
      "Coordinated preparation and material selection",
    ],
    categories: ["Flooring"],
  },
  {
    slug: "insulation",
    title: "Thermal insulation",
    image: images.insulation,
    description: "Material solutions that support thermal performance in the building envelope.",
    problem:
      "Heat transfer through roofs and walls affects comfort and energy use. Insulation selection should reflect the assembly and design requirements.",
    benefits: [
      "Building-envelope material options",
      "Support for thermal design objectives",
      "System compatibility consideration",
    ],
    categories: ["Insulation"],
  },
  {
    slug: "structural-repair",
    title: "Concrete & structural repair",
    image: images.repair,
    description:
      "Repair and protection materials for concrete structures throughout their service life.",
    problem:
      "Cracking, surface damage and deterioration require an assessment before a repair system can be selected. Structural work should follow qualified engineering advice.",
    benefits: [
      "Materials aligned with the repair scope",
      "Preparation and protection considered together",
      "Support for maintenance planning",
    ],
    categories: ["Concrete & Repair"],
  },
  {
    slug: "road-solutions",
    title: "Road & civil solutions",
    image: images.roads,
    description:
      "Construction materials for roads, bridges and the infrastructure connecting communities.",
    problem:
      "Civil structures face movement, exposure and regular use. Appropriate joint management and protective systems should be selected around the project specification.",
    benefits: [
      "Infrastructure-focused material selection",
      "Consideration of site conditions",
      "Coordinated civil engineering applications",
    ],
    categories: ["Road & Civil", "Concrete & Repair"],
  },
  {
    slug: "concrete-treatment",
    title: "Concrete treatment",
    image: images.building,
    description:
      "Construction-stage treatments and protective materials for concrete applications.",
    problem:
      "Concrete performance depends on more than the pour. Appropriate construction-stage treatments and protection help support the intended design.",
    benefits: [
      "Construction-stage material guidance",
      "Surface treatment options",
      "Project-led system selection",
    ],
    categories: ["Concrete & Repair"],
  },
];
export const industries = [
  {
    title: "Roads & highways",
    image: images.roads,
    description: "Materials for pavements, joints and the networks that keep communities moving.",
  },
  {
    title: "Bridges & structures",
    image: images.bridge,
    description:
      "Protection and repair solutions for exposed concrete and structural applications.",
  },
  {
    title: "Buildings & commercial",
    image: images.building,
    description: "Waterproofing, insulation and surface systems across the building lifecycle.",
  },
  {
    title: "Industrial projects",
    image: images.flooring,
    description: "Purpose-led materials for working environments and industrial facilities.",
  },
  {
    title: "Civil engineering",
    image: images.repair,
    description: "Application-focused supply for construction and infrastructure maintenance.",
  },
];
export const projects = [
  {
    slug: "highway-infrastructure",
    title: "Highway infrastructure",
    sector: "Roads & highways",
    image: images.roads,
    description:
      "An illustrative application of joint sealing, concrete treatment and protection systems in highway infrastructure.",
  },
  {
    slug: "commercial-development",
    title: "Commercial development",
    sector: "Buildings & commercial",
    image: images.building,
    description:
      "An illustrative application of waterproofing, insulation and concrete materials in a commercial development.",
  },
  {
    slug: "industrial-facility",
    title: "Industrial facility",
    sector: "Industrial projects",
    image: images.flooring,
    description:
      "An illustrative application of protective flooring and surface systems in an industrial facility.",
  },
];
export function filterProducts(query: string, category: string) {
  const term = query.trim().toLowerCase();
  return products.filter(
    (p) =>
      (category === "All products" || p.category === category) &&
      `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(term),
  );
}
export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
