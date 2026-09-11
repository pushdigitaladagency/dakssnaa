export type Spec = { label: string; value: string };

export type MachineTab =
  | "laser"
  | "cnc"
  | "punching"
  | "machining"
  | "welding"
  | "additive"
  | "composites";

export type Machine = {
  id: string;
  name: string;
  tab: MachineTab;
  status: "operational" | "enhancement";
  image: string;
  imageFit?: "cover" | "contain";
  application: string;
  summary: string;
  selected: Spec[];
  specs: Spec[];
  features?: string[];
};

export const facilityTabs: { id: MachineTab | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "laser", label: "Laser" },
  { id: "cnc", label: "CNC" },
  { id: "punching", label: "Punching" },
  { id: "machining", label: "Machining" },
  { id: "welding", label: "Welding" },
  { id: "additive", label: "Additive Manufacturing" },
  { id: "composites", label: "Composites" },
];

export const machines: Machine[] = [
  {
    id: "ml3015sr",
    name: "Mitsubishi ML3015SR",
    tab: "laser",
    status: "operational",
    image: "/images/facilities/ml3015sr.jpg",
    application: "Laser processing / sheet-metal cutting",
    summary:
      "Flying-optics laser processing machine with simultaneous X-Y-Z control, documented under facilities available.",
    selected: [
      { label: "Workpiece", value: "3015 × 1525 mm" },
      { label: "Rapid XY", value: "Max. 140 m/min combined" },
      { label: "Repeatability XY", value: "±0.01 mm" },
    ],
    specs: [
      { label: "Model", value: "ML3015SR" },
      { label: "Drive system", value: "Flying optics (3-axis beam travel)" },
      {
        label: "Control system",
        value: "X-Y-Z simultaneous 3 axis (Z axis height control is also possible)",
      },
      { label: "Workpiece dimensions", value: "3015 × 1525 mm" },
      { label: "Stroke X-axis", value: "3100 mm" },
      { label: "Stroke Y-axis", value: "1565 mm" },
      { label: "Stroke Z-axis", value: "150 mm" },
      { label: "Rapid feed rate (combined) XY-axis", value: "Max. 140 m/min (combined)" },
      { label: "Positioning accuracy XY-axis", value: "0.01/500 mm" },
      { label: "Positioning accuracy Z-axis", value: "0.01/100 mm" },
      { label: "Repeatability XY-axis", value: "±0.01 mm" },
      { label: "Table pass height", value: "880 mm" },
      { label: "Footprint (reference)", value: "12500 × 5150 mm" },
      { label: "Machine weight (excluding oscillator)", value: "7500 kg" },
      { label: "Pallet changer weight", value: "2100 kg" },
      { label: "Applicable oscillator", value: "ML32XP" },
    ],
  },
  {
    id: "ml3015hv",
    name: "Mitsubishi ML3015HV",
    tab: "laser",
    status: "operational",
    image: "/images/hd/laser.jpg",
    application: "High-volume CNC CO2 laser cutting",
    summary:
      "Heavy-duty CNC CO2 laser cutting system built for high-precision sheet metal fabrication. A reliable industrial choice for high-volume metal cutting.",
    selected: [
      { label: "Resonator", value: "4 kW CO2" },
      { label: "Working area", value: "3,050 × 1,525 mm" },
    ],
    specs: [
      { label: "Type", value: "Heavy-duty CNC CO2 laser cutting system" },
      { label: "Laser resonator", value: "Typically 4 kW CO2" },
      { label: "Working area", value: "3,050 mm × 1,525 mm" },
    ],
  },
  {
    id: "pl6050l",
    name: "PL6050L Turning Centre",
    tab: "cnc",
    status: "operational",
    image: "/images/hd/cnc.jpg",
    application: "CNC turning",
    summary: "CNC turning centre documented with turning-length configurations of 1000 mm, 1500 mm and 2000 mm.",
    selected: [
      { label: "Configuration", value: "1000 mm | 1500 mm | 2000 mm" },
    ],
    specs: [
      { label: "Model", value: "PL6050L (Turning Centre)" },
      { label: "Documented lengths", value: "1000 mm | 1500 mm | 2000 mm" },
    ],
  },
  {
    id: "punch",
    name: "Punch Machine",
    tab: "punching",
    status: "operational",
    image: "/images/facilities/punch.jpg",
    application: "CNC punching and marking of sheet metal",
    summary: "CNC punch machine documented with punching, marking and sheet-handling specifications.",
    selected: [
      { label: "Punching rate", value: "900 1/min (E = 1 mm)" },
      { label: "Working range", value: "2500 × 1250 mm" },
      { label: "Max. sheet thickness", value: "6.4 mm" },
    ],
    specs: [
      { label: "Width", value: "6540 mm *1" },
      { label: "Depth", value: "7237 mm *1" },
      { label: "Height", value: "2155 mm *1" },
      { label: "Maximum stroke rate — punching (E = 1 mm)", value: "900 1/min" },
      { label: "Maximum stroke rate — marking", value: "1600 1/min" },
      { label: "Punching mode, X axis", value: "2500 mm" },
      { label: "Punching mode, Y axis", value: "1250 mm" },
      { label: "Maximum sheet thickness", value: "6.4 mm" },
      { label: "Maximum workpiece weight", value: "150 kg" },
      { label: "Maximum punching force", value: "165 kN" },
    ],
  },
  {
    id: "double-column",
    name: "High Performance Double Column Machining Centre",
    tab: "machining",
    status: "operational",
    image: "/images/hd/gantry.jpg",
    imageFit: "contain",
    application: "Large-format precision machining",
    summary:
      "Double-column machining centre with a 4,000 × 2,100 mm table and 13-ton maximum load, documented with a Mitsubishi spindle.",
    selected: [
      { label: "Table", value: "4000 × 2100 mm" },
      { label: "Max. load", value: "13 tons" },
      { label: "Travels X / Y / Z", value: "4200 / 2300 / 1000 mm" },
    ],
    specs: [
      { label: "Table size", value: "4000 × 2100 mm" },
      { label: "Maximum load", value: "13 tons" },
      { label: "X axis travel", value: "4200 mm" },
      { label: "Y axis travel", value: "2300 mm" },
      { label: "Z axis travel", value: "1000 mm" },
      { label: "Spindle motor (Mitsubishi)", value: "22/26 kW" },
      { label: "Speed", value: "6,000 (8,000, 10,000) rpm" },
      { label: "Taper", value: "BBT-50" },
      { label: "Rapid rate (Mitsubishi)", value: "15/15/12 m/min" },
      { label: "Cutting feed rate", value: "1 – 10,000 mm/min" },
    ],
  },
  {
    id: "panasonic-tig",
    name: "Panasonic YC-400TX3",
    tab: "welding",
    status: "operational",
    image: "/images/facilities/panasonic-tig.jpg",
    imageFit: "contain",
    application: "Industrial welding",
    summary: "Panasonic welding power source documented in the facilities section alongside TIG / MMA capability.",
    selected: [
      { label: "Model", value: "YC-400TX3" },
    ],
    specs: [{ label: "Model", value: "Panasonic YC-400TX3" }],
    features: [
      "Power saving up to 30 – 70 %",
      "Power factor (PF) more than 0.9",
      "Light in weight and compact in size",
      "High quality and spatter-less welding",
      "Good arc start and arc force",
      "Protection against low voltage, high voltage, single phase and surge voltage",
      "Suitable to weld all kind of electronics",
      "H.F. arc starting with pulse control",
      "Two function of DC TIG / MMA",
      "Able to weld mild steel, stainless steel, copper and titanium metals",
    ],
  },
  {
    id: "tig-250",
    name: "TIG-250P AC/DC",
    tab: "welding",
    status: "operational",
    image: "/images/facilities/tig-250.jpg",
    imageFit: "contain",
    application: "TIG / MMA welding",
    summary: "TIG-250P AC/DC welding machine documented with TIG and MMA functions.",
    selected: [
      { label: "Functions", value: "DC TIG / MMA" },
      { label: "Materials", value: "MS, SS, copper, titanium" },
    ],
    specs: [
      { label: "Model", value: "TIG-250P AC/DC" },
      { label: "Functions", value: "DC TIG / MMA" },
    ],
    features: [
      "Power saving up to 30 – 70 %",
      "Power factor (PF) more than 0.9",
      "H.F. arc starting with pulse control",
      "Two function of DC TIG / MMA",
      "Able to weld mild steel, stainless steel, copper and titanium metals",
    ],
  },
  {
    id: "orsus-3015",
    name: "AMADA ORSUS-3015AJe",
    tab: "laser",
    status: "enhancement",
    image: "/images/facilities/orsus-3015.jpg",
    application: "High-speed fibre laser processing",
    summary:
      "High-speed fibre laser machine documented under capability enhancement. Oscillator options 3 kW / 6 kW / 8 kW.",
    selected: [
      { label: "Travel X × Y × Z", value: "3070 × 1550 × 100 mm" },
      { label: "Rapid XY composite", value: "170 m/min" },
      { label: "Oscillator options", value: "FL-3000U / 6000U / 8000U" },
    ],
    specs: [
      { label: "Model", value: "ORSUS-3015AJe" },
      { label: "Registered model name", value: "OR3015AJE" },
      { label: "Axis travel distance X × Y × Z", value: "3070 × 1550 × 100 mm" },
      { label: "Maximum processing dimensions X × Y", value: "3070 × 1550 mm" },
      { label: "Maximum workpiece mass", value: "920 kg" },
      { label: "NC controller", value: "AMNC 4ie" },
      { label: "Oscillator", value: "FL-3000U / FL-6000U / FL-8000U" },
      {
        label: "Chiller",
        value: "RKE2200B1-V-2CH-AMD-A / RKE5500B-V-2CH-AMD / RKE7500B-V-2CH-AMD",
      },
      { label: "Dust collector", value: "PXN-6XA / JXN-6XA (self-standing pail can type)" },
      { label: "Axis control method", value: "X, Y : Rack & Pinion, Z : Ball Screw" },
      { label: "Rapid traverse X × Y composite", value: "170 m/min" },
      { label: "Least input increment", value: "0.001 mm" },
    ],
  },
  {
    id: "hrb-press-brake",
    name: "AMADA HRB Series Press Brake",
    tab: "punching",
    status: "enhancement",
    image: "/images/facilities/hrb-press-brake.jpg",
    application: "CNC press-brake forming",
    summary:
      "The HRB series is AMADA's next-generation press brake that provides new input modes on the AMNC 3i control, and is retrofitable to streamline a customer's bending process. AMADA's IoT solution “V-factory” is supported. Documented under capability enhancement.",
    selected: [
      { label: "Control", value: "AMNC 3i" },
      { label: "Series", value: "HRB (image: HRB 1303)" },
    ],
    specs: [
      { label: "Series", value: "AMADA HRB" },
      { label: "Control", value: "AMNC 3i" },
      { label: "IoT", value: "AMADA V-factory supported" },
    ],
  },
  {
    id: "additive",
    name: "Metal Additive Manufacturing System",
    tab: "additive",
    status: "enhancement",
    image: "/images/facilities/additive.jpg",
    application: "Layer-wise metal 3D production of complex parts",
    summary:
      "Additive manufacturing is an industrial process that builds 3D objects by adding material layer by layer from a digital model. Unlike traditional subtractive methods that cut away from a solid block, it uses plastics, metals, or ceramics to create complex designs with less waste. Documented under capability enhancement.",
    selected: [
      { label: "Build envelope", value: "450 × 450 × 500 mm" },
      { label: "Laser power", value: "500 W × 4 / 6 / 8" },
      { label: "Build speed", value: "100 / 150 / 200 cm³/h" },
    ],
    specs: [
      {
        label: "Supporting materials",
        value:
          "Titanium alloy, aluminium alloy, superalloy, stainless steel, high-strength steel, tool steel",
      },
      { label: "Build dimension (1)", value: "450 mm × 450 mm × 500 mm (W × D × H)" },
      { label: "Laser power", value: "500 W × 4 ; 500 W × 6 ; 500 W × 8" },
      { label: "Building speed (2)", value: "100 cm³/h ; 150 cm³/h ; 200 cm³/h" },
    ],
  },
  {
    id: "frp-unit-7",
    name: "FRP Facility — Unit-7 (44,000 sq. ft)",
    tab: "composites",
    status: "enhancement",
    image: "/images/facilities/frp-layout.jpg",
    imageFit: "contain",
    application: "Advanced composite / FRP manufacturing (planned expansion)",
    summary:
      "New facility of 44,000 sq. ft exclusively for FRP (Unit-7). Looking forward towards manufacturing of advanced composites for DRDO, CABS, CVRDE and HAL. Presented as capability expansion / development — not as a currently operational plant.",
    selected: [
      { label: "Area", value: "44,000 sq. ft" },
      { label: "Focus", value: "FRP / advanced composites" },
    ],
    specs: [
      { label: "Facility", value: "Unit-7, exclusively for FRP" },
      { label: "Area", value: "44,000 sq. ft" },
      { label: "Status", value: "Capability expansion / development" },
      {
        label: "Intended applications",
        value:
          "Ballistic skirt plates for battle tanks; CFRP foot rest & consoles for surveillance aircraft; CFRP shells for missile re-entry components",
      },
    ],
  },
];

export function machinesByTab(tab: MachineTab | "all") {
  if (tab === "all") return machines;
  return machines.filter((m) => m.tab === tab);
}
