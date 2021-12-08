import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// Header component for topRow:
import Header from "../components/header";
import WelcomeModal from "../components/welcomeModal";
//import { useDisclosure } from "@chakra-ui/react";

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
  const [entered, setEntered] = useState(false);
  const [contentTransform, setContentTransform] = useState("0deg");
  const [show, setShow] = useState(true);
  const [interfaceStage, setInterfaceStage] = useState(0);
  //state for chakra-uimodal:
  //const { isOpen, onOpen, onClose } = useDisclosure();

  // dropdown selection handler for content navigation:
  const handleNavChange = (e) => {
    setContent(e.target.value);
  };

  const handleEnterSite = () => {
    setEntered(true);
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

  const handleModalClose = () => {
    setShow(false);
    setInterfaceStage(1);
  };

  if (loading) return <Spinner color="white" />;

  //if (interfaceStage === 0)
  //return <WelcomeModal onClose={handleModalClose} show={show} />;

  return (
    <main className={styles.container}>
      <WelcomeModal onClose={handleModalClose} show={show} />
      {/* upper container houses header row */}
      <section className={styles.upperContainer}>
        <section className={styles.topRow}>
          <Header onClick={handleNavChange} icon={"menu"} />
        </section>
      </section>

      {/* lower container houses the content and nav menu in flex-row-wrap */}
      <section className={styles.lowerContainer}>
        <section className={styles.middleRow}>
          {entered ? (
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
              <div className={styles.topBox}>
                <h3>TOP</h3>
              </div>
              <div className={styles.bottomBox}>
                <h3>BOTTOM</h3>
              </div>
            </div>
          ) : (
            <div
              className={styles.displayArea}
              style={{
                transform:
                  "rotate3d(1, 1, 0, -60deg) scaleX(0.5) scaleY(0.5) scaleZ(0.5)",
              }}
            >
              <div className={styles.frontBox}></div>
              <div className={styles.sideBoxRight}></div>
              <div className={styles.backBox}></div>
              <div className={styles.sideBoxLeft}></div>
              <div className={styles.topBox}></div>
              <div className={styles.bottomBox}></div>
            </div>
          )}
          <nav className={styles.lowerNavArea}>
            <RiArrowGoBackLine size="1.5em" />
          </nav>
        </section>
        <section className={styles.bottomRow}>
          <SocialMedia />

          {/* <Navigation onChange={handleNavChange} value={content} /> */}
          <button onClick={handleEnterSite}>Enter Site</button>
        </section>
      </section>
    </main>
  );
}
