# Things to know

Desktop inspection of `https://airbnb-clone-umber-two.vercel.app` at a 1440×900 CSS-pixel viewport. Measurements are computed styles and element boxes. No image URL in this block. Type uses the existing font asset `assets.fonts.airbnbCerealVf`. Section copy is stored as `thingsToKnow` in `src/assets/data.ts`.

## Observed

### Placement

The block sits in the main column after **Meet your host** and before **More stays nearby**. It is a single section, 1120px wide and 332.7px tall. At this viewport its left edge is 152.4px from the viewport left.

Page background is `rgb(255, 255, 255)`. Text color is `rgb(34, 34, 34)`.

A hairline sits on the section’s top edge: `0.8px solid rgb(235, 235, 235)`. The section’s own bottom border is `0`. The matching line under the block is the next section’s top border, also `0.8px solid rgb(235, 235, 235)`.

While this block is on screen, a sticky listing nav stays above it with **Photos**, **Amenities**, **Reviews**, and **Location**. **Location** is underlined. **Things to know** is not one of those nav items.

### Layout

Section padding is `48px` top and `48px` bottom. Horizontal padding is `0`.

Vertical stack inside the section:

| Piece | Size | Spacing |
| --- | --- | --- |
| Heading “Things to know” | 22px type, 26px line box, 1120px wide | margin-bottom `24px` |
| Three-column grid | 1120×185.9px | one row |

The grid is `display: grid` with columns `352px 352px 352px`, column-gap `32px`, and row-gap `32px`. Only one row is used. Column left edges are 152px, 536px, and 920px.

Each column stacks from the top. Content is left-aligned. Columns are not stretched so the links share a baseline.

Column rhythm, top to bottom:

1. Icon box, 24×24, margin-bottom `18px`
2. Title, margin-bottom `14px`
3. One paragraph per line, each margin-bottom `8px`
4. “Learn more” link, no extra margin

The first cancellation paragraph wraps to two lines (42px). House rules and Safety & property are single-line paragraphs (21px each). Because cancellation has one fewer paragraph, its link sits 8px higher (y 393) than the other two links (y 401). The row height follows the taller columns.

There is no list markup. Each line is its own paragraph.

### Typography

Font family on the section, heading, titles, paragraphs, and links:

`Airbnb Cereal VF`, then Circular, `-apple-system`, BlinkMacSystemFont, `system-ui`, Roboto, `Helvetica Neue`, sans-serif.

The loaded face is the variable font `assets.fonts.airbnbCerealVf`, weight axis 200–900, style normal. Letter-spacing is `normal` everywhere in the block.

| Text | Size | Weight | Line-height |
| --- | --- | --- | --- |
| Section heading | 22px | 500 | 26px |
| Column titles | 16px | 500 | 22.88px |
| Paragraphs | 14px | 400 | 21px |
| Learn more | 14px | 500 | 20.02px |

The heading is the only heading in the section. Column titles are plain text containers, not headings.

### Color

- Text and icons: `rgb(34, 34, 34)`
- Page background: `rgb(255, 255, 255)`
- Section and column backgrounds: transparent
- Dividers: `rgb(235, 235, 235)`
- Link underline: `rgb(34, 34, 34)`, solid, thickness `auto`, offset `auto`
- Keyboard focus ring: `rgb(229, 151, 0)`

### Icons

Three inline icons, one per column. Each is a 24×24 graphic with viewBox `0 0 32 32`, one filled path, fill `rgb(34, 34, 34)`, no stroke, no accessible name. Each is hidden from the accessibility tree (`aria-hidden`, role `presentation`). They are not links.

- Cancellation policy: calendar page with an x in the middle
- House rules: a key
- Safety & property: a shield outline

### Exact copy

Heading: `Things to know`

**Cancellation policy**

- `Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.`
- `Review this host’s full policy for details.`

The apostrophe in `host’s` is U+2019.

**House rules**

- `Check-in after 2:00 pm`
- `Checkout before 11:00 am`
- `3 guests maximum`

The space before `pm` and `am` is U+2009 (thin space).

**Safety & property**

- `Carbon monoxide alarm not reported`
- `Smoke alarm not reported`
- `Exterior security cameras on property`

Each column ends with the link text `Learn more`. The href is `#`. There is no target, rel, aria-label, or tabindex.

### Behavior

The only clickable items are the three `Learn more` links. The cursor is `pointer`. Icons, titles, and paragraphs are not clickable.

Hover, including a forced `:hover` state, leaves every computed style unchanged. The underline, weight, and color stay as they are at rest. `:active` also leaves computed styles unchanged.

`transition-property` is `all`, `transition-duration` is `0s`, and the timing function is `ease`. There is no visible motion.

A mouse click on each of the three links:

- focuses that link
- does not show the amber ring
- does not change the URL or hash
- does not change scroll position
- does not add paragraphs, a dialog, or any other visible panel

Pressing Enter on the focused cancellation link also leaves the URL, scroll position, and section text unchanged.

`:focus` alone does not change computed styles. `:focus-visible` draws a tight amber rectangle around the words:

- outline-style `auto`
- outline-color `rgb(229, 151, 0)`
- outline-width `0.8px`
- outline-offset `0.8px`

That ring was confirmed by forcing `:focus-visible` and by a screenshot. A mouse click focuses the link without that ring.

### Accessibility

- Document language is `en`.
- The section is inside `main`. The section itself is a generic container with no accessible name. It is not a named region.
- `Things to know` is heading level 2.
- Paragraphs are exposed as paragraphs, and their full sentences appear in the accessibility tree.
- Column titles are generic nodes. They are not headings, and the accessibility snapshot does not list `Cancellation policy`, `House rules`, or `Safety & property` as named items.
- All three links have the accessible name `Learn more` and resolve to the same `#` URL. They are focusable. DOM order is cancellation, then house rules, then safety, which matches the left-to-right visual order.
- Icons are removed from the accessibility tree.

### Assets

No image URL belongs to this block. The typeface is `assets.fonts.airbnbCerealVf`, already recorded in `src/assets/asset.ts`. Nothing new was added there.

## Non-verified / Assumed

- Real Tab and Shift+Tab order was not confirmed. A Tab key event in this session did not move focus off the already focused link. The expected order is the three links from left to right, because they are native links with no tabindex, but that key path was not observed.
- The amber ring was observed under forced `:focus-visible`, and it was absent after a mouse click. It was not observed from a real keyboard Tab into the link.
- Column-title text may still be read as static text by a screen reader. The title containers have child nodes, but those text nodes were not returned in the accessibility tree, so announcement is unverified.
- The dates `17 October` and `18 October` match the inspection date and the following day. Whether they are generated from the current date was not checked on another day.
- Computed border and outline widths of `0.8px` are reported as measured. They look like a 1px hairline on screen. Whether `0.8px` is the authored value or a subpixel reporting result was not verified.
- The 152.4px left offset at a 1440px viewport is consistent with a centered 1120px column beside a scrollbar. Scrollbar width was not measured on its own.
- House rules and Safety & property links were confirmed visually and by click. Their computed font, underline, and focus values were measured on the cancellation link and matched by appearance, not by a second computed-style dump.
- Empty dialog shells exist elsewhere on the page for other UI. They were not opened by these links. Their purpose was not inspected.
