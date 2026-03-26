# Design System Document: Tech-Forward Professionalism

This design system is engineered to move beyond the generic "developer portfolio" template. It prioritizes high-end editorial layouts, sophisticated depth, and a "Tech-Forward & Clean" aesthetic that mirrors the precision of high-quality code.

---

## 1. Overview & Creative North Star: "The Digital Architect"

The Creative North Star for this system is **The Digital Architect**. 

Instead of a flat, grid-based website, the UI should feel like a high-end IDE or a digital blueprint. We break the "template" look by utilizing **intentional asymmetry**—large, expansive white space (or "dark space") contrasted against dense, information-rich modules. Elements should overlap slightly (e.g., a project image bleeding into a description card) to create a sense of three-dimensional space.

**Key Principle:** The interface should feel engineered, not just "designed." Every pixel is a structural choice.

---

## 2. Colors & Tonal Depth

The palette is rooted in a deep, nocturnal slate (`#0b1326`) to reduce eye strain and provide a premium backdrop for the "Electric Cyan" accents.

### The Color Strategy
- **Primary (`#c3f5ff`) & Primary Container (`#00e5ff`):** Use these sparingly for high-impact "ignition points"—CTAs, active states, and critical data points.
- **Secondary (`#bcc7de`):** Used for supporting elements and "on-surface" metadata.
- **Surface Tiers:** Use `surface-container-low` (`#131b2e`) for the main body and `surface-container-high` (`#222a3d`) for elevated interactive elements.

### Visual Rules
- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Define boundaries through background shifts (e.g., a `surface-container-lowest` section sitting on a `surface` background).
- **The Glass & Gradient Rule:** For the hero section or floating navigation, use Glassmorphism. Apply `surface-container` colors at 60% opacity with a `20px` backdrop-blur. 
- **Signature Textures:** Apply a subtle linear gradient to main buttons: `linear-gradient(135deg, #c3f5ff 0%, #00e5ff 100%)`. This adds "soul" and prevents the UI from feeling flat.

---

## 3. Typography: The Editorial Hierarchy

We pair the technical precision of **Inter** with the futuristic, geometric personality of **Space Grotesk**.

- **Display & Headlines (Space Grotesk):** Use `display-lg` (3.5rem) for the hero section. Tighten the letter-spacing (`-0.02em`) to give it an authoritative, "editorial" weight.
- **Body & Titles (Inter):** Inter handles the heavy lifting for readability. Use `body-lg` (1rem) with a generous line-height (1.6) to ensure technical documentation or project descriptions feel approachable.
- **Labels (Inter):** Use `label-sm` (0.6875rem) in all-caps with `0.1em` letter-spacing for "Skill Badges" or "Metadata" to mimic the look of terminal output.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "organic" for this system. We use **Tonal Layering** to define hierarchy.

- **The Layering Principle:** Place a `surface-container-lowest` (`#060e20`) card on a `surface-container-low` (`#131b2e`) section. This creates a "recessed" look, making the card feel like it’s carved into the interface.
- **Ambient Shadows:** For floating elements (like a navigation bar), use a shadow color tinted with the primary glow: `rgba(0, 218, 243, 0.08)` with a `40px` blur.
- **The "Ghost Border" Fallback:** If a container requires more definition, use the `outline-variant` (`#3b494c`) at 20% opacity. This creates a "whisper" of an edge that maintains the "No-Line" philosophy.

---

## 5. Components

### The Hero Section
- **Layout:** Use an asymmetrical 60/40 split. 
- **Style:** The headline (`display-lg`) should be the focal point. Use a `surface-tint` gradient on the primary keyword. Background should utilize a large, blurred radial gradient of `primary-container` at 5% opacity in the top-right corner.

### Elegant Project Cards
- **Structure:** No borders. Use `surface-container-high` (`#222a3d`).
- **Interaction:** On hover, the background shifts to `surface-container-highest` (`#2d3449`) and the "Ghost Border" opacity increases to 40%.
- **Spacing:** Use `spacing-6` (2rem) for internal padding to give the content "breathing room."

### Skill Badges (Chips)
- **Visuals:** Use `surface-container-lowest` with a `label-md` font. 
- **Accent:** A 2px vertical "pill" of `primary` color on the left side of the chip to signify "Active/Known" status.

### Buttons
- **Primary:** High-contrast. Background: `primary-container`. Text: `on-primary-container`. 
- **Tertiary:** No background. Text: `primary`. On hover, add a `primary` under-glow using a soft `4px` blur.

### Inputs & Text Areas
- **Style:** Use "Bottom-Line" only styling or a solid `surface-container-highest` fill. 
- **Focus:** Transition the bottom border to `primary` with a subtle outer glow.

---

## 6. Do’s and Don’ts

### Do:
- **Use "Space" as a Tool:** Use `spacing-20` (7rem) between major sections to let the technical content breathe.
- **Layering over Lining:** Always ask "Can I use a different surface color?" before adding a border.
- **Accent with Intent:** Use the Electric Cyan (`primary`) only for things that are interactive or represent "success."

### Don’t:
- **Don’t use Rounded Corners > 0.75rem:** Keep the "Tech-Forward" feel by using `md` (0.375rem) or `lg` (0.5rem) radiuses. Avoid "bubbly" shapes.
- **Don’t use Pure Black:** Use `surface` (`#0b1326`). Pure black (#000) feels "empty"; slate feels "premium."
- **Don’t use Dividers:** Never use a horizontal rule `<hr>`. Use a `spacing-12` gap or a background color shift instead.

---

## 7. Interaction Micro-interactions

- **Hover States:** Elements should lift slightly (translateY: -4px) using a `cubic-bezier(0.2, 0, 0, 1)` transition for a "snappy" yet smooth feel.
- **Active State:** When a user clicks a project card, use a subtle "scanline" animation—a 10% opacity white line that sweeps from top to bottom—to reinforce the "Tech-Forward" theme.