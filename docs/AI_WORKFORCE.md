# WRTS AI Workforce — Implementation

## Objective
Create a durable digital workforce that increases WRTS capacity without creating disconnected prompt experiments.

## V1
- COMMAND: founder/CEO intelligence
- SCOUT: opportunity discovery and qualification
- CLOSER: CRM/revenue movement

## Architecture

```
External opportunity sources
        |
        v
      SCOUT
        |
        | qualified opportunity
        v
      CLOSER <------> HubSpot
        |
        | approvals / relationship moments
        v
   Founder / CEO
        ^
        |
      COMMAND
        ^
        |
  company systems
```

## HubSpot use
Existing WRTS contact properties already support community segmentation, including WRTS relationship, campaign, acquisition source, 4Ws interests and last engagement.

For revenue operations, CLOSER should first use standard HubSpot deal properties such as Priority and Next step rather than duplicating native CRM capability.

Recommended custom deal fields, if approved:
- WRTS Opportunity Type
- WRTS AI Qualification Score
- WRTS AI Risk
- WRTS AI Last Reviewed
- WRTS AI Recommended Action

These fields should not be added until the CRM schema is explicitly approved.

## Execution layers
### Level 0 Observe
Read-only.

### Level 1 Recommend
Analysis and suggested actions.

### Level 2 Draft
Draft emails, tasks, proposals, briefs.

### Level 3 Execute reversible internal actions
Create/update approved CRM fields and internal tasks.

### Level 4 Human approval
Contracts, pricing exceptions, external commitments, payments/refunds, legal/safety/privacy matters, destructive changes.

V1 bots launch at Level 2. Permission increases only after a measured review period.

## Phase 2 bots
Once V1 is reliable:
- STREET TEAM — campaign production
- RACE CONTROL — event operations
- CONCIERGE — participant/community service

## Phase 3 bots
- COMMUNITY INTELLIGENCE
- BUILDER
- CONTROLLER
