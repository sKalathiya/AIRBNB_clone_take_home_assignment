# Meet your host

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: Meet your host block, including the co-host section. Header, photo mosaic, reviews list, sticky reserve widget, photo tour, and lightbox are out of scope except where they overlap this block.
Viewport: desktop, 1440px wide. Mobile layout was not inspected.

The block sits in the 1120px content column, after “Where you’ll be” and before “Things to know.” Host copy is stored in `meetYourHost`. New photos are `cohostAvatarSharath`, `cohostAvatarAman`, `cohostAvatarMaria`, and `cohostAvatarSimran`. Pallavi reuses `reviewAvatarAheesh`. Sanyukta reuses `reviewAvatarSamiksha`. The host portrait is `hostAvatar`. Type uses `airbnbCerealVf`.

## Observed

### Layout

The section is 1120px wide and about 562px tall. Padding is 48px on the top and bottom. A 0.8px solid `rgb(235, 235, 235)` rule runs along the top. The following “Things to know” section repeats that same top rule, so the two blocks meet flush.

The heading “Meet your host” is an `h2`, full column width, with 24px of space under it.

Under the heading, a two-column grid is top-aligned: `340px` and `732px`, with a 48px column gap.

### Left column

- Host card, 340×260px. Padding 30px top and bottom, 24px on the sides. Corner radius 20px. Border 0.8px solid `rgba(0, 0, 0, 0.08)`. Shadow `rgba(0, 0, 0, 0.12) 0px 6px 16px 0px`. The card background computes as transparent; the page background is white, so the face reads as white. Overflow is visible, so the shadow is not clipped.
- Inside the card, a grid of `190.4px` and `100px`, vertically centered.
- Identity side is center-aligned. The portrait box is 88×88, `position: relative`, centered with 51.2px of space on each side, and 12px under it.
- Portrait: `hostAvatar`, displayed 88×88, circle, `object-fit: cover`. Source image is 240×240. Alt text is empty.
- A verified badge sits on the portrait’s lower right: a 28×28 circle, `position: absolute`, `top: 56px`, `left: 60px`, `bottom: 4px`, `right: 0`. Fill `rgb(255, 56, 92)`, 1.6px solid white border, flex-centered. The check is a white filled mark, about 24.8px, with `role="presentation"`.
- Name “Mirashya Homes” wraps to two centered lines.
- The word “Host” is centered beneath the name, with 4px above it.
- Stats column is 100px wide, with 20px of padding on the left and a 0.8px solid `rgb(235, 235, 235)` divider on its left. Three stacked stats. The first has no top rule. The next two have a 0.8px solid `rgb(235, 235, 235)` top rule and 10px of padding above and below. Values and labels are left-aligned in a 79.2px text width.
  - `1,463` / Reviews
  - `4.68★` / Rating. The star is the character ★ (U+2605) in the same text run as the number.
  - `2` / Years hosting
- Bio sits 22px below the card, outside the card, in a 340px column. It is a vertical stack with a 14px gap. Each line is a horizontal row, 24px tall, icon and text centered as a pair, with a 14px gap.
  - Map-pin icon, 24px, fill `rgb(34, 34, 34)`, `role="presentation"`, then “Born in the 80s”.
  - Graduation-cap icon, same size and placement, then “Where I went to school: NICMAR GOA”.

### Right column

- “Co-Hosts”, then 16px, then an eight-person grid.
- Grid: 732×134px, three columns of about 238.7px, column gap 8px, row gap 16px, three rows. The last row has two people. Margin under the grid is 30px.
- Each person is a horizontal row, vertically centered, with a 10px gap. These rows are plain groups. They are not links or buttons, and the cursor stays the default.
- Photo avatars are 34×34 circles, `object-fit: cover`, empty alt.
  - Sharath — `cohostAvatarSharath` (120×160)
  - Aman Dev Pahwa — `cohostAvatarAman` (120×120)
  - Maria Karen Priyanka — `cohostAvatarMaria` (120×197)
  - Simran — `cohostAvatarSimran` (120×120)
  - Pallavi — `reviewAvatarAheesh` (120×120)
  - Sanyukta — `reviewAvatarSamiksha` (120×120)
- Initial avatars are 34×34 circles, flex-centered, 13px, weight 500.
  - Shruti, letter S: text `rgb(212, 53, 110)`, background `rgb(253, 231, 239)`
  - Amisha, letter A: text `rgb(58, 110, 204)`, background `rgb(231, 240, 253)`
- “Host details”, then 16px.
- Response copy is one block, 15px, weight 400, line-height 24px, color `rgb(34, 34, 34)`, 48px tall:
  - “Response rate: 100%”
  - “Responds within an hour”
  - “100%” is the same weight and color as the label.
- “Message host” is 18px below that block.
- The protection row is 30px below the button. It is a flex row, top-aligned, with a 10px gap. A 24px shield outline, fill `rgb(113, 113, 113)`, `role="presentation"`, sits beside “To help protect your payment, always use Airbnb to send money and communicate with hosts.”

### Typography and color

Font on the section: `airbnbCerealVf`, then Circular, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, sans-serif. Letter-spacing is normal. The heading uses antialiased smoothing.

| Text | Size | Weight | Line height | Color | Align |
| --- | --- | --- | --- | --- | --- |
| Meet your host | 22px | 500 | 26px | `rgb(34, 34, 34)` | start |
| Mirashya Homes | 26px | 500 | 37.18px | `rgb(34, 34, 34)` | center |
| Host | 13px | 400 | 18.59px | `rgb(34, 34, 34)` | center |
| Stat values | 20px | 500 | 28.6px | `rgb(34, 34, 34)` | start |
| Stat labels | 12px | 400 | 17.16px | `rgb(34, 34, 34)` | start |
| Born in the 80s | 15px | 400 | 21.45px | `rgb(34, 34, 34)` | start |
| Co-Hosts, Host details | 18px | 500 | 25.74px | `rgb(34, 34, 34)` | start |
| Co-host names | 14px | 400 | 20.02px | `rgb(34, 34, 34)` | start |
| Response lines | 15px | 400 | 24px | `rgb(34, 34, 34)` | start |
| Message host | 15px | 500 | normal | `rgb(34, 34, 34)` | center |
| Protection note | 12px | 400 | 17.16px | `rgb(113, 113, 113)` | start |

Page background is `rgb(255, 255, 255)`.

### Message host

Native button, enabled, no `aria-expanded` or `aria-pressed`. The accessible name is its text. It is the only focusable control in the block.

Resting style: height 48px, padding 14px 24px, width about 145px from the label, radius 8px, background `rgb(242, 242, 242)`, no border and no shadow. Cursor is pointer. `transition-duration` is 0s.

Hover, from a forced hover state: background becomes `rgb(235, 235, 235)`. Size, radius, shadow, and transform stay the same. The change is immediate.

Focus-visible, from a forced focus-visible state: outline style `auto`, color `rgb(229, 151, 0)`, width 0.8px, offset 0. The resting background stays.

Forced active alone leaves the resting background, with no shadow or transform change.

A click does not change the URL, does not add a dialog, and does not change the button label.

### Accessibility

- The heading is an `h2`. The section has no `aria-label` or `aria-labelledby`.
- Portrait, co-host photos, and icons expose no separate name: image alts are empty, and the icons use `role="presentation"` with no title.
- Names, stats, and bio lines are readable text next to those images.
- Shruti and Amisha expose the initial as text, so the name is read with the letter.
- Co-host rows are not in the tab order.
- Keyboard focus for this block is the Message host button.

## Non-verified / assumed

- Enter and Space were not pressed on the button, and the page tab order outside this block was not walked.
- The school line’s font was not computed separately. Its row is the same 24px height, with a 24px icon and the same 14px stack gap as the birth line.
- Amisha’s blue initial was read from computed color. The screenshot crop showed Shruti’s pink initial, and only the first co-host column in full.
- A real mouse press that combines hover and active was not photographed. Forced active by itself did not change the button.
- Computed border widths of 0.8px and 1.6px are the used values. The authored unit was not opened from source.
