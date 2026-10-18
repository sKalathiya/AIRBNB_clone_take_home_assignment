# Listing calendar

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: calendar section on the listing page
Viewport: desktop only. Inspected at a 1440px-wide viewport. Mobile layouts were ignored.

The listing calendar is a static two-month desktop grid in the left column. It shows a preselected stay of **18–23 Oct 2026** (5 nights in Candolim). Month arrows, day cells, and Clear dates can take focus, but they do not change the month or the selection.

Structured stay data was saved as `listingCalendar` in `src/assets/data.ts`. The only font is the existing `airbnbCerealVf` asset. Chevrons and the keyboard glyph are inline icons, so no new image assets were added.

## Observed

### Placement
- At a 1440px-wide desktop viewport, the calendar sits in the left column (`#contentLeft`), **652px** wide, starting about **152px** from the left edge of the viewport.
- The two-column row is **1120px** wide and centered. The right column is **372px** wide, with a **96px** gap after the calendar column. A price card in that column is `position: sticky` with `top: 100px`, so it sits beside the calendar while this part of the page is in view. It shows the same stay: check-in `10/18/2026`, checkout `10/23/2026`, “₹28,499 for 5 nights”. Clicking the calendar did not change those fields.
- The calendar block is the last block in the left column. It follows “What this place offers”. A full-width reviews block begins immediately under the two-column row.
- When this section is scrolled up, a white listing-section bar (Photos, Amenities, Reviews, Location) is `position: fixed` at the top, about **67px** tall, `z-index: 45`. The calendar heading starts just beneath it.

### Section frame
- Wrapper padding is **32px** top and bottom, with no side padding.
- Top divider is **1px solid `#ebebeb`** (`--line-soft`). The block does not draw its own bottom border. The next region supplies the next `#ebebeb` top border.
- Page background is white. Text color is `#222222` (`--ink`) unless noted.
- Font family is `airbnbCerealVf`, then Circular, system UI, Roboto, Helvetica Neue, sans-serif. The face is a variable font, weight axis 200–900.

### Heading and helper copy
- Title: **“5 nights in Candolim”**. It is a `div`, not a heading. **22px**, weight **500**, computed line-height **31.46px**, color `#222222`. The night count and the words are separate text nodes that read as one line.
- Helper line directly under it: **“18 Oct 2026 - 23 Oct 2026”**. **14px**, weight **400**, line-height **20.02px**, color `#717171` (`--muted2`). Margin **6px** above and **22px** below.
- There is no extra sentence such as a minimum-stay note or “select check-in”.

### Month layout
- Two months side by side: **October 2026** and **November 2026**.
- Grid: two **298px** columns, column gap **56px**, `position: relative`. Row gap is 0. Each month block is about **277px** tall.
- A stylesheet rule switches this grid to one column under `max-width: 743px`. That rule was not active at 1440px.
- Month name: **16px**, weight **500**, line-height **22.88px**, centered, color `#222222`, **18px** margin below.
- Weekday row: **S M T W T F S** (week starts Sunday). Each letter is a centered span, **12px**, weight **500**, line-height **17.16px**, color `#222222`. The row is **17px** tall with **6px** margin below.
- Day grid: 7 equal columns. Each cell is square, about **42.6px** (298 ÷ 7), `aspect-ratio: 1`. October uses 5 full rows (**35** cells). November also lays out 5 row tracks, but only **30** day cells are rendered.
- October 2026 starts on Thursday, so the first row has **4** empty leading cells (Sun–Wed). Those cells stay in the grid and are `visibility: hidden`. Trailing empty cells are not rendered. November 2026 starts on Sunday, so it has no leading blanks. 29 and 30 sit alone on the last row.

### Day cells
- Cells are `div`s, not buttons. Text is **14px**, weight **400**, color `#222222`, centered with flex. Default shape is a circle (`border-radius: 50%`). Cursor is `auto`. No `aria-label`, role, `aria-selected`, or disabled state.
- **Available** days, including 1–17 Oct 2026 and dates after the selected range, are plain dark numerals on a transparent circle. **17 Oct 2026** (the inspection date) has no “today” mark.
- **Check-in, 18 Oct:** black circle, background `#222222`, white text. A `::before` bar covers the **right half** of the cell (`width: 50%`, `right: 0`, full height, background `#f2f2f2`, `z-index: -1`), so a gray connector shows from the circle toward the range.
- **In range, 19–22 Oct:** the whole cell is `#f2f2f2` with `border-radius: 0`, so the days form one continuous bar. Numerals stay `#222222`.
- **Checkout, 23 Oct:** same black circle and white text as check-in. The gray `::before` bar is on the **left half** (`left: 0`).
- **Unavailable, November only:** 18, 19, 20, 21, 22, 23, 24, 29, and 30. Color `#dddddd`, `text-decoration: line-through`, circle shape, transparent background. October has no unavailable days.
- No hover style on day cells. A forced hover left the background transparent, the text `#222222`, and the transform unchanged. There is no press scale on day cells.

### Month navigation
- Previous and Next are real buttons, **32×32px**, circle, no border, transparent background, centered. They sit in an absolutely positioned bar (`top: -4px`, full calendar width, space-between): previous at the left edge of October, next at the right edge of November, aligned with the month names.
- Accessible names: **“Previous month”** and **“Next month”**. Neither is disabled on the October/November view. They are not inside a form and have no `type`.
- Each icon is a filled chevron, **12×12px**, `viewBox="0 0 18 18"`, fill `currentColor` (`#222222`). The SVG is `aria-hidden` and `role="presentation"`. Previous points left. Next points right.
- Hover: background `#f2f2f2` (`--grey200`). No shadow, no scale.
- No `:active` transform is defined for these buttons. `transition-duration` is **0s**.
- Clicking Previous and Next focuses the button and does **not** change the visible months. October 2026 and November 2026 stay on screen. ArrowRight and Enter also leave the months unchanged.

### Footer
- **18px** below the grids. A flex row, space-between, **22px** tall, full **652px** width.
- Left: a **30×22px** keyboard glyph. Border **1px solid `#b0b0b0`**, radius **4px**, inline flex, centered. The icon is a stroked keyboard outline, **20×14px**, stroke `currentColor` (`#222222`), stroke width **1.6**, `fill: none`. The wrapper is `aria-hidden`, not a button, and has no click handler. It does not appear in the accessibility tree.
- Right: **Clear dates**. Button, **14px**, weight **500**, underlined, color `#222222`, padding **1px 6px**, transparent background, cursor pointer. Text width is about **87px**. Hover does not change background, color, or underline. It has no separate accessible name beyond the visible text.
- Clicking Clear dates focuses it and does **not** clear the range. The heading stays “5 nights in Candolim” / “18 Oct 2026 - 23 Oct 2026”. The widget dates stay `10/18/2026`–`10/23/2026`.

### Keyboard and focus
- Tab order among calendar controls is Previous month, then Next month, then Clear dates. Day cells are not tab stops (`tabIndex: -1`).
- A global `:focus { outline: none }` rule removes the default ring.
- Pressing **Tab** adds class `kbd` on `body`. Escape and ArrowRight do not add that class and do not change the calendar.
- With `body.kbd` and `:focus-visible`, buttons use a **2px solid `#222222`** outline, **2px** offset, radius **6px**. In this inspection viewport the used outline measured **1.6px** with a **1.6px** offset and radius **6px**. Mouse focus on these buttons is not `:focus-visible`, so the ring does not show after a click even once `kbd` is set.
- The calendar has no grid role, no roving tabindex, no arrow-key day movement, and no Escape behavior. The title is not exposed as a heading.

### Color tokens used here
| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#222222` | Text, selected circle, focus ring, icon stroke |
| `--muted2` | `#717171` | Date-range line |
| `--grey200` | `#f2f2f2` | Range bar, check-in/out connectors, month-button hover |
| `--line-soft` / `--grey300` | `#ebebeb` | Section top border |
| `#dddddd` | `#dddddd` | Unavailable numerals and strike |
| `#b0b0b0` | `#b0b0b0` | Keyboard glyph border |
| `#ffffff` | `#ffffff` | Page, selected-day text, fixed bar |

## Non-verified / Assumed
- The one-column calendar rule under `max-width: 743px` was read from CSS and was not viewed. Desktop at 1440px stays two columns.
- `1px` borders and the `2px` focus outline computed slightly smaller (**0.8px** and **1.6px**) in this browser. The stylesheet values above are the specified sizes. Whether that difference is device-pixel rounding was not isolated.
- Tab was delivered as a DOM key event. It did turn on `kbd`. Native browser tab order between the three buttons was not rechecked with a separate focus walk after that, because the key event did not move focus by itself.
- No tooltip, minimum-night message, or date-picker popover appeared. That these never exist outside this preselected state is inferred from the static render, not from a second empty-state screen.
- The price card showing the same dates is a matching static display. A live binding was not shown, because calendar clicks changed neither surface.
