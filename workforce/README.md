# WRTS AI Workforce

This directory is the source of truth for WRTS digital workbots.

## Operating rule
Humans own outcomes. AI owns repeatable work. Systems own process.

## V1 production seats
1. COMMAND — AI Chief of Staff
2. SCOUT — Growth Intelligence Agent
3. CLOSER — Revenue Operations Agent

## System boundaries
- HubSpot is the CRM/system of record for contacts, companies, deals, tasks and sales activity.
- WRTS/EventOS remains the future system of record for event operations, member identity, Passport, 4Ws progress and Community Intelligence.
- No secrets or private API tokens belong in this repository.
- Bots may observe, recommend and draft by default. External commitments, pricing exceptions, contracts, payments, refunds, safety decisions and destructive actions require human approval.

## Standard bot contract
Every bot must define:
- mission
- human owner
- trigger
- inputs
- outputs
- tools/systems
- permissions
- escalation rules
- KPIs
- downstream handoff

## Handoff flow
SCOUT -> CLOSER -> HubSpot -> human relationship/approval -> delivery

COMMAND consumes the outputs of every bot and presents the CEO with decisions, risks and priorities.
