import React from "react";
import styles from "./Education.module.css";

function Education() {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <div className={styles.educationCard}>
          <h3>Atlantic Technological University</h3>
          <p className={styles.duration}>September 2020 – May 2024</p>
          <h4>Bachelor of Science (Honors) in Software Development</h4>
          <p className={styles.subtitle}>
            Major: Computer Software Engineering
          </p>
          <p className={styles.gpa}>
            GPA Equivalent: 3.7-4.0 (First Class Honours in Ireland)
          </p>

          <div className={styles.highlightsSection}>
            <h4>Program Highlights:</h4>
            <div className={styles.carouselContainer}>
              <div className={styles.carousel}>
                <div className={styles.carouselItem}>
                  <h5>International Experience</h5>
                  <p>
                    6-Month Internship in Barcelona – Worked in an AI and
                    photonics solutions company, collaborating on full-stack
                    applications using Python, Angular, Elasticsearch, Node.js,
                    and LangChain in a fast-paced, research-driven environment.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h5>Hands-on Development</h5>
                  <p>
                    Over four years of real-world project work, building
                    full-stack applications, cloud-deployed services, and
                    AI-powered solutions with technologies like C#, .NET Core,
                    React, Django, AWS, and Node.js.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h5>Enterprise Development</h5>
                  <p>
                    Designed and developed large-scale, multi-tier applications,
                    leveraging modern JavaScript frameworks (React, Angular) and
                    robust backend architectures with .NET Core and Python
                    Django.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h5>Web & API Expertise</h5>
                  <p>
                    Built and deployed scalable RESTful APIs and microservices,
                    integrating SQL/NoSQL databases, cloud storage, and
                    serverless computing.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h5>.NET Core Mastery</h5>
                  <p>
                    Developed enterprise-level C# .NET Core applications,
                    focusing on multi-threading, dependency injection,
                    asynchronous programming, and cloud integration.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h5>Cloud & DevOps</h5>
                  <p>
                    Hands-on experience with AWS (Lambda, S3, DynamoDB, IAM),
                    Docker, Kubernetes, and CI/CD pipelines, ensuring scalable
                    and efficient deployment.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h5>Agile Methodologies</h5>
                  <p>
                    Worked in collaborative, Agile environments, using Scrum,
                    Kanban, and Git-based version control to drive efficient
                    software development cycles.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h5>Quality & Security</h5>
                  <p>
                    Applied test-driven development (TDD), unit testing, and
                    secure coding practices, along with penetration testing,
                    cryptography, and security best practices.
                  </p>
                </div>
              </div>
              <div className={styles.carouselNav}>
                <button
                  className={styles.prevBtn}
                  onClick={() =>
                    document
                      .querySelector(`.${styles.carousel}`)
                      .scrollBy({ left: -300, behavior: "smooth" })
                  }
                >
                  ←
                </button>
                <button
                  className={styles.nextBtn}
                  onClick={() =>
                    document
                      .querySelector(`.${styles.carousel}`)
                      .scrollBy({ left: 300, behavior: "smooth" })
                  }
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
