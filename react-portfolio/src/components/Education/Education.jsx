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

          <div className={styles.yearSection}>
            <h4>Program Highlights:</h4>
            <ul className={styles.highlights}>
              <li>
                Comprehensive full-stack development curriculum equivalent to a
                US Computer Science degree
              </li>
              <li>
                Advanced coursework in AI, Machine Learning, and Data Analytics
              </li>
              <li>
                Industry-focused practical training with real-world projects
              </li>
              <li>
                Part of the only Irish university team to win Microsoft World
                Imagine Cup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
