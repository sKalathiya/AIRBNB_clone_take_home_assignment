# Photo tour lightbox body

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: the Photo Tour lightbox body after the header. This is the `PHOTO_TOUR_SCROLLABLE` overlay content for `modalItem` set to any photo index, opened by clicking any individual photo inside the Photo Tour scrollable modal. The lightbox header itself, the listing page, the mosaic, and the Photo Tour scrollable list are out of scope.
Viewport: desktop only. Measured at 1920×1080, 1440×900, 1280×800, and 1024×768. Phone layouts were not inspected.

The photo viewer body is a full-viewport white stage with one centered photo and two circular arrows. The index reads “N of 43” in the header, not under the image. There are 43 photos. Previous is disabled on the first, Next on the last, and the arrows do not wrap.

Asset names refer to `assets` in `src/assets/asset.ts`. The ordered photo list, categories, and `modalItem` values are in `photoTourLightbox` in `src/assets/data.ts`. The typeface for the counter is `airbnbCerealVf`.

## Observed

### What this region is

Opened from the Photo Tour by clicking tour photo 3. The URL became `modal=PHOTO_TOUR_SCROLLABLE` plus `modalItem=1002`. The viewer is a `dialog` named **Photo viewer**, `aria-modal="true"`, fixed, full viewport, white `rgb(255, 255, 255)`, `z-index: 140`, flex-centered. It fades with `transition: opacity 0.25s`. Transform stays `none` (no slide).

The body under the header has exactly two controls and one image:

- **Previous** (`#lbPrev`), absolutely placed
- A full-viewport stage that contains a single image
- **Next** (`#lbNext`), absolutely placed

There is no caption, thumbnail strip, dot indicator, or close/back control in this region. Close and the “Show all photos” back control sit in the header. The stage does not scroll.

### Image

- One image. Its accessible name is the category (`Living room 1`, `Living room 2`, `Full kitchen`, `Bedroom`, `Full bathroom`, `Gym`, `Exterior`, `Pool`, `Additional photos`), not the index.
- `object-fit: contain`, `object-position: 50% 50%`, `max-width: min(1100px, 100%)`, `max-height: 100%`, `overflow: clip`. No corner radius.
- Stage padding is fixed at **88px top and bottom, 96px left and right** at every width measured. The image is centered in that padded box, which also centers it in the viewport.
- Photo swap replaces that one image. Opacity stays `1`, transform stays `none`, and the image’s own transition duration is `0s`. There is no second image for a crossfade.
- Clicking the image or the white stage does not change the photo or close the viewer. The image cursor is the default arrow, not a pointer.
- 37 photos are 1440×1080. The six Exterior photos (indexes 25–30) are 1440×808: `tourPhoto25`–`tourPhoto28`, `mosaicPhoto5`, `tourPhoto30`.

### Arrows

Both buttons are **40×40** circles, white fill, **0.8px** solid border, `border-radius: 50%`, flex-centered, `z-index: 3`, `cursor: pointer`.

- Previous is **20px from the left**. Next is **20px from the right**.
- Both are vertically centered on the viewport (`top: 50%` plus `translateY(-20px)`), so they stay aligned with the image center even when the image is shorter.
- Icon is an inline chevron, 18×18, viewBox `0 0 32 32`, stroke `rgb(34, 34, 34)`, stroke width **4px**, fill none. The visible chevron is about **6.5×13.5**.
- Resting background `rgb(255, 255, 255)`.
- Hover background `rgb(247, 247, 247)`. No scale and no shadow. Background transition **0.16s ease**.
- Pressed state scales to **0.92** while keeping the vertical centering translate. Transform transition **0.08s ease**.
- Keyboard focus ring: outline `rgb(229, 151, 0)`, style `auto`, width **0.8px**, offset **0**.

### Disabled ends

- First photo (`modalItem=1000`, “1 of 43”, `sleepLivingRoom`, category Living room 1): Previous is `disabled`. Opacity **0.28**, border `rgb(204, 204, 204)`, cursor `default`. The icon stroke color stays `rgb(34, 34, 34)` and is faded by the button opacity. No `aria-disabled` attribute; the native `disabled` state is used. Clicking it does nothing. Left arrow does not wrap.
- Last photo (`modalItem=1042`, “43 of 43”, `tourPhoto43`, category Additional photos): Next uses the same disabled treatment. Right arrow does not wrap. Clicking the disabled Next does nothing.
- Middle photo 22 (`modalItem=1021`, “22 of 43”, `tourPhoto22`, category Gym): both arrows enabled.
- Stepping Next from photo 1 advanced one photo and one `modalItem` at a time through photo 43 (42 steps, `1000` → `1042`). Checkpoints read directly: 1=`1000`, 2=`1001`, 3=`1002`, 4=`1003`, 5=`1004`, 6=`1005`, 22=`1021`, 25=`1024`, 43=`1042`.

At 1440×900, a 1440×1080 photo draws at **965.3×724**, left **237.3**, top **88**. The shorter Exterior photo (`tourPhoto25`) hits the 1100px cap: **1100×617.2**, left **170**, top **141.4**.

### Index counter

The counter is not in the body. It is in the header, a 14px / 20.02px, weight 400, `rgb(34, 34, 34)` label in `airbnbCerealVf`. Format is **“3 of 43”**, not “3 / 43”. It has no role and no `aria-live`. Its right edge sits **76px** from the viewport’s right edge at every width measured. At 1440 the gap to the header Close button is **12px**. Top is **26px**, height **20px**. Width is about **44px** for “3 of 43” and about **52px** for “43 of 43”.

### Keyboard and accessibility

- Left and Right arrows change the photo while focus is still on the Photo Tour thumbnail that opened the viewer.
- Up, Down, Home, End, and Space do not change the photo. End, Up, and Space scrolled the page behind the viewer, so background scroll is not locked.
- Enter did not change the photo or close the viewer.
- Tab’s keydown was delivered to the tour thumbnail and was not `preventDefault`’d by the page. Focus stayed outside the dialog.
- On open, focus is not moved into the dialog.
- One Escape hides the viewer (`opacity: 0`, `visibility: hidden`, `aria-hidden="true"`, transform still `none`) and drops `modalItem`, leaving `modal=PHOTO_TOUR_SCROLLABLE`. A second Escape clears the query and returns to the listing. Another Escape after that leaves the listing in place.

### Desktop widths

Stage padding, arrow size, 20px side inset, vertical centering, 1100px max image width, and counter top (26px) stayed the same. Only the image box and the gaps change.

| Viewport | 1440×1080 photo | 1440×808 Exterior | Arrow top | Gap, 4:3 | Gap, Exterior |
|---|---|---|---|---|---|
| 1920×1080 | 1100×825 at (410, 127.5) | 1100×617.2 at (410, 231.4) | 520 | 350px | 350px |
| 1440×900 | 965.3×724 at (237.3, 88) | 1100×617.2 at (170, 141.4) | 430 | 177px | 110px |
| 1280×800 | 832×624 at (224, 88) | 1088×610.5 at (96, 94.8) | 380 | 164px | 36px |
| 1024×768 | 789.3×592 at (117.3, 88) | 832×466.8 at (96, 150.6) | 364 | 57px | 36px |

Arrows do not overlap the image at these widths. Header height is **72px** at 1440 and 1024, so a height-capped image (top 88) starts 16px below that header.

## Non-verified / assumed

- Intermediate opacity values during the 0.25s fade were not captured. Open and close both end with transform `none`; a slide was not seen, but the fade curve itself was not sampled frame by frame.
- Native Tab order was not confirmed. The Tab key event was not cancelled, and focus remained on the tour thumbnail. Whether a real browser Tab would move into Previous/Next was not verified.
- Image and stage clicks were scripted clicks, not trusted pointer events. The default cursor supports them not being controls.
- `prefers-reduced-motion` was not changed.
- Close-button position was measured only at 1440, so the 12px counter-to-close gap is confirmed there. The counter’s 76px right inset was measured at all four widths.
- Authored border width versus the computed **0.8px** was not separated from subpixel rounding.
- Phone layouts were not inspected.
