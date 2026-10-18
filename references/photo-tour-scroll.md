# Photo tour scroll region

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: the Photo Tour scrollable modal content below the sticky header. This is the full-screen white scrollable photo-tour overlay opened from the listing, limited to the region under the sticky context sub-header: the category strip and the scrollable column of property images. The header itself and the photo viewer are out of scope.
Viewport: desktop only. Mobile layouts were not inspected. Widths under 744px were not inspected.

The photo-tour scroll region sits directly under the sticky header and is the only part of the overlay that scrolls. On a 900px-tall desktop viewport the header is 88px and this region is the remaining 812px. It is a white column of a category strip, then nine room blocks.

Asset names refer to `assets` in `src/assets/asset.ts`. Font: `assets.fonts.airbnbCerealVf`.

## Observed

### Frame

The overlay is a fixed, full-viewport white dialog (`rgb(255, 255, 255)`), labeled “Photo tour”. The scroll region starts at the header’s bottom edge and fills the rest of the viewport. At 1440×720 the header stays 88px and the scroll region becomes 632px (720 − 88). Viewport height changes only this region’s height. Text color is `rgb(34, 34, 34)`. The typeface is Airbnb Cereal VF (`assets.fonts.airbnbCerealVf`), a loaded variable font (weight range 200–900). Inherited size in this region is 14px / 20.02px, weight 400.

### Wide desktop (1130px and up)

Measured at 1130, 1132, 1136, 1144, 1160, 1200, 1280, 1440, and 1920. The scroll content is capped at 1024px and centered in the scrollport. Inside that cap, horizontal padding is 24px, so the inner track is 976px. Bottom padding after the last room is 96px. Side margins grow with the viewport; the inner sizes do not. At 1440 the centered box has about 200px of margin on each side. A vertical scrollbar is present (about 15px). There is no horizontal overflow.

### Category strip

The category strip is the first thing in the scroll area. It is not sticky. A navigation labeled “Photo categories” has nine buttons, in this order: Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos. On the wide layout it is an 8-column grid, column and row gap 12px, then 40px of space before the rooms. Eight buttons sit on the first row and “Additional photos” wraps to the second. Each button is a vertical stack with an 8px gap: a 111.5×105px thumbnail, radius 8px, `object-fit: cover`, empty alt, then a 14px / weight 400 label in `rgb(113, 113, 113)`, left-aligned. One-line buttons are about 132px tall. “Additional photos” wraps to two lines and is about 150px tall. The thumbnail is the first photo of that room.

### Room blocks

Nine sections, stacked with no gap between section boxes. On the wide layout each section is a 2-column grid: 458px + 458px, column gap 60px, row gap 20px, aligned to the start, padding 16px top and 4px bottom.

The left cell is only as tall as its text and is `position: sticky; top: 20px`. While that room’s photos scroll, the text pins 20px below the scrollport top, which is viewport y = 108 (88px header + 20px). When the section ends, the text is pushed off with it. Checked on Living room 2.

- Title: 32px, weight 500, line-height 35.2px, letter-spacing −0.64px, color `rgb(34, 34, 34)`. These are plain text blocks, not headings.
- Amenity line, when present: 16px, weight 400, line-height 22.4px, color `rgb(113, 113, 113)`, 8px below the title. Items are joined by two spaces, a middle dot (U+00B7), and two spaces. The line wraps inside the 458px column. Full kitchen is three lines at this width; Bedroom is taller. Exterior and Additional photos have a title only.

The right cell is a vertical stack with a 12px gap. Photos are grouped in threes: one full-width 3:2 frame (458×305px), then a pair (223×149px, 12px gutter). A remainder of 1 is one full frame. A remainder of 2 is only a pair (Full kitchen). Every room follows that rule.

Each photo is a button with an 8px radius, hidden overflow, pointer cursor, and a `rgb(238, 238, 238)` fill behind the image. The image covers the button, centered, `object-fit: cover`. All 43 images use `loading="lazy"` and have no srcset. Room alts are the room name. Button names are “Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image N”.

### Assets in this region

Font: `assets.fonts.airbnbCerealVf`. Images, in tour order, via `assets.images`:

| Room | Category thumb and photos |
| --- | --- |
| Living room 1 | `sleepLivingRoom`, `tourPhoto2`, `tourPhoto3` |
| Living room 2 | `mosaicPhoto2`, `mosaicPhoto3`, `tourPhoto6`, `mosaicPhoto1`, `tourPhoto8`, `tourPhoto9`, `tourPhoto10` |
| Full kitchen | `tourPhoto11`, `tourPhoto12` |
| Bedroom | `mosaicPhoto4`, `tourPhoto14`, `tourPhoto15`, `tourPhoto16`, `tourPhoto17`, `tourPhoto18` |
| Full bathroom | `tourPhoto19` |
| Gym | `tourPhoto20`, `tourPhoto21`, `tourPhoto22`, `tourPhoto23`, `tourPhoto24` |
| Exterior | `tourPhoto25`, `tourPhoto26`, `tourPhoto27`, `tourPhoto28`, `mosaicPhoto5`, `tourPhoto30` |
| Pool | `tourPhoto31`, `tourPhoto32`, `tourPhoto33` |
| Additional photos | `tourPhoto34` through `tourPhoto43` |

Natural size is 1440×1080 except the six Exterior photos, which are 1440×808. Exterior still renders in the same 3:2 frames, cropped with `object-fit: cover`. No icons sit in this scroll region.

### Hover and focus

Photo hover scales the image to 1.04 over 0.4s. The button’s hidden overflow and 8px radius clip that zoom. Category-thumb hover scales to 1.04 over 0.25s and darkens with `brightness(0.94)` over 0.2s. `:focus-visible` on both button types draws an `auto` outline, 0.8px, `rgb(229, 151, 0)`, no offset. The images themselves do not take that outline.

### Click and keyboard

Category buttons scroll that room so the section top lands at viewport y = 112, 24px under the header. The category strip scrolls away with the content. Clicking photo 13 (Bedroom, `mosaicPhoto4`) opens the photo viewer; Escape closes only the viewer, leaves this tour open, keeps the scroll position, and returns focus to that photo button. In tab order inside the scroll region: the 9 category buttons, then the 43 photo buttons. All are `type="button"` and tab stops. The scroll box and the category nav element are not tab stops. Category buttons expose no `aria-current`, `aria-pressed`, or `aria-selected`.

### Responsive (desktop only)

The header stays 88px at every width tested. The scroll region always starts immediately under it. Nothing in the scroll region becomes a second sticky bar.

**1130px and wider:** fixed 1024px centered column, 8-column category grid plus one wrapped item, two-column rooms, photo frames locked at 458×305 and 223×149, title sticky beside the photos.

**1128px down through 744px** (also checked at 1120, 1040, 960, and 800): one column. The category grid becomes 4 + 4 + 1. The room title is full width above the photos, with 20px between title and photos. The title scrolls away with the section; it does not pin. Photos span the inner track and stay 3:2. At 1120 the 1024px cap is still centered. At 1040 it fills the scrollport. At 960 and below the content width equals the scrollport, still with 24px side padding, so the photo width is scrollport minus 48px (897px at 960, 737px at 800, 681px at 744). Pair frames stay half of that width minus the 12px gutter. Category thumbs scale with the columns (about 215px at 960, 175px at 800, 161px at 744) and keep the same image ratio. No horizontal scrollbar appeared. Amenity wrapping changes with the wider text column: Full kitchen’s amenity block is shorter at 800px than in the 458px wide column.

A 1129px viewport could not be applied (it snapped to 1130, which is already the wide layout). Widths under 744 were not inspected.

## Non-verified / assumed

- The open/close slide of the overlay was not measured; at rest the dialog transform is identity.
- Why a category click stops 24px below the header is not a CSS scroll-margin or scroll-padding (both are 0 / auto). The 24px landing is observed; the mechanism is not.
- No separate “current category” style was confirmed beyond focus. There is no selected ARIA state.
- Synthetic Tab and ArrowDown did not move focus or scroll. Real Tab order and arrow scrolling were not confirmed. Escape did close the viewer.
- The 12px photo gutter was read from computed style on the wide layout. Narrow widths match that gutter geometrically, but the computed gap was not re-read there.
- Category-thumb hover can paint slightly outside the button because the button does not clip; that follows from overflow and the 1.04 scale, and was not checked in a screenshot.
