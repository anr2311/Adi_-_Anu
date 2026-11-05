# Aditya & Anushree — Wedding Invitation

An elegant, traditional South Indian wedding invitation, recreated from the supplied visual reference. This is a static, responsive website without a framework or build step.

## Preview
Open `index.html` in VS Code Live Server, or use any static web server.

## Deploy on Netlify
Set the publish directory to the repository root (where `index.html` lives) and leave the build command blank. The website works with direct GitHub-to-Netlify deployment.

## Layer structure
- `index.html` — text, dates, photos and section order.
- `style.css` — responsive placement, typographic styling and image-edge blending.
- `script.js` — countdown to 14 December 2026 at 11:00 AM IST.
- `assets/left_crop.png`, `assets/right_crop.png` — original pillar strips supplied by the user, intact.
- `assets/floral-canopy.webp` — isolated photo-derived floral top ornament from the reference.
- `assets/reference-rings.webp` — isolated rings-and-leaves vignette from the reference.
- `assets/temple-silhouette.webp` — faint temple illustration cropped from the reference.
- `assets/golden-flourish.webp` — decorative gold sprig from the reference.
- `assets/couple-portrait.jpg`, `assets/couple-home.jpg`, `assets/rings.jpg` — original unmodified user photos already present in the repo.
- `assets/couple-stairs.jpg` — original unmodified stairs photograph supplied by the user.
- `assets/venue-qr.png` — newly generated QR encoding the existing venue Maps link, tested with a QR decoder.

The source images are separate editable layers, **not CSS drawings of pillars or floral elements**. CSS is used only for positioning, responsive layouts, typography and feathering at edges. The reference-derived crops are intentionally optimized for small file size.

## Wedding details
Reception — 13 December 2026, 7:30 PM onwards.
Muhurtha — 14 December 2026, 11:00 AM IST.
Venue — Shubha Mangala Kalyana Mantapa, Veera Rani Keladi Chennamma Rd, Vinoba Nagara, Shivamogga.

The directions short link is inherited from the previous invitation. Its destination should be confirmed on a device before publishing widely.
