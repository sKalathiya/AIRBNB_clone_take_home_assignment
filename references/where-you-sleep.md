# Where you'll sleep

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: the “Where you'll sleep” block on the listing page.
Viewport: desktop. Measured at 1440 and 1920, plus narrower desktop widths. Mobile layout was not inspected.

The block is the left-column group between the description and “What this place offers.” It is a plain `div`, not a landmark. Copy and image ids are stored in `sleepSection` in `src/assets/data.ts`. The typeface is `assets.fonts.airbnbCerealVf`.

## Observed

### Structure

- Heading text is `Where you'll sleep` (straight apostrophe, U+0027), an `h2`.
- Under it, a two-column grid with two cards, left to right:
  1. **Bedroom** / **1 double bed** / `assets.images.mosaicPhoto4` (same file as mosaic photo 4)
  2. **Living room** / **1 sofa** / `assets.images.sleepLivingRoom`
- No third card, carousel, arrows, “show all,” bed icon, or other icon. Card and image backgrounds are `none`.
- Both photos are 1440×1080, no `srcset`, default loading, empty `alt`.

### Layout at a full 1280px container

Measured at 1440 and 1920 viewport widths.

- Page container max width 1280px, horizontal padding 80px. Below that, a row: fluid left column, 96px gap, 372px right rail.
- Sleep block width **652px**, left edge about **152px** from the viewport at 1440px (container centered; a scrollbar shifts it a few pixels). At 1920px the block stays 652px and only the side margin grows (left edge about 392px).
- Section box: padding **32px 0**, border-top **1px solid #ebebeb**, no bottom border, margin 0. `clientTop` is 1. Used height **384px** (subpixel measure 384.26).
- Heading to grid: **24px**. Grid: `display: grid`, two equal columns, **gap 16px**. Used columns **318px 318px**.
- Each card is 318×269.46. Photo is flush to the card top, **318×212**.

### Stack inside one card (652px column)

- Photo 212px
- 14px space
- Title box 21.45px
- 2px space
- Detail box 20.02px

### How width changes

- 1280px viewport with a scrollbar: block **636.8px**, cards **310.4px**, left edge 80px. Height **379.19px**.
- At `max-width: 1128px` the right rail drops out and page padding becomes 40px. The sleep grid stays two columns.
- 1100px: block **1004.8px**, cards **494.4px**, left 40px, height **501.86px**.
- 800px: block **704.8px**, cards **344.4px**, left 40px, height **401.86px**, columns `344.4px 344.4px`.
- The stylesheet switches this grid to one column only inside `max-width: 743px`. That width was not measured.

### Type

- Font family: `"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif`. File: `assets.fonts.airbnbCerealVf`. Variable face, weight axis 200–900, `font-display: swap`. Body smoothing is antialiased.
- Heading: 22px, line-height 26px, weight 500, color `#222222`, letter-spacing normal, margin `0 0 24px`.
- Title: 15px, weight 500, color `#222222`, line-height 21.45px (inherited body 1.43 × 15), margin-top 14px. No line clamp. Single line for both titles.
- Detail: 14px, weight 400, color `#717171`, line-height 20.02px, margin-top 2px.
- Calculated contrast on white: `#222222` **15.91:1**, `#717171` **4.88:1**.

### Photos

- `width: 100%`, `aspect-ratio: 3 / 2`, `object-fit: cover`, `object-position: 50% 50%`, `border-radius: 8px`, border `1px solid rgba(0, 0, 0, 0.08)`, `display: block`, `box-sizing: border-box`.
- Source frames are 4:3, so cover crops top and bottom around the center.
- Bedroom frame: bed with white linens, patterned cushion, pendant lamp, beige curtains, window.
- Living-room frame: tan sofa with a patterned pillow, oval coffee table, rug, dining table, plants, kitchen to the left. Matches the “1 sofa” label.

### Behavior

- Cards are `div`s. Cursor `auto`. No `:hover` rules on these cards. `transition-duration: 0s`. No scale, darken, or shadow.
- Clicking either image or card does not open Photo tour, Photo viewer, or the amenities dialog, and the URL stays the same.
- No `a`, `button`, or `tabindex >= 0` inside the block. The heading is not a tab stop. Outline style on these nodes is `none`.
- Accessibility tree exposes the `h2` “Where you'll sleep.” Images have empty alt. Room names are plain text, not headings, and are not tied to the images with `aria-labelledby`.
- A sticky “Listing sections” nav (64px tall, x 160–460) overlaps the heading when this block is scrolled to the top of the viewport. That nav is page chrome, not part of this block.
- `prefers-reduced-motion: reduce` only forces a global 1ms animation/transition duration. This block already has no motion.

## Non-verified / assumed

- Computed image and section borders were reported as **0.8px** in this browser session. The stylesheet says **1px**, and the section’s `clientTop` is 1. The 0.8px reading is treated as display-scale rounding, not a different design border.
- Contrast ratios are calculated from the measured RGB values, not from a contrast checker.
- The one-column collapse at 743px is in the stylesheet only. It was not viewed.
- Empty alt is what the DOM has. Whether that is intentional decoration is not stated in the UI.
