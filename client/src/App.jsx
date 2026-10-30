
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ShieldCheck, Shield, ScanSearch, LockKeyhole, Sparkles, ArrowRight, Menu, X,
  Activity, Eye, Fingerprint, ChevronRight, CheckCircle2, Zap, Globe2, Github,
  Mail, UserRound, KeyRound, AlertTriangle, LogOut, Upload, Copy, Download,
  CircleCheck, CircleX, CreditCard, Phone, FileText
} from 'lucide-react';
import './style.css';

const API=import.meta.env.VITE_API_URL||'http://localhost:5000';
const DEMO_SCAM=`URGENT WORK FROM HOME JOB OFFER

Congratulations! You have been selected for a data entry job.
Salary: ₹45,000 per month for only 2 hours of work.

To activate your employee ID, pay a refundable registration fee of ₹999 immediately.
UPI Payment ID: fakecompany@upi
HR Contact: +91 9876543210

Send your Aadhaar number and bank details through WhatsApp.
This offer expires in 30 minutes. Do not miss this opportunity!`;
const DEMO_NORMAL=`COLLEGE TECHNICAL SYMPOSIUM

Dear Students,

We are pleased to announce our annual Technical Symposium.
Date: 15 November 2026
Time: 9:00 AM to 4:00 PM
Venue: Main Auditorium

Events include coding, project demonstrations, paper presentations and a technical quiz.
Please register through the official college portal.

Regards,
Event Organizing Committee`;

function Brand({light=false}){return <Link to="/" className="brand"><span className="brand-mark"><ShieldCheck size={21}/></span><span>PRIVACY<span className="brand-green">MIRROR</span><small>AI SECURITY LAB</small></span></Link>}
function Ambient(){return <><div className="ambient-grid"/><div className="ambient-orb orb-a"/><div className="ambient-orb orb-b"/><div className="ambient-orb orb-c"/><div className="ambient-scan"/></>}
function Header({user,onLogout}) {
 const [open,setOpen]=useState(false);
 return <header className="site-header"><Brand/><nav className={open?'nav-open':''}>
  <a href="/#features" onClick={()=>setOpen(false)}>Features</a><a href="/#how" onClick={()=>setOpen(false)}>How it works</a><a href="/#trust" onClick={()=>setOpen(false)}>Privacy</a>
  {user?<Link className="nav-cta" to="/app">Open workspace <ArrowRight size={15}/></Link>:<><Link to="/login" onClick={()=>setOpen(false)}>Sign in</Link><Link className="nav-cta" to="/signup" onClick={()=>setOpen(false)}>Get started <ArrowRight size={15}/></Link></>}
 </nav><button className="menu-toggle" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>
}
function Landing({user}) {
 return <div className="landing"><Ambient/><Header user={user}/>
  <main>
   <section className="hero-wrap">
    <div className="hero-copy"><div className="eyebrow"><i/> YOUR PERSONAL AI PRIVACY LAYER <span className="eyebrow-pill">BETA 3.1</span></div>
     <h1>Your digital life.<br/><span>Under your control.</span></h1>
     <p className="hero-lead">Before you share a message, document or link, know what it reveals. PrivacyMirror helps you spot exposed information and suspicious signals — then protect what matters.</p>
     <div className="hero-actions"><Link className="button-primary" to={user?"/app":"/signup"}>Start protecting your data <ArrowRight size={17}/></Link><a className="button-ghost" href="#how"><span className="play-dot">▶</span> See how it works</a></div>
     <div className="hero-proof"><span><CheckCircle2/> Private-by-design scanning</span><span><CheckCircle2/> Clear, explainable findings</span></div>
    </div>
    <div className="hero-visual">
     <div className="visual-halo"/><div className="orbit orbit-1"/><div className="orbit orbit-2"/>
     <div className="shield-core"><ShieldCheck size={70}/><span>PRIVACY<br/>PROTECTED</span></div>
     <div className="float-card float-top"><span className="mini-icon"><ScanSearch/></span><div><b>Exposure scan</b><small>Inspecting content signals</small></div><i className="status-dot"/></div>
     <div className="float-card float-bottom"><span className="mini-icon green-mini"><LockKeyhole/></span><div><b>SafeShare ready</b><small>Private data can be masked</small></div><span className="float-check">✓</span></div>
     <div className="visual-caption"><span className="pulse-dot"/> SYSTEM ONLINE <b>·</b> ENCRYPTED SESSION</div>
    </div>
   </section>
   <section className="trust-strip" id="trust"><span>BUILT FOR SAFER DIGITAL SHARING</span><div><Shield/> Privacy-first workflow</div><div><Activity/> Explainable signals</div><div><Sparkles/> AI-assisted guidance</div><div><LockKeyhole/> You stay in control</div></section>
   <section className="content-section" id="features"><div className="section-eyebrow">01 / CAPABILITIES</div><h2>Small details can expose<br/><em>more than you think.</em></h2><p className="section-lead">A practical privacy layer between your content and the outside world.</p>
    <div className="feature-grid">
     <article className="feature-card"><div className="feature-icon"><ScanSearch/></div><span>01</span><h3>Intelligent inspection</h3><p>Identify personal data patterns and suspicious language before you send or publish content.</p><Link to="/signup">Explore scanning <ChevronRight/></Link></article>
     <article className="feature-card"><div className="feature-icon"><Fingerprint/></div><span>02</span><h3>Evidence, not guesswork</h3><p>See the exact categories and reasons behind each warning, with a clear GOOD or BAD summary.</p><Link to="/signup">See the analysis <ChevronRight/></Link></article>
     <article className="feature-card"><div className="feature-icon"><LockKeyhole/></div><span>03</span><h3>SafeShare redaction</h3><p>Preview a protected copy, then copy or download the version with detected values masked.</p><Link to="/signup">Protect content <ChevronRight/></Link></article>
     <article className="feature-card"><div className="feature-icon"><Sparkles/></div><span>04</span><h3>AI security guidance</h3><p>Ask Gemini for plain-language next steps using redacted content and detection categories.</p><Link to="/signup">Meet your AI advisor <ChevronRight/></Link></article>
    </div>
   </section>
   <section className="how-section" id="how"><div className="how-left"><div className="section-eyebrow">02 / HOW IT WORKS</div><h2>Three steps.<br/><em>More confidence.</em></h2><p>PrivacyMirror keeps the workflow simple, so you can understand the result and decide what to do next.</p><Link className="button-primary" to={user?"/app":"/signup"}>Try the workspace <ArrowRight/></Link></div>
    <div className="steps"><div className="step"><b>01</b><div><h3>Paste or upload</h3><p>Bring in a text snippet or a plain-text file for inspection.</p></div><FileText/></div><div className="step"><b>02</b><div><h3>Review the signals</h3><p>Understand detected data patterns, scam-language signals and their severity.</p></div><Eye/></div><div className="step"><b>03</b><div><h3>Protect and proceed</h3><p>Preview a redacted copy and get optional AI guidance before sharing.</p></div><ShieldCheck/></div></div>
   </section>
   <section className="cta-band"><div><div className="section-eyebrow">YOUR DATA DESERVES A SECOND LOOK</div><h2>Make your next share<br/><em>a safer one.</em></h2></div><Link className="button-primary" to={user?"/app":"/signup"}>Create your free workspace <ArrowRight/></Link></section>
  </main>
  <Footer/>
 </div>
}
function Footer(){return <footer className="site-footer"><Brand/><span>DETECT · UNDERSTAND · PROTECT</span><span>© 2026 PRIVACYMIRROR AI</span></footer>}
function AuthPage({mode,onAuth}) {
 const [name,setName]=useState(''),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState('');
 const signup=mode==='signup';
 async function submit(e){e.preventDefault();setBusy(true);setError('');try{const {data}=await axios.post(API+(signup?'/api/auth/signup':'/api/auth/login'),signup?{name,email,password}:{email,password});localStorage.setItem('pm_pro_token',data.token);onAuth(data.user);}catch(e){setError(e.response?.data?.error||'Cannot reach the server. Check that the backend is running.');}finally{setBusy(false);}}
 return <div className="auth-shell"><Ambient/><Header/><div className="auth-main"><div className="auth-aside"><div className="section-eyebrow">PRIVACYMIRROR / SECURE ACCESS</div><h1>{signup?'Start with a safer space.':'Welcome back to control.'}</h1><p>Your personal privacy workspace is one secure sign-in away.</p><div className="auth-benefits"><span><ShieldCheck/> Protected workspace</span><span><LockKeyhole/> Passwords securely hashed</span><span><Sparkles/> Optional Gemini guidance</span></div></div>
 <form className="auth-panel" onSubmit={submit}><div className="auth-panel-top"><span>SECURE ACCESS PORTAL</span><LockKeyhole size={16}/></div><div className="auth-switch"><Link className={!signup?'chosen':''} to="/login">SIGN IN</Link><Link className={signup?'chosen':''} to="/signup">CREATE ACCOUNT</Link></div><h2>{signup?'Create your account':'Sign in to continue'}</h2><p>{signup?'Build your private protection workspace.':'Your privacy workspace is ready.'}</p>
 {signup&&<label>FULL NAME<div className="input-line"><UserRound/><input required minLength="2" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></div></label>}
 <label>EMAIL ADDRESS<div className="input-line"><Mail/><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></div></label>
 <label>PASSWORD<div className="input-line"><KeyRound/><input type="password" required minLength="8" value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 8 characters"/></div></label>
 {error&&<div className="auth-error"><AlertTriangle size={15}/>{error}</div>}
 <button className="button-primary auth-submit" disabled={busy}>{busy?'PLEASE WAIT…':signup?'CREATE SECURE ACCOUNT':'SIGN IN'} <ArrowRight/></button>
 <div className="auth-small">Your password is hashed before storage. Never share your password or API keys.</div>
 </form></div><Footer/></div>
}
function AppPage({user,onLogout}) {
 const [text,setText]=useState(DEMO_SCAM),[result,setResult]=useState(null),[busy,setBusy]=useState(false),[advice,setAdvice]=useState(''),[error,setError]=useState(''),[tab,setTab]=useState('original'),[copied,setCopied]=useState(false);
 const token=localStorage.getItem('pm_pro_token');
 async function scan(){setBusy(true);setError('');setAdvice('');try{const {data}=await axios.post(API+'/api/scan',{text},{headers:{Authorization:`Bearer ${token}`}});setResult(data);}catch(e){if(e.response?.status===401){onLogout();return;}setError(e.response?.data?.error||'Scan failed. Check the API.');}finally{setBusy(false);}}
 async function ask(){setBusy(true);setError('');try{const {data}=await axios.post(API+'/api/advice',{redactedText:result.redactedText,findings:result.findings.map(x=>({type:x.type,severity:x.severity})),signals:result.signals},{headers:{Authorization:`Bearer ${token}`}});setAdvice(data.advice);}catch(e){setError(e.response?.data?.error||'Gemini advice unavailable.');}finally{setBusy(false);}}
 async function copy(){await navigator.clipboard.writeText(result.redactedText);setCopied(true);setTimeout(()=>setCopied(false),1200);}
 function download(){const u=URL.createObjectURL(new Blob([result.redactedText],{type:'text/plain'})),a=document.createElement('a');a.href=u;a.download='privacymirror-protected.txt';a.click();URL.revokeObjectURL(u);}
 async function upload(file){if(!file)return;if(!file.name.endsWith('.txt')){setError('Upload a .txt file.');return;}if(file.size>100000){setError('File must be under 100 KB.');return;}setText(await file.text());setResult(null);}
 const good=result?.verdict==='GOOD';
 return <div className="app-shell"><Ambient/><header className="app-header"><Brand/><div className="app-header-right"><span className="online"><i/> WORKSPACE ACTIVE</span><span className="user-pill"><b>{user.name[0].toUpperCase()}</b>{user.name}</span><button onClick={onLogout} className="logout-btn"><LogOut/> Sign out</button></div></header>
 <main className="workspace"><div className="workspace-title"><div><div className="section-eyebrow">PRIVACYMIRROR / WORKSPACE</div><h1>Privacy command center</h1><p>Inspect. Understand. Protect what matters.</p></div><span className="workspace-tag"><Activity/> LIVE ANALYSIS</span></div>
 <div className="work-grid"><section className="work-card input-card"><div className="card-heading"><div><span>01 / INPUT</span><h2>Content inspector</h2></div><label className="upload-btn"><Upload/> Upload .txt<input type="file" accept=".txt" onChange={e=>upload(e.target.files[0])}/></label></div><textarea value={text} onChange={e=>{setText(e.target.value);setResult(null);setAdvice('')}}/><div className="input-bottom"><span>{text.length} characters · Not saved as scan history</span><div><button className="small-ghost" onClick={()=>{setText(DEMO_NORMAL);setResult(null)}}>Normal sample</button><button className="button-primary" onClick={scan} disabled={busy}>{busy?'ANALYZING':'ANALYZE NOW'} <ScanSearch/></button></div></div>{error&&<div className="auth-error">{error}</div>}</section>
 <section className="work-card result-card"><div className="card-heading"><div><span>02 / VERDICT</span><h2>Security assessment</h2></div><span className="result-state">{result?'COMPLETE':'WAITING'}</span></div>
 {result?<><div className={`result-verdict ${good?'is-good':'is-bad'}`}><div>{good?<CircleCheck/>:<CircleX/>}</div><section><small>{good?'LOW SIGNAL':'ACTION REQUIRED'}</small><h3>{good?'GOOD — No supported risks found':'BAD — Review before sharing'}</h3><p>{result.verdictSummary}</p></section></div><div className="result-stats"><div><small>RISK INDEX</small><b>{result.riskScore}<i>/100</i></b><span>{result.riskLevel} / heuristic</span></div><div><small>DATA EXPOSURES</small><b>{result.findings.length}</b><span>Supported patterns</span></div><div><small>SCAM SIGNALS</small><b>{result.signals.length}</b><span>Language indicators</span></div></div></>:<div className="result-placeholder"><ShieldCheck/><b>Your report will appear here</b><span>Run an analysis to review its evidence.</span></div>}
 </section></div>
 {result&&<div className="work-grid lower-grid"><section className="work-card"><div className="card-heading"><div><span>03 / EVIDENCE</span><h2>Detected indicators</h2></div><span className="result-state">{result.findings.length+result.signals.length} ITEMS</span></div><div className="evidence-stack">{[...result.findings.map(x=>({title:x.type,desc:x.masked+' · '+x.description,severity:x.severity})),...result.signals.map(x=>({title:x.title,desc:x.explanation,severity:x.severity}))].map((x,i)=><div className="evidence-row" key={i}><span className="evidence-glyph"><AlertTriangle/></span><div><b>{x.title}</b><small>{x.desc}</small></div><em>{x.severity}</em></div>)}{!result.findings.length&&!result.signals.length&&<div className="no-evidence"><CheckCircle2/> No supported indicators detected.</div>}</div></section>
 <section className="work-card"><div className="card-heading"><div><span>04 / SAFESHARE</span><h2>Protected preview</h2></div><span className="result-state">LOCAL REDACTION</span></div><div className="preview-tabs"><button className={tab==='original'?'active':''} onClick={()=>setTab('original')}>ORIGINAL</button><button className={tab==='protected'?'active':''} onClick={()=>setTab('protected')}>PROTECTED</button></div><pre className="protected-preview">{tab==='original'?text:result.redactedText}</pre><div className="protected-actions"><button className="button-ghost" onClick={copy}><Copy/>{copied?'COPIED':'COPY'}</button><button className="button-ghost" onClick={download}><Download/> DOWNLOAD</button></div><div className="ai-box"><div><Sparkles/><section><b>Gemini security advisor</b><small>Receives redacted text and indicator categories.</small></section></div><button onClick={ask} disabled={busy}>{busy?'WAIT…':'GET GUIDANCE'} <ArrowRight/></button></div>{advice&&<p className="ai-advice">{advice}</p>}</section></div>}
 <p className="legal-note"><Shield/> Risk scores are heuristic, not probabilities. GOOD means the implemented checks found no supported indicators; it is not a safety guarantee.</p>
 </main><Footer/></div>
}
function AppRoot(){
 const [user,setUser]=useState(null),[checking,setChecking]=useState(true);
 const nav=useNavigate();
 function logout(){localStorage.removeItem('pm_pro_token');setUser(null);nav('/');}
 useEffect(()=>{const t=localStorage.getItem('pm_pro_token');if(!t){setChecking(false);return;}axios.get(API+'/api/auth/me',{headers:{Authorization:`Bearer ${t}`}}).then(({data})=>setUser(data.user)).catch(()=>localStorage.removeItem('pm_pro_token')).finally(()=>setChecking(false));},[]);
 if(checking)return <div className="boot"><ShieldCheck/><span>INITIALIZING SECURE EXPERIENCE</span></div>;
 return <Routes><Route path="/" element={<Landing user={user}/>}/><Route path="/login" element={user?<AppPage user={user} onLogout={logout}/>:<AuthPage mode="login" onAuth={u=>{setUser(u);nav('/app')}}/>}/><Route path="/signup" element={user?<AppPage user={user} onLogout={logout}/>:<AuthPage mode="signup" onAuth={u=>{setUser(u);nav('/app')}}/>}/><Route path="/app" element={user?<AppPage user={user} onLogout={logout}/>:<AuthPage mode="login" onAuth={u=>{setUser(u);nav('/app')}}/>}/><Route path="*" element={<Landing user={user}/>}/></Routes>;
}
export default function App(){return <BrowserRouter><AppRoot/></BrowserRouter>}
