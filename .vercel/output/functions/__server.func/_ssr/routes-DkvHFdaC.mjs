import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as ArrowRight, l as ArrowDown, o as Mail, r as Phone, s as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { c as StatusBadge, d as company, f as ecosystem, g as cn, h as requirementTypes, i as Kicker, l as HashLink, m as partners, n as Btn, o as Reveal, p as leadership, r as BtnLink, u as capabilities } from "./router-D86ljitk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DkvHFdaC.js
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
		image: "/images/facilities/ml3015hv.jpg",
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
		image: "/images/facilities/pl6050l.jpg",
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
		image: "/images/facilities/double-column.jpg",
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
		image: "/images/projects/amca-cockpit-int.jpg",
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
		image: "/images/projects/jaguar-cockpit.jpg",
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
		image: "/images/projects/lca-mk2-shell.jpg",
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
		image: "/images/projects/wagon-hood.jpg",
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
		image: "/images/projects/intake-duct.jpg",
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
		image: "/images/projects/stealth-paint.jpg",
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
		image: "/images/projects/aptt-panel.jpg",
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
		image: "/images/projects/t90-preheater.jpg",
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
		image: "/images/projects/hull-structure.jpg",
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
		image: "/images/projects/turret-structure.jpg",
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
		className: "bg-navy p-8 text-navy-fg",
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
		className: "bg-card p-6 hairline md:p-8",
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
							required: true
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
							required: true
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
							required: true
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
							required: true
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
					required: true
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
var film = [
	{
		src: "/images/projects/amca-cockpit-int.jpg",
		alt: "AMCA mock-up cockpit interior"
	},
	{
		src: "/images/hero/laser-facility.jpg",
		alt: "Laser processing facility"
	},
	{
		src: "/images/projects/jaguar-cockpit.jpg",
		alt: "Jaguar simulator cockpit shell"
	},
	{
		src: "/images/hero/cnc-machining.jpg",
		alt: "CNC machining"
	},
	{
		src: "/images/projects/amca-cockpit-ext.jpg",
		alt: "AMCA cockpit external shell"
	},
	{
		src: "/images/facilities/double-column.jpg",
		alt: "Double-column machining centre"
	},
	{
		src: "/images/projects/aptt-panel.jpg",
		alt: "LCA Tejas avionics trainer panel"
	},
	{
		src: "/images/hero/carbon-fiber.jpg",
		alt: "Composite / CFRP work"
	},
	{
		src: "/images/projects/hull-structure.jpg",
		alt: "Hull structure"
	},
	{
		src: "/images/projects/intake-duct.jpg",
		alt: "Aircraft intake duct"
	},
	{
		src: "/images/projects/t90-preheater.jpg",
		alt: "T-90 pre-heater"
	},
	{
		src: "/images/projects/turret-structure.jpg",
		alt: "Turret structure"
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filmstrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BleedPhoto, {
			src: "/images/hero/laser-facility.jpg",
			alt: "High-precision laser processing",
			kicker: "Plant",
			caption: "High-precision sheet-metal processing on the shop floor."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capabilities, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infrastructure, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BleedPhoto, {
			src: "/images/projects/jaguar-cockpit.jpg",
			alt: "Jaguar replica cockpit shell",
			kicker: "Programme work",
			caption: "Replica fighter cockpit shell for a Jaguar full-mission simulator — HAL, Bengaluru."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, { onOpen: setOpen }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Direction, {}),
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
		className: "relative isolate min-h-[100svh] overflow-hidden bg-navy text-navy-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/projects/amca-cockpit-int.jpg",
				alt: "AMCA mock-up cockpit fabricated for ADA, Bengaluru",
				className: "ken absolute inset-0 size-full object-cover object-[70%_45%]",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-navy/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-5 pt-28 pb-24 md:px-8 md:pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker text-signal",
							children: "Aerospace / Defence / Advanced manufacturing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 max-w-5xl font-display text-display text-navy-fg",
							children: ["Engineering precision.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "Building mission-critical solutions."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lead text-navy-fg/80",
							children: "Engineering, manufacturing and integration solutions for the Aerospace & Defence sectors — built on precision, reliability and manufacturing expertise."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BtnLink, {
								href: "#capabilities",
								variant: "amber",
								children: ["Explore our capabilities ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
								href: "#contact",
								variant: "outlineLight",
								children: "Contact us"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-2 gap-px bg-navy-line sm:grid-cols-4",
						children: [
							["Established", company.established],
							["Base", "Sriperumbudur, TN"],
							["Group", company.parentCover],
							["Focus", "Aerospace & Defence"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-navy/65 px-4 py-4 backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-navy-subtle",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-sm tracking-tight uppercase",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HashLink, {
						href: "#about",
						className: "mt-8 inline-flex items-center gap-2 self-start font-mono text-[11px] tracking-[0.2em] text-navy-subtle uppercase",
						children: ["Scroll ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5" })]
					})
				]
			})
		]
	});
}
function Filmstrip() {
	const loop = [...film, ...film];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Workshop and programme photography",
		className: "overflow-hidden bg-charcoal py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex gap-3 pr-3",
			children: loop.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "w-[220px] shrink-0 md:w-[300px]",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative overflow-hidden bg-paper py-16 md:py-24 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1160px] items-start gap-12 px-5 md:px-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "01 — About us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-display",
					children: "Engineering for aerospace & defence"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 hidden overflow-hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/projects/amca-cockpit-ext.jpg",
						alt: "AMCA mock-up cockpit external shell",
						className: "aspect-[4/5] w-full object-cover",
						loading: "lazy"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-7 lg:pt-10",
				delay: 80,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lead text-ink",
						children: company.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-ink-muted",
						children: "Our capabilities span design, development, fabrication, precision machining, welding, assembly and turnkey manufacturing of metal and non-metal products."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-ink-muted",
						children: company.parentExpertise
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid grid-cols-2 gap-px bg-line sm:grid-cols-3",
						children: [
							["Precision", "Engineering"],
							["Advanced", "Manufacturing"],
							["Defence &", "Aerospace"]
						].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-paper px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl uppercase leading-none",
								children: a
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl uppercase leading-none text-ink-muted",
								children: b
							})]
						}, a))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2",
						children: leadership.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-card p-5 hairline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker text-signal",
									children: person.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl",
									children: person.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-muted",
									children: person.bio
								})
							]
						}, person.name))
					})
				]
			})]
		})
	});
}
function BleedPhoto({ src, alt, kicker, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative h-[72vh] min-h-[420px] overflow-hidden bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "ken absolute inset-0 size-full object-cover",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "absolute inset-x-0 bottom-0 px-5 py-8 md:px-8 md:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1160px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-signal",
						children: kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl font-display text-2xl text-navy-fg uppercase md:text-4xl",
						children: caption
					})]
				})
			})
		]
	});
}
function Capabilities() {
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const nodes = Array.from(document.querySelectorAll("[data-cap]"));
		if (!nodes.length) return;
		const io = new IntersectionObserver((entries) => {
			const id = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target.getAttribute("data-cap");
			if (id) {
				const idx = capabilities.findIndex((c) => c.id === id);
				if (idx >= 0) setActive(idx);
			}
		}, {
			rootMargin: "-35% 0px -45% 0px",
			threshold: [
				.2,
				.45,
				.7
			]
		});
		nodes.forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, []);
	const current = capabilities[active] ?? capabilities[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "capabilities",
		className: "bg-paper-2 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1280px] px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 max-w-2xl md:mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "02 — Core capabilities" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title",
						children: "From engineering to execution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-muted",
						children: "Eight documented capability areas spanning machining, composites, fabrication, assembly, coatings, additive manufacturing, quality & R&D and project management."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:col-span-5 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-24 overflow-hidden bg-navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: current.image,
									alt: "",
									className: "size-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-6 text-navy-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-signal",
										children: current.number
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-3xl uppercase",
										children: current.title
									})]
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: capabilities.map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						"data-cap": cap.id,
						className: "border-t border-line py-10 first:border-t-0 first:pt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cap.image,
								alt: "",
								className: "mb-6 aspect-[16/10] w-full object-cover lg:hidden",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-signal",
								children: cap.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl uppercase md:text-4xl",
								children: cap.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-ink-muted",
								children: cap.overview
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2",
								children: cap.applications.slice(0, 3).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 bg-signal" }), a]
								}, a))
							})
						]
					}, cap.id))
				})]
			})]
		})
	});
}
function Infrastructure() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "infrastructure",
		className: "bg-navy py-16 text-navy-fg md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1280px] px-5 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 max-w-2xl md:mb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							onDark: true,
							children: "03 — Manufacturing infrastructure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-title",
							children: "Built for complex engineering"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-navy-muted",
							children: "Laser processing, CNC and double-column machining, punching and welding, and additive manufacturing for titanium, aluminium, superalloys, stainless steel and other advanced materials. A new 44,000 sq. ft FRP facility is planned for future expansion."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hide-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-8",
				children: machines.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "w-[min(86vw,380px)] shrink-0 snap-start bg-navy-2 hairline-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] overflow-hidden bg-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m.image,
							alt: m.name,
							className: cn("size-full", m.imageFit === "contain" ? "object-contain bg-navy p-3" : "object-cover"),
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
								className: "mt-1 text-xs text-navy-subtle",
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
				}, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-12 grid max-w-[1160px] gap-8 px-5 md:grid-cols-12 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/facilities/frp-layout.jpg",
						alt: "FRP factory layout plan for Unit-7",
						className: "w-full bg-navy-2 object-contain",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7 md:pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							onDark: true,
							children: "Expansion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-section uppercase",
							children: company.expansion.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 kicker text-signal",
							children: company.expansion.framing
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-navy-muted",
							children: company.expansion.intent
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: company.expansion.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 bg-signal" }), a]
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
		className: "bg-paper py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 max-w-2xl md:mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "04 — Featured projects" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title",
						children: "Engineering in action"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-muted",
						children: "Programme work spanning aerospace cockpits and trainers, defence structures and rail integration — as documented in the company profile."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpen(p),
					className: cn("group relative flex flex-col overflow-hidden bg-charcoal text-left text-navy-fg", i === 0 && "md:col-span-2"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("relative overflow-hidden bg-navy-2", i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.title,
								className: cn("size-full transition-transform duration-700 group-hover:scale-[1.04]", p.imageFit === "contain" ? "object-contain p-4" : "object-cover"),
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent opacity-80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker absolute top-4 left-4 bg-navy/80 px-2 py-1 text-signal",
								children: p.industry
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.14em] text-navy-subtle uppercase",
								children: p.customer
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-lg leading-snug tracking-tight md:text-xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "cta-label mt-auto inline-flex items-center gap-2 pt-5 text-signal",
								children: ["View project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							})
						]
					})]
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
			className: "max-h-[92svh] w-full max-w-4xl overflow-y-auto bg-paper text-ink",
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
						className: "absolute top-3 right-3 inline-flex size-11 items-center justify-center bg-navy/80 text-navy-fg",
						"aria-label": "Close project",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				project.gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 bg-charcoal p-3",
					children: project.gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(i),
						className: cn("h-16 w-24 overflow-hidden", i === active ? "ring-2 ring-signal" : "opacity-70"),
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
							className: "kicker text-signal",
							children: project.industry
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "project-title",
							className: "mt-3 font-display text-title",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-xs tracking-[0.14em] text-ink-subtle uppercase",
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 bg-signal" }), d]
							}, d))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HashLink, {
							href: "#contact",
							className: "cta-label mt-8 inline-flex h-11 items-center justify-center gap-2 bg-navy px-5 text-navy-fg",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "partners",
		className: "bg-paper-2 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1160px] px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 max-w-2xl md:mb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "05 — Trusted by" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-title",
							children: "Supporting leading organisations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink-muted",
							children: "HAL · ADA · DRDO · BEML · Indian Railways · RITES · Alstom · Bombardier. Logos appear as presented in the company profile and represent the customers / industry ecosystem."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
					children: ecosystem.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex aspect-[5/3] items-center justify-center bg-card px-4 py-6 hairline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: org.image,
							alt: org.alt,
							className: "max-h-14 w-auto max-w-full object-contain",
							loading: "lazy"
						})
					}, org.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Global technology partnerships" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: partners.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-navy p-7 text-navy-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker text-signal",
									children: p.region
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl uppercase tracking-tight",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-navy-muted",
									children: p.focus
								})
							]
						}, p.name))
					})]
				})
			]
		})
	});
}
function Direction() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy py-20 text-navy-fg md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1160px] gap-12 px-5 md:px-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
				onDark: true,
				children: "Mission"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-5 font-display text-section tracking-tight",
				children: [
					"“",
					company.mission,
					"”"
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
				onDark: true,
				children: "Vision"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-5 font-display text-section tracking-tight",
				children: [
					"“",
					company.vision,
					"”"
				]
			})] })]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative overflow-hidden bg-paper py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1160px] gap-12 px-5 md:px-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "06 — Contact" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title",
						children: "Let’s engineer what’s next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-muted",
						children: "Connect with Sree Dakssnaa Aerospace & Defence for engineering, manufacturing and project collaboration opportunities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-5 text-signal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-ink-subtle",
										children: "Call us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${company.phoneTel}`,
										className: "mt-1 block text-lg hover:text-navy",
										children: company.phoneDisplay
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${company.landlineTel}`,
										className: "mt-1 block text-sm text-ink-muted hover:text-navy",
										children: company.landlineDisplay
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-5 text-signal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker text-ink-subtle",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${company.email}`,
									className: "mt-1 block hover:text-navy",
									children: company.email
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 text-signal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-ink-subtle",
										children: "Works"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
										className: "mt-1 not-italic text-ink-muted",
										children: company.addressLines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block",
											children: l
										}, l))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: company.mapsUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "cta-label mt-3 inline-flex items-center gap-1 text-navy",
										children: ["Open map ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
									})
								] })]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };
