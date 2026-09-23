# Gallery Images Folder

Place all images for the **Expo Gallery** section in this folder (`public/gallery/`).

### How to use:
1. Save your photos here (e.g. `expo-day1.jpg`, `robotics-demo.png`, `award-ceremony.jpg`).
2. Open `src/data/galleryData.js`.
3. Set the image path like this:
   ```javascript
   {
     id: 1,
     title: "Student Project Demos",
     category: "Exhibition",
     image: "/gallery/expo-day1.jpg", // Path to this file
     caption: "Undergraduate teams demonstrating smart IoT projects."
   }
   ```

### Recommended Image Specs:
- **Aspect Ratio:** 4:3 or 16:9 Landscape
- **Resolution:** 800x600 px or 1200x800 px
- **Formats:** `.jpg`, `.jpeg`, `.png`, `.webp`
