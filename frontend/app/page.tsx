import styles from "./page.module.css";

const PROJECTS = [
  {
    id: 1,
    title: "MGB Inventory System",
    category: "Internal Enterprise Solution",
    description: "A mission-critical PHP/MySQL system built for the Mines and Geosciences Bureau. Streamlined office workflows through integrated barcode scanning and optimized asset management.",
    tags: ["PHP", "SQL", "Barcode Integration"],
    status: "Active Use",
  },
  {
    id: 2,
    title: "Biometric Survey Portal",
    category: "Innovation & AI",
    description: "A cloud-hosted survey platform featuring advanced facial recognition for administrative authentication. Bridging user feedback with modern security protocols.",
    tags: ["Python", "Facial Recognition", "Cloud Hosting"],
    status: "Live Application",
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
          <a href="#contact" className={styles.btnSecondary}>Collaborate</a>
        </div>
      </section>

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
              By June 2026, I will transition from an honors IT student to a career architect. 
              My tenure at the Mines and Geosciences Bureau (MGB) allowed me to build 
              real-world internal tools that bridge the gap between traditional enterprise systems (PHP/SQL) 
              and modern AI-driven architectures (Python/FastAPI).
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
