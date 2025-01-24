import React from "react";
// import aboutImage from "../public/assets/about/aboutImage.png";
// import cursorIcon from "../../assets/about/cursorIcon.png";
// import serverIcon from "../../assets/about/serverIcon.png";
// import thumbsUp from "../../assets/about/thumbsUp.png";
// import avatar2 from "../../assets/about/avatar2.png";

// import uiIcon from "../../assets/about/uiIcon.png";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src="/assets/about/avatar2.png"
          alt="me sitting with laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                As a full-stack developer, I build end-to-end solutions with a
                focus on scalability, performance, and seamless user
                experiences. I work with a variety of technologies, including
                React, Python, Node.js, and AWS to bring projects to life from
                concept to deployment.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>.NET Developer</h3>
              <p>
                I have extensive experience with .NET, ASP.NET Core, and Entity
                Framework, creating efficient, enterprise-level applications
                with a strong focus on clean code and maintainability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>About Me</h3>
              <p>
                I’m a social guy who thrives on collaboration and building
                strong connections, both in the tech world and beyond. When I’m
                not coding, you’ll find me traveling 🌍, catching waves as a
                certified lifeguard 🏄‍♂️, or exploring new hobbies and adventures.
                Always open to a good conversation—let’s chat!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
