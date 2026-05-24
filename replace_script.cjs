const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add import
content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport './App.css';");

// 2. Replace MovingVectorBackground
const oldVectorBg = `const MovingVectorBackground = ({ theme }) => (
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
      {[...Array(40)].map((_, i) => {
        const offset = i - 20;
        const strokeOp = theme === 'dark' ? (0.02 + Math.abs(offset) * 0.015) : (0.02 + Math.abs(offset) * 0.01);
        const strokeColor = theme === 'dark' ? \`rgba(255,255,255,\${strokeOp})\` : \`rgba(0,0,0,\${strokeOp})\`;
        const strokeW = 1.5;

        const yStart = 500 + offset * 25;
        const yEnd = 500 - offset * 25;
        
        const cp1x_1 = 300 + offset * 10;
        const cp1y_1 = 200 - offset * 40;
        const cp2x_1 = 700 - offset * 10;
        const cp2y_1 = 800 + offset * 40;
        
        const cp1x_2 = 400 - offset * 15;
        const cp1y_2 = 800 + offset * 40;
        const cp2x_2 = 600 + offset * 15;
        const cp2y_2 = 200 - offset * 40;

        const cp1x_3 = 200 + offset * 5;
        const cp1y_3 = 500 + offset * 20;
        const cp2x_3 = 800 - offset * 5;
        const cp2y_3 = 500 - offset * 20;

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
              dur={\`\${20 + Math.abs(offset) * 0.5}s\`}
              repeatCount="indefinite"
              values={\`
                M-100,\${yStart} C\${cp1x_1},\${cp1y_1} \${cp2x_1},\${cp2y_1} 1100,\${yEnd};
                M-100,\${yStart} C\${cp1x_2},\${cp1y_2} \${cp2x_2},\${cp2y_2} 1100,\${yEnd};
                M-100,\${yStart} C\${cp1x_3},\${cp1y_3} \${cp2x_3},\${cp2y_3} 1100,\${yEnd};
                M-100,\${yStart} C\${cp1x_1},\${cp1y_1} \${cp2x_1},\${cp2y_1} 1100,\${yEnd}
              \`}
            />
          </path>
        );
      })}
    </svg>
  </div>
);`;

const newVectorBg = `const MovingVectorBackground = ({ theme }) => (
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
);`;
content = content.replace(oldVectorBg, newVectorBg);

// 3. Classes
content = content.replace(/<button([^>]*)onClick=\{\(\) => setTheme\(isDark \? 'light' : 'dark'\)\}/g, "<button className=\"theme-toggle-btn\"$1onClick={() => setTheme(isDark ? 'light' : 'dark')}");
// Remove top/right from button
content = content.replace(/top: '2rem',\s*right: '3rem',/, "");

content = content.replace(/<nav style=\{\{/g, "<nav className=\"nav-container\" style={{");
content = content.replace(/padding: '1rem 3rem',\s*/, "");
content = content.replace(/top: '2rem',\s*/, "");

content = content.replace(/<div style=\{\{ display: 'flex', gap: '3rem' \}\}>/, "<div className=\"nav-links\" style={{ display: 'flex' }}>");

content = content.replace(/<a([^>]*)style=\{\{([^>]*?)fontSize: '0\.8rem',\s*fontWeight: 600,\s*letterSpacing: '0\.1em',([^>]*?)\}\}/g, "<a$1className=\"nav-link-item\" style={{$2fontWeight: 600,$3}}");

content = content.replace(/<div style=\{\{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '20vh', padding: '0 10vw 0 10vw' \}\}>/, "<div className=\"section-container\" style={{ position: 'relative', zIndex: 10 }}>");

content = content.replace(/<section id="about" style=\{\{([^}]*)padding: '4rem',([^}]*)borderRadius: '24px',([^}]*)\}\}/g, "<section id=\"about\" className=\"glass-panel\" style={{$1$2$3}}");
content = content.replace(/<section id="projects" style=\{\{([^}]*)padding: '4rem',([^}]*)borderRadius: '24px',([^}]*)\}\}/g, "<section id=\"projects\" className=\"glass-panel\" style={{$1$2$3}}");
content = content.replace(/<section id="contact" style=\{\{([^}]*)padding: '4rem',([^}]*)borderRadius: '24px',([^}]*)\}\}/g, "<section id=\"contact\" className=\"glass-panel\" style={{$1$2$3}}");

content = content.replace(/<h1 style=\{\{([^}]*)fontSize: 'clamp\(3rem, 8vw, 8rem\)',([^}]*)\}\}/, "<h1 className=\"hero-title\" style={{$1$2}}");

content = content.replace(/<div style=\{\{ display: 'grid', gridTemplateColumns: 'repeat\(auto-fit, minmax\(280px, 1fr\)\)', gap: '4rem' \}\}>/, "<div className=\"resume-grid\">");

content = content.replace(/<footer style=\{\{([^}]*)padding: '2rem 4rem',([^}]*)gap: '4rem',([^}]*)\}\}/, "<footer className=\"footer-container\" style={{$1$2$3}}");

content = content.replace(/<h2 style=\{\{([^}]*)fontSize: '2\.5rem',([^}]*)\}\}>Projects<\/h2>/, "<h2 className=\"projects-title\" style={{$1$2}}>Projects</h2>");
content = content.replace(/<h2 style=\{\{([^}]*)fontSize: '2\.5rem',([^}]*)\}\}>Get in Touch<\/h2>/, "<h2 className=\"contact-title\" style={{$1$2}}>Get in Touch</h2>");

content = content.replace(/<p style=\{\{ color: mutedColor, fontSize: '1\.1rem', lineHeight: 1\.8, marginBottom: '4rem', maxWidth: '800px' \}\}>/g, "<p className=\"about-text\" style={{ color: mutedColor, fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '4rem', maxWidth: '800px' }}>");

fs.writeFileSync(filePath, content);
console.log("Replacements complete.");
