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


## Layer 2 — segmentation and lifecycle architecture

The production form connection is verified. Layer 2 turns submissions into usable WRTS community intelligence and journeys.

### Contact properties to create in HubSpot
Use dropdown or multi-checkbox fields where indicated.

| Internal name | Label | Type | Recommended values |
| --- | --- | --- | --- |
| wrts_4w_interests | WRTS 4Ws Interests | Multiple checkboxes | Wellness; Wealth; Wisdom; Work |
| wrts_relationship | WRTS Relationship | Multiple checkboxes | Community Member; Participant; Volunteer; Sponsor; Community Partner; Employer; Community Organization; Event Participant; Newsletter Subscriber |
| wrts_acquisition_source | WRTS Acquisition Source | Dropdown | Homepage; Quarter Page; Challenge; Partner Page; Event; QR Campaign; Social Campaign |
| wrts_campaign | WRTS Campaign | Single-line text | e.g. join-wrts; run-the-gift |
| wrts_current_quarter | WRTS Current Quarter | Dropdown | Q1; Q2; Q3; Q4 |
| wrts_challenge_interest | WRTS Challenge Interest | Single-line text | approved challenge/product name |
| wrts_passport_status | WRTS Passport Status | Dropdown | Not Started; Activated; Active; Annual Cycle Complete |
| wrts_last_engagement | WRTS Last Engagement | Date | latest verified WRTS participation |
| wrts_community_zip | WRTS Community ZIP | Single-line text | participant ZIP/postal code |

### Join WRTS form fields
Minimum recommended production fields:
First Name, Last Name, Email, ZIP/Postal Code, WRTS 4Ws Interests, WRTS Relationship/How I Want to Participate, and marketing consent where applicable.

Set hidden/default values on the Join WRTS form:
- WRTS Acquisition Source = Homepage
- WRTS Campaign = join-wrts
- WRTS Current Quarter = Q3
- WRTS Relationship includes Community Member

### Active lists
Create dynamic lists for:
- 4Ws — Wellness
- 4Ws — Wealth
- 4Ws — Wisdom
- 4Ws — Work
- Volunteers
- Sponsors
- Community Partners
- Employers
- Q4 / Run the Gift Interest
- Current Quarter Engaged
- Passport Activated

### Workflows
1. **Community Welcome** — enrollment: Join WRTS submission. Set Community Member, acquisition source and quarter; send welcome; branch by 4W interest.
2. **Quarter Activation** — enrollment: current-quarter interest/list. Send current-quarter invitation and approved challenge CTA.
3. **Run the Gift** — enrollment: campaign equals run-the-gift or Q4 product interest. Send product announcement/registration sequence when registration is live.
4. **Partner Qualification** — enrollment: Sponsor, Community Partner or Employer. Create/associate deal or task and route for follow-up.
5. **Volunteer Journey** — enrollment: Volunteer. Send opportunity/availability communication and follow-up.
6. **Post-Participation** — enrollment: verified challenge/event completion. Update last engagement/Passport status, request feedback, invite next-quarter participation.

### Acquisition context in the web app
The React HubSpot component now exposes page context using data attributes and window.wrtsHubSpotContext:
- source
- interest
- campaign

For the homepage Join WRTS form these are currently:
- source: homepage
- interest: 4Ws Community
- campaign: join-wrts

HubSpot remains the CRM/system of engagement. The future proprietary WRTS application layer should own Passport history, challenge progress, badges and authenticated member state; synchronize only the CRM-relevant summary back to HubSpot.
