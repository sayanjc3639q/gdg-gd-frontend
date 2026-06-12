---
name: Developer Community Identity
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dae0'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4fa'
  surface-container: '#ebeef4'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#dfe3e8'
  on-surface: '#181c20'
  on-surface-variant: '#424753'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f7'
  outline: '#727785'
  outline-variant: '#c2c6d5'
  surface-tint: '#005ac1'
  primary: '#0058bd'
  on-primary: '#ffffff'
  primary-container: '#2771df'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#006e2c'
  on-secondary: '#ffffff'
  secondary-container: '#86f898'
  on-secondary-container: '#00722f'
  tertiary: '#b51b15'
  on-tertiary: '#ffffff'
  tertiary-container: '#d9372b'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004494'
  secondary-fixed: '#89fa9b'
  secondary-fixed-dim: '#6ddd81'
  on-secondary-fixed: '#002108'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#930004'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#dfe3e8'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
This design system embodies the spirit of open collaboration, innovation, and technical excellence. The brand personality is professional yet approachable, fostering a vibrant developer-centric environment. It prioritizes clarity and utility while maintaining a playful energy through purposeful color accents.

The design style is **Corporate / Modern**, heavily influenced by Material Design 3 principles. It utilizes a "White Canvas" philosophy: a clean, high-brightness background that allows content and Google’s signature primary colors to define the visual hierarchy. Expect generous whitespace, soft depth cues, and a systematic approach to layout that ensures accessibility across all developer tools and community platforms.

## Colors
The palette is built upon the iconic four-color Google brand foundation. 
- **Primary (Blue):** Used for primary actions, branding, and focus states.
- **Secondary (Green):** Used for success states, growth indicators, and secondary visual accents.
- **Tertiary (Red):** Reserved for errors, critical alerts, and destructive actions.
- **Quaternary (Yellow):** Used sparingly for warnings, highlights, and decorative elements.
- **Neutral:** A range of cool greys (primary neutral at #5F6368) used for body text, borders, and secondary icons to maintain high legibility against the white background.

## Typography
The typography system uses a dual-font strategy to balance character with functionality. 
- **Headlines & Labels:** **Plus Jakarta Sans** provides a friendly, geometric, and modern feel that echoes Product Sans, making it ideal for brand moments and UI controls.
- **Body Text:** **Inter** is used for all long-form content and data-heavy layouts to ensure maximum readability and a systematic, technical aesthetic.

Hierarchy is established through weight transitions (Bold for headers, Medium for labels, Regular for body) rather than excessive size shifts, maintaining a clean, "Googly" information density.

## Layout & Spacing
This design system utilizes an **8px linear scale** for all spacing and layout decisions.
- **Grid Model:** A 12-column fluid grid for desktop and a 4-column grid for mobile.
- **Margins:** Desktop views should maintain a minimum of 32px outer margins, while mobile views use 16px.
- **Alignment:** Consistent left-alignment is preferred to reinforce a clear reading path, with generous vertical spacing (xxl) between major content sections to create a "breathable" interface.
- **Responsiveness:** On mobile, complex side-by-side components should reflow into vertical stacks, while maintaining the 8px rhythm.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and subtle **Ambient Shadows**. Instead of heavy shadows, the system uses "Elevation Levels":
- **Level 0 (Surface):** The base #FFFFFF background.
- **Level 1 (Low):** Used for cards and buttons. A soft, diffused shadow (0px 1px 3px rgba(0,0,0,0.12)) or a subtle light-grey stroke.
- **Level 2 (Medium):** Used for hover states and dropdowns. A more pronounced shadow (0px 4px 8px rgba(0,0,0,0.08)).
- **Level 3 (High):** Reserved for modals and dialogs, utilizing a backdrop blur (8px) on the surface behind it to focus user attention.

Avoid using inner shadows or heavy gradients; keep surfaces flat and define them via subtle shifts in elevation or thin 1px borders (#E0E0E0).

## Shapes
The shape language is defined by a "Medium-Soft" radius to evoke friendliness and modern tech sensibilities.
- **Standard UI Elements:** (Buttons, Input fields, Chips) use a **12px (0.75rem)** radius.
- **Containers & Cards:** Use a **16px (1rem)** radius to anchor the layout.
- **Full Rounding:** Circular shapes (pills) are reserved exclusively for "Floating Action Buttons" (FABs) and status indicators to differentiate them from standard interactive elements.

## Components
- **Buttons:** Primary buttons use a solid Blue background with white text. Secondary buttons are outlined with a 1px Blue stroke. High-emphasis buttons (like "Join Group") use the 12px corner radius.
- **Chips:** Used for tags and categories. These have an 8px radius and a light grey background (#F1F3F4), switching to a brand color when active.
- **Cards:** White background, 16px radius, and a Level 1 shadow. Content within cards should have 24px internal padding.
- **Inputs:** Outlined style with a 1px #DADCE0 border. On focus, the border thickens to 2px and changes to the Primary Blue.
- **Lists:** Clean rows separated by 1px dividers or subtle whitespace. Navigation lists should use the "active indicator" (a pill-shaped highlight) common in Material 3.
- **Floating Action Button (FAB):** A signature element for "Create" or "Post" actions, featuring the Quaternary Yellow or Primary Blue to draw immediate attention.