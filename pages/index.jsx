import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

// Component imports:
import Layout from "../components/layout";
import Header from "../components/header";
import WelcomeModal from "../components/welcomeModal";
import SocialMedia from "../components/socialMedia";
//import Background from "../components/background";

// Content Components for Rotating MiddleRow Div:
import Intro from "../components/intro";
import Tech from "../components/tech";
import About from "../components/about";
import Contact from "../components/contact";

// images and icons:
import AsteroidImage from "../public/asteroid-blue.png";
import { Spinner } from "@chakra-ui/spinner";
import { TiArrowBack } from "react-icons/ti";
import { TiHome } from "react-icons/ti";

export default function Home({ value }) {
  const [loading, setLoading] = useState(true);

  ////
  // specifies which face of the cube is visible:
  const [content, setContent] = useState("home");
  // implements cube rotation:
  const [contentTransform, setContentTransform] = useState("0deg");
  // toggles WelcomeModal on/off:
  const [show, setShow] = useState(true);
  // controls visibility of upper-right menu icon:
  const [icon, setIcon] = useState("none");
  // state items for managing user movement thru the site:
  const [contentHistory, setContentHistory] = useState([]);
  // image variable for NASA API:
  const [spaceImage, setSpaceImage] = useState(AsteroidImage);

  //// props passed down from _app:
  // tracks number of modal/component/page changes:
  const stage = value.stage;
  const changeStage = value.handleStageChange;
  // tracks loading of main content when modal closes;
  const entered = value.entered;
  const toggleEntered = value.handleEntered;

  // dropdown selection handler for content navigation:
  const handleNavChange = (e) => {
    setContent(e.target.value);
    changeStage();
  };

  // state management for the 'back arrow' button:
  const handleBackNav = () => {
    const newContentHistory = contentHistory;
    const prevLocation = newContentHistory.splice(-2, 2);
    setContent(prevLocation[0]);
    setContentHistory(newContentHistory);
    changeStage();
  };

  // state management for the 'return home' button:
  const handleHomeNav = () => {
    setContent("home");
    changeStage();
  };

  // handles loading spinner:
  useEffect(async () => {
    setLoading(false);
    // on page load, we grab today's space image and set to state:
    const currentSpaceImage = await getAstronomyImage();
    setSpaceImage(`${currentSpaceImage}`);
  }, []);

  // controls rotation of 3D displayArea section and its internal div face elements:
  useEffect(async () => {
    const currentContent = content;

    const currentSpaceImage = await getAstronomyImage();
    console.log("CSI:", currentSpaceImage);
    //
    // rotate cube based on selection:
    if (currentContent === "home") setContentTransform("0deg");
    if (currentContent === "tech") setContentTransform("-90deg");
    if (currentContent === "about") setContentTransform("-180deg");
    if (currentContent === "contact") setContentTransform("-270deg");
    const newContentHistory = contentHistory;
    newContentHistory.push(currentContent);
    setContentHistory(newContentHistory);
    console.log("CONTENT:", currentContent);
  }, [content]);

  // closes the welcome modal and sets entered to reflect that:
  const handleModalClose = () => {
    setShow(false);
    toggleEntered(true);
  };

  // makes the top-right menu visible once modal closes
  const handleEntered = () => {
    if (entered) setIcon("menu");
  };

  // fetch to NASA apod API:
  const getAstronomyImage = async () => {
    try {
      let response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=JR7SwqZcBESMd8ibY2aSXQNRfuQ6qDS11ojFq56d"
      );

      let data = await response.json();
      console.log("DATA:", data.url);
      return data.url;
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    handleEntered();
  }, [entered]);

  useEffect(() => {
    const currentStage = stage;
    console.log("STAGE>>>", stage);
  }, [stage]);

  if (loading) return <Spinner color="white" />;

  return (
    <Layout>
      {/* <Background /> */}
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
                  <Intro
                    onClick={handleNavChange}
                    toProjects={changeStage}
                    stage={stage}
                    spaceImage={spaceImage}
                  />
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
            <div className={styles.navIconArea}>
              {entered ? (
                <>
                  {" "}
                  <button
                    className={styles.homeNavButton}
                    onClick={handleBackNav}
                  >
                    <TiArrowBack className={styles.homeNavIcon} />
                  </button>
                  <button
                    className={styles.homeNavButton}
                    onClick={handleHomeNav}
                  >
                    <TiHome className={styles.homeNavIcon} />
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    className={styles.homeNavButton}
                    style={{ color: "grey", visibility: "hidden" }}
                  >
                    <TiArrowBack className={styles.homeNavIcon} />
                  </button>
                  <button
                    className={styles.homeNavButton}
                    style={{ color: "grey", visibility: "hidden" }}
                  >
                    <TiHome className={styles.homeNavIcon} />
                  </button>
                </>
              )}
            </div>
            <div className={styles.socialMediaArea}>
              <SocialMedia />
            </div>
            {/* <span
              style={{ color: "rgba(113, 192, 187, 255)", fontSize: "0.8em" }}
            >
              © 2021 sam gerber
            </span> */}
          </section>
        </section>
      </main>
    </Layout>
  );
}
