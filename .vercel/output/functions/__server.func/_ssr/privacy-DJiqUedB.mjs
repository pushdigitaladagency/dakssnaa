import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, c as Section, f as company, i as Kicker } from "./router-BM_i0b_u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-DJiqUedB.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Legal",
		title: "Privacy Policy",
		copy: "How this website handles information submitted through the enquiry form."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Scope" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 max-w-2xl space-y-4 text-ink-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [company.legalName, " operates this website to present manufacturing capabilities and to receive engineering enquiries."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"If you submit the enquiry form, the details you enter (name, company, email, phone, requirement type and message) are stored in your browser on this device so that you can open an email to ",
				company.email,
				". They are not transmitted to a server by this website unless you send that email or contact us by phone."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not sell personal information. This page does not describe a customer, employee or supplier data-processing programme beyond the public website." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"For any privacy request, write to ",
				company.email,
				" or call ",
				company.phoneDisplay,
				"."
			] })
		]
	})] })] });
}
//#endregion
export { PrivacyPage as component };
