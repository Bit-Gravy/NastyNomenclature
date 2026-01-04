# Nasty Nomenclature

**Nasty Nomenclature** is a satirical, adult-oriented educational website that explores coding naming conventions (camelCase, snake_case, etc.) through humor and suggestive imagery.

## 🚀 Features

*   **Multi-Page Experience:** Explore different sections dedicated to various naming styles.
*   **The Styles:** A deep dive into CamelCase, SnakeCase, KebabCase, and ScreamingSnakeCase with visual aids.
*   **The Forbidden Zone:** Learn what NOT to do (spaces, periods, flatcase).
*   **The Exchange Protocol:** API naming standards for JSON, URL parameters, and Headers.
*   **The Transmuter Toy:** An interactive tool to convert text between different naming conventions.
*   **Responsive Design:** Built with Tailwind CSS for a seamless experience on desktop and mobile.
*   **Dark Mode Aesthetic:** A cyberpunk/neon theme suitable for late-night coding sessions.

## 🛠️ Tech Stack

*   **HTML5** - Semantic markup
*   **Tailwind CSS** (via CDN) - Utility-first CSS framework
*   **JavaScript** (Vanilla) - No frameworks; event handling and layout injection
*   **Google Fonts** (Cinzel, Lato) - Custom typography
*   **Material Symbols** (Google) - Icon library

See **[COMPONENTS.md](COMPONENTS.md)** for a complete list of external libraries and dependencies.

## 📂 Project Structure

*   `index.html`: The landing page / intro.
*   `styles.html`: Detailed breakdown of naming styles.
*   `forbidden.html`: Anti-patterns and bad practices.
*   `exchanges.html`: API and data exchange standards.
*   `toy.html`: Interactive text converter tool.
*   `privacy.html`: Privacy policy page.
*   `js/common.js`: Shared logic for modals, layout injection, and utilities.
*   `assets/`: Images and static resources.

## 📚 Documentation

Comprehensive documentation is available for developers:

*   **[STYLE_GUIDE.md](STYLE_GUIDE.md)** - Complete design system, color palette, typography, animation system, and CSS architecture
*   **[COMPONENTS.md](COMPONENTS.md)** - Detailed inventory of reusable components, utilities, and external libraries
*   **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment instructions and hosting information
*   **[accessibility-summary.md](accessibility-summary.md)** - WCAG 2.1 compliance audit and accessibility standards

## 📦 Installation / Usage

1.  Clone the repository.
2.  Open `index.html` in your web browser.
3.  Enjoy!

## 👨‍💻 Developer Guide

### Quick Start

* **No build tools required** - Open any HTML file directly in a browser
* **No dependencies to install** - All libraries loaded via CDN
* **Single JavaScript file** - `js/common.js` contains all reusable components

### Architecture Highlights

* **Shared Layout System** - Header, footer, and modals injected dynamically
* **Responsive Design** - Mobile-first approach with Tailwind CSS
* **Smooth Animations** - Tasteful fade, slide, and scale animations throughout
* **Accessibility** - WCAG 2.1 AA compliant with proper ARIA attributes

### Key Files

| File | Purpose |
| --- | --- |
| `js/common.js` | Layout components, modals, navigation, animations |
| `STYLE_GUIDE.md` | Design system, colors, typography, animations |
| `COMPONENTS.md` | Reusable components, utilities, and library documentation |

### Adding a New Page

1. Copy an existing page (e.g., `styles.html`)
2. Update `<title>`, metadata, and `data-page="unique-key"` on `<body>`
3. Keep the `<div id="site-header"></div>` and `<div id="site-footer"></div>` placeholders
4. Add your content to `<main>`
5. Include `<script src="js/common.js"></script>` before closing `</body>`
6. Update `NAV_ITEMS` in `js/common.js` if adding to main navigation

### Local Development

```bash
# Serve files locally
python -m http.server 8000

# Or use any local server
# Then visit http://localhost:8000
```

## 🎨 Design & Styling

The site uses a **cyberpunk/neon aesthetic** with:

* **Dark theme** (`#120a18` background)
* **Neon accents** (Fuchsia `#d946ef` with glow effects)
* **Bold typography** (Cinzel for headings, Lato for body)
* **Smooth animations** (Fade, slide, scale transitions)
* **Responsive design** (Mobile-first, works on all devices)

See **[STYLE_GUIDE.md](STYLE_GUIDE.md)** for complete design documentation.

## �� License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## ⚠️ Content Warning

This site contains adult humor and suggestive imagery. It is intended for mature audiences only.
