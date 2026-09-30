# December Dash 2026

December Dash appears in the homepage Events section (`#events`), between
Challenges and Community. It replaces the previous Run the Gift holiday feature. Desktop and mobile navigation
both link to Events.

`src/components/Events.jsx` embeds `public/events/december-dash-2026.html` with
a descriptive iframe title and a link to open it separately. Its styles remain
isolated from the site's visual system. The page's three images (the supplied
medal concept and two AI lifestyle images), favicon, and CSS are embedded;
there are no external image dependencies. Vite copies it into `dist/events/`.

A ResizeObserver in the event page reports its content height to the parent.
The React component accepts measurements only from its own iframe and origin.
This keeps the full event page visible as images load and the viewport changes.

The update CTA opens an email to the existing WRTS address. Registration,
checkout, pricing, precise dates, and shipping cutoffs have not been added.
The existing main-site HubSpot form is unchanged. The old holiday product copy, pricing, and gift-box artwork have been removed.

To edit event copy, update the HTML directly, preserving the embedded image
data strings. The event page can also be opened independently at
`/events/december-dash-2026.html`.

## Verification

Run `npm ci` and `npm run check`. In the preview, check the Events navigation,
embedded images, iframe resizing at desktop and mobile widths, and the link
that opens the event separately. No email or form submission is needed.
