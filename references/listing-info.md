# Listing information block

Reference: https://airbnb-clone-umber-two.vercel.app
Subsection: listing information column under the photo mosaic (property type, guest-favourite bar, host, highlight features, description, and “What this place offers”). The property name above the mosaic is recorded as listing data only.
Viewport: desktop. Measured at 1280px, 1440px, and 1920px wide. Mobile layout was not inspected.

Header, mosaic, photo tour, lightbox, reviews, map, calendar, and the sticky price widget are out of scope.

Listing text is stored in `src/assets/data.ts` (`listingInfo`). The host image is `assets.images.hostAvatar`. Body type uses `assets.fonts.airbnbCerealVf`.

## Observed

### Placement

The name sits in a row above the mosaic. It is not repeated as a heading inside the information column. The column heading is the property-type line.

Below the mosaic, the content area is a two-column grid:

- Grid: `minmax(0px, 1fr) 372px`
- Column gap: `96px`
- Left column is the information column
- Right column is the price widget (not specified here). Its track is a fixed `372px`

The page container has `max-width: 1280px`, horizontal padding `80px`, and `margin-left: auto`. The inner content width is `1120px` when the container is at its max width. The left column is then `652px` (`1120 − 96 − 372`).

### Property name (data only)

- Text: “Romantic Jacuzzi 1BHK Candolim | Mirashya UG10”
- Level-1 heading
- `26px` / weight `500` / line-height `30px` / color `rgb(34, 34, 34)`
- At 1440 and 1920 it is one line, `602×30`
- The title row is full content width, flex, gap `16px`, padding `32px 0 18px`

### Listing-type block

- Heading, level 2: “Entire serviced apartment in Candolim, India”
- `22px` / weight `500` / line-height `26px` / color `rgb(34, 34, 34)`
- One line at every measured width
- Next line: “3 guests · 1 bedroom · 1 bed · 1 bathroom”
- `16px` / weight `400` / line-height `1.43` / color `rgb(34, 34, 34)` / `6px` above the line
- Block padding-bottom: `24px`
- No painted divider on this block

### Guest-favourite bar

Sits `8px` under the capacity line. Flex row, `align-items: center`, `flex-wrap: nowrap`, gap `22px`, padding `16px 28px`, border-radius `16px`. All four sides are `0.8px solid rgb(221, 221, 221)`. Bar height stays `81px`.

Three clusters:

1. “Guest favourite” between two inline laurel graphics. Laurels are `23×36`, gap `4px`. The label is `15px` / weight `500` / line-height `1.15` / centered, and wraps to two lines inside a `64px` measure. Cluster width `117px`.
2. “One of the most loved homes on Airbnb, according to guests”. `14px` / weight `400` / line-height `1.3` / color `rgb(34, 34, 34)`. Two lines, height `36px`. Width `281px` when the column is `652px`, and `265px` when the column is `637px`.
3. Rating cluster, width `153px`, gap `22px`:
   - “4.95”, `20px` / weight `700`, centered
   - Five `10×10` star icons, gap `2px`
   - A `1×34` divider, `rgb(221, 221, 221)`
   - “19” at `20px` / weight `700`, then “Reviews” at `13px` / weight `500`
   - “Reviews” is plain text: cursor `auto`, not tabbable, no underline

### Host

Flex row, `align-items: center`, gap `16px`, padding `26px 0`. Not a link or button (cursor `auto`, not tabbable).

- Avatar: `assets.images.hostAvatar`, `46×46`, `border-radius: 50%`, `object-fit: cover`, alt text empty. Visually a dark green circle with a white “MIRASHYA” wordmark.
- “Hosted by Mirashya Homes”: `16px` / weight `500` / line-height `1.43` / `rgb(34, 34, 34)`
- “2 years hosting”: `14px` / weight `400` / line-height `1.43` / `rgb(113, 113, 113)` / `2px` under the name

### Highlight features

Column flex, gap `24px`, padding `32px 0`, top border `0.8px solid rgb(235, 235, 235)`.

Each row is a flex row, `align-items: flex-start`, gap `24px`:

- Icon box `24×24`. Inline graphic, viewBox `0 0 32 32`, `aria-hidden="true"`, current color `rgb(34, 34, 34)`
- Title: `14px` / weight `500` / line-height `20px` / `rgb(34, 34, 34)`
- Description: `14px` / weight `400` / `rgb(113, 113, 113)` / `2px` under the title

Rows, in order:

1. Outdoor entertainment — “The pool and alfresco dining are great for summer trips.” Icon reads as a flame or torch on a short stand.
2. Designed for staying cool — “Beat the heat with the A/C and ceiling fan.” Icon reads as a four-blade fan.
3. Self check-in — “You can check in with the building staff.” Icon reads as a door or keycard.

Descriptions stay one line (`20px` tall) at 1280, 1440, and 1920. Rows are not clickable.

### Description

Top border `0.8px solid rgb(235, 235, 235)`. Padding `26px 0 32px`.

Translation notice: flex, `align-items: center`, gap `10px`, background `rgb(247, 247, 247)`, radius `12px`, padding `16px 18px`, margin-bottom `8px`. Copy is `14px` / weight `400`: “Some info has been automatically translated.” “Show original” is an inline link, `14px` / weight `500`, underlined, color `rgb(34, 34, 34)`, cursor pointer, `href="#"`, tabbable. Activating it did not change the paragraph or the link label.

Paragraph: `16px` / weight `400` / line-height `1.5` / `rgb(34, 34, 34)` / `white-space: pre-line`.

Collapsed: `max-height: 99.2px`, `overflow: hidden`, rendered height `99px`. Button label “Show more”.

Expanded: `max-height: none`, `overflow: visible`, rendered height `120px`. Button label “Show less”. The section grows by about `21px` (`253px` to `274px`).

The button is `inline-flex`, gap `6px`, margin-top `14px`, `16px` / weight `500`, underline, underline-offset `3px`, transparent background, no border, cursor pointer. A `14×8` inline icon sits to the right of the label. That icon’s graphic and transform stay the same for both labels. No `aria-expanded`.

Full paragraph text is in `listingInfo.description`.

### What this place offers

Same column, top border `0.8px solid rgb(235, 235, 235)`, padding `32px 0`.

- Heading, level 2, same type as the property-type heading (`22px` / `500` / `26px` line-height), margin-bottom `24px`
- Grid: `1fr 1fr`, row gap `16px`, column gap `8px`, margin-bottom `24px`
- Reading order is row by row: left cell, then right cell
- Each cell: flex row, `align-items: center`, gap `16px`, padding `4px 0`, label `16px` / weight `400` / line-height `1.43`
- Icon `24×24`, viewBox `0 0 32 32`, `aria-hidden="true"`
- Available labels: `rgb(34, 34, 34)`
- Unavailable labels, struck through and `rgb(113, 113, 113)`: “Carbon monoxide alarm”, “Smoke alarm”. Their icons use the same gray

Preview labels: Kitchen, Wifi, Dedicated workspace, Free parking on premises, Pool, Hot tub, Pets allowed, Exterior security cameras on property, Carbon monoxide alarm, Smoke alarm.

At a `652px` column each cell is `322×32` and every label is one line. At a `637px` column each cell is `314px` wide. “Exterior security cameras on property” wraps, and that grid row becomes `54px` tall (the paired “Pets allowed” cell stretches with it). The amenity section grows from `411px` to `433px`.

Button: “Show all 50 amenities”. `208×48`, `16px` / weight `500`, padding `13px 23px`, radius `12px`, background white, `0.8px solid rgb(34, 34, 34)` on all sides, no shadow, cursor pointer. Hover background becomes `rgb(247, 247, 247)`. Border and text color stay `rgb(34, 34, 34)`.

Opening it shows a dialog named “What this place offers”: `780×780` was measured as `780×804`, left `330` at a `1440` layout width, top `48`. Closed state: `visibility: hidden`, `transform: translate(0px, 20px)`. Open state: `visibility: visible`, opacity `1`, `transform: translate(0px, 0px)`. Escape returns it to the closed state. A control named Close is `40×40`.

The dialog lists 44 amenity names in 12 groups. The button says 50. Both numbers were on the page. Groups and items are in `listingInfo.amenityGroups`. Unavailable items stay struck through inside Home safety.

Icons seen in the preview: Kitchen reads as a pot, Dedicated workspace as a desk, Pool as waves. The other amenity icons were not individually identified.

### Type, color, and assets

Font stack on this text: `"Airbnb Cereal VF", Circular, -apple-system, BlinkMacSystemFont, "system-ui", Roboto, "Helvetica Neue", sans-serif`. The loaded face is `assets.fonts.airbnbCerealVf`.

| Role | Size | Weight | Color |
| --- | --- | --- | --- |
| Column headings | 22px / 26px line-height | 500 | rgb(34, 34, 34) |
| Capacity, description | 16px | 400 | rgb(34, 34, 34) |
| Host name, amenity labels, Show more, amenity button | 16px | 500 for names and buttons, 400 for amenity labels | rgb(34, 34, 34) |
| Host tenure, highlight descriptions | 14px | 400 | rgb(113, 113, 113) |
| Highlight titles | 14px / 20px line-height | 500 | rgb(34, 34, 34) |
| Rating numbers | 20px | 700 | rgb(34, 34, 34) |

Other colors: borders `rgb(221, 221, 221)` and `rgb(235, 235, 235)`; notice and amenity-button hover `rgb(247, 247, 247)`; button fill `rgb(255, 255, 255)`.

The only image in this subsection is `assets.images.hostAvatar`. Laurels, stars, highlight icons, and amenity icons are inline graphics, not image files.

### Behavior and accessibility

- Host row, highlight rows, guest-favourite bar, and “Reviews” do not respond as controls
- “Show more” / “Show less” expands and collapses the paragraph in place
- “Show original” is tabbable and underlined; activation left the paragraph unchanged
- Amenity button hover fills `rgb(247, 247, 247)`. Show more and Show original keep the same underline, color, and background on hover
- Forced focus and focus-visible left `outline-style: none` on these controls. A painted focus ring was not observed
- Amenity and highlight icons are hidden from the accessibility tree; the visible labels carry the names
- Host image alt is empty
- Column headings are level 2. The host name is not a heading
- Escape closes the amenities dialog

## Desktop widths

Layout client width was `15px` under the requested viewport at every size: `1265`, `1425`, and `1905`.

| | 1280 | 1440 | 1920 |
| --- | --- | --- | --- |
| Page container | Fills the client width, left `0`, width `1265` | Max width `1280`, left `72` | Max width `1280`, left `312` |
| Content left edge | `80` | `152` | `392` |
| Content width | `1105` | `1120` | `1120` |
| Information column | `637` | `652` | `652` |
| Price column | `372` | `372` | `372` |
| Column gap | `96` | `96` | `96` |

Fixed across all three: font sizes, weights, colors, avatar `46px`, icons `24px`, paddings, gaps, borders, guest-favourite height `81px` and nowrap, host block `98px`, highlight block `239px` with one-line descriptions, description collapsed height `99px` / section `253px`, amenity button `208×48`, property name one line at `602×30`, type heading one line, capacity one line.

What changes:

- Only the horizontal position of the centered `1280px` container changes from 1440 to 1920. The column’s internal sizes match.
- At 1280 the container cannot reach `1280px`, so the flexible column narrows by `15px` to `637px`.
- The guest-favourite summary shrinks from `281px` to `265px`. The laurel cluster stays `117px` and the rating cluster stays `153px`.
- Amenity cells shrink from `322px` to `314px`. The security-camera label wraps, that grid row becomes `54px`, and the amenity section grows from `411px` to `433px`.

## Non-verified / assumed

- The `15px` gap between viewport width and client width is the vertical scrollbar. The measured client widths are observed; the scrollbar cause is inferred.
- `max-height: 99.2px` matches `6.2 × 16px`. The computed value is observed; the authored unit is not.
- Computed border widths of `2.4px` with `border-style: none` do not paint. They are not section dividers.
- The `14×8` Show more icon keeps the same graphic for both labels. Calling it a chevron is inferred from its proportions.
- Amenity icons other than the pot, desk, and waves were not identified one by one.
- “Show original” did not swap copy. Whether an original-language version exists, or the control is inert, was not established.
- The button says 50 amenities and the dialog contains 44 named items. The missing six were not found.
- Forced focus did not paint an outline. A keyboard-only ring that this check could not trigger is still possible.
- The Close control is present. Escape closed the dialog. The Close button’s own click was not confirmed separately.
