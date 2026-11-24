import { Component, lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, AudioLines, BrainCircuit, ChevronDown, Code2,
  Database, Download, Github, Globe2, Mail, Menu, Network, Phone,
  ScanLine, ShieldCheck, Workflow, X, Linkedin
} from "lucide-react";
import { projects, experience, skillGroups } from "./data";
import CaseStudyDialog from "./CaseStudy";
import { RESUME_PATH, CONTACT_EMAIL, CONTACT_PHONE, PHONE_HREF } from "./ContactUX";

const github = "https://github.com/saqlainqurashi";
const linkedin = "https://www.linkedin.com/in/muhammad-saqlain-arshad/";
const Scene = lazy(() => import("./HeroScene.jsx"));

function OrbFallback() {
  return <div className="calm-orb-fallback" aria-hidden="true"><span/><span/><span/></div>;
}

class OrbBoundary extends Component {
  constructor(props) { super(props); this.state = {error: false}; }
  static getDerivedStateFromError() { return {error: true}; }
  render() { return this.state.error ? <OrbFallback/> : this.props.children; }
}

function QuietOrb() {
  const root = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 760px) and (prefers-reduced-motion: no-preference)");
    const check = () => {
      if (!media.matches) { setEnabled(false); return; }
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl2", {failIfMajorPerformanceCaveat:true}) || canvas.getContext("webgl", {failIfMajorPerformanceCaveat:true});
        setEnabled(Boolean(gl));
        gl?.getExtension("WEBGL_lose_context")?.loseContext();
      } catch { setEnabled(false); }
    };
    check();
    media.addEventListener?.("change", check);
    if (!("IntersectionObserver" in window)) return () => media.removeEventListener?.("change", check);
    const observer = new IntersectionObserver(entries => setVisible(entries[0]?.isIntersecting ?? true), {threshold: .04});
    if (root.current) observer.observe(root.current);
    return () => { observer.disconnect(); media.removeEventListener?.("change", check); };
  }, []);
  return <div className="calm-art" ref={root} aria-label="An abstract, interactive three-dimensional representation of an AI core">
    <div className="calm-art-halo"/>
    <div className="calm-art-canvas">
      {enabled ? <OrbBoundary><Suspense fallback={<OrbFallback/>}><Scene running={visible}/></Suspense></OrbBoundary> : <OrbFallback/>}
    </div>
    <span className="calm-art-mark">SAQLAIN / LAB</span>
    <span className="calm-art-note">Exploration meets engineering.</span>
  </div>;
}

const symbols = {
  network: Network, shield: ShieldCheck, brain: BrainCircuit, audio: AudioLines,
  workflow: Workflow, scan: ScanLine, database: Database
};

function ProjectArt({project}) {
  const Icon = symbols[project.symbol] || Code2;
  return <div className={"calm-project-art calm-art-" + project.tone} aria-hidden="true">
    <div className="calm-project-orbit calm-project-orbit-one"/>
    <div className="calm-project-orbit calm-project-orbit-two"/>
    <div className="calm-project-shape"><Icon size={38} strokeWidth={1.35}/></div>
    <span className="calm-project-index">{project.id} / 07</span>
  </div>;
}

function ProjectCard({project, open}) {
  return <article className="calm-project-card">
    <button type="button" className="calm-project-cover" onClick={() => open(project)} aria-label={"Read " + project.title + " case study"}>
      <ProjectArt project={project}/>
    </button>
    <div className="calm-project-body">
      <p className="calm-project-type">{project.type} <span>· {project.period}</span></p>
      <h3>{project.title}</h3>
      <p className="calm-project-description">{project.description}</p>
      <div className="calm-project-tags">{project.stack.slice(0,3).map(item => <span key={item}>{item}</span>)}</div>
      <button className="calm-text-link" type="button" onClick={() => open(project)}>Explore case study <ArrowUpRight size={16}/></button>
    </div>
  </article>;
}

function findCaseFromUrl() {
  const id = new URLSearchParams(window.location.search).get("case");
  return projects.find(p => p.id === id) || null;
}

export default function CalmPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [allProjects, setAllProjects] = useState(false);
  const [allExperience, setAllExperience] = useState(false);
  const [selectedProject, setSelectedProject] = useState(findCaseFromUrl);
  useEffect(() => {
    const update = () => setSelectedProject(findCaseFromUrl());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
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
  const shownProjects = allProjects ? projects : projects.slice(0,3);
  const shownExperience = allExperience ? experience : experience.slice(0,3);

  return <div id="top" className="calm-site">
    <a className="calm-skip" href="#main">Skip to content</a>
    <header className="calm-header">
      <div className="calm-wrap calm-header-inner">
        <a className="calm-brand" href="#top" aria-label="SAQLAIN LAB home" onClick={() => setMenuOpen(false)}>
          <span className="calm-brand-icon">s<span>.</span></span>
          <span>SAQLAIN<span className="calm-brand-slashes">//</span>LAB</span>
        </a>
        <nav className={menuOpen ? "calm-nav calm-nav-open" : "calm-nav"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="calm-nav-resume" href={RESUME_PATH} download="Muhammad-Saqlain-Arshad-Resume.pdf" onClick={() => setMenuOpen(false)}>Resume <Download size={15}/></a>
        </nav>
        <button className="calm-menu-toggle" type="button" onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
    </header>

    <main id="main">
      <section className="calm-hero calm-wrap" aria-labelledby="calm-hero-heading">
        <div className="calm-hero-copy">
          <p className="calm-kicker"><span className="calm-status"/> SENIOR AI / ML ENGINEER <span className="calm-kicker-line"/></p>
          <p className="calm-hero-name">Muhammad Saqlain Arshad <span>/ Saqlain Arshad</span></p>
          <h1 id="calm-hero-heading">Making AI<br/><em>feel useful.</em></h1>
          <p className="calm-hero-description">I build intelligent products that solve real problems—from enterprise platforms and AI automation to RAG systems and thoughtful machine learning applications.</p>
          <div className="calm-hero-actions">
            <a className="calm-button calm-button-primary" href="#work">Explore my work <ArrowUpRight size={18}/></a>
            <a className="calm-button calm-button-secondary" href={RESUME_PATH} download="Muhammad-Saqlain-Arshad-Resume.pdf">Download resume <Download size={17}/></a>
          </div>
          <div className="calm-hero-contact">
            <a href={"mailto:" + CONTACT_EMAIL}><Mail size={15}/>{CONTACT_EMAIL}</a>
            <a href={PHONE_HREF}><Phone size={15}/>{CONTACT_PHONE}</a>
          </div>
        </div>
        <div className="calm-hero-visual"><QuietOrb/></div>
      </section>

      <section className="calm-section calm-work-section" id="work">
        <div className="calm-wrap">
          <div className="calm-section-heading">
            <div><span className="calm-eyebrow">SELECTED WORK</span><h2>Projects with <em>purpose.</em></h2></div>
            <p>A few systems I've built or contributed to, from enterprise engineering to independent experiments.</p>
          </div>
          <div className="calm-project-grid">{shownProjects.map(p => <ProjectCard key={p.id} project={p} open={openProject}/>)}</div>
          <div className="calm-center-action">
            <button type="button" className="calm-pill-button" onClick={() => setAllProjects(value => !value)}>
              {allProjects ? "Show featured projects" : "View all seven projects"} <span><ArrowRight size={16}/></span>
            </button>
          </div>
        </div>
      </section>

      <section className="calm-section calm-about-section" id="about">
        <div className="calm-wrap calm-about-grid">
          <div>
            <span className="calm-eyebrow">A LITTLE ABOUT ME</span>
            <h2>Curiosity,<br/>with <em>craft.</em></h2>
          </div>
          <div className="calm-about-copy">
            <p>I'm an AI engineer who enjoys the space between an ambitious idea and a working product. My focus is on connecting capable models with reliable services, useful interfaces and measurable business needs.</p>
            <p>My experience spans banking workflows, insurance technology, conversational AI, retrieval-based applications and production-oriented automation.</p>
            <a className="calm-inline-link" href={RESUME_PATH} download="Muhammad-Saqlain-Arshad-Resume.pdf">A closer look at my resume <ArrowUpRight size={17}/></a>
          </div>
        </div>
        <div className="calm-wrap calm-capabilities">
          <div className="calm-capability-heading"><span className="calm-eyebrow">WHAT I WORK WITH</span><p>Built with the right tools, not the loudest ones.</p></div>
          <div className="calm-capability-list">{skillGroups.map(group => <div className="calm-capability" key={group.title}>
            <h3>{group.title}</h3><p>{group.skills.slice(0,6).join(" · ")}</p>
          </div>)}</div>
        </div>
      </section>

      <section className="calm-section calm-experience-section" id="experience">
        <div className="calm-wrap calm-experience-grid">
          <div>
            <span className="calm-eyebrow">THE JOURNEY</span>
            <h2>Learning by<br/><em>building.</em></h2>
            <p className="calm-experience-intro">Roles, collaborations and experiences that shaped my approach to engineering.</p>
          </div>
          <div>
            <div className="calm-timeline">{shownExperience.map((job, index) => <article className="calm-role" key={job.company}>
              <span className="calm-role-period">{job.period}</span>
              <div><h3>{job.role}</h3><p className="calm-role-company">{job.company}</p><p className="calm-role-detail">{job.summary}</p></div>
            </article>)}</div>
            <button type="button" className="calm-expand" onClick={() => setAllExperience(value => !value)} aria-expanded={allExperience}>
              {allExperience ? "Show recent roles" : "See full experience"} <ChevronDown className={allExperience ? "calm-rotated" : ""} size={17}/>
            </button>
            <p className="calm-education"><strong>Education:</strong> BS Electrical Engineering · Punjab University · 2019–2023</p>
          </div>
        </div>
      </section>

      <section className="calm-contact-section" id="contact">
        <div className="calm-wrap calm-contact-grid">
          <div>
            <span className="calm-eyebrow">LET'S CONNECT</span>
            <h2>Have something<br/><em>in mind?</em></h2>
            <p>I'm always happy to talk about interesting AI projects, collaborations and engineering opportunities.</p>
            <a className="calm-contact-button" href={"mailto:" + CONTACT_EMAIL + "?subject=Portfolio%20Inquiry"}>Start a conversation <ArrowUpRight size={19}/></a>
          </div>
          <div className="calm-contact-details">
            <span className="calm-contact-label">GET IN TOUCH</span>
            <a href={"mailto:" + CONTACT_EMAIL}><Mail size={20}/> <span>{CONTACT_EMAIL}</span><ArrowUpRight size={17}/></a>
            <a href={PHONE_HREF}><Phone size={20}/> <span>{CONTACT_PHONE}</span><ArrowUpRight size={17}/></a>
            <div className="calm-socials">
              <a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href={github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a>
              <span><Globe2 size={16}/> Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="calm-footer"><div className="calm-wrap calm-footer-inner">
      <span>© {new Date().getFullYear()} Muhammad Saqlain Arshad</span>
      <span>Made with curiosity & care.</span>
      <a href="#top">Back to top ↑</a>
    </div></footer>
    <CaseStudyDialog project={selectedProject} onClose={closeProject}/>
  </div>;
}
