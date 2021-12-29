import React from "react";
import styles from "../styles/SocialMedia.module.css";
import Image from "next/image";
//image static imports:
import LogoTwitter from "../public/twitter.png";
//import TwitterWhite from '../public/twitter-white.png';
import LogoLinkedin from "../public/linkedin.png";
//import LinkedinWhite from '../public/linkedin-white.png';
import LogoGitHub from "../public/github.png";
//import GithubWhite from '../public/github-white.png';

export default function SocialMedia() {
  return (
    <>
      <section className={styles.extLinkArea}>
        <div className={styles.socialMediaArea}>
          <p>
            <a
              href="https://github.com/sgerpdx"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={LogoGitHub}
                alt="github logo"
                width="48"
                height="48"
              />
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/sam-h-gerber/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={LogoLinkedin}
                alt="linkedin logo"
                width="48"
                height="48"
              />
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/henrylightcode"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={LogoTwitter}
                alt="twitter logo"
                width="48"
                height="48"
              />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
