import React from "react";

import email from "/assets/contact/email.png";
import linkedIn from "/assets/contact/linkedIn.png";
import github from "/assets/contact/github.png";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email Icon" />
          <a href="mailto:pgonigle57@gmail.com">pgonigle57@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedIn} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/paul-mcgonigle21/">
            linkedIn.com/paul-mcgonigle21
          </a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github Icon" />
          <a href="https://github.com/paulmcgonigle1">
            github.com/paulmcgonigle1
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
