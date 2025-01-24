import React from "react";
import styles from "./ReferenceCard.module.css";

function ReferenceCard({ reference }) {
  const {
    role,
    organisation,
    manager,
    reference: refText,
    imageSrc,
  } = reference;

  return (
    <div className={styles.card}>
      <p className={styles.organisation}>{organisation}</p>

      <img src={imageSrc} alt={`${manager}`} className={styles.image} />
      {/* <h3 className={styles.role}>{role}</h3> */}
      <p className={styles.manager}>Manager: {manager}</p>
      <p className={styles.reference}>"{refText}"</p>
    </div>
  );
}

export default ReferenceCard;
