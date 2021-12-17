import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// Component imports:
import Layout from "../components/layout";
import Header from "../components/header";
import WelcomeModal from "../components/welcomeModal";
import SocialMedia from "../components/socialMedia";

// Content Components for Rotating MiddleRow Div:
import Intro from "../components/intro";
import Tech from "../components/tech";
import About from "../components/about";
import Contact from "../components/contact";

// images and icons:
import { Spinner } from "@chakra-ui/spinner";

export default function Home({ value }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("home");
  //const [entered, setEntered] = useState(false);
  const [contentTransform, setContentTransform] = useState("0deg");
  const [show, setShow] = useState(true);
  const [icon, setIcon] = useState("none");
  // state items for managing user movement thru the site:
  const [contentHistory, setContentHistory] = useState([]);
  //const [currentStage, setCurrentStage] = useState(0);
  const changeStage = value.handleStageChange;
  const toggleEntered = value.handleEntered;
  const stage = value.stage;
  const entered = value.entered;
  // dropdown selection handler for content navigation:
  const handleNavChange = (e) => {
    setContent(e.target.value);
    changeStage();
    console.log("///Stage:", stage);
  };

  const handleBackNav = () => {
    const newContentHistory = contentHistory;
    const prevLocation = newContentHistory.splice(-2, 2);
    console.log("prevLoc:", prevLocation);
    setContent(prevLocation[0]);
    setContentHistory(newContentHistory);
  };

  const handleHomeNav = () => {
    setContent("home");
    console.log("HNC:", content);
  };

  // const handleEnterSite = () => {
  //   setTimeout(setEntered(true), 4000);
  // };

  // handles loading spinner:
  useEffect(() => {
    setLoading(false);
    console.log("------Stage:", stage);
  }, []);

  // controls rotation of 3D displayArea section and its internal div face elements:
  useEffect(() => {
    //setEntered(false);
    const currentContent = content;

    if (currentContent === "home") setContentTransform("0deg");
    if (currentContent === "projects") setContentTransform("-90deg");
    if (currentContent === "about") setContentTransform("-180deg");
    if (currentContent === "contact") setContentTransform("-270deg");
    const newContentHistory = contentHistory;
    newContentHistory.push(currentContent);
    setContentHistory(newContentHistory);
    console.log("AlienName:", contentHistory);
    console.log(content);
  }, [content]);

  // closes the welcome modal and sets entered to reflect that:
  const handleModalClose = () => {
    setShow(false);
    toggleEntered(true);
    console.log("Entered:", entered, "WORRRD");
  };

  // makes the top-right menu visible once modal closes
  const handleEntered = () => {
    if (entered) setIcon("menu");
    console.log("icon:", icon);
  };

  //// this needs more work, but should be an eventual feature:
  // const handleGoBack = () => {
  //   const previousContent = contentHistory;
  //   setContent(previousContent);
  // };

  useEffect(() => {
    handleEntered();
    // setContent("home");
    console.log("entered:", entered);
  }, [entered]);

  useEffect(() => {
    console.log("***CH***:", contentHistory);
  }, [contentHistory]);

  if (loading) return <Spinner color="white" />;

  return (
    <Layout>
      <main className={styles.container}>
        {stage > 0 ? (
          <></>
        ) : (
          <WelcomeModal onClose={handleModalClose} show={show} />
        )}

        {/* upper container houses header row */}
        <section className={styles.upperContainer}>
          <section className={styles.topRow}>
            <Header onClick={handleNavChange} icon={icon} />
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
                  <Intro onClick={handleNavChange} toProjects={changeStage} />
                </div>
                <div className={styles.sideBoxRight} onClick={changeStage}>
                  <Tech />
                </div>
                <div className={styles.backBox}>
                  <About onClick={handleNavChange} />
                </div>
                <div className={styles.sideBoxLeft}>
                  <Contact />
                </div>
                <div className={styles.topBox}>
                  <h3></h3>
                </div>
                <div className={styles.bottomBox}>
                  <h3></h3>
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
          </section>
          <section className={styles.bottomRow}>
            {entered ? (
              <>
                {" "}
                <button
                  className={styles.homeNavButton}
                  onClick={handleBackNav}
                >
                  Back
                </button>
                <button
                  className={styles.homeNavButton}
                  onClick={handleHomeNav}
                >
                  Home
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  className={styles.homeNavButton}
                  style={{ color: "grey" }}
                >
                  Back
                </button>
                <button
                  className={styles.homeNavButton}
                  style={{ color: "grey" }}
                >
                  Home
                </button>
              </>
            )}

            <SocialMedia />
          </section>
        </section>
      </main>
    </Layout>
  );
}
