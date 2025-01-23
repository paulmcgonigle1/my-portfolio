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
          👋 Welcome! I’m a Software Engineer from Ireland 🇮🇪, now in Austin and
          eager to dive into the tech scene. With a First Class Honours degree
          in Software Development and expertise in full-stack, backend, and AI,
          I’m passionate about creating impactful solutions. Whether it's
          crafting AI apps like Mindscribe or building cloud systems, I bring
          ideas to life with a team-focused approach and a knack for
          communication.
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
