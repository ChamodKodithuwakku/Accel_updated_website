# ACCEL 7.0 — Accelerating Businesses

Official web platform for **ACCEL 7.0: Sustainability & Digital Transformation Expo 2026**, organized by the Department of Business Management, **SLIIT Kandy UNI**.

---

## 🌟 About the Event

- **Edition:** ACCEL 7.0 (7th Annual Edition)
- **Theme:** *Innovating for a Sustainable Tomorrow*
- **Dates:** 24th & 25th September 2026
- **Venue:** SLIIT Kandy UNI Premises, Pallekele, Sri Lanka
- **Audience:** School & University Students, Entrepreneurs, Startups, Industry Leaders, and the General Public

---

## 🚀 Key Features

- **Dynamic Hero & Video Billboard:** Auto-playing, mobile-optimized widescreen YouTube video billboard with touch swipe gestures and sound toggle.
- **4 Flagship Pavilions (Zones):**
  - `01` Industry Pavilion (Sustainable Manufacturing, ESG, Automation)
  - `02` Student Innovation Zone (AI & Tech Solutions, Research Prototypes)
  - `03` Startups & SMEs (Innovative Products, Business Models)
  - `04` Interactive Experience Zone (Circular Economy Games, Live Demos)
- **2-Day Expo Agenda:** Complete schedule breakdown for Day 1 and Day 2.
- **Distinguished Dignitaries & Speakers:**
  - **Keynote Speaker:** Prof. Janaka Bandara Ekanayake (Senior Professor & Director of University Research Council, University of Peradeniya)
  - **Guest of Honour:** Mr. Arjuna Bandara (Head - ICT and Production Control, Noritake)
- **Distinguished Panel of Judges:** Academic and industry evaluation panel with profiles and photos.
- **Visual Highlights Gallery:** 120+ high-resolution photo gallery with responsive grid, smooth pagination ("Load More"), and fullscreen Lightbox modal.
- **Venue & Contact:** Integrated interactive Google Maps location and event contact information.
- **Fully Responsive:** 100% mobile, tablet, and desktop optimized design.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Montserrat, Space Grotesk, Outfit, Plus Jakarta Sans

---

## 📋 Prerequisites

Before running the project, make sure you have **Node.js** installed on your system:
- [Download Node.js (LTS Version)](https://nodejs.org/) (Node 18+ recommended)
- Verify installation in terminal:
  ```bash
  node -v
  npm -v
  ```

---

## 💻 How to Run the Project

### Option 1: Running in IntelliJ IDEA / WebStorm

1. **Extract the ZIP file** to your preferred directory.
2. Open **IntelliJ IDEA** and click **Open** (or `File` ➔ `Open...`).
3. Select the extracted project folder and click **OK** (choose **Trust Project** if prompted).
4. Open the built-in Terminal in IntelliJ:
   - Press `Alt + F12` (or click the **Terminal** tab at the bottom).
5. Install project dependencies:
   ```bash
   npm install
   ```
6. Start the local development server:
   ```bash
   npm run dev
   ```
   *(Alternatively, open `package.json`, find `"dev": "vite"`, and click the green Play button ▶️ to run).*
7. Open the local URL displayed in the terminal (usually `http://localhost:5173/`) in your browser.

---

### Option 2: Running via Command Line / Terminal / VS Code

1. Open your terminal or Command Prompt and navigate to the project directory:
   ```bash
   cd path/to/accel-7-sliit
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173/` in your browser.

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with Hot Module Replacement (HMR). |
| `npm run build` | Builds the project for production into the `dist/` folder. |
| `npm run preview` | Locally previews the production build. |

---

## 📂 Project Structure

```text
accel-7-sliit/
├── public/                # Static assets, logos, and gallery photos
│   ├── gallery/           # 120+ real expo event photos
│   ├── speakers/          # Speaker and judge photos
│   ├── accel-7-logo.png   # Official ACCEL branding
│   └── sliit-kandy-logo.png
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, ScrollProgress
│   │   ├── modals/        # LightboxModal, VideoModal, PopupAdModal
│   │   ├── sections/      # Hero, About, Objectives, Zones, Schedule, Speakers, Gallery, Venue
│   │   └── ui/            # AccelLogo, ScrollReveal, FloatingAdPill
│   ├── data/              # eventData, galleryData, scheduleData, speakersData
│   ├── utils/             # youtube.js utility functions
│   ├── App.jsx            # Main app composition
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles & Tailwind imports
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

---

## 👨‍💻 Developer & Credits

- **Organized by:** SLIIT Kandy UNI — Department of Business Management, ACCEL 7.0 Organizing Committee
- **Website Created by:** [Theekshana Prageeth](https://www.linkedin.com/in/theekshana-prageeth-1a07233a2/)
