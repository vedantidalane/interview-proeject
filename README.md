# Nexora Technologies - IT Company Landing Page

A professional, modern, responsive landing page for a fictional IT company: **Nexora Technologies** (*"Turning Ideas Into Digital Solutions"*). 

This project was built from scratch as part of a Web Designer Practical Assignment, demonstrating clean semantic HTML5, sophisticated CSS3 theme configurations, fluid grid responsiveness, interactive vector SVGs, and client-side form validations.

## 🚀 How to Run Locally

You can launch and test this project instantly without compiling or installing external assets:

1. **Direct Browser Execution**:
   - Navigate to the `nexora-technologies/` directory.
   - Double-click `index.html` or drag-and-drop it into any modern web browser (Chrome, Firefox, Safari, Edge).

2. **Using a Local Server (Recommended for perfect scrolling behavior)**:
   - Python: Run `python -m http.server 8000` in the directory, then navigate to `http://localhost:8000`.
   - Node.js: Install `http-server` globally (`npm install -g http-server`) and run `http-server` on the folder.
   - VS Code: Right-click `index.html` and click **"Open with Live Server"**.

---

## 🛠️ File Structure

The project has been organized according to modern separation-of-concern practices:

```text
nexora-technologies/
│
├── index.html       # Clean semantic HTML5 elements & SVG designs
├── css/
│   └── style.css    # Responsive variables, themes, animations & layout tweaks
├── js/
│   └── script.js    # Theme memory, scroll reveal, navbar highlight & form checker
└── README.md        # Project documentation & user manuals
```

---

## 🌟 Key Features

### 1. Dual Color Themes (Light / Dark Modes)
- Fully supports a custom developer-centric Dark theme and a clean Light theme.
- Utilizes CSS custom properties (variables) to smoothly transition backgrounds, typography, cards, and input fields.
- Keyed to a toggle button on the navigation bar; the selected theme persists using the browser's `localStorage` API.

### 2. High-Tech Responsive Vector UI Mockups
- Incorporates custom inline SVGs to avoid broken images or heavy static files.
- The hero mockup depicts an interactive SaaS deployment dashboard complete with animated line graphs, loading bars, checkmarks, terminal output console logs, and floating glassmorphism KPI badges.
- Visual case studies under **Portfolio** showcase custom, responsive SVG layouts tailored for Fintech, E-Commerce, and Healthcare mobile templates.

### 3. Smart Sticky Navbar & Scroll Spy
- Transitioning sticky design: shrinks padding and drops a glassmorphic shadow as the page scrolls down.
- Active classes update dynamically on the links when scrolling through sections (*Home, About, Services, Technologies, Portfolio, Contact*).
- Cross-device friendly: hamburger menu collapses automatically once any nav item is selected on mobile screens.

### 4. Interactive Form Validator & Success Feedbacks
- Full client-side check on the Contact form (Email formatting check, Name and Message length checkers).
- Generates precise, red invalid-input messages next to fields using customized Bootstrap validation criteria.
- Demonstrates a successful submission by animating a sliding toast element from the bottom left on submission, resetting fields afterwards.

### 5. Scroll Reveals & Back-To-Top
- Implements a performant `IntersectionObserver` system that fades sections into view as the user scrolls.
- Quick navigation "Back-To-Top" floating button emerges after scrolling past 400px, enabling smooth scrolling back to the top of the interface.

---

## 💻 Tech Stack

- **Markup**: HTML5 (Semantic and Accessibility-compliant)
- **Formatting**: CSS3 (Flexbox/Grid variables with standard-compliant layouts)
- **Styling Framework**: Bootstrap 5.3.2 (Containers, columns, and navigation components)
- **Icons**: Bootstrap Icons (Loaded via CDN)
- **Logic**: Vanilla ES6 JavaScript (zero heavy framework dependencies)
- **Fonts**: Google Fonts (*Outfit* for title cards and *Plus Jakarta Sans* for readable copy)
