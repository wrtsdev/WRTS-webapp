# WRTS HubSpot Integration
HubSpot is the official WRTS CRM. Private tokens must never be exposed in frontend code.

## Browser-safe configuration
VITE_PUBLIC_SITE_URL, VITE_HUBSPOT_PORTAL_ID, VITE_HUBSPOT_JOIN_FORM_ID, VITE_HUBSPOT_PARTNER_FORM_ID, VITE_HUBSPOT_SPONSOR_FORM_ID, VITE_HUBSPOT_VOLUNTEER_FORM_ID.

## Server-side only
HUBSPOT_ACCESS_TOKEN.

## Segmentation
Interests: Wellness, Wealth, Wisdom, Work, Volunteer, Participant, Sponsor, Community Partner, Employer, Community Organization, Event Participant, Newsletter Subscriber.

Sources: homepage, quarter page, challenge, partner page, event, QR campaign, social campaign.

## Planned journeys
Community member: form → contact → welcome → Four Ws interests → current-quarter invitation.
Challenge participant: registration → enrollment → onboarding → progress → completion → survey → next quarter.
Sponsor: inquiry → contact/deal → qualification → follow-up.
Community partner: inquiry → contact/company → qualification → activation.
Volunteer: form → segmentation → opportunity communication → follow-up.

## Guardrails
Collect only necessary information, include appropriate consent language, and route authenticated API operations through a server-side layer.


## Verified Join WRTS form
The production Join WRTS embed supplied by the WRTS HubSpot account uses:
- Region: na2
- Portal ID: 247477120
- Form ID: b177ab50-1dd0-44e9-bb3b-7112141d9605
- Embed script: https://js-na2.hsforms.net/forms/embed/247477120.js

The public portal and form identifiers are safe to use in the browser. Private HubSpot access tokens remain server-side only and must never be committed.
