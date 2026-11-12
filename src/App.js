import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaVolumeHigh,
  FaVolumeXmark,
} from 'react-icons/fa6';
import { experience, skillGroups, summary } from './resume';
import portrait from './assets/plates/animated-ajith.webp';
import logoMark from './assets/logo-symbol.webp';
import './App.css';

const projects = [
  {
    name: 'EKS platform blueprint',
    type: 'PLATFORM ENGINEERING',
    stack: 'Terraform · ArgoCD · Helm · AWS IRSA',
    summary: 'A repeatable multi-environment Kubernetes foundation, with drift detection, health checks, and least-privilege workload access.',
    notes: [
      'Defined a reusable Terraform foundation for multiple environments, with EKS worker capacity on EC2 Launch Templates and Amazon Linux 2023.',
      'Connected cluster workloads to a GitOps delivery flow using ArgoCD and Helm, with drift detection and health checks for deployed applications.',
      'Designed workload identity and secret delivery around AWS IRSA and External Secrets Operator, so pods can access only the AWS resources they need.',
      'Engineering focus: infrastructure as code, Kubernetes platform design, deployment automation, and least-privilege cloud access.',
    ],
    mark: '01',
  },
  {
    name: 'Thatiflix Converter',
    type: 'DESKTOP · MACOS + WINDOWS',
    stack: 'Electron · Node.js · FFmpeg · Shell',
    summary: 'A local-first desktop utility for remuxing video without uploading large media files.',
    notes: [
      'Built a cross-platform desktop workflow with Electron and Node.js, bundling FFmpeg for macOS and Windows.',
      'Keeps source media on the user’s machine and uses FFmpeg stream-copying for remuxing, avoiding a cloud upload and unnecessary re-encoding.',
      'Runs processing outside the interface and reports progress, so long operations remain visible while the app stays responsive.',
      'Engineering focus: desktop application structure, native binary packaging, process coordination, and media tooling.',
    ],
    mark: '02',
  },
  {
    name: 'Shift Rota Tracker',
    type: 'LIVE WEB APP · NATIVE BUILDS CONFIGURED',
    stack: 'Next.js · TypeScript · Firebase · Capacitor',
    summary: 'A personal shift planner with weekly, monthly, and list views, account-based data, and reminders. The web app is live, with native build targets configured for mobile and Android TV.',
    notes: [
      'Implemented signup, login, and password recovery with Firebase Authentication, keeping shift records associated with each account in Firestore.',
      'Modelled the planner around shift, leave, holiday, and day-off entries, then surfaced them in weekly, monthly calendar, and filtered list views.',
      'Made the application available as a live web app and configured Capacitor targets for iOS and Android, including mobile and Android TV variants.',
      'Added reminder support to the mobile builds; engineering focus includes account flows, user-scoped data, date-based UI, and cross-platform delivery.',
    ],
    links: [
      { label: 'Open web app', url: 'https://shiftracker.web.app' },
      { label: 'GitHub repository', url: 'https://github.com/AJtati/shifttracker' },
    ],
    mark: '03',
  },
  {
    name: 'Passport Photo Maker',
    type: 'LIVE WEB APP · IOS / ANDROID / DESKTOP BUILDS',
    stack: 'React · Canvas · Capacitor · Electron',
    summary: 'A browser-based photo and print studio for passport sizing, print sheets, collages, custom frames, resume layouts, and calendar tools.',
    notes: [
      'Built image editing flows around browser Canvas, including passport and visa presets, custom dimensions, high-resolution cropping, and print-ready photo sheets.',
      'Expanded the same application with multi-photo layouts, collages, custom frames, resume layouts, and calendar tools.',
      'Added Panchangam, horoscope, Muhurtham, and marriage matching features as additional tools within the product.',
      'Configured Capacitor and Electron build paths for mobile and desktop. Engineering focus: image processing, canvas rendering, print layout, and extending a multi-tool application.',
    ],
    links: [
      { label: 'Open web app', url: 'https://ajtati.github.io/Passportphotomaker/' },
      { label: 'GitHub repository', url: 'https://github.com/AJtati/Passportphotomaker' },
    ],
    mark: '04',
  },
  {
    name: 'AI Job Search Studio',
    type: 'LOCAL DESKTOP APP · MACOS + WINDOWS',
    stack: 'TypeScript · Bun · Swift / WebKit · LaTeX',
    summary: 'An evidence-first desktop workspace for researching roles, evaluating job fit, and producing grounded resume and cover letter drafts.',
    notes: [
      'Imports PDF, plain-text, and LaTeX resumes into a reusable candidate profile, separating source evidence from application-specific documents.',
      'Matches job descriptions against that evidence with deterministic scoring, while reporting eligibility, language, and location checks separately.',
      'Constrains optional AI-assisted rewrites to the supplied profile and compiles final application PDFs locally with LuaLaTeX or XeLaTeX.',
      'Engineering focus: desktop workflows, document parsing, explainable matching, bounded AI integration, and local file generation.',
    ],
    links: [
      { label: 'GitHub repository', url: 'https://github.com/AJtati/Job-automate' },
    ],
    mark: '05',
  },
  {
    name: 'This Portfolio',
    type: 'LIVE WEB PORTFOLIO',
    stack: 'React · Framer Motion · Firebase Hosting · GitHub Pages',
    summary: 'An interactive portfolio for exploring my engineering work, career history, toolkit, education, and contact details.',
    notes: [
      'Built a responsive single-page React interface with section navigation, project selection, keyboard controls, and animated screen transitions.',
      'Organized the portfolio into data-driven project and career stories, a technical skills view, education, and downloadable resume access.',
      'Added reduced-motion support and interactive portrait and audio details to the interface.',
      'Published through Firebase Hosting and GitHub Pages, with source and project content maintained in GitHub.',
    ],
    links: [
      { label: 'Open Firebase site', url: 'https://ajithsuryathati.web.app' },
      { label: 'GitHub Pages', url: 'https://ajtati.github.io/resumeproject/' },
      { label: 'GitHub repository', url: 'https://github.com/AJtati/resumeproject' },
    ],
    mark: '06',
  },
  {
    name: 'SKRALLS Praxis Platform',
    type: 'LIVE WEB PLATFORM',
    stack: 'HTML · CSS · JavaScript · Firebase · Razorpay',
    summary: 'A learning platform for Praxis programmes, with learner accounts, course enrolment, live cohorts, and certificates.',
    notes: [
      'Implemented learner journeys for discovering programmes, enrolling, accessing courses, joining live cohorts, and managing accounts.',
      'Connected course completion to learner achievements and downloadable certificates; added admin workflows for courses and enrolments.',
      'Integrated Firebase services with Razorpay checkout so a successful payment can provision course access.',
      'Engineering focus: multi-role application flows, payment integration, learner data, and end-to-end access provisioning.',
    ],
    links: [
      { label: 'Open learner platform', url: 'https://skralls.web.app' },
    ],
    mark: '07',
  },
  {
    name: 'Bandhan Box',
    type: 'LIVE WEB STOREFRONT',
    stack: 'Next.js · React · TypeScript · Firebase',
    summary: 'A local rakhi storefront for browsing curated bundles, checking availability, and ordering directly over WhatsApp.',
    notes: [
      'Built a Next.js storefront with category filters, search, sorting, and individual product pages for curated bundles.',
      'Implemented cart behavior with quantity, stock, minimum-order, and subtotal checks before customers place an order.',
      'Designed the order flow for local delivery, including Middlesbrough-area bundles, complimentary gift handling, and WhatsApp contact.',
      'Engineering focus: responsive commerce UI, product browsing, cart state, and practical checkout flows for a local business.',
    ],
    links: [
      { label: 'Open Bandhan Box', url: 'https://bhandhan.web.app' },
    ],
    mark: '08',
  },
  {
    name: 'RoomRenter',
    type: 'LIVE WEB APP',
    stack: 'React · TypeScript · Firebase · Firestore',
    summary: 'A room listing and rental management app that helps people browse available rooms and contact properties directly.',
    notes: [
      'Created public room listings with property details and availability, alongside search entry points for prospective renters.',
      'Built authenticated administration flows for managing properties, tenants, and previous-tenancy records.',
      'Uses Firebase Authentication, Firestore, Storage, and Cloud Functions to support account access, application data, uploaded files, and public listings.',
      'Engineering focus: full-stack feature flows, access-controlled administration, data-backed listings, and cloud service integration.',
    ],
    links: [
      { label: 'Open RoomRenter', url: 'https://roomrenter.web.app' },
    ],
    mark: '09',
  },
  {
    name: 'Thatiflix Mobile',
    type: 'ANDROID APP · MOBILE + TABLET',
    stack: 'Kotlin · Jetpack Compose · Media3 · Firebase',
    summary: 'A native Android media app for browsing supported video sources and watching a personal library on mobile and tablet.',
    notes: [
      'Built a native Android interface with Kotlin and Jetpack Compose, using Media3 components for playback.',
      'Organizes a selected media library into movies, web series, TV shows, kids, and custom categories for phone and tablet layouts.',
      'Handles account and cloud-source integrations alongside cached library state and watch-progress updates.',
      'Engineering focus: native Android UI, media playback, local state, and integrating remote media sources.',
    ],
    mark: '10',
  },
  {
    name: 'Backup Harbor',
    type: 'DESKTOP APP · MACOS + WINDOWS',
    stack: 'Tauri · Rust · TypeScript · age encryption',
    summary: 'A desktop utility for finding protected files across Git repositories and creating encrypted, portable backups with recovery options.',
    notes: [
      'Scans selected Git repositories for ignored secret files and project-specific AI instructions, then presents the findings for review before archiving.',
      'Creates distinct archives protected by a passphrase or recovery key, and verifies file hashes during restore to detect changed or damaged files.',
      'Uses a Tauri desktop shell with Rust and TypeScript; macOS DMG and Windows MSI / NSIS installer workflows are configured.',
      'Engineering focus: filesystem discovery, secure archive workflows, integrity verification, and cross-platform desktop packaging.',
    ],
    mark: '11',
  },
];

const sections = [
  { id: 'career', label: 'Career', key: '01' },
  { id: 'work', label: 'Personal Projects', key: '02' },
  { id: 'toolkit', label: 'Toolkit', key: '03' },
  { id: 'profile', label: 'Profile', key: '04' },
];

const education = [
  { degree: 'Master of Science in Computer Science', university: 'Teesside University', period: 'Jan 2021 – Jan 2023' },
  { degree: 'Bachelor of Technology', university: 'Jawaharlal Nehru Technological University', period: '2012 – 2016' },
];
const contactEmail = 'ajithsuryathati@gmail.com';
const contactPhone = '+44 7469 475250';
const contactPhoneUri = '+447469475250';
const whatsAppNumber = '447469475250';

function Waveform({ active = false }) {
  const heights = [6, 9, 5, 11, 8, 14, 9, 18, 12, 24, 16, 34, 22, 50, 28, 40, 18, 30, 14, 22, 10, 16, 8, 13, 6, 11, 5, 8];
  return <span className={`audio-waveform ${active ? 'audio-waveform--active' : ''}`} aria-hidden="true">{heights.map((height, index) => <i key={index} style={{ '--bar-height': `${height}px`, '--bar-index': index }} />)}</span>;
}

function HeroPortrait({ portraitRef, lightRef }) {
  return (
    <figure className="portrait-stage">
      <span className="portrait-shape portrait-shape--coral" aria-hidden="true" />
      <span className="portrait-shape portrait-shape--blue" aria-hidden="true" />
      <span className="portrait-orbit portrait-orbit--one" aria-hidden="true" />
      <span className="portrait-orbit portrait-orbit--two" aria-hidden="true" />
      <div className="portrait-aperture">
        <div className="portrait-person">
          <img ref={portraitRef} src={portrait} alt="Illustrated portrait of Ajith Surya Thati" />
        </div>
        <span ref={lightRef} className="portrait-light" aria-hidden="true" />
      </div>
    </figure>
  );
}

function SectionLink({ section, active, onSelect }) {
  return (
    <button className={`section-link ${active ? 'is-active' : ''}`} type="button" onClick={() => onSelect(section.id)} aria-current={active ? 'page' : undefined}>
      <span className="section-dot" aria-hidden="true" />
      <span>{section.label}</span>
    </button>
  );
}

function HomeScreen({ onNavigate, soundEnabled }) {
  const auraRef = useRef(null);
  const portraitRef = useRef(null);
  const lightRef = useRef(null);
  const pointerFrame = useRef(0);
  const target = useRef({ x: 0, y: 0, nx: 0, ny: 0 });
  const current = useRef({ x: 0, y: 0, nx: 0, ny: 0 });

  const animatePointer = useCallback(() => {
    const next = current.current;
    const goal = target.current;
    next.x += (goal.x - next.x) * 0.16;
    next.y += (goal.y - next.y) * 0.16;
    next.nx += (goal.nx - next.nx) * 0.16;
    next.ny += (goal.ny - next.ny) * 0.16;

    if (auraRef.current) auraRef.current.style.transform = `translate3d(${next.x}px,${next.y}px,0) translate(-50%,-50%)`;
    if (portraitRef.current) {
      portraitRef.current.style.setProperty('--portrait-x', `${next.nx * 8}px`);
      portraitRef.current.style.setProperty('--portrait-y', `${next.ny * -5}px`);
      portraitRef.current.style.setProperty('--portrait-rotate', `${next.nx * 2.2}deg`);
    }
    if (lightRef.current) lightRef.current.style.transform = `translate3d(${next.nx * 72}px,${next.ny * 54}px,0) translate(-50%,-50%)`;

    const distance = Math.abs(goal.x - next.x) + Math.abs(goal.y - next.y) + Math.abs(goal.nx - next.nx) * 100 + Math.abs(goal.ny - next.ny) * 100;
    if (distance > 0.3) pointerFrame.current = window.requestAnimationFrame(animatePointer);
    else pointerFrame.current = 0;
  }, []);

  const onPointerMove = (event) => {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    target.current = { x, y, nx: (x / bounds.width - 0.5) * 2, ny: (y / bounds.height - 0.5) * 2 };
    auraRef.current?.classList.add('is-active');
    if (!pointerFrame.current) pointerFrame.current = window.requestAnimationFrame(animatePointer);
  };

  const onPointerLeave = (event) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
      auraRef.current?.classList.remove('is-active');
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    target.current = { x: bounds.width / 2, y: bounds.height / 2, nx: 0, ny: 0 };
    auraRef.current?.classList.remove('is-active');
    if (!pointerFrame.current) pointerFrame.current = window.requestAnimationFrame(animatePointer);
  };

  useEffect(() => {
    const stage = document.querySelector('.portrait-stage');
    if (!stage) return undefined;
    const trackScroll = () => {
      const tilt = Math.max(-2.5, Math.min(2.5, window.scrollY / 110));
      stage.style.setProperty('--scroll-tilt', `${tilt}deg`);
    };
    trackScroll();
    window.addEventListener('scroll', trackScroll, { passive: true });
    return () => window.removeEventListener('scroll', trackScroll);
  }, []);

  useEffect(() => () => window.cancelAnimationFrame(pointerFrame.current), []);

  return (
    <section
      className="home-screen"
      aria-labelledby="home-title"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <span ref={auraRef} className="cursor-aura" aria-hidden="true" />
      <div className="home-copy">
        <h1 id="home-title"><span>AJITH SURYA</span><span>THATI</span></h1>
        <div className="name-wave"><Waveform active={soundEnabled} /></div>
        <h2>SOFTWARE &amp; PLATFORM ENGINEER</h2>
        <p>Product software, cloud platforms, reliable delivery.</p>
        <button className="enter-button" type="button" onClick={() => onNavigate('work')}>
          <span>EXPLORE MY WORK</span><FaArrowRight aria-hidden="true" />
        </button>
      </div>
      <HeroPortrait portraitRef={portraitRef} lightRef={lightRef} />
    </section>
  );
}

function ScreenHeading({ title, onBack }) {
  return (
    <div className="screen-heading">
      <button className="back-overview" type="button" onClick={onBack}><FaArrowLeft aria-hidden="true" /> BACK TO OVERVIEW</button>
      <h1>{title}<span>.</span></h1>
    </div>
  );
}

function WorkScreen({ selectedProject, setSelectedProject, onBack, playCue }) {
  const project = projects[selectedProject];
  const chooseProject = (index) => {
    setSelectedProject(index);
    playCue('select');
  };
  return (
    <section className="content-screen work-screen" aria-label="Project stories">
      <ScreenHeading title="Personal Projects" onBack={onBack} />
      <div className="work-layout">
        <div className="project-index" role="tablist" aria-label="Projects">
          {projects.map((item, index) => (
            <button key={item.name} className={`project-select ${index === selectedProject ? 'is-active' : ''}`} type="button" role="tab" aria-selected={index === selectedProject} onClick={() => chooseProject(index)}>
              <span className="project-ordinal">{item.mark}</span><span className="project-select-copy"><small>{item.type}</small><strong>{item.name}</strong></span><FaArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article className="project-story" key={project.name} role="tabpanel" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
            <div className="story-header"><span>PROJECT CASE STUDY&nbsp; / &nbsp;{project.mark}</span><span>{String(selectedProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span></div>
            <h2>{project.name}</h2>
            <p className="project-type-label">{project.type}</p>
            <p className="story-summary">{project.summary}</p>
            <div className="story-wave"><Waveform active={false} /></div>
            <div className="story-stack">{project.stack}</div>
            {project.links?.length > 0 && <nav className="story-links" aria-label={`${project.name} links`}>
              {project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<FaArrowUpRightFromSquare aria-hidden="true" /></a>)}
            </nav>}
            <h3>Engineering details</h3>
            <ul>{project.notes.map((note) => <li key={note}>{note}</li>)}</ul>
            <div className="story-controls">
              <button type="button" onClick={() => chooseProject((selectedProject + projects.length - 1) % projects.length)}><FaArrowLeft /> PREVIOUS</button>
              <button type="button" onClick={() => chooseProject((selectedProject + 1) % projects.length)}>NEXT PROJECT <FaArrowRight /></button>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CareerScreen({ selectedJob, setSelectedJob, onBack, playCue }) {
  const job = experience.jobs[selectedJob];
  const chooseJob = (index) => {
    setSelectedJob(index);
    playCue('select');
  };
  return (
    <section className="content-screen career-screen" aria-label="Work experience">
      <ScreenHeading title="Career" onBack={onBack} />
      <div className="career-layout">
        <div className="career-index" role="tablist" aria-label="Roles">
          {experience.jobs.map((item, index) => <button className={`career-select ${selectedJob === index ? 'is-active' : ''}`} role="tab" aria-selected={selectedJob === index} type="button" key={item.company} onClick={() => chooseJob(index)}>
            <span>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.company}</strong><small>{item.period}</small></div><FaArrowRight aria-hidden="true" />
          </button>)}
        </div>
        <article className="career-record" key={job.company}>
          <div className="record-heading"><div><span>{job.location}</span><h2>{job.title}</h2><p>{job.company}</p></div><span className="record-date">{job.period}</span></div>
          <ol>{job.tasks.map((task, index) => <li key={task}><span>{String(index + 1).padStart(2, '0')}</span><p>{task}</p></li>)}</ol>
        </article>
      </div>
    </section>
  );
}

function ToolkitScreen({ onBack }) {
  return (
    <section className="content-screen toolkit-screen" aria-label="Technical skills">
      <ScreenHeading title="Toolkit" onBack={onBack} />
      <p className="toolkit-intro">I build web, desktop, and Android applications, and bring 8+ years of professional experience in cloud platforms and delivery automation. These skills are reflected in the products and platform work shown here.</p>
      <div className="toolkit-list">{skillGroups.map(({ name, skills, applied }, index) => <article className="toolkit-row" key={name}><span>{String(index + 1).padStart(2, '0')}</span><h2>{name}</h2><div className="toolkit-row-copy"><p>{skills}</p><small>{applied}</small></div><span className="toolkit-frequency" aria-hidden="true"><i /><i /><i /><i /><i /></span></article>)}</div>
    </section>
  );
}

function ProfileScreen({ onBack }) {
  return (
    <section className="content-screen profile-screen" aria-label="Profile and education">
      <ScreenHeading title="About Ajith" onBack={onBack} />
      <div className="profile-layout">
        <div className="profile-statement"><p>{summary}</p><div className="profile-contact"><strong>Start a conversation</strong><nav className="contact-methods" aria-label="Contact options"><a href={`mailto:${contactEmail}`}>Email <FaArrowUpRightFromSquare aria-hidden="true" /></a><a href={`sms:${contactPhoneUri}`}>SMS</a><a href={`https://wa.me/${whatsAppNumber}`} target="_blank" rel="noreferrer">WhatsApp <FaArrowUpRightFromSquare aria-hidden="true" /></a></nav></div></div>
        <div className="education-record"><span>EDUCATION</span>{education.map((degree, index) => <article key={degree.degree}><small>0{index + 1}</small><div><h2>{degree.degree}</h2><p>{degree.university}</p><time>{degree.period}</time></div></article>)}</div>
        <div className="profile-links"><a href={`tel:${contactPhoneUri}`}>{contactPhone}</a><a href="https://linkedin.com/in/ajithsurya" target="_blank" rel="noreferrer">LinkedIn <FaLinkedinIn /></a><a href="https://github.com/AJtati" target="_blank" rel="noreferrer">GitHub Profile <FaGithub /></a></div>
      </div>
    </section>
  );
}

function isAppleMobileBrowser() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function App() {
  const [section, setSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedJob, setSelectedJob] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContextRef = useRef(null);
  const mediaAudioRef = useRef(null);
  const screenRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const getAudioContext = useCallback(() => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    try {
      if (!audioContextRef.current) {
        try {
          audioContextRef.current = new AudioContextClass({ latencyHint: 'interactive' });
        } catch {
          audioContextRef.current = new AudioContextClass();
        }
      }
      return audioContextRef.current;
    } catch {
      return null;
    }
  }, []);

  const unlockAudio = useCallback(() => {
    const context = getAudioContext();
    if (!context) return Promise.resolve(false);
    if (context.state === 'running') return Promise.resolve(true);
    try {
      // Invoke resume synchronously from the trusted click, and wait for Safari
      // to report a running context before creating the short oscillator cues.
      return context.resume()
        .then(() => context.state === 'running')
        .catch(() => false);
    } catch {
      return Promise.resolve(false);
    }
  }, [getAudioContext]);

  const playCue = useCallback((kind = 'navigate', force = false) => {
    if (!force && !soundEnabled) return;
    if (isAppleMobileBrowser()) {
      try {
        mediaAudioRef.current?.pause();
        const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/${kind === 'select' || kind === 'power' ? kind : 'navigate'}.wav`);
        mediaAudioRef.current = audio;
        audio.onended = () => { if (mediaAudioRef.current === audio) mediaAudioRef.current = null; };
        const playback = audio.play();
        if (playback && typeof playback.catch === 'function') playback.catch(() => {});
      } catch { /* Keep navigation responsive if mobile media playback fails. */ }
      return;
    }
    const context = getAudioContext();
    if (!context) return;
    const scheduleCue = () => {
      const start = context.currentTime;
      const notes = kind === 'power' ? [392, 587.33] : kind === 'select' ? [523.25] : [440, 659.25];
      notes.forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const time = start + index * 0.075;
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, time);
        gain.gain.setValueAtTime(0.0001, time);
        gain.gain.exponentialRampToValueAtTime(0.09, time + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(time);
        oscillator.stop(time + 0.17);
        oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
      });
    };
    if (context.state === 'running') {
      try { scheduleCue(); } catch { /* Keep navigation responsive if audio output fails. */ }
      return;
    }
    unlockAudio().then((ready) => {
      if (!ready || (!force && !soundEnabled)) return;
      try { scheduleCue(); } catch { /* Keep navigation responsive if audio output fails. */ }
    });
  }, [getAudioContext, soundEnabled, unlockAudio]);

  const navigate = useCallback((nextSection) => {
    setSection(nextSection);
    playCue('navigate');
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  }, [playCue, reducedMotion]);

  const selectProject = (index) => {
    setSelectedProject(index);
    setSection('work');
    playCue('select');
  };

  const toggleSound = () => {
    if (!soundEnabled) {
      setSoundEnabled(true);
      playCue('power', true);
    } else {
      setSoundEnabled(false);
      mediaAudioRef.current?.pause();
    }
  };

  useEffect(() => {
    if (section !== 'home') screenRef.current?.focus({ preventScroll: true });
  }, [section]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'Escape' && section !== 'home') navigate('home');
      if (section === 'work' && event.key === 'ArrowRight') setSelectedProject((current) => (current + 1) % projects.length);
      if (section === 'work' && event.key === 'ArrowLeft') setSelectedProject((current) => (current + projects.length - 1) % projects.length);
      if (section === 'career' && event.key === 'ArrowRight') setSelectedJob((current) => (current + 1) % experience.jobs.length);
      if (section === 'career' && event.key === 'ArrowLeft') setSelectedJob((current) => (current + experience.jobs.length - 1) % experience.jobs.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [section, navigate]);

  const activeLabel = sections.find((item) => item.id === section)?.label || 'Overview';

  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <button className="wordmark" type="button" onClick={() => navigate('home')} aria-label="Ajith Surya Thati logo, return to portfolio overview"><img src={logoMark} alt="Ajith Surya Thati logo" /></button>
        <nav className="top-navigation" aria-label="Portfolio sections">
          {sections.map((item) => <SectionLink key={item.id} section={item} active={section === item.id} onSelect={navigate} />)}
        </nav>
        <div className="top-actions">
          <button className={`sound-toggle ${soundEnabled ? 'is-on' : ''}`} type="button" onClick={toggleSound} aria-pressed={soundEnabled} aria-label={soundEnabled ? 'Mute sound effects' : 'Turn sound effects on'} title={soundEnabled ? 'Mute sound effects' : 'Turn sound effects on'}>
            {soundEnabled ? <FaVolumeHigh aria-hidden="true" /> : <FaVolumeXmark aria-hidden="true" />}
          </button>
          <a className="call-button" href="tel:+447469475250" aria-label="Call Ajith"><FaPhone aria-hidden="true" /><span className="call-label">CALL</span></a>
          <a className="resume-download" href={`${process.env.PUBLIC_URL}/Ajith-Surya-Thati-Resume.pdf`} download="Ajith-Surya-Thati-Resume.pdf" aria-label="Download PDF resume" title="Download PDF resume"><span className="resume-label">RESUME PDF</span><FaDownload aria-hidden="true" /></a>
          <a className="contact-button" href={`mailto:${contactEmail}`}><span className="contact-label">CONTACT</span> <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        </div>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        {section === 'home' ? (
          <motion.div className="home-wrapper" key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0.12 : 0.28 }}>
            <HomeScreen onNavigate={navigate} soundEnabled={soundEnabled} />
            <footer className="chapter-dock">
              <span className="dock-label">EXPLORE MORE <b aria-hidden="true">→</b></span>
              <nav className="dock-navigation" aria-label="Portfolio sections">{sections.map((item) => <SectionLink key={item.id} section={item} active={item.id === 'work'} onSelect={navigate} />)}</nav>
              <button className="dock-feature" type="button" onClick={() => selectProject(0)}><span>FEATURED PROJECT</span><strong>EKS PLATFORM BLUEPRINT <FaArrowRight aria-hidden="true" /></strong></button>
            </footer>
          </motion.div>
        ) : (
          <motion.div className="section-stage" key={section} ref={screenRef} tabIndex={-1} initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }} transition={{ duration: reducedMotion ? 0.12 : 0.32, ease: [0.22, 1, 0.3, 1] }}>
            {section === 'work' && <WorkScreen selectedProject={selectedProject} setSelectedProject={setSelectedProject} onBack={() => navigate('home')} playCue={playCue} />}
            {section === 'career' && <CareerScreen selectedJob={selectedJob} setSelectedJob={setSelectedJob} onBack={() => navigate('home')} playCue={playCue} />}
            {section === 'toolkit' && <ToolkitScreen onBack={() => navigate('home')} />}
            {section === 'profile' && <ProfileScreen onBack={() => navigate('home')} />}
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="site-footer"><span className="footer-name">AJITH SURYA THATI</span><span className="footer-context">PORTFOLIO&nbsp; / &nbsp;{activeLabel.toUpperCase()}</span><div className="footer-links"><a href="https://linkedin.com/in/ajithsurya" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="https://github.com/AJtati" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub /></a><a href={`mailto:${contactEmail}`} aria-label="Email"><FaArrowUpRightFromSquare /></a></div></footer>
    </main>
  );
}

export default App;
