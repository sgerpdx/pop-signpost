import React from "react";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import LogoTwitter from "../public/twitter-logo-white-32.png";
import LogoLinkedin from "../public/linkedin-logo-white-32.png";
import LogoGitHub from "../public/GitHub-Mark-Light-32px.png";

export default function Intro() {
  return (
    <>
      <section className={styles.introTextArea}>
        <p>Welcome to my site!</p>
      </section>
      <section className={styles.socialMediaArea}>
        <p>
          <a href="https://github.com/sgerpdx" target="_blank">
            <Image src={LogoGitHub} alt="github logo" />
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/sam-h-gerber/" target="_blank">
            <Image src={LogoLinkedin} alt="linkedin logo" />
          </a>
        </p>
        <p>
          <a href="https://twitter.com/henrylightcode" target="_blank">
            <Image src={LogoTwitter} alt="twitter logo" />
          </a>
        </p>
        <p>
          <a href="/gerber-sam_resume-current.pdf" target="_blank">
            <button>Resume</button>
          </a>
        </p>
      </section>
    </>
  );
}
