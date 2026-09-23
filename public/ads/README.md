# Advertisement Images & Banners Folder

Place all banner images, promo graphics, and poster thumbnails for **Hero Billboard Ads** and **Popup Ads** in this folder (`public/ads/`).

### How to use:
1. Save your ad graphic here (e.g. `hero-cloud-offer.jpg`, `popup-teaser.png`, `sponsor-promo.jpg`).
2. Set the image path in:
   - Hero Billboard: `src/components/sections/HeroVideoAdPane.jsx` (`bgImage: "/ads/hero-cloud-offer.jpg"`)
   - Popup Modal: `src/components/modals/PopupAdModal.jsx` (`image: "/ads/popup-teaser.png"`)

### Recommended Image Specs:
- **Hero Billboard Banner:** 16:9 Landscape (1400x788 px or 1920x1080 px)
- **Popup Ad Modal:** 16:9 or 4:3 (800x450 px or 800x600 px)
- **Formats:** `.jpg`, `.jpeg`, `.png`, `.webp`
