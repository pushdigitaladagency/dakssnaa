import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { NotFound, SiteShell } from "@/components/site/layout";
import { company } from "@/data/site";
import appCss from "../styles.css?url";

const APP_NAME = "Sree Dakssnaa Aerospace & Defence";
const DESCRIPTION =
  "Sree Dakssnaa Aerospace & Defence India Pvt Ltd delivers aerospace and defence engineering and manufacturing capabilities including machining, composites, fabrication, assembly, coatings and advanced manufacturing.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#071A33" },
      { name: "application-name", content: APP_NAME },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    foundingDate: company.established,
    parentOrganization: { "@type": "Organization", name: company.parentCover },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 127, Mettupalayam Road, Panruti",
      addressLocality: "Sriperumbudur",
      addressRegion: "Tamil Nadu",
      postalCode: "631604",
      addressCountry: "IN",
    },
    telephone: company.phoneDisplay,
    email: company.email,
  };

  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-svh bg-paper font-sans text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
