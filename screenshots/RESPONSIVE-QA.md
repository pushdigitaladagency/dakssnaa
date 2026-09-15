# Responsive fixes and verification

## Changes

The existing React / TanStack Router / Tailwind website was edited in place. No content, images, colors, font families, dependencies, or routes were replaced.

| File | Responsive change |
| --- | --- |
| `src/components/home/cad-explode.tsx` | Start with the mobile layout; release desktop positioning when switching layouts; redraw resized canvases; keep tablet progress labels above the fixed action bar. |
| `src/components/home/plant-reel.tsx` | Preserve the existing scroll-driven reel on all screen sizes; use the rendered stage height for pinning, redraw after resizing, and reserve caption space above the mobile action bar. Pre-existing local changes were preserved. |
| `src/components/home/page.tsx` | Stack partner logos and text where the horizontal cards did not fit; contain project gallery scrolling and provide labeled thumbnail controls and bottom safe-area spacing. |
| `src/components/site/layout.tsx` | Scrollable mobile navigation with touch-sized links, Escape/focus handling, and scroll-lock cleanup on resizing; two-column tablet footer; move action-bar clearance below the footer. |
| `src/components/site/contact-form.tsx` | Allow form fields to shrink within grids; bring the submission confirmation into the mobile viewport. |
| `src/components/site/ui.tsx` | Apply multi-column specification spans only when the specification grid has multiple columns. |
| `src/styles.css` | Remove document-wide horizontal clipping; use vertical reveals below the navigation breakpoint; responsive button wrapping, 16px mobile form controls, and footer link wrapping/touch targets. |

## Breakpoints

- **640px:** multi-column specification rows; partner cards can use horizontal content where space permits.
- **768px:** CAD video/frame-sequence switch and tablet layout; tablet footer uses two columns.
- **1024px:** partner card content returns to its original horizontal layout.
- **1120px (70rem):** existing desktop navigation threshold; mobile form, button, footer, reveal, and fixed-action-bar adjustments stop here.
- CAD and navigation media queries use matching CSS/JavaScript boundaries, including fractional viewport widths.

## Layout audit

Browser viewport emulation covered **320×568, 375×667, 390×844, 414×896, 430×932, 768×1024**, plus **1280×800 desktop**.

The homepage, Privacy, and Terms were audited at every size in development and production. The remaining routes redirect to homepage sections; the interaction audit checks the eight section aliases and all ten legacy project URLs.

The final production layout report contains 21 page/viewport combinations:

- No document horizontal overflow.
- No broken images detected.
- No browser console or runtime errors.
- Production section geometry matches development.
- Desktop section positions and heights match the original baseline on all three rendered pages; desktop screenshots were also visually compared.

The raw layout report includes diagnostic element bounds. Its `problems` array also includes deliberately cropped parallax images and transient desktop reveal transforms; these do not represent page-level overflow. Cropping remains local to media containers, and the document no longer hides horizontal overflow.

## Interaction coverage

- Six mobile navigation links, menu dismissal, and scroll-lock release.
- All ten project dialogs, every gallery thumbnail, and reachability of their final action.
- Form validation and local submission; the confirmation heading is asserted to be inside the mobile viewport.
- Footer links remain reachable above the fixed action bar.
- Legacy redirects and navigation back from legal pages.
- Rotation between phone, tablet, and desktop widths; scrollable short landscape menu.
- Real emulated touch swipes on the sector cards, mobile CAD video playback, scroll-driven plant frames, and canvas resizing at device pixel ratio 2.
- `npm run build`, `npm run typecheck`, and `git diff --check` pass.

## Evidence

- `before/`: original screenshots and measurements.
- `after/`: development screenshots and measurements.
- `production/report.json`: final production layout results.
- `production-interactions/report.json`: final production interaction results.
- `production/media.json`: touch, video, frame-sequence, and resize checks.

Testing used the installed Playwright browser runner because no connected Browser session was available. This is browser emulation, not physical-device certification. The repository's Linux-only preview helper was replaced for this QA session by running the built Node server; the existing development server was left running.
