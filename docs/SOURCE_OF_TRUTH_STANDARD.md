# WRTS Source of Truth & Claim Provenance Standard
**Version:** 1.0  
**Adopted by owner/operator:** 2026-11-12  
**Applies to:** WRTS marketing, capability statements, government/nonprofit proposals, grants, EventOS, website content, HubSpot/SCOUT/CLOSER/REACH outputs, financial models, and generated assets.

## Governing rule
No AI-generated text, forecast, strategy, prototype, proposal, or CRM summary becomes independently verified evidence merely by being repeated, put into a document, or saved to a system. Every material external-facing fact must have a provenance entry. **Owner-confirmed is an accepted decision/input, not independent verification.** A true document's existence proves the document exists, not that its underlying claims were tested or implemented.

## Mandatory evidence statuses
| Status | Meaning | External use |
|---|---|---|
| **Verified** | Original source or live system checked; scope, date, and version recorded. | Permitted with correct qualifiers and citation. |
| **Owner-confirmed** | Explicit owner/operator statement or approval, dated and attributed. | May be presented as owner-reported; regulated/legal/financial facts may still require documentation. |
| **Proposed** | AI-generated or human-created concept, draft, prototype, assumption, estimate or projection. | Use only with an unambiguous label such as draft, illustrative, projected, modeled, or proposed. |
| **Verification required** | Source missing, conflicting, outdated, inaccessible, or insufficient for the claim. | Do not assert as an established fact; record a verification task. |
| **Rejected or superseded** | Contradicted, erroneous, withdrawn, replaced, or obsolete. | Never reuse without explicit correction and revalidation. |

## Required claim-register fields
- Claim ID; exact claim text; business area/product; evidence status.
- Origin (owner instruction, third-party document, primary source URL, live system, prototype, AI draft).
- Source reference or authoritative system path; evidence/snapshot date; last verified on; verification method.
- Claim steward; intended external use; sensitivity classification (Public / Internal / Restricted).
- Dependencies, caveats, conflicting claims, related task ID, and supersession history.
- For forecasts: scenario, calculation, unit, period, assumptions, references, and whether an actual or estimate.

## Evidence hierarchy
1. Official third-party primary record or live authorized system action/result, with exact link or secure evidence pointer.
2. Owner-confirmed input / signed approved WRTS record (may still require official corroboration for legal, licensing, funding, employment and accounting assertions).
3. Approved WRTS operating artifact for policy, brand intent, or product specification—not proof of operational deployment.
4. External credible secondary source, explicitly labeled.
5. Generated draft, model, presentation, screenshot, mock data, or tool summary: **not independent factual evidence**.

## Verification gates
**Before external publication/submission:** identify all material claims, check official current source, confirm amount/date/unit/geography, check conflicts, label projections, and obtain owner approval where required. For procurement, use full solicitation plus addenda and buyer communications; a listing, CRM record, score, or draft is never a bid receipt, budget award, or proof of eligibility.

**Before declaring a feature live:** verify production deployment, real non-test data, authorized integrations, consent handling, transaction flow where applicable, and an end-to-end test. A merged PR or prototype alone is not sufficient.

**Before reporting customer or marketing results:** use real source events; segregate prospects, explicit interest, marketing consent, registrations, settled payments, and fulfilled orders. Do not infer one from another.

**Before insurance/financial-services claims:** confirm applicable license, legal-entity authorization, carrier appointment, regulated product authority and jurisdiction. No unverified certification/set-aside claims.

**Before using financial results:** reconcile gross revenue, expenses, net profit/loss, period, and cash received/accrued per accounting method. Never call a net loss 'negative revenue'. Do not equate gross receipts, invoices, payment settlement or forecasts.

**Before declaring outreach succeeded:** distinguish sent, accepted, delivered, buyer acknowledged, formally submitted, and awarded; watch for bounces and platform receipts.

## Privacy and storage
This GitHub repository is public. **Do not place bank statements, tax returns, personal data, account/employee compensation, private deal terms, signed agreements, customer lists, unreleased financial information, or private evidence URLs in this repository.** Keep sensitive owner confirmations and source documents in an access-controlled evidence register; public issues should list only task names, evidence types and acceptance criteria. Never commit API tokens or credentials.

## Workflow and ownership
- Owner/operator is the final approval authority for external commitments and canonical WRTS claims.
- Any agent or contributor preparing a material claim must record its status and source; unresolved claims receive an issue/task, not an invented source.
- Existing and future WRTS SCOUT, CLOSER and REACH outputs should link to verified evidence and distinguish *qualifying observations* from *executed actions*.
- The 4Ws presentation order follows the owner-approved brand guide: **Wealth → Wellness → Wisdom → Work**.
- Review provenance at each proposal/grant submission, product release, material claim change and financial reporting period.
- When new evidence contradicts an existing claim, record the correction, set the old claim to **Rejected or superseded**, link the replacement, and correct downstream artifacts before reuse.

## Initial adoption
- Owner corrections dated 2026-11-12 are entered in the restricted working register as **Owner-confirmed**, not filed here in public.
- Ten provenance-verification tasks (legal identity; ownership/certifications; finances/staffing; procurement; capability statement; performance history; December Dash transaction/fulfillment; licensing; market models; manufactured creative assets) are tracked as GitHub issues in this repository.
- Existing repo code and docs remain as-is until independently reconciled; this standard does not certify their content.

**Evidence quality principle:** If it cannot be traced, correctly labeled, and checked, it must not be represented as a verified WRTS fact.
