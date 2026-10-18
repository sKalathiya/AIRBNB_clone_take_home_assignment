# Scroll header

The bar that slides in over the page after the photo mosaic. Font is `assets.fonts.airbnbCerealVf`. No new hosted image was added. The star is an inline mask, not a file in `asset.ts`. Listing labels for this bar are stored as `scrollHeader` in `src/assets/data.ts`.

## Observed

### When it appears

- The bar is in the page from the start, fixed to the top, and held fully above the viewport. It does not take space in the document flow.
- While hidden it does not receive pointer events, and it is removed from the accessibility tree (`aria-hidden="true"`).
- It becomes available once the bottom edge of the photo mosaic (the region named “Photos of this place”) is about **38–39px** below the top of the viewport. At a 1440px-wide viewport that was scroll position **628px**. Scrolling back up hides it again within about **2px** of that same point (last visible at 626px).
- Showing and hiding animate together: the bar moves from fully above the viewport to flush with the top, and fades from transparent to opaque. The motion is **250ms**, easing. A timed sample reached the top at **249ms**.
- The scroll distance changes when the mosaic moves or changes height. The 38–39px relationship to the mosaic bottom stayed the same at every width tested (1600, 1440, 1280, 1136, 1128, 1024, 800, 744, 720, 680, 600, 480).
- Escape does not dismiss it. It stays for as long as the scroll position stays past that line.
- The document sets smooth scrolling, and it sets transition duration to **1ms** when the user prefers reduced motion. A live reduced-motion timing check in this session did not produce a clean before/after sample.

### Desktop layout (1440px wide)

Viewport layout width was 1440px; the content width inside the scrollbar was 1425px.

- White bar, full viewport width, **66px** tall plus a **1px** bottom border. Total visible height about **67px**.
- Background is white. The bottom border is `#ebebeb`. It sits above the page content.
- Inner row is centered, max width **1280px**, horizontal padding **80px**, height **66px**. The row is a horizontal flex line with the two ends pushed apart and the items vertically centered.
- Left group is a navigation landmark named **“Listing sections”**.
- Four text links, in order: **Photos**, **Amenities**, **Reviews**, **Location**. They point at `#photos`, `#amenities`, `#reviews`, and `#location`.
- Link gap is **4px**. Each link is **14px**, weight **500**, color `#222`, line-height about **20px**, padding **22px 8px**. Link boxes are **64px** tall and sit **1px** inside the top and bottom of the 66px row.
- Measured link widths at this size: Photos **62px**, Amenities **83px**, Reviews **70px**, Location **73px**. The group is **300px** wide.
- The current link has a **2px** `#222` underline. It is inset **8px** from the left and right of the link and sits **12px** up from the bottom of the link, so it lines up with the word rather than the full bar.
- At rest, before any section has crossed the activation line, **Photos** is the current link.
- Right group, gap **20px**, vertically centered:
  - Price block, right-aligned, **127px** wide, **36px** tall.
  - First line: **₹28,499** at **15px** weight **500**, then about **3px**, then **for 5 nights** at **13px**, color `#222`. The two phrases share one line; the smaller phrase sits on the same baseline.
  - Second line, **2px** below: an **11×11** star, then **4.95**, a middle dot (**·**), then **19 reviews**. This line is **13px**, color `#222`. The star is vertically centered on that line.
  - **Reserve** button: pill (**999px** radius), **40px** tall, about **93px** wide, horizontal padding **20px**, label **14px** weight **500**, white, centered. Fill is a left-to-right gradient: `#e61e4d` → `#e31c5f` → `#d70466`. No border, no shadow.

On a wider viewport (1600px) the inner 1280px row stays centered, so the links and the price move inward together. Side padding stays **80px**. Nothing new appears.

### Section underline

- While scrolling, the underline moves when a section’s top crosses about **118px** from the top of the viewport (about **51px** below the bar).
- Measured switch points at 1440px: Amenities at scroll **1739px** (section top **118px**), Reviews at **2611px** (top **119px**), Location at **3960px** (top **119px**).
- Scrolling back up returns the underline to the previous link at the same line (Amenities gave Photos back with the section top at about **121px**).
- Only one link is underlined at a time. The current link has no `aria-current`.

### Click, hover, and press

- Links use the pointer cursor. Buttons use the pointer cursor.
- Hovering a section link changes its text from `#222` to `#000`. The underline does not appear on hover. It stays only on the current section.
- Hovering **Reserve** keeps the white label and switches the gradient to `#d81b5f` → `#c31a5b` → `#bd0463`.
- Pressing **Reserve** scales it to **0.985**. The press transition is **50ms** on transform. The hover color transition is **150ms** on filter; the gradient itself changes immediately.
- Clicking **Photos**, **Amenities**, **Reviews**, or **Location** scrolls that region so its top rests about **80px** below the viewport top (about **13px** below the bar). Confirmed landings: Amenities **80px**, Reviews **80px**, Location **80px**. The underline updates to the clicked section. The address bar does not gain a hash.
- Clicking **Reserve** focuses that button. It does not scroll, change the URL, or open a dialog.
- Clicking the price and rating text does not scroll or navigate.
- There is no `scroll-margin` rule on the sections. The **80px** landing offset is the click behavior.

### Keyboard and accessibility

- The bar exposes a navigation landmark, **“Listing sections”**.
- Each section control is a link in normal tab order. **Reserve** is a button named “Reserve”, with no extra accessible name. The star is hidden from assistive technology. The rating line is text, not a link.
- While the bar is hidden, it is marked `aria-hidden="true"` and is not a pointer target.
- Pressing Tab marks the page so later focus is visible. A focused link or button then gets a solid `#222` outline, **2px** in the stylesheet with a **2px** offset, and **6px** corner radius. In this session the used outline width and offset computed as **1.6px** while the radius stayed **6px**.
- Mouse focus is suppressed: the page removes the default focus outline until keyboard use.
- The links can be focused when the bar is showing. Photos was focused from the keyboard, and clicking a link moved focus to that link.

### Responsive behaviour

The bar has no rules of its own inside the page’s 1128px or 743px breakpoints. Its padding, type size, and controls stay as on desktop. What changes is the free space, the mosaic that triggers it, and how the bar lines up with the page.

| Viewport width | What the bar does |
| --- | --- |
| 1600 and 1440 | Inner row is **1280px**, centered, **80px** side padding. Links, price, and Reserve sit on one line with a wide gap between the links and the price. |
| 1280 | The row becomes full width. Side padding stays **80px**. Gap between Location and the price is about **565px**. |
| 1136 (just above the 1128 breakpoint) | Page title and mosaic start at **80px**, same as the links. Mosaic bottom is **597px**; the bar appears at scroll **559px**. |
| 1128 and 1024 | Page title and mosaic move to **40px** from the left. The bar’s links stay at **80px**, and Reserve’s right edge stays **80px** in from the right. The bar’s content is **40px** further inset than the title and the mosaic on both sides. One line, no overlap. At 1024 the gap between Location and the price is about **309px**. The bar appears at scroll **544px** because the mosaic is shorter. |
| 800 and 744 | Still one line, padding **80px**. Gap between Location and the price shrinks to about **85px** at 800 and about **29px** at 744. |
| 720 (743px breakpoint active) | The mosaic becomes a single image, **280px** tall, starting **24px** from the left. The bar still uses **80px** padding, so its links start **56px** to the right of the title. Gap between Location and the price is about **5px**. The bar still appears when the mosaic bottom is about **39px** from the top of the viewport (scroll **440px** here). |
| 680 | Location and the price block meet. Gap is **0**. They do not overlap yet. Padding is still **80px**. |
| 600 | The price column shrinks to about **57px** and its text wraps into a right-aligned stack. **₹28,499** is pushed above the bar. **for 5 nights**, the star, **4.95**, **19**, and **reviews** stack downward and **reviews** spills below the 67px bar onto the page. The bar does not grow and does not clip this text. **Reserve** stays a **40px** pill, vertically centered. The four links stay on one line at the same sizes. |
| 480 | The links still start at **80px** and Location still ends at **380px** inside a **465px** bar. The price stays crushed against Location. **Reserve** starts near the right edge and extends about **85px** past the viewport, so most of the button is off-screen. |

Across these widths the link labels, price text, star, and Reserve label stay visible. They are not replaced, iconified, or removed. Link height stays **64px** and the bar stays **66px** plus the border until the price text overflows it.

## Non-verified / Assumed

- The exact scroll listener (intersection observer versus a scroll-position check) was not isolated. The visible rule is the mosaic-bottom measurement above.
- Why the used focus outline was **1.6px** while the stylesheet says **2px** was not separated from the inspection environment. The ring color, solid style, and **6px** radius were confirmed on the focused link.
- Section-link clicks are covered by the document’s smooth-scroll setting. Intermediate frames of that scroll were not captured, so the ease of the jump itself was not timed.
- Reduced-motion timing for this bar was not confirmed live. Only the stylesheet rule (transition duration forced to **1ms**) was confirmed.
- Hover and press were confirmed with forced pointer states and computed color, gradient, and scale. A separate cursor-in-the-screenshot pass was not done.
- At 600px and 480px, whether the overflowing price text is intentional was not judged. The overflow, wrap, and off-screen button were visible.
