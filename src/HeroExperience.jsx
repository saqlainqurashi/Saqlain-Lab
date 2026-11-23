import { Component, lazy, Suspense, useEffect, useRef, useState } from "react";
import { Activity, ArrowUpRight, AudioLines, CirclePause, CirclePlay, Command, Orbit, Sparkles } from "lucide-react";

const HeroScene = lazy(() => import("./HeroScene.jsx"));

function StaticArtifact() {
  return <div className="static-artifact" aria-hidden="true">
    <div className="static-orbit orbit-one"/><div className="static-orbit orbit-two"/>
    <div className="static-crystal"><div className="static-crystal-face"/><div className="static-crystal-core"/></div>
    <div className="static-artifact-glow"/>
  </div>;
}

class SceneErrorBoundary extends Component {
  constructor(props) { super(props); this.state = {failed: false}; }
  static getDerivedStateFromError() { return {failed: true}; }
  render() { return this.state.failed ? <StaticArtifact/> : this.props.children; }
}

export default function HeroExperience() {
  const root = useRef(null);
  const [supported, setSupported] = useState(false);
  const [visible, setVisible] = useState(true);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const preferred = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(preferred);
    setMotionEnabled(!preferred);
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2", {failIfMajorPerformanceCaveat:true}) || canvas.getContext("webgl", {failIfMajorPerformanceCaveat:true});
      setSupported(Boolean(context));
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      setSupported(false);
    }
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => setVisible(entries[0]?.isIntersecting ?? true), {threshold:.02});
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  const running = visible && motionEnabled;
  return <div ref={root} className="experience-stage">
    <div className="stage-radial"/><div className="stage-grid"/>
    <div className="stage-top">
      <span className="stage-live"><i/> LAB CORE // 001</span>
      <span className="stage-coordinates">AI / INTERACTIVE OBJECT</span>
    </div>
    <div className="scene-container">
      {supported ?
        <SceneErrorBoundary><Suspense fallback={<StaticArtifact/>}><HeroScene running={running}/></Suspense></SceneErrorBoundary>
        : <StaticArtifact/>}
    </div>
    <div className="stage-card stage-card-left">
      <div className="stage-card-symbol"><Activity size={18}/></div>
      <div><span>STATUS</span><strong>SYSTEM ONLINE</strong><small>Ideas → engineered intelligence</small></div>
    </div>
    <div className="stage-card stage-card-right">
      <div className="stage-card-symbol purple"><Orbit size={20}/></div>
      <div><span>ACTIVE MODULE</span><strong>NEURAL CORE</strong><small>Realtime 3D visualization</small></div>
    </div>
    <div className="stage-side-text">ARCHITECTURE / INTELLIGENCE / ART</div>
    <div className="stage-bottom">
      <span><Sparkles size={13}/> {supported ? "MOVE YOUR CURSOR TO INTERACT" : "GEOMETRIC DESIGN / FALLBACK"}</span>
      {supported && <button type="button" className="motion-switch" aria-pressed={motionEnabled}
         onClick={() => setMotionEnabled(v=>!v)} aria-label={motionEnabled ? "Pause 3D animation" : "Enable 3D animation"}>
         {motionEnabled ? <CirclePause size={15}/> : <CirclePlay size={15}/>}
         {motionEnabled ? "PAUSE" : "ANIMATE"}
      </button>}
    </div>
  </div>;
}
