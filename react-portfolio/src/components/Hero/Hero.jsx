import React from "react";
import hero from "../../assets/hero/hero.png";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section>
      <div>
        <h1>Hi, I'm Paul</h1>
        <p>
          I'm a full stack developerwith over 4 years of practical experience,
          mainly in Full-stack development with framworks like React, but also
          with knowledge of cloud , .NET and much more. Reach out if youd like
          to learn more,
        </p>
        <a href="mailto:pgonigle57@gmail.com">Contact Me</a>
      </div>
      <img src={hero} alt="heroimg"></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
