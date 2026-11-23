import { useState } from "react";
import { ArrowUpRight, BrainCircuit, Code2, Cpu, GitBranch, Layers3, Orbit, Radio, Sparkles, Workflow } from "lucide-react";

const modes = [
  {
    key:"reason",
    no:"01",
    title:"Make systems reason.",
    eyebrow:"REASONING ENGINE",
    summary:"From documents to decisions: retrieval, context engineering, and language models working as one.",
    terms:["RAG SYSTEMS","VECTOR SEARCH","LLM ORCHESTRATION"],
    modules:["RETRIEVE CONTEXT","GROUND RESPONSE","RETURN SOURCES"]
  },
  {
    key:"automate",
    no:"02",
    title:"Connect every action.",
    eyebrow:"AUTOMATION ENGINE",
    summary:"Agents, event-driven services, and workflows that help businesses move from conversation to execution.",
    terms:["AGENTIC AI","EVENTS & APIs","WORKFLOW DESIGN"],
    modules:["PROCESS SIGNAL","ROUTE ACTION","COMPLETE WORKFLOW"]
  },
  {
    key:"ship",
    no:"03",
    title:"Build for the real world.",
    eyebrow:"DELIVERY ENGINE",
    summary:"Turning prototypes into reliable services through thoughtful architecture, testing, cloud and CI/CD.",
    terms:["FASTAPI","CLOUD SYSTEMS","CI / CD"],
    modules:["DESIGN SERVICE","TEST & VALIDATE","DEPLOY SYSTEM"]
  }
];

export default function SignalLab() {
  const [mode, setMode] = useState(0);
  const current = modes[mode];
  return <section className="signal-section" id="lab" aria-labelledby="lab-title">
    <div className="container">
      <div className="section-kicker"><span>02 / INSIDE THE LAB</span><span className="kicker-rule"/></div>
      <div className="signal-intro">
        <div><span className="signal-mark">THINK / CONNECT / CREATE</span><h2 id="lab-title">An engineer's mind.<br/><em>A creator's instinct.</em></h2></div>
        <p>Not a list of buzzwords. Three modes that describe how I approach an AI system: understand, orchestrate, and deliver.</p>
      </div>
      <div className="signal-deck">
        <div className="signal-controller">
          <div className="signal-controller-head"><span><Radio size={14}/> SELECT A SYSTEM MODE</span><span>0{mode+1} / 03</span></div>
          <div className="signal-options" role="group" aria-label="Interactive engineering modes">
            {modes.map((option,i)=><button type="button" key={option.key} aria-pressed={mode===i}
              className={mode===i ? "signal-option is-active":"signal-option"} onClick={()=>setMode(i)}>
              <span className="signal-option-no">{option.no}</span>
              <span>{option.eyebrow}<strong>{option.title}</strong></span>
              <ArrowUpRight size={18}/>
            </button>)}
          </div>
          <div className="signal-explainer" aria-live="polite">
            <span className="signal-chapter">{current.eyebrow} / ACTIVE</span>
            <p>{current.summary}</p>
            <div className="signal-tags">{current.terms.map(term=><span key={term}>{term}</span>)}</div>
          </div>
        </div>
        <div className={"signal-visual signal-mode-" + current.key} aria-hidden="true">
          <div className="signal-visual-grid"/>
          <div className="signal-visual-glow"/>
          <div className="signal-visual-top"><span><Cpu size={14}/> SAQLAIN.LAB // ENGINE</span><span>VISUAL / 3D</span></div>
          <div className="signal-axis axis-a"/><div className="signal-axis axis-b"/>
          <div className="signal-plate-stack">
            <div className="signal-plate plate-back"><span>DATA SOURCE</span><div className="plate-dot-matrix">{Array.from({length:25},(_,i)=><i key={i}/>)}</div></div>
            <div className="signal-plate plate-middle"><span>INTELLIGENCE LAYER</span><div className="plate-inner-grid"><i/><i/><i/><i/></div><div className="plate-center"><BrainCircuit size={36}/></div></div>
            <div className="signal-plate plate-front"><span>{current.eyebrow}</span><div className="plate-core"><Orbit size={26}/></div><div className="plate-inline-lines"><i/><i/><i/></div></div>
          </div>
          <div className="signal-visual-bottom">
            {current.modules.map((m,i)=><span key={m}><b>0{i+1}</b> {m}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
