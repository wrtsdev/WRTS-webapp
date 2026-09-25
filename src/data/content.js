export const siteConfig={
  currentQuarter:'Q3',
  navigation:['Home','The 4Ws','Challenges','Community','Impact','Partners','About'],
  message:'Move Forward Together.'
};

export const quarters=[
{quarter:'Q1',pillar:'Wellness',theme:'Move Better',months:'January–March',question:'How do we improve our health together?',purpose:'Build healthier individuals, families, and communities through movement and healthier habits.',focus:['Movement','Physical activity','Nutrition','Mental well-being','Community recreation','Preventive wellness']},
{quarter:'Q2',pillar:'Wealth',theme:'Build Capacity',months:'April–June',question:'How do we strengthen our financial future?',purpose:'Strengthen financial well-being, confidence, stability, and economic mobility.',focus:['Financial capability','Saving','Budgeting','Credit','Investing','Homeownership','Entrepreneurship']},
{quarter:'Q3',pillar:'Wisdom',theme:'Grow Together',months:'July–September',question:'How do we learn, lead, and grow together?',purpose:'Develop informed, connected, confident people and community leaders through learning, mentorship, and shared knowledge.',focus:['Leadership','Education','Mentorship','Reading','Youth development','Cultural learning','Community participation']},
{quarter:'Q4',pillar:'Work',theme:'Create Opportunity',months:'October–December',question:'How do we advance our careers, businesses, and opportunities?',purpose:'Increase access to careers, entrepreneurship, skills, networks, and economic opportunity.',focus:['Career readiness','Workforce development','Entrepreneurship','Networking','Skills development','Professional advancement']}
];
export const currentQuarter=quarters.find(q=>q.quarter===siteConfig.currentQuarter);
export const challenges=[
{title:'Community Challenge',pillar:'Wellness',quarter:'Q1',description:'Reusable challenge architecture ready for approved wellness programming.',status:'Prototype',format:'Individual or team',cta:'View Challenge'},
{title:'Run Your Money™',pillar:'Wealth',quarter:'Q2',description:'Financial-fitness challenge architecture for financial capability and confidence.',status:'Planned',format:'Individual',cta:'Learn More'},
{title:'Learning & Mentorship Challenge',pillar:'Wisdom',quarter:'Q3',description:'Prototype pathway for learning, mentorship and shared community knowledge.',status:'Prototype',format:'Individual or team',cta:'View Challenge'}
];
export const q4Product={
title:'RUN THE GIFT',
subtitle:'A WRTS Holiday Giving Challenge',
pillar:'Work',
quarter:'Q4',
season:'December',
distance:'3.1-mile virtual challenge',
theme:'Create Opportunity',
message:'THE GIFT IS YOU',
prompt:'WHAT WILL YOU GIVE?',
description:'A holiday movement experience that turns the Q4 Work pillar into action through participation, purpose, and a premium gift-box collector experience.',
features:['3.1-mile virtual challenge','Interactive gift-box medal concept','Removable ornament element','WRTS performance shirt','4Ws storytelling','250-unit first edition'],
pricing:[{label:'Early',price:'$49'},{label:'Standard',price:'$59'},{label:'Collector',price:'$79'},{label:'Family',price:'$159'}],
partnerNote:'The Gifted Crate is acknowledged as the holiday charity partner. Pricing and site language must not state or imply that a contribution or portion of proceeds is being made to The Gifted Crate.'
};

export const partnerTypes=[
{title:'Sponsor',copy:'Expand access to measurable community advancement.'},
{title:'Community Partner',copy:'Bring WRTS challenges and experiences into local communities.'},
{title:'Employer',copy:'Activate employees and communities through Four Ws programming.'},
{title:'Public-Sector Partner',copy:'Use WRTS programming for community engagement and advancement.'}
];
export const impactMetrics=[
{label:'Participants',value:'—'},{label:'Communities',value:'—'},{label:'Challenges Completed',value:'—'},{label:'Partner Organizations',value:'—'}
];
export const passportSample=[
{pillar:'Wellness',status:'3 activities'},{pillar:'Wealth',status:'1 challenge completed'},{pillar:'Wisdom',status:'Upcoming'},{pillar:'Work',status:'Upcoming'}
];