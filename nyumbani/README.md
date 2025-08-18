# Nyumbani Kwehu Developers – Website

A responsive static website for a coastal real estate and development firm. Built with HTML, CSS, and vanilla JavaScript.

## Features
- Responsive multi‑page site (mobile to 24" desktops)
- Shared header/footer, phone number, CTAs
- Mobile hamburger with booking CTA
- Listings with filters (location, bedrooms, price)
- For Sale, For Rent, Developments
- Virtual tour modal (YouTube/360 iframes)
- Booking modal with confirmation + WhatsApp follow‑up
- About, Contact (form + map), Blog, News, Research
- Prices in Kenyan Shillings; areas: Nyali, Shanzu, Kilifi, Mtwapa, Vipingo

## Quick start
1. Add your logo as `assets/img/logo.png` and property images into `assets/img/`.
2. Open `index.html` in a browser, or serve locally:
   - Python: `python3 -m http.server 8080`
   - Node: `npx serve .`
3. Navigate to your server URL (e.g. `http://localhost:8080/nyumbani/`).

## Structure
- `index.html` – Home
- `sale.html`, `rent.html`, `developments.html`
- `about.html`, `contact.html`
- `blog.html`, `news.html`, `research.html`
- `assets/css/styles.css` – theme & layout
- `assets/js/main.js` – navigation + modals (booking/tour)
- `assets/js/listings.js` – property data + filters

## Customizing listings
Edit `assets/js/listings.js`.
- Fields: `id`, `title`, `location` (Nyali, Shanzu, Kilifi, Mtwapa, Vipingo), `price` (KSh), `bedrooms`, `type` ('sale'|'rent'), `img`, optional `tour: { type, src }`.
- For rentals, the UI adds ` / mo` to the price automatically.

## Brand & contacts
- Colors set in `assets/css/styles.css` under `:root` (black + warm gold accent).
- Update phone/email across pages and in `assets/js/main.js` WhatsApp link.

## Deployment
Static site; host on GitHub Pages, Netlify, Vercel, cPanel, or any web server (no build step).

## License & ownership
© Nyumbani Kwehu Developers. All rights reserved. Code can be reused within your organization; images/logo/copy remain company property.