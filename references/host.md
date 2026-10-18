# Host info block

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: host info row on the listing page (avatar, “Hosted by …”, tenure). The later full-width “Meet your host” section was not measured.
Viewport: desktop, 1440 × 900 CSS pixels. Mobile layout was not inspected.

Assets used here are already in `asset.ts`: `assets.images.hostAvatar` and `assets.fonts.airbnbCerealVf`. Host listing fields are already in `data.ts` under `listingInfo.host`. No new asset or data records were added.

## Observed

### Placement

- Third block in the left column, inside `main`.
- Box: 652×98 px. Left edge at x = 152.4 px in the 1440 px viewport. The row fills the left column; it does not stretch into the price column.
- Background is transparent. The page background behind it is `rgb(255, 255, 255)`.
- The row has no border, radius, or shadow. `border-radius` is 0. Overflow is visible.

### Layout

- Horizontal row, `display: flex`, `flex-direction: row`, `flex-wrap: nowrap`, `align-items: center`, `justify-content: normal` (items start at the left).
- Gap between avatar and text: 16 px (`column-gap` and `row-gap` both 16 px).
- Padding: 26 px top, 26 px bottom, 0 left, 0 right. Margin: 0. `box-sizing: border-box`.
- Content band inside the padding is 46 px tall, which matches the avatar.
- Children: one image, then a text column. No badge, icon, button, link, or bio.
- Text column is only as wide as its text: 203.51×44.89 px. `flex-grow: 0`. Empty space remains to the right inside the 652 px row.
- Avatar box and text column are vertically centered. The text column is about 0.56 px below the avatar’s top edge.

### Avatar

- Asset: `assets.images.hostAvatar`.
- Painted size 46×46 px. Intrinsic size 240×240 px. No `srcset`.
- `object-fit: cover`, `object-position: 50% 50%`.
- Circle: each corner radius is 50%. No border and no shadow.
- The bitmap is a dark green disc, dominant color `rgb(22, 71, 52)`, with a light wordmark. The brightest sampled wordmark pixel is `rgb(255, 255, 254)`. The readable wordmark is “MIRASHYA”.
- `alt` is an empty string. The image is not inside a link or button.

### Text

- Line 1: “Hosted by Mirashya Homes”. One line, does not wrap. The prefix and the name are the same style; the name is not a separate heavier or colored run.
- Line 2: “2 years hosting”. The “2” and “ years hosting” are separate text runs with the same style. `margin-top: 2 px` on this line. No other margin.
- No host role pill, Superhost mark, review count, rating, response rate, or biography in this row.

### Typography

- Family on the row and both lines: `Airbnb Cereal VF`, then Circular, `-apple-system`, BlinkMacSystemFont, `system-ui`, Roboto, `Helvetica Neue`, sans-serif.
- The loaded face is `assets.fonts.airbnbCerealVf`: family “Airbnb Cereal VF”, weight axis 200–900, style normal, status loaded. Used weights here are 500 and 400.
- `-webkit-font-smoothing: antialiased`. `letter-spacing: normal`. `text-align: start`. `text-decoration: none`.
- Line 1: 16 px, weight 500, line-height 22.88 px, color `rgb(34, 34, 34)`. Box height 22.88 px.
- Line 2: 14 px, weight 400, line-height 20.02 px, color `rgb(113, 113, 113)`. Box height 20.01 px.
- The row’s own font (inherited by the avatar element) is 14 px / 400 / line-height 20.02 px / `rgb(34, 34, 34)`.

### Color and contrast

Calculated from the measured colors on `rgb(255, 255, 255)`.

- Name line: 15.91:1.
- Tenure line: 4.88:1.

### Adjacent rules that frame the row

These belong to the neighboring blocks, not to the host row.

- The block above ends with a 0.8 px solid bottom border, `rgb(221, 221, 221)`.
- The block below starts with a 0.8 px solid top border, `rgb(235, 235, 235)`.
- Margin between the host row and each neighbor is 0. The 26 px padding is the space inside those lines.

### Behavior

- Cursor is `auto` on the row, the avatar, and both text lines.
- Forcing `:hover` on the row and on the name line changed no computed property. No color change, underline, scale, or shadow.
- `transition-property: all` and `transition-duration: 0s`. `transform: none`. `opacity: 1`.
- A click on the row left the URL unchanged and opened no dialog. The element under the avatar center is the image itself, not a link or button. After that click, the active element was `body`.
- No focusable descendant: no link, button, input, or tabindex. The row is not in the tab order and shows no focus ring. `outline-style` is `none`.

### Accessibility

- Page language is `en`.
- The row has no role, no accessible name, and no heading level. Its accessibility role is `none`, and the node is ignored as uninteresting.
- Exposed static text: “Hosted by ”, “Mirashya Homes”, and “2”. The tenure container is a generic whose visible text is “2 years hosting”.
- The avatar is ignored because of the empty `alt` (`emptyAlt`). The host name beside it supplies the name in text.
- There is no `aria-label` on the row or its children.

## Non-verified / assumed

- The 22.88 px and 20.02 px line-heights match a unitless 1.43 (16×1.43 and 14×1.43). The pixel values are measured; the unitless token was not read from a stylesheet rule.
- The wordmark color is white at the brightest sampled pixel. Antialiasing means nearby pixels are not a single flat white.
- “Tab skips this row” follows from zero tab stops inside it. Tab was not walked from the top of the page through this region.
- A separate later section titled “Meet your host” also shows this host (larger avatar, a Host label, review and rating stats, and a short bio). It was not part of this Host info row and was not measured.
