import React, { useState } from 'react';
import './App.css';

const MovingVectorBackground = ({ theme }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: 'hidden',
    opacity: 1,
    pointerEvents: 'none'
  }}>
    <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      {[...Array(60)].map((_, i) => {
        const offset = i - 30;
        const strokeOp = theme === 'dark' ? (0.01 + Math.abs(offset) * 0.015) : (0.02 + Math.abs(offset) * 0.02);
        const strokeColor = theme === 'dark' ? `rgba(255,255,255,${strokeOp})` : `rgba(0,0,0,${strokeOp})`;
        const strokeW = 1 + Math.random();

        const yStart = 500 + offset * 15 + Math.sin(i) * 50;
        const yEnd = 500 - offset * 15 + Math.cos(i) * 50;
        
        const cp1x_1 = 200 + offset * 15;
        const cp1y_1 = 200 - offset * 30 + Math.sin(i) * 100;
        const cp2x_1 = 800 - offset * 15;
        const cp2y_1 = 800 + offset * 30 - Math.cos(i) * 100;
        
        const cp1x_2 = 300 - offset * 20;
        const cp1y_2 = 800 + offset * 20 + Math.sin(i*1.5) * 100;
        const cp2x_2 = 700 + offset * 20;
        const cp2y_2 = 200 - offset * 20 - Math.cos(i*1.5) * 100;

        const cp1x_3 = 400 + offset * 10;
        const cp1y_3 = 400 + Math.sin(i*2) * 150;
        const cp2x_3 = 600 - offset * 10;
        const cp2y_3 = 600 - Math.cos(i*2) * 150;

        const cp1x_4 = 100 - offset * 5;
        const cp1y_4 = 600 - offset * 40;
        const cp2x_4 = 900 + offset * 5;
        const cp2y_4 = 400 + offset * 40;

        return (
          <path
            key={i}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeW}
            d={`M-100,${yStart} C${cp1x_1},${cp1y_1} ${cp2x_1},${cp2y_1} 1100,${yEnd}`}
          >
            <animate
              attributeName="d"
              dur={`${15 + Math.abs(offset) * 0.4 + (i%5)}s`}
              repeatCount="indefinite"
              values={`
                M-100,${yStart} C${cp1x_1},${cp1y_1} ${cp2x_1},${cp2y_1} 1100,${yEnd};
                M-100,${yStart} C${cp1x_2},${cp1y_2} ${cp2x_2},${cp2y_2} 1100,${yEnd};
                M-100,${yStart} C${cp1x_3},${cp1y_3} ${cp2x_3},${cp2y_3} 1100,${yEnd};
                M-100,${yStart} C${cp1x_4},${cp1y_4} ${cp2x_4},${cp2y_4} 1100,${yEnd};
                M-100,${yStart} C${cp1x_1},${cp1y_1} ${cp2x_1},${cp2y_1} 1100,${yEnd}
              `}
            />
          </path>
        );
      })}
    </svg>
  </div>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const certificationsList = [
  { title: "Talent Acquisition and Management", issuer: "NPTEL", date: "May 2026", id: "NOC26MG60S55020290504877565" },
  { title: "Using MongoDB with Java", issuer: "MongoDB", date: "Sep 2025", id: "MDBxbtzesxbmj" },
  { title: "Introduction to MongoDB (For Students)", issuer: "MongoDB", date: "Jan 2026", id: "MDBz1nalhgnty" },
  { title: "Connecting to MongoDB in Java", issuer: "MongoDB", date: "Sep 2025", id: "MDBe6t1apqgwf" },
  { title: "MongoDB CRUD Operations in Java", issuer: "MongoDB", date: "Sep 2025", id: "MDBblfq095nua" },
  { title: "MongoDB Aggregation with Java", issuer: "MongoDB", date: "Sep 2025", id: "MDBmd5hzebujh" },
  { title: "Getting Started with MongoDB Atlas", issuer: "MongoDB", date: "Jan 2026", id: "MDBd5efdrnrg2" },
  { title: "MongoDB and the Document Model", issuer: "MongoDB", date: "Jan 2026", id: "MDBcqelsj4ae2" },
  { title: "MongoDB CRUD Operations: Insert and Find Documents", issuer: "MongoDB", date: "Jan 2026", id: "MDBgm44izc9c2" },
  { title: "MongoDB CRUD Operations: Replace and Delete Documents", issuer: "MongoDB", date: "Jan 2026", id: "MDBgp2bvnj461" },
  { title: "MongoDB Aggregation", issuer: "MongoDB", date: "Jan 2026", id: "MDBclygnflb9u" },
  { title: "MongoDB CRUD Operations: Modifying Query Results", issuer: "MongoDB", date: "Jan 2026", id: "MDBllr5t3d9qx" },
  { title: "MongoDB Indexes", issuer: "MongoDB", date: "Jan 2026", id: "MDBo5o8842zuh" },
  { title: "MongoDB Atlas Search", issuer: "MongoDB", date: "Jan 2026", id: "MDBc92assqyht" },
  { title: "MongoDB Data Modeling Intro", issuer: "MongoDB", date: "Jan 2026", id: "MDBg3ktq24812" },
  { title: "MongoDB Transactions", issuer: "MongoDB", date: "Jan 2026", id: "MDBj7cc3v6ic9" },
  { title: "Advanced Wordpress Course for Professionals", issuer: "Udemy", date: "Jun 2023", id: "UC-347ea9a8-204e-4de9-bade-5d60f73a9414" },
  { title: "Learn Python From Scratch", issuer: "Udemy", date: "Sep 2023", id: "UC-e69ca49b-aeb3-4dOd-af02-219aa4b5f877" },
  { title: "Cybersecurity Awareness: Exposure to Security Risks", issuer: "Infosys Springboard", date: "Sep 2025" },
  { title: "Computer Virus - Definition, Types, Spread and Prevention", issuer: "Udemy", date: "Jun 2023", id: "UC-8ce22ec9-2310-437e-97c9-337ceafbaced" },
  { title: "The Ultimate Sleep Course | Sleep good & Cure Insomnia", issuer: "Udemy", date: "Jun 2023", id: "UC-a3d0a768-b8c9-4f5a-bc5e-26b09439009a" },
  { title: "Cybersecurity Awareness: Key Security Terms & Concepts", issuer: "Infosys Springboard", date: "Sep 2025" },
  { title: "Identity and Access Management IAM", issuer: "Infosys Springboard", date: "Aug 2025" },
  { title: "Artificial Intelligence and Machine Learning Fundamentals", issuer: "Infosys Springboard", date: "Nov 2023" },
  { title: "Fundamentals of Information Security", issuer: "Infosys Springboard", date: "Oct 2024" },
  { title: "Viksit Bharat Young Leaders Dialogue (VBYLD) 2026", issuer: "Mera Yuva Bharat - MY Bharat", date: "Sep 2025" },
  { title: "Hands-on Artificial Intelligence with TensorFlow", issuer: "Infosys Springboard", date: "Nov 2023" },
  { title: "Build Your Best Cold Email Strategy!", issuer: "Udemy", date: "Jun 2023", id: "UC-eab1d866-01ef-468a-aacf-bda13c6b13e4" },
  { title: "Candidate Experience in Industry 4.0", issuer: "Udemy", date: "Jul 2023", id: "UC-8317a428-fb3e-4da4-85d3-4f115a5b92ad" },
  { title: "AWS Educate Getting Started with Databases", issuer: "Amazon Web Services (AWS)", date: "Sep 2025", id: "113af942-0987-4fb4-a374-da703b30d0df" },
  { title: "AWS Educate Machine Learning Foundations", issuer: "Amazon Web Services (AWS)", date: "Sep 2025", id: "8703168a-34a1-4536-9630-bc1d7a8e0aa7" },
  { title: "AWS Educate Getting Started with Cloud Ops", issuer: "Amazon Web Services (AWS)", date: "Sep 2025", id: "738da8c6-409f-46aa-8de9-d7c5ae43e89f" },
  { title: "AWS Educate Getting Started with Serverless", issuer: "Amazon Web Services (AWS)", date: "Sep 2025", id: "4619-ecbe-463e-a48c-e560d584709c" },
  { title: "AWS Educate Getting Started with Compute", issuer: "Amazon Web Services (AWS)", date: "Sep 2025", id: "c8f74b98-d39c-4633-b0a6-ed3d76526309" },
  { title: "AWS Educate Getting Started with Security", issuer: "Amazon Web Services (AWS)", date: "Sep 2025", id: "61-d73e-487f-8af0-dbaa28b2bfe5" },
  { title: "AWS Educate Getting Started with Networking", issuer: "Amazon Web Services (AWS)", date: "Sep 2025", id: "245a33fe-1ffd-4d1c-8cb5-819ef91b1920" },
  { title: "AWS Educate Getting Started with Storage", issuer: "Amazon Web Services (AWS)", date: "Sep 2025", id: "92cb7dff-db6e-4a49-a92c-ac5f290afb18" },
  { title: "AWS Educate Introduction to Cloud 101", issuer: "Amazon Web Services (AWS)", date: "Aug 2025", id: "392a0fba-e097-403c-ba0e-a7b3b06f6314" },
  { title: "AWS Academy Graduate - AWS Academy Cloud Foundations", issuer: "Amazon Web Services (AWS)", date: "Aug 2025", id: "34c83bc6-caff-406e-888f-a8ac85b72565" },
  { title: "Getting Started with Microsoft Excel", issuer: "Coursera Project Network", date: "Jun 2025", id: "G856B3QGUPLX" }
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skillsList = [
    { id: '01', title: 'Core Competencies', desc: 'Teamwork, Communication, Problem Solving, Analytical Skills, Leadership, Time Management, Research Skills.' },
    { id: '02', title: 'Design & Web Dev', desc: 'Front-End Dev, Web Design, HTML5, CSS, JavaScript, React.js, WordPress.' },
    { id: '03', title: 'Backend & DB', desc: 'Databases, MongoDB, NoSQL, SQL, Java, Python, C++, C#.' },
    { id: '04', title: 'Tech & Networks', desc: 'AI, ML, TensorFlow, Cellular Comms, Networking, Cybersecurity.' }
  ];

  const isDark = theme === 'dark';
  const bgColor = isDark ? '#000' : '#f2f2f7';
  const fgColor = isDark ? '#fff' : '#111';
  const hoverColor = isDark ? '#fff' : '#000';
  const mutedColor = isDark ? '#a1a1aa' : '#52525b';
  const themeClass = isDark ? 'dark-theme' : 'light-theme';

  return (
    <div className={themeClass} style={{ 
      minHeight: '100vh', 
      width: '100%',
      overflowX: 'hidden',
      backgroundColor: bgColor, 
      color: fgColor, 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      position: 'relative', 
      zIndex: 1,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      
      {/* Viewport Edge Fades */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '10vh', minHeight: '60px', zIndex: 50, pointerEvents: 'none',
        background: isDark ? 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0))' : 'linear-gradient(to bottom, rgba(242,242,247,0.9), rgba(242,242,247,0))'
      }}></div>
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: '10vh', minHeight: '60px', zIndex: 50, pointerEvents: 'none',
        background: isDark ? 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))' : 'linear-gradient(to top, rgba(242,242,247,0.9), rgba(242,242,247,0))'
      }}></div>
      
      <MovingVectorBackground theme={theme} />

      {/* Floating Top Navbar */}
      <nav className="nav-container">
        <div className="nav-links">
          {[
            { name: 'About', id: '#about' },
            { name: 'Projects', id: '#projects' },
            { name: 'Contact', id: '#contact' }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.id} 
              className="nav-link-item"
              style={{ color: mutedColor }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseOver={(e) => e.target.style.color = hoverColor}
              onMouseOut={(e) => e.target.style.color = mutedColor}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Standalone Theme Toggle Button */}
      <button className="theme-toggle-btn" 
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* Sections Container */}
      <div className="section-container">
        
        {/* Hero Section */}
        <section style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className="hero-title">
            SEBASTIAN ANTIC
          </h1>
        </section>

        <section className="marquee-section" style={{ height: 'auto', padding: '3rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {[
            {
              items: ["WEB DEVELOPER", "BUSINESS ANALYST", "SALES EXECUTIVE", "TECH ENTHUSIAST", "AI & ML EXPLORER", "CYBERSECURITY ADVOCATE", "COOK"],
              reverse: false
            },
            {
              items: ["JAVA", "PYTHON", "HTML", "C", "C++", "C#", "CSS", "JAVASCRIPT", "REACT.JS", "MONGODB", "TENSORFLOW"],
              reverse: true
            },
            {
              items: ["TEAMWORK", "PROBLEM SOLVER", "PROBLEM SOLVING", "ANALYTICAL SKILLS", "LEADERSHIP", "TIME MANAGEMENT", "RESEARCH SKILLS", "COMMUNICATION", "ADAPTABILITY", "CRITICAL THINKING"],
              reverse: false
            }
          ].map((marquee, idx) => (
            <div className="marquee-container" key={idx}>
              <div className="marquee-track">
                <div className={`marquee-content outline-text ${marquee.reverse ? 'reverse' : ''}`}>
                  {Array(4).fill(marquee.items).flat().map((item, i) => (
                    <React.Fragment key={i}>
                      <span>{item}</span>
                      <span> • </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* About Section */}
        <section id="about" className="glass-panel">
          <h2 className="section-title" style={{ color: fgColor }}>ME</h2>
          <center>
            <img src="src/me.jpeg" alt="Profile Image" width="200px" style={{ borderRadius: '50%' }} />
          </center>
          <p className="about-text" style={{ color: fgColor, fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '4rem', maxWidth: '800px', fontWeight: 200 }}>
            I am a highly motivated software developer and technology enthusiast currently pursuing a Bachelor of Computer Applications (BCA) at St. Joseph's University in Bengaluru. With a strong foundation in mobile and web application development, I specialize in building intuitive, efficient, and scalable digital solutions. My technical expertise spans Java, XML, Flutter, and Dart, complemented by practical experience in database management and backend integration using Firebase and MongoDB.<br></br>
            Currently, I am spearheading the development of a Centralized Internal Assessment (CIA) application designed to streamline academic evaluations for both educators and students. This project underscores my ability to manage a software development lifecycle from initial conceptualization—including ER diagram mapping and Gantt chart scheduling—through to deployment. To stay at the forefront of the industry, I continuously expand my technical repertoire through rigorous coursework in Cloud Computing, Computer Networks, and E-Business, alongside specialized training in React and CRUD operations.
            <br></br>
            <br></br>
            Beyond my technical pursuits, I bring eight months of professional experience in the finance sector as a sales executive. This background equips me with a unique, cross-functional perspective that bridges the gap between technical execution and business operations. It has fundamentally shaped my approach to software development, ensuring that the applications I build are not only technically sound but also aligned with broader business objectives and user needs.
            <br></br>
            I am driven by a continuous desire to learn and adapt within a fast-paced technological landscape. Whether optimizing application performance, developing cross-platform mobile solutions, or contributing to a Digital Center of Excellence, I am dedicated to delivering robust, user-centric software that drives measurable impact.
          </p>
          
          <div className="resume-grid">
            
            {/* Column 1: EXPERIENCE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.2rem', color: fgColor, fontWeight: 600, margin: '0 0 0.5rem 0' }}>Experience</h3>
              
              <div className="glass-box">
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>MAY 2026 - NOW • NETNEX GLOBAL</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Delegate Sales Executive</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Connecting industry leaders to flagship events through business analysis and sales.</p>
              </div>

              <div className="glass-box">
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>MAY 2025 - JUN 2025 • WROGN</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Sales Intern</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Gained insights into the apparel industry, focusing on market dynamics, communication, and teamwork.</p>
              </div>
            </div>

            {/* Column 2: EDUCATION */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.2rem', color: fgColor, fontWeight: 600, margin: '0 0 0.5rem 0' }}>Education</h3>
              
              <div className="glass-box">
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>AUG 2022 – APR 2026</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>St. Joseph's University</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>BCA, Web Page, Digital/Multimedia and Info Resources Design</p>
              </div>

              <div className="glass-box">
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>2020 – 2022</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>St. Joseph's Indian Composite PU College</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Commerce (CEBA), Computer Science</p>
              </div>

              <div className="glass-box">
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>2010 – 2020</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Fusco's School - India</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>10th Standard, ICSE</p>
              </div>
            </div>



          </div>

          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.2rem', color: fgColor, fontWeight: 600, margin: '0 0 1.5rem 0' }}>Skills</h3>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '1.5rem', 
              position: 'relative',
              WebkitMaskImage: (!showAllSkills && skillsList.length > 2) ? 'linear-gradient(to bottom, black 60%, transparent 100%)' : 'none',
              maskImage: (!showAllSkills && skillsList.length > 2) ? 'linear-gradient(to bottom, black 60%, transparent 100%)' : 'none',
              paddingBottom: (!showAllSkills && skillsList.length > 2) ? '1rem' : '0'
            }}>
              {skillsList.slice(0, showAllSkills ? skillsList.length : 2).map((skill, i) => (
                <div key={i} className="glass-box" style={{ flex: '1 1 calc(50% - 0.75rem)', minWidth: '280px', padding: '1.5rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>{skill.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0, marginTop: '1rem' }}>{skill.desc}</p>
                </div>
              ))}
            </div>
            {skillsList.length > 2 && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button 
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: mutedColor,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = fgColor}
                  onMouseOut={(e) => e.currentTarget.style.color = mutedColor}
                  aria-label={showAllSkills ? "Show less" : "Show more"}
                >
                  {showAllSkills ? "Show Less" : "Show More"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showAllSkills ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.2rem', color: fgColor, fontWeight: 600, margin: '0 0 1.5rem 0' }}>Licenses & Certifications</h3>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '1.5rem', 
              position: 'relative',
              WebkitMaskImage: (!showAllCerts && certificationsList.length > 4) ? 'linear-gradient(to bottom, black 60%, transparent 100%)' : 'none',
              maskImage: (!showAllCerts && certificationsList.length > 4) ? 'linear-gradient(to bottom, black 60%, transparent 100%)' : 'none',
              paddingBottom: (!showAllCerts && certificationsList.length > 4) ? '1rem' : '0'
            }}>
              {certificationsList.slice(0, showAllCerts ? certificationsList.length : 4).map((cert, i) => (
                <div key={i} className="glass-box" style={{ flex: '1 1 calc(50% - 0.75rem)', minWidth: '280px', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: fgColor, fontWeight: 600 }}>{cert.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: mutedColor, fontWeight: 500 }}>{cert.issuer}</p>
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: mutedColor }}>Issued {cert.date}</p>
                    {cert.id && <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.7rem', color: mutedColor, opacity: 0.7 }}>ID: {cert.id}</p>}
                  </div>
                </div>
              ))}
            </div>
            {certificationsList.length > 4 && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button 
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: mutedColor,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = fgColor}
                  onMouseOut={(e) => e.currentTarget.style.color = mutedColor}
                  aria-label={showAllCerts ? "Show less" : "Show more"}
                >
                  {showAllCerts ? "Show Less" : "Show More"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showAllCerts ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="glass-panel">
          <h2 className="section-title" style={{ color: fgColor }}>Projects</h2>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '1rem', fontWeight: 600, color: fgColor, display: 'flex', alignItems: 'center' }}>SERVICES:</span>
            {['Web Design', 'Graphic Design', 'Web Development', 'Business Analysis'].map((service, i) => (
              <a 
                key={i} 
                href={`mailto:sebastianantic10@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(service)}`}
                style={{ 
                  padding: '0.5rem 1.2rem', 
                  borderRadius: '100px', 
                  fontSize: '0.85rem',
                  color: bgColor,
                  backgroundColor: fgColor,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${fgColor}`; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {service}
              </a>
            ))}
          </div>

          <div className="projects-grid">
            
            <div className="glass-box">
              <span className="project-date" style={{ color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block', fontWeight: 600 }}>DEC 2025 – APR 2026</span>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: fgColor }}>Centralized Internal Assesment Webapp</h3>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1rem' }}>Associated with St. Joseph's University</p>
              <p style={{ color: fgColor, fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem', maxWidth: '800px' }}>
                A centralized internal assessment web app with integration of AI.
              </p>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1.5rem' }}><strong>Skills:</strong> React.js, Artificial Intelligence (AI), +9 skills</p>
              <div>
                <a href="https://github.com/joeljaisonsebastian-dev/cia.git" target="_blank" rel="noreferrer" style={{ 
                  display: 'inline-block', padding: '0.8rem 1.5rem', border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`, color: fgColor, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '100px', transition: 'all 0.3s ease' 
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = fgColor; e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; }}>View on GitHub</a>
              </div>
            </div>

            <div className="glass-box">
              <span className="project-date" style={{ color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block', fontWeight: 600 }}>AUG 2025</span>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: fgColor }}>Leap year Calculator</h3>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1rem' }}>Associated with St. Joseph's University</p>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1.5rem' }}><strong>Skills:</strong> HTML, HTML5, +5 skills</p>
              <div>
                <a href="https://github.com/SebastianAntic/HTML-CSS/blob/main/Leap%20Year%20Calculator%20-%20Regular" target="_blank" rel="noreferrer" style={{ 
                  display: 'inline-block', padding: '0.8rem 1.5rem', border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`, color: fgColor, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '100px', transition: 'all 0.3s ease' 
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = fgColor; e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; }}>View on GitHub</a>
              </div>
            </div>

            <div className="glass-box">
              <span className="project-date" style={{ color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block', fontWeight: 600 }}>FEB 2024 – MAY 2024</span>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: fgColor }}>Introduction to 6G Technologies</h3>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1rem' }}>Associated with St. Joseph's University</p>
              <p style={{ color: fgColor, fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem', maxWidth: '800px' }}>
                A term paper providing a comprehensive overview and in-depth analysis of the evolution of cellular networks, from 1G to 6G technology. Details the history, key features, and underlying network architecture. 
              </p>
              <p style={{ color: fgColor, fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem', maxWidth: '800px' }}>
                Explores potential innovations such as Terahertz (THz) spectrum utilization, AI/ML integration, massive MIMO, holographic beamforming, and intelligent reflecting surfaces (IRS) for applications like immersive AR/VR, telemedicine, and smart cities.
              </p>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '0' }}><strong>Skills:</strong> Cellular Communications, Networking, +2 skills</p>
            </div>
            
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="glass-panel" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h2 className="section-title" style={{ color: fgColor }}>Get in Touch</h2>
          <p style={{ fontSize: '1.2rem', color: fgColor, lineHeight: 1.6, maxWidth: '600px', marginBottom: '3rem' }}>
            I am currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:sebastianantic10@gmail.com" style={{ 
            display: 'inline-block', 
            padding: '1rem 2.5rem', 
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`, 
            color: fgColor, 
            textDecoration: 'none', 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            borderRadius: '100px',
            transition: 'all 0.3s ease' 
          }} onMouseOver={(e) => { e.currentTarget.style.borderColor = fgColor; e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; }}>Say Hello</a>
        </section>

        {/* Giant Name Footer */}
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginTop: '10vh',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          paddingBottom: '0'
        }}>
          <h1 style={{
            fontSize: '11vw',
            fontWeight: 900,
            margin: 0,
            lineHeight: 0.8,
            letterSpacing: '-0.05em',
            textTransform: 'uppercase',
            color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.2)',
            whiteSpace: 'nowrap',
            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          }}>
            SEBASTIAN ANTIC
          </h1>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-container" style={{ flexDirection: 'column', gap: '1.5rem', padding: '4rem 1rem' }}>
        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/sebastianantic/' },
            { icon: <GithubIcon />, url: 'https://github.com/SebastianAntic' },
            { icon: <InstagramIcon />, url: 'https://www.instagram.com/_thecanvass' }
          ].map((social, i) => (
            <a 
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: mutedColor,
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = hoverColor;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = mutedColor;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;