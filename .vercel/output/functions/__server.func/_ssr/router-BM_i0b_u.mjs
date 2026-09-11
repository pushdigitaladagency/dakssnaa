import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, I as redirect, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, r as Phone, s as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BM_i0b_u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var company = {
	legalName: "Sree Dakssnaa Aerospace and Defence India Pvt Ltd",
	shortName: "Sree Dakssnaa",
	wordmark: "SREE DAKSSNAA",
	line: "AEROSPACE & DEFENCE",
	established: "2024",
	tagline: "PRECISION ENGINEERING FOR AEROSPACE & DEFENCE",
	parentCover: "Airfloa Rail Technologies Limited",
	parentProfile: "Airflow Equipment's India Pvt Ltd",
	parentShort: "Airflow",
	shareholding: [{
		name: "Airflow",
		holding: "99%"
	}, {
		name: "D. Manikandan",
		holding: "1%"
	}],
	phoneDisplay: "+91 94443 13234",
	phoneTel: "+919444313234",
	landlineDisplay: "+91 44 2716 2191",
	landlineTel: "+914427162191",
	email: "dakssnaaaerospace@gmail.com",
	addressLines: [
		"No. 127, Mettupalayam Road",
		"Panruti, Sriperumbudur",
		"Kancheepuram – 631604",
		"Tamil Nadu, India"
	],
	addressOneLine: "No. 127, Mettupalayam Road, Panruti, Sriperumbudur, Kancheepuram – 631604, Tamil Nadu, India",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=127+Mettupalayam+Road+Panruti+Sriperumbudur+Kancheepuram+631604",
	profilePdf: "/Sree-Dakssnaa-Company-Profile.pdf",
	coverLocation: "Chennai, India",
	mission: "Our company's mission is to provide innovative and reliable defense and aerospace solutions that contribute to global security and technological advancement.",
	vision: "The vision is to become a leading player in the industry by delivering cutting-edge products and services.",
	intro: "Sree Dakssnaa Aerospace and Defence India Pvt Ltd, established in 2024, focuses on delivering innovative solutions in the Defence and Aerospace sectors. As a subsidiary of Airfloa Rail Technologies Limited, the company draws on the Airflow group's nearly three decades of industry expertise.",
	parentExpertise: "As a parent company, M/s Airflow has been a pioneer in Rolling Stock — Interior Furnishing & Car Body, Defence and Aerospace — integrating design, analysis, development, fabrication, machining, welding and assembly of metal and non-metal turnkey products.",
	competencies: "Core competencies in aerospace engineering, military systems integration, and advanced technology development.",
	differentiators: ["A highly skilled and experienced team, a strong focus on research and development, and strategic partnerships with industry leaders.", "Innovation, customisation, and customer satisfaction as priorities in a competitive market."],
	ordersInHand: "The holding company M/s Airflow has given a subcontract valued at around ₹15 crore.",
	expectedOrders: "Further orders of around ₹25 crore are expected from direct OEMs including HAL (Bengaluru), ADA (Bengaluru), MCSRDC (Bengaluru), MSC / DRDO (Pune), ASL / DRDO (Hyderabad) and HVF (Chennai).",
	expansion: {
		title: "New facility of 44,000 sq. ft exclusively for FRP (Unit-7)",
		framing: "Capability expansion / development — not presented as currently operational.",
		intent: "The company is looking forward towards manufacturing of advanced composites for DRDO, CABS, CVRDE and HAL.",
		applications: [
			"Ballistic skirt plates for battle tanks",
			"CFRP foot rest and consoles for surveillance aircraft",
			"CFRP shells for missile re-entry components"
		]
	}
};
var nav = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#capabilities",
		label: "Capabilities"
	},
	{
		href: "#infrastructure",
		label: "Infrastructure"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#partners",
		label: "Partners"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var leadership = [{
	name: "D. Venkatesan",
	role: "Managing Director",
	bio: "He has three decades of experience in manufacturing industries. He leads a team with strength and integrity, and has been instrumental in establishing a robust foundation for the company, ensuring its competitive edge in the market."
}, {
	name: "D. Manikandan",
	role: "Director",
	bio: "Mechanical engineering graduate, he has over 15 years of experience and is spearheading all new initiatives of Airflow. He makes significant strategic and operational decisions that ensure the company meets its objectives."
}];
var capabilities = [
	{
		id: "machining",
		number: "01",
		title: "Precision Machining",
		short: "CNC turning, laser processing and double-column machining for engineered metal components.",
		overview: "Machining is a core manufacturing capability, spanning CNC turning, laser processing and high-performance double-column machining. Documented equipment includes the PL6050L turning centre, Mitsubishi CO2 laser systems and a double-column machining centre with a 4,000 × 2,100 mm table.",
		applications: [
			"Aerospace structural and cockpit hardware",
			"Defence hull, turret and mechanical assemblies",
			"Precision sheet and plate processing"
		],
		processes: [
			"CNC turning (PL6050L — 1000 / 1500 / 2000 mm)",
			"CO2 laser cutting and processing",
			"Double-column milling and machining"
		],
		icon: "cog",
		image: "/images/hd/cnc.jpg"
	},
	{
		id: "composites",
		number: "02",
		title: "Composite Manufacturing",
		short: "FRP and advanced composite work, including a planned 44,000 sq. ft dedicated facility.",
		overview: "Composite manufacturing is a documented capability, with a 44,000 sq. ft FRP facility (Unit-7) described as a capability expansion. The company is looking forward to manufacturing advanced composites for DRDO, CABS, CVRDE and HAL, and holds a partnership with VCI Composites, Canada, for armour-grade composite panels.",
		applications: [
			"Ballistic skirt plates for battle tanks (expansion)",
			"CFRP foot rest and consoles for surveillance aircraft (expansion)",
			"CFRP shells for missile re-entry components (expansion)",
			"Armour-grade composite panels (partnership: VCI Composites, Canada)"
		],
		processes: ["FRP manufacturing (Unit-7 expansion)", "Advanced composite applications under development"],
		icon: "layers",
		image: "/images/hd/composites.jpg"
	},
	{
		id: "assembly",
		number: "03",
		title: "Assembly",
		short: "Integration of fabricated, machined and composite elements into complete assemblies.",
		overview: "Assembly is a listed core capability. Project work includes integration of hood structure with split roof and mechanical systems on a railway wagon, cockpit mock-ups and shells, and defence hull and turret structures.",
		applications: [
			"Cockpit mock-ups and replica shells",
			"Wagon hood structure with mechanical systems",
			"Hull and turret structure integration"
		],
		processes: [
			"Mechanical integration",
			"Structure assembly",
			"System fit-out as specified by the programme"
		],
		icon: "combine",
		image: "/images/hd/cockpit-int.jpg"
	},
	{
		id: "coatings",
		number: "04",
		title: "Coatings",
		short: "Industrial coatings capability, including documented stealth paint work.",
		overview: "Coatings is a listed manufacturing capability. Documented project work includes stealth paint for HAL.",
		applications: ["Stealth paint / coating (HAL)", "Protective and finish coatings on fabricated assemblies"],
		processes: ["Surface coating as specified by the programme"],
		icon: "paint",
		image: "/images/hd/composites.jpg"
	},
	{
		id: "fabrication",
		number: "05",
		title: "Fabrication",
		short: "Metal fabrication through laser cutting, punching, welding and forming.",
		overview: "Fabrication covers sheet and structural metalwork. Documented facilities include Mitsubishi laser processing machines, CNC punch equipment, TIG/MMA welding (including Panasonic YC-400TX3 and TIG-250P AC/DC) and, under capability enhancement, an AMADA HRB series press brake.",
		applications: [
			"Sheet-metal aerospace and defence parts",
			"Welded structural assemblies",
			"Hood, hull and turret fabrications"
		],
		processes: [
			"Laser cutting",
			"CNC punching",
			"TIG / MMA welding of mild steel, stainless steel, copper and titanium",
			"Press-brake forming (capability enhancement)"
		],
		icon: "flame",
		image: "/images/hd/laser.jpg"
	},
	{
		id: "quality-rd",
		number: "06",
		title: "Quality & R&D",
		short: "Engineering discipline, inspection mindset and a stated focus on research and development.",
		overview: "Quality, R&D is a listed core capability. The company profile emphasises a strong focus on research and development, customisation, and customer satisfaction. No ISO, AS or NADCAP certifications are stated in the source material, so none are claimed here.",
		applications: [
			"Programme-specific inspection and quality control",
			"Process development for aerospace and defence work",
			"Custom engineering solutions"
		],
		processes: [
			"Research and development focus",
			"Customisation to customer requirements",
			"Technology development"
		],
		icon: "ruler",
		image: "/images/hd/intake.jpg"
	},
	{
		id: "advanced-manufacturing",
		number: "07",
		title: "Advanced Manufacturing",
		short: "Laser processing, additive manufacturing and digitally driven production methods.",
		overview: "Advanced manufacturing is a listed capability. Documented systems include Mitsubishi CO2 laser platforms; under capability enhancement, an AMADA ORSUS 3015 AJe fibre laser and a metal additive manufacturing system with a 450 × 450 × 500 mm build envelope.",
		applications: [
			"High-precision sheet processing",
			"Complex metal geometries via additive manufacturing (enhancement)",
			"Digitally driven production of aerospace and defence parts"
		],
		processes: [
			"CO2 laser processing (in-operation equipment)",
			"Fibre laser processing (capability enhancement)",
			"Metal additive manufacturing (capability enhancement)"
		],
		icon: "circuit",
		image: "/images/hd/gantry.jpg"
	},
	{
		id: "project-management",
		number: "08",
		title: "Project Management",
		short: "End-to-end coordination from engineering through fabrication, assembly and delivery.",
		overview: "Project management is a listed capability. Documented programmes span aerospace cockpits and trainers, defence hull and turret structures, and railway wagon hood integration — requiring coordinated design, manufacturing and assembly.",
		applications: [
			"Aerospace mock-up and simulator programmes",
			"Defence structure packages",
			"Rail / transportation structure integration"
		],
		processes: ["Programme coordination from engineering to execution", "Multi-process manufacturing packages"],
		icon: "clipboard",
		image: "/images/hd/cockpit-ext.jpg"
	}
];
var partners = [{
	name: "RUBTEC, Denmark",
	focus: "Aluminium wheels",
	region: "Denmark",
	image: "/images/customers/rubtec.png"
}, {
	name: "VCI Composites, Canada",
	focus: "Armour-grade composite panels",
	region: "Canada",
	image: "/images/customers/vci.png"
}];
var ecosystem = [
	{
		name: "HAL",
		image: "/images/customers/hal.png",
		alt: "HAL — Hindustan Aeronautics Limited"
	},
	{
		name: "ADA",
		image: "/images/customers/ada.png",
		alt: "ADA — Aeronautical Development Agency"
	},
	{
		name: "DRDO",
		image: "/images/customers/drdo.png",
		alt: "DRDO — Defence Research and Development Organisation"
	},
	{
		name: "AVANI",
		image: "/images/customers/avani.png",
		alt: "Armoured Vehicles (AVANI)"
	},
	{
		name: "BEML",
		image: "/images/customers/beml.svg",
		alt: "BEML"
	},
	{
		name: "Bombardier",
		image: "/images/customers/bombardier.png",
		alt: "Bombardier"
	},
	{
		name: "Alstom",
		image: "/images/customers/alstom.svg",
		alt: "Alstom"
	},
	{
		name: "RITES",
		image: "/images/customers/rites.png",
		alt: "RITES"
	},
	{
		name: "Indian Railways",
		image: "/images/customers/indian-railways.png",
		alt: "Indian Railways"
	}
];
var requirementTypes = [
	"Aerospace",
	"Defence",
	"Machining",
	"Composites",
	"Fabrication",
	"Assembly",
	"Coatings",
	"Advanced Manufacturing",
	"Other"
];
function HashLink({ href, className, children, onClick, ...rest }) {
	function go(e) {
		const hash = href.startsWith("/#") ? href.slice(1) : href;
		if (!hash.startsWith("#")) {
			onClick?.(e);
			return;
		}
		const el = document.getElementById(hash.slice(1));
		if (!el) {
			onClick?.(e);
			return;
		}
		e.preventDefault();
		el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		history.replaceState(null, "", hash);
		onClick?.(e);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cn(className),
		onClick: go,
		...rest,
		children
	});
}
function Logo({ onDark = false, compact = false, full = false }) {
	if (full) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
		href: "/#top",
		className: "inline-block",
		"aria-label": "Sree Dakssnaa — home",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("inline-block", onDark && "bg-paper px-5 py-4"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/brand/logo.png",
				alt: "Sree Dakssnaa Aerospace and Defence India Pvt. Ltd.",
				className: "h-auto w-[168px] md:w-[196px]"
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HashLink, {
		href: "/#top",
		className: "group flex items-center gap-3",
		"aria-label": "Sree Dakssnaa Aerospace & Defence — home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/brand/mark.png",
			alt: "",
			className: cn("h-9 w-auto shrink-0 sm:h-10 md:h-11", onDark && "rounded-lg bg-paper p-1")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "hidden min-w-0 flex-col leading-none min-[360px]:flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-sans text-[13px] font-semibold tracking-[0.08em] uppercase", onDark ? "text-navy-fg" : "text-navy"),
				children: "Sree Dakssnaa"
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 hidden font-sans text-[0.5625rem] font-medium tracking-[0.16em] uppercase sm:block", onDark ? "text-navy-subtle" : "text-ink-subtle"),
				children: "Aerospace & Defence"
			}) : null]
		})]
	});
}
var btnClass = {
	amber: "bg-navy text-navy-fg hover:bg-navy-2",
	navy: "bg-navy text-navy-fg hover:bg-navy-2",
	paper: "bg-paper text-navy hover:bg-paper-2",
	outline: "bg-transparent text-navy shadow-[inset_0_0_0_1px] shadow-navy/25 hover:shadow-navy/50",
	outlineLight: "bg-transparent text-navy-fg shadow-[inset_0_0_0_1px] shadow-navy-fg/30 hover:shadow-navy-fg/70",
	ghost: "bg-transparent text-current hover:text-navy"
};
function Btn({ variant = "amber", className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("cta-label inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 transition-colors duration-200 active:scale-[0.96]", btnClass[variant], className),
		...props,
		children
	});
}
function BtnLink({ to, href, variant = "amber", className, children, download, target, rel }) {
	const cls = cn("cta-label inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 transition-colors duration-200 active:scale-[0.96]", btnClass[variant], className);
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cls,
		children
	});
	if (href && (href.startsWith("#") || href.startsWith("/#"))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
		href,
		className: cls,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cls,
		download,
		target,
		rel,
		children
	});
}
function Reveal({ children, className, delay = 0, from = "up", once = false }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				el.classList.add("is-in");
				if (once) io.disconnect();
			} else if (!once) el.classList.remove("is-in");
		}, {
			threshold: .16,
			rootMargin: "0px 0px -10% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [once]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", from === "left" && "reveal-left", from === "right" && "reveal-right", from === "scale" && "reveal-scale", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function ParallaxMedia({ children, className, strength = 32 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		const update = () => {
			const r = el.getBoundingClientRect();
			const vh = window.innerHeight || 1;
			const p = (r.top + r.height / 2 - vh / 2) / vh;
			el.style.setProperty("--para", `${(p * strength).toFixed(1)}px`);
		};
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, [strength]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("parallax-media overflow-hidden", className),
		children
	});
}
function Section({ children, className, innerClassName, id, dark, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative py-16 md:py-24 lg:py-28", dark ? "bg-navy text-navy-fg" : "bg-paper text-ink", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mx-auto px-5 md:px-8", wide ? "max-w-[1280px]" : "max-w-[1160px]", innerClassName),
			children
		})
	});
}
function Kicker({ children, className, onDark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("kicker", onDark ? "text-navy-subtle" : "text-ink-subtle", className),
		children
	});
}
function StatusBadge({ status }) {
	const isOp = status === "operational";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("kicker inline-flex items-center gap-2 rounded-full px-2.5 py-1", isOp ? "bg-navy text-navy-fg" : "bg-paper text-navy"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", isOp ? "bg-paper" : "bg-navy") }), isOp ? "In operation" : "Capability enhancement"]
	});
}
function PageHero({ kicker, title, copy, image, imageAlt, imageFit = "cover" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "relative isolate overflow-hidden bg-navy pt-24 text-navy-fg md:pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative mx-auto grid max-w-[1280px] items-stretch", image ? "lg:grid-cols-12" : ""),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("px-5 py-12 md:px-8 md:py-16", image ? "lg:col-span-7" : ""),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						onDark: true,
						children: kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-display tracking-tight",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lead text-navy-muted normal-case",
						children: copy
					})
				]
			}), image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-56 lg:col-span-5 lg:min-h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: imageAlt ?? "",
					className: cn("size-full", imageFit === "contain" ? "object-contain bg-navy-2 p-4" : "object-cover")
				})
			}) : null]
		})
	});
}
function SiteShell() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-svh flex-col overflow-x-clip bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-overlay focus:bg-navy focus:px-4 focus:py-2 focus:text-navy-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "flex-1 pb-[calc(4.25rem+env(safe-area-inset-bottom))] nav:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
function ProgressBar() {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-navy",
			style: { width: `${p * 100}%` }
		})
	});
}
function Header() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [hidden, setHidden] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#about");
	const lastY = (0, import_react.useRef)(0);
	const isHome = pathname === "/";
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setScrolled(y > 12);
			const goingDown = y > lastY.current + 6;
			const goingUp = y < lastY.current - 6;
			if (open) setHidden(false);
			else if (goingDown && y > 96) setHidden(true);
			else if (goingUp) setHidden(false);
			lastY.current = y;
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!isHome) return;
		const els = nav.map((n) => n.href.slice(1)).map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		if (!els.length) return;
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, [isHome]);
	const overHero = isHome && !scrolled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-nav border-b transition-[transform,background-color,border-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", hidden && !open ? "-translate-y-full" : "translate-y-0", overHero ? "border-transparent bg-navy/30 text-navy-fg backdrop-blur-md" : "border-line bg-paper/95 text-ink backdrop-blur-md"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-5 md:h-[4.5rem] md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { onDark: overHero }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 nav:flex",
					"aria-label": "Primary",
					children: nav.map((item) => {
						const current = isHome && active === item.href;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HashLink, {
							href: `/${item.href}`,
							className: cn("relative whitespace-nowrap py-2 font-sans text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors", overHero ? current ? "text-navy-fg" : "text-navy-fg/70 hover:text-navy-fg" : current ? "text-navy" : "text-ink-muted hover:text-navy"),
							children: [item.label, current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute inset-x-0 -bottom-0.5 h-px", overHero ? "bg-navy-fg" : "bg-navy") }) : null]
						}, item.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
						href: "/#contact",
						variant: overHero ? "paper" : "navy",
						className: "hidden h-9 px-4 sm:inline-flex",
						children: "Enquire"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("inline-flex size-11 items-center justify-center nav:hidden", overHero ? "text-navy-fg" : "text-navy"),
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "mobile-nav",
		className: cn("fixed inset-0 z-overlay flex flex-col bg-paper text-ink transition-transform duration-300 nav:hidden", open ? "translate-y-0" : "-translate-y-full"),
		hidden: !open,
		"aria-hidden": !open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-16 items-center justify-between px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex size-11 items-center justify-center",
				"aria-label": "Close menu",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex flex-1 flex-col justify-center gap-1 px-6 pb-10",
			children: [
				nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
					href: `/${item.href}`,
					className: "font-sans text-3xl font-semibold tracking-tight text-navy",
					onClick: () => setOpen(false),
					children: item.label
				}, item.href)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HashLink, {
					href: "/#contact",
					className: "mt-8 inline-flex w-fit items-center gap-2 bg-navy px-5 py-3 font-sans text-xs font-semibold tracking-[0.14em] text-navy-fg uppercase",
					onClick: () => setOpen(false),
					children: ["Enquire with us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${company.phoneTel}`,
					className: "mt-6 font-sans text-sm text-ink-muted",
					children: company.phoneDisplay
				})
			]
		})]
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-navy-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1160px] gap-8 px-5 py-10 md:grid-cols-12 md:gap-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							full: true,
							onDark: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-navy-muted",
							children: "Engineering, manufacturing and integration solutions for the Aerospace & Defence sectors — built on precision, reliability and manufacturing expertise."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-sans text-[11px] tracking-[0.16em] text-navy-subtle uppercase",
							children: ["Established ", company.established]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-navy-subtle",
						children: "On this page"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-navy-muted",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
							href: `/${item.href}`,
							className: "hover:text-navy-fg",
							children: item.label
						}) }, item.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-navy-subtle",
						children: "Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-navy-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
								href: "/#capabilities",
								className: "hover:text-navy-fg",
								children: "Precision machining"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
								href: "/#capabilities",
								className: "hover:text-navy-fg",
								children: "Composite manufacturing"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
								href: "/#infrastructure",
								className: "hover:text-navy-fg",
								children: "Fabrication & welding"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
								href: "/#infrastructure",
								className: "hover:text-navy-fg",
								children: "Additive manufacturing"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker text-navy-subtle",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
							className: "mt-4 not-italic text-sm leading-relaxed text-navy-muted",
							children: company.addressLines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: l
							}, l))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${company.phoneTel}`,
							className: "mt-3 block text-sm text-navy-fg hover:text-paper",
							children: company.phoneDisplay
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${company.email}`,
							className: "mt-1 block text-sm text-navy-fg hover:text-paper",
							children: company.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.profilePdf,
							className: "mt-4 inline-flex items-center gap-1 text-xs tracking-[0.12em] text-navy-fg uppercase",
							download: true,
							children: ["Download company profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-navy-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1160px] flex-col gap-3 px-5 py-5 text-xs text-navy-subtle md:flex-row md:items-center md:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.legalName,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-navy-fg",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-navy-fg",
						children: "Terms"
					})]
				})]
			})
		})]
	});
}
function MobileCta() {
	if (useRouterState({ select: (s) => s.location.pathname }) !== "/") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 text-ink backdrop-blur-md nav:hidden pb-[env(safe-area-inset-bottom)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `tel:${company.phoneTel}`,
				className: "inline-flex h-14 items-center justify-center gap-2 font-sans text-xs font-semibold tracking-[0.14em] uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-navy" }), " Call us"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLink, {
				href: "#contact",
				className: "inline-flex h-14 items-center justify-center bg-navy font-sans text-xs font-semibold tracking-[0.14em] text-navy-fg uppercase",
				children: "Enquire"
			})]
		})
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 pt-28 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker text-navy",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-title",
				children: "Page not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-ink-muted",
				children: "The page you requested is not in this site. Return home or start an engineering enquiry."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
					href: "/#top",
					variant: "amber",
					children: "Home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
					href: "/#contact",
					variant: "outline",
					children: "Contact"
				})]
			})
		]
	});
}
var styles_default = "/assets/styles-BNDMQh2f.css";
var APP_NAME = "Sree Dakssnaa Aerospace & Defence";
var DESCRIPTION = "Sree Dakssnaa Aerospace & Defence India Pvt Ltd delivers aerospace and defence engineering and manufacturing capabilities including machining, composites, fabrication, assembly, coatings and advanced manufacturing.";
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "theme-color",
				content: "#071A33"
			},
			{
				name: "application-name",
				content: APP_NAME
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function RootDocument() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: company.legalName,
		foundingDate: company.established,
		parentOrganization: {
			"@type": "Organization",
			name: company.parentCover
		},
		address: {
			"@type": "PostalAddress",
			streetAddress: "No. 127, Mettupalayam Road, Panruti",
			addressLocality: "Sriperumbudur",
			addressRegion: "Tamil Nadu",
			postalCode: "631604",
			addressCountry: "IN"
		},
		telephone: company.phoneDisplay,
		email: company.email
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-svh bg-paper font-sans text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$2 = () => import("./routes-28n_vwqk.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Sree Dakssnaa Aerospace & Defence | Engineering Precision" }, {
		name: "description",
		content: "Sree Dakssnaa Aerospace & Defence India Pvt Ltd delivers engineering, manufacturing and integration solutions for aerospace and defence — precision machining, composites, fabrication, assembly and turnkey manufacturing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$10 = createFileRoute("/about")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "about"
	});
} });
var Route$9 = createFileRoute("/capabilities")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "capabilities"
	});
} });
var Route$8 = createFileRoute("/contact")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "contact"
	});
} });
var Route$7 = createFileRoute("/facilities")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "infrastructure"
	});
} });
var Route$6 = createFileRoute("/industries")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "about"
	});
} });
var Route$5 = createFileRoute("/partnerships")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "partners"
	});
} });
var $$splitComponentImporter$1 = () => import("./privacy-DJiqUedB.mjs");
var Route$4 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy | Sree Dakssnaa Aerospace & Defence" }, {
		name: "description",
		content: "Privacy policy for the Sree Dakssnaa website."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$3 = createFileRoute("/projects")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "projects"
	});
} });
var Route$2 = createFileRoute("/quality-rd")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "capabilities"
	});
} });
var $$splitComponentImporter = () => import("./terms-CyS-8vSc.mjs");
var Route$1 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms | Sree Dakssnaa Aerospace & Defence" }, {
		name: "description",
		content: "Website terms for Sree Dakssnaa Aerospace & Defence."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route = createFileRoute("/projects/$slug")({ beforeLoad: () => {
	throw redirect({
		to: "/",
		hash: "projects"
	});
} });
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var CapabilitiesRoute = Route$9.update({
	id: "/capabilities",
	path: "/capabilities",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var FacilitiesRoute = Route$7.update({
	id: "/facilities",
	path: "/facilities",
	getParentRoute: () => Route$12
});
var IndustriesRoute = Route$6.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$12
});
var PartnershipsRoute = Route$5.update({
	id: "/partnerships",
	path: "/partnerships",
	getParentRoute: () => Route$12
});
var PrivacyRoute = Route$4.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$12
});
var ProjectsRoute = Route$3.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$12
});
var QualityRdRoute = Route$2.update({
	id: "/quality-rd",
	path: "/quality-rd",
	getParentRoute: () => Route$12
});
var TermsRoute = Route$1.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$12
});
var ProjectsRouteChildren = { ProjectsSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProjectsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CapabilitiesRoute,
	ContactRoute,
	FacilitiesRoute,
	IndustriesRoute,
	PartnershipsRoute,
	PrivacyRoute,
	ProjectsRoute: ProjectsRoute._addFileChildren(ProjectsRouteChildren),
	QualityRdRoute,
	TermsRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { cn as _, PageHero as a, Section as c, capabilities as d, company as f, requirementTypes as g, partners as h, Kicker as i, StatusBadge as l, leadership as m, Btn as n, ParallaxMedia as o, ecosystem as p, BtnLink as r, Reveal as s, router_exports as t, HashLink as u };
