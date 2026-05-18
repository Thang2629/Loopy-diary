---
name: Soft-Playful Modernism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#514345'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#847375'
  outline-variant: '#d6c2c4'
  surface-tint: '#884d5a'
  primary: '#884d5a'
  on-primary: '#ffffff'
  primary-container: '#feb3c1'
  on-primary-container: '#7a424e'
  inverse-primary: '#fdb2c0'
  secondary: '#a03a57'
  on-secondary: '#ffffff'
  secondary-container: '#ff85a2'
  on-secondary-container: '#781b39'
  tertiary: '#665c5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#d2c4c7'
  on-tertiary-container: '#5a5153'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#fdb2c0'
  on-primary-fixed: '#370b18'
  on-primary-fixed-variant: '#6c3642'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#ffb1c1'
  on-secondary-fixed: '#3f0017'
  on-secondary-fixed-variant: '#812240'
  tertiary-fixed: '#eddfe2'
  tertiary-fixed-dim: '#d1c3c6'
  on-tertiary-fixed: '#211a1c'
  on-tertiary-fixed-variant: '#4e4447'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-margin-mb: 20px
  container-margin-dt: 40px
  gutter: 16px
  stack-gap: 24px
---

## Brand & Style

The design system is a "Soft-Playful Modernism" framework that balances high-end modern UI principles with a charming, character-driven aesthetic inspired by Zanmang Loopy. It targets a demographic that appreciates a friendly, approachable interface without sacrificing professional cleanliness. 

The visual style is defined by **Tactile Glassmorphism**. It combines the airy lightness of translucent layers with the physical satisfaction of "squishy" or glossy 3D elements. The emotional goal is to evoke joy and comfort, using generous white space and extreme roundedness to remove any visual tension or "sharpness" from the digital experience.

## Colors

The palette is rooted in a monochromatic pink spectrum to maintain a cohesive, "strawberry-cream" identity. 

- **Loopy Pink (#FEB3C1):** The primary brand color, used for active states, icons, and soft branding elements.
- **Deep Rose (#FF85A2):** Reserved exclusively for Call-to-Action (CTA) elements and critical highlights to ensure high conversion and visibility.
- **Strawberry Cream (#FFF0F3):** The foundational surface color. It provides a warmer, more inviting alternative to pure grey for backgrounds and containers.
- **Pure White (#FFFFFF):** Used for elevated cards and high-contrast glass layers to maintain a clean, modern feel.
- **Text Tones:** We avoid pure black. Use a deep, warm chocolate-tinted charcoal (#4A363A) for primary text to keep the interface soft and readable.

## Typography

This design system utilizes **Quicksand** as the primary typeface due to its organic, rounded terminals that mirror the soft shapes of the UI. For functional labels and smaller technical text, **Plus Jakarta Sans** is used to maintain legibility while preserving the friendly geometric character of the system.

Headlines should always utilize a tighter letter-spacing to emphasize the "bubbly" nature of the font. Body text is set with generous line heights to ensure the interface feels airy and unhurried. Use "headline-xl" sparingly for hero sections or character-driven announcements.

## Layout & Spacing

The layout philosophy follows a **Fluid-Organic Model**. While it adheres to a standard 12-column grid for desktop, the internal spacing relies heavily on large "safe zones" to prevent the UI from feeling cluttered.

- **Breakpoints:** Mobile (up to 599px), Tablet (600px - 1023px), Desktop (1024px+).
- **Margins:** High horizontal padding (minimum 24px) is required on all mobile screens to push content inward, emphasizing the roundedness of the main containers.
- **Rhythm:** An 8px baseline grid is used, but component gaps are preferred at 24px (3x) to give the "playful" elements room to breathe.

## Elevation & Depth

Hierarchy is achieved through **Tonal Stacking** and **Tinted Ambient Shadows**. 

1.  **Base Layer:** Strawberry Cream (#FFF0F3) solid background.
2.  **Mid Layer:** Pure White (#FFFFFF) surfaces with 24px+ corner radii and a soft, pink-tinted shadow (Shadow: 0 8px 30px rgba(254, 179, 193, 0.3)).
3.  **Glass Layer:** Semi-transparent white (Opacity 70%) with a 20px backdrop blur, used for navigation bars and floating overlays.
4.  **Interactive Layer:** High-gloss 3D elements that appear to sit "above" the interface.

Shadows must never be grey or black. Always use a desaturated version of Loopy Pink to keep the depth looking clean and integrated.

## Shapes

The shape language is the core of this design system. A strict **minimum radius of 24px** is enforced for all containers, cards, and input fields. 

Smaller elements like chips or tags should be fully **pill-shaped**. This extreme roundedness removes any "industrial" feeling from the modern layout, creating a friendly and safe environment. Internal elements (like images inside a card) must follow the parent's radius with a nested adjustment (Parent Radius - Padding) to ensure visual harmony.

## Components

### Buttons
Primary buttons use a **Glossy 3D-style**. This is achieved by using the Deep Rose (#FF85A2) fill with a subtle inner top-highlight (1px white at 40% opacity) and a bottom "weight" shadow to simulate a physical, clickable plastic button. Text inside buttons should be bold Quicksand.

### Cards
Cards are Pure White (#FFFFFF) with a 32px corner radius. They feature a 1px border of #FEB3C1 at 20% opacity to define the edge against the Strawberry Cream background without looking "heavy."

### Input Fields
Inputs are pill-shaped with a background of Strawberry Cream (#FFF0F3). On focus, the border transitions to Loopy Pink (#FEB3C1) with a soft outer glow.

### Chips & Badges
Always fully rounded (pill-shaped). Use Loopy Pink for the background with a white label for a soft but high-visibility categorization tool.

### Glassmorphism Overlays
Modals and bottom sheets should use a 80% white background with a 15px backdrop blur. This keeps the user's context visible while focusing on the playful task at hand.