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
          I'm a full stack developerwith over 4 years of practical experience,
          mainly in Full-stack development with framworks like React, but also
          with knowledge of cloud , .NET and much more. Reach out if youd like
          to learn more,
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
