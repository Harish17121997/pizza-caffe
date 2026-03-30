# ☕ Cafe Eatitude — Vue.js Website

A professional, mobile-responsive Vue 3 website for Cafe Eatitude, Pune.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed

### Setup & Run

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
cafe-eatitude/
├── index.html                    ← HTML entry point
├── vite.config.js                ← Vite config
├── package.json
└── src/
    ├── main.js                   ← Vue app mount
    ├── App.vue                   ← Root component (all sections assembled here)
    ├── style.css                 ← Global CSS variables + base styles
    ├── data/
    │   └── menu.js               ← All 80+ menu items (edit prices/items here)
    ├── composables/
    │   └── useIntersection.js    ← Scroll fade-up animation hook
    └── components/
        ├── TheNav.vue            ← Fixed navigation bar
        ├── MobileMenu.vue        ← Mobile slide-in menu
        ├── HeroSection.vue       ← Hero / landing section
        ├── AboutSection.vue      ← About cafe + features
        ├── MenuSection.vue       ← Full menu with category tabs
        ├── GallerySection.vue    ← Photo gallery grid
        ├── DeliveryBanner.vue    ← Swiggy / Zomato / Pune Eats strip
        ├── ContactSection.vue    ← Contact info + UPI QR + Order Form
        ├── OrderForm.vue         ← WhatsApp order form
        ├── MapSection.vue        ← Google Maps embed
        └── TheFooter.vue         ← Footer with links + franchise info
```

---

## 🎨 Customisation Guide

### 1. Add Your Own Photos

Each component has a placeholder comment showing exactly where to add images.

**About Section** (`src/components/AboutSection.vue`):
```html
<!-- Replace the placeholder div with: -->
<img src="/images/cafe-interior.jpg" alt="Cafe Eatitude" />
```

**Gallery Section** (`src/components/GallerySection.vue`):
```html
<!-- Replace each gallery-placeholder div with: -->
<img src="/images/coffee.jpg" alt="Cold Coffee" />
```

Put all your images in the `/public/images/` folder.

---

### 2. Update the UPI QR Code

In `src/components/ContactSection.vue`, replace the SVG placeholder:
```html
<!-- Replace the qr-placeholder div with: -->
<img src="/images/upi-qr.png" alt="UPI QR Code" style="width:100%;height:100%;object-fit:contain" />
```

Generate your UPI QR at: https://www.upigateway.com/ or from your UPI app.

---

### 3. Fix the Google Maps Pin

In `src/components/MapSection.vue`, replace the iframe src:
1. Go to **Google Maps** → search your cafe address
2. Click **Share** → **Embed a map** → **Copy HTML**
3. Paste the `src="..."` URL into the iframe

---

### 4. Update Menu Items / Prices

Edit `src/data/menu.js`:
```js
{ cat: 'Burgers', type: 'veg', name: 'Veg Burger', price: 100, desc: 'Burger Tikki, Onions, Tomato' },
```

**type** can be: `'veg'` | `'egg'` | `'nonveg'`

---

### 5. Change WhatsApp Number

In `src/components/OrderForm.vue` (line ~60):
```js
waLink.value = `https://wa.me/919881478959?text=...`
```
Replace `919881478959` with your number (country code + number, no spaces).

Also update in `src/components/TheFooter.vue` and `src/components/ContactSection.vue`.

---

### 6. Change Brand Colours

In `src/style.css`:
```css
:root {
  --gold: #D4A843;        /* Primary accent colour */
  --gold-light: #F0C96B;  /* Lighter gold for gradients */
  --dark: #0E0D0B;        /* Main background */
  --dark2: #1A1916;       /* Section backgrounds */
  --cream: #F5EDD8;       /* Main text colour */
}
```

---

## 📱 Features

- ✅ Vue 3 Composition API with `<script setup>`
- ✅ Mobile responsive (hamburger menu, fluid grid)
- ✅ All 80+ menu items from the Cafe Eatitude PDF
- ✅ Category filter tabs (13 categories)
- ✅ WhatsApp order form — pre-fills complete order message
- ✅ Google Maps embed (replace src with your pin)
- ✅ UPI QR placeholder (replace with your QR image)
- ✅ Scroll-triggered fade-up animations
- ✅ Back-to-top button
- ✅ Sticky nav with scroll detection
- ✅ Swiggy / Zomato / Pune Eats delivery section
- ✅ Franchise info section
- ✅ Easy photo replacement placeholders throughout

---

## 🌐 Deployment

After `npm run build`, the `dist/` folder is ready to deploy to:
- **Netlify** — drag & drop the `dist/` folder
- **Vercel** — connect your GitHub repo
- **GitHub Pages** — push the `dist/` folder

---

Built with Vue 3 + Vite ⚡
