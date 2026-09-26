export const eventOSMetrics = {
  participant: [
    {label:'Passport progress', value:'2 / 4', delta:'2 pillars activated'},
    {label:'Events completed', value:'7', delta:'+3 this year'},
    {label:'Cause actions', value:'5', delta:'3 organizations supported'},
    {label:'Community streak', value:'11 wk', delta:'Active every quarter'}
  ],
  organizer: [
    {label:'Active participants', value:'1,284', delta:'+18% vs prior cycle'},
    {label:'Repeat rate', value:'38%', delta:'+9 pts'},
    {label:'Referral registrations', value:'12%', delta:'+5 pts'},
    {label:'Impact captured', value:'74%', delta:'survey + behavior coverage'}
  ]
};

export const upcomingEvents = [
  {
    id:'monument-mile',
    title:'Monument Mile DMV',
    date:'Oct 18',
    format:'Hybrid',
    pillar:'Wellness',
    participants:468,
    status:'Registration open',
    cause:'Community wellness access',
    progress:72
  },
  {
    id:'virtual-holiday',
    title:'WRTS Holiday Gift Box Challenge',
    date:'Nov 20–Dec 31',
    format:'Virtual',
    pillar:'Work',
    participants:312,
    status:'Early access',
    cause:'Seasonal community activation',
    progress:41
  },
  {
    id:'run-legacy',
    title:'Run the Legacy: Harlem',
    date:'Spring 2027',
    format:'Hybrid',
    pillar:'Wisdom',
    participants:0,
    status:'Planning',
    cause:'Local history + economic legacy',
    progress:18
  }
];

export const passport = [
  {pillar:'Wellness', state:'Activated', quarter:'Q1', points:760},
  {pillar:'Wealth', state:'Activated', quarter:'Q2', points:520},
  {pillar:'Wisdom', state:'In progress', quarter:'Q3', points:240},
  {pillar:'Work', state:'Locked', quarter:'Q4', points:0}
];

export const causeImpact = [
  {label:'Cause-linked participants', value:'842'},
  {label:'Funds attributed', value:'$18.6K'},
  {label:'Volunteer interest', value:'214'},
  {label:'Impact stories captured', value:'46'}
];

export const intelligenceSignals = [
  {title:'Retention signal', score:82, note:'Participants who activate 2+ Passport pillars are 1.8× more likely to return in prototype cohort.'},
  {title:'Cause affinity', score:74, note:'Wellness and youth-development causes show the strongest repeat intent.'},
  {title:'Mobile conversion', score:88, note:'Mobile-first journeys are outperforming desktop in prototype funnel assumptions.'},
  {title:'Sponsor resonance', score:67, note:'Participants respond better to benefits and community outcomes than logo-only placement.'}
];

export const segments = [
  {name:'Community Regulars', size:386, repeat:'68%', action:'Invite to ambassador cohort'},
  {name:'Cause-First Movers', size:294, repeat:'47%', action:'Prioritize impact proof'},
  {name:'Event Explorers', size:418, repeat:'21%', action:'Trigger next-event journey'},
  {name:'New / Unknown', size:186, repeat:'—', action:'Collect preference signal'}
];

export const integrationCards = [
  {name:'HubSpot', type:'CRM + lifecycle', state:'Connected foundation', detail:'Participant, partner and lead journeys remain anchored in WRTS HubSpot.'},
  {name:'RunSignup', type:'Registration + race data', state:'Connector planned', detail:'Use API/import for events, participants and results. Do not duplicate registration payments.'},
  {name:'Race Roster', type:'Registration ecosystem', state:'Connector planned', detail:'Vendor-neutral adapter target for partner events using alternate registration stacks.'},
  {name:'Timing / tracking', type:'Race operations', state:'Third-party by design', detail:'EventOS consumes results and tracking signals while timing stays with specialist providers.'}
];

export const activityFeed = [
  {time:'Today', title:'Passport badge unlocked', detail:'Completed Wellness community mission.'},
  {time:'Yesterday', title:'Cause action recorded', detail:'Shared Monument Mile team invitation.'},
  {time:'Sep 22', title:'Community feedback captured', detail:'Rated event communications 9/10.'},
  {time:'Sep 18', title:'Referral converted', detail:'A teammate joined through your invite.'}
];
