# Main Photo Mosaic Grid

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: listing photo mosaic only (hero, 2×2 tiles, Show all photos)
Viewport: desktop baseline at 1440px, 1920px, and 1280px. Other widths, including the single-photo layout, are under Responsive behaviour.

Photo and font files are recorded in `assets/asset.ts` as `mosaicPhoto1`–`mosaicPhoto5` and `airbnbCerealVF`. Listing fields for this grid are in `assets/data.ts` (`mosaicListing`).

## Observed

### Placement

- The mosaic is a `section` named **Photos of this place**. The accessibility tree exposes that section as a region.
- At a 1440px-wide layout it is **1120×494**, with its left edge 152px from the viewport.
- It sits in a column that is at most 1280px wide, centered, with **80px** horizontal padding.
- The section’s own margin is **0 0 48px**.
- At 1920px the grid stays **1120×494** and remains centered.
- At 1280px the column fills the viewport, the mosaic shrinks to **1105×487**, and it starts 80px from the left.
- There is no horizontal page scroll at these widths.

### Grid

- One hero on the left and four photos in a 2×2 block on the right.
- The grid container is `display: grid`, **8px** column and row gap, **12px** border radius, `overflow: hidden`, transparent background.
- At 1120px width the tracks compute to **560px 272px 272px** and **243px 243px**.
- The hero is the first track and `grid-row: span 2`, so it is **560×494**. Each small tile is **272×243**.
- At 1105px width the columns compute to about **552.29px 268.25px 268.26px**.
- Gutters show the white page surface.
- Only the outer silhouette is rounded. Tile corners inside the grid are square.

### Tiles

- Each photo is a `type="button"` with `tabindex` 0, `cursor: pointer`, `position: relative`, `overflow: hidden`, padding 0, and a **#eeeeee** fill.
- The image fills the button, `object-fit: cover`, `object-position: 50% 50%`, `decoding="async"`, no `srcset`.
- The hero loads eager. The other four load lazy.
- Image `alt` is empty.
- The shared accessible-name prefix is **Romantic Jacuzzi 1BHK Candolim | Mirashya UG10**.
- DOM order is image 1 through image 5.
- Only the hero sets an explicit row span. The other four are auto-placed into the 2×2 block in that order.

| Tile | Asset | Name | Picture | Intrinsic size |
| --- | --- | --- | --- | --- |
| Hero | `mosaicPhoto1` | …image 1 | Patio lounge: rattan seating, gray tile wall, sconces, plants, ottoman | 1440×1080 |
| Top middle | `mosaicPhoto2` | …image 2 | Closer crop of that patio seating | 1440×1080 |
| Top right | `mosaicPhoto3` | …image 3 | White jacuzzi in a wooden deck | 1440×1080 |
| Bottom middle | `mosaicPhoto4` | …image 4 | Bedroom with bed, fan, window, wardrobe | 1440×1080 |
| Bottom right | `mosaicPhoto5` | …image 5 | Yellow-and-white building with a red roof | 1440×808 |

- Each tile has an empty `::after` stretched over the image (`inset: 0`, `position: absolute`).
- At rest its background is transparent.
- The image declares `transition: filter 0.2s` and the `::after` declares `transition: background 0.2s`.
- The button declares `transition: all`.

### Show all photos

- A `button` (`id` `showAllPhotos`) absolutely positioned on the section: **right 24px, bottom 24px**.
- It overlays the bottom-right photo.
- Used size about **143×32** (`box-sizing: border-box`).
- Layout is a horizontal flex row, centered, **gap 8px**, padding **7px 15px**.
- Fill **#ffffff**, border **0.8px solid #222222**, radius **8px**, shadow **0 2px 8px rgba(0,0,0,0.15)**.
- Label text is exactly **Show all photos** (no count).
- Type is **Airbnb Cereal VF** (`airbnbCerealVF`), **12px**, weight **500**, line-height **16px**, color **#222222**, letter-spacing normal.
- The same family is used on the grid, with fallbacks Circular, system-ui, Roboto, Helvetica Neue, sans-serif.
- The icon is a **15×15** SVG (`viewBox` 0 0 16 16): four small filled squares in a 2×2 grid, fill **#222222**.
- The SVG is `aria-hidden` and not focusable. The button’s accessible name comes from its text.
- Declared transition: **transform 0.1s, background 0.15s**.

### Hover

- On a photo button, the `::after` background becomes **rgba(0,0,0,0.1)**.
- The image `transform` stays `none`, its size stays the same, and its `filter` stays `none` when hover is forced on either the button or the image.
- On Show all photos, the background becomes **#f7f7f7**. Border, shadow, and scale stay as at rest.

### Press

- `:active` on a photo button sets `transform: scale(0.997)` (hero width 560 → about 558.3; small tile 272 → about 271.2).
- The dark overlay is not applied in the active state alone.
- `:active` on Show all photos sets `transform: scale(0.96)`.
- Combined hover and active keeps the **#f7f7f7** background and the 0.96 scale.

### Click

- A pointer click on Show all photos, and a pointer click on mosaic image 2, both open a fixed modal dialog labeled **Photo tour** (`aria-modal="true"`, white background, z-index **120**).
- The address becomes `?modal=PHOTO_TOUR_SCROLLABLE`.
- `body` overflow becomes `hidden`.
- While closed, that dialog is `visibility: hidden`, `opacity: 0`, and translated **28px** down.
- While open it is visible, `opacity: 1`, and translation is **0**.
- Its transition is **opacity and transform, 0.3s, cubic-bezier(0.2, 0, 0, 1)**.
- Escape closes it and clears the query. The clicked control receives focus.

### Focus and accessibility

- Photo buttons have no `aria-expanded`, `aria-controls`, `aria-haspopup`, or `aria-pressed`.
- At rest, outline is **2.4px #222222** with style **none**.
- Forcing `:focus-visible` on the hero and on Show all photos switches the outline to style **auto**, **0.8px**, color **rgb(229, 151, 0)**, offset **0**.
- Focusing a photo from script leaves the outline style at **none**.
- Photo-button overflow is hidden.

## Non-verified / Assumed

- The gold `outline-style: auto` ring is the browser’s native focus ring. That is inferred from the `auto` keyword and from the author outline being `none` at rest. A custom focus border was not separately identified.
- Real Tab order was not confirmed. Synthetic Tab did not move focus. The visible controls are in DOM order: images 1–5, then Show all photos, all `tabindex` 0 and enabled.
- Synthetic Enter on the focused hero did not open the dialog. Whether a trusted Enter or Space activates these buttons was not confirmed. Pointer clicks do.
- Whether every small tile opens the tour was checked for image 2 and for Show all photos only. The hero, image 3, image 4, and image 5 were not clicked.
- The exact column formula is inferred from the computed tracks (at 1120px the left track is half the grid and the other two split the remainder after the 8px gaps). It was not read from a stylesheet. Stylesheets were not readable on the page.
- Reduced-motion behavior was not tested.
- Row-track pixels at 1280px were not read separately from the 487px section height.
- A second photo grid exists in the DOM inside the closed Photo tour dialog (`visibility: hidden`). It was not treated as this mosaic.

## Responsive behaviour

A vertical scrollbar was present, so the used width is the client width, about 15px under the viewport. The 1120×494 cap at 1440 and 1920, and the 1105×487 grid at 1280, stay the wide comparison. Sizes below are inner widths that were measured.

### Observed

The mosaic has two layouts. It stays a fluid 1+2×2 grid until the viewport is 742px wide, then it becomes one fixed photo. Padding also steps down at 1128px.

What stays the same:

- The grid’s aspect ratio is `1120 / 494`, the gap is 8px, the grid radius is 12px, and the grid’s overflow is hidden. Tile radius is 0. Rounding is the grid clipping the photos.
- The hero’s row is `span 2`. Photos use `object-fit: cover` at 50% 50% (read at 2560px and in the single-photo state).
- The column’s max-width stays 1280px. The section’s bottom margin stays 48px.
- Show all photos stays absolute, 24px from the right and bottom of the section, about 142.9×31.6, padding 7px 15px, radius 8px. That size did not change at any width.
- The five photos never stack, and the mosaic itself never becomes a horizontal scroller.

**State A — fluid 1+2×2, capped at 1120×494.** All five photos stay visible. Height follows width: `width × 494 / 1120`. After the two 8px gaps, the free space splits about 35 : 17 : 17. Rows are equal and split `height − 8`.

Padding is 80px when `(max-width: 1128px)` does not match. The mosaic starts 80px from the left. Above the 1280px column cap it is centered and locked at 1120×494.

| Viewport | Client width | Mosaic | Origin | Notes |
| --- | --- | --- | --- | --- |
| 2560×900 | 2545 | 1120×494 | x 712.4, y 173.2 | Column 1280, centered. Tracks 560 / 272 / 272 and 243 / 243. Title 1 line. No page scroll. |
| 1440×900, 1440×480, 1440×420 | 1425 | 1120×494 | x 152.4, y 173.2 | Same cap. Short height does not resize it. |
| 1200×900 | 1185 | 1024.8×452 | x 80, y 173.2 | Tracks 511.7 / 248.6 / 248.6 and 222 / 222. |
| 1130×900 and 1130×860 | 1115 and 1114 | 955.2×421.3 and 954.4×421 | x 80 | Padding still 80px. Title 1 line. |

Padding is 40px from inner width 1128 through 743. The mosaic starts at x 40 and fills the content box (`client width − 80`). The title is still one line through 880px.

| Viewport | Client width | Mosaic | Title | Page scroll |
| --- | --- | --- | --- | --- |
| 1128×901 | 1113 | 1032.8×455.5, y 173.2 | 1 line | No |
| 960×860 | 945 | 864.8×381.4, y 173.2 | 1 line | No |
| 920×860 | 905 | 824.8×363.8, y 173.2 | 1 line | No |
| 900×860 | 885 | 804.8×355, y 173.2 | 1 line | No |
| 890×860 | 875 | 795.2 wide, y 173.2 | 1 line | No |
| 880×860 | 865 | 784.8 wide, y 173.2 | 1 line | No |
| 870×860 | 855 | 775.2 wide, y 198.8 | 2 lines | No |
| 860×860 | 845 | 764.8×337.3, y 198.8 | 2 lines | No |
| 840×860 | 825 | 744.8×328.5 | 2 lines | No |
| 800×860 | 785 | 704.8×310.9, y 198.8 | 2 lines | No |
| 743×860 | 728 | 648×285.8, y 198.8 | 2 lines | Yes, 6px (scroll width 734) |

At 743px the query `(max-width: 743px)` is still false, and the 1+2×2 is still there. Tracks are 320.6 / 155.7 / 155.7 and 138.9 / 138.9. The mosaic’s right edge is 688, inside the 728px client width, so that 6px of page scroll is not the mosaic.

The heading wraps from one line to two between 880px and 870px. The title row stays a nowrap row; Share and Save stay on the first line. Two lines make the heading 60px tall and move the mosaic from y 173.2 to y 198.8.

**State B — one fixed photo, from 742px down.** At inner width 742, `(max-width: 743px)` matches. Padding becomes 24px. The grid switches immediately:

- One column track, 634.812px, and rows `280px 0px`.
- Box is 634.8×280, x 24. Photos 2–5 are `display: none`. They are not stacked or scrolled inside the grid.
- The hero button is 634.8×288 because `span 2` includes the 8px gap. The grid is only 280px tall and clips the extra 8px.
- The section still shrinks with the viewport. The photo does not. When the section is wider than 634.8, the photo stays left-aligned and the extra space is empty to its right. Show all photos stays 24px from the section’s right, so it can sit past the photo’s right edge.
- Page scroll width locks at 659, which is the photo’s right edge (24 + 634.8).

| Viewport | Client width | Section width | Horizontal scroll | Title lines | Mosaic y |
| --- | --- | --- | --- | --- | --- |
| 742×860 | 727 | 679.2 | No | 2 | 198.8 |
| 720×860 | 705 | 656.8 | No | 2 | 198.8 |
| 700×860 | 685 | 636.8 | No | 2 | 198.8 |
| 680×860 | 665 | 616.8 | No | 2 | 198.8 |
| 674×860 | 659 | 611.2 | No (scroll width equals client width) | 2 | 198.8 |
| 670×860 | 655 | 607.2 | Yes, to 659 | 2 | 198.8 |
| 660×860 | 645 | 596.8 | Yes, to 659 | 2 | 198.8 |
| 640×900 | 625 | — | Yes, to 659 | 2 | — |
| 552×900 | 537 | — | Yes, to 659 | 2 | — |
| 450×900 | 435 | 387.2 | Yes, to 659 | 3, and also 4 on a second pass | 228.8 or 258.8 |
| 448×900 | 433 | 384.8 | Yes | 4 | 258.8 |
| 440×900 | 425 | 376.8 | Yes | 4 | 258.8 |
| 400×780 | 385 | — | Yes | 5 | 288.8 |
| 398×900 | 382 | 334.4 | Yes | 5 | 288.8 |
| 396×900 | 381 | 332.8 | Yes | 6 | 318.8 |
| 390×320 and 390×700 | 375 | 327.2 | Yes, to 659 | 6 | 318.8 at scroll 0 |
| 360×900 | 345 | 296.8 | Yes | 6 | 318.8 |
| 320×900 | 305 | 256.8 | Yes | — | — |

Horizontal scroll starts between viewport widths 674 and 670. At 674 the client width is 659 and the page does not scroll. At 670 the client width is 655 and the page scrolls to 659.

Each extra title line after the second adds 30px to the heading and pushes the mosaic down 30px. On a 390×320 screen the mosaic is still 634.8×280, but at scroll 0 it starts at y 318.8, so it is below the fold. On 1440×420 the mosaic is still 1120×494 at y 173.2, and Show all photos (y 611.6) is below the fold. Viewport height does not change the mosaic’s size.

Breakpoints:

- **1128px:** `(max-width: 1128px)` matches at 1128 and does not match at 1130. Padding goes from 80px to 40px. The 1+2×2 arrangement stays.
- **743 / 742px:** at 743 the 743px query does not match and the 1+2×2 remains. At 742 it matches and the single fixed photo replaces it.
- **674 / 670px:** the fixed photo starts causing page scroll.
- **880 / 870px:** the title goes from one line to two, and the mosaic moves down 25.6px.

### Non-verified / Assumed

- The used column sizes match a 35:17:17 split of the space left after the gaps. The authored track function was not read, so that formula is inferred from the pixels.
- The stylesheet media text is `(max-width: 743px)`, but `matchMedia` was false at inner width 743 and true at 742. The layout change between those two widths is measured. Why the query misses 743 was not determined.
- At 743px the page is 6px wider than the client width. The overflowing element was not identified. It is not the mosaic.
- At 450px the title was measured once at 3 lines and once at 4. Line counts below two lines are real, but the exact width for 3, 4, 5, and 6 lines is only as tight as the samples above.
- 1920px and 1280px were not remeasured. 2560px matches the same 1120×494 cap already recorded for those widths.
- Scroll-linked stickiness was not tested. The section is in normal flow.
