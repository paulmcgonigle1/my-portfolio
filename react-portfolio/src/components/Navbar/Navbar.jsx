import React, { useState } from "react";
// import menuIcon from "/public/assets/nav/menuIcon.png";
// import closeIcon from "/public/assets/nav/closeIcon.png";
import styles from "./Navbar.module.css";

// import { getImageUrl } from "../../utils";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          // src={menuOpen ? closeIcon : menuIcon}
          src="/assets/nav/menuIcon.png"
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          onClick={() => setMenuOpen(false)}
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#references">References</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
