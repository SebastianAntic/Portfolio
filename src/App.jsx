import React, { useState } from 'react';

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
      {[...Array(20)].map((_, i) => (
        <path
          key={i}
          fill="none"
          stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth="1.5"
          d={`M0,${300 + i * 20} C300,${200 + i * 30} 700,${600 + i * 15} 1000,${300 + i * 20}`}
        >
          <animate
            attributeName="d"
            dur={`${12 + i * 0.5}s`}
            repeatCount="indefinite"
            values={`
              M0,${300 + i * 20} C300,${200 + i * 30} 700,${600 + i * 15} 1000,${300 + i * 20};
              M0,${300 + i * 20} C300,${600 + i * 15} 700,${200 + i * 30} 1000,${300 + i * 20};
              M0,${300 + i * 20} C300,${200 + i * 30} 700,${600 + i * 15} 1000,${300 + i * 20}
            `}
          />
        </path>
      ))}
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
  const mutedColor = isDark ? '#888' : '#666';
  const gradient = isDark 
    ? 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' 
    : 'linear-gradient(to top, rgba(248,249,250,1) 0%, rgba(248,249,250,0) 100%)';

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: bgColor, 
      color: fgColor, 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      position: 'relative', 
      zIndex: 1,
      transition: 'background-color 0.5s ease, color 0.5s ease'
    }}>
      
      <MovingVectorBackground theme={theme} />

      {/* Standalone Theme Toggle Button */}
      <button 
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        style={{
          position: 'fixed',
          top: '2rem',
          right: '3rem',
          background: 'transparent',
          border: 'none',
          color: fgColor,
          cursor: 'pointer',
          zIndex: 1000,
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </button>

      {/* Floating Top Navbar */}
      <nav style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'auto',
        padding: '1rem 3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        background: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        borderRadius: '100px',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)',
        boxShadow: isDark ? '0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' : '0 10px 40px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.5)',
        zIndex: 1000,
        transition: 'background 0.5s ease, border 0.5s ease'
      }}>
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '3rem' }}>
          {[
            { name: 'About', id: '#about' },
            { name: 'Projects', id: '#projects' },
            { name: 'Contact', id: '#contact' }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.id} 
              style={{
                color: mutedColor,
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
              }}
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

      {/* Sections Container */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '20vh', padding: '0 10vw 0 10vw' }}>
        
        {/* Hero Section */}
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: 900,
            margin: 0,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: fgColor,
            textAlign: 'center',
            textShadow: isDark ? 'none' : '0 4px 24px rgba(0,0,0,0.05)',
          }}>
            SEBASTIAN ANTIC
          </h1>
        </section>

        {/* Dynamic Glassmorphic Sections */}
        {/* About Section - 3 Column Resume Layout */}
        <section id="about" style={{
          padding: '4rem',
          background: isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          borderRadius: '24px',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: isDark ? '0 16px 40px rgba(0,0,0,0.4)' : '0 16px 40px rgba(0,0,0,0.05)',
          transition: 'background 0.5s ease, border 0.5s ease'
        }}>
          <p style={{ color: mutedColor, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '4rem', maxWidth: '800px' }}>
            My educational journey at St. Joseph's University builds core competencies in web page scripting and programming. Alongside volunteering for the National Service Scheme, I am developing a balanced perspective on technology and community impact, setting the stage for a future in web development and business analysis.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
            
            {/* Column 1: EXPERIENCE & EDUCATION */}
            <div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', fontSize: '1.2rem', color: fgColor, fontWeight: 500 }}>Experience</h3>
              
              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>MAY 2026 - NOW • NETNEX GLOBAL</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Delegate Sales Executive</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Connecting industry leaders to flagship events through business analysis and sales.</p>
              </div>

              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '4rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>MAY 2025 - JUN 2025 • WROGN</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Sales Intern</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Gained insights into the apparel industry, focusing on market dynamics, communication, and teamwork.</p>
              </div>

              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', fontSize: '1.2rem', color: fgColor, fontWeight: 500 }}>Education</h3>
              
              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>AUG 2022 – APR 2026</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>St. Joseph's University</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>BCA, Web Page, Digital/Multimedia and Info Resources Design</p>
              </div>

              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>2020 – 2022</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>St. Joseph's Indian Composite PU College</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Commerce (CEBA), Computer Science</p>
              </div>

              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>2010 – 2020</p>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Fusco's School - India</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>10th Standard, ICSE</p>
              </div>
            </div>

            {/* Column 2: SKILLS */}
            <div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', fontSize: '1.2rem', color: fgColor, fontWeight: 500 }}>Skills</h3>
              
              <div style={{ paddingRight: '1rem' }}>
                <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>01</span>
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Core Competencies</h4>
                  <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Teamwork, Communication, Problem Solving, Analytical Skills, Leadership, Time Management, Research Skills, Candidate Experience, Sleep Disorders, Insomnia, Cooking.</p>
                </div>

                <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>02</span>
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Design & Web Dev</h4>
                  <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Front-End Development, Web Design, Web Development, Graphic Design, HTML, HTML5, Semantic HTML, XHTML, HTML Scripting, CSS, JavaScript, React.js, WordPress, Sketching.</p>
                </div>

                <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>03</span>
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Backend & DB</h4>
                  <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Databases, MongoDB, NoSQL, SQL, Java, Python, C++, C#, C, XAMPP.</p>
                </div>

                <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>04</span>
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Tech & Networks</h4>
                  <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Artificial Intelligence (AI), Machine Learning, TensorFlow, Algorithms, SDLC, Cellular Communications, Networking, Network Design, Network Security, Cybersecurity, Information Security, IAM, Virus Removal.</p>
                </div>

                <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>05</span>
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Marketing & Sales</h4>
                  <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Talent Acquisition, Talent Management, Cold E-mailing, CRM, Sales, Marketing, Advertising, Business Analysis, Financial Analysis, Data Analysis.</p>
                </div>

                <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>06</span>
                  <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Management & Others</h4>
                  <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Project Management, Program Management, Community Outreach, Volunteering, Nonprofit Volunteering, Team Leadership, Team Building, Team Management, Student Affairs, Public Affairs, Microsoft Excel.</p>
                </div>
              </div>
            </div>

            {/* Column 3: CERTIFICATIONS */}
            <div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', fontSize: '1.2rem', color: fgColor, fontWeight: 500 }}>Certifications</h3>
              
              <div style={{ paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { title: "Talent Acquisition and Management", issuer: "NPTEL", date: "May 2026" },
                  { title: "Using MongoDB with Java", issuer: "MongoDB", date: "Sep 2025" },
                  { title: "Introduction to MongoDB", issuer: "MongoDB", date: "Jan 2026" },
                  { title: "MongoDB CRUD Operations", issuer: "MongoDB", date: "Jan 2026" },
                  { title: "MongoDB Aggregation", issuer: "MongoDB", date: "Jan 2026" },
                  { title: "MongoDB Atlas Search", issuer: "MongoDB", date: "Jan 2026" },
                  { title: "MongoDB Indexes", issuer: "MongoDB", date: "Jan 2026" },
                  { title: "Advanced Wordpress Course for Professionals", issuer: "Udemy", date: "Jun 2023" },
                  { title: "Learn Python From Scratch", issuer: "Udemy", date: "Sep 2023" },
                  { title: "Cybersecurity Awareness", issuer: "Infosys Springboard", date: "Sep 2025" },
                  { title: "IAM (Identity and Access Management)", issuer: "Infosys Springboard", date: "Sep 2025" },
                  { title: "Artificial Intelligence and Machine Learning Fundamentals", issuer: "Infosys Springboard", date: "Nov 2023" },
                  { title: "Hands-on Artificial Intelligence with TensorFlow", issuer: "Infosys Springboard", date: "Nov 2023" },
                  { title: "AWS Educate Introduction to Cloud 101", issuer: "Amazon Web Services (AWS)", date: "Sep 2025" },
                  { title: "AWS Educate Machine Learning Foundations", issuer: "Amazon Web Services (AWS)", date: "Sep 2025" },
                  { title: "AWS Educate Serverless Compute", issuer: "Amazon Web Services (AWS)", date: "Sep 2025" },
                  { title: "AWS Educate Web Builder", issuer: "Amazon Web Services (AWS)", date: "Sep 2025" },
                  { title: "Getting Started with Microsoft Excel", issuer: "Coursera", date: "Jun 2025" }
                ].map((cert, i) => (
                  <div key={i} style={{ paddingBottom: '0.75rem', borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>
                    <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.85rem', color: fgColor, fontWeight: 600 }}>{cert.title}</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: mutedColor }}>
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
        <section id="projects" style={{
          padding: '4rem',
          background: isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          borderRadius: '24px',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: isDark ? '0 16px 40px rgba(0,0,0,0.4)' : '0 16px 40px rgba(0,0,0,0.05)',
          transition: 'background 0.5s ease, border 0.5s ease'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.05em', color: fgColor }}>Projects</h2>
          
          {/* Services Section embedded in Projects */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 600, color: fgColor, display: 'flex', alignItems: 'center' }}>SERVICES:</span>
            {['Web Design', 'Graphic Design', 'Web Development', 'Business Analysis'].map((service, i) => (
              <a 
                key={i} 
                href={`mailto:sebastianantic10@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(service)}`}
                style={{ 
                  padding: '0.4rem 1.2rem', 
                  border: `1px solid ${fgColor}`, 
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
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; }}
              >
                {service}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Project 1 */}
            <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '2rem', right: 0, color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em' }}>DEC 2025 – APR 2026</span>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: fgColor }}>Centralized Internal Assesment Webapp</h3>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1rem' }}>Associated with St. Joseph's University</p>
              <p style={{ color: mutedColor, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem', maxWidth: '800px' }}>
                A centralized internal assessment web app with integration of AI.
              </p>
              <p style={{ color: fgColor, fontSize: '0.9rem', marginBottom: '1.5rem' }}><strong>Skills:</strong> React.js, Artificial Intelligence (AI), +9 skills</p>
              <a href="https://github.com/joeljaisonsebastian-dev/cia.git" target="_blank" rel="noreferrer" style={{ 
                display: 'inline-block', padding: '0.8rem 1.5rem', border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`, color: fgColor, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '100px', transition: 'all 0.3s ease' 
              }} onMouseOver={(e) => { e.currentTarget.style.borderColor = fgColor; e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; }}>View on GitHub</a>
            </div>

            {/* Project 2 */}
            <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '2rem', right: 0, color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em' }}>AUG 2025</span>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: fgColor }}>Leap year Calculator</h3>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1rem' }}>Associated with St. Joseph's University</p>
              <p style={{ color: fgColor, fontSize: '0.9rem', marginBottom: '1.5rem' }}><strong>Skills:</strong> HTML, HTML5, +5 skills</p>
              <a href="https://github.com/SebastianAntic/HTML-CSS/blob/main/Leap%20Year%20Calculator%20-%20Regular" target="_blank" rel="noreferrer" style={{ 
                display: 'inline-block', padding: '0.8rem 1.5rem', border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`, color: fgColor, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '100px', transition: 'all 0.3s ease' 
              }} onMouseOver={(e) => { e.currentTarget.style.borderColor = fgColor; e.currentTarget.style.backgroundColor = fgColor; e.currentTarget.style.color = bgColor; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = fgColor; }}>View on GitHub</a>
            </div>

            {/* Project 3 */}
            <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '2rem', right: 0, color: mutedColor, fontSize: '0.85rem', letterSpacing: '0.1em' }}>FEB 2024 – MAY 2024</span>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: fgColor }}>Introduction to 6G Technologies</h3>
              <p style={{ color: mutedColor, fontSize: '0.9rem', marginBottom: '1rem' }}>Associated with St. Joseph's University</p>
              <p style={{ color: mutedColor, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem', maxWidth: '800px' }}>
                A term paper providing a comprehensive overview and in-depth analysis of the evolution of cellular networks, from 1G to 6G technology. Details the history, key features, and underlying network architecture. 
              </p>
              <p style={{ color: mutedColor, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem', maxWidth: '800px' }}>
                Explores potential innovations such as Terahertz (THz) spectrum utilization, AI/ML integration, massive MIMO, holographic beamforming, and intelligent reflecting surfaces (IRS) for applications like immersive AR/VR, telemedicine, and smart cities.
              </p>
              <p style={{ color: fgColor, fontSize: '0.9rem', marginBottom: '0' }}><strong>Skills:</strong> Cellular Communications, Networking, +2 skills</p>
            </div>
            
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          padding: '4rem',
          background: isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          borderRadius: '24px',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: isDark ? '0 16px 40px rgba(0,0,0,0.4)' : '0 16px 40px rgba(0,0,0,0.05)',
          transition: 'background 0.5s ease, border 0.5s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.05em', color: fgColor }}>Get in Touch</h2>
          <p style={{ fontSize: '1.2rem', color: mutedColor, lineHeight: 1.6, maxWidth: '600px', marginBottom: '3rem' }}>
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
      <footer style={{
        width: '100%',
        padding: '2rem 4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        gap: '4rem',
        zIndex: 1000,
        position: 'relative'
      }}>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/sebastianantic/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bh3iQyIprRw2o8iY11vtDkg%3D%3D' },
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
