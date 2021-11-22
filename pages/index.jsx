import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PlanetImage from "../public/blue-planet-01.png";
import LogoTwitter from "../public/twitter-logo-white-32.png";
import LogoLinkedin from "../public/linkedin-logo-white-32.png";
import LogoGitHub from "../public/GitHub-Mark-Light-32px.png";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.topRow}>
        {" "}
        <figure>
          <Image
            src={PlanetImage}
            alt="image of planets in space"
            height="53"
            width="75"
          />
        </figure>
        <h1>hello : )</h1>
      </div>
      <div className={styles.middleRow}>
        <p>
          I'm Sam, and I build full-stack web and mobile applications. I'm
          currently working on this site -- here's my contact info + some links
          for the time being:
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
            <Image src={LogoLinkedin} alt="github logo" />
          </a>
        </p>
        <p>
          <a href="https://twitter.com/henrylightcode" target="_blank">
            <Image src={LogoTwitter} alt="github logo" />
          </a>
        </p>
      </div>
    </section>
  );
}
