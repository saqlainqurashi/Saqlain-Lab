import { Download, Mail, Phone, ArrowUpRight, FileText } from "lucide-react";

export const RESUME_PATH = "/Muhammad-Saqlain-Arshad-Resume.pdf";
export const CONTACT_EMAIL = "muhammadsaqlainarshad@gmail.com";
export const CONTACT_PHONE = "+92 313 497 5658";
export const PHONE_HREF = "tel:+923134975658";

export function ResumeLink({className = "", children, icon = true}) {
  return <a href={RESUME_PATH} download="Muhammad-Saqlain-Arshad-Resume.pdf"
    type="application/pdf" className={className} aria-label="Download Muhammad Saqlain Arshad resume PDF">
    {icon && <Download size={17}/>}
    {children || "Download resume"}
  </a>;
}

export function ContactCards() {
  return <div className="contact-methods">
    <a className="contact-method" href={"mailto:" + CONTACT_EMAIL + "?subject=Portfolio%20Inquiry"}>
      <span className="contact-method-icon"><Mail size={23}/></span>
      <span className="contact-method-content"><small>WRITE ME AN EMAIL</small><strong>{CONTACT_EMAIL}</strong><span>Best for projects, collaborations, and job opportunities</span></span>
      <ArrowUpRight size={19} className="contact-method-arrow"/>
    </a>
    <a className="contact-method contact-method-phone" href={PHONE_HREF}>
      <span className="contact-method-icon"><Phone size={23}/></span>
      <span className="contact-method-content"><small>CALL / PHONE</small><strong>{CONTACT_PHONE}</strong><span>Direct professional contact · Pakistan (PKT)</span></span>
      <ArrowUpRight size={19} className="contact-method-arrow"/>
    </a>
  </div>;
}

export function MobileQuickDock() {
  return <nav className="mobile-quick-dock" aria-label="Quick contact and resume">
    <a href={"mailto:" + CONTACT_EMAIL + "?subject=Portfolio%20Inquiry"} aria-label="Email Muhammad Saqlain Arshad">
      <Mail size={20}/><span>Email</span>
    </a>
    <a href={PHONE_HREF} aria-label={"Call " + CONTACT_PHONE}>
      <Phone size={19}/><span>Call</span>
    </a>
    <ResumeLink className="mobile-dock-resume"><span>Resume</span></ResumeLink>
  </nav>;
}

export function ResumeHighlight() {
  return <div className="resume-highlight">
    <div className="resume-highlight-icon"><FileText size={22}/></div>
    <div><strong>Prefer the full story?</strong><p>Explore my experience, projects, skills and certifications in my 3-page PDF resume.</p></div>
    <ResumeLink className="resume-highlight-button">Get my resume <ArrowUpRight size={15}/></ResumeLink>
  </div>;
}
