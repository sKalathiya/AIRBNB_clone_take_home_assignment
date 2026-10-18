# Ratings section

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: ratings and reviews block (`#reviews`)
Viewport: desktop. Measured at 1280px, 1440px, and 1920px wide. Mobile layout was not inspected.

The ratings block is the full-width region whose id is `reviews`. It sits under a hairline divider and contains the guest-favourite score, the rating distribution, six category scores, mention chips, six review cards, and the show-all control. Structured copy is in `reviewsSection` in `src/assets/data.ts`. New images are in `src/assets/asset.ts`. The typeface is the existing `airbnbCerealVf` asset.

Header, title row, photo mosaic, listing information column, sticky reserve widget, photo tour, and lightbox are out of scope.

## Observed

### Placement and desktop widths

The block is the first section inside a wrapper that draws a solid `#ebebeb` top border. The section’s own top border is removed because it is that wrapper’s first child. The section has 48px padding above and below. Text color is `#222222`.

The page column is `max-width: 1280px`, centered, with 80px of horizontal padding above 1128px. The ratings content is the inner width of that column.

| Viewport | Column | Ratings content width | Content left | Review card width | Column gap |
| --- | --- | --- | --- | --- | --- |
| 1280 | 1265px, flush left (scrollbar accounts for the missing 15px) | 1105px | 80px | 512px | 80px |
| 1440 | 1280px, centered | 1120px | 152px | 520px | 80px |
| 1920 | 1280px, centered (left offset about 312px) | 1120px | 392px | 520px | 80px |

At rest the section is 1349px tall at all three widths. Type sizes do not change. The two-column review grid and the chip overflow stay in place. At 1120px, seven chips fit fully and Decor, Indoor spaces, and Location overflow. At 1105px, Decor is the first chip that no longer fits.

### 1. Guest-favourite score

Centered block, 8px padding on top and 40px on the bottom.

- `laurelLeft` and `laurelRight` flank the score. Each displays at 72×110 (natural 240×365). The row is a centered flex line with an 8px gap. Both images have an empty alt and are not `aria-hidden`.
- The score reads **4.95**. It is 100px, weight 500, line-height 143px, letter-spacing −0.03em (−3px), `#222222`, centered. The text box is about 187×143.
- **Guest favourite** is 22px, weight 500, 8px below the score.
- The summary is 15px, weight 400, line-height 1.35, max-width 420px, centered, and wraps to two lines: “This home is a guest favourite based on ratings, reviews and reliability”.
- **How reviews work** is a button, 14px, weight 500, underlined, 14px below the summary. It has no background and no border. The cursor is a pointer. It is keyboard-focusable. Its click handler only calls `preventDefault`. No dialog, navigation, or extra copy appears.

### 2. Overall rating and category scores

A single grid: `1.4fr` plus six `1fr` columns, no column gap, 8px padding on top and 40px on the bottom. At 1120px the first column is about 211px and the others are about 151px. Each category column has 24px of horizontal padding and a left border of solid `#dddddd`. The overall-rating column has the same padding and no left border.

**Overall rating** label: 14px, weight 500, 12px below the label. Five rows, top to bottom, for 5 through 1. Each row is an 8px number column plus a flexible track, with a 10px gap, vertically centered. Numbers are 12px, weight 400. The track is 4px tall, `#ebebeb`, 2px radius, overflow hidden. The fill is `#222222`. Measured fills: 5 = 95%, 4 = 5%, 3 = 0%, 2 = 0%, 1 = 0%. On a 145px track that is about 138px, 7px, and three empty tracks.

Category scores, left to right:

| Label | Score |
| --- | --- |
| Cleanliness | 5.0 |
| Accuracy | 5.0 |
| Check-in | 5.0 |
| Communication | 5.0 |
| Location | 4.8 |
| Value | 4.8 |

Label: 14px, weight 500, 12px below. Score: 18px, weight 500, 8px below. Under each score is a 32×32 `#222222` line icon, `aria-hidden`, `role="presentation"`, not focusable. The Cleanliness icon is a spray bottle. The other five icons were not identified shape by shape.

### 3. Mention chips

A nowrap flex row, 12px gap, 4px padding on top and 30px on the bottom. `overflow-x: auto` and `scrollbar-width: none`. Content width is 1522px, so the row scrolls with no visible scrollbar and no arrow buttons. Setting `scrollLeft` works. Focusing the Location chip scrolls it so its right edge meets the row’s right edge.

Each chip is a button: white background, `#dddddd` border, 16px radius, padding 13px 18px 13px 14px, 8px gap, 14px weight 500, `flex-shrink: 0`. Height is about 48px. The icon is 20×20, empty alt, `aria-hidden`. The accessible name is the label plus the count, for example “Comfort 6”.

| Label | Count | Asset |
| --- | --- | --- |
| Comfort | 6 | `chipComfort` |
| Accuracy | 5 | `chipAccuracy` |
| Hot tub | 5 | `chipHotTub` |
| Condition | 4 | `chipCondition` |
| Hospitality | 8 | `chipHospitality` |
| Cleanliness | 4 | `chipCleanliness` |
| Amenities | 2 | `chipAmenities` |
| Decor | 2 | `chipDecor` |
| Indoor spaces | 2 | `chipIndoorSpaces` |
| Location | 2 | `chipLocation` |

Clicking a chip only calls `preventDefault`. The review list, chip style, and `aria-pressed` do not change. There is no hover rule on these chips.

### 4. Review cards

A two-column grid, `1fr 1fr`, 80px column gap, 48px row gap, 40px padding below. At rest the row heights are 189px, 189px, and 119px. Cards in a row stretch to the taller card.

Each card:

- Header: 42px avatar, then a 12px gap, then the name and tenure.
- Photo avatars are 42×42 circles, `object-fit: cover`, empty alt, not `aria-hidden`. Amit and Vedant use initials instead of photos.
- Name: 15px, weight 500, `#222222`.
- Tenure: 13px, `#717171`.
- Meta row: five filled stars, a middle dot, then the date. The row is 13px with 6px gaps and 6px of space under it. Stars are 10×10, 1px apart, fill `#222222`, `role="presentation"`. The dot and date stay `#222222`.
- Body: 15px, line-height 1.4 (21px), `#222222`, `white-space: pre-line`, so Vedant’s paragraph breaks remain.
- Collapsed long text uses a 4-line clamp and hidden overflow. A clamped body is 84px tall.

| Name | Avatar | Tenure | Date | Show more |
| --- | --- | --- | --- | --- |
| Amit | Initial A, background `#f7ede2`, text `#c1852a` | 2 months on Airbnb | 1 week ago | No |
| Aheesh | `reviewAvatarAheesh` | 3 years on Airbnb | 2 weeks ago | Yes |
| Samiksha | `reviewAvatarSamiksha` | 8 months on Airbnb | May 2026 | No |
| Vedant | Initial V, background `#efeaf7`, text `#8b6fc4` | 4 years on Airbnb | May 2026 | Yes |
| Vaibhav S | `reviewAvatarVaibhav` | 3 years on Airbnb | May 2026 | No |
| Mohd | `reviewAvatarMohd` | 5 years on Airbnb | May 2026 | No |

Every visible review shows five filled stars. Full comment text is in `reviewsSection.reviews`.

**Show more** is 15px, weight 500, underlined, no border, no background, 8px above the button. Aheesh’s text already fits in 84px (scroll height equals client height) and the button is still shown. Vedant’s text is 252px tall and is clamped to 84px. Activating Vedant’s control removes the clamp, grows the body to 252px and that card to 357px, stretches Samiksha’s card in the same row to 357px, grows the section to 1517px, and changes the label to **Show less**. The control is a toggle. There is no hover style on it.

### 5. Show all 19 reviews

Inline button under the grid, about 190×48. It is 16px, weight 500, padding 13px 23px, 12px radius, white background, solid `#222222` border. Transitions: background 0.15s, transform 0.05s. Hover background is `#f7f7f7`. Pressed state scales to 0.98. The click handler only calls `preventDefault`. No extra reviews, modal, or list change appears. Only these six reviews are rendered.

### Focus and keyboard

- Buttons in this block are in tab order: How reviews work, the ten chips, Show more, Show more, Show all 19 reviews.
- `:focus { outline: none }` is global.
- The first Tab adds `kbd` to `body`. After that, `:focus-visible` on buttons draws a solid `#222222` outline with a 6px radius. The stylesheet sets a 2px outline and a 2px offset.
- Mouse focus on How reviews work leaves `outline-style: none`.
- Chip icons and category icons are hidden from the accessibility tree. Laurel images and reviewer photos have empty alt text. Letter avatars expose “A” and “V” as text. The section has no heading and no accessible name. The in-page Reviews link points at `#reviews`.

## Non-verified / assumed

- The 95% and 5% bars likely stand for 18 five-star reviews and 1 four-star review out of 19. The page does not print those counts.
- A stylesheet rule also sets a 6.2em max-height and a fade mask on clamped text. Computed style shows the 4-line clamp only; the mask is not applied.
- Borders declared as 1px and the focus outline declared as 2px computed to 0.8px and 1.6px in this session even though device pixel ratio and visual-viewport scale were 1. Treat 1px and 2px as the authored values.
- Aheesh’s Show more was not clicked separately. Vedant’s matching control was verified.
- The other 13 reviews named by “Show all 19 reviews” are not in the rendered section, and the button does not reveal them.
- Category icon artwork other than the Cleanliness spray bottle was not visually identified.
- Chip, How reviews work, and Show more hover states were checked against the page styles and computed styles. No hover change exists for those controls.
