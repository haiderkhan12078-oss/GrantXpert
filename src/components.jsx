import React, { useState } from 'react';
import { navItems } from './siteData';

export function Header({ page }) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="shell"><span>EU funding consulting & project support</span><div className="topbar-right"><a href="tel:+35722669266">+357 22 669266</a><a href="mailto:admin@grantxpert.eu">admin@grantxpert.eu</a></div></div></div>
    <header className="navbar"><div className="shell nav-wrap">
      <a className="brand" href="index.html"><span className="brand-mark">GX</span><span className="brand-copy"><strong>GrantXpert</strong><span>Consulting Ltd</span></span></a>
      <nav className="nav-links">{navItems.map(([label,href,key]) => <a key={key} className={page===key?'active':''} href={href}>{label}</a>)}</nav>
      <a className="btn small nav-cta" href="funding-finder.html">Find Funding →</a>
      <button className="menu-btn" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?'✕':'☰'}</button>
    </div>
    <nav className={`shell mobile-nav ${open?'open':''}`}>{navItems.map(([label,href,key]) => <a key={key} className={page===key?'active':''} href={href}>{label}</a>)}<a className="btn" href="funding-finder.html">Start Funding Match →</a></nav>
    </header>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-col"><a className="brand" href="index.html"><span className="brand-mark">GX</span><span className="brand-copy"><strong>GrantXpert</strong><span>Consulting Ltd</span></span></a><p>Supporting organisations across the EU funding lifecycle — from opportunity identification and proposal preparation to project implementation and training.</p></div>
    <div className="footer-col"><h4>Explore</h4><a href="about.html">About</a><a href="services.html">Services</a><a href="projects.html">Projects</a><a href="training.html">Training</a></div>
    <div className="footer-col"><h4>Contact</h4><a href="tel:+35722669266">+357 22 669266</a><a href="mailto:admin@grantxpert.eu">admin@grantxpert.eu</a><span>47 28th October Avenue, Office 302, Engomi, Nicosia, Cyprus</span></div>
    <div className="footer-col"><h4>Official site</h4><p>See current GrantXpert announcements and organisation information.</p><a className="text-link" href="https://www.grantxpert.eu/" target="_blank" rel="noreferrer">grantxpert.eu ↗</a></div>
  </div><div className="shell footer-bottom"><span>Premium digital concept for GrantXpert.</span><span>Funding Finder results are preliminary and do not represent eligibility or funding approval.</span></div></footer>;
}

export function Layout({ page, children }) {
  return <><Header page={page}/><main>{children}</main><Footer/></>;
}

export function PageHero({ eyebrow, title, text, image, action }) {
  return <section className="page-hero"><div className="shell"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{action}</div><div className="page-image"><img src={image} alt=""/><div className="image-badge"><span>GX</span><strong>European funding, made clearer.</strong></div></div></div></section>;
}

export function CTA() {
  return <section className="section cta"><div className="shell cta-box"><div><span className="eyebrow light">Have a project idea?</span><h2>Find the likely funding route, then validate it with an expert.</h2><p>Start with a preliminary match or contact GrantXpert directly for a proper review of active calls and requirements.</p></div><div className="cta-actions"><a className="btn gold" href="funding-finder.html">Use Funding Finder →</a><a className="btn ghost" href="contact.html">Contact GrantXpert →</a></div></div></section>;
}
