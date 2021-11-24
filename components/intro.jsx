import React from "react";
import styles from "../styles/Intro.module.css";
import LogoTwitter from "../public/twitter-logo-white-32.png";
import LogoLinkedin from "../public/linkedin-logo-white-32.png";
import LogoGitHub from "../public/GitHub-Mark-Light-32px.png";

export default function Intro() {
  return (
    <>
      <section className={styles.introTextArea}>
        <p>
          I'm Sam, thanks for stopping by! I build full-stack applications with
          a focus on inspiring, accessible UX and I enjoy opportunities to
          explore project-based solutions, adding new languages and tech to my
          primary React-Node-SQL stack.
        </p>
        <p>
          While my full site here is under construction, you can check out
          projects, contact info and more using the menu below. Have a nice day!
        </p>
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
