import React, { useState, useEffect } from 'react';
import { tourGallery, journalGallery, projects } from './data';
import bgHero from './assets/pastel2.jpg';
import profilePic from './assets/profile.jpg';
import bgAbout from './assets/pastel4.jpg';
import bgContact from './assets/contact1.jpg';
import bgProjects from './assets/proj1.jpg';

import './index.css';

function App() {
  // FIX #1 — Active nav highlight on scroll
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── NAVBAR (FIX #1: sticky nav already existed but logo was empty + no active state) ── */}
      <header className="navbar">
        <h1 className="logo">Sarriah<span className="logo-accent">.</span></h1>
        <nav>
          {['about', 'tour', 'journal', 'projects', 'contact'].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={activeSection === s ? 'nav-active' : ''}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          {/* FIX #2 — CTA button in nav */}
          <a href="#contact" className="nav-cta">Hire Me</a>
        </nav>
      </header>

      {/* ── HERO (FIX #2: added two CTA buttons + fixed maxHeight bug) ── */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '70vh',
          /* REMOVED the broken maxHeight: "100px" that was cutting off the hero */
        }}
      >
        <div className="hero-content">
          <div className="hero-image">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="hero-text">
            <h2>
              Hello! <span className="highlight">Welcome To My Portfolio.</span>
            </h2>
            <p className="hero-sub">
              BSIT Student · Web &amp; Mobile Developer · Based in Davao City
            </p>
            {/* FIX #2 — Clear call-to-action buttons */}
            <div className="hero-cta-row">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT (FIX #6: improved text contrast, consistent spacing) ── */}
      <section
        className="about"
        id="about"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          maxWidth: '1200px',
          margin: '2rem auto',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          padding: '4rem 2rem',
        }}
      >
        <div className="section-overlay" style={{ borderRadius: '20px' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>About Me</h2>
          <p>
            Hi! I'm Sarriah Mitch Lamoste, a Third-year BSIT student at Holy
            Cross Davao College. I'm currently learning web and mobile
            development, working with tools like React, React Native, and
            Firebase to build projects that are both functional and visually
            appealing. I enjoy solving problems, learning new technologies, and
            applying my skills in real projects. In my free time, I enjoy
            exploring, trying new things, and cooking. I also love building with
            Lego and collecting toys. My goal is to grow as a developer and
            build projects that work well and look good.
          </p>
        </div>
      </section>

      {/* ── TOUR ── */}
      <section className="tour" id="tour">
        <h2>Tour</h2>
        <div className="gallery">
          {tourGallery.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.description} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOURNAL ── */}
      <section className="journal" id="journal">
        <h2>Documentation Journal</h2>
        <div className="gallery">
          {journalGallery.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.description} />
              <p>{item.description}</p>
              <small>{item.date}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS (FIX #4: hover states on cards now visible) ── */}
      <section
        className="projects"
        id="projects"
        style={{
          backgroundImage: `url(${bgProjects})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          maxWidth: '1200px',
          margin: '2rem auto',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          padding: '2rem',
          position: 'relative',
          color: '#fff',
        }}
      >
        <div className="section-overlay dark" style={{ borderRadius: '20px' }}></div>
        <h2 style={{ position: 'relative', zIndex: 1 }}>Projects</h2>
        <div className="gallery" style={{ position: 'relative', zIndex: 1 }}>
          {projects.map((item) => (
            // FIX #4 — project-card class adds proper hover state + cursor pointer
            <div key={item.id} className="gallery-item project-card">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.description} />
                <p>{item.description}</p>
                <span className="view-project-label">View Project →</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT (FIX #5: more prominent, easier to find) ── */}
      <section
        className="contact"
        id="contact"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          maxWidth: '1200px',
          margin: '2rem auto',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          padding: '3rem 2rem',
        }}
      >
        <div className="section-overlay" style={{ borderRadius: '20px' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* FIX #5 — section label so users know where they are */}
          <span className="section-tag">Get In Touch</span>
          <h2 className="contact-heading">LET'S TALK</h2>
          <div className="contact-box">
            <div className="contact-row">
              <div className="contact-column">
                <h3 className="contact-label">Contact Info:</h3>
                <p className="contact-text">📞 0910 084 2189</p>
                <p className="contact-text">📧 lamostesarriahmitch@gmail.com</p>
                <p className="contact-text">📍 Davao City, Philippines</p>
              </div>
              <div className="contact-column socials">
                <h3 className="contact-label">Socials:</h3>
                <div className="socials-row">
                  <a
                    href="https://www.instagram.com/luuvvrai/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a
                    href="https://github.com/shashyi"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Sarriah Mitch Lamoste. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;