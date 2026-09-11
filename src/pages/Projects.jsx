import React, { useState } from 'react';
import { Layout, PageHero, CTA } from '../components';
import { projects } from '../siteData';

export default function Projects(){
  const [filter,setFilter]=useState('All');
  const cats=['All',...projects.map(p=>p.category)];
  const visible=filter==='All'?projects:projects.filter(p=>p.category===filter);
  return <Layout page="projects"><PageHero eyebrow="Project portfolio" title="European projects with practical impact." text="A clearer portfolio helps visitors quickly understand GrantXpert experience across technology, skills, sustainability, entrepreneurship and social impact." image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1500&q=82" action={<a className="btn" href="https://www.grantxpert.eu/our-projects" target="_blank" rel="noreferrer">Official project portfolio ↗</a>}/>
    <section className="section"><div className="shell"><div className="filters">{cats.map(c=><button type="button" className={`filter ${filter===c?'active':''}`} key={c} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="project-grid">{visible.map(p=><article className="project-card" key={p.title}><div className="project-top"><span>{p.programme}</span><span>↗</span></div><h3>{p.title}</h3><div className="project-meta"><span className="pill">{p.years}</span><span className="pill">{p.category}</span></div><p>{p.text}</p><a href="https://www.grantxpert.eu/our-projects" target="_blank" rel="noreferrer">Official portfolio ↗</a></article>)}</div><div className="portfolio-note"><div className="service-icon">EU</div><div><strong>Selected portfolio view</strong><p>This concept highlights selected current/recent projects. GrantXpert's official site contains the broader portfolio.</p></div><a className="text-link" href="https://www.grantxpert.eu/our-projects" target="_blank" rel="noreferrer">See official portfolio ↗</a></div></div></section><CTA/></Layout>;
}
