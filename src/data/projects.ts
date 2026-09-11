export type ProjectFilter =
  | "All"
  | "Aerospace"
  | "Defence"
  | "Rail"
  | "Simulation"
  | "Structures"
  | "Composites"
  | "Engineering";

export const projectFilters: ProjectFilter[] = [
  "All",
  "Aerospace",
  "Defence",
  "Rail",
  "Simulation",
  "Structures",
  "Composites",
  "Engineering",
];

export type ProjectImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type Project = {
  slug: string;
  title: string;
  customer: string;
  industry: "Aerospace" | "Defence" | "Rail";
  filters: ProjectFilter[];
  summary: string;
  details: string[];
  image: string;
  imageFit?: "cover" | "contain";
  gallery: ProjectImage[];
  featured?: boolean;
  layout?: "wide" | "tall" | "standard";
};

export const projects: Project[] = [
  {
    slug: "amca-cockpit-mockup",
    title: "Mock-up cockpit fabrication for AMCA",
    customer: "ADA, Bengaluru",
    industry: "Aerospace",
    filters: ["All", "Aerospace", "Simulation"],
    summary:
      "Fabrication of a mock-up cockpit for the Advanced Medium Combat Aircraft (AMCA) programme, covering the external shell and an instrumented interior layout.",
    details: [
      "Customer: ADA, Bengaluru.",
      "Scope as documented: mock-up cockpit fabrication for AMCA.",
    ],
    image: "/images/hd/cockpit-int.jpg",
    featured: true,
    layout: "wide",
    gallery: [
      {
        src: "/images/projects/amca-cockpit-int.jpg",
        alt: "AMCA mock-up cockpit interior with displays and canopy",
      },
      {
        src: "/images/projects/amca-cockpit-ext.jpg",
        alt: "AMCA mock-up cockpit external shell on a support frame",
      },
    ],
  },
  {
    slug: "jaguar-simulator-cockpit",
    title: "Replica fighter aircraft cockpit shell for Jaguar full-mission simulator",
    customer: "HAL, Bengaluru",
    industry: "Aerospace",
    filters: ["All", "Aerospace", "Simulation"],
    summary:
      "Manufacturing of a replica fighter aircraft cockpit shell for a fixed-base full-mission simulator for the Jaguar aircraft.",
    details: [
      "Customer: HAL, Bengaluru.",
      "Scope as documented: manufacturing of replica fighter aircraft cockpit shell for fixed-base full-mission simulator for Jaguar aircraft.",
    ],
    image: "/images/hd/cockpit-ext.jpg",
    featured: true,
    layout: "tall",
    gallery: [
      {
        src: "/images/projects/jaguar-cockpit.jpg",
        alt: "Jaguar replica cockpit shell for a full-mission simulator at HAL",
      },
    ],
  },
  {
    slug: "lca-af-mk2-cockpit-shell",
    title: "Modular cockpit shell for LCA AF Mk2",
    customer: "ADA, Bengaluru",
    industry: "Aerospace",
    filters: ["All", "Aerospace", "Structures"],
    summary:
      "Modular cockpit shell work for the LCA AF Mk2, documented with a fuselage arrangement covering radome, cockpit, canopy, equipment bay and air intake.",
    details: [
      "Customer: ADA, Bengaluru.",
      "Documented arrangement includes radome, windscreen, canopy, cockpit, equipment bay, avionics cover and air intake, with a fuselage section of 1,100 mm.",
    ],
    image: "/images/hd/cockpit-ext.jpg",
    imageFit: "contain",
    featured: true,
    gallery: [
      {
        src: "/images/projects/lca-mk2-shell.jpg",
        alt: "Modular cockpit shell arrangement for LCA AF Mk2",
        fit: "contain",
      },
    ],
  },
  {
    slug: "railway-wagon-hood",
    title: "Railway wagon hood structure with split roof and mechanical systems",
    customer: "MSC, Pune",
    industry: "Rail",
    filters: ["All", "Rail", "Structures", "Engineering"],
    summary:
      "Development, fabrication and integration of a hood structure with split roof and mechanical systems on a railway wagon, including a launch-platform arrangement.",
    details: [
      "Customer: MSC, Pune.",
      "Scope as documented: development, fabrication and integration of hood structure with split roof and mechanical systems on railway wagon.",
      "Also documented as: hood structure with split roof, mechanical systems and launch platform full.",
    ],
    image: "/images/hd/train.jpg",
    imageFit: "contain",
    featured: true,
    layout: "wide",
    gallery: [
      {
        src: "/images/projects/wagon-hood.jpg",
        alt: "Railway wagon hood structure with split roof — full assembly",
        fit: "contain",
      },
      {
        src: "/images/projects/wagon-hood-detail.jpg",
        alt: "Hood structure mechanical systems and launch platform detail",
        fit: "contain",
      },
    ],
  },
  {
    slug: "aircraft-intake-duct",
    title: "Aircraft intake duct",
    customer: "HAL",
    industry: "Aerospace",
    filters: ["All", "Aerospace", "Structures"],
    summary: "Aircraft intake duct manufacturing for HAL.",
    details: ["Customer: HAL.", "Scope as documented: aircraft intake duct."],
    image: "/images/hd/intake.jpg",
    imageFit: "contain",
    featured: true,
    gallery: [
      {
        src: "/images/projects/intake-duct.jpg",
        alt: "Aircraft intake duct geometry",
        fit: "contain",
      },
    ],
  },
  {
    slug: "stealth-paint",
    title: "Stealth paint",
    customer: "HAL",
    industry: "Aerospace",
    filters: ["All", "Aerospace"],
    summary: "Stealth paint / coating work documented for HAL.",
    details: ["Customer: HAL.", "Scope as documented: stealth paint."],
    image: "/images/hd/composites.jpg",
    gallery: [
      {
        src: "/images/projects/stealth-paint.jpg",
        alt: "Stealth paint application on an aerospace surface",
      },
    ],
  },
  {
    slug: "lca-tejas-aptt",
    title: "LCA Tejas avionics part task trainer",
    customer: "HAL",
    industry: "Aerospace",
    filters: ["All", "Aerospace", "Simulation", "Engineering"],
    summary:
      "Avionics part-task trainer for LCA Tejas, documented with a cockpit/trainer layout and an instrumented panel.",
    details: [
      "Customer: HAL.",
      "Scope as documented: LCA Tejas avionics part task trainer.",
    ],
    image: "/images/hd/cockpit-int.jpg",
    featured: true,
    gallery: [
      {
        src: "/images/projects/aptt-panel.jpg",
        alt: "LCA Tejas avionics part-task trainer instrumented panel",
      },
      {
        src: "/images/projects/aptt-layout.jpg",
        alt: "LCA Tejas avionics part-task trainer layout",
        fit: "contain",
      },
    ],
  },
  {
    slug: "t90-preheater",
    title: "T-90 pre-heater / main battle tank",
    customer: "HVF",
    industry: "Defence",
    filters: ["All", "Defence", "Engineering"],
    summary: "T-90 pre-heater work associated with the main battle tank, documented for HVF.",
    details: ["Customer: HVF.", "Scope as documented: T90 pre-heater / main battle tank."],
    image: "/images/hd/hull.jpg",
    imageFit: "contain",
    featured: true,
    gallery: [
      {
        src: "/images/projects/t90-preheater.jpg",
        alt: "T-90 pre-heater assembly for main battle tank",
        fit: "contain",
      },
    ],
  },
  {
    slug: "hull-structure",
    title: "Complete hull structure",
    customer: "HVF",
    industry: "Defence",
    filters: ["All", "Defence", "Structures"],
    summary: "Complete hull structure documented for HVF.",
    details: ["Customer: HVF.", "Scope as documented: complete hull structure."],
    image: "/images/hd/hull.jpg",
    imageFit: "contain",
    featured: true,
    layout: "wide",
    gallery: [
      {
        src: "/images/projects/hull-structure.jpg",
        alt: "Complete hull structure",
        fit: "contain",
      },
    ],
  },
  {
    slug: "turret-structure",
    title: "Turret structure with traverse table and hatches",
    customer: "HVF",
    industry: "Defence",
    filters: ["All", "Defence", "Structures"],
    summary: "Turret structure with traverse table and hatches, documented for HVF.",
    details: [
      "Customer: HVF.",
      "Scope as documented: turret structure with traverse table & hatches.",
    ],
    image: "/images/hd/hull.jpg",
    imageFit: "contain",
    featured: true,
    gallery: [
      {
        src: "/images/projects/turret-structure.jpg",
        alt: "Turret structure with traverse table and hatches",
        fit: "contain",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function filterProjects(filter: ProjectFilter) {
  if (filter === "All") return projects;
  return projects.filter((p) => p.filters.includes(filter));
}
