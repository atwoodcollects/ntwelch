"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const experiences = [
    { company: "Bequall", role: "Strategic Account Manager", period: "Mar 2025 – Aug 2025", description: "Co-developed go-to-market strategy. Secured partners generating hundreds of qualified leads." },
    { company: "Zeplin", role: "Account Manager", period: "Jul 2024 – Nov 2024", description: "Closed 3 enterprise deals ($30K+ ARR) in ramp period. Fastest rep to close enterprise deal." },
    { company: "QuickNode", role: "Strategic Customer Success Manager", period: "Aug 2022 – Nov 2023", description: "Founding CS team member. Renewed and expanded $1M+ ARR. Q4 2022 Company Value Award." },
    { company: "BlockFi", role: "Senior Manager, Client Escalations", period: "Mar 2021 – Aug 2022", description: "Reduced resolution time 50%. Led executive escalations via Zendesk. Built escalation team." },
    { company: "Atlassian", role: "Account Manager", period: "Aug 2017 – Mar 2021", description: "Closed $10M+ in renewals. Led OpsGenie integration post-acquisition. 3x 'Top Dog' award winner." },
    { company: "Fiksu", role: "Account Executive", period: "Mar 2015 – Aug 2017", description: "Generated $300K+ in new business. Led and mentored SDR team." }
  ];

  const projects = [
    { name: "DoIGrade.com", description: "Sports card tools—grade calculators, trade evaluators, and ELO-based rankings.", link: "https://doigrade.com", linkText: "Visit ↗" },
    { name: "ADU Pulse", description: "Real-time ADU permit tracking dashboard for Massachusetts.", link: "https://adupulse.com", linkText: "Visit ↗" },
    { name: "Community Hoops", description: "Co-founded free youth basketball mentoring. Partnered with PeacePlayers International.", link: "https://www.youtube.com/watch?v=27QHI6qX2M0", linkText: "Watch ↗", link2: "https://www.newburyportnews.com/sports/helping-out-with-hoops/article_ec5d147b-5963-51c7-9203-a126dfe3b2fd.html", link2Text: "Article ↗" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F5F2', color: '#1a1a1a', fontFamily: "'Source Serif 4', Georgia, serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600&display=swap');
        ::selection { background: #2B4A3F; color: #F7F5F2; }
        html { scroll-behavior: smooth; }
        body { background-color: #F7F5F2; }
        .nav-link { color: #6B6560; text-decoration: none; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; transition: color 0.2s ease; }
        .nav-link:hover { color: #2B4A3F; }
        .section { padding: 60px 24px; max-width: 720px; margin: 0 auto; }
        .section-label { font-family: 'DM Sans', sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #2B4A3F; margin-bottom: 24px; font-weight: 600; }
        .experience-item { padding: 18px 0; border-bottom: 1px solid #E8E4DF; }
        .experience-item:first-child { padding-top: 0; }
        .experience-item:last-child { border-bottom: none; padding-bottom: 0; }
        .project-item { padding: 18px 0; border-bottom: 1px solid #E8E4DF; }
        .project-item:first-child { padding-top: 0; }
        .project-item:last-child { border-bottom: none; padding-bottom: 0; }
        .link { color: #2B4A3F; text-decoration: none; font-family: 'DM Sans', sans-serif; font-weight: 500; transition: opacity 0.2s ease; }
        .link:hover { opacity: 0.7; }
        .button { display: inline-block; padding: 12px 28px; background: #2B4A3F; color: #F7F5F2; text-decoration: none; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; border-radius: 2px; transition: all 0.2s ease; }
        .button:hover { background: #1F362D; }
        .button-outline { background: transparent; color: #2B4A3F; border: 1.5px solid #2B4A3F; }
        .button-outline:hover { background: #2B4A3F; color: #F7F5F2; }
        .fade-in { opacity: 0; transform: translateY(20px); animation: fadeIn 0.6s ease forwards; }
        .fade-in-delay-1 { animation-delay: 0.1s; }
        .fade-in-delay-2 { animation-delay: 0.2s; }
        @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
        .desktop-nav { display: flex; gap: 28px; }
        .mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
        .mobile-menu { display: none; }
        @media (max-width: 640px) {
          .section { padding: 40px 20px; }
          .hero-title { font-size: 36px !important; }
          .button-group { flex-direction: column !important; width: 100%; }
          .exp-header { flex-direction: column !important; gap: 4px !important; }
          .footer-inner { flex-direction: column !important; text-align: center; }
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }
          .mobile-menu { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: #F7F5F2; border-bottom: 1px solid #E8E4DF; padding: 16px 20px; gap: 16px; }
          .hero-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
        }
      `}</style>

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: 'rgba(247, 245, 242, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E8E4DF' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
          <a href="#" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: '16px', color: '#1a1a1a', textDecoration: 'none' }}>ntwelch.com</a>
          
          <div className="desktop-nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="/resume.pdf" target="_blank" className="nav-link">Resume</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {menuOpen && (
            <div className="mobile-menu">
              <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="/resume.pdf" target="_blank" className="nav-link" onClick={() => setMenuOpen(false)}>Resume</a>
              <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      <section className="section" style={{ paddingTop: '100px' }}>
        <div className="hero-row" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
          <img src="/headshot.jpg" alt="Nick Welch" className="fade-in" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '3px solid #E8E4DF' }} />
          <div>
            <h1 className="fade-in fade-in-delay-1 hero-title" style={{ fontSize: '42px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#1a1a1a' }}>Nick Welch</h1>
            <p className="fade-in fade-in-delay-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#8B857E', marginTop: '6px' }}>Boston, MA</p>
          </div>
        </div>
        <p className="fade-in fade-in-delay-2" style={{ fontSize: '18px', color: '#4A4540', maxWidth: '520px', lineHeight: 1.7, marginBottom: '28px' }}>Sales and account management leader with 10 years driving growth in blockchain and enterprise software. I scale relationships, close complex deals, and exceed revenue targets.</p>
        <div className="fade-in fade-in-delay-2 button-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#contact" className="button">Get in touch</a>
          <a href="/resume.pdf" target="_blank" className="button button-outline">View resume</a>
        </div>
      </section>

      <section id="about" className="section" style={{ paddingTop: '40px' }}>
        <p className="section-label">About</p>
        <p style={{ lineHeight: 1.8, fontSize: '16px', color: '#3D3935', marginBottom: '16px' }}>I'm a builder—scaling CS functions from zero, launching community programs, or shipping side projects that solve real problems. Track record of scaling high-value customer relationships in both startup and enterprise settings.</p>
        <div style={{ padding: '20px 24px', backgroundColor: '#EFECE7', borderRadius: '4px', borderLeft: '3px solid #2B4A3F' }}>
          <ul style={{ listStyle: 'none', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#4A4540', lineHeight: 2, padding: 0, margin: 0 }}>
            <li>BS Marketing Communications, Emerson College 2015</li>
            <li>NCAA Division III Basketball</li>
            <li>Boston DAO member</li>
          </ul>
        </div>
      </section>

      <section id="experience" className="section" style={{ paddingTop: '40px' }}>
        <p className="section-label">Experience</p>
        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px', gap: '16px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>{exp.role}</h3>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#8B857E', whiteSpace: 'nowrap' }}>{exp.period}</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#2B4A3F', marginBottom: '4px', fontWeight: 500 }}>{exp.company}</p>
              <p style={{ fontSize: '14px', color: '#5C564F', lineHeight: 1.5 }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section" style={{ paddingTop: '40px' }}>
        <p className="section-label">Projects</p>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>{project.name}</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="link" style={{ fontSize: '13px' }}>{project.linkText}</a>}
                  {project.link2 && <a href={project.link2} target="_blank" rel="noopener noreferrer" className="link" style={{ fontSize: '13px' }}>{project.link2Text}</a>}
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#5C564F', lineHeight: 1.5 }}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <p className="section-label">Contact</p>
        <p style={{ fontSize: '16px', color: '#4A4540', marginBottom: '24px', lineHeight: 1.7 }}>Exploring opportunities in customer success, account management, and sales across tech. Let's connect.</p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="mailto:nickwelch22@gmail.com" className="button">Email me</a>
          <a href="https://www.linkedin.com/in/ntwelch/" target="_blank" rel="noopener noreferrer" className="button button-outline">LinkedIn</a>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #E8E4DF', padding: '24px', backgroundColor: '#EFECE7' }}>
        <div className="footer-inner" style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#8B857E' }}>© 2025 Nick Welch</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#8B857E' }}>ntwelch.com</p>
        </div>
      </footer>
    </div>
  );
}
