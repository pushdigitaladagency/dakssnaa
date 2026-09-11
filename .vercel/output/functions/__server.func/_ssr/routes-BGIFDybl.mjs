import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as ArrowRight, l as ArrowDown, o as Mail, r as Phone, s as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { _ as cn, d as capabilities, f as company, g as requirementTypes, h as partners, i as Kicker, l as StatusBadge, m as leadership, n as Btn, o as ParallaxMedia, p as ecosystem, r as BtnLink, s as Reveal, u as HashLink } from "./router-BnY9vTBH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BGIFDybl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var machines = [
	{
		id: "ml3015sr",
		name: "Mitsubishi ML3015SR",
		tab: "laser",
		status: "operational",
		image: "/images/facilities/ml3015sr.jpg",
		application: "Laser processing / sheet-metal cutting",
		summary: "Flying-optics laser processing machine with simultaneous X-Y-Z control, documented under facilities available.",
		selected: [
			{
				label: "Workpiece",
				value: "3015 × 1525 mm"
			},
			{
				label: "Rapid XY",
				value: "Max. 140 m/min combined"
			},
			{
				label: "Repeatability XY",
				value: "±0.01 mm"
			}
		],
		specs: [
			{
				label: "Model",
				value: "ML3015SR"
			},
			{
				label: "Drive system",
				value: "Flying optics (3-axis beam travel)"
			},
			{
				label: "Control system",
				value: "X-Y-Z simultaneous 3 axis (Z axis height control is also possible)"
			},
			{
				label: "Workpiece dimensions",
				value: "3015 × 1525 mm"
			},
			{
				label: "Stroke X-axis",
				value: "3100 mm"
			},
			{
				label: "Stroke Y-axis",
				value: "1565 mm"
			},
			{
				label: "Stroke Z-axis",
				value: "150 mm"
			},
			{
				label: "Rapid feed rate (combined) XY-axis",
				value: "Max. 140 m/min (combined)"
			},
			{
				label: "Positioning accuracy XY-axis",
				value: "0.01/500 mm"
			},
			{
				label: "Positioning accuracy Z-axis",
				value: "0.01/100 mm"
			},
			{
				label: "Repeatability XY-axis",
				value: "±0.01 mm"
			},
			{
				label: "Table pass height",
				value: "880 mm"
			},
			{
				label: "Footprint (reference)",
				value: "12500 × 5150 mm"
			},
			{
				label: "Machine weight (excluding oscillator)",
				value: "7500 kg"
			},
			{
				label: "Pallet changer weight",
				value: "2100 kg"
			},
			{
				label: "Applicable oscillator",
				value: "ML32XP"
			}
		]
	},
	{
		id: "ml3015hv",
		name: "Mitsubishi ML3015HV",
		tab: "laser",
		status: "operational",
		image: "/images/hd/laser.jpg",
		application: "High-volume CNC CO2 laser cutting",
		summary: "Heavy-duty CNC CO2 laser cutting system built for high-precision sheet metal fabrication. A reliable industrial choice for high-volume metal cutting.",
		selected: [{
			label: "Resonator",
			value: "4 kW CO2"
		}, {
			label: "Working area",
			value: "3,050 × 1,525 mm"
		}],
		specs: [
			{
				label: "Type",
				value: "Heavy-duty CNC CO2 laser cutting system"
			},
			{
				label: "Laser resonator",
				value: "Typically 4 kW CO2"
			},
			{
				label: "Working area",
				value: "3,050 mm × 1,525 mm"
			}
		]
	},
	{
		id: "pl6050l",
		name: "PL6050L Turning Centre",
		tab: "cnc",
		status: "operational",
		image: "/images/hd/cnc.jpg",
		application: "CNC turning",
		summary: "CNC turning centre documented with turning-length configurations of 1000 mm, 1500 mm and 2000 mm.",
		selected: [{
			label: "Configuration",
			value: "1000 mm | 1500 mm | 2000 mm"
		}],
		specs: [{
			label: "Model",
			value: "PL6050L (Turning Centre)"
		}, {
			label: "Documented lengths",
			value: "1000 mm | 1500 mm | 2000 mm"
		}]
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
			{
				label: "Punching rate",
				value: "900 1/min (E = 1 mm)"
			},
			{
				label: "Working range",
				value: "2500 × 1250 mm"
			},
			{
				label: "Max. sheet thickness",
				value: "6.4 mm"
			}
		],
		specs: [
			{
				label: "Width",
				value: "6540 mm *1"
			},
			{
				label: "Depth",
				value: "7237 mm *1"
			},
			{
				label: "Height",
				value: "2155 mm *1"
			},
			{
				label: "Maximum stroke rate — punching (E = 1 mm)",
				value: "900 1/min"
			},
			{
				label: "Maximum stroke rate — marking",
				value: "1600 1/min"
			},
			{
				label: "Punching mode, X axis",
				value: "2500 mm"
			},
			{
				label: "Punching mode, Y axis",
				value: "1250 mm"
			},
			{
				label: "Maximum sheet thickness",
				value: "6.4 mm"
			},
			{
				label: "Maximum workpiece weight",
				value: "150 kg"
			},
			{
				label: "Maximum punching force",
				value: "165 kN"
			}
		]
	},
	{
		id: "double-column",
		name: "High Performance Double Column Machining Centre",
		tab: "machining",
		status: "operational",
		image: "/images/hd/gantry.jpg",
		imageFit: "contain",
		application: "Large-format precision machining",
		summary: "Double-column machining centre with a 4,000 × 2,100 mm table and 13-ton maximum load, documented with a Mitsubishi spindle.",
		selected: [
			{
				label: "Table",
				value: "4000 × 2100 mm"
			},
			{
				label: "Max. load",
				value: "13 tons"
			},
			{
				label: "Travels X / Y / Z",
				value: "4200 / 2300 / 1000 mm"
			}
		],
		specs: [
			{
				label: "Table size",
				value: "4000 × 2100 mm"
			},
			{
				label: "Maximum load",
				value: "13 tons"
			},
			{
				label: "X axis travel",
				value: "4200 mm"
			},
			{
				label: "Y axis travel",
				value: "2300 mm"
			},
			{
				label: "Z axis travel",
				value: "1000 mm"
			},
			{
				label: "Spindle motor (Mitsubishi)",
				value: "22/26 kW"
			},
			{
				label: "Speed",
				value: "6,000 (8,000, 10,000) rpm"
			},
			{
				label: "Taper",
				value: "BBT-50"
			},
			{
				label: "Rapid rate (Mitsubishi)",
				value: "15/15/12 m/min"
			},
			{
				label: "Cutting feed rate",
				value: "1 – 10,000 mm/min"
			}
		]
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
		selected: [{
			label: "Model",
			value: "YC-400TX3"
		}],
		specs: [{
			label: "Model",
			value: "Panasonic YC-400TX3"
		}],
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
			"Able to weld mild steel, stainless steel, copper and titanium metals"
		]
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
		selected: [{
			label: "Functions",
			value: "DC TIG / MMA"
		}, {
			label: "Materials",
			value: "MS, SS, copper, titanium"
		}],
		specs: [{
			label: "Model",
			value: "TIG-250P AC/DC"
		}, {
			label: "Functions",
			value: "DC TIG / MMA"
		}],
		features: [
			"Power saving up to 30 – 70 %",
			"Power factor (PF) more than 0.9",
			"H.F. arc starting with pulse control",
			"Two function of DC TIG / MMA",
			"Able to weld mild steel, stainless steel, copper and titanium metals"
		]
	},
	{
		id: "orsus-3015",
		name: "AMADA ORSUS-3015AJe",
		tab: "laser",
		status: "enhancement",
		image: "/images/facilities/orsus-3015.jpg",
		application: "High-speed fibre laser processing",
		summary: "High-speed fibre laser machine documented under capability enhancement. Oscillator options 3 kW / 6 kW / 8 kW.",
		selected: [
			{
				label: "Travel X × Y × Z",
				value: "3070 × 1550 × 100 mm"
			},
			{
				label: "Rapid XY composite",
				value: "170 m/min"
			},
			{
				label: "Oscillator options",
				value: "FL-3000U / 6000U / 8000U"
			}
		],
		specs: [
			{
				label: "Model",
				value: "ORSUS-3015AJe"
			},
			{
				label: "Registered model name",
				value: "OR3015AJE"
			},
			{
				label: "Axis travel distance X × Y × Z",
				value: "3070 × 1550 × 100 mm"
			},
			{
				label: "Maximum processing dimensions X × Y",
				value: "3070 × 1550 mm"
			},
			{
				label: "Maximum workpiece mass",
				value: "920 kg"
			},
			{
				label: "NC controller",
				value: "AMNC 4ie"
			},
			{
				label: "Oscillator",
				value: "FL-3000U / FL-6000U / FL-8000U"
			},
			{
				label: "Chiller",
				value: "RKE2200B1-V-2CH-AMD-A / RKE5500B-V-2CH-AMD / RKE7500B-V-2CH-AMD"
			},
			{
				label: "Dust collector",
				value: "PXN-6XA / JXN-6XA (self-standing pail can type)"
			},
			{
				label: "Axis control method",
				value: "X, Y : Rack & Pinion, Z : Ball Screw"
			},
			{
				label: "Rapid traverse X × Y composite",
				value: "170 m/min"
			},
			{
				label: "Least input increment",
				value: "0.001 mm"
			}
		]
	},
	{
		id: "hrb-press-brake",
		name: "AMADA HRB Series Press Brake",
		tab: "punching",
		status: "enhancement",
		image: "/images/facilities/hrb-press-brake.jpg",
		application: "CNC press-brake forming",
		summary: "The HRB series is AMADA's next-generation press brake that provides new input modes on the AMNC 3i control, and is retrofitable to streamline a customer's bending process. AMADA's IoT solution “V-factory” is supported. Documented under capability enhancement.",
		selected: [{
			label: "Control",
			value: "AMNC 3i"
		}, {
			label: "Series",
			value: "HRB (image: HRB 1303)"
		}],
		specs: [
			{
				label: "Series",
				value: "AMADA HRB"
			},
			{
				label: "Control",
				value: "AMNC 3i"
			},
			{
				label: "IoT",
				value: "AMADA V-factory supported"
			}
		]
	},
	{
		id: "additive",
		name: "Metal Additive Manufacturing System",
		tab: "additive",
		status: "enhancement",
		image: "/images/facilities/additive.jpg",
		application: "Layer-wise metal 3D production of complex parts",
		summary: "Additive manufacturing is an industrial process that builds 3D objects by adding material layer by layer from a digital model. Unlike traditional subtractive methods that cut away from a solid block, it uses plastics, metals, or ceramics to create complex designs with less waste. Documented under capability enhancement.",
		selected: [
			{
				label: "Build envelope",
				value: "450 × 450 × 500 mm"
			},
			{
				label: "Laser power",
				value: "500 W × 4 / 6 / 8"
			},
			{
				label: "Build speed",
				value: "100 / 150 / 200 cm³/h"
			}
		],
		specs: [
			{
				label: "Supporting materials",
				value: "Titanium alloy, aluminium alloy, superalloy, stainless steel, high-strength steel, tool steel"
			},
			{
				label: "Build dimension (1)",
				value: "450 mm × 450 mm × 500 mm (W × D × H)"
			},
			{
				label: "Laser power",
				value: "500 W × 4 ; 500 W × 6 ; 500 W × 8"
			},
			{
				label: "Building speed (2)",
				value: "100 cm³/h ; 150 cm³/h ; 200 cm³/h"
			}
		]
	},
	{
		id: "frp-unit-7",
		name: "FRP Facility — Unit-7 (44,000 sq. ft)",
		tab: "composites",
		status: "enhancement",
		image: "/images/facilities/frp-layout.jpg",
		imageFit: "contain",
		application: "Advanced composite / FRP manufacturing (planned expansion)",
		summary: "New facility of 44,000 sq. ft exclusively for FRP (Unit-7). Looking forward towards manufacturing of advanced composites for DRDO, CABS, CVRDE and HAL. Presented as capability expansion / development — not as a currently operational plant.",
		selected: [{
			label: "Area",
			value: "44,000 sq. ft"
		}, {
			label: "Focus",
			value: "FRP / advanced composites"
		}],
		specs: [
			{
				label: "Facility",
				value: "Unit-7, exclusively for FRP"
			},
			{
				label: "Area",
				value: "44,000 sq. ft"
			},
			{
				label: "Status",
				value: "Capability expansion / development"
			},
			{
				label: "Intended applications",
				value: "Ballistic skirt plates for battle tanks; CFRP foot rest & consoles for surveillance aircraft; CFRP shells for missile re-entry components"
			}
		]
	}
];
var projects = [
	{
		slug: "amca-cockpit-mockup",
		title: "Mock-up cockpit fabrication for AMCA",
		customer: "ADA, Bengaluru",
		industry: "Aerospace",
		filters: [
			"All",
			"Aerospace",
			"Simulation"
		],
		summary: "Fabrication of a mock-up cockpit for the Advanced Medium Combat Aircraft (AMCA) programme, covering the external shell and an instrumented interior layout.",
		details: ["Customer: ADA, Bengaluru.", "Scope as documented: mock-up cockpit fabrication for AMCA."],
		image: "/images/hd/cockpit-int.jpg",
		featured: true,
		layout: "wide",
		gallery: [{
			src: "/images/projects/amca-cockpit-int.jpg",
			alt: "AMCA mock-up cockpit interior with displays and canopy"
		}, {
			src: "/images/projects/amca-cockpit-ext.jpg",
			alt: "AMCA mock-up cockpit external shell on a support frame"
		}]
	},
	{
		slug: "jaguar-simulator-cockpit",
		title: "Replica fighter aircraft cockpit shell for Jaguar full-mission simulator",
		customer: "HAL, Bengaluru",
		industry: "Aerospace",
		filters: [
			"All",
			"Aerospace",
			"Simulation"
		],
		summary: "Manufacturing of a replica fighter aircraft cockpit shell for a fixed-base full-mission simulator for the Jaguar aircraft.",
		details: ["Customer: HAL, Bengaluru.", "Scope as documented: manufacturing of replica fighter aircraft cockpit shell for fixed-base full-mission simulator for Jaguar aircraft."],
		image: "/images/hd/cockpit-ext.jpg",
		featured: true,
		layout: "tall",
		gallery: [{
			src: "/images/projects/jaguar-cockpit.jpg",
			alt: "Jaguar replica cockpit shell for a full-mission simulator at HAL"
		}]
	},
	{
		slug: "lca-af-mk2-cockpit-shell",
		title: "Modular cockpit shell for LCA AF Mk2",
		customer: "ADA, Bengaluru",
		industry: "Aerospace",
		filters: [
			"All",
			"Aerospace",
			"Structures"
		],
		summary: "Modular cockpit shell work for the LCA AF Mk2, documented with a fuselage arrangement covering radome, cockpit, canopy, equipment bay and air intake.",
		details: ["Customer: ADA, Bengaluru.", "Documented arrangement includes radome, windscreen, canopy, cockpit, equipment bay, avionics cover and air intake, with a fuselage section of 1,100 mm."],
		image: "/images/hd/cockpit-ext.jpg",
		imageFit: "contain",
		featured: true,
		gallery: [{
			src: "/images/projects/lca-mk2-shell.jpg",
			alt: "Modular cockpit shell arrangement for LCA AF Mk2",
			fit: "contain"
		}]
	},
	{
		slug: "railway-wagon-hood",
		title: "Railway wagon hood structure with split roof and mechanical systems",
		customer: "MSC, Pune",
		industry: "Rail",
		filters: [
			"All",
			"Rail",
			"Structures",
			"Engineering"
		],
		summary: "Development, fabrication and integration of a hood structure with split roof and mechanical systems on a railway wagon, including a launch-platform arrangement.",
		details: [
			"Customer: MSC, Pune.",
			"Scope as documented: development, fabrication and integration of hood structure with split roof and mechanical systems on railway wagon.",
			"Also documented as: hood structure with split roof, mechanical systems and launch platform full."
		],
		image: "/images/hd/train.jpg",
		imageFit: "contain",
		featured: true,
		layout: "wide",
		gallery: [{
			src: "/images/projects/wagon-hood.jpg",
			alt: "Railway wagon hood structure with split roof — full assembly",
			fit: "contain"
		}, {
			src: "/images/projects/wagon-hood-detail.jpg",
			alt: "Hood structure mechanical systems and launch platform detail",
			fit: "contain"
		}]
	},
	{
		slug: "aircraft-intake-duct",
		title: "Aircraft intake duct",
		customer: "HAL",
		industry: "Aerospace",
		filters: [
			"All",
			"Aerospace",
			"Structures"
		],
		summary: "Aircraft intake duct manufacturing for HAL.",
		details: ["Customer: HAL.", "Scope as documented: aircraft intake duct."],
		image: "/images/hd/intake.jpg",
		imageFit: "contain",
		featured: true,
		gallery: [{
			src: "/images/projects/intake-duct.jpg",
			alt: "Aircraft intake duct geometry",
			fit: "contain"
		}]
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
		gallery: [{
			src: "/images/projects/stealth-paint.jpg",
			alt: "Stealth paint application on an aerospace surface"
		}]
	},
	{
		slug: "lca-tejas-aptt",
		title: "LCA Tejas avionics part task trainer",
		customer: "HAL",
		industry: "Aerospace",
		filters: [
			"All",
			"Aerospace",
			"Simulation",
			"Engineering"
		],
		summary: "Avionics part-task trainer for LCA Tejas, documented with a cockpit/trainer layout and an instrumented panel.",
		details: ["Customer: HAL.", "Scope as documented: LCA Tejas avionics part task trainer."],
		image: "/images/hd/cockpit-int.jpg",
		featured: true,
		gallery: [{
			src: "/images/projects/aptt-panel.jpg",
			alt: "LCA Tejas avionics part-task trainer instrumented panel"
		}, {
			src: "/images/projects/aptt-layout.jpg",
			alt: "LCA Tejas avionics part-task trainer layout",
			fit: "contain"
		}]
	},
	{
		slug: "t90-preheater",
		title: "T-90 pre-heater / main battle tank",
		customer: "HVF",
		industry: "Defence",
		filters: [
			"All",
			"Defence",
			"Engineering"
		],
		summary: "T-90 pre-heater work associated with the main battle tank, documented for HVF.",
		details: ["Customer: HVF.", "Scope as documented: T90 pre-heater / main battle tank."],
		image: "/images/hd/hull.jpg",
		imageFit: "contain",
		featured: true,
		gallery: [{
			src: "/images/projects/t90-preheater.jpg",
			alt: "T-90 pre-heater assembly for main battle tank",
			fit: "contain"
		}]
	},
	{
		slug: "hull-structure",
		title: "Complete hull structure",
		customer: "HVF",
		industry: "Defence",
		filters: [
			"All",
			"Defence",
			"Structures"
		],
		summary: "Complete hull structure documented for HVF.",
		details: ["Customer: HVF.", "Scope as documented: complete hull structure."],
		image: "/images/hd/hull.jpg",
		imageFit: "contain",
		featured: true,
		layout: "wide",
		gallery: [{
			src: "/images/projects/hull-structure.jpg",
			alt: "Complete hull structure",
			fit: "contain"
		}]
	},
	{
		slug: "turret-structure",
		title: "Turret structure with traverse table and hatches",
		customer: "HVF",
		industry: "Defence",
		filters: [
			"All",
			"Defence",
			"Structures"
		],
		summary: "Turret structure with traverse table and hatches, documented for HVF.",
		details: ["Customer: HVF.", "Scope as documented: turret structure with traverse table & hatches."],
		image: "/images/hd/hull.jpg",
		imageFit: "contain",
		featured: true,
		gallery: [{
			src: "/images/projects/turret-structure.jpg",
			alt: "Turret structure with traverse table and hatches",
			fit: "contain"
		}]
	}
];
function ContactForm({ initialRequirement = "Aerospace" }) {
	const [name, setName] = (0, import_react.useState)("");
	const [org, setOrg] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [requirement, setRequirement] = (0, import_react.useState)(initialRequirement);
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const mailto = (0, import_react.useMemo)(() => {
		const subject = encodeURIComponent(`Engineering enquiry — ${requirement}`);
		const body = encodeURIComponent(`Name: ${name}\nCompany: ${org}\nEmail: ${email}\nPhone: ${phone}\nRequirement: ${requirement}\n\n${message}`);
		return `mailto:${company.email}?subject=${subject}&body=${body}`;
	}, [
		name,
		org,
		email,
		phone,
		requirement,
		message
	]);
	function onSubmit(e) {
		e.preventDefault();
		setError("");
		if (name.trim().length < 2) return setError("Please enter your name.");
		if (org.trim().length < 2) return setError("Please enter your company.");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please enter a valid email.");
		if (phone.trim().length < 8) return setError("Please enter a phone number.");
		if (message.trim().length < 10) return setError("Please describe the requirement in a little more detail.");
		try {
			const prev = JSON.parse(localStorage.getItem("sd-enquiries") || "[]");
			prev.push({
				name,
				company: org,
				email,
				phone,
				requirement,
				message,
				at: (/* @__PURE__ */ new Date()).toISOString()
			});
			localStorage.setItem("sd-enquiries", JSON.stringify(prev));
		} catch {}
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-navy p-8 text-navy-fg md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
				onDark: true,
				children: "Enquiry recorded"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "mt-3 font-display text-section uppercase",
				children: [
					"Thank you, ",
					name,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-navy-muted",
				children: "Your enquiry has been saved on this device. To transmit it to the engineering team now, open your email client or call us directly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
					href: mailto,
					variant: "amber",
					children: "Open email client"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BtnLink, {
					href: `tel:${company.phoneTel}`,
					variant: "outlineLight",
					children: ["Call ", company.phoneDisplay]
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-2xl bg-card p-6 hairline md:p-9",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Engineering enquiry" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-section uppercase",
				children: "Submit enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						htmlFor: "name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							name: "name",
							autoComplete: "name",
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "field",
							required: true,
							suppressHydrationWarning: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Company",
						htmlFor: "company",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "company",
							name: "company",
							autoComplete: "organization",
							value: org,
							onChange: (e) => setOrg(e.target.value),
							className: "field",
							required: true,
							suppressHydrationWarning: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						htmlFor: "email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "field",
							required: true,
							suppressHydrationWarning: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						htmlFor: "phone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							name: "phone",
							type: "tel",
							autoComplete: "tel",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							className: "field",
							required: true,
							suppressHydrationWarning: true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Requirement type",
				htmlFor: "requirement",
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: "requirement",
					name: "requirement",
					value: requirement,
					onChange: (e) => setRequirement(e.target.value),
					className: "field",
					suppressHydrationWarning: true,
					children: requirementTypes.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: r,
						children: r
					}, r))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message",
				htmlFor: "message",
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "message",
					name: "message",
					rows: 6,
					value: message,
					onChange: (e) => setMessage(e.target.value),
					className: "field min-h-36 resize-y",
					required: true,
					suppressHydrationWarning: true
				})
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-signal",
				role: "alert",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				type: "submit",
				variant: "amber",
				className: "mt-6",
				children: "Submit enquiry"
			})
		]
	});
}
function Field({ label, htmlFor, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className,
		htmlFor,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "kicker text-ink-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-2 block",
			children
		})]
	});
}
function GeoField({ variant = "hero", className }) {
	const isLight = variant === "light";
	const stroke = isLight ? "rgba(15,32,72,0.07)" : "rgba(243,239,230,0.12)";
	const faint = isLight ? "rgba(15,32,72,0.045)" : "rgba(243,239,230,0.07)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: cn("pointer-events-none absolute inset-0 size-full", className),
		viewBox: "0 0 1600 900",
		preserveAspectRatio: "xMidYMid slice",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				fill: faint,
				children: Array.from({ length: 22 }).map((_, col) => Array.from({ length: 28 }).map((_, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: 48 + col * 14,
					cy: 36 + row * 30,
					r: col < 2 ? 1.7 : 1.15,
					opacity: col > 4 ? 0 : 1 - col * .16
				}, `${col}-${row}`)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "geo-draw",
				fill: "none",
				stroke,
				strokeWidth: "1.15",
				strokeLinejoin: "round",
				strokeLinecap: "round",
				transform: "translate(1080 70)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 210c-18-70-70-128-148-150-18-5-36-6-54-2l-22 8c-20 12-28 38-22 62 4 14 14 26 28 32l18 6c22 8 28 22 26 42-4 28-22 48-52 58l-90 28c-20 6-32 22-32 42v18l210-24c48-6 78-22 96-52 12-20 22-48 22-68z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M170 92c28 8 48 26 58 52" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
						cx: "198",
						cy: "128",
						rx: "42",
						ry: "28",
						transform: "rotate(-18 198 128)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M188 118c8 2 16 10 18 20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 248c40 4 88-6 128-28" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 290h86l18 22M40 308h70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "58",
						cy: "318",
						r: "16"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "58",
						cy: "318",
						r: "7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M250 200 310 188" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M142 210h48" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "geo-spin",
				fill: "none",
				stroke,
				strokeWidth: "1",
				style: { transformOrigin: "1380px 720px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "1380",
						cy: "720",
						r: "168"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "1380",
						cy: "720",
						r: "128"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "1380",
						cy: "720",
						r: "86"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "1380",
						cy: "720",
						r: "46"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "1380",
						cy: "720",
						r: "18"
					}),
					Array.from({ length: 36 }).map((_, i) => {
						const a = i / 36 * Math.PI * 2;
						const inner = i % 3 === 0 ? 148 : 158;
						const x1 = 1380 + Math.cos(a) * inner;
						const y1 = 720 + Math.sin(a) * inner;
						const x2 = 1380 + Math.cos(a) * 168;
						const y2 = 720 + Math.sin(a) * 168;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}` }, i);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1380 552 V888 M1212 720 H1548" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M1380 720 m-86 0 a86 86 0 0 1 50-78",
						strokeWidth: "6",
						strokeLinecap: "butt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M1380 720 m86 0 a86 86 0 0 1 -30 80",
						strokeWidth: "6",
						strokeLinecap: "butt"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				fill: "none",
				stroke: faint,
				strokeWidth: "1",
				transform: "translate(620 70)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "40,0 80,22 80,66 40,88 0,66 0,22" })
			})
		]
	});
}
function GeoPaper({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/images/hd/geo-paper.jpg",
		alt: "",
		className: cn("pointer-events-none absolute inset-0 size-full object-cover object-right opacity-[0.16]", className),
		"aria-hidden": true
	});
}
var base = "size-full";
function GeoIcon({ name, className }) {
	const cls = cn(base, className);
	switch (name) {
		case "layers": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 42 18 24 28 6 18Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 24 24 33 40 24" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 30 24 39 40 30" })
			]
		});
		case "combine": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "6",
					y: "8",
					width: "16",
					height: "16",
					rx: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "26",
					y: "8",
					width: "16",
					height: "16",
					rx: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 24v6h20v-6M24 30v10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "40",
					r: "3"
				})
			]
		});
		case "paint": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8h16l4 12H12Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 20v8a6 6 0 0 0 12 0v-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "14",
					r: "2",
					fill: "currentColor",
					stroke: "none"
				})
			]
		});
		case "flame": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 18h28v18H10Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 18V12h16v6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 28h6M28 28h6M20 36v4h8v-4" })
			]
		});
		case "ruler": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "16"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8v6M24 34v6M8 24h6M34 24h6M13 13l4 4M31 31l4 4M13 35l4-4M31 17l4-4" })
			]
		});
		case "circuit": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "16",
					y: "16",
					width: "16",
					height: "16",
					rx: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8v8M24 32v8M8 24h8M32 24h8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "8",
					r: "2.2",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "40",
					r: "2.2",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "8",
					cy: "24",
					r: "2.2",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "40",
					cy: "24",
					r: "2.2",
					fill: "currentColor",
					stroke: "none"
				})
			]
		});
		case "clipboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 12h20v28H14Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 12V8h12v4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 22h8M20 28h8M20 34h5" })
			]
		});
		case "target": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "14"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6v6M24 36v6M6 24h6M36 24h6" })
			]
		});
		case "compass": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "16"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 10v4M24 34v4M10 24h4M34 24h4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 18 30 30 24 27 18 30Z",
					fill: "currentColor",
					stroke: "none"
				})
			]
		});
		case "rail": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 18h32v12H8Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 18V14h20v4M12 30v4M36 30v4M8 24h32" })]
		});
		case "aero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 26 40 22 28 26l8 8-10-4-10 8 4-10-12-2Z" })
		});
		case "defence": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 40 12v12c0 10-7 16-16 20C15 40 8 34 8 24V12Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 16v16M16 24h16" })]
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: cls,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8v6M24 34v6M8 24h6M34 24h6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "16"
				})
			]
		});
	}
}
var FRAME_COUNT = 130;
var frameUrl = (i) => `/cad-frames/frame_${String(i).padStart(3, "0")}.jpg`;
/** Draw `img` into the canvas cropped/centred like CSS `object-fit: cover`. */
function drawCover(ctx, img, cw, ch) {
	const ir = img.naturalWidth / img.naturalHeight;
	const cr = cw / ch;
	let sx = 0;
	let sy = 0;
	let sw = img.naturalWidth;
	let sh = img.naturalHeight;
	if (ir > cr) {
		sw = img.naturalHeight * cr;
		sx = (img.naturalWidth - sw) / 2;
	} else {
		sh = img.naturalWidth / cr;
		sy = (img.naturalHeight - sh) / 2;
	}
	ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}
function CadExplode() {
	const pinRef = (0, import_react.useRef)(null);
	const stageRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const barRef = (0, import_react.useRef)(null);
	const labelRef = (0, import_react.useRef)(null);
	const [compact, setCompact] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(max-width: 767px)");
		const sync = () => setCompact(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!compact) return;
		const pin = pinRef.current;
		const video = videoRef.current;
		if (!pin || !video) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			video.pause();
			video.currentTime = 0;
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) video.play().catch(() => {});
			else video.pause();
		}, { threshold: .35 });
		io.observe(pin);
		return () => io.disconnect();
	}, [compact]);
	(0, import_react.useEffect)(() => {
		if (compact) return;
		const pin = pinRef.current;
		const stage = stageRef.current;
		const canvas = canvasRef.current;
		if (!pin || !stage || !canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const images = new Array(131);
		const pending = /* @__PURE__ */ new Map();
		let cancelled = false;
		const loadFrame = (i) => {
			if (images[i]) return Promise.resolve();
			const cached = pending.get(i);
			if (cached) return cached;
			const img = new Image();
			const p = new Promise((resolve) => {
				img.onload = () => {
					images[i] = img;
					resolve();
				};
				img.onerror = () => resolve();
			});
			img.decoding = "async";
			img.src = frameUrl(i);
			pending.set(i, p);
			return p;
		};
		const nearestLoaded = (i) => {
			for (let d = 0; d <= FRAME_COUNT; d++) {
				if (images[i - d]) return i - d;
				if (images[i + d]) return i + d;
			}
			return null;
		};
		let lastDrawn = -1;
		const drawFrame = (i) => {
			const target = images[i] ? i : nearestLoaded(i);
			if (target === null || target === lastDrawn) return;
			const img = images[target];
			if (!img) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const rect = stage.getBoundingClientRect();
			const w = Math.max(1, Math.round(rect.width * dpr));
			const h = Math.max(1, Math.round(rect.height * dpr));
			if (canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
			}
			drawCover(ctx, img, w, h);
			lastDrawn = target;
			if (target !== i && images[i] === void 0) loadFrame(i);
		};
		if (reduce) {
			pin.style.height = "";
			stage.style.position = "";
			stage.style.top = "";
			stage.style.bottom = "";
			stage.style.left = "";
			stage.style.right = "";
			stage.style.height = "";
			loadFrame(1).then(() => {
				if (!cancelled) drawFrame(1);
			});
			return () => {
				cancelled = true;
			};
		}
		const apply = () => {
			const vh = window.innerHeight;
			const range = Math.max(1, pin.offsetHeight - vh);
			const top = pin.getBoundingClientRect().top;
			const p = Math.min(1, Math.max(0, -top / range));
			if (top > 0) {
				stage.style.position = "absolute";
				stage.style.top = "0";
				stage.style.bottom = "auto";
			} else if (top <= -range) {
				stage.style.position = "absolute";
				stage.style.top = "auto";
				stage.style.bottom = "0";
			} else {
				stage.style.position = "fixed";
				stage.style.top = "0";
				stage.style.bottom = "auto";
			}
			stage.style.left = "0";
			stage.style.right = "0";
			stage.style.height = "100svh";
			const idx = Math.min(FRAME_COUNT, Math.max(1, Math.round(p * 129) + 1));
			drawFrame(idx);
			loadFrame(idx);
			if (barRef.current) barRef.current.style.width = `${(p * 100).toFixed(1)}%`;
			if (labelRef.current) labelRef.current.textContent = p >= .97 ? "Exploded view" : p < .06 ? "Assembled" : "Exploding";
		};
		let raf = 0;
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(apply);
		};
		loadFrame(1).then(() => {
			if (!cancelled) apply();
		});
		(async () => {
			const CONCURRENCY = 4;
			let next = 2;
			const worker = async () => {
				while (!cancelled) {
					const i = next++;
					if (i > FRAME_COUNT) return;
					await loadFrame(i);
				}
			};
			await Promise.all(Array.from({ length: CONCURRENCY }, worker));
		})();
		apply();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelled = true;
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, [compact]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: pinRef,
		id: "cad",
		className: "relative bg-[#1b222b] md:h-[360vh]",
		"aria-label": "Defence vehicle CAD explode view",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: stageRef,
			className: "relative h-[58svh] min-h-[320px] overflow-hidden md:absolute md:inset-x-0 md:top-0 md:h-[100svh] md:min-h-0",
			children: [
				compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: videoRef,
					className: "absolute inset-0 size-full object-cover object-center",
					src: "/videos/cad-explode.mp4",
					poster: "/videos/cad-poster.jpg",
					muted: true,
					loop: true,
					playsInline: true,
					preload: "auto",
					"aria-label": "CAD visualisation of a land-system vehicle — hull, turret and mechanical assemblies"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "absolute inset-0 size-full",
					style: {
						backgroundImage: "url(/videos/cad-poster.jpg)",
						backgroundSize: "cover",
						backgroundPosition: "center"
					},
					role: "img",
					"aria-label": "CAD visualisation of a land-system vehicle — hull, turret and mechanical assemblies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-0 top-0 z-10 px-5 pt-16 md:px-8 md:pt-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-[1200px] items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							onDark: true,
							children: "Defence systems"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-xl normal-case tracking-tight text-navy-fg md:mt-2 md:text-3xl",
							children: "Land-system CAD"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							ref: labelRef,
							className: "hidden font-display text-sm tracking-wide text-white/80 uppercase md:block",
							children: "Assembled"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden px-5 pb-8 md:block md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-[1200px] items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker text-white/55",
								children: "Assembled"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-[3px] flex-1 rounded-full bg-white/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									ref: barRef,
									className: "absolute inset-y-0 left-0 rounded-full bg-white/80",
									style: { width: "0%" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker text-white/55",
								children: "Exploded"
							})
						]
					})
				})
			]
		})
	});
}
var film = [
	{
		src: "/images/hd/cockpit-int.jpg",
		alt: "Aircraft cockpit mock-up interior"
	},
	{
		src: "/images/hd/laser.jpg",
		alt: "Precision laser processing"
	},
	{
		src: "/images/hd/cnc.jpg",
		alt: "CNC machining of aerospace metal"
	},
	{
		src: "/images/hd/cockpit-ext.jpg",
		alt: "Cockpit shell on the shop floor"
	},
	{
		src: "/images/hd/gantry.jpg",
		alt: "Double-column machining centre"
	},
	{
		src: "/images/hd/composites.jpg",
		alt: "Composite / CFRP inspection"
	},
	{
		src: "/images/hd/hull.jpg",
		alt: "Hull structure fabrication"
	},
	{
		src: "/images/hd/intake.jpg",
		alt: "Precision-machined intake duct"
	},
	{
		src: "/images/hd/defence.jpg",
		alt: "Defence vehicle engineering"
	},
	{
		src: "/images/hd/aircraft.jpg",
		alt: "Aerospace platform"
	},
	{
		src: "/images/hd/hangar.jpg",
		alt: "Aerospace structure in hangar"
	}
];
function HomePage() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const hash = window.location.hash;
		if (hash) requestAnimationFrame(() => {
			document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(null);
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CadExplode, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filmstrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sectors, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BleedPhoto, {
			src: "/images/hd/laser.jpg",
			alt: "High-precision laser processing",
			kicker: "Plant",
			caption: "High-precision sheet-metal processing on the shop floor."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capabilities, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infrastructure, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BleedPhoto, {
			src: "/images/hd/cockpit-ext.jpg",
			alt: "Aircraft cockpit mock-up shell",
			kicker: "Programme work",
			caption: "Cockpit mock-ups and replica shells for aerospace simulation programmes."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, { onOpen: setOpen }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
		open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectOverlay, {
			project: open,
			onClose: () => setOpen(null)
		}) : null
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate min-h-[78svh] overflow-hidden bg-[#04366f] text-navy-fg md:min-h-[100svh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hd/hero.jpg",
				alt: "Aerospace aircraft and defence vehicle — engineering visualisation",
				className: "absolute inset-0 size-full object-cover object-[72%_center]",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoField, {
				variant: "hero",
				className: "opacity-45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#042a5c]/92 via-[#042a5c]/55 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#042a5c]/50 via-transparent to-[#042a5c]/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex min-h-[78svh] flex-col md:min-h-[100svh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-5 pt-20 pb-16 md:px-8 md:pt-24 md:pb-28 nav:pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-rise kicker text-white/70",
							style: { animationDelay: "80ms" },
							children: "Aerospace / Defence / Advanced manufacturing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "hero-rise mt-4 max-w-xl font-display text-[2.15rem] leading-[1.08] normal-case tracking-[-0.04em] text-white sm:text-display md:mt-5",
							style: { animationDelay: "180ms" },
							children: ["Engineering precision", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "across aerospace & defence"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-rise mt-4 max-w-md text-[0.98rem] leading-relaxed text-white/85 md:mt-6 md:text-lead",
							style: { animationDelay: "420ms" },
							children: "Engineering, manufacturing and integration solutions — built on precision, reliability and manufacturing expertise."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-rise mt-8",
							style: { animationDelay: "580ms" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BtnLink, {
								href: "#capabilities",
								variant: "paper",
								className: "h-12 rounded-full px-7",
								children: ["Know more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HashLink, {
				href: "#about",
				className: "scroll-cue absolute bottom-20 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase md:inline-flex nav:bottom-10 nav:left-auto nav:right-10 nav:translate-x-0",
				children: ["Scroll ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5" })]
			})
		]
	});
}
function Filmstrip() {
	const loop = [...film, ...film];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Workshop and programme photography",
		className: "overflow-hidden bg-navy py-3 md:py-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex gap-3 pr-3 md:gap-4 md:pr-4",
			children: loop.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "w-[150px] shrink-0 overflow-hidden rounded-xl md:w-[300px] md:rounded-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img.src,
					alt: i < film.length ? img.alt : "",
					className: "aspect-[5/4] w-full object-cover",
					loading: "lazy"
				})
			}, `${img.src}-${i}`))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative overflow-hidden bg-paper py-12 md:py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoPaper, { className: "opacity-[0.12]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoField, {
				variant: "light",
				className: "opacity-20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						once: true,
						className: "max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "01 — About us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-title",
							children: "Engineering for aerospace & defence"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid items-start gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							once: true,
							from: "left",
							className: "lg:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "img-zoom",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/hd/cockpit-ext.jpg",
									alt: "Aircraft cockpit mock-up shell",
									className: "aspect-[16/10] w-full object-cover lg:aspect-[4/5]",
									loading: "lazy"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							once: true,
							from: "right",
							delay: 80,
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lead text-ink",
									children: company.intro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-[1.02rem] leading-relaxed text-ink-muted",
									children: "Our capabilities span design, development, fabrication, precision machining, welding, assembly and turnkey manufacturing of metal and non-metal products."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-[1.02rem] leading-relaxed text-ink-muted",
									children: company.parentExpertise
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
									children: [
										["Established", company.established],
										["Base", "Sriperumbudur, TN"],
										["Group", company.parentCover],
										["Focus", "Aerospace & Defence"]
									].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-card px-4 py-4 hairline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "kicker text-ink-subtle",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-sans text-[13px] font-semibold leading-snug tracking-tight text-ink",
											children: v
										})]
									}, k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 md:mt-12 md:gap-10 md:pt-10",
									children: leadership.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "kicker text-navy",
											children: person.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl tracking-tight",
											children: person.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 line-clamp-4 text-sm leading-relaxed text-ink-muted md:mt-3 md:line-clamp-none",
											children: person.bio
										})
									] }, person.name))
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							once: true,
							from: "left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "h-full rounded-2xl bg-navy p-6 text-navy-fg md:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-well",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoIcon, {
											name: "target",
											className: "size-5"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
										onDark: true,
										className: "mt-6",
										children: "Mission"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
										className: "mt-4 font-display text-section tracking-tight",
										children: [
											"“",
											company.mission,
											"”"
										]
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							once: true,
							from: "right",
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "h-full rounded-2xl bg-navy p-6 text-navy-fg md:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-well",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoIcon, {
											name: "compass",
											className: "size-5"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
										onDark: true,
										className: "mt-6",
										children: "Vision"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
										className: "mt-4 font-display text-section tracking-tight",
										children: [
											"“",
											company.vision,
											"”"
										]
									})
								]
							})
						})]
					})
				]
			})
		]
	});
}
function Sectors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-paper py-12 md:py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoPaper, { className: "opacity-[0.12]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoField, {
				variant: "light",
				className: "opacity-15"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-[1160px] px-5 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						once: true,
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Sectors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-title md:mt-4",
							children: "Where precision is applied"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-8 hidden max-w-3xl md:mt-14 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(61,90,128,0.16)_0%,transparent_68%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hd/aircraft.jpg",
							alt: "Aerospace engineering",
							className: "relative mx-auto w-full max-w-2xl object-contain",
							loading: "lazy"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "snap-row mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0",
						children: [
							{
								name: "Railways",
								copy: "Through the Airfloa group, rail structures and wagon integration sit alongside aerospace work.",
								image: "/images/hd/train.jpg",
								icon: "rail"
							},
							{
								name: "Aerospace",
								copy: "Cockpit mock-ups, trainer shells, intake ducts and composite aerospace hardware.",
								image: "/images/hd/aircraft.jpg",
								icon: "aero"
							},
							{
								name: "Defence",
								copy: "Hull, turret and mechanical assemblies for land systems, plus armour-grade composites.",
								image: "/images/hd/defence.jpg",
								icon: "defence"
							}
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							once: true,
							delay: i * 90,
							from: "scale",
							className: "min-w-[78%] snap-start md:min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "card-lift rounded-2xl bg-card p-6 text-center hairline",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-auto grid size-14 place-items-center rounded-2xl bg-navy text-navy-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoIcon, {
											name: item.icon,
											className: "size-7"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 overflow-hidden rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image,
											alt: "",
											className: "aspect-[16/10] w-full object-cover",
											loading: "lazy"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-xl tracking-tight",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-ink-muted",
										children: item.copy
									})
								]
							})
						}, item.name))
					})
				]
			})
		]
	});
}
function BleedPhoto({ src, alt, kicker, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative h-[36vh] min-h-[200px] overflow-hidden bg-navy md:h-[72vh] md:min-h-[420px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxMedia, {
				className: "absolute inset-0 size-full",
				strength: 40,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					className: "absolute inset-0 size-full object-cover",
					loading: "lazy"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "absolute inset-x-0 bottom-0 px-5 py-8 md:px-8 md:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1160px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						from: "left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker text-navy-subtle",
							children: kicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl font-display text-xl text-navy-fg uppercase md:mt-3 md:text-4xl",
							children: caption
						})]
					})
				})
			})
		]
	});
}
function Capabilities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "capabilities",
		className: "relative overflow-hidden bg-paper-2 py-12 md:py-20 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoField, {
			variant: "light",
			className: "opacity-20"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				once: true,
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "02 — Core capabilities" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title md:mt-4",
						children: "From engineering to execution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-ink-muted md:mt-5 md:text-base",
						children: "Eight documented capability areas spanning machining, composites, fabrication, assembly, coatings, additive manufacturing, quality & R&D and project management."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 sm:gap-x-8 sm:gap-y-10 md:mt-14 md:gap-x-10 md:gap-y-14",
				children: capabilities.map((cap, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					once: true,
					delay: i % 2 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "img-zoom bg-navy",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cap.image,
								alt: "",
								className: "aspect-[16/9] w-full object-cover md:aspect-[16/10]",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-2 md:mt-5 md:gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 place-items-center rounded-lg bg-navy text-navy-fg md:size-11 md:rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoIcon, {
									name: cap.icon,
									className: "size-4 md:size-5"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-[0.6rem] text-navy md:text-[0.68rem]",
								children: cap.number
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-[1.05rem] leading-tight tracking-tight md:mt-3 md:text-section",
							children: cap.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 hidden text-[0.98rem] leading-relaxed text-ink-muted sm:block",
							children: cap.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 hidden space-y-2 sm:block",
							children: cap.applications.slice(0, 2).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 bg-navy" }), a]
							}, a))
						})
					] })
				}, cap.id))
			})]
		})]
	});
}
function Infrastructure() {
	const loop = [...machines, ...machines];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "infrastructure",
		className: "bg-navy py-12 text-navy-fg md:py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					once: true,
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							onDark: true,
							children: "03 — Manufacturing infrastructure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-title md:mt-4",
							children: "Built for complex engineering"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-navy-muted md:mt-5 md:text-base",
							children: "Laser processing, CNC and double-column machining, punching and welding, and additive manufacturing for titanium, aluminium, superalloys, stainless steel and other advanced materials. A new 44,000 sq. ft FRP facility is planned for future expansion."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-hidden md:mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "infra-track flex gap-4 pr-4 md:gap-5 md:pr-5",
					children: loop.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "w-[min(78vw,300px)] shrink-0 overflow-hidden rounded-2xl bg-navy-2 hairline-navy md:w-[min(82vw,340px)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden bg-navy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.image,
								alt: m.name,
								className: cn("size-full", m.imageFit === "contain" ? "object-contain bg-navy p-4" : "object-cover"),
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3 left-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: m.status })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg tracking-tight",
									children: m.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-navy-subtle",
									children: m.application
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-4 space-y-2",
									children: m.selected.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-navy-subtle",
											children: s.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "spec-num text-navy-fg",
											children: s.value
										})]
									}, s.label))
								})
							]
						})]
					}, `${m.id}-${i}`))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 grid max-w-[1160px] items-center gap-8 px-5 md:mt-16 md:grid-cols-12 md:gap-10 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					once: true,
					className: "md:col-span-5",
					from: "left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl bg-navy-2 p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/facilities/frp-layout.jpg",
							alt: "FRP factory layout plan for Unit-7",
							className: "w-full rounded-xl object-contain",
							loading: "lazy"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					once: true,
					className: "md:col-span-7",
					from: "right",
					delay: 80,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							onDark: true,
							children: "Expansion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-section",
							children: company.expansion.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 kicker text-navy-subtle",
							children: company.expansion.framing
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-navy-muted",
							children: company.expansion.intent
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: company.expansion.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-navy-fg" }), a]
							}, a))
						})
					]
				})]
			})
		]
	});
}
function Projects({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "bg-paper py-12 md:py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 max-w-2xl md:mb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "04 — Featured projects" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title",
						children: "Engineering in action"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-muted",
						children: "Programme work spanning aerospace cockpits and trainers, defence structures and rail integration — as documented in the company profile."
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					from: "scale",
					className: cn("h-full", i === 0 && "md:col-span-2"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen(p),
						className: "card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy text-left text-navy-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("relative overflow-hidden bg-navy-2 aspect-[16/10]", i === 0 && "md:aspect-[16/8]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									className: cn("size-full transition-transform duration-700 group-hover:scale-[1.04]", p.imageFit === "contain" ? "object-contain p-4" : "object-cover"),
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent opacity-80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "kicker absolute top-4 left-4 rounded-full bg-navy/80 px-2.5 py-1 text-navy-fg",
									children: p.industry
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-3 md:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[10px] font-semibold tracking-[0.14em] text-navy-subtle uppercase md:text-[11px]",
									children: p.customer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1.5 font-display text-[0.95rem] leading-snug tracking-tight md:mt-2 md:text-xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "cta-label mt-auto hidden items-center gap-2 pt-5 text-navy-fg md:inline-flex",
									children: ["View project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
								})
							]
						})]
					})
				}, p.slug))
			})]
		})
	});
}
function ProjectOverlay({ project, onClose }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const img = project.gallery[active] ?? project.gallery[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-overlay flex items-end justify-center bg-navy/70 p-0 md:items-center md:p-8",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "project-title",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-paper text-ink md:rounded-3xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[38vh] min-h-52 bg-navy md:h-[46vh]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img.src,
						alt: img.alt,
						className: cn("size-full", img.fit === "contain" || project.imageFit === "contain" ? "object-contain p-4" : "object-cover")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-xl bg-navy/80 text-navy-fg",
						"aria-label": "Close project",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				project.gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 bg-navy p-3",
					children: project.gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(i),
						className: cn("h-16 w-24 overflow-hidden rounded-lg", i === active ? "ring-2 ring-navy-fg" : "opacity-70"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.src,
							alt: "",
							className: "size-full object-cover"
						})
					}, g.src))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker text-navy",
							children: project.industry
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "project-title",
							className: "mt-3 font-display text-title",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-xs font-semibold tracking-[0.14em] text-ink-subtle uppercase",
							children: project.customer
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-ink-muted",
							children: project.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2",
							children: project.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 bg-navy" }), d]
							}, d))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HashLink, {
							href: "#contact",
							className: "cta-label mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-navy px-5 text-navy-fg",
							onClick: onClose,
							children: ["Discuss a similar programme ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})
			]
		})
	});
}
function Trust() {
	const loop = [...ecosystem, ...ecosystem];
	const loopRev = [...ecosystem].reverse();
	const loopRev2 = [...loopRev, ...loopRev];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "partners",
		className: "overflow-hidden bg-paper-2 py-12 md:py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					once: true,
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "05 — Partners" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-title md:mt-4",
							children: "Supporting leading organisations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-ink-muted md:mt-5 md:text-base",
							children: "Logos appear as presented in the company profile and represent the customers / industry ecosystem — HAL, ADA, DRDO, BEML, Indian Railways, RITES, Alstom, Bombardier and AVANI."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-4 md:mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee-track flex gap-4 pr-4",
						children: loop.map((org, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-20 w-[200px] shrink-0 items-center justify-center rounded-2xl bg-card px-6 hairline md:h-32 md:w-[280px] md:px-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: org.image,
								alt: i < ecosystem.length ? org.alt : "",
								className: "h-14 w-auto max-w-[200px] object-contain md:h-16",
								loading: "lazy"
							})
						}, `${org.name}-a-${i}`))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden overflow-hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee-track-rev flex gap-4 pr-4",
						children: loopRev2.map((org, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-20 w-[200px] shrink-0 items-center justify-center rounded-2xl bg-card px-6 hairline md:h-32 md:w-[280px] md:px-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: org.image,
								alt: "",
								className: "h-14 w-auto max-w-[200px] object-contain md:h-16",
								loading: "lazy"
							})
						}, `${org.name}-b-${i}`))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 max-w-[1160px] px-5 md:mt-16 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Global technology partnerships" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: partners.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						once: true,
						delay: i * 90,
						from: i % 2 ? "right" : "left",
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-lift flex h-full items-center gap-6 rounded-2xl bg-card p-6 hairline md:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: `${p.name} logo`,
								className: "h-20 w-28 shrink-0 object-contain md:h-24 md:w-36",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker text-navy",
									children: p.region
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl tracking-tight md:text-2xl",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink-muted",
									children: p.focus
								})
							] })]
						})
					}, p.name))
				})]
			})
		]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden bg-paper py-12 md:py-20 lg:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoPaper, { className: "opacity-[0.10]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeoField, {
				variant: "light",
				className: "opacity-15"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[1] mx-auto max-w-[1160px] px-5 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					once: true,
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "06 — Contact" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-title md:mt-4",
							children: "Let’s engineer what’s next."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:mt-5 md:text-base",
							children: "Connect with Sree Dakssnaa Aerospace & Defence for engineering, manufacturing and project collaboration opportunities."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-start gap-4 lg:mt-12 lg:grid-cols-12 lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								once: true,
								from: "left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${company.phoneTel}`,
									className: "card-lift flex gap-4 rounded-2xl bg-card p-6 hairline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-navy-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "kicker text-ink-subtle",
											children: "Call us"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-lg font-medium tracking-tight text-ink",
											children: company.phoneDisplay
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-ink-muted",
											children: company.landlineDisplay
										})
									] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								once: true,
								from: "left",
								delay: 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${company.email}`,
									className: "card-lift flex gap-4 rounded-2xl bg-card p-6 hairline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-navy-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-ink-subtle",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 break-all text-[15px] font-medium tracking-tight text-ink",
										children: company.email
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								once: true,
								from: "left",
								delay: 140,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-lift flex gap-4 rounded-2xl bg-card p-6 hairline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-navy-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "kicker text-ink-subtle",
											children: "Works"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
											className: "mt-2 not-italic leading-relaxed text-ink-muted",
											children: company.addressLines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block",
												children: l
											}, l))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: company.mapsUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "cta-label mt-4 inline-flex items-center gap-1 text-navy",
											children: ["Open map ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
										})
									] })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						once: true,
						className: "lg:col-span-7",
						from: "right",
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
					})]
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };
