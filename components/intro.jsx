import React from "react";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import SatelliteImage from "../public/satellite.png";
import Link from "next/link";

export default function Intro({ onClick, toProjects }) {
  return (
    <>
      <section className={styles.introTextContainer}>
        <p className={styles.introTextArea}>
          I&apos;m a software developer building full-stack applications, Have a
          look around, send me a message if you&apos;d like to collaborate, and
          have a nice day :)
        </p>
        <div className={styles.introLinkArea}>
          <nav className={styles.linksLeft}>
            <button
              className={styles.introLinks}
              onClick={onClick}
              value="projects"
            >
              tech stack
            </button>

            <Link href="/projects" scroll={false} onClick={toProjects}>
              <button className={styles.introLinks} onClick={toProjects}>
                projects
              </button>
            </Link>
          </nav>
          <Image
            alt="satellite illustration"
            height="180"
            width="180"
            src={SatelliteImage}
          />
          <nav className={styles.linksRight}>
            <button
              className={styles.introLinks}
              onClick={onClick}
              value="about"
            >
              about
            </button>
            <button
              className={styles.introLinks}
              onClick={onClick}
              value="contact"
            >
              contact
            </button>
            <button className={styles.introLinks}>
              <a
                href="/gerber-sam_resume-current.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </button>
          </nav>
        </div>
      </section>
    </>
  );
}
