import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  if (!project) {
    console.error("Project data is missing or undefined.");
    return null; // Return nothing or a fallback UI if project is undefined
  }

  // Destructure only after ensuring project exists
  const { title, imageSrc, description, skills, source } = project;

  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {/* Uncomment the demo link if it's needed */}
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
