import { AudioLines, Bot, BrainCircuit, CalendarDays, Check, CheckCircle2, ChevronRight, CircleDot, Database, FileText, GitBranch, LockKeyhole, MessageSquareText, Network, ShieldCheck, Sparkles, Workflow } from "lucide-react";

// These are original, fictionalized UI illustrations, not product screenshots.
function Frame({ name, children }) {
  return <div className="mini-frame">
    <div className="mini-top"><div className="mini-dots"><i/><i/><i/></div><span>{name}</span><span className="mini-top-end">●</span></div>
    <div className="mini-content">{children}</div>
  </div>;
}

function CollectView() {
  return <Frame name="COLLECT360 / CASE DESK">
    <div className="mini-heading"><span>COLLECTION WORKSPACE</span><span className="mini-indicator"><CircleDot size={9}/> CASE FLOW</span></div>
    <div className="mini-metrics"><div><i className="mini-metric-icon">01</i><strong>Delinquency</strong><small>New signals</small></div><div><i className="mini-metric-icon">02</i><strong>Follow-ups</strong><small>Agent actions</small></div><div><i className="mini-metric-icon">03</i><strong>Resolution</strong><small>Case outcome</small></div></div>
    <div className="mini-path"><span>Account</span><ChevronRight size={13}/><span>Case</span><ChevronRight size={13}/><span>PTP</span><ChevronRight size={13}/><span className="mini-highlight">Review</span></div>
    <div className="mini-skeleton"><span/><span/><span/></div>
  </Frame>;
}
function InsuranceView() {
  return <Frame name="GENINSUREDAI / POLICY FLOW">
    <div className="mini-heading"><span>POLICY LIFECYCLE</span><span className="mini-indicator"><ShieldCheck size={11}/> SECURE</span></div>
    <div className="insurance-track"><div><i>01</i><strong>Lead</strong></div><ChevronRight size={14}/><div><i>02</i><strong>Risk</strong></div><ChevronRight size={14}/><div><i>03</i><strong>Policy</strong></div></div>
    <div className="insurance-rows"><div><span><CheckCircle2 size={12}/> Intake & evaluation</span><span className="mini-pill">Workflow</span></div><div><span><GitBranch size={12}/> Underwriting orchestration</span><span className="mini-pill">Events</span></div><div><span><ShieldCheck size={12}/> Policy services</span><span className="mini-pill">API</span></div></div>
  </Frame>;
}
function KnowledgeView() {
  return <Frame name="KNOWLEDGEFORGE / RAG ASSISTANT">
    <div className="rag-layout"><div className="rag-files"><span>KNOWLEDGE BASE</span><div><FileText size={12}/> Notes.pdf <Check size={10}/></div><div><FileText size={12}/> Research.txt <Check size={10}/></div><div className="rag-vector"><span>VECTOR STORE</span><div><i/><i/><i/><i/><i/></div></div></div><div className="rag-answer"><span><Bot size={12}/> ASK YOUR DOCUMENTS</span><div className="rag-question">What matters in this document?</div><div className="rag-reply"><Sparkles size={12}/><div><i/><i/><i/></div></div><small>Sources · 2 matching chunks</small></div></div>
  </Frame>;
}
function VoiceView() {
  return <Frame name="VOICE AUTOMATION / LIVE FLOW">
    <div className="voice-interface"><div className="voice-identity"><div className="voice-avatar"><AudioLines size={22}/></div><span><strong>Voice agent</strong><small>Customer conversation</small></span><span className="voice-live">READY</span></div><div className="voice-wave">{[13,22,31,16,29,40,23,14,35,44,26,17,32,20,12,24,37,18,31,15].map((n,i)=><i key={i} style={{height:n + "px"}}/>)}</div><div className="voice-route"><span><Bot size={12}/> AI agent</span><ChevronRight size={12}/><span><Workflow size={12}/> n8n</span><ChevronRight size={12}/><span><CalendarDays size={12}/> Calendar</span></div></div>
  </Frame>;
}
function SupportView() {
  return <Frame name="SUPPORTPILOT / AGENT CONSOLE">
    <div className="mini-heading"><span>SUPPORT OPERATIONS</span><span className="mini-indicator"><LockKeyhole size={10}/> RBAC</span></div>
    <div className="support-columns"><div><span className="support-col-label">OPEN <b>○</b></span><div className="support-ticket"><span>Ticket / inquiry</span><i/><i/></div><div className="support-ticket support-ticket-small"><span>New request</span><i/></div></div><div><span className="support-col-label">IN PROGRESS <b>◒</b></span><div className="support-ticket"><span>Agent assigned</span><i/><i/></div></div><div><span className="support-col-label">RESOLVED <b>●</b></span><div className="support-ticket"><span>Request handled</span><i/><i/></div></div></div>
  </Frame>;
}
function ParkingView() {
  const slots=["free","occupied","free","occupied","free","reserved","free","free","occupied","free"];
  return <Frame name="SMART PARKING / OCCUPANCY">
    <div className="mini-heading"><span>CAMERA-ASSISTED MONITOR</span><span className="mini-indicator"><CircleDot size={10}/> VISION</span></div>
    <div className="parking-layout"><div className="parking-slots">{slots.map((slot,i)=><div className={"parking-slot " + slot} key={i}><small>P-{String(i+1).padStart(2,"0")}</small><span/></div>)}</div><div className="parking-legend"><span><b className="park-free"/> Available</span><span><b className="park-occupied"/> Occupied</span><span><b className="park-reserved"/> Reserved</span></div></div>
  </Frame>;
}
function CloudView() {
  return <Frame name="CLOUDDESK / DOCUMENT HUB">
    <div className="cloud-layout"><div className="cloud-files"><span>DOCUMENTS</span><div><FileText size={13}/><span>Project brief<small>Document</small></span><Check size={12}/></div><div><FileText size={13}/><span>Meeting notes<small>Document</small></span><Check size={12}/></div><div><FileText size={13}/><span>Research file<small>Document</small></span><Check size={12}/></div></div><div className="cloud-summary"><span><Sparkles size={12}/> AI SUMMARY</span><div className="cloud-summary-line long"/><div className="cloud-summary-line"/><div className="cloud-summary-line medium"/><div className="cloud-summary-chip"><Database size={11}/> S3 + Postgres</div></div></div>
  </Frame>;
}
const views = {"01":CollectView,"02":InsuranceView,"03":KnowledgeView,"04":VoiceView,"05":SupportView,"06":ParkingView,"07":CloudView};

export default function ProjectVisual({project}) {
  const View = views[project.id] || KnowledgeView;
  return <div className={"showcase tone-" + project.tone} aria-hidden="true">
    <div className="showcase-grid"/>
    <div className="showcase-orbit showcase-orbit-one"/>
    <div className="showcase-orbit showcase-orbit-two"/>
    <div className="showcase-frame">
      <View/>
    </div>
    <div className="showcase-meta"><span>LAB / {project.id}</span><span>ILLUSTRATIVE UI</span></div>
  </div>;
}
