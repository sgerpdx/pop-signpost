import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("home");
  const [contentTransform, setContentTransform] = useState("0deg");

  console.log("CCCCCC", content);
  console.log("TRNSFRM:", contentTransform);

  const handleNavChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log("Something just happened.");
    const currentContent = content;
    console.log("*********", currentContent);
    if (currentContent === "home") setContentTransform("0deg");
    if (currentContent === "projects") setContentTransform("-90deg");
    if (currentContent === "about") setContentTransform("-180deg");
    if (currentContent === "contact") setContentTransform("-270deg");
  }, [content]);

  if (loading) return <h3>Loading...</h3>;

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
        <div class={styles.selectionForm}>
          <label>
            Navigation:
            <select value={content} onChange={handleNavChange}>
              <option value="home">home</option>
              <option value="projects">projects</option>
              <option value="about">about</option>
              <option value="contact">contact</option>
            </select>
          </label>
        </div>
        <section
          className={styles.displayArea}
          style={{ transform: `rotateY(${contentTransform})` }}
        >
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
    width: "100px",
    height: "100px",
    transformStyle: "preserve-3d",
    transition: "transform 1s",
    transform: "rotateY(-90deg)",
    border: "0",
  },
  boxVantage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "80%",
    position: "absolute",
    backfaceVisibility: "hidden",
  },
};
