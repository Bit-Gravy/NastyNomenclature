# Documentation Summary

This document provides a quick overview of all documentation and reusable assets for the Nasty Nomenclature project.

## Documentation Files

### 1. **STYLE_GUIDE.md** (NEW)
Comprehensive design system documentation covering:
- Design system philosophy and brand identity
- Complete color palette with hex codes and usage
- Typography system (Cinzel for headings, Lato for body)
- External libraries and CDN dependencies
- CSS architecture and Tailwind configuration
- Animation system with 13+ custom animations
- Responsive design patterns and breakpoints
- WCAG 2.1 accessibility standards
- Code organization best practices

**When to use:** Design decisions, adding new pages, understanding visual hierarchy

---

### 2. **COMPONENTS.md** (NEW)
Detailed inventory of reusable components and utilities:

#### JavaScript Components (all in `js/common.js`)
- **Modal System:** Source code confirmation, disclaimer
- **Layout Injection:** Header, footer, navigation
- **Navigation System:** Active state detection, page inference
- **Page Transitions:** Smooth navigation with animations
- **Scroll Animations:** Intersection Observer-based reveals
- **Storage Utilities:** localStorage with cookie fallback

#### HTML Components
- Header with sticky positioning and navigation
- Footer with copyright and links
- Modal dialogs (disclaimer, source code)
- Navigation with active page indicators

#### External Libraries
- Tailwind CSS (CDN)
- Google Fonts (Cinzel, Lato)
- Material Symbols (icons)

**When to use:** Component implementation, extending functionality, understanding architecture

---

### 3. **README.md** (UPDATED)
High-level project overview including:
- Feature overview
- Tech stack summary
- Project structure
- Installation/usage instructions
- Developer guide
- Design & styling overview
- License and content warning
- Links to detailed documentation

**When to use:** First introduction to the project, understanding scope

---

### 4. **accessibility-summary.md** (EXISTING)
WCAG 2.1 compliance audit and accessibility features:
- Semantic HTML structure
- ARIA attributes and roles
- Keyboard navigation support
- Color contrast validation
- Screen reader compatibility
- Focus management

**When to use:** Accessibility requirements, testing compliance

---

### 5. **DEPLOYMENT.md** (EXISTING)
Deployment and hosting information:
- GitHub Pages hosting
- Build process (if any)
- Environment variables
- Performance optimization

**When to use:** Deployment decisions, hosting setup

---

## Quick Reference

### For Adding a New Page
1. Copy an existing page (e.g., `styles.html`)
2. Update `<title>`, metadata, `data-page` attribute
3. Keep layout placeholders: `<div id="site-header"></div>` and `<div id="site-footer"></div>`
4. Include `<script src="js/common.js"></script>`
5. Update `NAV_ITEMS` in `js/common.js` if adding to navigation

**Reference:** See **COMPONENTS.md** for detailed instructions

---

### For Styling Changes
1. Edit Tailwind classes in HTML (no separate CSS file needed)
2. Update color palette in Tailwind config if needed
3. Reference color hex codes from **STYLE_GUIDE.md**
4. Use animations from the animation system

**Reference:** See **STYLE_GUIDE.md** for color codes, animations, and utility patterns

---

### For Component Extensions
1. Add function to `js/common.js`
2. Update `renderSharedLayout()` to inject the component
3. Document the component in **COMPONENTS.md**
4. Add usage examples

**Reference:** See **COMPONENTS.md** for existing component patterns

---

### For Accessibility
1. Use semantic HTML (`<header>`, `<main>`, `<footer>`, etc.)
2. Add `role` attributes for complex elements
3. Include `aria-label` on icon buttons
4. Use `aria-current="page"` on active nav links
5. Test with keyboard navigation

**Reference:** See **accessibility-summary.md** for detailed guidelines

---

## Reusable Components Inventory

### JavaScript Functions (`js/common.js`)

#### Modal Management
- `openSourceModal()` - Open GitHub confirmation modal
- `closeSourceModal()` - Close modal
- `confirmSourceRedirect()` - Navigate to GitHub
- `acceptDisclaimer()` - Accept content warning
- `rejectDisclaimer()` - Reject and redirect

#### Layout Generation
- `getHeaderHTML(currentPage)` - Generate header with navigation
- `getFooterHTML()` - Generate footer
- `getSourceModalHTML()` - Generate source modal
- `buildNavLinks(currentPage)` - Generate navigation with active state
- `inferCurrentPage()` - Detect current page

#### Page Management
- `renderSharedLayout()` - Inject all shared components
- `setupPageTransitions()` - Enable smooth page transitions
- `animateOnScroll()` - Trigger animations on scroll

#### Storage
- `setStorage(key, value)` - Store preference (localStorage or cookie)
- `getStorage(key)` - Retrieve preference
- `setCookie(name, value, days)` - Set cookie
- `getCookie(name)` - Get cookie

---

### HTML Components

| Component | ID/Class | Features |
| --- | --- | --- |
| Header | `#site-header` (injected) | Sticky, navigation, GitHub button |
| Footer | `#site-footer` (injected) | Copyright, privacy link, staggered |
| Source Modal | `#sourceModal` (injected) | GitHub confirmation, ESC key support |
| Disclaimer Modal | `#disclaimerModal` (in HTML) | Content warning, persistent acceptance |
| Navigation | Generated by `buildNavLinks()` | Active state, hover effects |

---

### External Libraries

| Library | Type | Purpose |
| --- | --- | --- |
| Tailwind CSS | CSS Framework | Utility-first styling |
| Google Fonts (Cinzel, Lato) | Typography | Custom fonts |
| Material Symbols | Icon Set | UI icons |

---

## Animations

### Available Animations

| Animation | Duration | Use |
| --- | --- | --- |
| `fadeIn` | 0.5s | Element reveal |
| `fadeOut` | 0.4s | Page transition exit |
| `slideUp` | 0.6s | Scroll-triggered reveal |
| `slideDown` | 0.6s | Header entrance |
| `scaleIn` | 0.5s | Modal appearance |
| `float` | 4s | Hovering icons |
| `glow-pulse` | 2s | Text emphasis |
| `shimmer` | 3s | Subtle pulse |
| `pulse-slow` | 3s | Loading state |

See **STYLE_GUIDE.md** for detailed animation documentation.

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
| --- | --- | --- |
| Dark BG | `#120a18` | Page background |
| Purple | `#1f1229` | Secondary backgrounds |
| Fuchsia | `#d946ef` | Primary accent |
| Fuchsia Dark | `#a21caf` | Hover/shadow |
| Body Text | `#e0d5e6` | Main content |

See **STYLE_GUIDE.md** for complete color palette and semantics.

---

## Typography

| Element | Font | Weight | Size Class |
| --- | --- | --- | --- |
| Headings | Cinzel | 700 | `font-brand` |
| Body Text | Lato | 400/700 | `font-body` |

See **STYLE_GUIDE.md** for detailed typography guidelines.

---

## File Structure Reference

```
naughtynomenclature/
├── index.html              # Landing page
├── styles.html             # Naming styles guide
├── forbidden.html          # Anti-patterns
├── exchanges.html          # API standards
├── toy.html                # Interactive converter
├── privacy.html            # Privacy policy
├── js/
│   └── common.js           # All shared components
├── assets/                 # Images and resources
│
├── README.md               # Project overview
├── STYLE_GUIDE.md          # Design system (NEW)
├── COMPONENTS.md           # Component inventory (NEW)
├── DEPLOYMENT.md           # Deployment info
├── accessibility-summary.md # WCAG compliance
└── robots.txt              # SEO config
```

---

## Browser Support

* Chrome/Edge 90+
* Firefox 88+
* Safari 14+
* Modern mobile browsers

All components tested for CSS Grid/Flexbox, CSS Variables, IntersectionObserver, and modern JavaScript.

---

## Getting Help

1. **Design questions:** See STYLE_GUIDE.md
2. **Component usage:** See COMPONENTS.md
3. **Adding pages:** See README.md Developer Guide
4. **Accessibility:** See accessibility-summary.md
5. **Deployment:** See DEPLOYMENT.md

---

**Last Updated:** January 2026  
**Status:** Complete Documentation Suite
