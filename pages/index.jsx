import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import PlanetImage from "../public/blue-planet-01.png";
import LogoTwitter from "../public/twitter-logo-white-32.png";
import LogoLinkedin from "../public/linkedin-logo-white-32.png";
import LogoGitHub from "../public/GitHub-Mark-Light-32px.png";
import ResumeIcon from "../public/demo-hex_YP.png";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.topRow}>
        {" "}
        <figure>
          <Image
            src={PlanetImage}
            alt="logo image of a blue planet with golden-brown ring"
            height="53"
            width="75"
          />
        </figure>
        <h1>hello : )</h1>
      </div>
      <div className={styles.middleRow}>
        <p>
          I'm Sam, and I build full-stack web and mobile applications with a
          focus on inspiring, accessible UX. I enjoy opportunities to explore
          project-based solutions, and add new languages and tech to my primary
          React-Node-SQL stack.
        </p>
        <p>
          My full site is currently under construction -- below is an info
          navigator, along with some links and a contact form. Have a nice day!
        </p>
      </div>
      <div className={styles.bottomRow}>
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
            <Image
              src={ResumeIcon}
              alt="clickable icon to open resume in new tab"
            />
          </a>
        </p>
      </div>
    </section>
  );
}
