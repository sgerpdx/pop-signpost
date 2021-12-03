import React from "react";
import styles from "../styles/SocialMedia.module.css";
import Image from "next/image";
import LogoTwitter from "../public/twitter-logo-white-32.png";
import LogoLinkedin from "../public/linkedin-logo-white-32.png";
import LogoGitHub from "../public/GitHub-Mark-Light-32px.png";

export default function SocialMedia() {
  return (
    <>
      <section className={styles.socialMediaArea}>
        <p>
          <a href="https://github.com/sgerpdx" target="_blank" rel="noreferrer">
            <Image src={LogoGitHub} alt="github logo" />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/sam-h-gerber/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={LogoLinkedin} alt="linkedin logo" />
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com/henrylightcode"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={LogoTwitter} alt="twitter logo" />
          </a>
        </p>
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