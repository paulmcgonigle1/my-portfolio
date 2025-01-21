import React from "react";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";
import styles from "./About.module.css";

function About() {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img src={aboutImage} alt="me sitting with laptop" />
        <ul>
          <li>
            <img src={cursorIcon} alt="cursor Icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                Im a frontend developer with experience in responsive and
                optiimized sites
              </p>
            </div>
          </li>
          <li>
            <img src={serverIcon} alt="server Icon" />
            <div>
              <h3>Backend Developer</h3>
              <p>
                I have expereince developing fast and optimised backend systems
              </p>
            </div>
          </li>
          <li>
            <img src={uiIcon} alt="UI Icon" />
            <div>
              <h3>.NET Developer</h3>
              <p>
                I have loads of expertise in working with .NET, ASP.NET CORE,
                Entity Framework etc
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
