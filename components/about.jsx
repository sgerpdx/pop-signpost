import React from "react";
// import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.aboutMeArea}>
        <p>Here is where I talk about myself, and include a photo.</p>
        <p>
          <a
            href="/gerber-sam_resume-current.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>Resume</button>
          </a>
        </p>
      </section>
    </>
  );
}
