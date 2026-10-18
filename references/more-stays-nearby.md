# More stays nearby

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: More stays nearby (heading, page controls, and the horizontal stay-card row). Header, title bar, photo mosaic, listing description, reviews, sticky reserve widget, photo tour, and lightbox are out of scope.
Viewport: desktop, 1440×900. A vertical scrollbar made the layout width 1424.8px. Mobile layout was not inspected.

The section is the last block in the 1120px listing column. Stay text is stored in `nearbyStays` in `src/assets/data.ts`. Images are `nearbyStay1` through `nearbyStay6` in `src/assets/asset.ts`. The typeface is `airbnbCerealVf`.

## Observed

### Placement

- Last block in the wide listing column, directly under Things to know. The gap between that previous block’s bottom edge and this section’s top edge is 0.
- The centered column has a max width of 1280px, 80px of horizontal padding, and a computed side margin of 72.4px. The section starts 152.4px from the left of the 1424.8px layout viewport.
- Element is a `section`. Measured box: 1120×431.4px. Box sizing is border-box. Display is block. Margin is 0. Padding is 48px 0. Background is transparent.
- Top border is 0.8px solid `rgb(235, 235, 235)`. There is no bottom border and no shadow.
- Inherited text is 14px, weight 400, line-height 20.02px, color `rgb(34, 34, 34)`, font family Airbnb Cereal VF (`airbnbCerealVf`). The loaded face is a variable font, weight range 200–900, style normal, status loaded. The computed stack continues Circular, system UI, Roboto, Helvetica Neue, sans-serif.
- The section has no accessible name and is exposed as a generic container, not a named region.

### Heading row

- A flex row, nowrap, align center, space-between. Width 1120px, height 32px, margin 0 0 20px. It sits on the 48px top padding.
- Heading text is “More stays nearby”. It is an `h2`, exposed as heading level 2. Size 22px, weight 500, line-height 26px, letter-spacing normal, color `rgb(34, 34, 34)`, margin 0. Measured box 188.25×26px, vertically centered in the 32px row.

### Page controls

- The right cluster is a flex row, align center, gap 8px. Box 111.9×32px, flush to the right edge of the 1120px row.
- The page label reads “1 / 2” on the first page and “2 / 2” on the second. It is 14px, weight 400, line-height 20.02px, color `rgb(113, 113, 113)`, margin 0 6px 0 0. Measured about 25.9×20px. With the 8px cluster gap, the space from the label to the previous button is 14px.
- The label is ordinary text. It has no `aria-live`. On page 2 the accessibility tree exposes the fraction as the text pieces “2”, “ / ”, and “2”.
- Two round buttons, each 32×32, flex-centered. Background `rgb(255, 255, 255)`. Border 0.8px solid `rgb(176, 176, 176)`. Radius 50%. Padding 1px 6px. No shadow. Cursor is pointer, including while disabled. The space between the buttons is 8px.
- The type attribute is omitted, so the button type computes to submit. The section is not inside a form.
- DOM ids are `simPrev` and `simNext`. Neither button has an `aria-label`, a title, or any other accessible name. The accessibility tree exposes both as buttons with an empty name.
- Each icon is 12×12, viewBox 0 0 18 18, fill `rgb(34, 34, 34)`, no stroke. The previous icon is a left-pointing chevron. The next icon is a right-pointing chevron. Both icons are `aria-hidden`, role presentation, and not focusable, so they do not name the buttons.
- Enabled opacity is 1. Disabled opacity is 0.3, the disabled property is true, and the button is not focusable.
- Page 1: previous is disabled, next is enabled. Page 2: previous is enabled, next is disabled.
- Resting outline is style none, width 2.4px, color `rgb(34, 34, 34)`, offset 0. Transition is all, duration 0s, ease, delay 0s.

### Card track

- Flex row, nowrap, gap 20px. Width and client width 1120px. Scroll width 1804px. Height 282.6px. Padding 0 0 4px.
- Overflow is auto on both axes. Scrollbar width is none, so no scrollbar is shown. Scroll behavior is smooth. Scroll snap is none. The track is not a tab stop.
- Eight cards. Each card’s flex is `0 0 calc(20% - 16px)`, which computes to 208px wide and does not shrink. A stride is 228px (208 plus the 20px gap). Card starts, from the left of the track: 0, 228, 456, 684, 912, 1140, 1368, 1596.
- The track stretches every card to the tallest card. Every card box is 278.6px tall.

### Card contents

- Each card is a block with margin 0, padding 0, no border, no radius, no shadow, and cursor auto. There is no generated overlay. Each card contains an image, a title, and one price/rating line. There are no links, no buttons, no save icon, no location line, and no review count.
- Clicking a card does not change the URL and does not open a dialog.
- Image: 208×208, radius 12px, object-fit cover, object-position 50% 50%, overflow clip. Loading is lazy. No srcset and no width/height attributes. Natural size 720×480. Alt is empty. Transform and filter are none. Transition duration is 0s.
- Image assignment, in order: `nearbyStay1`, `nearbyStay2`, `nearbyStay3`, `nearbyStay4`, `nearbyStay5`, `nearbyStay6`, `nearbyStay2` again, `nearbyStay4` again.
- Title: margin-top 8px, 14px, weight 500, line-height 20.02px, color `rgb(34, 34, 34)`. Display flow-root, line clamp 2, vertical box orientation, overflow hidden, text-overflow ellipsis. A two-line title box is 40.025px tall; each line box is 18.4px. The title “NAQAB - 1bhk with private pool” fits on one line and its box is 20.0125px. That card still stretches to 278.6px, leaving 20px empty under its rating line. Two-line cards have 0px under the rating line.
- The title is exposed as static text. The card wrapper itself is ignored as uninteresting.
- Price line: margin-top 4px, 13px, weight 400, line-height 18.59px, height 18.6px, color `rgb(34, 34, 34)`. The rupee sign and the amount are adjacent text with no space between them. Then the separator is a space, a non-breaking space, and a space. Then a star. Then one space. Then the rating. No nightly or total qualifier is shown.
- The star is a filled five-point star, viewBox 0 0 32 32, drawn at 10×10, fill `rgb(34, 34, 34)`, no stroke. It is `aria-hidden` and role presentation. Its wrapper is inline-block, 10×10, vertical-align -1px.

### Stay text

In order:

- Beautiful Studio with a view to die for. ₹23,600. 4.91. `nearbyStay1`.
- NAQAB - 1bhk with private pool. ₹42,218. 4.95. `nearbyStay2`.
- Greentique Luxury Flat with plunge pool, Calangute. ₹44,506. 4.94. `nearbyStay3`.
- The Tropical Studio | 5 mins to Beach. ₹22,824. 4.96. `nearbyStay4`.
- Luxury Casa Bella 1BHK with plunge pool, Calangute. ₹39,942. 4.95. `nearbyStay5`.
- Kanso by Earthen Window | Jacuzzi | Terrace | Pool. ₹45,648. 5.0. `nearbyStay6`.
- Luxury Apt | Private Pool | 6 Mins from Beach. ₹48,786. 4.93. `nearbyStay2`.
- Serendipity Cottage - Calm Stay in Calangute-Baga. ₹22,824. 4.92. `nearbyStay4`.

### Carousel behavior

- Page 1 shows cards 1–5 fully. Card 6 starts at 1140px, so it is fully clipped. No card is partially visible.
- A click on next sets `scrollLeft` to 684 and the label to “2 / 2”. 684px is three card strides. Page 2 shows cards 4–8 fully. Cards 4 and 5 are on both pages. Next becomes disabled at opacity 0.3. Previous becomes enabled at opacity 1.
- A click on previous returns `scrollLeft` to 0, the label to “1 / 2”, previous to disabled, and next to enabled.
- A click on the disabled previous button at the start leaves the row in place.
- The label and the disabled state follow scroll position. Moving the scroll position to 684 switches the section to page 2; returning it to the start switches it back to page 1.
- Smooth scrolling means the label updates with the scroll rather than before it.

### Hover, focus, and keyboard

- Hover on a card, its image, its title, and both buttons changes none of background, border, shadow, transform, scale, filter, opacity, or underline.
- The active state of the enabled button matches the resting button.
- Forced focus-visible on the enabled previous button draws outline `rgb(229, 151, 0)` auto 0.8px, offset 0, with no shadow.
- Focus without focus-visible, including programmatic focus, keeps the outline style at none.
- The enabled button can take focus. The disabled button cannot; attempting to focus it leaves focus on the enabled button.
- With the previous button as the active element, Enter does not change the page. Space also does not change the page; after Space, focus is on a link.
- Tab from the preceding “Learn more” link does not move focus in this session.

## Non-verified / assumed

- The price has no unit, so it is not verified whether the amount is per night or a stay total.
- Wheel and trackpad horizontal scrolling of the hidden-scrollbar track were not verified.
- Arrow-key paging was not verified.
- The gold focus ring was measured by forcing focus-visible. A real Tab stop on the button was not achieved here, so that ring was not confirmed from keyboard tabbing.
- Enter and Space did not page the carousel while the previous button was focused. That is what this session showed; a native button click synthesized by the browser was not separately confirmed.
- `scroll-behavior` is smooth, and the page change settled within a few hundred milliseconds. A numeric duration other than that keyword was not measured.
