# WRTS EventOS Prototype Architecture

## Product thesis
EventOS is the persistent community and intelligence layer that sits above race-registration, timing, fundraising and tracking platforms.

**WRTS owns**
- Participant identity / Passport
- Cross-event community history
- Four Ws engagement
- Cause engagement
- Referral and ambassador history
- Community Intelligence
- Sponsor/community reporting
- HubSpot lifecycle orchestration

**WRTS integrates**
- Registration + payment processors
- Timing + results
- Live tracking
- Fundraising providers
- Merchandise / fulfillment providers

## Prototype route
Open the WRTS web app and navigate to `#eventos`.

The prototype currently uses clearly labeled sample data and includes:
1. Command Center
2. Events
3. WRTS Passport
4. CauseOS
5. Community Intelligence
6. Integrations
7. Participant / Organizer role views

## Production integration sequence

### Phase 1
- HubSpot contact / lifecycle sync
- CSV/API adapter interface for race platforms
- Event and participation canonical model
- Passport account identity
- Consent and preference capture

### Phase 2
- RunSignup adapter
- alternate registration adapter (Race Roster / haku as demand warrants)
- result / completion ingestion
- cause-action model
- participant segmentation
- sponsor reporting

### Phase 3
- multi-tenant organizer accounts
- white-label event portals
- role-based access control
- billing / subscriptions
- API + webhook gateway
- automated Community Intelligence recommendations

## Canonical data entities
Participant, Organization, Event, Registration, Participation, Result, Challenge, PassportAchievement, Cause, CauseAction, Referral, Team, Sponsor, SponsorActivation, SurveyResponse, CommunitySignal, ConsentRecord.

## Privacy guardrail
Community Intelligence should be purpose-limited and consent-aware. Do not infer sensitive traits or create surveillance-style profiles. The value proposition is better community experiences, retention and partner reporting.

## Build-vs-buy rule
If a capability is primarily a transaction, timing, payment or commodity logistics function, integrate it. If it is a persistent community relationship, identity, learning or intelligence capability, WRTS should consider owning it.


## Lifetime Value KPIs

EventOS adds two related but intentionally distinct KPI families.

### Participant Lifetime Value (PLV)
PLV is an economic metric. Production PLV should be calculated from realized or cohort-modeled contribution, not gross transaction volume.

**Core formula**

PLV = event contribution margin + membership contribution + merchandise contribution + attributable referral contribution + attributable sponsor/partner contribution

The prototype currently displays a sample PLV of **$184** using:
- $94 event contribution margin
- $38 membership + merchandise
- $29 attributable referral contribution
- $23 sponsor-attributed value

These values are demonstration data only.

### Community Lifetime Value
Community Lifetime Value is the de-duplicated portfolio-level economic value of the active community, based on unique participants and their modeled PLV. Referral contribution must not be counted twice across the referrer and referred participant.

Prototype display: **$236K** across 1,284 unique active participants.

### Community Value Index
Mission and community behavior should not be arbitrarily converted into dollars. EventOS therefore tracks a separate Community Value Index (0–100) using non-financial engagement signals such as:
- repeat participation
- referrals
- cause engagement
- volunteering / service
- sponsor engagement
- Passport / Four Ws participation
- feedback and community contribution

Prototype display: **72/100**.

### Production data sources
- Registration / participation: RunSignup, Race Roster, haku or other adapters
- Contribution margin: event finance / commerce layer
- Membership + merchandise: WRTS commerce
- Referral attribution: EventOS referral identity
- Sponsor-attributed value: tracked activation / conversion rules
- Lifecycle and organization history: HubSpot
- Cause / volunteer / Passport engagement: WRTS-owned EventOS data

### Guardrails
- Prefer cohort-level modeling until individual history is sufficiently mature.
- Use unique participant IDs to prevent duplicate value counting.
- Separate realized value from forecast value.
- Show the observation horizon (for example, trailing 12 months).
- Do not assign dollar values to charitable, volunteer or sensitive personal behavior simply to inflate PLV.
- Community Intelligence should remain consent-aware and purpose-limited.
