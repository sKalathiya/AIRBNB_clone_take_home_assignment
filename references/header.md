# Header

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: listing-page header only (logo, search mock, account cluster)
Viewport: desktop, 1440 × 900. Mobile layout was not inspected.
Measured with a vertical scrollbar present, so the used layout width was 1425px.

## Observed

### Layout

- The header is the first `header` on the page. It sits at the top of the document and is not sticky.
- Specified: `position: relative`, `z-index: 50`, `background: #fff`, `padding: 0 80px`, `border-bottom: 1px solid var(--line-soft)`.
- `--line-soft` resolves to `#ebebeb`. Computed border color is `rgb(235, 235, 235)`. Computed border thickness was `0.8px` at this viewport.
- Computed header box: x 0, y 0, about 1425 × 89px (content row 88px plus the bottom border).
- After scrolling 700px, the header’s top was −700px. It moves away with the page.
- Inner row: height 88px, `display: grid`, `grid-template-columns: 1fr auto 1fr`, `align-items: center`.
- Three columns, no column gap. Computed tracks at this width were about 431px, 403px, and 431px.
- Left column is the logo, aligned to the start. Middle column is the search, aligned to the center. Right column is the account nav, aligned to the end.
- Logo box: x 80, y 28, 103 × 32px.
- Search box: x 511, y 20, about 403 × 48px. Its center matches the center of the header.
- Account nav: x 1124, y 22, about 221 × 44px. `display: flex`, `align-items: center`, `column-gap: 8px`.

### Typography

- Loaded face: Airbnb Cereal VF, variable, weight axis 200–900, status loaded.
- Computed stack: `"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif`.
- Header base: 14px, weight 400, line-height 20.02px, letter-spacing normal, color `rgb(34, 34, 34)` (`#222222`).
- Document language: `en`.

### Colors read from declarations

| Token           | Value     | Where it is used     |
| --------------- | --------- | -------------------- |
| `--line-soft`   | `#ebebeb` | Header bottom border |
| `--line`        | `#dddddd` | Search pill border   |
| page background | `#fff`    | Header background    |

Other computed colors, listed with the control that used them:

| Color                 | Where                                          |
| --------------------- | ---------------------------------------------- |
| `#222222`             | Default text, Anywhere, Anytime, Become a host |
| `#717171`             | Add guests label                               |
| `#ff385c`             | Logo fill and search-button fill               |
| `#dddddd`             | Search dividers                                |
| `#f2f2f2`             | Language and menu buttons at rest              |
| `#ebebeb`             | Language and menu buttons on hover             |
| `#f7f7f7`             | Become a host on hover                         |
| `rgba(0, 0, 0, 0.08)` | Search shadow at rest                          |
| `rgba(0, 0, 0, 0.12)` | Search shadow on hover                         |
| `rgb(229, 151, 0)`    | Keyboard focus outline                         |

### Logo

- Link, accessible name “Airbnb homepage”, `href="#"`.
- Inline Bélo plus wordmark, one SVG, 103 × 32px. Fill `#ff385c`. No image request for the logo.
- No separate accessible text besides the link name. The SVG is not a separate control.

### Search mock

- Container: `role="search"`, `inline-flex`, height 48px, padding `0 8px`, `align-items: center`.
- Border: `1px solid var(--line)`, radius 40px.
- Shadow at rest: `0 1px 4px #00000014` (computed `rgba(0, 0, 0, 0.08) 0px 1px 4px 0px`).
- Transition: `box-shadow 0.2s ease`.
- Hover on the pill: shadow becomes `rgba(0, 0, 0, 0.12) 0px 2px 8px 0px`. Background stays white.
- There is no text field and no form. The pill is four controls in a row.

Segments, left to right:

1. Button, text “Anywhere”. 14px, weight 500, color `#222222`. Height 48px, horizontal padding 16px, radius 40px, `column-gap: 8px`. A house image sits on the left.
2. Divider, 1 × 24px, fill `#dddddd`, vertically centered in the pill.
3. Button, text “Anytime”. Same size, weight, and color as Anywhere. Width about 88px.
4. Divider, same 1 × 24px mark.
5. Button, text “Add guests”. 14px, weight 400, color `#717171`. Width about 106px.
6. Button, accessible name “Search”. 32 × 32px circle, fill `#ff385c`, `margin-left: 8px`. A white magnifying glass, 14 × 14px, is centered in the circle. Forcing `:hover` on this button did not change its computed style.

House image:

- Rendered 48 × 48px, natural size 240 × 216, `object-fit: fill`, `margin-left: -6px`.
- Alt text is empty. The button’s accessible name is the visible word “Anywhere”.

Search buttons are `type="button"`. None has `aria-expanded`, `aria-haspopup`, or `aria-controls`.

### Account cluster

Order inside the nav:

1. Link, text “Become a host”, `href="#"`. 14px, weight 500, color `#222222`, padding `12px 14px`, radius 22px, transparent background. Hover background `#f7f7f7`. Transition `background 0.18s ease`. Box about 125 × 44px.
2. Button, accessible name “Choose a language and currency”. 40 × 40px circle, background `#f2f2f2`, hover background `#ebebeb`, same 0.18s background transition. Icon is a 16 × 16px globe, `viewBox="0 0 16 16"`, fill `currentColor`, `aria-hidden="true"`, `role="presentation"`.
3. Button, accessible name “Main navigation menu”. Same 40 × 40px circle, rest color, hover color, and transition as the language button. Icon is a 16 × 16px hamburger: three straight horizontal lines in a 32 × 32 viewBox, stroke `currentColor`, stroke width 3, fill none, `aria-hidden="true"`, `role="presentation"`. There is no avatar image in the header.

### Click behavior

Clicked on the desktop header:

- Anywhere
- Anytime
- Add guests
- Search
- Choose a language and currency
- Main navigation menu

Each click moved focus to that control and marked it active. None of them opened a panel, menu, dialog, or input. The URL did not change. The page text does not contain “Log in”, “Sign up”, “Help Center”, “Messages”, “Trips”, or “Wishlists”.

`aria-expanded` stayed unset on the menu button after the click.

Escape was pressed while no header overlay was open. The page stayed on the same URL.

### Focus

Forcing `:focus-visible` on the logo, Anywhere, Search, Become a host, and the menu button produced an outline:

- `outline-style: auto`
- `outline-color: rgb(229, 151, 0)`
- `outline-width: 0.8px`
- Logo and Become a host also used `outline-offset: 0.8px`. The other tested controls kept offset `0px`.

Clicked controls received DOM focus. Cursor is `pointer` on the buttons and on Become a host.

### Nearby control, outside the header

- The first control on the page is a link named “Skip to content”.
- Its box is off-screen at x −999, y 0, about 131 × 40px.
- It is not inside the header.

## Non-verified / Assumed

- Padding, search width, and column sizes at other widths are recorded under Responsive behaviour.
- A full Tab walk was not completed. DOM order of the header controls is logo, Anywhere, Anytime, Add guests, Search, Become a host, language, menu. That is the likely tab order, and it was not confirmed key by key.
- Whether the skip link becomes visible when it receives focus was not tested.
- Pointer focus (mouse click without `:focus-visible`) was not measured separately from the forced keyboard-focus outline.
- Hover was not forced on Anytime or Add guests. Anywhere and the red Search button showed no computed hover change. The pill, Become a host, language button, and menu button did.
- `:active` styles were not measured.
- Become a host was not clicked. Its `href` is `#`. Whether that click scrolls, focuses something else, or opens UI was not tested.
- Escape was only pressed when no header menu was open, because no header menu opened. A close-on-Escape behavior for a profile menu was not available to test.
- Text colors were matched to page tokens by value (`#222222`, `#717171`). The specified declarations for those text colors were not read, so the token names for text are inferred from the match.
- The hamburger is the profile-menu mock named in the project spec. On this page it does not reveal a dropdown.

## Responsive behaviour

A 15px vertical scrollbar was present at every width, so the used layout width is the viewport minus 15. Height stayed 900. The 1440 × 900 baseline above is the comparison point.

### Observed

The listing header stays one 88.8px bar. It changes by widening the side columns, then compressing the account cluster and search, and then hiding the search and “Become a host”.

What stays the same from viewport 640 through 2560:

- First header, `position: relative`, `z-index: 50`, background `rgb(255, 255, 255)`, padding `0 80px`, border-bottom `0.8px solid rgb(235, 235, 235)`. Height stays 88.8px. It does not become sticky.
- Inner row stays a single grid, `align-items: center`, column gap `normal` (0). Header `overflow` stays `visible`. Row height stays 88px.
- Type stays `airbnbCerealVF` at 14px (confirmed on the header at 640, 1120, and 2560). “Anywhere” and “Anytime” stay 14px / weight 500, `rgb(34, 34, 34)`. “Add guests” stays 14px / weight 400, `rgb(113, 113, 113)`. “Become a host” stays 14px / weight 500, line-height 20.02px, padding `12px 14px`, while it is shown.
- Logo stays 103.4 × 32, color `rgb(255, 56, 92)`. Language and menu icons stay 16 × 16. Their buttons stay `rgb(242, 242, 242)` with a 50% radius.
- `searchbarHouse` stays 48 × 48 (natural 240 × 216) inside “Anywhere”. “Anywhere” stays 149.3 × 48 and “Anytime” stays 88.4 × 48 at every width where the search pill is shown.
- No header control wraps onto a second header row. The header box itself does not clip.

No media-query restyle was seen in padding, border, type size, colors, or header height. The changes below are grid and flex constraints, plus one display change at 742px.

While the inner row is narrower than its 1760px max-width, the row fills the padded area (starts at x 80) and the tracks stay equal: `(header width − 160 − 403.125) / 2` on each side, center track 403.125px. Search stays 403.1 × 48 at y 20. Account cluster stays 221.3 × 44 at y 22, gap 8px. Logo y stays 28.

| Viewport | Used width | Header box | Side tracks | Logo x | Search x | Account x |
| --- | --- | --- | --- | --- | --- | --- |
| 1920 | 1905 | 1904.8 × 88.8 | 670.8 | 80 | 750.8 | 1603.5 |
| 1536 | 1521 | 1520.8 × 88.8 | 478.8 | 80 | 558.8 | 1219.5 |
| 1280 | 1265 | 1264.8 × 88.8 | 350.8 | 80 | 430.8 | 963.5 |
| 1120 | 1105 | 1104.8 × 88.8 | 270.8 | 80 | 350.8 | 803.5 |
| 1024 | 1009 | 1008.8 × 88.8 | 222.8 | 80 | 302.8 | 707.5 |
| 1022 | 1007 | 1007.2 × 88.8 | 222.0 | 80 | — | still 221.3 × 44, one line |

At 1024 the search and the account cluster almost meet (about 1.6px between them). Nothing overflows the header. Nothing is hidden.

The row’s `max-width: 1760px` is already set at 1120, where the used row width is 944.8px. It starts to bind when the header is 1920px wide:

- Viewport 1935, header 1920, row exactly 1760 at x 80, margin 0. Tracks 678.4 / 403.1 / 678.4.
- Viewport 1936, header 1920.8, row 1760 with 0.4px side margins. Logo x 80.4.
- Viewport 2560, used width 2545, header 2544.8. Row stays 1760, centered with margin `0 312.4px`. Logo x 392.4, search x 1070.8, account x 1931.1. Sizes match the 1440 baseline. `max-width` on the header itself is `none`.

Account cluster compresses below 1022. Observed at viewport 1020 (used width 1005, header 1004.8). The right track is 220.8px, just under the cluster’s 221.3px content width. Flex shrink (`flex: 0 1 auto` on the cluster and its items) does this:

- “Become a host” wraps to two lines and the cluster grows to 64px tall, y 12. Line boxes at 900, and the same 64.9px / 29.3px line sizes at 960 and 880: first line “Become a”, second line “host”.
- Icon buttons shrink in width only. Height stays 40. The 16px icons stay centered.

It keeps shrinking until a floor, then the side tracks stop being equal.

- Viewport 935 (header 920): tracks still equal, 178.4 / 403.1 / 178.4. Cluster about 178.4 × 64.
- Viewport 934 (header 919.2): tracks unequal, 177.8 / 403.1 / 178.3. Right track locks at 178.25px. Cluster floor is 178.3px: host link 98 × 64, each icon button 32.1 × 40, gap still 8px.
- Viewport 916: tracks 159.4 / 403.1 / 178.3. Search still 403.1. Right padding still 80. Logo-to-search gap 56px.
- Viewport 880: tracks 123.4 / 403.1 / 178.3. Logo-to-search gap 20px.
- Viewport 864: gap 4px. Search still 403.1. “Add guests” still one line. Search circle still 32 × 32.
- Viewport 860 (header 844.8): logo and search touch (gap 0). Left track 103.4px, the logo width. Search still 403.1.

Search pill compresses below 860.

- Viewport 858: search 401.6px. “Add guests” wraps to “Add” / “guests”. Search circle 31.7 × 32.
- Viewport 856: search 399.1. Circle 31.2 × 32.
- Viewport 832 (header 816.8): search 375.1. “Add guests” 84.3. Circle 26.2 × 32. Right padding still 80.
- Viewport 828 (header 812.8): search reaches a floor of 372.8. “Add guests” 82.5 × 48. Circle 25.7 × 32. Right padding starts to drop (78.4px). “Anywhere”, “Anytime”, and `searchbarHouse` do not shrink. Dividers, 1px at the 1440 reading, were 0.7px at 800.

From 828 down to 743 the left block is frozen: logo at x 80, search at x 183.4 and 372.8px wide, account at x 556.2 and 178.3px wide (right edge 734.4). Further narrowing only shrinks the header over that frozen row.

- Viewport 800 (header 784.8): right inset 50.4px. Search circle’s `::before` box matches the button, 25.7 × 32, so the glyph stretches with the button. The search glyph is a data-URI icon, not a hosted asset.
- Viewport 752 (header 736.8): menu still inside the header by 2.4px.
- Viewport 744 (used width 729, header 728.8): menu right edge 734.4, 5.6px past the header. Header overflow is `visible`, so it paints outside the bar. Viewport 743 still uses this same floor (search `display: flex`, host `display: block`, columns `103.4 / 372.75 / 178.25`).

Narrowest width tested: 640 × 900. The control set changes at 1px:

- Viewport 743: search pill and “Become a host” are shown.
- Viewport 742 and below: that search is `display: none` and “Become a host” is `display: none`. Language and menu return to 40 × 40, gap 8px, cluster 88 × 40 at y 24.

At 700, 732, and 640 the same reduced bar is in place. At 640 (used width 625, header 624.8):

- Padding, border, height, logo size, logo color, and type match the wider bar.
- Tracks 188.4 / 88 / 188.4. The 88px middle track is the icon cluster, centered (x 268.4). Logo still at x 80, y 28.
- No header control leaves the header.

Hover, focus, click, and keyboard were not retested at each width. Nothing in the computed layout suggests those interactions change while the same controls are shown.

At viewport 742 and below, the four search controls and “Become a host” are `display: none`. The logo, language button, and menu button remain. Tab order was not walked.

`searchbarHouse` is the house image in “Anywhere”. The header type is `airbnbCerealVF`. No new listing record was added.

### Non-verified / Assumed

- Viewport 1021 was requested and did not apply (`innerWidth` stayed 1022). The wrap is observed at 1020 and absent at 1022.
- The exact media-query text was not read. The display switch is observed between viewport 743 and 742 only.
- Search border and shadow were read at the 1440 comparison pass and at 1920 (`0.8px solid rgb(221, 221, 221)`, shadow `rgba(0, 0, 0, 0.08) 0px 1px 4px`). They were not re-read at every width.
- Font family was read at 640, 1120-equivalent row checks, and 2560. Matching text widths at the other sampled widths are the evidence it did not swap.
