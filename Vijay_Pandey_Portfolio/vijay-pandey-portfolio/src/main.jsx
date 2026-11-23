import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin,
  Menu, X, Code2, Database, Workflow, Truck, Braces, GraduationCap,
  ExternalLink, Download, Terminal, Layers3, Cpu, Sparkles
} from "lucide-react";
import "./style.css";

const profile = {
  name: "Vijay Pandey",
  role: "Senior Backend & Full-Stack Engineer",
  location: "B82, fourth floor, Pocket B, rohini sec 1, 90, Deenbandhu Chotooram Marg, Pocket B, Sector 1, Rohini, Delhi, 110085, India",
  phone: "+91 9889835795",
  email: "vp.vijaypandey123@gmail.com",
  linkedin: "https://linkedin.com/in/vijay-pandey-78346b104/",
};

const skills = [
  { title: "Backend", items: ["PHP", "Laravel", "CodeIgniter", "REST APIs", "Webhooks", "Python (Basic)"], icon: Braces },
  { title: "Frontend", items: ["JavaScript", "React JS", "jQuery", "AJAX", "HTML5", "CSS", "Bootstrap"], icon: Code2 },
  { title: "Database & Optimization", items: ["MySQL", "Query Optimization", "Redis"], icon: Database },
  { title: "Integrations & Tools", items: ["Payment APIs", "Courier APIs", "OAuth / JWT", "Postman", "Git", "Composer", "VS Code", "Docker (Learning)"], icon: Workflow },
];

const experience = [
  {
    company: "Truxcargo", role: "PHP Developer", period: "Oct 2025 — Present",
    summary: "Building and maintaining logistics and shipping workflows for a B2B shipping platform.",
    points: [
      "Develop CodeIgniter-based order creation, rate calculation, charge modifiers and vendor-selection workflows.",
      "Integrate courier booking, tracking, pickup and NDR APIs; build billing, CSV import/export and admin features.",
      "Investigate production issues, validate integrations and improve complex backend business logic."
    ],
    project: "TruxCargo Whitelabel", url: "https://truxcargo.co.in/whitelabel/", icon: Truck
  },
  {
    company: "Mahindra First Choice (TGAYS Tech Pvt. Ltd.)", role: "PHP Developer", period: "Sep 2024 — Jun 2025",
    summary: "Worked on backend features for a certified used-car buying and selling platform.",
    points: [
      "Developed Laravel and MySQL backend features.",
      "Worked on API-driven business flows and integration-related functionality supporting vehicle commerce."
    ],
    project: "Vehicle commerce platform", url: "https://aiv3portal.ibbtrade.com/", icon: Layers3
  },
  {
    company: "SISL Infotech Pvt. Ltd.", role: "PHP Developer", period: "Jan 2023 — May 2024",
    summary: "Contributed to backend development for TalentEdge, an eLearning platform.",
    points: [
      "Built and maintained Laravel backend functionality and API integrations.",
      "Implemented application business logic and database-backed features."
    ],
    project: "TalentEdge", url: "https://talentedge.com/", icon: Code2
  },
  {
    company: "Nimbus Post Pvt. Ltd.", role: "PHP Developer", period: "Jan 2022 — Jan 2023",
    summary: "Worked on shipping and courier aggregation modules for a PAN-India logistics platform.",
    points: [
      "Developed CodeIgniter shipping and courier aggregation functionality.",
      "Supported order-processing workflows and integrations with external delivery services."
    ],
    project: "NimbusPost", url: "https://ship.nimbuspost.com/", icon: Truck
  },
  {
    company: "Pinnacle", role: "Core PHP Developer", period: "Nov 2020 — Nov 2021",
    summary: "Developed backend functionality for an online SSC examination preparation platform.",
    points: ["Maintained PHP application features, data handling and issue resolution."],
    project: "SSC CGL Pinnacle", url: "https://ssccglpinnacle.com/", icon: GraduationCap
  },
  {
    company: "72 Networks", role: "PHP Developer", period: "Sep 2019 — Aug 2020",
    summary: "Contributed to an aggregator platform serving OEMs and microfinance institutions.",
    points: ["Implemented and maintained PHP-backed application features and database workflows."],
    project: "72 Networks", url: "https://www.72networks.com/", icon: Workflow
  },
  {
    company: "Smaarambh Techno Management Pvt. Ltd.", role: "PHP Developer", period: "Mar 2019 — Aug 2019",
    summary: "Worked on PHP application development and maintenance for customer-facing web products.",
    points: ["Contributed to product-catalog and location-restricted deal workflows."],
    project: "PCT Members", url: "https://pctmembers.com/", icon: Layers3
  },
];

const capabilities = [
  ["Logistics workflows", "Rate engines, volumetric weight calculations, shipping orders, NDR, shipment tracking and invoice generation."],
  ["Third-party integrations", "Courier APIs, authentication, API error handling, CSV imports/exports and external service connectivity."],
  ["Database & delivery", "MySQL query optimization, backend debugging, performance troubleshooting, Git collaboration and production support."]
];

function Reveal({ children, delay = 0, className = "" }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>{children}</motion.div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ["About", "Skills", "Experience", "Focus", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">VP</span><span>VIJAY<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal><div className="eyebrow"><span className="pulse" /> OPEN TO MEANINGFUL OPPORTUNITIES <span className="eyebrow-line" /></div></Reveal>
              <Reveal delay={0.08}><h1>Building digital<br /><span className="gradient-text">systems that</span><br />move business.</h1></Reveal>
              <Reveal delay={0.16}><p className="hero-lede">I'm <strong>Vijay Pandey</strong> — a backend-focused engineer crafting reliable web applications, logistics workflows and API-driven products.</p></Reveal>
              <Reveal delay={0.24}><div className="hero-actions"><a className="button button-primary" href="#experience">Explore my work <ArrowDown size={16} /></a><a className="button button-ghost" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={16} /></a></div></Reveal>
              <Reveal delay={0.3}><div className="hero-meta"><span><MapPin size={14} /> {profile.location}</span><span className="meta-separator" /><span><Terminal size={14} /> PHP · Laravel · APIs · React</span></div></Reveal>
            </div>
            <Reveal delay={0.2} className="hero-art-wrap">
              <div className="hero-art">
                <div className="orbit orbit-one" /><div className="orbit orbit-two" />
                <div className="art-glow" />
                <div className="code-window">
                  <div className="window-head"><div className="window-dots"><i /><i /><i /></div><span>developer.php</span><span className="window-lock">●</span></div>
                  <div className="code-body">
                    <div><span className="ln">01</span><span className="code-purple">class</span> <span className="code-blue">Engineer</span> <span className="code-muted">{"{"}</span></div>
                    <div><span className="ln">02</span>  <span className="code-purple">public</span> <span className="code-blue">$focus</span> = [</div>
                    <div><span className="ln">03</span>    <span className="code-green">'backend'</span>,</div>
                    <div><span className="ln">04</span>    <span className="code-green">'integrations'</span>,</div>
                    <div><span className="ln">05</span>    <span className="code-green">'problem-solving'</span></div>
                    <div><span className="ln">06</span>  ];</div>
                    <div><span className="ln">07</span>  <span className="code-purple">public function</span> <span className="code-yellow">build</span>() {"{"}</div>
                    <div><span className="ln">08</span>    <span className="code-purple">return</span> <span className="code-green">'impact'</span>;</div>
                    <div><span className="ln">09</span>  {"}"}</div>
                    <div><span className="ln">10</span><span className="code-muted">{"}"}</span></div>
                    <div className="cursor-line"><span className="ln">11</span><span className="cursor" /></div>
                  </div>
                  <div className="window-foot"><span><span className="status-dot" /> SYSTEMS THINKING</span><span>UTF-8</span></div>
                </div>
                <div className="floating-chip chip-top"><Code2 size={15} /> Clean code</div>
                <div className="floating-chip chip-bottom"><Cpu size={15} /> Built to scale</div>
                <div className="art-index">01 / ENGINEERING</div>
              </div>
            </Reveal>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /><span className="hero-bottom-right">PORTFOLIO — 2026</span></div>
        </section>

        <section className="intro section-wrap" id="about">
          <Reveal><div className="section-kicker">01 / ABOUT ME</div></Reveal>
          <div className="intro-grid">
            <Reveal><h2>Backend first.<br /><span className="muted-heading">Product minded.</span></h2></Reveal>
            <Reveal delay={0.1}><div className="intro-content"><p className="intro-lead">I turn complex business requirements into dependable software.</p><p>My experience spans logistics, automotive commerce, eLearning and B2B platforms. I work primarily with PHP, Laravel, CodeIgniter and MySQL, with a strong focus on APIs, business workflows, integrations and production problem-solving.</p><p>I'm also expanding my full-stack toolkit with React and foundational Python.</p><div className="inline-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={14} /></a></div></div></Reveal>
          </div>
          <div className="stats-row">
            <div><strong>PHP</strong><span>Core strength</span></div><div><strong>API</strong><span>Integrations</span></div><div><strong>SQL</strong><span>Data & performance</span></div><div><strong>React</strong><span>Growing expertise</span></div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <Reveal><div className="section-kicker">02 / TOOLKIT</div><div className="section-heading"><h2>Tools of the trade<span className="accent">.</span></h2><p>A practical stack for building, connecting and improving web products.</p></div></Reveal>
          <div className="skills-grid">
            {skills.map((group, i) => {
              const Icon = group.icon;
              return <Reveal key={group.title} delay={i * 0.06}><article className="skill-card"><div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="card-index">0{i + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></article></Reveal>;
            })}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <Reveal><div className="section-kicker">03 / CAREER PATH</div><div className="section-heading"><h2>Experience in action<span className="accent">.</span></h2><p>Teams, products and systems I've contributed to.</p></div></Reveal>
          <div className="timeline">
            {experience.map((job, i) => {
              const Icon = job.icon;
              return <Reveal key={job.company} delay={i * 0.035}><article className="timeline-item"><div className="timeline-marker"><Icon size={17} /></div><div className="timeline-card"><div className="timeline-head"><div><div className="job-period">{job.period}</div><h3>{job.company}</h3><div className="job-role">{job.role}</div></div><a className="project-link" href={job.url} target="_blank" rel="noreferrer">{job.project} <ExternalLink size={13} /></a></div><p className="job-summary">{job.summary}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article></Reveal>;
            })}
          </div>
        </section>

        <section className="focus-section section-wrap" id="focus">
          <Reveal><div className="section-kicker">04 / WHAT I BRING</div><div className="section-heading"><h2>Beyond the framework<span className="accent">.</span></h2><p>Engineering is more than writing code. It's understanding how the whole system works.</p></div></Reveal>
          <div className="capability-grid">
            {capabilities.map(([title, desc], i) => <Reveal key={title} delay={i * 0.08}><article className="capability-card"><span className="cap-number">0{i + 1}</span><h3>{title}</h3><p>{desc}</p></article></Reveal>)}
          </div>
          <Reveal><div className="education-card"><div className="education-icon"><GraduationCap size={22} /></div><div><div className="section-kicker">EDUCATION</div><h3>Master of Computer Applications (MCA)</h3><p>Dr. APJ Abdul Kalam Technical University, Lucknow · 2016</p><div className="education-secondary">Bachelor of Computer Applications (BCA) · TRS College, Rewa · 2012</div></div></div></Reveal>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <Reveal><div className="section-kicker">05 / NEXT STEP</div><div className="contact-panel"><div className="contact-orb" /><div className="contact-content"><span className="contact-label"><Sparkles size={14} /> HAVE A PROJECT OR ROLE IN MIND?</span><h2>Let's build<br /><span className="gradient-text">something useful.</span></h2><p>For backend engineering, Laravel development, API integrations or full-stack opportunities, I'd be glad to connect.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16} /></a></div><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={17} /><span>{profile.email}</span><ArrowUpRight size={14} /></a><a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={17} /><span>{profile.phone}</span><ArrowUpRight size={14} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn profile</span><ArrowUpRight size={14} /></a><div className="contact-location"><MapPin size={17} /><span>{profile.location}</span></div></div></div></Reveal>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">VP</span><span>VIJAY<span className="brand-dot">.</span></span></a><span>Designed & built with care · © {new Date().getFullYear()} Vijay Pandey</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
