import { useEffect, useMemo, useState } from "react";
import {
  Activity, ArrowDown, ArrowRight, ArrowUpRight, AudioLines, BookOpen,
  BrainCircuit, Check, ChevronRight, Code2, Cpu, Database, ExternalLink,
  Github, Globe2, Linkedin, Mail, Menu, Network, ScanLine, ShieldCheck,
  Sparkles, Workflow, X, Phone
} from "lucide-react";
import { experience, projects, skillGroups } from "./data";
import ProjectVisual from "./ProjectVisual";
import CaseStudyDialog from "./CaseStudy";
import HeroExperience from "./HeroExperience";
import SignalLab from "./SignalLab";
import { ResumeLink, ContactCards, MobileQuickDock, ResumeHighlight, CONTACT_EMAIL, CONTACT_PHONE, PHONE_HREF } from "./ContactUX";

const email = "muhammadsaqlainarshad@gmail.com";
const github = "https://github.com/saqlainqurashi";
const linkedin = "https://www.linkedin.com/in/muhammad-saqlain-arshad/";

const filters = ["All", "Enterprise AI", "GenAI & RAG", "Automation", "Computer Vision"];

function Mark() {
  return (
    <a className="brand" href="#top" aria-label="Saqlain Lab, back to top">
      <span className="brand-symbol">S<span>/</span></span>
      <span className="brand-name">SAQLAIN<span className="brand-slashes">//</span>LAB</span>
    </a>
  );
}

function ProjectCard({ project, onSelect, featured = false }) {
  function onPointerMove(event) {
    if (event.pointerType === "touch" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    event.currentTarget.style.setProperty("--card-rotate-x", ((.5 - y) * 4.3) + "deg");
    event.currentTarget.style.setProperty("--card-rotate-y", ((x - .5) * 5.8) + "deg");
    event.currentTarget.style.setProperty("--pointer-x", (x * 100) + "%");
    event.currentTarget.style.setProperty("--pointer-y", (y * 100) + "%");
  }
  function onPointerLeave(event) {
    event.currentTarget.style.setProperty("--card-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--card-rotate-y", "0deg");
  }
  return (
    <article className={featured ? "project-card project-card-featured" : "project-card"}
       onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <button className="project-visual-button" onClick={() => onSelect(project)}
        aria-label={"View " + project.title + " case study"}>
        <ProjectVisual project={project} />
      </button>
      <div className="project-information">
        <div className="project-meta"><span>{project.type}</span><span>{project.period}</span></div>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <button onClick={() => onSelect(project)} className="round-arrow"
            aria-label={"Read about " + project.title}><ArrowUpRight size={18}/></button>
        </div>
        <p>{project.description}</p>
        <div className="project-tags">{project.stack.slice(0,4).map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );
}

function getCaseFromUrl() {
  const id = new URLSearchParams(window.location.search).get("case");
  return projects.find(project => project.id === id) || null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(getCaseFromUrl);
  useEffect(() => {
    function onBackOrForward() { setSelectedProject(getCaseFromUrl()); }
    window.addEventListener("popstate", onBackOrForward);
    return () => window.removeEventListener("popstate", onBackOrForward);
  }, []);
  function openProject(project) {
    const url = new URL(window.location.href);
    url.searchParams.set("case", project.id);
    window.history.pushState({case: project.id}, "", url);
    setSelectedProject(project);
  }
  function closeProject() {
    const url = new URL(window.location.href);
    url.searchParams.delete("case");
    window.history.pushState({}, "", url);
    setSelectedProject(null);
  }
  const visibleProjects = useMemo(() =>
    filter === "All" ? projects : projects.filter(project => project.group === filter), [filter]);

  return (
    <div id="top" className="site-shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="container nav-inner">
          <Mark />
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            {["About", "Lab", "Work", "Experience", "Expertise"].map(label =>
              <a key={label} href={"#" + label.toLowerCase()} onClick={() => setMenuOpen(false)}>{label}</a>
            )}
            <a className="nav-mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <ResumeLink className="resume-nav-link">Download CV</ResumeLink>
          </nav>
          <ResumeLink className="nav-desktop-resume"><span>RESUME</span></ResumeLink>
          <a className="nav-contact" href="#contact">LET'S TALK <ArrowUpRight size={15}/></a>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(value => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23}/> : <Menu size={23}/>}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <span className="hero-ambient" aria-hidden="true">AI/</span>
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot"/> SENIOR AI / ML ENGINEER <span className="eyebrow-line"/></div>
            <h1 id="hero-title">Beyond<br/><em>the prompt.</em><br/>Into <span className="hero-outline">production.</span></h1>
            <p className="hero-description">I'm <strong>Muhammad Saqlain Arshad</strong>, a Senior AI/ML Engineer building intelligent software that goes beyond demos — from RAG and AI automation to enterprise platforms that solve real problems.</p>
            <div className="hero-buttons">
              <a href="#work" className="button button-primary">Explore my work <ArrowUpRight size={18}/></a>
              <ResumeLink className="button button-outline hero-cta-resume">Download CV <ArrowUpRight size={17}/></ResumeLink>
            </div>
            <div className="hero-direct-contact"><a href={"mailto:" + CONTACT_EMAIL} aria-label={"Email " + CONTACT_EMAIL}><Mail size={15}/>{CONTACT_EMAIL}</a><a href={PHONE_HREF} aria-label={"Call " + CONTACT_PHONE}><Phone size={15}/>{CONTACT_PHONE}</a></div>
            <div className="hero-footnote"><span className="footnote-line"/><span>BASED IN LAHORE, PAKISTAN <b>·</b> WORKING ACROSS BORDERS</span></div>
          </div>
          <HeroExperience />
          <a className="scroll-prompt" href="#about"><ArrowDown size={14}/> SCROLL TO EXPLORE</a>
        </section>

        <div className="ticker" aria-label="Specializations"><div className="ticker-track">
          {["GENERATIVE AI", "AGENTIC WORKFLOWS", "RAG SYSTEMS", "MACHINE LEARNING", "AI AUTOMATION", "CLOUD ENGINEERING", "GENERATIVE AI", "AGENTIC WORKFLOWS", "RAG SYSTEMS", "MACHINE LEARNING", "AI AUTOMATION", "CLOUD ENGINEERING"].map((item, i) =>
            <span key={i}>{item}<b>✳</b></span>
          )}
        </div></div>

        <section className="about section container" id="about">
          <div className="section-heading"><div className="section-kicker"><span>01 / ABOUT</span><span className="kicker-rule"/></div></div>
          <div className="about-layout">
            <div><h2 className="statement">I don't just build models.<br/><span>I build what comes next.</span></h2></div>
            <div className="about-copy">
              <p>My work sits at the intersection of <strong>AI research, product engineering, and real-world delivery</strong>. I design intelligent workflows, build reliable APIs, and connect emerging AI capabilities with systems that people actually use.</p>
              <p>From banking and insurance platforms to retrieval-augmented assistants and automation agents, I enjoy the full journey from system design to deployment.</p>
              <a className="inline-link" href="#experience">More about my journey <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <ResumeHighlight/>
          <div className="info-strip">
            <div><span className="info-icon"><Code2 size={20}/></span><span><strong>Since 2022</strong><small>Building AI solutions</small></span></div>
            <div><span className="info-icon"><Network size={20}/></span><span><strong>Enterprise + independent</strong><small>Real-world engineering</small></span></div>
            <div><span className="info-icon"><Globe2 size={20}/></span><span><strong>Remote & collaborative</strong><small>Open to global opportunities</small></span></div>
          </div>
        </section>

        <SignalLab />

        <section className="work section container" id="work">
          <div className="section-heading"><div className="section-kicker"><span>03 / SELECTED WORK</span><span className="kicker-rule"/></div>
            <div className="section-heading-main"><h2>Proof over <em>promises.</em></h2><p>A selection of systems I've designed, developed, or contributed to.</p></div>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map(item => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? "filter-button active" : "filter-button"}>{item}</button>)}
          </div>
          <div className="project-grid">{visibleProjects.map((project, i) =>
            <ProjectCard key={project.id} project={project} featured={filter === "All" && i === 0} onSelect={openProject}/>
          )}</div>
          <div className="arch-feature">
            <div className="arch-feature-copy">
              <span>DEEP DIVE / FEATURED ARCHITECTURE</span>
              <h3>Inside the RAG pipeline.</h3>
              <p>See how KnowledgeForge AI moves from uploaded documents to grounded answers. Explore every stage of the system.</p>
              <button type="button" onClick={() => openProject(projects[2])}>Explore the architecture <ArrowUpRight size={16}/></button>
            </div>
            <div className="arch-feature-flow" aria-hidden="true"><span>INGEST</span><ArrowRight size={16}/><span>EMBED</span><ArrowRight size={16}/><span>RETRIEVE</span><ArrowRight size={16}/><span>ANSWER</span></div>
          </div>
          <p className="work-note"><Sparkles size={15}/> Project previews are original illustrations. Select a project to read the case study and explore its conceptual architecture.</p>
        </section>

        <section className="experience-section section" id="experience">
          <div className="container experience-layout">
            <div className="experience-intro">
              <div className="section-kicker"><span>04 / THE JOURNEY</span><span className="kicker-rule"/></div>
              <h2>Built through<br/><em>experience.</em></h2>
              <p>Across enterprise platforms, automation, and applied machine learning, each role has shaped how I approach engineering.</p>
              <div className="experience-decoration"><span>DESIGN</span><span>→</span><span>BUILD</span><span>→</span><span>SHIP</span></div>
            </div>
            <div className="timeline">
              {experience.map((item, i) => <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">{i === 0 ? <span className="current-dot"/> : <span/>}</div>
                <div className="timeline-content"><div className="timeline-date">{item.period}</div><h3>{item.role}</h3><div className="timeline-company">{item.company}</div><p>{item.summary}</p></div>
              </article>)}
              <div className="education-note"><BookOpen size={18}/><span><strong>Foundation</strong> — BSc Electrical Engineering, Punjab University (2019–2023)</span></div>
            </div>
          </div>
        </section>

        <section className="expertise section container" id="expertise">
          <div className="section-heading"><div className="section-kicker"><span>05 / TOOLKIT</span><span className="kicker-rule"/></div>
            <div className="section-heading-main"><h2>My engineering <em>toolkit.</em></h2><p>Tools are never the goal. They're how ideas become reliable systems.</p></div>
          </div>
          <div className="skills-grid">
            {skillGroups.map(group => <div className="skill-card" key={group.title}>
              <div className="skill-card-top"><span>{group.number}</span><Cpu size={21}/></div>
              <h3>{group.title}</h3><p>{group.subtitle}</p>
              <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>)}
          </div>
          <div className="credential-note"><Check size={17}/> Certifications across Microsoft Azure AI, Huawei HCIA, and transformer models.</div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container contact-inner">
            <div className="section-kicker"><span>06 / WHAT'S NEXT?</span><span className="kicker-rule"/></div>
            <div className="contact-content"><div><p className="contact-eyebrow">HAVE A CHALLENGE IN MIND?</p><h2>Let's build something<br/><em>intelligent.</em></h2><p className="contact-description">Whether it's an AI product, automation idea, or engineering opportunity, I'd love to hear what you're working on.</p></div>
              <a href={"mailto:" + email + "?subject=Let's%20build%20something"} className="contact-arrow" aria-label="Start an email conversation"><ArrowUpRight size={40}/></a></div>
            <ContactCards/>
            <div className="contact-bottom"><a className="email-link" href={"mailto:" + email}>{email} <ArrowUpRight size={17}/></a>
              <div className="social-links"><a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a><a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a><a href={"mailto:" + email} aria-label="Email"><Mail size={20}/></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><Mark/><span>© {new Date().getFullYear()} Muhammad Saqlain Arshad</span><a className="phone-link-footer" href={PHONE_HREF}><Phone size={14}/>{CONTACT_PHONE}</a><a href="#top">BACK TO TOP ↑</a></div></footer>
      <MobileQuickDock/>
      <CaseStudyDialog project={selectedProject} onClose={closeProject}/>
    </div>
  );
}

export default App;
