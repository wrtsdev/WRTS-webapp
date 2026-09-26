import {useMemo,useState} from 'react';
import './eventos.css';
import {
  eventOSMetrics,
  upcomingEvents,
  passport,
  causeImpact,
  intelligenceSignals,
  segments,
  integrationCards,
  activityFeed
} from './data/eventos';

const navItems = [
  ['overview','Command'],
  ['events','Events'],
  ['passport','Passport'],
  ['causes','Causes'],
  ['intelligence','Intelligence'],
  ['integrations','Integrations']
];

function Brand(){
  return <a className="osBrand" href="#eventos">
    <img src="/assets/brand/wrts-primary-logo.webp" alt="WRTS"/>
    <span><b>WRTS</b><small>EventOS Beta</small></span>
  </a>
}

function Metric({item}){
  return <article className="osMetric">
    <span>{item.label}</span>
    <strong>{item.value}</strong>
    <small>{item.delta}</small>
  </article>
}

function EventCard({event}){
  return <article className="osEventCard">
    <div className="osEventTop">
      <span className="osPill">{event.format}</span>
      <span className="osStatus">{event.status}</span>
    </div>
    <h3>{event.title}</h3>
    <p>{event.date} · {event.pillar}</p>
    <div className="osProgress"><span style={{width:event.progress+'%'}}/></div>
    <div className="osEventMeta"><span>{event.participants ? event.participants.toLocaleString() : '—'} participants</span><span>{event.cause}</span></div>
  </article>
}

function Overview({role,setView}){
  const metrics=eventOSMetrics[role];
  return <>
    <section className="osHeroCard">
      <div>
        <span className="osEyebrow">Community operating system</span>
        <h1>{role==='participant'?'Your movement has a memory.':'See beyond race day.'}</h1>
        <p>{role==='participant'
          ? 'EventOS turns every event, challenge, cause action and referral into one persistent community journey.'
          : 'EventOS connects participation, cause engagement, retention and sponsor value without replacing race registration or timing systems.'}</p>
        <div className="osHeroActions">
          <button onClick={()=>setView(role==='participant'?'passport':'intelligence')}>{role==='participant'?'Open my Passport':'Open Intelligence'}</button>
          <button className="ghost" onClick={()=>setView('events')}>View events</button>
        </div>
      </div>
      <div className="osSignal">
        <span>LIVE PROTOTYPE SIGNAL</span>
        <strong>{role==='participant'?'82':'74%'}</strong>
        <small>{role==='participant'?'community momentum':'impact coverage'}</small>
      </div>
    </section>
    <div className="osMetrics">{metrics.map(x=><Metric item={x} key={x.label}/>)}</div>
    <div className="osSplit">
      <section className="osPanel">
        <div className="osPanelHead"><div><span className="osEyebrow">Next moves</span><h2>Events in motion</h2></div><button onClick={()=>setView('events')}>All events →</button></div>
        <div className="osEventList">{upcomingEvents.slice(0,2).map(e=><EventCard event={e} key={e.id}/>)}</div>
      </section>
      <section className="osPanel">
        <div className="osPanelHead"><div><span className="osEyebrow">Community pulse</span><h2>{role==='participant'?'Recent activity':'Top signals'}</h2></div></div>
        {role==='participant'
          ? <div className="osFeed">{activityFeed.map(x=><div key={x.title}><time>{x.time}</time><p><b>{x.title}</b><span>{x.detail}</span></p></div>)}</div>
          : <div className="osSignalList">{intelligenceSignals.slice(0,3).map(x=><div key={x.title}><span>{x.title}</span><b>{x.score}</b></div>)}</div>}
      </section>
    </div>
  </>
}

function Events(){
  return <section>
    <div className="osPageHead"><span className="osEyebrow">Experience portfolio</span><h1>Events</h1><p>One operating layer across WRTS-owned experiences and partner activations.</p></div>
    <div className="osEventGrid">{upcomingEvents.map(e=><EventCard event={e} key={e.id}/>)}</div>
    <div className="osPanel osCallout">
      <span className="osEyebrow">Build vs buy</span>
      <h2>EventOS orchestrates. Specialists transact and time.</h2>
      <p>Registration, payment processing, bibs, timing and live tracking remain external capabilities. EventOS owns the persistent participant identity, community journey, cause engagement, lifecycle automation and intelligence layer.</p>
    </div>
  </section>
}

function Passport(){
  return <section>
    <div className="osPageHead"><span className="osEyebrow">Persistent identity</span><h1>WRTS Passport</h1><p>Your record of movement, learning, service, cause support and progress across the Four Ws.</p></div>
    <div className="osPassportGrid">
      <div className="osPassportCard">
        <div className="osPassportTitle"><span>MY WRTS PASSPORT</span><b>1,520 PTS</b></div>
        {passport.map(x=><div className={'osPassportRow '+x.state.toLowerCase().replaceAll(' ','-')} key={x.pillar}>
          <div><small>{x.quarter}</small><strong>{x.pillar}</strong></div>
          <div><b>{x.points}</b><span>{x.state}</span></div>
        </div>)}
      </div>
      <div className="osPanel">
        <span className="osEyebrow">Why it matters</span>
        <h2>Registration becomes relationship.</h2>
        <p>Passport is the identity spine of EventOS. It is designed to survive beyond any single event vendor and create a reusable history of how someone participates in WRTS.</p>
        <ul className="osList"><li>Events + challenges</li><li>Badges + milestones</li><li>Cause actions</li><li>Referrals + teams</li><li>4Ws progress</li><li>Community roles</li></ul>
      </div>
    </div>
  </section>
}

function Causes(){
  return <section>
    <div className="osPageHead"><span className="osEyebrow">CauseOS prototype</span><h1>Impact people can see.</h1><p>Move cause participation from a logo on race day to a measurable part of the participant journey.</p></div>
    <div className="osMetrics">{causeImpact.map(x=><article className="osMetric" key={x.label}><span>{x.label}</span><strong>{x.value}</strong><small>Prototype portfolio signal</small></article>)}</div>
    <div className="osPanel osImpactStory">
      <div><span className="osEyebrow">Impact story</span><h2>Community wellness access</h2><p>Monument Mile participants are contributing movement, referrals, volunteer interest and cause visibility—not simply registration revenue.</p></div>
      <div className="osImpactMeter"><strong>68%</strong><span>of current participants selected at least one cause-engagement action</span></div>
    </div>
  </section>
}

function Intelligence(){
  return <section>
    <div className="osPageHead"><span className="osEyebrow">Community Intelligence</span><h1>Know what should happen next.</h1><p>Turn event behavior and consented feedback into decisions that improve retention, partner value and community relevance.</p></div>
    <div className="osIntelGrid">{intelligenceSignals.map(x=><article className="osIntelCard" key={x.title}><div><span>{x.title}</span><strong>{x.score}</strong></div><div className="osScore"><span style={{width:x.score+'%'}}/></div><p>{x.note}</p></article>)}</div>
    <div className="osPanel">
      <div className="osPanelHead"><div><span className="osEyebrow">Audience segments</span><h2>Recommended next actions</h2></div></div>
      <div className="osTable">
        {segments.map(x=><div className="osTr" key={x.name}><strong>{x.name}</strong><span>{x.size} people</span><span>{x.repeat} repeat</span><b>{x.action}</b></div>)}
      </div>
      <p className="osFine">Prototype analytics only. Production Community Intelligence should use consented, purpose-limited data and avoid sensitive profiling.</p>
    </div>
  </section>
}

function Integrations(){
  return <section>
    <div className="osPageHead"><span className="osEyebrow">Integration layer</span><h1>Vendor-neutral by design.</h1><p>EventOS should connect the ecosystem instead of forcing race directors to abandon the tools they already trust.</p></div>
    <div className="osIntegrationGrid">{integrationCards.map(x=><article className="osIntegration" key={x.name}><div className="osIntegrationIcon">{x.name.slice(0,2).toUpperCase()}</div><div><h3>{x.name}</h3><span>{x.type}</span><p>{x.detail}</p><b>{x.state}</b></div></article>)}</div>
    <div className="osPanel osArchitecture">
      <span>REGISTRATION / TIMING / FUNDRAISING</span><b>↓</b><strong>WRTS EVENTOS INTEGRATION LAYER</strong><b>↓</b><span>PASSPORT · COMMUNITY · CAUSEOS · INTELLIGENCE</span><b>↓</b><strong>HUBSPOT LIFECYCLE + PARTNER REPORTING</strong>
    </div>
  </section>
}

export default function EventOS(){
  const [view,setView]=useState('overview');
  const [role,setRole]=useState('participant');
  const title=useMemo(()=>navItems.find(x=>x[0]===view)?.[1]||'Command',[view]);

  return <div className="eventOS">
    <header className="osTopbar">
      <Brand/>
      <div className="osTopActions">
        <div className="osRoleToggle" aria-label="Prototype role">
          <button className={role==='participant'?'active':''} onClick={()=>setRole('participant')}>Participant</button>
          <button className={role==='organizer'?'active':''} onClick={()=>setRole('organizer')}>Organizer</button>
        </div>
        <a href="#home" className="osExit">WRTS.com</a>
      </div>
    </header>
    <div className="osShell">
      <aside className="osSidebar">
        <span className="osSidebarLabel">EVENTOS</span>
        {navItems.map(([id,label])=><button className={view===id?'active':''} onClick={()=>setView(id)} key={id}><i>{label.slice(0,1)}</i><span>{label}</span></button>)}
        <div className="osSidebarFoot"><span>Prototype</span><b>v0.1</b></div>
      </aside>
      <main className="osMain">
        <div className="osMobileTitle"><Brand/><span>{title}</span></div>
        {view==='overview'&&<Overview role={role} setView={setView}/>}
        {view==='events'&&<Events/>}
        {view==='passport'&&<Passport/>}
        {view==='causes'&&<Causes/>}
        {view==='intelligence'&&<Intelligence/>}
        {view==='integrations'&&<Integrations/>}
      </main>
    </div>
    <nav className="osMobileNav">
      {navItems.slice(0,5).map(([id,label])=><button className={view===id?'active':''} onClick={()=>setView(id)} key={id}><i>{label.slice(0,1)}</i><span>{label}</span></button>)}
    </nav>
  </div>
}
