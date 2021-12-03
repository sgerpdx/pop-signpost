import React from "react";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import SatelliteImage from "../public/satellite.png";

export default function Intro() {
  return (
    <>
      <section className={styles.introTextContainer}>
        <p className={styles.introTextArea}>
          Hello, and thanks for stopping by! I&apos;m a software developer
          building full-stack applications, exploring new tech based on each
          project&apos;s unique UX goals.
        </p>
        <Image
          alt="satellite illustration"
          height="48"
          width="48"
          src={SatelliteImage}
        />
        <p className={styles.introTextArea}>
          Have a look around, send me a message if you&apos;d like to
          collaborate, and have a nice day!
        </p>
      </section>
    </>
  );
}
