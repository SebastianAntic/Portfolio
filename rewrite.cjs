const fs = require('fs');
const path = require('path');

const appJsxContent = `import React, { useState } from 'react';
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
        const strokeOp = theme === 'dark' ? (0.01 + Math.abs(offset) * 0.015) : (0.01 + Math.abs(offset) * 0.01);
        const strokeColor = theme === 'dark' ? \`rgba(255,255,255,\${strokeOp})\` : \`rgba(0,0,0,\${strokeOp})\`;
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
            d={\`M-100,\${yStart} C\${cp1x_1},\${cp1y_1} \${cp2x_1},\${cp2y_1} 1100,\${yEnd}\`}
          >
            <animate
              attributeName="d"
              dur={\`\${15 + Math.abs(offset) * 0.4 + (i%5)}s\`}
              repeatCount="indefinite"
              values={\`
                M-100,\${yStart} C\${cp1x_1},\${cp1y_1} \${cp2x_1},\${cp2y_1} 1100,\${yEnd};
                M-100,\${yStart} C\${cp1x_2},\${cp1y_2} \${cp2x_2},\${cp2y_2} 1100,\${yEnd};
                M-100,\${yStart} C\${cp1x_3},\${cp1y_3} \${cp2x_3},\${cp2y_3} 1100,\${yEnd};
                M-100,\${yStart} C\${cp1x_4},\${cp1y_4} \${cp2x_4},\${cp2y_4} 1100,\${yEnd};
                M-100,\${yStart} C\${cp1x_1},\${cp1y_1} \${cp2x_1},\${cp2y_1} 1100,\${yEnd}
              \`}
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

function App() {
  const [theme, setTheme] = useState('dark');

  const isDark = theme === 'dark';
  const bgColor = isDark ? '#000' : '#f8f9fa';
  const fgColor = isDark ? '#fff' : '#111';
  const hoverColor = isDark ? '#fff' : '#000';
  const mutedColor = isDark ? '#a1a1aa' : '#52525b';
  const themeClass = isDark ? 'dark-theme' : 'light-theme';

  return (
    <div className={themeClass} style={{ 
      minHeight: '100vh', 
      backgroundColor: bgColor, 
      color: fgColor, 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      position: 'relative', 
      zIndex: 1,
      transition: 'background-color 0.5s ease, color 0.5s ease'
    }}>
      
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
        {isDark ? <MoonIcon /> : <SunIcon />}
      </button>

      {/* Sections Container */}
      <div className="section-container">
        
        {/* Hero Section */}
        <section style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className="hero-title">
            SEBASTIAN ANTIC
          </h1>
        </section>

        {/* About Section */}
        <section id="about" className="glass-panel">
          <p className="about-text" style={{ color: fgColor, fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '4rem', maxWidth: '800px', fontWeight: 500 }}>
            My educational journey at St. Joseph's University builds core competencies in web page scripting and programming. Alongside volunteering for the National Service Scheme, I am developing a balanced perspective on technology and community impact, setting the stage for a future in web development and business analysis.
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

            {/* Column 3: SKILLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.2rem', color: fgColor, fontWeight: 600, margin: '0 0 0.5rem 0' }}>Skills</h3>
              
              <div className="glass-box" style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>01</span>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Core Competencies</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Teamwork, Communication, Problem Solving, Analytical Skills, Leadership, Time Management, Research Skills.</p>
              </div>

              <div className="glass-box" style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>02</span>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Design & Web Dev</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Front-End Dev, Web Design, HTML5, CSS, JavaScript, React.js, WordPress.</p>
              </div>

              <div className="glass-box" style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>03</span>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Backend & DB</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Databases, MongoDB, NoSQL, SQL, Java, Python, C++, C#.</p>
              </div>

              <div className="glass-box" style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>04</span>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Tech & Networks</h4>
                <p style={{ fontSize: '0.95rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>AI, ML, TensorFlow, Cellular Comms, Networking, Cybersecurity.</p>
              </div>
            </div>

            {/* Column 4: CERTIFICATIONS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.2rem', color: fgColor, fontWeight: 600, margin: '0 0 0.5rem 0' }}>Certifications</h3>
              
              <div className="glass-box cert-list">
                {[
                  { title: "Talent Acquisition", issuer: "NPTEL", date: "May 2026" },
                  { title: "MongoDB with Java", issuer: "MongoDB", date: "Sep 2025" },
                  { title: "Advanced Wordpress", issuer: "Udemy", date: "Jun 2023" },
                  { title: "Python From Scratch", issuer: "Udemy", date: "Sep 2023" },
                  { title: "Cybersecurity Awareness", issuer: "Infosys", date: "Sep 2025" },
                  { title: "AI/ML Fundamentals", issuer: "Infosys", date: "Nov 2023" },
                  { title: "AWS Cloud 101", issuer: "AWS", date: "Sep 2025" }
                ].map((cert, i) => (
                  <div key={i} className="cert-item" style={{ borderBottom: i === 6 ? 'none' : \`1px solid \${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}\` }}>
                    <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem', color: fgColor, fontWeight: 600 }}>{cert.title}</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: mutedColor }}>
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="glass-panel">
          <h2 className="section-title" style={{ color: fgColor }}>Projects</h2>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 600, color: fgColor, display: 'flex', alignItems: 'center' }}>SERVICES:</span>
            {['Web Design', 'Graphic Design', 'Web Development', 'Business Analysis'].map((service, i) => (
              <a 
                key={i} 
                href={\`mailto:sebastianantic10@gmail.com?subject=Inquiry%20regarding%20\${encodeURIComponent(service)}\`}
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
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; e.currentTarget.style.boxShadow = \`inset 0 0 0 1px \${fgColor}\`; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {service}
              </a>
            ))}
          </div>

          <div className="projects-grid">
            
            <div className="glass-box" style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', top: '2rem', right: '2rem', color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em' }}>DEC 2025 – APR 2026</span>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: fgColor }}>Centralized Internal Assesment Webapp</h3>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1rem' }}>Associated with St. Joseph's University</p>
              <p style={{ color: fgColor, fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem', maxWidth: '800px' }}>
                A centralized internal assessment web app with integration of AI.
              </p>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1.5rem' }}><strong>Skills:</strong> React.js, Artificial Intelligence (AI), +9 skills</p>
              <div>
                <a href="https://github.com/joeljaisonsebastian-dev/cia.git" target="_blank" rel="noreferrer" style={{ 
                  display: 'inline-block', padding: '0.8rem 1.5rem', border: \`1px solid \${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}\`, color: fgColor, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '100px', transition: 'all 0.3s ease' 
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = fgColor; e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; }}>View on GitHub</a>
              </div>
            </div>

            <div className="glass-box" style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', top: '2rem', right: '2rem', color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em' }}>AUG 2025</span>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: fgColor }}>Leap year Calculator</h3>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1rem' }}>Associated with St. Joseph's University</p>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1.5rem' }}><strong>Skills:</strong> HTML, HTML5, +5 skills</p>
              <div>
                <a href="https://github.com/SebastianAntic/HTML-CSS/blob/main/Leap%20Year%20Calculator%20-%20Regular" target="_blank" rel="noreferrer" style={{ 
                  display: 'inline-block', padding: '0.8rem 1.5rem', border: \`1px solid \${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}\`, color: fgColor, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '100px', transition: 'all 0.3s ease' 
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = fgColor; e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; }}>View on GitHub</a>
              </div>
            </div>

            <div className="glass-box" style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', top: '2rem', right: '2rem', color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em' }}>FEB 2024 – MAY 2024</span>
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
            border: \`1px solid \${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}\`, 
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
          marginLeft: '-10vw',
          marginTop: '10vh',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          paddingBottom: '0'
        }}>
          <h1 style={{
            fontSize: '13vw',
            fontWeight: 900,
            margin: 0,
            lineHeight: 0.8,
            letterSpacing: '-0.05em',
            textTransform: 'uppercase',
            color: '#fff',
            mixBlendMode: 'difference',
            whiteSpace: 'nowrap',
            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          }}>
            SEBASTIAN ANTIC
          </h1>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-container">

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
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsxContent);

const appCssContent = \`.section-container {
  display: flex;
  flex-direction: column;
  gap: 15vh;
  padding: 0 10vw;
  margin-top: 15vh;
}

/* Base Glass Effect */
.glass-panel, .glass-box, .nav-container {
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  backdrop-filter: blur(40px) saturate(200%);
  transition: background 0.5s ease, border 0.5s ease, box-shadow 0.5s ease, transform 0.3s ease;
}

/* Dark Mode Glass */
.dark-theme .glass-panel, .dark-theme .glass-box, .dark-theme .nav-container {
  background: rgba(30, 30, 30, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.05);
}

/* Light Mode Glass */
.light-theme .glass-panel, .light-theme .glass-box, .light-theme .nav-container {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 1);
}

.glass-panel {
  padding: 4rem;
  border-radius: 32px;
}

.glass-box {
  padding: 2rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}

.glass-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.light-theme .glass-box:hover {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.nav-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 2rem;
  padding: 1rem 3rem;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 3rem;
}

.nav-link-item {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease;
}

.theme-toggle-btn {
  position: fixed;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;
  top: 2rem;
  right: 3rem;
  border-radius: 50%;
}
.theme-toggle-btn:hover {
  transform: scale(1.1);
}

.dark-theme .theme-toggle-btn {
  color: #fff;
}
.light-theme .theme-toggle-btn {
  color: #111;
}

/* Typography & Layout */
.hero-title {
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 900;
  margin: 0;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
}
.dark-theme .hero-title { text-shadow: none; color: #fff; }
.light-theme .hero-title { text-shadow: 0 4px 24px rgba(0,0,0,0.05); color: #111; }

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.resume-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cert-item {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.footer-container {
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: relative;
}

/* Tablet optimizations */
@media (max-width: 1024px) {
  .section-container {
    padding: 0 6vw;
  }
  .glass-panel {
    padding: 3rem;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .section-container {
    padding: 0 5vw;
    gap: 6vh;
    margin-top: 12vh;
  }
  
  .glass-panel {
    padding: 1.5rem;
    border-radius: 24px;
  }
  
  .glass-box {
    padding: 1.5rem;
    border-radius: 20px;
  }

  .nav-container {
    padding: 0.8rem 1.5rem;
    top: 1rem;
    width: 90%;
    max-width: 400px;
  }

  .nav-links {
    gap: 1.2rem;
    justify-content: space-between;
    width: 100%;
  }

  .nav-link-item {
    font-size: 0.7rem;
  }

  .theme-toggle-btn {
    top: auto;
    bottom: 2rem;
    right: 2rem;
    background: inherit;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    -webkit-backdrop-filter: blur(40px) saturate(200%);
    backdrop-filter: blur(40px) saturate(200%);
  }

  .dark-theme .theme-toggle-btn {
    background: rgba(30,30,30,0.6);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .light-theme .theme-toggle-btn {
    background: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.8);
  }

  .resume-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .projects-grid {
    gap: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .about-text {
    font-size: 1rem !important;
    margin-bottom: 2rem !important;
  }
  
  .footer-container {
    padding: 2rem 1rem;
  }
}\`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.css'), appCssContent);

console.log("Rewrite complete.");
