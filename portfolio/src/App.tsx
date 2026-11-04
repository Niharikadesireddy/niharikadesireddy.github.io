
import './App.css'

// ==========================================
// TECHNICAL SKILLS
// ==========================================

const skills = [
  {
    label: 'Generative AI & Agents',
    items:
      'LangGraph · LangChain · Amazon Bedrock · ReAct · Multi-Agent Systems · MCP · Tool Calling · Human-in-the-Loop',
  },
  {
    label: 'RAG & LLM Evaluation',
    items:
      'RAG · Azure AI Search · Hybrid Retrieval · Context Engineering · RAGAS · LangSmith · Prompt Optimization',
  },
  {
    label: 'Machine Learning',
    items:
      'Scikit-learn · XGBoost · Random Forest · Isolation Forest · SHAP · MLflow · Predictive Analytics',
  },
  {
    label: 'Programming & Full Stack',
    items:
      'Python · SQL · JavaScript · Django · Django REST Framework · FastAPI · React.js · REST APIs · Pydantic',
  },
  {
    label: 'Data Engineering & Cloud',
    items:
      'Pandas · NumPy · ETL · AWS · GCP · BigQuery · Bigtable · Pub/Sub · Dataflow · Azure AI Search',
  },
  {
    label: 'DevOps & Reliability',
    items:
      'Docker · Git · GitHub · CI/CD · Jenkins · pytest · CloudWatch · IAM · API Testing',
  },
]

// ==========================================
// PROFESSIONAL EXPERIENCE
// ==========================================

const experience = [
  {
    role: 'AI Engineer',
    organization: 'Prodapt',
    period: 'Mar 2025 — Present',
    domain: 'Telecommunications · Enterprise AI',
    points: [
      'Designed enterprise GenAI and agentic AI applications for telecom operations, ITSM, and procurement using Python, LangGraph, LangChain, Amazon Bedrock, and FastAPI.',
      'Built stateful agent workflows with ReAct reasoning, MCP-based tool integrations, enterprise RAG, human approval checkpoints, and structured response validation.',
      'Implemented LLM evaluation and monitoring using RAGAS, LangSmith, and CloudWatch, with a focus on retrieval quality, agent reliability, latency, and secure execution.',
    ],
    stack:
      'Python · LangGraph · LangChain · Bedrock · FastAPI · MCP · RAGAS',
  },
  {
    role: 'AI/ML Engineer',
    organization: 'Ford',
    period: 'Apr 2023 — Feb 2025',
    domain: 'Automotive · Predictive Machine Learning',
    points: [
      'Developed vehicle quality analytics workflows using Python, SQL, BigQuery, and connected-vehicle telemetry to prepare diagnostic and maintenance data for machine learning.',
      'Built classification and anomaly-detection models with Scikit-learn, XGBoost, Random Forest, and Isolation Forest to identify potential component failure patterns.',
      'Supported model experimentation with MLflow, explainability using SHAP, and FastAPI inference services for integrating predictions into internal applications.',
    ],
    stack:
      'Python · GCP · BigQuery · XGBoost · MLflow · SHAP · FastAPI',
  },
  {
    role: 'Software Engineer — AI/ML',
    organization: 'United Health Group',
    period: 'Oct 2021 — Dec 2022',
    domain: 'Healthcare · Forecasting & Analytics',
    points: [
      'Developed Python and SQL data pipelines to prepare historical admissions, discharge records, appointment activity, and healthcare utilization data for predictive modeling.',
      'Built and evaluated machine-learning models to forecast patient admissions, bed occupancy, and staffing demand using Scikit-learn, Random Forest, and XGBoost.',
      'Developed FastAPI-based prediction endpoints and supported operational dashboards, applying MAE, RMSE, and time-based validation to assess forecasting reliability.',
    ],
    stack:
      'Python · SQL · Pandas · Scikit-learn · XGBoost · FastAPI',
  },
  {
    role: 'Software Engineer',
    organization: 'Tata Consultancy Services',
    period: 'Jan 2020 — Sep 2021',
    domain: 'Financial Services · Python Full Stack',
    points: [
      'Developed a financial transaction analytics and reconciliation application using Python, React.js, and REST APIs to support transaction monitoring and payment discrepancy investigations.',
      'Built Python-based ETL and reconciliation workflows using SQL, Pandas, and NumPy to validate financial records, identify mismatched transactions, and generate reporting datasets.',
      'Integrated React components with backend APIs using Axios, implemented data filtering and validation, and created automated API and unit tests using pytest and Postman.',
    ],
    stack:
      'Python · React.js · SQL · Pandas · REST APIs · Axios · pytest',
  },
  {
    role: 'Software Developer Engineer',
    organization: 'DXC',
    period: 'Aug 2018 — Dec 2019',
    domain: 'E-commerce · Python Backend Development',
    points: [
      'Developed backend features for an e-commerce order management platform using Python and Django, supporting product catalogs, shopping carts, checkout validation, and order tracking.',
      'Built REST APIs with Django REST Framework and implemented inventory synchronization and reconciliation using Python, Django ORM, SQL, and MySQL.',
      'Improved product and order data processing through query optimization, scheduled Python scripts, Redis-based background tasks, and automated tests with pytest and unittest.',
    ],
    stack:
      'Python · Django · Django REST Framework · MySQL · Redis · pytest',
  },
  {
    role: 'Software Developer Engineer',
    organization: 'Neftex',
    period: 'Feb 2018 — Jul 2018',
    domain: 'Software Development · Backend Foundations',
    points: [
      'Developed and tested application modules using Python and SQL, implementing database operations, input validation, and backend functionality.',
      'Built REST endpoints and Python scripts for CSV processing, data cleaning, and validation, while contributing to frontend changes using HTML, CSS, and JavaScript.',
    ],
    stack:
      'Python · SQL · REST APIs · HTML · CSS · JavaScript · Git',
  },
]

// ==========================================
// EDUCATION
// ==========================================

const education = [
  {
    degree: 'Master of Science in Software Engineering',
    institution: 'DePaul University',
    location: 'United States',
  },
]

// ==========================================
// ARCHITECTURE DIAGRAM COMPONENT
// ==========================================

type ArchitectureProps = {
  title: string
  steps: string[]
}

function Architecture({ title, steps }: ArchitectureProps) {
  return (
    <div
      className="architecture"
      role="img"
      aria-label={`${title}: ${steps.join(' to ')}`}
    >
      <span className="architecture-title">{title}</span>

      <div className="architecture-flow" aria-hidden="true">
        {steps.map((step, index) => (
          <div className="flow-step-group" key={`${step}-${index}`}>
            <span className="flow-node">{step}</span>

            {index !== steps.length - 1 && (
              <span className="flow-arrow">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ==========================================
// MAIN PORTFOLIO
// ==========================================

function App() {
  return (
    <div className="site-shell">

      {/* NAVIGATION */}

      <header className="navigation">
        <a className="brand" href="#home">
          ND<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#work">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        {/* HERO WITH PROFILE PHOTO */}

        <section className="hero" id="home">
          <div className="eyebrow">
            AI/ML ENGINEER · PYTHON DEVELOPER
          </div>

          <h1>
            Making complex
            <br />
            ideas <em>work.</em>
          </h1>

          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-description">
                I'm Niharika, an AI/ML Engineer focused
                on building intelligent, reliable, and
                scalable AI systems. My work spans Generative
                AI, agentic workflows, and machine learning,
                with hands-on experience developing enterprise
                applications that bring together LLMs,
                retrieval systems, and real-world tools.
                I'm particularly interested in taking AI
                beyond experimentation and building systems
                that deliver meaningful impact in production.
              </p>

              <a className="text-link" href="#work">
                Explore selected work
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>

            <div className="hero-image-container">
              <img
                src="/profile_image.jpeg"
                alt="Portrait of Niharika Desireddi"
                className="hero-profile-image"
              />
            </div>
          </div>

          <div className="hero-footer">
            <span>NIHARIKA DESIREDDI</span>
            <span>AI · MACHINE LEARNING · SOFTWARE</span>
          </div>
        </section>

        {/* ABOUT */}

        <section className="about section" id="about">
          <div className="section-label">
            01 / ABOUT
          </div>

          <div>
            <h2>Beyond the model. Into the system.</h2>

            <p>
              Building an AI application is one thing.
              Making it reliable, explainable, and useful
              in real-world environments is where the
              interesting engineering begins.
            </p>

            <p>
              With over 8 years of experience in software
              engineering and AI/ML, my work today focuses
              on Generative AI and agentic systems, from
              designing LangGraph-based workflows and
              enterprise RAG pipelines to integrating models
              with APIs, knowledge bases, and business
              operations.
            </p>

            <p>
              I enjoy working through the difficult parts:
              getting agents to use the right tools,
              grounding their responses in trustworthy
              information, managing context across
              interactions, and evaluating whether
              the system actually works.
            </p>

            <p>
              I'm excited to continue working on advanced
              AI and machine learning systems, particularly
              in areas such as autonomous agents,
              multi-agent collaboration, and production-grade
              LLM applications, where there's still so much
              opportunity to innovate and solve meaningful
              problems.
            </p>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}

        <section className="section skills-section" id="skills">
          <div className="section-label">
            02 / TECHNICAL SKILLS
          </div>

          <div>
            <h2>Tools with a purpose.</h2>

            <div className="skills-list">
              {skills.map((group) => (
                <div className="skill-row" key={group.label}>
                  <h3>{group.label}</h3>
                  <p>{group.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section
          className="section experience-section"
          id="experience"
        >
          <div className="section-label">
            03 / EXPERIENCE
          </div>

          <div>
            <h2>Built through experience.</h2>

            <p className="section-intro">
              Engineering AI and machine-learning
              solutions across enterprise environments,
              with a strong foundation in Python
              and application development.
            </p>

            <div className="experience-list">
              {experience.map((job) => (
                <article
                  className="experience-item"
                  key={`${job.organization}-${job.role}`}
                >
                  <div className="experience-heading">
                    <div>
                      <h3>{job.role}</h3>

                      <span className="company">
                        {job.organization}
                      </span>

                      <div className="experience-domain">
                        {job.domain}
                      </div>
                    </div>

                    <span className="experience-period">
                      {job.period}
                    </span>
                  </div>

                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <p className="experience-stack">{job.stack}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section className="work section" id="work">
          <div className="section-label">
            04 / SELECTED WORK
          </div>

          <div className="work-content">
            <h2>Ideas put into practice.</h2>

            <div className="project-list">

              {/* FITCIRCLE */}

              <article className="project project-featured">
                <span className="project-number">01</span>

                <div className="project-main">
                  <div className="project-heading">
                    <h3>FitCircle</h3>

                    <span className="project-status">
                      PHASE 1 COMPLETE
                    </span>
                  </div>

                  <p>
                    FitCircle is a private, group-based
                    fitness and habit-accountability
                    web application designed to help
                    friends, families, and small
                    communities stay consistent with
                    their fitness goals through
                    shared participation and
                    personal accountability.
                  </p>

                  <p>
                    Developed the first working phase
                    using Next.js, React, TypeScript,
                    Tailwind CSS, Supabase, and PostgreSQL,
                    with AI-assisted development
                    through Cursor and Claude Code.
                  </p>

                  <p>
                    Implemented user authentication,
                    private fitness circles, unique
                    six-character invitation codes,
                    owner and member roles, and
                    responsive personal and circle dashboards.
                  </p>

                  <p>
                    Secured group operations with
                    Supabase authentication and PostgreSQL
                    Row-Level Security policies.
                    Tested circle creation, invitations,
                    joining, and membership visibility
                    using two independent authenticated
                    accounts.
                  </p>

                  <Architecture
                    title="FITCIRCLE / IMPLEMENTED PHASE 1"
                    steps={[
                      'Next.js + React UI',
                      'Server Actions',
                      'Supabase Auth',
                      'PostgreSQL + RLS',
                    ]}
                  />

                  <div className="project-details">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Tailwind CSS</span>
                    <span>Supabase</span>
                    <span>PostgreSQL</span>
                    <span>RLS</span>
                    <span>Claude Code</span>
                    <span>Cursor</span>
                  </div>

                  <p className="project-note">
                    Phase 1: Authentication and private
                    circles completed and tested.
                    Planned next: daily habits,
                    check-ins, XP, streaks,
                    challenges, and leaderboards.
                  </p>

                  <p className="project-note">
                    Source code is currently private
                    and not available as a public
                    GitHub repository.
                  </p>
                </div>

                <span className="project-type">
                  Full Stack / Fitness
                </span>
              </article>

              {/* RELIABLE KNOWLEDGE AGENT */}

              <article className="project project-featured">
                <span className="project-number">02</span>

                <div className="project-main">
                  <div className="project-heading">
                    <h3>Reliable Knowledge Agent</h3>

                    <span className="project-status">
                      PLANNED PROJECT
                    </span>
                  </div>

                  <p>
                    A proposed production-oriented
                    AI agent designed to retrieve
                    technical knowledge, answer questions
                    with supporting sources, safely
                    invoke external tools, and handle
                    failures through validation and
                    human review.
                  </p>

                  <Architecture
                    title="PROPOSED AGENT ARCHITECTURE"
                    steps={[
                      'User Query',
                      'Hybrid RAG',
                      'LangGraph Agent',
                      'Tool Validation',
                      'Cited Response',
                    ]}
                  />

                  <div className="project-details">
                    <span>Python</span>
                    <span>LangGraph</span>
                    <span>FastAPI</span>
                    <span>RAG</span>
                    <span>Pydantic</span>
                    <span>RAGAS</span>
                    <span>LangSmith</span>
                  </div>

                  <p className="project-note">
                    Planned features include document
                    ingestion, hybrid retrieval,
                    conditional agent routing,
                    source-grounded responses,
                    human approval checkpoints,
                    observability, and automated evaluation.
                  </p>
                </div>

                <span className="project-type">
                  Agentic AI / RAG
                </span>
              </article>

            </div>
          </div>
        </section>

        {/* EDUCATION - MASTERS ONLY */}

        <section
          className="section education-section"
          id="education"
        >
          <div className="section-label">
            05 / EDUCATION
          </div>

          <div>
            <h2>Foundations that shaped my work.</h2>

            <div className="education-list">
              {education.map((item) => (
                <article
                  className="education-item"
                  key={item.institution}
                >
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <span>{item.location}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="contact section" id="contact">
          <div className="section-label">
            06 / CONNECT
          </div>

          <div>
            <h2>Let's build something meaningful.</h2>

            <p>
              I'm interested in intelligent software,
              AI engineering, and thoughtful
              collaborations that turn technical
              possibilities into useful solutions.
            </p>

            <div className="contact-links">
              <a
                className="text-link"
                href="https://github.com/Niharikadesireddy"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                className="text-link"
                href="mailto:desireddiniharika1@gmail.com"
              >
                Email ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Niharika Desireddi
        </span>

        <span>Designed with intention.</span>
      </footer>

    </div>
  )
}

export default App
