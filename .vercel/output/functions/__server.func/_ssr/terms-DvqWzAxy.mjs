import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, d as company, i as Kicker, s as Section } from "./router-D86ljitk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-DvqWzAxy.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Legal",
		title: "Terms of use",
		copy: "This website is an information and enquiry channel, not a contractual offer."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Terms" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 max-w-2xl space-y-4 text-ink-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Content on this site is drawn from the company profile of ",
				company.legalName,
				" and is provided for general information. It does not constitute a bid, quotation, certification claim or commitment to supply."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Equipment specifications are reproduced from that profile. Where a value is not stated, it is omitted rather than estimated. Capability-enhancement items are identified as such and are not represented as currently operational." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Programme names, customers and partners appear only where the source material names them. Logos under “customers / industry ecosystem” are presented as they appear in the profile and do not by themselves prove a current direct contract." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Use of this website is at your own discretion. For a binding discussion, contact the company using the details on the Contact page." })
		]
	})] })] });
}
//#endregion
export { TermsPage as component };
