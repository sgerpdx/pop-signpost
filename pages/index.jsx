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

  // dropdown selection handler for content navigation:
  const handleNavChange = (e) => {
    setContent(e.target.value);
  };

  // handles loading spinner:
  useEffect(() => {
    setLoading(false);
  }, []);

  // controls rotation of 3D displayArea section and its internal div face elements:
  useEffect(() => {
    const currentContent = content;
    if (currentContent === "home") setContentTransform("0deg");
    if (currentContent === "projects") setContentTransform("-90deg");
    if (currentContent === "about") setContentTransform("-180deg");
    if (currentContent === "contact") setContentTransform("-270deg");
  }, [content]);

  if (loading) return <h3>Loading...</h3>;

  return (
    <main className={styles.container}>
      <section className={styles.topRow}>
        {" "}
        <div className={styles.logoImageArea}>
          <Image
            src={PlanetImage}
            alt="logo image of a blue planet with golden-brown ring"
            height="53"
            width="75"
          />
        </div>
        <div className={styles.headlineTextArea}>
          <h1>hello : )</h1>
        </div>
        <div className={styles.upperRightArea}></div>
      </section>
      <section className={styles.middleRow}>
        <div
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
        </div>
      </section>
      <section className={styles.bottomRow}>
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
    </main>
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
