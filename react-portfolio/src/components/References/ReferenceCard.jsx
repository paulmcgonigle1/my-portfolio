import React from "react";
import styles from "./ReferenceCard.module.css";

function ReferenceCard({ reference }) {
  const {
    role,
    organisation,
    manager,
    reference: refText,
    imageSrc,
    referenceSrc,
  } = reference;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.front}>
          <p className={styles.organisation}>{organisation}</p>
          <img src={imageSrc} alt={`${manager}`} className={styles.image} />
          <p className={styles.manager}>Manager: {manager}</p>
        </div>
        <div className={styles.back}>
          <p className={styles.organisation}>{organisation}</p>

          <p className={styles.reference}>
            {" "}
            "{refText.length > 150 ? `${refText.slice(0, 300)}...` : refText}"
          </p>
          <a
            href={referenceSrc || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            style={{
              opacity: referenceSrc ? 1 : 0.5,
              pointerEvents: referenceSrc ? "auto" : "none",
            }}
          >
            {referenceSrc
              ? "Full Reference on Google Drive"
              : "No Reference Available"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReferenceCard;
