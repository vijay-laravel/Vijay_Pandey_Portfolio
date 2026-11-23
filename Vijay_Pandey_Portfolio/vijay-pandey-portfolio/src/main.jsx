          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /><span className="hero-bottom-right">PORTFOLIO — 2026</span></div>
        </section>

        <section className="intro section-wrap" id="about">
          <Reveal><div className="section-kicker">01 / ABOUT ME</div></Reveal>
          <div className="intro-grid">
            <Reveal><h2>Backend first.<br /><span className="muted-heading">Product minded.</span></h2></Reveal>
            <Reveal delay={0.1}>
              <div className="intro-content">
                <p className="intro-lead">I turn complex business requirements into dependable software.</p>
                <p>My experience spans logistics, automotive commerce, eLearning and B2B platforms. I work primarily with PHP, Laravel, CodeIgniter and MySQL, with a strong focus on APIs, business workflows, integrations and production problem-solving.</p>
                <p>I'm also expanding my full-stack toolkit with React and foundational Python, and I’m open to both full-time opportunities and freelance development work.</p>
                <div className="inline-links">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
                  <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
                  <a href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="stats-row">
            <div><strong>5+ Years</strong><span>Development experience</span></div>
            <div><strong>PHP</strong><span>Core strength</span></div>
            <div><strong>API</strong><span>Integrations</span></div>
            <div><strong>React</strong><span>Full-stack toolkit</span></div>
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

        <section className="projects-section section-wrap" id="projects">
          <Reveal><div className="section-kicker">04 / SELECTED WORK</div><div className="section-heading"><h2>Projects & case studies<span className="accent">.</span></h2><p>Selected platform work and functional areas I've contributed to. Modules shown here belong to the same logistics platform.</p></div></Reveal>
          <div className="projects-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return <Reveal key={project.number} delay={i * 0.07}>
                <article className="project-card">
                  <div className="project-top"><span className="project-icon"><Icon size={21} /></span><span className="card-index">{project.number} / CASE STUDY</span></div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-card-link" href={project.link} target="_blank" rel="noreferrer">View platform <ExternalLink size={14} /></a>
                </article>
              </Reveal>;
            })}
          </div>
        </section>

        <section className="logistics-section section-wrap" id="logistics">
          <Reveal><div className="section-kicker">05 / PLATFORM MODULES</div><div className="section-heading"><h2>Connected customer operations<span className="accent">.</span></h2><p>Examples of customer, billing and support workflows within the logistics platform.</p></div></Reveal>
          <div className="logistics-grid">
            {logisticsModules.map((module, i) => {
              const Icon = module.icon;
              return <Reveal key={module.title} delay={i * 0.08}><article className="logistics-card"><div className="logistics-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="card-index">0{i + 1}</span></div><h3>{module.title}</h3><ul>{module.items.map(item => <li key={item}>{item}</li>)}</ul></article></Reveal>;
            })}
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <Reveal><div className="section-kicker">06 / FREELANCE SERVICES</div><div className="section-heading"><h2>How I can help<span className="accent">.</span></h2><p>Practical development support for businesses, teams and growing products.</p></div></Reveal>
          <div className="services-grid">
            {services.map((service, i) => {
              const Icon = service.icon;
              return <Reveal key={service.title} delay={i * 0.07}><article className="service-card"><span className="service-icon"><Icon size={21} /></span><h3>{service.title}</h3><p>{service.text}</p><a href={`mailto:${profile.email}?subject=${encodeURIComponent("Freelance project enquiry")}`}>Discuss a project <ArrowUpRight size={14} /></a></article></Reveal>;
            })}
          </div>
        </section>

        <section className="focus-section section-wrap" id="focus">
          <Reveal><div className="section-kicker">07 / WHAT I BRING</div><div className="section-heading"><h2>Beyond the framework<span className="accent">.</span></h2><p>Engineering is more than writing code. It's understanding how the whole system works.</p></div></Reveal>
          <div className="capability-grid">
            {capabilities.map(([title, desc], i) => <Reveal key={title} delay={i * 0.08}><article className="capability-card"><span className="cap-number">0{i + 1}</span><h3>{title}</h3><p>{desc}</p></article></Reveal>)}
          </div>
          <Reveal><div className="education-card"><div className="education-icon"><GraduationCap size={22} /></div><div><div className="section-kicker">EDUCATION</div><h3>Master of Computer Applications (MCA)</h3><p>Dr. APJ Abdul Kalam Technical University, Lucknow · 2016</p><div className="education-secondary">Bachelor of Computer Applications (BCA) · TRS College, Rewa · 2012</div></div></div></Reveal>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <Reveal><div className="section-kicker">08 / NEXT STEP</div><div className="contact-panel">
            <div className="contact-orb" />
            <div className="contact-content">
              <span className="contact-label"><Sparkles size={14} /> HAVE A PROJECT OR ROLE IN MIND?</span>
              <h2>Let's build<br /><span className="gradient-text">something useful.</span></h2>
              <p>For backend engineering roles, Laravel development, API integrations, bug fixing or freelance projects, I'd be glad to connect.</p>
              <a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={17} /><span>{profile.email}</span><ArrowUpRight size={14} /></a>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={17} /><span>{profile.phone}</span><ArrowUpRight size={14} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn profile</span><ArrowUpRight size={14} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub profile</span><ArrowUpRight size={14} /></a>
              <div className="contact-location"><MapPin size={17} /><span>{profile.location}</span></div>
            </div>
          </div></Reveal>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">VP</span><span>VIJAY<span className="brand-dot">.</span></span></a>
        <span>Designed & built with care · © {new Date().getFullYear()} Vijay Pandey</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
