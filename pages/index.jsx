import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// Header component for topRow:
import Header from "../components/header";

// Content Components for Rotating MiddleRow Div:
import Intro from "../components/intro";
//import Projects from./projectsts";
import Tech from "../components/tech";
import About from "../components/about";
import Contact from "../components/contact";
//import Navigation from "../components/navigation";
import SocialMedia from "../components/socialMedia";
import MainMenu from "../components/navigation/mainMenu";

// images and icons:
import { RiArrowGoBackLine } from "react-icons/ri";
import { RiHomeFill } from "react-icons/ri";
import { Spinner } from "@chakra-ui/spinner";

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

  if (loading) return <Spinner color="white" />;

  return (
    <main className={styles.container}>
      {/* upper container houses header row */}
      <section className={styles.upperContainer}>
        <section className={styles.topRow}>
          <Header onClick={handleNavChange} icon={"menu"} />
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
              <Tech />
            </div>
            <div className={styles.backBox}>
              <About />
            </div>
            <div className={styles.sideBoxLeft}>
              <Contact />
            </div>
          </div>
          <nav className={styles.lowerNavArea}>
            <RiArrowGoBackLine size="1.5em" />
          </nav>
        </section>
        <section className={styles.bottomRow}>
          <SocialMedia />

          {/* <Navigation onChange={handleNavChange} value={content} /> */}
        </section>
      </section>
    </main>
  );
}
