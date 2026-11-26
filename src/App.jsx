
import {
  Mail,
  ArrowUpRight,
  Code2,
  Cloud,
  GraduationCap,
  ExternalLink,
  Menu,
  X,
  Download,
} from "lucide-react";

import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "Git",
    "GitHub",
    "Cloud Computing",
    "Prompt Engineering",
  ];

  const projects = [
   {
  title: "Grocery Kadai",
  category: "Full Stack Web Application",
  description:
    "A grocery shopping application with product browsing, user authentication, shopping cart functionality and database connectivity.",
  tech: ["React", "Node.js", "MongoDB"],
  link: "https://github.com/sujiththangaraj565/grocery-kadai",
},

{
  title: "Developer Portfolio",
  category: "Personal Website",
  description:
    "A responsive personal portfolio website showcasing my technical skills, projects and career interests.",
  tech: ["React", "CSS", "Vite"],
  link: "https://github.com/sujiththangaraj565/sujith-portfolio",
},
  ];

  const certifications = [
    { name: "Cloud Computing", provider: "NPTEL" },
    { name: "MERN Stack", provider: "ExcelR" },
    { name: "React.js", provider: "ExcelR" },
    { name: "MongoDB Basics for Students", provider: "MongoDB" },
    {
      name: "Building AI-Powered Search with MongoDB Vector Search",
      provider: "MongoDB",
    },
    {
      name: "AI and Innovation: How MongoDB Enables a Resilient AI Strategy",
      provider: "MongoDB",
    },
    { name: "Building RAG Apps Using MongoDB", provider: "MongoDB" },
    { name: "Building AI Agents with MongoDB", provider: "MongoDB" },
    {
      name: "Typewriting – First Class (Junior Level)",
      provider: "Typewriting",
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            SUJITH<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#certifications" onClick={closeMenu}>Certifications</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="hero section" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            Open to opportunities
          </div>

          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Sujith <span>J.T.</span>
          </h1>

          <h2>
            Full Stack Developer <span>&</span>
            <br />
            Cloud Computing Enthusiast
          </h2>

          <p className="hero-description">
            I build modern web applications and explore cloud technologies.
            Passionate about learning, problem-solving and turning ideas
            into practical digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="/resume.pdf" download className="secondary-button">
              Resume <Download size={17} />
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Code2 />
            </a>

            <a href="mailto:yourmail@example.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-glow"></div>

          <div className="profile-card">
            <img
              src="/profile.png"
              alt="Sujith profile"
              className="profile-image"
            />
          </div>

          <div className="floating-card floating-card-one">
            <Code2 size={19} />
            <span>Web Development</span>
          </div>

          <div className="floating-card floating-card-two">
            <Cloud size={19} />
            <span>Cloud Computing</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="section-label">GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student passionate about Full Stack
              Web Development and Cloud Computing. I enjoy creating
              user-friendly websites, learning new technologies and
              developing practical solutions.
            </p>

            <p>
              My goal is to start my career in the IT industry as a
              developer, continuously improve my technical skills and
              contribute to real-world projects.
            </p>

            <a href="#contact" className="text-link">
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>03<span>+</span></h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>12<span>+</span></h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>∞</h3>
              <p>Learning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <span className="section-label">WHAT I WORK WITH</span>
          <h2>Technical <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <span className="section-label">MY RECENT WORK</span>
          <h2>Featured <span>Projects</span></h2>
          <p>Some projects that showcase my learning and development.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-number">0{index + 1}</span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight />
                </a>
              </div>

              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-bottom-link"
              >
                View Project <ExternalLink size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section certifications-section" id="certifications">
        <div className="section-heading">
          <span className="section-label">MY LEARNING JOURNEY</span>
          <h2>My <span>Certifications</span></h2>
          <p>Courses and certifications that support my technical growth.</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={cert.name}>
              <div className="certification-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{cert.name}</h3>
                <p>{cert.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading">
          <span className="section-label">MY JOURNEY & ACHIEVEMENTS</span>
          <h2>Education & <span>Achievements</span></h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">Undergraduate</span>
              <h3>B.Sc. Computer Science</h3>
              <p>Kongu Arts and Science College</p>
              <p className="timeline-description">
                Developing knowledge in programming, web technologies,
                computer science fundamentals and software development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Code2 />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">Leadership</span>
              <h3>Secretary – Cyber Crews Association '26</h3>
              <p>Kongu Arts and Science College</p>
              <p className="timeline-description">
                Serving as Secretary and contributing to association
                activities and student coordination.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">2025 & 2026</span>
              <h3>Academic Excellence Award</h3>
              <p>Received for two consecutive years</p>
              <p className="timeline-description">
                Recognized for academic excellence in 2025 and 2026.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Code2 />
            </div>

            <div className="timeline-content">
              <span className="timeline-date">Internship</span>
              <h3>Online Internship</h3>
              <p>Crackone Technologies</p>
              <p className="timeline-description">
                Gaining practical exposure and improving technical
                knowledge through internship learning.
              </p>
            </div>
          </div>
        </div>
      </section>

     
<section className="section contact-section" id="contact">
  <div className="contact-box">
    <span className="section-label">LET'S CONNECT</span>

    <h2>
      Have an opportunity?
      <br />
      <span>Let's talk.</span>
    </h2>

    <p>
      I'm interested in internships, fresher opportunities,
      collaborations and exciting development projects.
    </p>

    <a
      href="mailto:sujiththangaraj5650@gmail.com"
      className="primary-button"
    >
      Send Me an Email <Mail size={17} />
    </a>

    <div className="contact-socials">
      <a
        href="https://github.com/sujiththangaraj565"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/j-t-sujith-06754431b"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>
</section>


      <footer className="footer">
        <a href="#home" className="logo">
          SUJITH<span>.</span>
        </a>

        <p>Designed & built by Sujith J.T.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

export default App;
