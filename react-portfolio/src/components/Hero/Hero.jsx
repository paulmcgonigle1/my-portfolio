import React from "react";
import mehawaii from "../../assets/hero/mehawaii.png";
import avatar1 from "../../assets/hero/avatar1.png";

import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Paul</h1>
        <p className={styles.description}>
          I'm a Software Engineer fresh off the boat from Ireland 🇮🇪 and ready
          to make waves in Austin’s tech scene! With a First Class Honours
          degree in Software Development and a passion for building innovative
          solutions, I specialize in full-stack development, backend
          engineering, and AI. From crafting AI-powered apps like Mindscribe AI
          to building cloud-based systems, I love turning big ideas into
          impactful projects. Plus, with 7+ years in hospitality, I bring
          teamwork and communication to the forefront of every challenge.
        </p>
        <a className={styles.contactBtn} href="mailto:pgonigle57@gmail.com">
          Contact Me
        </a>
      </div>
      <img src={avatar1} alt="heroimg" className={styles.heroImg}></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
