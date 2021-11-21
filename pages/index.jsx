import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PlanetImage from "../public/space.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src={PlanetImage}
        alt="image of planets in space"
        height="64"
        width="64"
      />
      <h1>hello : )</h1>
      <p>
        I'm Sam, and I build full-stack web and mobile applications. I'm
        currently working on this site -- here's my contact info + some links
        for the time being:
      </p>
      <p>
        <a href="https://github.com/sgerpdx">GitHub</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/sam-h-gerber/">Linkedin</a>
      </p>
      <p>
        <a href="https://twitter.com/henrylightcode">Twitter</a>
      </p>
    </div>
  );
}
