# Style Guide - Nasty Nomenclature

This document outlines the design system, libraries, reusable components, and styling conventions used throughout the Nasty Nomenclature website.

## Table of Contents

1. [Design System](#design-system)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Libraries & Dependencies](#libraries--dependencies)
5. [Reusable Components](#reusable-components)
6. [CSS Architecture](#css-architecture)
7. [Animation System](#animation-system)
8. [Responsive Design](#responsive-design)
9. [Accessibility Standards](#accessibility-standards)

---

## Design System

### Brand Identity

**Nasty Nomenclature** employs a cyberpunk/neon aesthetic with a dark, mature theme. The design emphasizes:

- **Bold Typography:** Large, impactful headlines using serif fonts
- **Neon Accents:** Vibrant fuchsia/purple colors with glowing effects
- **Dark Backgrounds:** Deep purples and blacks for eye comfort and sophistication
- **Suggestive Imagery:** Professional yet risqué male figures in strategic photography
- **Smooth Interactions:** Tasteful animations and transitions throughout

---

## Color Palette

### Primary Colors

| Color Name | Hex Code | Usage | CSS Class |
|---|---|---|---|
| **Dark Background** | `#120a18` | Page background, primary dark theme | `bg-[#120a18]` |
| **Purple** | `#1f1229` | Secondary backgrounds, subtle contrast | `bg-[#1f1229]` |
| **Fuchsia (Accent)** | `#d946ef` | Primary action, highlights, neon effects | `text-fuchsia-500`, `border-fuchsia-500` |
| **Fuchsia Dark** | `#a21caf` | Hover states, shadow effects | `hover:bg-fuchsia-700` |
| **Gray (Text)** | `#e0d5e6` | Body text, main content | Default body color |
| **Gray (Muted)** | `#9ca3af` | Secondary text, subtle information | `text-gray-400` |

### Semantic Colors

- **Warning/Content Alert:** Red (`#dc2626`) - Used in forbidden zone
- **Success/Positive:** Green - Reserved for future use
- **Transparent Black:** `bg-black/80`, `bg-black/50` - Overlays and backgrounds

---

## Typography

### Font Stack

#### Display / Headings

- **Font Family:** Cinzel (serif)
- **Weight:** 700 (bold)
- **CSS Variable:** `font-brand`
- **Usage:** Page titles, section headings, important labels
- **Source:** [Google Fonts](https://fonts.google.com/specimen/Cinzel)

```html
<h1 class="text-5xl md:text-7xl font-bold font-brand">Heading</h1>
```

#### Body Text

- **Font Family:** Lato (sans-serif)
- **Weights:** 400 (regular), 700 (bold)
- **CSS Variable:** `font-body`
- **Usage:** All paragraph text, navigation, descriptions
- **Source:** [Google Fonts](https://fonts.google.com/specimen/Lato)

```html
<p class="text-base font-body">Body text</p>
```

### Text Sizes

| Size | Tailwind Class | Usage |
|---|---|---|
| **Display** | `text-7xl md:text-8xl` | Hero titles |
| **H1** | `text-5xl md:text-7xl` | Page titles |
| **H2** | `text-3xl md:text-4xl` | Section titles |
| **H3** | `text-2xl` | Subsection titles |
| **Body** | `text-base` | Paragraph text (16px) |
| **Small** | `text-sm` | Secondary text (14px) |
| **Tiny** | `text-xs` | Labels, metadata (12px) |

---

## Libraries & Dependencies

### External Libraries (CDN)

#### Tailwind CSS

- **Version:** Latest (via CDN)
- **URL:** `https://cdn.tailwindcss.com`
- **Purpose:** Utility-first CSS framework
- **Config Location:** Inline in each HTML file's `<script>` tag within Tailwind config

**Configuration Features:**
- Custom color palette (brand colors)
- Custom font families (Cinzel, Lato)
- Extended animation library
- Custom keyframes for site-specific animations

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: { brand: { dark, purple, accent, accentDark } },
        fontFamily: { brand: ['Cinzel'], body: ['Lato'] },
        animation: { /* custom animations */ },
        keyframes: { /* animation definitions */ }
      }
    }
  }
</script>
```

#### Google Fonts

- **Fonts:** Cinzel (700), Lato (400, 700)
- **URL:** `https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Lato:wght@400;700&display=swap`
- **Included in:** All HTML pages
- **Loading:** Optimized with `display=swap` for better performance

#### Material Symbols (Google)

- **Version:** Latest
- **URL:** `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0`
- **Purpose:** Iconography throughout the site
- **Usage Classes:** `material-symbols-outlined`
- **Examples:**
  - `<span class="material-symbols-outlined">terminal</span>` - Logo icon
  - `<span class="material-symbols-outlined">warning</span>` - Alert icon
  - `<span class="material-symbols-outlined">keyboard_double_arrow_down</span>` - Navigation arrows

---

## Reusable Components

### Shared Layout System (`js/common.js`)

All pages use a unified header/footer injected dynamically via JavaScript.

#### Header Component

**Function:** `getHeaderHTML(currentPage)`

**Features:**
- Sticky positioning with backdrop blur
- Navigation with active state indicators
- Logo links to home page
- GitHub source code button with modal confirmation

**Rendered Into:** `<div id="site-header"></div>`

**HTML Structure:**
```html
<header class="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-purple-900">
  <!-- Navigation with active page detection -->
  <!-- GitHub button with source modal trigger -->
</header>
```

#### Footer Component

**Function:** `getFooterHTML()`

**Features:**
- Centered copyright information
- Privacy policy link
- Humorous disclaimer

**Rendered Into:** `<div id="site-footer"></div>`

**HTML Structure:**
```html
<footer class="bg-black py-8 text-center border-t border-purple-900/50">
  <!-- Copyright & links -->
</footer>
```

#### Source Modal Component

**Function:** `getSourceModalHTML()`

**Features:**
- Confirmation modal before redirecting to GitHub
- Keyboard support (ESC to close)
- Animated scale-in entry
- Backdrop blur effect

**Markup:**
```html
<div id="sourceModal" class="hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[9500]">
  <!-- Confirmation dialog -->
</div>
```

### Modal System

#### Disclaimer Modal

**Location:** In each HTML file's body
**ID:** `disclaimerModal`
**Features:**
- Shows on first page load
- User preference stored in localStorage
- Content warning about adult content
- Accept/Reject buttons

**Implementation:**
```javascript
// In js/common.js
function acceptDisclaimer() { /* Store acceptance */ }
function rejectDisclaimer() { /* Redirect away */ }
```

#### Source Code Modal

**Location:** Injected by `renderSharedLayout()`
**ID:** `sourceModal`
**Features:**
- Shows when GitHub button is clicked
- Keyboard navigation support
- Smooth animations

**API:**
```javascript
openSourceModal()       // Open the modal
closeSourceModal()      // Close the modal
confirmSourceRedirect() // Proceed to GitHub
```

### Navigation System

**Data Structure:**
```javascript
const NAV_ITEMS = [
  { key: 'intro', href: 'index.html', label: 'The Intro' },
  { key: 'styles', href: 'styles.html', label: 'The Styles' },
  { key: 'forbidden', href: 'forbidden.html', label: 'The Forbidden' },
  { key: 'exchanges', href: 'exchanges.html', label: 'Exchanges' },
  { key: 'toy', href: 'toy.html', label: 'The Toy' }
];
```

**Active State Detection:**
- Uses `data-page` attribute on `<body>` tag
- Automatically adds `aria-current="page"` to active link
- Applies `text-fuchsia-400` to current page indicator

---

## CSS Architecture

### Tailwind CSS Utilities

The site uses Tailwind CSS for styling. All styling is accomplished through utility classes with no external CSS files required.

### Custom Styles (Inline)

Each HTML file includes a `<style>` block for:
- Custom scrollbar styling
- Body backgrounds and text colors
- Neon text shadow effects
- Smooth scroll behavior
- Hover effects on scrollbar

**Example:**
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #1f1229; }
::-webkit-scrollbar-thumb { background: #d946ef; }
::-webkit-scrollbar-thumb:hover { background: #a21caf; }

html { scroll-behavior: smooth; }

main { animation: fadeIn 0.6s ease-out forwards; }
```

### Utility Patterns

#### Gradients

- **Primary Gradient:** `bg-gradient-to-br from-[#2d1b4e] to-[#1a0f2e]` - Dark purple gradient
- **Text Gradient:** Not used; rely on neon shadows instead
- **Overlay Gradient:** `bg-gradient-to-b from-[#120a18]/80 via-[#120a18]/50 to-[#120a18]`

#### Shadow & Glow Effects

```html
<!-- Button glow on hover -->
<button class="hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]">GitHub</button>

<!-- Text neon glow -->
<span class="neon-text">Nomenclature</span>
```

#### Spacing

- **Padding:** `p-4`, `p-6`, `p-8` for consistency
- **Margins:** `mb-6`, `mt-4` for vertical rhythm
- **Gaps:** `gap-4`, `gap-6` for component spacing

#### Borders

- **Default Border:** `border-purple-900` on headers/footers
- **Accent Border:** `border-fuchsia-500` on interactive elements
- **Opacity Borders:** `border-purple-900/50` for subtle dividers

---

## Animation System

### Core Animations

All animations are defined in the Tailwind config with custom keyframes.

#### Fade Animations

| Name | Duration | Timing | Use Case |
|---|---|---|---|
| `fadeIn` | 0.5s | ease-out | Content reveal on load |
| `fadeOut` | 0.4s | ease-out | Page transition exit |
| `fade-in-delay-1/2/3/4` | 0.6s with delay | ease-out | Staggered reveals |

#### Motion Animations

| Name | Duration | Timing | Use Case |
|---|---|---|---|
| `slideUp` | 0.6s | ease-out | Scroll-triggered content |
| `slideDown` | 0.6s | ease-out | Header entrance |
| `scaleIn` | 0.5s | ease-out | Modal/dialog appearance |
| `float` | 4s | ease-in-out | Hovering icons |

#### Effect Animations

| Name | Duration | Timing | Use Case |
|---|---|---|---|
| `glow-pulse` | 2s | ease-in-out | Neon text emphasis |
| `shimmer` | 3s | ease-in-out | Subtle opacity pulse |
| `pulse-slow` | 3s | ease-in-out | Loading states |

### Usage

```html
<!-- Apply animation directly -->
<div class="animate-fadeIn">Content</div>
<button class="animate-scale-in">Click me</button>

<!-- With delay variants -->
<h2 class="animate-fade-in-delay-1">Staggered reveal</h2>
```

### Transitions

- **Color transitions:** `transition-colors duration-300`
- **All transitions:** `transition duration-300`
- **Shadow transitions:** `transition-all duration-300`

---

## Responsive Design

### Breakpoints (Tailwind Default)

| Breakpoint | Width | Prefix |
|---|---|---|
| **Mobile** | < 640px | None |
| **Tablet** | 640px+ | `sm:` |
| **Desktop** | 768px+ | `md:` |
| **Large** | 1024px+ | `lg:` |
| **XL** | 1280px+ | `xl:` |

### Mobile-First Approach

All styles default to mobile; use `md:`, `lg:` prefixes for larger screens.

**Example:**
```html
<h1 class="text-5xl md:text-7xl">Hero Title</h1>
<div class="hidden md:flex gap-6">Desktop nav</div>
```

### Media Queries (Utility)

- **Dark mode:** Not explicitly needed (all styles designed for dark theme)
- **Print:** Not customized
- **Accessibility:** High contrast colors maintained throughout

---

## Accessibility Standards

### WCAG 2.1 Compliance

The site follows WCAG 2.1 AA standards with:

#### Semantic HTML

- Proper heading hierarchy (`h1` → `h6`)
- `<main>` for primary content
- `<section>` for content areas
- `<footer>`, `<header>`, `<nav>` for structure
- `<button>` for interactive elements (not `<a>` with onclick)

#### ARIA Attributes

```html
<!-- Skip navigation -->
<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main</a>

<!-- Modal accessibility -->
<div role="dialog" aria-modal="true" aria-labelledby="modalTitle">

<!-- Navigation state -->
<a aria-current="page">Current Page</a>

<!-- Icon labels -->
<span class="sr-only">View source</span>
```

#### Focus Management

- Focus traps in modals
- Visible focus indicators
- Keyboard navigation support
- ESC key closes modals

#### Color Contrast

- Text on dark backgrounds: High contrast maintained
- Accent colors: Sufficient contrast ratios (WCAG AA+)
- Color not sole means of conveying information

#### Screen Reader Support

- `role="banner"`, `role="contentinfo"` on header/footer
- `role="navigation"` on nav elements
- `role="main"` on main content
- Descriptive `aria-label` on icon buttons
- `aria-hidden="true"` on decorative elements

### Testing

See [accessibility-summary.md](accessibility-summary.md) for detailed accessibility audit results.

---

## Code Organization

### File Structure

```
naughtynomenclature/
├── index.html              # Landing page
├── styles.html             # Naming styles guide
├── forbidden.html          # Anti-patterns
├── exchanges.html          # API standards
├── toy.html                # Interactive converter
├── privacy.html            # Privacy policy
├── js/
│   └── common.js           # Shared components & logic
├── assets/                 # Images & media
├── STYLE_GUIDE.md          # This file
├── DEPLOYMENT.md           # Deployment info
├── README.md               # Project overview
└── robots.txt              # SEO configuration
```

### JavaScript Organization

**`js/common.js`** contains:

1. **Storage Utilities**
   - `setStorage(key, value)` - Set with fallback to cookies
   - `getStorage(key)` - Get with cookie fallback

2. **Disclaimer Modal**
   - `acceptDisclaimer()` - Accept and hide modal
   - `rejectDisclaimer()` - Reject and redirect

3. **Source Modal**
   - `openSourceModal()` - Open GitHub confirmation modal
   - `closeSourceModal()` - Close modal
   - `confirmSourceRedirect()` - Navigate to GitHub

4. **Layout Components**
   - `getHeaderHTML(currentPage)` - Generate header
   - `getFooterHTML()` - Generate footer
   - `getSourceModalHTML()` - Generate source modal

5. **Navigation**
   - `buildNavLinks(currentPage)` - Build nav with active state
   - `inferCurrentPage()` - Detect current page

6. **Initialization**
   - `renderSharedLayout()` - Inject header/footer/modal
   - `setupPageTransitions()` - Smooth navigation
   - `animateOnScroll()` - Scroll-triggered animations

---

## Best Practices

### Adding New Pages

1. **Structure:** Copy a page template (e.g., `index.html`)
2. **Data Attribute:** Add `data-page="unique-key"` to `<body>`
3. **Navigation:** Update `NAV_ITEMS` in `common.js` if adding to main nav
4. **Tailwind Config:** Include the same config block as other pages
5. **Content Slots:** Use `<div id="site-header"></div>` and `<div id="site-footer"></div>`

### Styling New Components

1. **Use Tailwind Utilities:** No custom CSS needed
2. **Follow Color Palette:** Use defined colors for consistency
3. **Add Animations:** Choose appropriate animation from animation system
4. **Mobile First:** Design mobile, then enhance with `md:` breakpoints
5. **Accessibility:** Include proper ARIA attributes and semantic HTML

### Performance

- **Fonts:** Loaded via CDN with `display=swap`
- **CSS:** Tailwind via CDN (minimal payload)
- **Images:** Use modern formats; lazy load where possible
- **JavaScript:** Single `common.js` for all shared functionality
- **Animations:** Use CSS animations (GPU-accelerated)

---

## Maintenance & Updates

### Updating Fonts

To change fonts, update the Google Fonts URL and Tailwind config:

```html
<!-- Update font URL -->
<link href="https://fonts.googleapis.com/css2?family=FONT_FAMILY" rel="stylesheet">

<!-- Update Tailwind config -->
fontFamily: {
  brand: ['NEW_FONT'],
  body: ['BODY_FONT']
}
```

### Updating Colors

Modify the `colors.brand` object in Tailwind config:

```javascript
colors: {
  brand: {
    dark: '#NEW_HEX',
    purple: '#NEW_HEX',
    accent: '#NEW_HEX'
  }
}
```

### Adding New Animations

Define keyframes in the Tailwind config's `keyframes` object and add to `animation` config.

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | Jan 2026 | Initial style guide creation |

---

**For questions or suggestions about the style guide, please refer to the main README.md or create an issue on GitHub.**
