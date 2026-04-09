"use client";
import { useState } from "react";
import styles from "./page.module.css";

const PROJECTS = [
  {
    id: 1,
    title: "MGB Inventory System",
    category: "Internal Enterprise Solution",
    description: "Developed a mission-critical web application to digitize and manage bureau equipment and asset records for the Mines and Geosciences Bureau (MGB). Built search and filter functionality using JavaScript and SQL to speed up inventory lookups.",
    tags: ["JavaScript", "SQL", "PHP", "XAMPP"],
    status: "Active Use",
  },
  {
    id: 2,
    title: "Client Satisfaction Survey",
    category: "Web Portal & Security",
    description: "Built a secure web portal for MGB to automate feedback collection and data analysis. Integrated a Python-based facial recognition system for secure admin login and a real-time dashboard for performance trends.",
    tags: ["HTML5", "CSS3", "JavaScript", "Python"],
    status: "Active Use",
  },
  {
    id: 3,
    title: "Smart Assess",
    category: "Capstone Project",
    description: "A web-based examination system with automated scoring and result tracking. Designed and built for the University of Cagayan Valley to deliver a mobile-friendly interface across various screen sizes.",
    tags: ["PHP", "MySQL", "JavaScript", "Responsive Design"],
    status: "Completed",
  },
];

const SKILLS = [
  {
    title: "Web & Mobile",
    items: ["Next.js", "Flutter", "PHP", "Ionic"],
  },
  {
    title: "Backend & Data",
    items: ["FastAPI", "Node.js", "Firebase", "Neon (PostgreSQL)"],
  },
  {
    title: "AI & Security",
    items: ["Facial Recognition", "LLM Integration", "Network Intrusion Detection"],
  },
];

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  return (
    <main className={styles.mainContent}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.badge}>Graduating June 2026</div>
        <h1 className={styles.heroTitle}>
          Building <span className="gradient-text">Bespoke</span> <br />
          Full-Stack & AI Systems
        </h1>
        <p className={styles.heroSubtitle}>
          John Paul Gardoce — BSIT student bridging traditional enterprise 
          reliability with the frontier of interactive AI.
        </p>
        <div className={styles.heroActions}>
          <a href="#projects" className="btn-primary">View Solutions</a>
          <button onClick={() => setShowResume(true)} className={styles.btnSecondary}>View Resume</button>
        </div>
      </section>

      {/* Resume Modal */}
      {showResume && (
        <div className={styles.modalOverlay} onClick={() => setShowResume(false)}>
          <div className={`${styles.modalContent} glass-card`} onClick={e => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={() => setShowResume(false)}>&times;</button>
            
            <header className={styles.resumeHeader}>
              <h1 className="gradient-text">John Paul Gardoce</h1>
              <p className={styles.resumeSubtitle}>Junior Front-End Developer</p>
              <div className={styles.resumeContact}>
                <span>Solana, Cagayan, Philippines</span> | <span>+63 906 047 5183</span>
              </div>
            </header>

            <div className={styles.resumeBody}>
              <section className={styles.resumeSection}>
                <h3>Profile</h3>
                <p>Front-end developer with hands-on experience shipping real web applications for a government bureau. Comfortable building clean, responsive interfaces using HTML, CSS, and JavaScript. Currently finishing a BS in Information Technology at the University of Cagayan Valley.</p>
              </section>

              <div className={styles.resumeGrid}>
                <div className={styles.resumeMain}>
                  <section className={styles.resumeSection}>
                    <h3>Experience</h3>
                    <div className={styles.resumeItem}>
                      <h4>Client Satisfaction Survey — Web Portal</h4>
                      <p className={styles.resumeItemSub}>Mines and Geosciences Bureau (MGB) | Jan 2026 - Present</p>
                      <ul>
                        <li>Automated feedback collection and data analysis for MGB.</li>
                        <li>Integrated Python-based facial recognition for secure admin login.</li>
                        <li>Optimized for cross-browser compatibility and responsiveness.</li>
                      </ul>
                    </div>
                    <div className={styles.resumeItem}>
                      <h4>Inventory Tracking System — Internal Web App</h4>
                      <p className={styles.resumeItemSub}>Mines and Geosciences Bureau (MGB) | Jan 2026 - Present</p>
                      <ul>
                        <li>Digitized bureau equipment and asset records management.</li>
                        <li>Built search and filter using JavaScript and SQL for high-speed lookups.</li>
                        <li>Designed clean, easy-to-use admin dashboard for monitoring.</li>
                      </ul>
                    </div>
                  </section>
                </div>

                <div className={styles.resumeSide}>
                  <section className={styles.resumeSection}>
                    <h3>Skills</h3>
                    <div className={styles.resumeSkills}>
                      <span>HTML5 (Proficient)</span>
                      <span>CSS3 (Proficient)</span>
                      <span>JavaScript (Intermediate)</span>
                      <span>Python (Basic)</span>
                      <span>SQL (Basic)</span>
                      <span>Git (Basic)</span>
                    </div>
                  </section>
                  <section className={styles.resumeSection}>
                    <h3>Education</h3>
                    <p><strong>BS in Information Technology</strong></p>
                    <p>University of Cagayan Valley</p>
                    <p>2022 - 2026</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.subheading}>Portfolio Highlights</span>
          <h2 className={styles.sectionTitle}>Strategic Solutions</h2>
        </div>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={`${styles.projectCard} glass-card`}>
              <div className={styles.projectImagePlaceholder}>
                <div className={styles.projectCategory}>{project.category}</div>
                <h3 className="gradient-text">{project.title}</h3>
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectStatus}>{project.status}</div>
                <p>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${styles.section} ${styles.about}`}>
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutContent} glass-card`}>
            <span className={styles.subheading}>The Professional Bio</span>
            <h2 className={styles.sectionTitleLeft}>Bridging Eras of Code</h2>
            <p>
              By June 2026, I will transition from the University of Cagayan Valley to the professional tech landscape. 
              My tenure at the Mines and Geosciences Bureau (MGB) allowed me to build 
              real-world internal tools—from digitizing inventory to automating client feedback—effectively 
              bridging the gap between traditional IT and modern security-focused systems.
            </p>
          </div>
          <div className={`${styles.disciplineContent} glass-card`}>
            <span className={styles.subheading}>Work Ethic</span>
            <h2 className={styles.sectionTitleLeft}>Progressive Overload</h2>
            <p>
              I apply a fitness-first philosophy of "Progressive Overload" to technical systems. 
              Consistent, measurable growth in performance and complexity is the foundation of my coding—a reflection 
              of the discipline I maintain in lean-bulking and personal fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.subheading}>Technical Stack</span>
          <h2 className={styles.sectionTitle}>Expertise</h2>
        </div>
        <div className={styles.skillsGrid}>
          {SKILLS.map((cat) => (
            <div key={cat.title} className={`${styles.skillCard} glass-card`}>
              <h3>{cat.title}</h3>
              <div className={styles.skillList}>
                {cat.items.map(skill => (
                  <span key={skill} className={styles.skillItem}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={`${styles.contactForm} glass-card`}>
          <h2 className={styles.sectionTitle}>Ready for the Next Push?</h2>
          <p className={styles.contactIntro}>Available for innovative full-stack roles and AI research collaborations.</p>
          <form>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea placeholder="Discuss a project or opportunity..."></textarea>
            </div>
            <button type="submit" className={`btn-primary ${styles.wFull}`}>Initiate Connection</button>
          </form>
        </div>
      </section>
    </main>
  );
}
