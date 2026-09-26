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
