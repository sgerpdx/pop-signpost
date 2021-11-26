import React from "react";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <section className={styles.projectScrollArea}>
        <p className={styles.contentScrollArea}>
          Here is where project info can be scrolled through.
        </p>
      </section>
    </>
  );
}
