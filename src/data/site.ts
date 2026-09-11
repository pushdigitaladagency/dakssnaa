export const company = {
  legalName: "Sree Dakssnaa Aerospace and Defence India Pvt Ltd",
  shortName: "Sree Dakssnaa",
  wordmark: "SREE DAKSSNAA",
  line: "AEROSPACE & DEFENCE",
  established: "2024",
  tagline: "PRECISION ENGINEERING FOR AEROSPACE & DEFENCE",
  parentCover: "Airfloa Rail Technologies Limited",
  parentProfile: "Airflow Equipment's India Pvt Ltd",
  parentShort: "Airflow",
  shareholding: [
    { name: "Airflow", holding: "99%" },
    { name: "D. Manikandan", holding: "1%" },
  ],
  phoneDisplay: "+91 94443 13234",
  phoneTel: "+919444313234",
  landlineDisplay: "+91 44 2716 2191",
  landlineTel: "+914427162191",
  email: "dakssnaaaerospace@gmail.com",
  addressLines: [
    "No. 127, Mettupalayam Road",
    "Panruti, Sriperumbudur",
    "Kancheepuram – 631604",
    "Tamil Nadu, India",
  ],
  addressOneLine:
    "No. 127, Mettupalayam Road, Panruti, Sriperumbudur, Kancheepuram – 631604, Tamil Nadu, India",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=127+Mettupalayam+Road+Panruti+Sriperumbudur+Kancheepuram+631604",
  profilePdf: "/Sree-Dakssnaa-Company-Profile.pdf",
  coverLocation: "Chennai, India",
  mission:
    "Our company's mission is to provide innovative and reliable defense and aerospace solutions that contribute to global security and technological advancement.",
  vision:
    "The vision is to become a leading player in the industry by delivering cutting-edge products and services.",
  intro:
    "Sree Dakssnaa Aerospace and Defence India Pvt Ltd, established in 2024, focuses on delivering innovative solutions in the Defence and Aerospace sectors. As a subsidiary of Airfloa Rail Technologies Limited, the company draws on the Airflow group's nearly three decades of industry expertise.",
  parentExpertise:
    "As a parent company, M/s Airflow has been a pioneer in Rolling Stock — Interior Furnishing & Car Body, Defence and Aerospace — integrating design, analysis, development, fabrication, machining, welding and assembly of metal and non-metal turnkey products.",
  competencies:
    "Core competencies in aerospace engineering, military systems integration, and advanced technology development.",
  differentiators: [
    "A highly skilled and experienced team, a strong focus on research and development, and strategic partnerships with industry leaders.",
    "Innovation, customisation, and customer satisfaction as priorities in a competitive market.",
  ],
  ordersInHand:
    "The holding company M/s Airflow has given a subcontract valued at around ₹15 crore.",
  expectedOrders:
    "Further orders of around ₹25 crore are expected from direct OEMs including HAL (Bengaluru), ADA (Bengaluru), MCSRDC (Bengaluru), MSC / DRDO (Pune), ASL / DRDO (Hyderabad) and HVF (Chennai).",
  expansion: {
    title: "New facility of 44,000 sq. ft exclusively for FRP (Unit-7)",
    framing: "Capability expansion / development — not presented as currently operational.",
    intent:
      "The company is looking forward towards manufacturing of advanced composites for DRDO, CABS, CVRDE and HAL.",
    applications: [
      "Ballistic skirt plates for battle tanks",
      "CFRP foot rest and consoles for surveillance aircraft",
      "CFRP shells for missile re-entry components",
    ],
  },
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#projects", label: "Projects" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
] as const;


export const leadership = [
  {
    name: "D. Venkatesan",
    role: "Managing Director",
    bio: "He has three decades of experience in manufacturing industries. He leads a team with strength and integrity, and has been instrumental in establishing a robust foundation for the company, ensuring its competitive edge in the market.",
  },
  {
    name: "D. Manikandan",
    role: "Director",
    bio: "Mechanical engineering graduate, he has over 15 years of experience and is spearheading all new initiatives of Airflow. He makes significant strategic and operational decisions that ensure the company meets its objectives.",
  },
] as const;

export const capabilities = [
  {
    id: "machining",
    number: "01",
    title: "Precision Machining",
    short: "CNC turning, laser processing and double-column machining for engineered metal components.",
    overview:
      "Machining is a core manufacturing capability, spanning CNC turning, laser processing and high-performance double-column machining. Documented equipment includes the PL6050L turning centre, Mitsubishi CO2 laser systems and a double-column machining centre with a 4,000 × 2,100 mm table.",
    applications: [
      "Aerospace structural and cockpit hardware",
      "Defence hull, turret and mechanical assemblies",
      "Precision sheet and plate processing",
    ],
    processes: [
      "CNC turning (PL6050L — 1000 / 1500 / 2000 mm)",
      "CO2 laser cutting and processing",
      "Double-column milling and machining",
    ],
    icon: "cog",
    image: "/images/hd/cnc.jpg",
  },
  {
    id: "composites",
    number: "02",
    title: "Composite Manufacturing",
    short: "FRP and advanced composite work, including a planned 44,000 sq. ft dedicated facility.",
    overview:
      "Composite manufacturing is a documented capability, with a 44,000 sq. ft FRP facility (Unit-7) described as a capability expansion. The company is looking forward to manufacturing advanced composites for DRDO, CABS, CVRDE and HAL, and holds a partnership with VCI Composites, Canada, for armour-grade composite panels.",
    applications: [
      "Ballistic skirt plates for battle tanks (expansion)",
      "CFRP foot rest and consoles for surveillance aircraft (expansion)",
      "CFRP shells for missile re-entry components (expansion)",
      "Armour-grade composite panels (partnership: VCI Composites, Canada)",
    ],
    processes: [
      "FRP manufacturing (Unit-7 expansion)",
      "Advanced composite applications under development",
    ],
    icon: "layers",
    image: "/images/hd/composites.jpg",
  },
  {
    id: "assembly",
    number: "03",
    title: "Assembly",
    short: "Integration of fabricated, machined and composite elements into complete assemblies.",
    overview:
      "Assembly is a listed core capability. Project work includes integration of hood structure with split roof and mechanical systems on a railway wagon, cockpit mock-ups and shells, and defence hull and turret structures.",
    applications: [
      "Cockpit mock-ups and replica shells",
      "Wagon hood structure with mechanical systems",
      "Hull and turret structure integration",
    ],
    processes: [
      "Mechanical integration",
      "Structure assembly",
      "System fit-out as specified by the programme",
    ],
    icon: "combine",
    image: "/images/hd/cockpit-int.jpg",
  },
  {
    id: "coatings",
    number: "04",
    title: "Coatings",
    short: "Industrial coatings capability, including documented stealth paint work.",
    overview:
      "Coatings is a listed manufacturing capability. Documented project work includes stealth paint for HAL.",
    applications: ["Stealth paint / coating (HAL)", "Protective and finish coatings on fabricated assemblies"],
    processes: ["Surface coating as specified by the programme"],
    icon: "paint",
    image: "/images/hd/composites.jpg",
  },
  {
    id: "fabrication",
    number: "05",
    title: "Fabrication",
    short: "Metal fabrication through laser cutting, punching, welding and forming.",
    overview:
      "Fabrication covers sheet and structural metalwork. Documented facilities include Mitsubishi laser processing machines, CNC punch equipment, TIG/MMA welding (including Panasonic YC-400TX3 and TIG-250P AC/DC) and, under capability enhancement, an AMADA HRB series press brake.",
    applications: [
      "Sheet-metal aerospace and defence parts",
      "Welded structural assemblies",
      "Hood, hull and turret fabrications",
    ],
    processes: [
      "Laser cutting",
      "CNC punching",
      "TIG / MMA welding of mild steel, stainless steel, copper and titanium",
      "Press-brake forming (capability enhancement)",
    ],
    icon: "flame",
    image: "/images/hd/laser.jpg",
  },
  {
    id: "quality-rd",
    number: "06",
    title: "Quality & R&D",
    short: "Engineering discipline, inspection mindset and a stated focus on research and development.",
    overview:
      "Quality, R&D is a listed core capability. The company profile emphasises a strong focus on research and development, customisation, and customer satisfaction. No ISO, AS or NADCAP certifications are stated in the source material, so none are claimed here.",
    applications: [
      "Programme-specific inspection and quality control",
      "Process development for aerospace and defence work",
      "Custom engineering solutions",
    ],
    processes: [
      "Research and development focus",
      "Customisation to customer requirements",
      "Technology development",
    ],
    icon: "ruler",
    image: "/images/hd/intake.jpg",
  },
  {
    id: "advanced-manufacturing",
    number: "07",
    title: "Advanced Manufacturing",
    short: "Laser processing, additive manufacturing and digitally driven production methods.",
    overview:
      "Advanced manufacturing is a listed capability. Documented systems include Mitsubishi CO2 laser platforms; under capability enhancement, an AMADA ORSUS 3015 AJe fibre laser and a metal additive manufacturing system with a 450 × 450 × 500 mm build envelope.",
    applications: [
      "High-precision sheet processing",
      "Complex metal geometries via additive manufacturing (enhancement)",
      "Digitally driven production of aerospace and defence parts",
    ],
    processes: [
      "CO2 laser processing (in-operation equipment)",
      "Fibre laser processing (capability enhancement)",
      "Metal additive manufacturing (capability enhancement)",
    ],
    icon: "circuit",
    image: "/images/hd/gantry.jpg",
  },
  {
    id: "project-management",
    number: "08",
    title: "Project Management",
    short: "End-to-end coordination from engineering through fabrication, assembly and delivery.",
    overview:
      "Project management is a listed capability. Documented programmes span aerospace cockpits and trainers, defence hull and turret structures, and railway wagon hood integration — requiring coordinated design, manufacturing and assembly.",
    applications: [
      "Aerospace mock-up and simulator programmes",
      "Defence structure packages",
      "Rail / transportation structure integration",
    ],
    processes: [
      "Programme coordination from engineering to execution",
      "Multi-process manufacturing packages",
    ],
    icon: "clipboard",
    image: "/images/hd/cockpit-ext.jpg",
  },
] as const;

export const partners = [
  {
    name: "RUBTEC, Denmark",
    focus: "Aluminium wheels",
    region: "Denmark",
    image: "/images/customers/rubtec.png",
  },
  {
    name: "VCI Composites, Canada",
    focus: "Armour-grade composite panels",
    region: "Canada",
    image: "/images/customers/vci.png",
  },
] as const;

export const ecosystem = [
  { name: "HAL", image: "/images/customers/hal.png", alt: "HAL — Hindustan Aeronautics Limited" },
  { name: "ADA", image: "/images/customers/ada.png", alt: "ADA — Aeronautical Development Agency" },
  { name: "DRDO", image: "/images/customers/drdo.png", alt: "DRDO — Defence Research and Development Organisation" },
  { name: "AVANI", image: "/images/customers/avani.png", alt: "Armoured Vehicles (AVANI)" },
  { name: "BEML", image: "/images/customers/beml.svg", alt: "BEML" },
  { name: "Bombardier", image: "/images/customers/bombardier.png", alt: "Bombardier" },
  { name: "Alstom", image: "/images/customers/alstom.svg", alt: "Alstom" },
  { name: "RITES", image: "/images/customers/rites.png", alt: "RITES" },
  { name: "Indian Railways", image: "/images/customers/indian-railways.png", alt: "Indian Railways" },
] as const;

export const requirementTypes = [
  "Aerospace",
  "Defence",
  "Machining",
  "Composites",
  "Fabrication",
  "Assembly",
  "Coatings",
  "Advanced Manufacturing",
  "Other",
] as const;

export const expectedOems = [
  "HAL — Bengaluru",
  "ADA — Bengaluru",
  "MCSRDC — Bengaluru",
  "MSC / DRDO — Pune",
  "ASL / DRDO — Hyderabad",
  "HVF — Chennai",
] as const;
