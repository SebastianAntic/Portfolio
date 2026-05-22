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
        border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: isDark ? '0 10px 40px rgba(0,0,0,0.5)' : '0 10px 40px rgba(0,0,0,0.05)',
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
            Sebastian Antic
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
            
            {/* Column 1: EXPERIENCE */}
            <div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', fontSize: '1.2rem', color: fgColor, fontWeight: 500 }}>Experience</h3>
              
              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>01</span>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>2022 - NOW • STARTUP</p>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Senior Developer</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Leading development of full-stack web applications, focusing on scalable architecture and seamless user experiences.</p>
              </div>

              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>02</span>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: mutedColor, margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>2019 - 2022 • AGENCY</p>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Web Engineer</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Built robust client solutions ranging from e-commerce platforms to bespoke content management systems.</p>
              </div>
            </div>

            {/* Column 2: SKILLS */}
            <div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', fontSize: '1.2rem', color: fgColor, fontWeight: 500 }}>Skills</h3>
              
              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>01</span>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Frontend Development</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>React, Vue, Next.js, and modern CSS frameworks with a focus on fluid animations and glassmorphic UI.</p>
              </div>

              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>02</span>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>Backend & Database</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0 }}>Node.js, Express, MongoDB, and PostgreSQL architecture for scalable high-performance APIs.</p>
              </div>
            </div>

            {/* Column 3: PERSONAL PROJECTS */}
            <div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', fontSize: '1.2rem', color: fgColor, fontWeight: 500 }}>Projects</h3>
              
              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1.5rem', right: 0, color: mutedColor, fontSize: '0.75rem', letterSpacing: '0.1em' }}>01</span>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', textTransform: 'uppercase', color: fgColor, fontWeight: 600 }}>AI Portfolio Generator</h4>
                <p style={{ fontSize: '0.9rem', color: mutedColor, lineHeight: 1.6, margin: 0, marginBottom: '1.5rem' }}>An AI tool that builds stunning portfolios dynamically using natural language.</p>
                <a href="#projects" style={{ 
                  display: 'inline-block', 
                  padding: '0.5rem 1rem', 
                  border: `1px dashed ${mutedColor}`, 
                  color: fgColor, 
                  textDecoration: 'none', 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease' 
                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = fgColor; e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = mutedColor; e.currentTarget.style.backgroundColor = 'transparent'; }}>View Project</a>
              </div>
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
          <a href="mailto:hello@example.com" style={{ 
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
            color: fgColor,
            whiteSpace: 'nowrap',
            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          }}>
            Sebastian Antic
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
            { icon: <LinkedinIcon />, url: 'https://linkedin.com' },
            { icon: <GithubIcon />, url: 'https://github.com' },
            { icon: <InstagramIcon />, url: 'https://instagram.com' }
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
