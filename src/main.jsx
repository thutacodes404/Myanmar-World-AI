import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Bot, BrainCircuit, Check, ChevronDown, CircleCheck,
  Cloud, Code2, Database, Headphones, Menu, Moon, Network,
  Phone, Server, ShieldCheck, Sparkles, Sun, X, Zap
} from 'lucide-react';
import './styles.css';

const copy = {
  en: {
    nav: ['Solutions', 'Experience', 'About', 'Contact'],
    eyebrow: 'Telecommunications · Systems Integration · Cloud · Data & AI',
    heroTitle: 'Built on trust.\\nAdvancing with data and AI.',
    heroBody: 'For nearly 30 years, Myanmar World has built a strong reputation serving enterprises and government agencies through systems integration and telecommunications. Today, we are expanding that foundation with cloud, data and AI services.',
    explore: 'Explore our solutions',
    project: 'Discuss your project',
    scroll: 'Scroll to explore',
    trusted: 'A practical partner for complex technology',
    solutionsEyebrow: 'What we do',
    solutionsTitle: 'Technology that moves\\nyour organization forward.',
    solutionsBody: 'From the infrastructure that keeps you connected to the intelligence that helps you move faster, our teams bring the experience to make technology useful.',
    solutionCta: 'View capabilities',
    solutions: [
      ['01', 'Connectivity', 'Business fiber, DIA, private links, wavelength services and dark fiber—built around your actual route and availability.', 'Explore connectivity', Network],
      ['02', 'Systems integration', 'We plan, integrate and support the networks and systems your organization depends on.', 'Explore integration', Server],
      ['03', 'Cloud & infrastructure', 'Practical cloud foundations and resilient infrastructure for the way your teams work today.', 'Explore cloud', Cloud],
      ['04', 'Data & AI', 'Turn information into momentum with data platforms, intelligent agents and workflow automation.', 'Explore data & AI', BrainCircuit]
    ],
    experienceEyebrow: 'Experience you can build on.',
    experienceTitle: 'Nearly three decades\\nof making technology work.',
    experienceBody: 'Our experience spans enterprise connectivity, systems integration and ongoing technology support. We bring that practical understanding to each new cloud, data and AI engagement.',
    historyTitle: 'Built for the long view.',
    historyBody: 'Myanmar World has grown alongside the organizations and communities it serves. We combine local context with the discipline required to deliver dependable technology.',
    workEyebrow: 'The people behind your technology.',
    workTitle: 'Good technology is\\npeople-powered.',
    workBody: 'Meet the teams who plan, integrate and support the networks and systems your organization depends on.',
    workCta: 'Meet our teams',
    contactEyebrow: 'Start a conversation',
    contactTitle: 'Let’s discuss what your\\nbusiness needs next.',
    contactBody: 'Whether you need reliable connectivity, stronger infrastructure or a practical approach to data and AI, tell us about your requirements and we’ll connect you with the right team.',
    formTitle: 'Tell us a little about your project.',
    success: 'Thank you. Your enquiry has been received and will be directed to the appropriate team.',
  },
  my: {
    nav: ['ဖြေရှင်းချက်များ', 'အတွေ့အကြုံ', 'ကျွန်ုပ်တို့အကြောင်း', 'ဆက်သွယ်ရန်'],
    eyebrow: 'ဆက်သွယ်ရေး · စနစ်ပေါင်းစည်းခြင်း · Cloud · Data & AI',
    heroTitle: 'ယုံကြည်မှုဖြင့် တည်ဆောက်သည်။\\nData နှင့် AI ဖြင့် ရှေ့ဆက်သည်။',
    heroBody: 'Myanmar World သည် စီးပွားရေးလုပ်ငန်းများနှင့် အစိုးရအဖွဲ့အစည်းများအတွက် စနစ်ပေါင်းစည်းခြင်းနှင့် ဆက်သွယ်ရေးဝန်ဆောင်မှုများကို နှစ်ပေါင်း ၃၀ နီးပါး ပေးအပ်ခဲ့ပါသည်။ ယနေ့တွင် Cloud, Data နှင့် AI ဝန်ဆောင်မှုများဖြင့် ဆက်လက်တိုးချဲ့လျက်ရှိပါသည်။',
    explore: 'ဖြေရှင်းချက်များကို ကြည့်ရန်',
    project: 'သင့်ပရောဂျက်အကြောင်း ဆွေးနွေးရန်',
    scroll: 'ဆက်လက်ကြည့်ရန်',
    trusted: 'ရှုပ်ထွေးသော နည်းပညာအတွက် လက်တွေ့ကျသော မိတ်ဖက်',
    solutionsEyebrow: 'ကျွန်ုပ်တို့လုပ်ဆောင်သည်များ',
    solutionsTitle: 'သင့်အဖွဲ့အစည်းကို\\nရှေ့သို့ရွှေ့ပေးမည့် နည်းပညာ။',
    solutionsBody: 'ဆက်သွယ်ရေးအခြေခံအဆောက်အအုံမှ အဖွဲ့အစည်းကို ပိုမိုမြန်ဆန်စွာ ဆုံးဖြတ်နိုင်စေမည့် ဉာဏ်ရည်အထိ ကျွန်ုပ်တို့၏အဖွဲ့များက လက်တွေ့အတွေ့အကြုံဖြင့် ပံ့ပိုးပေးပါသည်။',
    solutionCta: 'စွမ်းဆောင်ရည်များကြည့်ရန်',
    solutions: [
      ['၀၁', 'ဆက်သွယ်ရေး', 'Business fiber, DIA, private links, wavelength နှင့် dark fiber ဝန်ဆောင်မှုများ။', 'ဆက်သွယ်ရေးကို ကြည့်ရန်', Network],
      ['၀၂', 'စနစ်ပေါင်းစည်းခြင်း', 'သင့်အဖွဲ့အစည်းအတွက် အရေးကြီးသော ကွန်ရက်နှင့် စနစ်များကို စီမံ၊ ပေါင်းစည်း၊ ပံ့ပိုးပေးပါသည်။', 'ပေါင်းစည်းမှုကို ကြည့်ရန်', Server],
      ['၀၃', 'Cloud နှင့် အခြေခံအဆောက်အအုံ', 'သင့်အဖွဲ့များ၏ လက်ရှိလုပ်ငန်းပုံစံနှင့် ကိုက်ညီသော Cloud အခြေခံများ။', 'Cloud ကို ကြည့်ရန်', Cloud],
      ['၀၄', 'Data နှင့် AI', 'Data platform, intelligent agent နှင့် workflow automation များဖြင့် သတင်းအချက်အလက်ကို အရှိန်အဟုန်အဖြစ် ပြောင်းလဲပါ။', 'Data & AI ကို ကြည့်ရန်', BrainCircuit]
    ],
    experienceEyebrow: 'တည်ဆောက်နိုင်သော အတွေ့အကြုံ။',
    experienceTitle: 'နည်းပညာကို လက်တွေ့အသုံးချစေခဲ့သော\\nဆယ်စုနှစ်သုံးခုနီးပါး။',
    experienceBody: 'ကျွန်ုပ်တို့၏အတွေ့အကြုံသည် enterprise connectivity, systems integration နှင့် ဆက်လက်ပံ့ပိုးမှုများကို လွှမ်းခြုံထားပါသည်။',
    historyTitle: 'ရေရှည်အတွက် တည်ဆောက်ထားသည်။',
    historyBody: 'Myanmar World သည် မိမိဝန်ဆောင်မှုပေးနေသော အဖွဲ့အစည်းများနှင့် လူမှုအသိုင်းအဝိုင်းများနှင့်အတူ တိုးတက်လာခဲ့ပါသည်။',
    workEyebrow: 'သင့်နည်းပညာ၏ နောက်ကွယ်မှလူများ။',
    workTitle: 'ကောင်းမွန်သော နည်းပညာသည်\\nလူများဖြင့် လည်ပတ်သည်။',
    workBody: 'သင့်အဖွဲ့အစည်းအပေါ် မှီခိုနေသော ကွန်ရက်နှင့် စနစ်များကို စီမံ၊ ပေါင်းစည်း၊ ပံ့ပိုးပေးသည့် အဖွဲ့များနှင့် တွေ့ဆုံပါ။',
    workCta: 'ကျွန်ုပ်တို့၏အဖွဲ့များ',
    contactEyebrow: 'စကားစမြည်ပြောကြစို့',
    contactTitle: 'သင့်လုပ်ငန်း၏ နောက်တစ်ဆင့်အတွက်\\nဆွေးနွေးကြရအောင်။',
    contactBody: 'ယုံကြည်စိတ်ချရသော ဆက်သွယ်ရေး၊ ပိုမိုကောင်းမွန်သော အခြေခံအဆောက်အအုံ သို့မဟုတ် Data နှင့် AI အတွက် လက်တွေ့ကျသောနည်းလမ်း လိုအပ်ပါက သင့်လိုအပ်ချက်များကို ပြောပြပါ။',
    formTitle: 'သင့်ပရောဂျက်အကြောင်း အနည်းငယ်ပြောပြပါ။',
    success: 'ကျေးဇူးတင်ပါသည်။ သင့်မေးမြန်းချက်ကို လက်ခံရရှိပြီး သက်ဆိုင်ရာအဖွဲ့ထံ ပေးပို့ပါမည်။',
  }
};

function App() {
  const [theme, setTheme] = useState('light');
  const [language] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language === 'my' ? 'my' : 'en';
  }, [theme, language]);
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;
    try {
      if (!endpoint) throw new Error('No enquiry endpoint configured');
      const response = await fetch(endpoint, { method: 'POST', body: new FormData(event.currentTarget), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Enquiry submission failed');
      setSubmitted(true);
      event.currentTarget.reset();
    } catch {
      window.alert('We could not send your enquiry yet. Please configure the approved enquiry endpoint or use the alternative contact details below.');
    } finally { setSending(false); }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Myanmar World home"><span className="brand-mark">MW</span><span>MYANMAR<br /><b>WORLD</b></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {t.nav.map((item, index) => <a key={item} href={['#solutions', '#experience', '#about', '#contact'][index]} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle dark mode">{theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}</button>
          <a className="header-cta" href="#contact">Talk to us <ArrowUpRight size={16} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</p>
            <h1>{t.heroTitle.split('\\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h1>
            <p className="hero-body">{t.heroBody}</p>
            <div className="hero-actions"><a className="button button-dark" href="#solutions">{t.explore} <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">{t.project} <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration representing connected infrastructure">
            <div className="art-glow" /><div className="orb orb-one" /><div className="orb orb-two" /><div className="grid-lines" /><div className="scan-line" /><span className="art-label label-one">CONNECT</span><span className="art-label label-two">INTELLIGENCE</span><div className="art-node node-one" /><div className="art-node node-two" /><div className="art-core"><Zap size={28} /></div>
          </div>
          <div className="hero-bottom"><span>30 <small>YEARS<br />OF EXPERIENCE</small></span><i /><span>EST. <b>1996</b></span><a href="#solutions">{t.scroll} <ArrowDown /></a></div>
        </section>

        <section className="statement reveal"><p>{t.trusted}</p><div className="statement-line" /><div className="statement-icons"><Network /><span>×</span><Cloud /><span>×</span><BrainCircuit /></div></section>

        <section className="section solutions-section reveal" id="solutions">
          <div className="section-heading"><div><p className="eyebrow">{t.solutionsEyebrow}</p><h2>{t.solutionsTitle.split('\\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2></div><div className="heading-side"><p>{t.solutionsBody}</p><a className="text-link" href="#contact">{t.solutionCta} <ArrowUpRight size={16} /></a></div></div>
          <div className="solution-grid">{t.solutions.map(([number, title, body, cta, Icon], index) => <article className="solution-card" style={{ '--delay': `${index * 90}ms` }} key={title}><div className="card-top"><span>{number}</span><Icon size={28} strokeWidth={1.4} /></div><h3>{title}</h3><p>{body}</p><a href="#contact">{cta} <ArrowUpRight size={15} /></a></article>)}</div>
        </section>

        <section className="experience-section reveal" id="experience">
          <div className="experience-image"><div className="image-overlay"><span>01</span><p>Infrastructure designed<br />for what comes next.</p></div><div className="signal signal-a" /><div className="signal signal-b" /></div>
          <div className="experience-copy"><p className="eyebrow">{t.experienceEyebrow}</p><h2>{t.experienceTitle.split('\\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2><p>{t.experienceBody}</p><div className="metric-row"><div><b>30</b><span>years of<br />experience</span></div><div><b>360°</b><span>technology<br />partnership</span></div></div></div>
        </section>

        <section className="history-section reveal" id="about"><div className="history-card"><p className="eyebrow">01 / Our story</p><h2>{t.historyTitle}</h2><p>{t.historyBody}</p><a className="text-link" href="#contact">Learn about Myanmar World <ArrowUpRight size={16} /></a></div><div className="history-detail"><ShieldCheck size={23} /><span>Accountability at every step.</span><p>Clear communication, considered delivery and support that stays with you.</p></div></section>

        <section className="people-section reveal"><div className="people-copy"><p className="eyebrow">{t.workEyebrow}</p><h2>{t.workTitle.split('\\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2><p>{t.workBody}</p><a className="button button-outline" href="#contact">{t.workCta} <ArrowUpRight size={17} /></a></div><div className="people-visual"><div className="photo-caption"><span className="caption-dot" />Engineering team conducting equipment acceptance testing.</div><div className="portrait portrait-one" /><div className="portrait portrait-two" /><div className="portrait portrait-three" /></div></section>

        <section className="contact-section reveal" id="contact"><div className="contact-intro"><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle.split('\\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2><p>{t.contactBody}</p><div className="contact-details"><a href="tel:+959000000000"><Phone size={17} /> Official telephone · To be confirmed</a><a href="mailto:hello@yourdomain.com"><Headphones size={17} /> Company-domain email · To be confirmed</a></div></div><div className="form-wrap"><h3>{t.formTitle}</h3>{submitted ? <div className="success-message"><CircleCheck size={26} />{t.success}<button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <form onSubmit={handleSubmit}><div className="field-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Company / organization<input name="company" required placeholder="Company name" /></label></div><div className="field-row"><label>Email or telephone<input name="contact" required placeholder="How can we reach you?" /></label><label>Service interest<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Connectivity</option><option>Systems integration</option><option>Cloud & infrastructure</option><option>Data & AI</option><option>Managed services</option></select></label></div><label>Brief description<textarea name="message" required placeholder="Tell us what you are looking to achieve..." rows="4" /></label><label className="location-field">Location or endpoints for connectivity enquiries<input name="location" placeholder="Optional" /></label><div className="form-footer"><p>We will use the information you provide to respond to your enquiry. Please read our <a href="#footer">Privacy Notice</a>.</p><button className="button button-dark" disabled={sending}>{sending ? 'Sending…' : 'Send enquiry'} <ArrowUpRight size={17} /></button></div></form>}</div></section>
      </main>
      <footer id="footer"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark">MW</span><span>MYANMAR<br /><b>WORLD</b></span></a><p>An established technology partner for Myanmar’s connected and intelligent future.</p></div><div><h4>Explore</h4><a href="#solutions">Solutions</a><a href="#experience">Experience</a><a href="#about">About us</a></div><div><h4>Enquiries</h4><a href="#contact">Business projects</a><a href="#contact">Connectivity</a><a href="#contact">Existing customers</a></div><div><h4>Company</h4><a href="#footer">Privacy notice</a><a href="#footer">Website terms</a><span>Office address · To be confirmed</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Myanmar World. All rights reserved.</span><span>Telecommunications · Systems Integration · Cloud · Data & AI</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
