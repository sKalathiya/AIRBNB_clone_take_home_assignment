# What this place offers dialog

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: the modal that opens from the “Show all 50 amenities” button in the listing information section.
Viewport: desktop, measured at 1440×900. Mobile layout was not inspected.

No new image or font files belong to this dialog. The typeface is `assets.fonts.airbnbCerealVf`. Amenity names match `listingInfo.amenityGroups` in `src/assets/data.ts`.

## Observed

### Closed state

The dialog is in the page before it opens, inside a full-viewport overlay. The overlay is `opacity: 0`, `visibility: hidden`, and `aria-hidden="true"`. The panel sits 20px below its open position (`translateY(20px)`) and is also `visibility: hidden`. The page behind still scrolls. Nothing is modal yet.

The trigger is the button labeled **Show all 50 amenities**. It has no accessible name beyond that text, and no `aria-expanded` or `aria-controls`. Used size is about **208×48px**. It is 16px / weight 500, color `#222222`, white background, **1px solid `#222222`**, **12px** corner radius, padding **13px 23px**. Hover turns the background `#f7f7f7` over **0.15s**. Pressing it scales to **0.98** over **0.05s**.

### Open position and size

At 1440×900, after the page scrollbar is locked, the panel is **780×804px**, centered at **x = 330, y = 48**. That is `(1440 − 780) / 2` and `(900 − 804) / 2`.

Specified size:

- Width **780px**
- Max width **`calc(100vw - 48px)`**
- Max height **`calc(100vh - 96px)`**
- White background, **12px** radius, no border, no shadow, `overflow: hidden`
- Column flex: a fixed header, then a scrolling body

The overlay is `position: fixed; inset: 0`, `z-index: 150`, flex-centered, background **`rgba(0, 0, 0, 0.5)`** (`#00000080`). No backdrop blur. It sits above the photo tour (`z-index: 120`) and the photo viewer (`z-index: 140`).

### Open and close motion

Sampled while opening:

| Time | Overlay opacity | Panel top |
| --- | --- | --- |
| 0ms | 0, hidden | 68px (`translateY(20px)`) |
| 50ms | ~0.14, visible | ~65px |
| 150ms | ~0.84 | ~51px |
| 300ms | 1 | 48px (`translateY(0)`) |

- Overlay fade: **opacity 0.2s ease**. On open, visibility switches immediately. On close, visibility stays until a **0.2s** delay, then hides.
- Panel slide: **transform 0.25s**, easing **`cubic-bezier(0.2, 0, 0, 1)`**, both directions.
- A `prefers-reduced-motion: reduce` rule sets every transition to **1ms**. That media state was not toggled during this pass.

### Close control

The header is **64px** tall, transparent, with **24px** horizontal padding, and it does not scroll. The only control is a **40×40** round button, accessible name **Close**. A **−8px** left margin pulls it to **16px** from the panel’s left edge and **12px** from the top. The icon is an **18×18** X: two diagonal strokes, round caps, 2px stroke, `currentColor`. No image asset.

Hover background is **`#f2f2f2`** over **0.16s**. Press scales to **0.9** over **0.08s**.

### Scroll body

The body is `overflow-y: auto`, padding **0 48px 48px**. At desktop it is **740px** tall and the content is **3332px**, so it scrolls. The scrollbar is the default one and consumes about **15px**, leaving a content column about **669px** wide. There is no custom scrollbar styling on this region.

The title **What this place offers** is an `h2` inside the scroller, not in the header. It is 22px / weight 500, line box about **31px**, margin **12px 0 24px**. At 1440px it is one line. It scrolls away. The close button stays put.

### Groups and rows

Twelve groups, single column, each with **30px** bottom margin, including the last group. Group titles are `h3`, 18px / weight 500, `#222222`, margin-bottom **4px**.

Each row is a horizontal flex line: **16px** gap, **16px** vertical padding, **1px solid `#ebebeb`** bottom border (including the last row of every group). Label is 16px / weight 400, line-height about **23px**. At 1440px every label is one line. Row height is about **57px**.

Each row has a **24×24** inline SVG icon (`viewBox` 0 0 32, `fill: currentColor`). Icons are `aria-hidden`, `role="presentation"`, and not focusable. There are **44** amenity icons plus the close icon, and **no** `<img>` or hosted image URLs.

**44 items**, in order:

- **Bathroom:** Hairdryer, Cleaning products, Shampoo, Hot water, Shower gel
- **Bedroom and laundry:** Washing machine, Hangers, Bed linen, Room-darkening blinds, Iron, Clothes storage, Cot
- **Entertainment:** TV
- **Family:** Cot
- **Heating and cooling:** Air conditioning, Ceiling fan
- **Home safety:** Exterior security cameras on property, Carbon monoxide alarm, Smoke alarm
- **Internet and office:** Wifi, Dedicated workspace
- **Kitchen and dining:** Kitchen, Fridge, Freezer, Microwave, Cooking basics, Crockery and cutlery, Kettle, Coffee, Wine glasses, Toaster, Blender, Cooker
- **Location features:** Private entrance
- **Outdoor:** Patio or balcony, Outdoor dining area
- **Parking and facilities:** Free parking on premises, Pool, Hot tub, Gym
- **Services:** Pets allowed, Cleaning available during stay, Long-term stays allowed, Self check-in

The trigger says **50**. The dialog renders **44**.

### Unavailable items

**Carbon monoxide alarm** and **Smoke alarm** use a muted color **`#717171`** on both the label and the icon. The label is **`line-through`**. They are not removed, and they are not a lower opacity. Their icons are still single inline SVGs and, on screen, read as struck-out symbols.

### Behavior

- Clicking the trigger opens the dialog. Focus stays on that trigger. It does not move to Close.
- Clicking a heading or row inside the panel does not close it. Rows are not buttons.
- Close button, Escape, and a click on the dimmed overlay all close it. Focus returns to **Show all 50 amenities**. `aria-hidden` returns to `true`. Page overflow returns to `visible`.
- While open, `body` overflow is `hidden`, so the listing does not scroll. Scroll position is kept. Scrolling the amenity list does not move the page.
- The dialog is a `div` with `role="dialog"`, `aria-modal="true"`, and `aria-label="What this place offers"`. It is not a native `<dialog>`.
- The only focusable control inside is Close.
- `:focus { outline: none }` is global. A keyboard ring exists only as `body.kbd :focus-visible`: **2px solid `#222`**, offset **2px**, radius **6px**.
- Pressing Tab adds the `kbd` class on `body`. In that test, focus stayed on Close, and Close did not match `:focus-visible`, so the ring was not drawn.
- The background is not marked `inert`.

### Typography and color

Font stack on the dialog: Airbnb Cereal VF, then Circular, system-ui, Roboto, Helvetica Neue, sans-serif. Ink `#222222`. Muted unavailable text `#717171`. Hairline `#ebebeb`. Overlay black at 50%. Hover gray `#f2f2f2`. Trigger hover `#f7f7f7`.

## Non-verified / assumed

- Whether a real browser Tab is trapped inside the dialog. The Tab test used a DOM key event. Focus did not move, and `:focus-visible` never matched, so the 2px ring was not seen on Close.
- Whether `body`’s `kbd` class is added for every key, or only Tab.
- The exact drawing of icons that were not in view. Only the close X and the icons around Bathroom, Home safety, and Wifi were seen. The rest are the same 24px inline-SVG treatment.
- A roughly 6px page-scroll change when the lock released. Likely scrollbar reflow, not a designed jump.
- Runtime of the reduced-motion rule. The 1ms override is in the stylesheet. The OS setting was not turned on.
