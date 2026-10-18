# Photo tour header

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: the header of the Photo Tour scrollable modal. This is the bar at the top of the full-screen white overlay that opens when the user clicks a mosaic photo or the Show all photos button. The photo column, the lightbox, and the listing-page header are out of scope.
Viewport: desktop, measured open at 1440×900. Mobile layout was not inspected.

The photo tour header is an 88px white bar. It shows a left chevron labeled Back, the centered heading “Photo tour,” and circular Share and Save icons on the right. It stays at the top while the photo list scrolls, and it does not gain a shadow or change its text. Back and Escape both close the overlay.

No new hosted image or font URLs belong to this header. Icons are inline strokes. The typeface is `assets.fonts.airbnbCerealVf`. `asset.ts` and `data.ts` were left unchanged.

## Observed

### Where it sits

Opening Show all photos or a mosaic photo shows the same full-viewport white overlay (`?modal=PHOTO_TOUR_SCROLLABLE`). The header is the top row of that overlay: a `header` inside a dialog named “Photo tour” (`role="dialog"`, `aria-modal="true"`). The dialog is `position: fixed`, inset 0, `z-index: 120`, column flex, white background.

### Layout

- The bar itself is `position: static` (not CSS `sticky`), `flex-shrink: 0`, `z-index: 5`, height 88px, `display: flex`, `align-items: center`, padding `0 32px`, background `rgb(255, 255, 255)`.
- No border and no shadow. Content width is 1376px.
- The list scrolls in the sibling region below (overflow-y auto, height 812px). The header stays at y = 0 because it is outside that scroller.

### Close control

- Left control is a 40×40 circle, accessible name “Back”, `type="button"`, `tabindex="0"`.
- Transparent background, no border, `cursor: pointer`, padding `1px 6px`.
- `margin-left: -8px` pulls it to 24px from the viewport edge; top is 24px, so it is vertically centered in the 88px bar.
- Icon is an 18×18 left-pointing chevron, stroke `currentColor`, stroke width 2, not filled.
- The icon is hidden from assistive tech (`aria-hidden`, `role="presentation"`, `focusable="false"`).

### Short details

- The only text is the heading “Photo tour” (`h2`).
- It is absolutely centered: `left: 50%`, `transform: translate(-50%)`.
- Used box about 80×23px, top about 32.6px, so the line is vertically centered.
- Color `rgb(34, 34, 34)`, 16px, weight 500, used line-height 22.88px, letter-spacing normal.
- The listing name, place, rating, review count, and price are not in this bar.
- The dialog’s accessible name is also “Photo tour”.

### Share and Save

- A flex group with `margin-left: auto` and `gap: 2px` sits on the right.
- At 1440px its used left margin is 1262px; the group is 82×40 and ends 32px from the right edge, top 24px.
- Each control is a 40×40 circle, `type="button"`, `tabindex="0"`, names “Share” and “Save”.
- Same padding, transparent fill, and pointer cursor as Back.
- Icons are 18×18, stroke width 2, unfilled: Share is an arrow rising out of a tray; Save is a heart outline.
- Neither has `aria-pressed`, `aria-expanded`, or `aria-haspopup`.

### Type and color

- Font stack is Airbnb Cereal VF, then Circular, system UI, Roboto, Helvetica Neue, sans-serif.
- The loaded face is `assets.fonts.airbnbCerealVf` (weight axis 200–900).
- Ink `rgb(34, 34, 34)`. Bar fill `rgb(255, 255, 255)`.

### Scroll

At scroll 0, 600px, and the bottom of the list (scroll height 7511px), the header stays at y = 0, height 88px, title “Photo tour”, background white, border 0, shadow none. It does not pick up a divider or swap in the property name.

### Hover and press

- Resting buttons are transparent.
- Hover sets background to `var(--grey200)`, used color `rgb(242, 242, 242)`.
- Press sets `transform: scale(0.9)`. Both can apply together.
- Transition is background 0.16s ease and transform 0.08s ease. No shadow.

### Focus

- `:focus` sets `outline: none`.
- When the page is in keyboard mode, `button:focus-visible` specifies a 2px solid `rgb(34, 34, 34)` outline, 2px offset, and 6px corner radius (the circle becomes slightly rounded).
- Forcing focus plus focus-visible used a solid `rgb(34, 34, 34)` outline and 6px radius; the used width and offset measured 1.6px.

### Clicks and keys

- Back removes the modal from the URL, sets the dialog `aria-hidden="true"`, and returns it to the closed style. Escape does the same.
- Share and Save only take focus. They do not open a dialog, menu, or live region, do not set `aria-pressed`, and do not fill the heart.
- DOM order of the header controls is Back, Share, Save.

### Open and close motion

The bar moves with the overlay.

- Closed used style: opacity 0, visibility hidden, `translateY(28px)`.
- Open rule: opacity 1, visibility visible, `translateY(0)`.
- Opacity and transform run 0.3s with `cubic-bezier(0.2, 0, 0, 1)`.
- On close, visibility stays for 0.3s, then hides.

## Non-verified / assumed

- Native Tab order and whether focus is trapped were not verified. The available Tab event does not move browser focus. Order above is DOM order only.
- Why the forced focus outline measured 1.6px while the rule says 2px is unknown. Radius did match at 6px.
- `element.focus({ focusVisible: true })` did not paint that outline. The 2px rule was confirmed by matching styles and by forcing `:focus` and `:focus-visible`.
- Share and Save may copy a link or call an API with no visible result. Nothing appeared in the UI.
- Intermediate frames of the 0.3s slide were not captured. Start state, end state, and the timing rule were.
- The category rail under the bar scrolls away with the photos. It is not part of this header and was not measured.
