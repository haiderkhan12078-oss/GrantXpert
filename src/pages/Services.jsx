import React from 'react';
import { Layout, PageHero, CTA } from '../components';
import { services } from '../siteData';

export default function Services(){
  const steps=[['01','Funding fit','Clarify organisation, idea, objectives and potential programme routes.'],['02','Proposal strategy','Develop concept, partnership logic, workplan, budget and application story.'],['03','Submission readiness','Review quality, compliance, evidence and final documentation.'],['04','Project implementation','Support project, financial and administrative management after approval.']];
  return <Layout page="services"><PageHero eyebrow="Services" title="Support before, during and after the funding decision." text="The strongest value is not a single application. It is continuity across opportunity selection, proposal development, implementation, management, partnerships and capability building." image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=82" action={<a className="btn" href="funding-finder.html">Find a starting point →</a>}/>
    <section className="section"><div className="shell"><div className="section-head"><div><span className="eyebrow">Full lifecycle support</span><h2>Built around the full EU funding lifecycle.</h2></div></div><div className="service-grid">{services.map(s=><article className="service-card" key={s.title}><span className="service-icon">{s.icon}</span><h3>{s.title}</h3><p>{s.text}</p><a href={s.title==='Training'?'training.html':'contact.html'}>Discuss this service →</a></article>)}</div></div></section>
    <section className="section soft"><div className="shell"><span className="eyebrow">How it works</span><h2 style={{marginTop:10}}>From opportunity scan to final project delivery.</h2><div className="process">{steps.map(s=><article className="process-card" key={s[0]}><b>{s[0]}</b><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></div></section><CTA/></Layout>;
}
