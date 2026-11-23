import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity, ArrowDown, ArrowRight, ArrowUpRight, AudioLines, BookOpen,
  BrainCircuit, Check, ChevronRight, Code2, Cpu, Database, ExternalLink,
  Github, Globe2, Linkedin, Mail, Menu, Network, ScanLine, ShieldCheck,
  Sparkles, Workflow, X
} from "lucide-react";
import { experience, projects, skillGroups } from "./data";

const email = "muhammadsaqlainarshad@gmail.com";
const github = "https://github.com/saqlainqurashi";
const linkedin = "https://www.linkedin.com/in/muhammad-saqlain-arshad/";

const symbolMap = {
  network: Network, shield: ShieldCheck, brain: BrainCircuit,
  audio: AudioLines, workflow: Workflow, scan: ScanLine, database: Database
};
const filters = ["All", "Enterprise AI", "GenAI & RAG", "Automation", "Computer Vision"];

function Mark() {
  return (
    <a className="brand" href="#top" aria-label="Saqlain Lab, back to top">
      <span className="brand-symbol">S<span>/</span></span>
      <span className="brand-name">SAQLAIN<span className="brand-slashes">//</span>LAB</span>
    </a>
  );
}

function NeuralVisual() {
  const nodes = [
    [70, 90, 4], [170, 57, 3], [286, 65, 5], [398, 105, 3],
    [70, 231, 5], [155, 168, 4], [253, 193, 7], [383, 227, 5],
    [117, 332, 3], [222, 354, 4], [337, 341, 5], [411, 386, 3],
    [82, 427, 3], [307, 445, 3]
  ];
  const edges = [
    [0,1],[0,4],[0,5],[1,2],[1,5],[1,6],[2,3],[2,6],[2,7],
    [3,7],[4,5],[4,8],[5,6],[5,8],[5,9],[6,7],[6,9],[6,10],
    [7,10],[7,11],[8,9],[8,12],[9,10],[9,12],[9,13],
    [10,11],[10,13],[11,13]
  ];
  return (
    <div className="neural-visual" aria-hidden="true">
      <div className="visual-noise" />
      <div className="visual-grid" />
      <div className="orbit orbit-a" /><div className="orbit orbit-b" />
      <svg className="neural-network" viewBox="0 0 480 500" fill="none">
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="480" y2="500">
            <stop stopColor="#60e9f4" stopOpacity=".18" />
            <stop offset=".55" stopColor="#9c82ff" stopOpacity=".5" />
            <stop offset="1" stopColor="#60e9f4" stopOpacity=".1" />
          </linearGradient>
          <radialGradient id="core">
            <stop stopColor="#8af3fd" stopOpacity=".95" />
            <stop offset="1" stopColor="#80a2ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {edges.map((edge, i) => (
          <line key={i} x1={nodes[edge[0]][0]} y1={nodes[edge[0]][1]}
            x2={nodes[edge[1]][0]} y2={nodes[edge[1]][1]}
            stroke="url(#edge)" strokeWidth={i % 4 === 0 ? 1.5 : 1} />
        ))}
        <circle cx="253" cy="193" r="78" fill="url(#core)" opacity=".19" />
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n[0]} cy={n[1]} r={n[2] + 7} fill="#70e2f2" opacity=".045" />
            <circle cx={n[0]} cy={n[1]} r={n[2]} fill={i % 3 === 0 ? "#aa91ff" : "#8cf3fb"} />
          </g>
        ))}
      </svg>
      <div className="core-display"><BrainCircuit size={38} strokeWidth={1.1} /><span>AI CORE</span></div>
      <div className="visual-label visual-label-top"><span className="green-dot" /> SYSTEM ONLINE <span>● ● ●</span></div>
      <div className="visual-label visual-label-bottom"><span>INTELLIGENCE / ACTIVE</span><span>00:01</span></div>
      <div className="floating-card card-model"><div className="mini-icon"><Activity size={16}/></div><span><strong>Inference pipeline</strong><small>Processing signals...</small></span><span className="tiny-bars"><i/><i/><i/><i/></span></div>
      <div className="floating-card card-agent"><div className="mini-icon violet-icon"><Workflow size={16}/></div><span><strong>Agent workflow</strong><small>Orchestration ready</small></span><Check size={14} className="check-icon"/></div>
      <div className="side-axis">DESIGN · BUILD · DEPLOY</div>
    </div>
  );
}

function ProjectArt({ project }) {
  const Icon = symbolMap[project.symbol] || Cpu;
  return (
    <div className={"project-art tone-" + project.tone} aria-hidden="true">
      <span className="art-index">LAB / {project.id}</span>
      <div className="art-circles"><span/><span/><span/></div>
      <div className="art-icon"><Icon size={39} strokeWidth={1.2}/></div>
      <div className="art-connector art-connector-a"/><div className="art-connector art-connector-b"/>
      <div className="art-caption"><span>ENGINEERED SYSTEM</span><span className="art-caption-dot">●</span></div>
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card">
      <button className="project-visual-button" onClick={() => onSelect(project)}
        aria-label={"View " + project.title + " case study"}>
        <ProjectArt project={project} />
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

function ProjectDialog({ project, onClose }) {
  const closeButtonRef = useRef(null);
  useEffect(() => {
    if (!project) return;
    const escape = (event) => { if (event.key === "Escape") onClose(); };
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    document.addEventListener("keydown", escape);
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", escape);
      document.body.style.overflow = oldOverflow;
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="dialog-heading" className="project-dialog">
        <button ref={closeButtonRef} className="modal-close" onClick={onClose} aria-label="Close project details"><X size={20}/></button>
        <div className="modal-overline">PROJECT CASE STUDY / {project.id}</div>
        <div className="modal-headline"><h2 id="dialog-heading">{project.title}</h2><span>{project.status}</span></div>
        <p className="modal-intro">{project.headline}</p>
        <p>{project.description}</p>
        <h3>My contribution</h3>
        <p>{project.contribution}</p>
        <h3>Engineering focus</h3>
        <ul>{project.notes.map(note => <li key={note}><ChevronRight size={15}/>{note}</li>)}</ul>
        <div className="project-tags modal-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        {project.url && <a className="button button-primary modal-github" href={project.url} target="_blank" rel="noopener noreferrer"><Github size={17}/> Explore repository <ArrowUpRight size={16}/></a>}
        <p className="modal-disclaimer">Some enterprise details are summarized at a high level for confidentiality.</p>
      </section>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = useMemo(() =>
    filter === "All" ? projects : projects.filter(project => project.group === filter), [filter]);

  return (
    <div id="top" className="site-shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="container nav-inner">
          <Mark />
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            {["About", "Work", "Experience", "Expertise"].map(label =>
              <a key={label} href={"#" + label.toLowerCase()} onClick={() => setMenuOpen(false)}>{label}</a>
            )}
            <a className="nav-mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <a className="nav-contact" href="#contact">LET'S TALK <ArrowUpRight size={15}/></a>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(value => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23}/> : <Menu size={23}/>}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot"/> SENIOR AI / ML ENGINEER <span className="eyebrow-line"/></div>
            <h1 id="hero-title">Engineering<br/><em>intelligence.</em><br/>Building impact<span className="hero-period">.</span></h1>
            <p className="hero-description">I'm <strong>Muhammad Saqlain Arshad</strong> — an AI engineer turning complex ideas into practical systems through generative AI, automation, and scalable software.</p>
            <div className="hero-buttons">
              <a href="#work" className="button button-primary">Explore my work <ArrowUpRight size={18}/></a>
              <a href="#contact" className="button button-outline">Get in touch <ArrowRight size={17}/></a>
            </div>
            <div className="hero-footnote"><span className="footnote-line"/><span>BASED IN LAHORE, PAKISTAN <b>·</b> WORKING ACROSS BORDERS</span></div>
          </div>
          <NeuralVisual />
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
          <div className="info-strip">
            <div><span className="info-icon"><Code2 size={20}/></span><span><strong>Since 2022</strong><small>Building AI solutions</small></span></div>
            <div><span className="info-icon"><Network size={20}/></span><span><strong>Enterprise + independent</strong><small>Real-world engineering</small></span></div>
            <div><span className="info-icon"><Globe2 size={20}/></span><span><strong>Remote & collaborative</strong><small>Open to global opportunities</small></span></div>
          </div>
        </section>

        <section className="work section container" id="work">
          <div className="section-heading"><div className="section-kicker"><span>02 / SELECTED WORK</span><span className="kicker-rule"/></div>
            <div className="section-heading-main"><h2>Proof over <em>promises.</em></h2><p>A selection of systems I've designed, developed, or contributed to.</p></div>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map(item => <button type="button" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? "filter-button active" : "filter-button"}>{item}</button>)}
          </div>
          <div className="project-grid">{visibleProjects.map(project =>
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject}/>
          )}</div>
          <p className="work-note"><Sparkles size={15}/> Interested in implementation details? Select any project to explore its engineering focus.</p>
        </section>

        <section className="experience-section section" id="experience">
          <div className="container experience-layout">
            <div className="experience-intro">
              <div className="section-kicker"><span>03 / THE JOURNEY</span><span className="kicker-rule"/></div>
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
          <div className="section-heading"><div className="section-kicker"><span>04 / TOOLKIT</span><span className="kicker-rule"/></div>
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
            <div className="section-kicker"><span>05 / WHAT'S NEXT?</span><span className="kicker-rule"/></div>
            <div className="contact-content"><div><p className="contact-eyebrow">HAVE A CHALLENGE IN MIND?</p><h2>Let's build something<br/><em>intelligent.</em></h2><p className="contact-description">Whether it's an AI product, automation idea, or engineering opportunity, I'd love to hear what you're working on.</p></div>
              <a href={"mailto:" + email + "?subject=Let's%20build%20something"} className="contact-arrow" aria-label="Start an email conversation"><ArrowUpRight size={40}/></a></div>
            <div className="contact-bottom"><a className="email-link" href={"mailto:" + email}>{email} <ArrowUpRight size={17}/></a>
              <div className="social-links"><a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a><a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a><a href={"mailto:" + email} aria-label="Email"><Mail size={20}/></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><Mark/><span>© {new Date().getFullYear()} Muhammad Saqlain Arshad</span><a href="#top">BACK TO TOP ↑</a></div></footer>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)}/>
    </div>
  );
}

export default App;
