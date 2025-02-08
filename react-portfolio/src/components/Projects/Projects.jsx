import React from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
function Projects() {
  console.log("Projects data:", projects);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          if (!project) {
            console.error(`Project at index ${id} is undefined.`);
            return null; // Skip rendering this project
          }
          console.log(`Rendering project ${id}:`, project);
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
