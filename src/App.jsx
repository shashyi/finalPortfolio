import React from 'react';
import { tourGallery, journalGallery, projects } from './data';
import bgHero from './assets/pastel2.jpg';
import profilePic from './assets/profile.jpg';
import bgAbout from './assets/pastel4.jpg';
import bgContact from './assets/contact1.jpg';
import bgProjects from './assets/proj1.jpg';


import './index.css';

function App() {
  return (
    <>
      {}
      <header className="navbar">
        <h1 className="logo"></h1>
        <nav>
          <a href="#about">About</a>
          <a href="#tour">Tour</a>
          <a href="#journal">Journal</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {}
     
      <section
  className="hero"
 style={{
    backgroundImage: `url(${bgHero})`,
    backgroundPosition: "center",
    backgroundSize: "cover",   
    backgroundRepeat: "no-repeat",
    width: "100%",               
    height: "70vh",             
    maxHeight: "100px",         
  }}
>

        <div className="hero-content">
          <div className="hero-image">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="hero-text">
            <h2>Hello! <span className="highlight">Welcome To My Portfolio.</span></h2>
          </div>
        </div>
      </section>

      {}
      <section
  className="about"
  id="about"
  style={{
    backgroundImage: `url(${bgAbout})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    maxWidth: "1200px",
    margin: "2rem auto",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
    padding: "4rem 2rem",
  }}
>
  {}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255,255,255,0.7)", 
    borderRadius: "20px",
    zIndex: 0,
  }}></div>

  <div style={{ position: "relative", zIndex: 1 }}>
    <h2>About Me</h2>
    <p>
     Hi! I’m Sarriah Mitch Lamoste, a Third-year BSIT student at Holy Cross Davao College. I’m currently learning web and mobile development, working with tools like React, React Native, and Firebase to build projects that are both functional and visually appealing. I enjoy solving problems, learning new technologies, and applying my skills in real projects. Even though I don’t have a deep passion for technology yet, I am dedicated to improving my abilities and gaining practical experience in programming and development. In my free time, I enjoy exploring, trying new things, and cooking. I also love building with lego and collecting toys, which helps me reconnect with my inner child. My goal is to grow as a developer and build projects that work well and look good, while learning as much as I can along the way.
    </p>
  </div>
</section>


      {}
      <section className="tour" id="tour">
        <h2>Tour</h2>
        <div className="gallery">
          {tourGallery.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.description} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="journal" id="journal">
        <h2>Documentation Journal</h2>
        <div className="gallery">
          {journalGallery.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.description} />
              <p>{item.description}</p>
              <small>{item.date}</small>
            </div>
          ))}
        </div>
      </section>
{}
<section
  className="projects"
  id="projects"
  style={{
    backgroundImage: `url(${bgProjects})`, 
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "1200px",
    margin: "2rem auto",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
    padding: "2rem",
    position: "relative",
    color: "#fff" 
  }}
>
  {}
  <div
    style={{
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.2)",
      borderRadius: "20px",
      zIndex: 0
    }}
  ></div>

  <h2 style={{ position: "relative", zIndex: 1 }}>Projects</h2>

  <div className="gallery" style={{ position: "relative", zIndex: 1 }}>
    {projects.map(item => (
      <div key={item.id} className="gallery-item">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img src={item.image} alt={item.description} />
          <p>{item.description}</p>
        </a>
      </div>
    ))}
  </div>
</section>

      <section
  className="contact"
  id="contact"
   style={{
    backgroundImage: `url(${bgAbout})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    maxWidth: "1200px",
    margin: "2rem auto",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
    padding: "1rem 2rem",
  }}

>
  {}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255,255,255,0.7)", 
    borderRadius: "20px",
    zIndex: 0,
  }}></div>

  <div style={{ position: "relative", zIndex: 1 }}>
    <h2>LET'S TALK</h2>
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
            <a href="https://www.instagram.com/luuvvrai/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://github.com/shashyi" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Sarriah Mitch Lamoste. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
