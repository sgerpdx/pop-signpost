import React from "react";
import Image from "next/image";
import styles from "../styles/Intro.module.css";

export default function Intro() {
  return (
    <>
      <section className={styles.introTextArea}>
        <p>Welcome to my site!</p>
      </section>
    </>
  );
}
