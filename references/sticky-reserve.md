# Sticky reserve form with offer box

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: sticky reserve form with offer box
Viewport: desktop. Measured at 1440×900, plus desktop widths from 1024px to 1920px. A dedicated mobile layout was not inspected.

The sticky reserve unit is one column: an offer box, a price card, and a “Report this listing” row. It stays 372px wide, sticks 100px below the top of the viewport, and is removed entirely below a 1130px-wide desktop viewport. Copy and listing values are stored in `reserveOffer` in `assets/data.ts`. The offer icon is `discountIcon` in `assets/asset.ts`. The typeface is `airbnbCerealVF`.

## Observed

### Layout

At a 1440px-wide viewport the unit sits in the right column of a two-column grid.

- Section wrapper: `max-width: 1280px`, centered. While the column is visible, horizontal padding is 80px, so the grid’s widest size is 1120px.
- Grid: `652px 372px`, column gap 96px. At 1440px the grid starts about 152px from the left edge of the layout viewport.
- The right column is an `aside`, stretched to the left column’s height (2014px at this width). Its only in-flow child is the sticky unit.
- Sticky unit: 372×506px, `position: sticky`, `top: 100px`. It holds the offer, the card, and the report row.
- There is no `<form>` element. Check-in, checkout, guests, and the price are plain text blocks.

Vertical stack inside the sticky unit:

1. Offer box, 372×70px.
2. 24px gap.
3. Reserve card, 372×366px.
4. 26px gap.
5. Report row, 20px tall, centered. Its top sits 486px below the sticky unit’s top, so it sticks with the card.

### Offer box

White row, 1px-looking border of `rgb(221, 221, 221)` (computed 0.8px), radius 12px, padding 16px, flex, align center, gap 12px.

- Icon: `discountIcon`, drawn at 32×32. `alt=""`, `aria-hidden="true"`. The graphic is a small tag illustration using green `rgb(49, 84, 48)` and `rgb(78, 144, 76)`, white, and beige.
- Copy, 14px / weight 400 / line-height 18.2px / `rgb(34, 34, 34)`: “Get 10% off your next stay.”
- Link on the next line: “Terms apply”. 14px / weight 500, underlined, `href="#"`, `tabIndex` 0.
- Button on the right: “Claim”. 65×34px, padding 8px 14px, radius 8px, weight 500, background `rgb(247, 247, 247)`, text `rgb(34, 34, 34)`.

### Reserve card

White card, radius 12px, border 0.8px `rgba(0, 0, 0, 0.08)`, shadow `rgba(0, 0, 0, 0.12) 0px 6px 16px 0px`, padding `22px 24px 24px`. Inner content width is 322px.

**Price row.** Flex, baseline alignment, gap 6px, margin-bottom 18px.

- “₹28,499” — 22px / weight 500 / line-height 31.46px, underlined, underline offset 2px, color `rgb(34, 34, 34)`. It is a `<span>`, not a link or button.
- “for 5 nights” — 15px / weight 400 / line-height 21.45px, same color, no underline.

**Date and guest box.** 322×117px, radius 8px, overflow hidden, border 0.8px `rgb(176, 176, 176)`.

- Top half is a two-column grid, `160.4px 160.4px`, each cell padding 10px 12px. Checkout has a left border of 0.8px `rgb(176, 176, 176)`, which is the vertical divider.
- Labels “CHECK-IN”, “CHECKOUT”, and “GUESTS”: 10px / weight 700 / letter-spacing 0.4px / line-height 14.3px. The letters are uppercase in the text itself.
- Values “10/18/2026”, “10/23/2026”, and “2 guests”: 14px / weight 400, margin-top 2px.
- Guests row: flex, space-between, align center, padding 10px 12px, top border 0.8px `rgb(176, 176, 176)`.
- Right side of the guests row: a 16×16 chevron pointing down. SVG `viewBox="0 0 32 32"`, stroke `rgb(34, 34, 34)`, stroke width 2px, fill none, `role="presentation"`, `aria-hidden="true"`, `focusable="false"`.

**Cancellation.** “Free cancellation before **17 October**”. Centered, 13px / line-height 18.59px, color `rgb(113, 113, 113)`, background `rgb(247, 247, 247)`, radius 8px, padding 8px, margin 16px 0. “17 October” is a `<b>` at weight 500 and `rgb(34, 34, 34)`.

**Reserve.** `<button type="button" id="reserveBtn">`, text “Reserve”. 322×48px, pill radius 999px, margin-top 2px, padding 0 24px, 16px / weight 500, white text. Fill is `linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)`. Transition: `filter 0.15s, transform 0.05s`.

**Charge note.** “You won't be charged yet”. Centered, 14px / weight 400 / `rgb(113, 113, 113)`, margin-top 16px.

**Report row.** Flex, centered, gap 8px, margin-top 26px. A 16×16 flag icon, fill `rgb(113, 113, 113)`, `role="presentation"`, `aria-hidden="true"`, then the link “Report this listing”, 14px, underlined, `rgb(113, 113, 113)`, `href="#"`.

Computed font on the unit: `airbnbCerealVF`, then Circular, system UI, Roboto, Helvetica Neue, sans-serif. Base size 14px, weight 400, line-height 20.02px, color `rgb(34, 34, 34)`.

### Interaction

- Claim hover: background shifts from `rgb(247, 247, 247)` to `rgb(242, 242, 242)`.
- Reserve hover: gradient darkens to `rgb(216, 27, 95)` → `rgb(195, 26, 91)` → `rgb(189, 4, 99)`.
- Reserve pressed: `transform: scale(0.985)`. The resting gradient returns while pressed.
- Focus-visible on Terms apply, Claim, Reserve, and Report this listing: outline `auto` 0.8px `rgb(229, 151, 0)`. Offset is 0.8px on the links and 0 on the buttons.
- Those four controls are the only tabbable elements in the unit (`tabIndex` 0). Check-in, checkout, guests, and the price are not focusable. Their cursor stays `auto`, and hover does not change their background.
- Activating Claim, Terms apply, the date cells, guests, the price, Reserve, and Report this listing left the URL, the visible copy, and the open dialogs unchanged.
- A Tab key sent while Terms apply was focused did not move focus during this session.

### Scroll (1440×900)

Measurements use the layout viewport. The card’s natural top at scroll 0 is 715.2px.

- Before the stick point, the offer, card, and report scroll away with the page. At scroll 600px the card top is about 115px.
- It locks when scroll reaches 615px. The card top is then exactly 100px. The offer’s top is the same number, because the offer is the top of the sticky unit.
- It stays locked through scroll 2110px. The offer, price card, and report row move together.
- It releases at scroll 2123px. The aside’s bottom meets the card’s bottom (both at 606px), and the card top falls below 100px (99.7px). By scroll 2200px the card top is about 23px. By 2300px it is above the viewport.
- Release position matches `aside top + aside height − card height − sticky top` = 715 + 2014 − 506 − 100 = 2123.
- The page’s root scroll behavior is `smooth`.

A separate fixed bar also exists (height 66.8px, z-index 45, white, bottom border 0.8px `rgb(235, 235, 235)`). On a fresh load at scroll 0 it is translated up by its own height, opacity 0, and `pointer-events: none`. Its visible text is “Photos”, “Amenities”, “Reviews”, “Location”, “₹28,499 for 5 nights”, “4.95 · 19 reviews”, and a smaller “Reserve” button (93×40px, 14px / weight 500, the same pink gradient, pill radius). It does not contain the offer box. Its show and hide timing did not stay stable under programmatic scrolling, so that threshold is listed under Non-verified / assumed.

### Desktop width

The card’s internal size does not change while it is visible: 372px outside, 322px inside, sticky `top: 100px`, offer 372×70. Only the left column and the side inset change.

| Layout viewport | What happens |
| --- | --- |
| 1920 (client 1905) and 1440 | Grid is 652px + 96px + 372px = 1120px, centered inside the 1280px section with 80px padding. |
| 1200 (client 1185) | Still two columns. Left column shrinks to about 557px. Section inset stays 80px. Card stays 372px. |
| 1136 down to 1130 | Card still shown. At 1130 the columns are about 487px + 372px, padding 80px. |
| 1128, 1120, 1100, and 1024 | The `aside` is `display: none`. Width of the offer and card is 0. The grid is one column. Section padding becomes 40px. The offer is not moved under the listing text. |

A requested width of 1129px resolved to an inner width of 1130px, where the column was visible. The changeover is between 1128px (hidden) and 1130px (shown).

## Non-verified / assumed

- The exact CSS breakpoint may be 1129px or 1130px. 1129px could not be applied as a distinct layout width.
- The orange focus ring uses outline style `auto`, so it may be the browser’s default ring rather than a custom ring drawn by the component.
- Terms apply and Report this listing use `href="#"`. Synthetic clicks did not navigate or open a dialog. A trusted pointer click might still differ. Claim, Reserve, the date cells, guests, and the price also produced no visible change.
- Real Tab order was not confirmed. One Tab press left focus on “Terms apply”.
- Date and guest cells look like fields and include a chevron, and their cursor stays `auto`. They behaved as static text in this pass.
- The separate compact bar’s fade-in point is unclear. Instant scrolling left it hidden (opacity 0, translated by −66.8px). After a smooth scroll it was sometimes fully visible at `y: 0` with opacity 1, including after returning to the top, while `pointer-events` flipped to `auto` only once scroll was past roughly 550–650px. Treat its appearance threshold as unresolved.
