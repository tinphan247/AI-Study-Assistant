# Design System Specification: The Ethereal Scholar

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Ethereal Scholar."** 

In an era of cluttered academic tools, we are building a "focused sanctuary." This system moves away from the rigid, grid-heavy "dashboard" look and instead embraces a light, dreamy, and editorial atmosphere. We achieve this through **Intentional Asymmetry** and **Atmospheric Depth**. By overlapping translucent glass layers and utilizing high-contrast typography scales, we create a UI that feels less like software and more like a high-end digital workspace. The goal is to reduce cognitive load for students by replacing harsh borders with soft, glowing transitions and ample breathing room.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a light, sophisticated spectrum that balances academic authority with a modern, "glassy" aesthetic.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. 
Structure must be achieved through:
- **Tonal Shifts:** Using `surface-container-low` against `surface`.
- **Negative Space:** Allowing the spacing scale to act as the primary separator.
- **Blur Boundaries:** Letting the edge of a glass container define its limit via backdrop-filter effects.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical, stacked layers of frosted glass.
- **Base Level:** The `surface` background, featuring the pastel gradient (#FFCB6B, soft purple, pink, and blue).
- **Secondary Level:** `surface-container-low` used for large content areas (e.g., a study notes panel).
- **Tertiary Level:** `surface-container-lowest` or `surface-container-highest` for high-importance cards or floating AI prompts. 

### The "Glass & Gradient" Rule
To create the "signature" feel, primary actions and hero elements should utilize **Signature Textures**. Instead of flat `primary` fills, use a linear gradient from `primary` (#6847ae) to `primary-container` (#af8efa). For glass containers, use a semi-transparent `surface` color (approx. 60-80% opacity) combined with a `backdrop-filter: blur(24px)`.

---

## 3. Typography
The typography strategy pairs the geometric sophistication of **Plus Jakarta Sans** for headlines with the highly legible, humanist qualities of **Manrope** for study content.

- **Display & Headlines (Plus Jakarta Sans):** These are the "editorial" anchors. Use `display-lg` and `headline-lg` with generous tracking to create an authoritative, premium feel.
- **Body & Titles (Manrope):** Optimized for long-form reading. `body-lg` (1rem) is the standard for study notes to ensure comfort during long sessions.
- **Hierarchy through Scale:** Use extreme contrast (e.g., a `display-md` headline paired with a `label-md` metadata tag) to create a modern, non-traditional layout rhythm.

---

## 4. Elevation & Depth
Depth in this system is organic and ambient, mimicking how light passes through glass.

- **The Layering Principle:** Achieve "lift" by stacking tones. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural elevation without the need for a shadow.
- **Ambient Shadows:** When a floating glass card requires a shadow, use a large blur radius (30px–60px) and low opacity (4%–8%). The shadow must be tinted with the `on-surface` color (#2c2f33) rather than pure black to maintain the "dreamy" light theme.
- **The "Ghost Border" Fallback:** If a container lacks sufficient contrast against a busy background, use a **Ghost Border**. This is a 1px stroke using `outline-variant` (#abadb3) at **15% opacity**. Never use a 100% opaque stroke.
- **Soft Glows:** On hover states for glass components, implement a subtle inner-glow using the `primary_fixed` color at 20% opacity to simulate light catching the edge of a lens.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `md` (1.5rem) rounded corners. On hover, apply a soft outer glow of `primary` (#6847ae) at 30% opacity.
- **Secondary:** Glass-effect button using `surface_container_lowest` at 50% opacity with a `backdrop-blur`.
- **Tertiary:** No background; text-only using `primary` color, with a soft background reveal on hover.

### Glass Cards
- Forbid standard dividers. Separate content using `title-sm` headers and `md` (1.5rem) spacing.
- **Radius:** Always use `md` (1.5rem) or `lg` (2rem) to maintain the "soft" brand personality.

### AI Study Input
- A specialized text area using `surface_container_lowest` with a "Ghost Border." 
- When active, the background should subtly pulse with a `primary_fixed_dim` (#a181ec) glow to indicate the AI is "listening" or processing.

### Selection Chips
- Use `full` (9999px) rounding.
- **Unselected:** `surface_container_high` with no border.
- **Selected:** `primary_container` with `on_primary_container` text.

### Input Fields
- Avoid "box" styles. Use a "bottom-line-only" approach or a fully translucent glass container.
- Error states must use `error` (#b02500) text but should avoid harsh red boxes; instead, use a soft `error_container` glow behind the input.

---

## 6. Do's and Don'ts

### Do
- **Do** embrace white space. If a layout feels "empty," it is likely working.
- **Do** use overlapping elements. Let a glass card partially obscure a background abstract shape to create depth.
- **Do** ensure all text on glass meets WCAG AA contrast ratios by adjusting the opacity of the glass "frosting."

### Don't
- **Don't** use pure black (#000000) for text or shadows; it breaks the dreamy aesthetic. Use `on_surface`.
- **Don't** use 90-degree sharp corners. The minimum radius is `sm` (0.5rem), but `md` (1.5rem) is preferred.
- **Don't** use standard horizontal dividers. Use a shift in background tone (`surface` to `surface-container-low`) instead.
- **Don't** use high-velocity animations. Transitions should be "slow and liquid" (300ms–500ms with ease-in-out).