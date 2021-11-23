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
            <button>Resume</button>
          </a>
        </p>
      </div>
      <nav>
        <div className={styles.rotated}>
          <span>spin</span>
        </div>
        <div class={styles.selectionForm}>
          <label>Choose Rotation</label>
          <select>
            <option>rotate3d(0, 1, 0, 0deg)</option>
            <option>rotate3d(0, 1, 0, 90deg)</option>
            <option>rotate3d(0, 1, 0, 180deg)</option>
            <option>rotate3d(0, 1, 0, 270deg)</option>
          </select>
        </div>
        <section style={style.displayArea}>
          <div className={styles.frontBox} style={style.boxVantage}>
            1
          </div>
          <div className={styles.sideBoxRight} style={style.boxVantage}>
            2
          </div>
          <div className={styles.backBox} style={style.boxVantage}>
            3
          </div>
          <div className={styles.sideBoxLeft} style={style.boxVantage}>
            4
          </div>
        </section>
      </nav>
    </section>
  );
}

const style = {
  displayArea: {
    width: "80px",
    height: "80px",

    transformStyle: "preserve-3d",
    transition: "transform 2s",
    transform: "rotateY(0deg)",
  },
  boxVantage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
  },
};
