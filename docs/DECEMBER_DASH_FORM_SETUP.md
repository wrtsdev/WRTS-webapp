# WRTS FORM BUILDER — December Dash 2026

Status: **implementation prepared, NOT yet live or end-to-end verified**.

## Purpose
Create a dedicated event-interest form inside HubSpot, display it under the
December Dash section of the Hostinger-deployed WRTS React site, and make
submissions eligible for WRTS REACH's 100-person threshold check.

Interest does not mean paid registration, marketing consent, or a commitment
to run the race.

## HubSpot administrator: create a new form
HubSpot account: `247477120` (region `na2`).

Create a **new** HubSpot form named `WRTS | December Dash 2026 | Interest`.
Do not overwrite the existing Join WRTS form
(`b177ab50-1dd0-44e9-bb3b-7112141d9605`).

Fields:
- First name (`firstname`) — required.
- Last name (`lastname`) — required.
- Email (`email`) — required.
- `wrts_challenge_interest` — hidden/default **December Dash 2026**;
  ensure the submitted value is saved to the contact record, not just displayed.
- `wrts_campaign` — hidden/default **December Dash 2026**.
- `wrts_acquisition_source` — hidden/default **WRTS Website**.
- Marketing email opt-in — separate, optional, unchecked by default, with
  HubSpot's applicable subscription/consent handling and privacy disclosure.
- Optional message or participant interest question only if needed.

Form title: **Get December Dash updates**.
Confirmation: **Thanks for your interest! We'll share confirmed December Dash
details when available. This is not a race registration.**

Ensure any hidden property value matches the property's actual allowed
type/options in HubSpot; the WRTS properties above currently exist as strings.
Use HubSpot-native privacy, consent, spam protection, and email validation.
Never embed private access tokens or create client-side direct CRM API calls.

## Hostinger / GitHub integration
- The WRTS production source is `wrtsdev/WRTS-webapp`.
- The new `DecemberDashInterestForm` component lives under the Events iframe.
- Once the HubSpot form is published, set
  `VITE_HUBSPOT_DECEMBER_DASH_FORM_ID=<new HubSpot form UUID>`
  in the Hostinger build environment.
- Deploy from `main` only after reviewing and merging this PR, running
  `npm ci && npm run check && npm run build`, and confirming `dist/index.html`.
- Vite environment variables are build-time values: redeploy after setting
  the form ID. Do not use the generic Join WRTS form ID as a fallback.
- Update the CTA(s) **inside**
  `public/events/december-dash-2026.html` to point to
  `https://werunthesestreetz.com/#december-dash-interest` (same-tab or
  new-tab target depending on iframe behavior). The large legacy static
  event file has not been modified in this PR; its older CTA and Gmail
  links require a separate controlled edit.
- The December Dash form remains hidden behind a clear 'being connected'
  message until a valid new form ID is configured. Do not represent it as live.

## QA acceptance
1. Inspect desktop and mobile Events section; link scrolls to interest form.
2. Submit a test using a non-staff email clearly marked as a test; verify the
   HubSpot contact's `wrts_challenge_interest` is exactly
   `December Dash 2026`, with correct campaign and source.
3. Confirm optional consent is not auto-checked and HubSpot records its status.
4. Confirm a non-event Join WRTS submission is NOT tagged December Dash.
5. Confirm REACH excludes tests, staff, invalid and opted-out emails, and
   deduplicates normalized email addresses.
6. Confirm threshold monitoring treats this as interest, not registration;
   do not send the 100-person email from a test.
7. Check accessibility, form confirmation, error handling, mobile rendering,
   and browser console/network failures before publishing.
8. Confirm the Hostinger production page actually deployed the expected build.

## Access blocker
The connected HubSpot connector reports **FORM read available / write not
available**. Creating/publishing the form must be completed through an
authorized HubSpot editor or a separately approved browser workflow.
Native HubSpot segment creation also requires reconnection, but REACH can
search the existing CRM property without a native list.
