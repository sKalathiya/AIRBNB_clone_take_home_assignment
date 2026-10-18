# Listing title row

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: title row under the header (property name, Share, Save)
Viewport: desktop baseline, 1440 × 900. Other widths are under Responsive behaviour.

The listing title row is one line directly under the header. It holds the property name on the left and underlined Share and Save buttons on the right. Rating, review count, and location are not in this row.

The font is `airbnbCerealVF` from `assets/asset.ts`. Title-row copy is in `listingTitleBar` in `assets/data.ts`.

## Observed

### Layout

- The row is a horizontal bar, 1120×84px, starting 89px from the top of the page, flush with the bottom of the header.
- It sits in a centered column with a 1280px max width and 80px of horizontal padding, so the row is inset 80px from that column.
- Top padding 32px, bottom padding 18px. The content row is 34px tall (32 + 34 + 18 = 84).
- Flex row, items aligned to the top, spread to opposite ends. The minimum gap is 16px. At this width the free space between the title and the buttons is much larger.
- No border, no background, no shadow.
- The title stays on one line at this width. Save grows to the left when its label changes, and the right edge of the group stays put.

| Piece | Position and size |
| --- | --- |
| Title | 602×30px, left edge of the row, 32px below the header |
| Share | 81×34px |
| Gap between buttons | 2px |
| Save | 75×34px at rest; 84×34px after it is saved |
| Action group | Flush to the right edge of the 1120px row |

### Typography and color

- Title: `airbnbCerealVF` (variable, weight range 200–900, `font-display: swap`), 26px, line-height 30px, weight 500, letter-spacing normal, color `#222222`, antialiased.
- It is the page `h1`. The full visible text is “Romantic Jacuzzi 1BHK Candolim | Mirashya UG10”.
- Share and Save labels: same family, 14px, weight 500, line-height about 18px, color `#222222`.
- Each label is always underlined, with the underline 2px below the text. Underline color matches the text.
- Buttons inherit `#222222`. Resting background is transparent. Hover background is `#f2f2f2`. The saved heart is `#ff385c`.

### Icons

- Both icons are inline, 16×16, in a 32×32 viewBox.
- They are hidden from assistive tech (`aria-hidden`, `role="presentation"`, not focusable).
- There is an 8px gap between the icon and the label.
- Button padding is 8px vertical and 10px horizontal. Corner radius is 8px.
- Share is a stroked upload/share outline. Stroke is `currentColor` (`#222222`), fill is none, stroke width is 2 viewBox units (about 1px on screen).
- Save at rest uses the same stroke treatment and is a heart outline.
- After Save is activated, the heart is filled with `currentColor`, and that color is `#ff385c`. The label changes from “Save” to “Saved”.

### Behavior

- Both controls are `type="button"`, not links. Cursor is pointer. They do not open a dialog or navigate.
- Hover: background fades to `#f2f2f2`. The transition on background is 0.15s. The underline does not change.
- Press: the button scales to 0.96. The transform transition is 0.05s.
- Share shows a fixed status toast reading “Share options”.
- Save toggles. On: label “Saved”, filled `#ff385c` heart, toast “Saved to wishlist”. Off: label “Save”, outline heart in `#222222`, toast “Removed from wishlist”.
- The toast is centered, 32px above the bottom of the viewport, background `#222222`, text `#ffffff`, 14px weight 500, padding 14px 22px, radius 8px.
- It is hidden with opacity 0 and shifted down 20px, then shown at full opacity in its resting position.
- Opacity and position transition over 0.2s. It does not accept pointer events.

### Keyboard and accessibility

- The title is heading level 1. The document language is English.
- Button names come from the visible text: “Share”, then “Save” or “Saved”. There is no `aria-pressed`. The saved state is the label and the filled heart.
- Icons are excluded from the accessible name.
- Feedback is a `role="status"` element.
- Tab order in this row is Share, then Save. A Tab press after Save moves focus to the first photo.
- Mouse focus has no outline (`outline: none` on focus).
- After a Tab key, keyboard focus draws a solid `#222222` ring. The applied rule is 2px outline, 2px offset, and 6px corner radius. With that state forced, the radius computed to 6px. The computed outline width in that check was 1.6px.

### Requested items that sit outside this row

These were checked while looking for a rating, review count, and location in the title row. They are stored as `listingQuickInfoOutsideTitleRow` in `assets/data.ts`. They are not part of this bar.

- Under the photo mosaic: “Entire serviced apartment in Candolim, India”, then “3 guests · 1 bedroom · 1 bed · 1 bathroom”.
- Rating `4.95` and the text “19 reviews” appear in a listing section bar that is above the viewport at scroll 0, and again farther down the page.
- “Candolim, Goa, India” appears in the location area farther down the page.
- A separate pair of icon-only Share and Save buttons sits in the header, not in this row.

## Non-verified / Assumed

- Enter and Space were not confirmed to activate these buttons. A Tab press did move focus; a following Enter press did not change the Share toast.
- How long the toast stays before it hides was not timed. It was visible immediately after the click and hidden on a later read.
- Title wrapping at other widths is recorded under Responsive behaviour. At 1440px it is one line.
- The 1.6px computed focus-ring width versus the declared 2px may be a zoom or subpixel effect. The cause was not isolated.
- The heart and share-glyph reading is from the icon geometry and the saved filled state, not from an icon-font name.

## Responsive behaviour

Measurements are `window.innerWidth` after device-metrics override, height 900 unless noted. A vertical scrollbar was present, so `clientWidth` was `innerWidth − 15` at every successful reading. Odd widths sometimes would not apply (1129, 357, 397, 449). No new image or font URLs were found.

Widths measured: 2560, 1920, 1440, 1300, 1295, 1294, 1200, 1164, 1146, 1132, 1130, 1128, 1000, 900, 872, 871, 860, 850, 800, 744, 743, 742, 680, 640, 580, 552, 551, 520, 519, 480, 450, 448, 440, 418, 416, 400, 398, 396, 390, 375, 366, 360, 358, 356, 330, 320. Also 1440×480 (requested height 420; the viewport reported height 480), then scrolled to `scrollY` 600, and 390×700 at `scrollY` 600.

The only width media rules on the page are `(max-width: 1128px)` and `(max-width: 743px)`.

### Observed

The listing title row keeps the same type size and the same Share/Save placement at every width. It changes in two ways only: the column’s horizontal padding steps down at two breakpoints, and the title wraps from one line to seven as the row gets narrower. The row is not sticky.

What stays constant:

- Title: 26px, line-height 30px, weight 500, font `airbnbCerealVF`. Confirmed computed at a wide viewport and again at innerWidth 400. Every line box stayed 34.4px tall. `text-overflow` is `clip`. There is no line clamp. The title wraps; it does not truncate.
- At scroll 0 the row’s top is `y = 88.8`, flush under a header that is 88.8px tall. The h1’s top is `y = 120.8` (32px below the row top).
- Share stays 81.15×34.4 with a 37.15px label. Save stays 75×34.4 with a 31px label. Gap between them is 2px. Both stay on the same row as the top of the h1. Labels stay visible.
- The gap from the title box to Share shrinks to a 16px minimum, then the title box narrows and wraps. When there is spare room that gap grows (44px at innerWidth 900, about 359px at 2560).
- Above the 1280px column cap, the title stays one line at 602.24×30.

Column and padding:

| innerWidth | clientWidth | Column | Horizontal inset | Title row |
| --- | --- | --- | --- | --- |
| 2560 | 2545 | 1280 wide, x 632.4, centered in the client width | 80 | 1120×84.4, x 712.4, y 88.8, 1 line |
| 1920 | 1905 | 1280, x 312.4 | 80 | 1120×84.4, 1 line |
| 1440 | 1425 | 1280, x 72.4 | 80 | 1120×84.4, x 152.4, 1 line |
| 1295 | 1280 | 1280, x 0 | 80 | 1120×84.4, x 80, 1 line |
| 1294 | 1279 | 1279.2, x 0 | 80 | 1119.2×84.4, 1 line |
| 1200 | 1185 | full client width | 80 | 1024.8×84.4, x 80, 1 line |
| 1130 | 1115 | full client width | 80 | 955.2×84.4, 1 line |
| 1128 | 1113 | full client width | 40 | 1032.8×84.4, x 40, 1 line |
| 1000 | 985 | full client width | 40 | 904.8×84.4, 1 line |
| 900 | 885 | full client width | 40 | 804.8×84.4, 1 line |
| 743 | 728 | full client width | 40 | 648×110, x 40, 2 lines |
| 742 | 727 | full client width | 24 | 679.2×110, x 24, 2 lines |
| 375 | 360 | 360 | 24 | 312×230, x 24, y 88.8, 6 lines |
| 320 | 305 | 304.8 | 24 | 256.8×260, x 24, 7 lines |

The 1280px cap lets go as soon as the client width drops below 1280. That was innerWidth 1294 (client 1279). At innerWidth 1295 the column is exactly 1280 and flush to the client left edge. Wider than that, the 1280 column stays centered in the client width and the row stays 1120 wide. Side space is the only change from 1295 through 2560.

Padding steps:

- 80px inset at innerWidth 1130 and above.
- 40px inset at innerWidth 1128, and from there down through 743.
- 24px inset at innerWidth 742 and below.

`(max-width: 1128px)` was active while innerWidth was 1128, and that is the width where the inset is 40. `(max-width: 743px)` was inactive at innerWidth 743 (inset still 40) and active at innerWidth 742 (inset 24).

Where the title wraps. Section height and h1 height at each line count:

| Lines | h1 size | Row height | Seen at innerWidth |
| --- | --- | --- | --- |
| 1 | 602.24×30 | 84.4 | 872 and every wider measured width |
| 2 | height 60 | 110 | 871 down through 552 |
| 3 | height 90 | 140 | 551, 520, 480, and one reading at 450 |
| 4 | height 120 | 170 | 448, 440, 418 |
| 5 | height 150 | 200 | 416, 400, 398 |
| 6 | height 180 | 230 | 396, 390, 375, 366, 360, 358 |
| 7 | height 210 | 260 | 356, 330, 320 |

Exact switches that held still:

- 872 is one line (row 776.8×84.4, gap to Share 16.41px). 871 is two lines (row 776×110, h1 width 601.85).
- 552 is two lines. 551 is three lines (row 488×140).
- 450 once measured three lines (h1 width 213.05). A later reading at the same innerWidth 450 was four lines (h1 width 212.25). 448 was four lines both times it was checked (h1 width 210.65, row height 170).
- 418 is four lines (h1 width 181.05, row height 170). 416 is five lines (h1 width 178.65, row height 200).
- 398 is five lines (row height 200). 396 is six lines (row height 230).
- 358 is six lines (h1 width 121.05). 356 is seven lines (h1 width 118.65, row height 260).

At 320 the seven lines are the words of the title, with the `|` alone on the fifth line (that line is 6.81px wide). Share and Save sit on the first line’s row. At 375: six lines, h1 137.85×180, row 312×230 at x 24, y 88.8, inset 24, Share/Save unchanged, gap to Share 16px, Save’s right edge 336 inside clientWidth 360.

The title row’s own box stays inside the client width at every measured width. The page does scroll horizontally in two bands:

- At innerWidth 744, `scrollWidth` 734 vs client 729. At 743, `scrollWidth` 734 vs client 728. The title row’s right edge is inside the client width (688 at 743).
- At innerWidth 742, no overflow (`scrollWidth` 727).
- At innerWidth 680, no overflow (`scrollWidth` equals client 665).
- At innerWidth 640 and at every narrower measured width, `scrollWidth` is 659. That includes 520, 400, 390, 375, 330, and 320.

The Save button is the part of this row that leaves its container at the narrow end:

- At 356, Save’s right edge equals the row’s right edge (316.8) and is inside clientWidth 341.
- At 330, Save’s right edge is 315.38, past the row (row right 291.2) and 0.38px past clientWidth 315.
- At 320, Save’s right edge is still 315.38, about 10px past clientWidth 305. Share is still inside. Both labels are still fully visible.

The header’s icon-only Share/Save are not visible at innerWidth 320. The labeled title-row buttons remain visible. Those header icons do not replace this row.

Short viewport: at 1440×480, scroll 0, the row is the same 1120×84.4 box at y 88.8, one line, flush under the header, fully visible. After scrolling to `scrollY` 600, the header’s top is −600 and the row’s top is −511.2. Both leave the viewport by the scroll amount. The same offsets held at 390×700 with `scrollY` 600. The title row does not stick, hide, or sit on top of the header.

### Non-verified / Assumed

- innerWidth 1129, 397, 357, and 449 never applied, so the single pixel between each even pair above was not measured. The switches are bracketed by the even widths that did apply.
- At innerWidth 450 the line count flipped between two readings (3 lines at h1 width 213.05, then 4 lines at h1 width 212.25). Treat 448 as the stable four-line width and 450 as the subpixel edge.
- Why `(max-width: 743px)` turns on at innerWidth 742 rather than 743 is not established. Both the layout and the rule’s active flag were read at those two widths. A one-pixel difference between the media-query viewport and `innerWidth` is a possible explanation, not a measured cause.
- The page’s 659px and 734px horizontal overflow comes from content outside this row. The overflowing nodes were far down the page. Their identity was not fully traced.
- The two-line row is 110px tall, while every later added line adds 30px (140, 170, 200, 230, 260). The reason the first extra line adds 25.6px instead of 30px was not isolated.
- Requested viewport height 420 was reported as innerHeight 480, so heights below 480 were not measured.
