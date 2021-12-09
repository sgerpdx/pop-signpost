import React from "react";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import SatelliteImage from "../public/satellite.png";

export default function Intro() {
  return (
    <>
      <section className={styles.introTextContainer}>
        <p className={styles.introTextArea}>
          I&apos;m a software developer building full-stack applications, Have a
          look around, send me a message if you&apos;d like to collaborate, and
          have a nice day!
        </p>
        <div className={styles.introLinkArea}>
          <nav className={styles.linksLeft}>
            <p className={styles.introLinks}>tech stack</p>
            <p className={styles.introLinks}>projects</p>
          </nav>
          <Image
            alt="satellite illustration"
            height="180"
            width="180"
            src={SatelliteImage}
          />
          <nav className={styles.linksLeft}>
            <p className={styles.introLinks}>about</p>
            <p className={styles.introLinks}>contact</p>
            <p className={styles.introLinks}>resume</p>
          </nav>
        </div>
      </section>
    </>
  );
}
