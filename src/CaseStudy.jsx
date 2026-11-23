import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Copy, GitBranch, Github, Layers3, X } from "lucide-react";
import ProjectVisual from "./ProjectVisual";
import { caseStudies } from "./caseStudies";

function ArchitectureFlow({study}) {
  const [active, setActive] = useState(0);
  const step = study.flow[active] || study.flow[0];
  return <div className="architecture-section">
    <div className="architecture-head">
      <div><span className="case-label">SYSTEM ARCHITECTURE / CONCEPTUAL</span><h3>How the pieces connect</h3></div>
      <p>Explore each stage to understand its role in the overall system.</p>
    </div>
    <div className="arch-track" role="group" aria-label="Architecture components">
      {study.flow.map((node, i) => <div className="arch-segment" key={node.name}>
        {i > 0 && <ArrowRight className="arch-arrow" size={17} aria-hidden="true"/>}
        <button type="button" onClick={() => setActive(i)}
          className={active === i ? "arch-step is-selected" : "arch-step"}
          aria-pressed={active === i}>
          <span className="arch-step-number">0{i + 1}</span>
          <strong>{node.name}</strong>
          <small>{node.short}</small>
          <span className="arch-step-indicator">{active === i ? "SELECTED" : "EXPLORE"} <ChevronRight size={11}/></span>
        </button>
      </div>)}
    </div>
    <div className="arch-insight" aria-live="polite">
      <div className="arch-insight-icon"><Layers3 size={20}/></div>
      <div><span>COMPONENT / 0{active + 1}</span><h4>{step.name}</h4><p>{step.detail}</p></div>
    </div>
    <div className="arch-foundations">
      <div className="arch-foundations-label"><GitBranch size={15}/> PLATFORM & INTEGRATIONS</div>
      <div className="arch-foundation-tags">{study.supporting.map(item=><span key={item}>{item}</span>)}</div>
    </div>
    <p className="arch-disclaimer">{study.disclaimer}</p>
  </div>;
}

function Overview({study, project}) {
  return <div className="case-overview">
    <div className="case-overview-grid">
      <section><span className="case-label">01 / THE CHALLENGE</span><h3>What needed solving</h3><p>{study.challenge}</p></section>
      <section><span className="case-label">02 / APPROACH</span><h3>How it was approached</h3><p>{study.solution}</p></section>
      <section><span className="case-label">03 / MY ROLE</span><h3>My contribution</h3><p>{study.contribution}</p></section>
    </div>
    <div className="case-outcome"><span className="case-outcome-icon"><Check size={17}/></span><div><span className="case-label">DELIVERED CAPABILITY</span><p>{study.outcome}</p></div></div>
    <div className="case-focus"><span className="case-label">ENGINEERING HIGHLIGHTS</span><ul>{study.focus.map(item=><li key={item}><ChevronRight size={13}/>{item}</li>)}</ul></div>
    {project.status === "Enterprise project" && <p className="case-enterprise-note">This public case study intentionally excludes confidential business details and internal system diagrams.</p>}
  </div>;
}

export default function CaseStudyDialog({project, onClose}) {
  const [tab, setTab] = useState("overview");
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const closeFn = useRef(onClose);
  closeFn.current = onClose;
  const projectId = project?.id;

  useEffect(() => {
    if (!projectId) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    setTab("overview");
    setCopied(false);
    function onKeyDown(event) {
      if (event.key === "Escape") { event.preventDefault(); closeFn.current(); return; }
      if (event.key !== "Tab") return;
      const elements = Array.from(dialogRef.current?.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])') || []);
      const first = elements[0], last = elements[elements.length - 1];
      if (!first) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [projectId]);

  if (!project) return null;
  const study = caseStudies[project.id];
  if (!study) return null;

  const share = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("case", project.id);
    if (!navigator.clipboard?.writeText) return;
    navigator.clipboard.writeText(url.toString()).then(() => setCopied(true)).catch(() => setCopied(false));
  };

  return <div className="case-overlay" onMouseDown={event=>{if(event.target===event.currentTarget) onClose();}}>
    <section className="case-dialog" role="dialog" aria-modal="true" aria-labelledby="case-title" aria-describedby="case-desc" ref={dialogRef}>
      <button ref={closeRef} type="button" className="case-close" aria-label="Close case study" onClick={onClose}><X size={20}/></button>
      <div className="case-cover"><ProjectVisual project={project}/></div>
      <div className="case-inner">
        <div className="case-topline"><span className="case-label">SAQLAIN // LAB &nbsp;—&nbsp; CASE STUDY {project.id}</span><span className="case-status">{project.status}</span></div>
        <div className="case-title-row"><div><span className="case-industry">{study.industry} · {project.period}</span><h2 id="case-title">{project.title}</h2><p className="case-headline">{project.headline}</p></div><span className="case-title-index">/{project.id}</span></div>
        <p id="case-desc" className="case-description">{project.description}</p>
        <div className="case-tabs" role="group" aria-label="Choose case study view">
          <button type="button" className={tab==="overview"?"active":""} aria-pressed={tab==="overview"} onClick={()=>setTab("overview")}>Overview</button>
          <button type="button" className={tab==="architecture"?"active":""} aria-pressed={tab==="architecture"} onClick={()=>setTab("architecture")}>Architecture <GitBranch size={15}/></button>
        </div>
        {tab === "overview" ? <Overview study={study} project={project}/> : <ArchitectureFlow key={project.id} study={study}/>}
        <div className="case-footer">
          <div className="case-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div>
          <div className="case-actions">
            <button type="button" className="case-copy" onClick={share}><Copy size={15}/>{copied?"Link copied":"Copy case link"}</button>
            {project.url && <a className="case-repository" href={project.url} target="_blank" rel="noopener noreferrer"><Github size={17}/> View repository <ArrowUpRight size={16}/></a>}
          </div>
        </div>
      </div>
    </section>
  </div>;
}
