# Map section

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: the “Where you’ll be” block on the listing page (heading, place line, map canvas, pin, search and zoom controls, caption, neighbourhood copy, and Show more).
Viewport: desktop. Measured at 1280px, 1440px, and 1920px wide. Mobile layout was not inspected.

Header, mosaic, reviews, calendar, host, and the sticky price widget are out of scope. The listing-section nav is out of scope except that its Location link points at this block.

Copy is stored in `src/assets/data.ts` (`mapLocation`). Body type uses `assets.fonts.airbnbCerealVf`. This block adds no hosted image. The map is drawn with CSS, and the icons are inline.

## Observed

### Placement

The block is a `section` with `id="location"`. It sits in the full content column under the two-column listing area, so it is not beside the price widget.

The page container has `max-width: 1280px`, horizontal padding `80px`, and `box-sizing: border-box`. The map is the full width of that content box.

- At 1440 and 1920 the container is `1280px` and the map is `1120×480`. Section height stays `851px`.
- At 1280 a vertical scrollbar narrows the container to `1265px`. The map becomes `1105×480`. Section height stays `851px`, and the neighbourhood sentence stays one line.

The section’s own padding is `48px 0`. A top rule of `0.8px solid rgb(235, 235, 235)` separates it from the previous section. Background is transparent. It is not a labelled landmark. The only heading inside it is the level-2 title.

### Heading and place

- Heading: “Where you’ll be” (curly apostrophe). `22px` / weight `500` / line-height `26px` / color `rgb(34, 34, 34)` / margin-bottom `24px`. One line, full content width.
- Place: “Candolim, Goa, India”. `16px` / weight `400` / line-height `22.88px` (`1.43`) / color `rgb(34, 34, 34)` / margin-bottom `24px`. A plain div: cursor `auto`, not tabbable, no underline.

### Map frame

`1120×480` at full container width (`1105×480` at a 1280 viewport). `position: relative`, `border-radius: 12px` on all corners, `overflow: hidden`, fallback fill `rgb(232, 238, 240)`. The surface is not a control: no role, no accessible name, cursor `auto`, no drag.

The painted map is one absolutely positioned layer, `inset: 0`:

- Water `rgb(172, 211, 230)` and land `rgb(233, 240, 228)`, split by a `115deg` linear gradient with a hard stop at `34%`. Water is the upper-left; land is the lower-right.
- Two solid park circles, `rgb(207, 227, 200)`: one centered at `30% 40%` with a `6%` radius, one at `70% 60%` with an `8%` radius.
- A grid overlay on top of that fill, opacity `0.5`, cell size `90×90`. Vertical lines are `1px` at `rgba(180, 180, 170, 0.5)`. Horizontal lines are `1px` at `rgba(180, 180, 170, 0.35)`.

There are no street names, scale bar, compass, or map attribution.

### Pin

A `56×56` disc, `border-radius: 50%`, fill `rgb(34, 34, 34)`, color `rgb(255, 255, 255)`. Centered on the frame (`top: 50%`, `left: 50%`, `translate(-50%, -50%)`). Shadow: `rgba(0, 0, 0, 0.3) 0px 4px 12px`.

The icon is a white house outline (roof, walls, and a door). The glyph measures `35×35`. Stroke is `rgb(255, 255, 255)` at `2px`. The svg is `aria-hidden="true"` and `role="presentation"`. The disc itself is a div: cursor `auto`, `tabIndex` `-1`, not a button.

### Search and zoom

All three are enabled buttons with no `type`, not inside a form. Icons are `16×16`, `aria-hidden`, `role="presentation"`, stroke `currentColor` at `2px`, color `rgb(34, 34, 34)`. Shadow on each button: `rgba(0, 0, 0, 0.2) 0px 2px 6px`. Fill `rgb(255, 255, 255)`. No border.

- Search: accessible name “Search”. `40×40`, `border-radius: 50%`, absolute, `12px` from the top and left of the frame. Icon is a magnifying glass.
- Zoom: a column, absolute, `12px` from the top and right, gap `8px`, total `40×88`.
  - “Zoom in”: `40×40`, `border-radius: 8px`, plus icon.
  - “Zoom out”: same box, minus icon.

### Caption and neighbourhood

- Caption, `18px` under the frame: “Exact location will be provided after booking.” `14px` / weight `400` / line-height `20.02px` / color `rgb(34, 34, 34)`. One line. Not a link.
- “Neighbourhood highlights”, `40px` under the caption and `12px` above the sentence. A div, not a heading. `18px` / weight `500` / line-height `25.74px` / color `rgb(34, 34, 34)`.
- Sentence: “Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.” `15px` / weight `400` / line-height `22.5px` (`1.5`) / color `rgb(34, 34, 34)`. One line at every measured width. No clamp.

### Show more

Button, accessible name “Show more”. `inline-flex`, `align-items: center`, gap `6px`, margin-top `18px` (inline, and that is the used value). Width about `104px`, height about `21px`. `16px` / weight `500` / color `rgb(34, 34, 34)` / underline / underline-offset `3px`. Background transparent, no border, no padding. Cursor `pointer`.

A filled right-pointing chevron sits after the words. The icon box is `14×14`, fill `currentColor` (`rgb(34, 34, 34)`).

### Behavior

Tab order inside the block: Search, Zoom in, Zoom out, Show more. The pin and the map surface are not tabbable.

Clicking Search, Zoom in, Zoom out, or Show more focuses the button and changes nothing else. The gradient, pin position, copy, and button label stay the same. No search field, zoom level, dialog, or extra paragraph appears. Show more does not become “Show less”, and the chevron does not rotate.

Hover on Search leaves the white fill, shadow, and transform unchanged. These controls have no hover or active rule of their own.

Mouse focus leaves `outline-style: none` and keeps each button’s own radius.

A Tab key adds `kbd` on `body`. A later pointer click removes it. While `body` has `kbd` and a button is `:focus-visible`, the focus ring is `1.6px solid rgb(34, 34, 34)` with offset `1.6px`, and the button’s radius becomes `6px` for that state. That `6px` replaces the search circle and the zoom `8px` corners while the ring is showing.

`html` uses smooth scrolling, so the Location link (`href="#location"`) is the anchor for this section. Under `prefers-reduced-motion: reduce`, scroll behavior is forced to `auto`. This block has no entrance or hover animation of its own.

## Non-verified/Assumed

- The keyboard ring was measured by forcing `:focus-visible` while `body` already had `kbd`. A Tab key in this session added `kbd` but did not move native focus, so the ring was not watched through a full tab sequence from another control.
- A stylesheet rule sets the pin svg to `26×26`. The painted svg box is `56×56`, and the house glyph is `35×35`. The `26px` declaration does not paint.
- The Show more class rule includes `margin-top: 14px`. The inline `18px` is what paints.
- Below `1128px` the container padding changes to `40px`, which would narrow this full-width block. That viewport was not measured. The `743px` layout was not inspected.
- How much of the control shadow is clipped by the frame’s `overflow: hidden` was not measured. The buttons sit `12px` inside the edge, so the discs and squares themselves are fully inside the rounded frame.
