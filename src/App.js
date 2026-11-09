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
      'Designed a multi-environment EKS blueprint with modular Terraform and EC2 Launch Templates on Amazon Linux 2023.',
      'Configured GitOps application delivery with ArgoCD and Helm, including drift detection and health checks.',
      'Used AWS IRSA and External Secrets Operator for least-privilege pod access and automated secret synchronization.',
    ],
    mark: '01',
  },
  {
    name: 'Thatiflix Converter',
    type: 'DESKTOP · MACOS + WINDOWS',
    stack: 'Electron · Node.js · FFmpeg · Shell',
    summary: 'A local-first desktop utility for remuxing video without uploading large media files.',
    notes: [
      'Built a cross-platform desktop app bundling native FFmpeg binaries for macOS and Windows.',
      'Runs media processing locally with multi-threaded execution and visible progress tracking.',
      'Uses stream-copying to avoid cloud upload latency for heavy media files.',
    ],
    mark: '02',
  },
  {
    name: 'Shift Rota Tracker',
    type: 'LIVE WEB APP · NATIVE BUILDS CONFIGURED',
    stack: 'Next.js · TypeScript · Firebase · Capacitor',
    summary: 'A personal shift planner with weekly, monthly, and list views, account-based data, and reminders. The web app is live, with native build targets configured for mobile and Android TV.',
    notes: [
      'Added signup, login, password recovery, and per-user shift data with Firebase Authentication and Firestore.',
      'Built weekly, monthly calendar, and filtered list views, plus shift, leave, holiday, and day-off entries.',
      'Configured Capacitor targets for iOS and Android, including Android mobile and TV flavors with reminders.',
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
      'Created passport and visa presets, custom dimensions, high-resolution cropping, and print-ready photo sheets.',
      'Added multi-photo layouts, collage and frame tools, plus a resume builder.',
      'Includes additional Panchangam, horoscope, Muhurtham, and marriage matching tools; Android, iOS, and Electron build paths are configured.',
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
      'Imports PDF, plain-text, and LaTeX resumes into a reusable candidate profile and resume backbone.',
      'Scores job descriptions with deterministic evidence matching and separate eligibility, language, and location checks.',
      'Keeps optional AI rewrites constrained, and compiles application PDFs locally with LuaLaTeX or XeLaTeX.',
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
      'Built as a responsive React experience with animated transitions and a cursor-responsive illustrated portrait.',
      'Presents project stories, career history, skills, education, and the complete resume.',
      'Published on Firebase Hosting and GitHub Pages, with the source maintained on GitHub.',
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
      'Built learner pages for course discovery, enrolment, course playback, cohorts, and account access.',
      'Added learner achievements and downloadable certificates, with admin tools for managing courses and enrolment.',
      'Integrated Firebase services and Razorpay checkout with automatic learner access provisioning.',
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
      'Built product browsing with category filters, search, sorting, and individual product detail routes.',
      'Added a cart with quantity, stock, minimum-order, and subtotal checks.',
      'Designed the storefront around rakhi bundles for Middlesbrough and nearby areas, with complimentary gift handling.',
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
      'Built a public listing experience with property details, availability, and search entry points.',
      'Added authenticated admin workflows for properties, tenants, and previous-tenancy records.',
      'Uses Firebase Authentication, Firestore, Storage, and Cloud Functions for private administration and public listings.',
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
      'Built the Android interface with Jetpack Compose and Media3 playback components.',
      'Organizes a selected library into movies, web series, TV shows, kids, and custom categories.',
      'Includes account and cloud-source integrations, cached library state, and watch-progress handling.',
    ],
    mark: '10',
  },
  {
    name: 'Backup Harbor',
    type: 'DESKTOP APP · MACOS + WINDOWS',
    stack: 'Tauri · Rust · TypeScript · age encryption',
    summary: 'A desktop utility for finding protected files across Git repositories and creating encrypted, portable backups with recovery options.',
    notes: [
      'Scans selected repositories for ignored secret files and project-specific AI instructions, then lets the user review the selection.',
      'Creates separate passphrase-encrypted and recovery-key-encrypted archives and verifies file hashes during restore.',
      'Built with a native Tauri shell; macOS DMG and Windows MSI / NSIS installer workflows are configured.',
    ],
    mark: '11',
  },
];

const sections = [
  { id: 'work', label: 'Work', key: '01' },
  { id: 'career', label: 'Career', key: '02' },
  { id: 'toolkit', label: 'Toolkit', key: '03' },
  { id: 'profile', label: 'Profile', key: '04' },
];

const education = [
  { degree: 'Master of Science in Computer Science', university: 'Teesside University', period: 'Jan 2021 – Jan 2023' },
  { degree: 'Bachelor of Technology', university: 'Jawaharlal Nehru Technological University', period: '2012 – 2016' },
];
const contactEmail = 'ajithsuryathati@gmail.com';
const contactPhone = '+44 7469 475250';

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
        <h2>SENIOR PLATFORM &amp; DEVOPS ENGINEER</h2>
        <p>Cloud platforms, reliable delivery, useful software.</p>
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
      <ScreenHeading title="Work" onBack={onBack} />
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
            <div className="story-header"><span>FIELD NOTES&nbsp; / &nbsp;{project.mark}</span><span>{String(selectedProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span></div>
            <h2>{project.name}</h2>
            <p className="project-type-label">{project.type}</p>
            <p className="story-summary">{project.summary}</p>
            <div className="story-wave"><Waveform active={false} /></div>
            <div className="story-stack">{project.stack}</div>
            {project.links?.length > 0 && <nav className="story-links" aria-label={`${project.name} links`}>
              {project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<FaArrowUpRightFromSquare aria-hidden="true" /></a>)}
            </nav>}
            <h3>What went into it</h3>
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
      <p className="toolkit-intro">A practical set of tools for designing, shipping, and operating production platforms.</p>
      <div className="toolkit-list">{skillGroups.map(([name, skills], index) => <article className="toolkit-row" key={name}><span>{String(index + 1).padStart(2, '0')}</span><h2>{name}</h2><p>{skills}</p><span className="toolkit-frequency" aria-hidden="true"><i /><i /><i /><i /><i /></span></article>)}</div>
    </section>
  );
}

function ProfileScreen({ onBack }) {
  return (
    <section className="content-screen profile-screen" aria-label="Profile and education">
      <ScreenHeading title="About Ajith" onBack={onBack} />
      <div className="profile-layout">
        <div className="profile-statement"><p>{summary}</p><a href={`mailto:${contactEmail}`}>Start a conversation <FaArrowUpRightFromSquare /></a></div>
        <div className="education-record"><span>EDUCATION</span>{education.map((degree, index) => <article key={degree.degree}><small>0{index + 1}</small><div><h2>{degree.degree}</h2><p>{degree.university}</p><time>{degree.period}</time></div></article>)}</div>
        <div className="profile-links"><a href="tel:+447469475250">{contactPhone}</a><a href={`mailto:${contactEmail}`}>{contactEmail} <FaArrowUpRightFromSquare /></a><a href="https://linkedin.com/in/ajithsurya" target="_blank" rel="noreferrer">LinkedIn <FaLinkedinIn /></a><a href="https://github.com/AJtati" target="_blank" rel="noreferrer">GitHub Profile <FaGithub /></a></div>
      </div>
    </section>
  );
}

function App() {
  const [section, setSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedJob, setSelectedJob] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const activeAudioRef = useRef(null);
  const screenRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const playCue = useCallback((kind = 'navigate', force = false) => {
    if (!force && !soundEnabled) return;
    try {
      // HTML media playback is requested synchronously in the trusted click,
      // which is more dependable on iOS Safari than scheduling Web Audio nodes.
      activeAudioRef.current?.pause();
      const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/interface-click.wav`);
      audio.preload = 'auto';
      audio.volume = kind === 'select' ? 0.72 : 0.88;
      activeAudioRef.current = audio;
      const playback = audio.play();
      if (playback && typeof playback.catch === 'function') playback.catch(() => {});
    } catch { /* Keep navigation responsive when media playback is unavailable. */ }
  }, [soundEnabled]);

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
          <button className={`sound-toggle ${soundEnabled ? 'is-on' : ''}`} type="button" onClick={toggleSound} aria-pressed={soundEnabled} aria-label={soundEnabled ? 'Turn sound effects off' : 'Turn sound effects on'}>
            {soundEnabled ? <FaVolumeHigh aria-hidden="true" /> : <FaVolumeXmark aria-hidden="true" />}
            <span>SOUND {soundEnabled ? 'ON' : 'OFF'}</span>
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
