# Lightbox header

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: the header of the lightbox that opens when any photo inside the Photo Tour scrollable overlay is clicked. URL state is `PHOTO_TOUR_SCROLLABLE` with `modalItem` set to any photo index. The photo tour header, the photo grid, the image viewport, and the left/right arrows are out of scope except where they sit inside or affect this header.
Viewport: desktop, plus responsive behaviour of this header. Measured at 1920, 1440, 1280, 1024, 744, 480, 400, 360, and 320.

The lightbox header is a 72px bar across the top of the Photo viewer dialog. It stays the same from 480px through 1920px wide. Below about 390px, a long room title overlaps the counter.

Asset names refer to `assets` in `src/assets/asset.ts`. Samples for this header are stored in `lightboxHeader`.

## Observed

### Shell

- The bar is a `header` inside the dialog named **Photo viewer** (`role="dialog"`, `aria-modal="true"`). It is absolutely positioned at the top, full width, height **72px**, `z-index: 3`.
- Background is transparent. The dialog behind it is white, `rgb(255, 255, 255)`, so the bar reads as white. No border, shadow, or divider.
- Horizontal padding is **24px**. The row is flex, items vertically centered.
- The header’s own transition duration is **0s**. The dialog fades with **opacity over 0.25s, ease**. Closed state is opacity 0, visibility hidden, no slide. While closed, the title and counter text are empty and `aria-hidden` is true.
- For the two living-room photos measured at 1440px, the photo starts at **y = 88**, so there is a **16px** gap under the bar. The header does not cover the photo.
- No image asset is drawn in the header. Icons are inline graphics. Type uses `assets.fonts.airbnbCerealVf`, then Circular, system UI, Roboto, Helvetica Neue, sans-serif. Text is antialiased. Color is `rgb(34, 34, 34)`.

### Left control

- Button accessible name: **Show all photos**.
- **40×40** circle (`border-radius: 50%`), transparent fill, icon centered. A **-8px** left margin puts the circle **16px** from the viewport edge.
- Icon is an **18×18** filled **3×3 dot grid**, `currentColor`, hidden from assistive tech.
- Cursor is pointer.

### Center title

- Plain text, not a heading and not a control. No accessible name of its own.
- **16px**, weight **500**, line-height **22.88px**, one line, overflow visible (no ellipsis, no wrap).
- Absolutely positioned, `left: 50%`, `translateX(-50%)`, so the text box is centered on the viewport. It also sits on the vertical center of the 72px bar.
- Samples stored in `lightboxHeader`:
  - `modalItem=1000`: **Living room 1**, counter **1 of 43**, photo `assets.images.sleepLivingRoom`
  - `modalItem=1001`: **Living room 1**, counter **2 of 43**, photo `assets.images.tourPhoto2`
  - `modalItem=1042`: **Additional photos**, counter **43 of 43**, photo `assets.images.tourPhoto43`

### Right group

- A flex group with `margin-left: auto`, `align-items: center`, **12px** gap, pinned to the trailing edge.
- Counter text, for example **2 of 43**. **14px**, weight **400**, line-height **20.02px**, color `rgb(34, 34, 34)`. Not a button. No `aria-live` or role. “43 of 43” measures about **51.9×20px**; “2 of 43” about **43.7×20px**.
- Close button, accessible name **Close**. Same **40×40** circle as the grid button, **24px** from the right edge.
- Icon is an **18×18** stroked **X** in `currentColor`, hidden from assistive tech.

### Pointer and keyboard

- Rest: transparent circle.
- Hover: background `rgb(242, 242, 242)`. Background transition **0.16s ease**. No tooltip (`title` is absent).
- Press: scale **0.9**. Transform transition **0.08s ease**. Hover plus press keeps the gray fill and the scale.
- Forced `:focus-visible`: outline style `auto`, width **0.8px**, color `rgb(229, 151, 0)`, offset 0. No shadow.
- Both header buttons are `type="button"`, tab index 0. DOM order is grid button, then close.
- **Show all photos**, **Close**, and **Escape** each dismiss the lightbox the same way: `modalItem` is removed, the viewer hides, and the photo tour stays open (`?modal=PHOTO_TOUR_SCROLLABLE`).

### Responsive

Measured at **1920, 1440, 1280, 1024, 744, 480, 400, 360, and 320**. From **480 through 1920** nothing in the header changes except the free space around the centered title:

| Piece | What stays fixed |
| --- | --- |
| Bar | 72px tall, full width |
| Type | 16px / 500 title, 14px / 400 counter |
| Buttons | 40px circles |
| Insets | 16px left, 24px right, 12px between counter and close |
| Placement | Title centered; counter and close pinned to the right |

No control hides, wraps, or changes size. **Additional photos** plus **43 of 43** still clears the counter at **400px** (about **4.8px** gap) and overlaps it at **360px** (about **15px**) and **320px** (about **35px**). The short title **Living room 1** still clears the counter at **480px**.

## Non-verified / assumed

- Vertical centering of the title is the used result. The title rules set only `left: 50%` and `translateX(-50%)`. The centered vertical position likely comes from the header’s flex alignment, not from an explicit `top`.
- The gold focus ring was measured by forcing `:focus-visible`. A real Tab press in this session did not move focus, and script focus did not match `:focus-visible`, so the live keyboard ring and tab cycle were not re-measured.
- The 16px gap under the bar was measured for the two living-room photos at 1440px, not for every photo.
- Overlap below ~390px is from the longest title seen (**Additional photos**). A longer title would collide sooner.
