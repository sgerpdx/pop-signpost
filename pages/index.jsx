import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

// Header component for topRow:
import Header from "../components/header";

// Content Components for Rotating MiddleRow Div:
import Intro from "../components/intro";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Navigation from "../components/navigation";
import SocialMedia from "../components/socialMedia";

// images and icons:
import { RiArrowGoBackLine } from "react-icons/ri";
import { RiHomeFill } from "react-icons/ri";

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
      {/* upper container houses header row */}
      <section className={styles.upperContainer}>
        <section className={styles.topRow}>
          <Header onClick={handleNavChange} />
        </section>
      </section>

      {/* lower container houses the content and nav menu in flex-row-wrap */}
      <section className={styles.lowerContainer}>
        <section className={styles.middleRow}>
          <div
            className={styles.displayArea}
            style={{ transform: `rotateY(${contentTransform})` }}
          >
            <div className={styles.frontBox}>
              <Intro />
            </div>
            <div className={styles.sideBoxRight}>
              <Projects />
            </div>
            <div className={styles.backBox}>
              <About />
            </div>
            <div className={styles.sideBoxLeft}>
              <Contact />
            </div>
          </div>
          <RiArrowGoBackLine size="1.5em" />
          <RiHomeFill size="1.5em" />
        </section>
        <section className={styles.bottomRow}>
          <SocialMedia />

          {/* <Navigation onChange={handleNavChange} value={content} /> */}
        </section>
      </section>
    </main>
  );
}
