import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Personal Logo:
import PlanetImage from "../public/blue-planet-01.png";

// Content Components for Rotating MiddleRow Div:
import Intro from "../components/intro";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("home");
  const [contentTransform, setContentTransform] = useState("0deg");

  const handleNavChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const currentContent = content;
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
        <section
          className={styles.displayArea}
          style={{ transform: `rotateY(${contentTransform})` }}
        >
          <div className={styles.frontBox} style={style.boxVantage}>
            <Intro />
          </div>
          <div className={styles.sideBoxRight} style={style.boxVantage}>
            <Projects />
          </div>
          <div className={styles.backBox} style={style.boxVantage}>
            <About />
          </div>
          <div className={styles.sideBoxLeft} style={style.boxVantage}>
            <Contact />
          </div>
        </section>
      </div>
      <div className={styles.bottomRow}>
        <h3>bottom row</h3>
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
      </nav>
    </section>
  );
}

const style = {
  boxVantage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
  },
};
