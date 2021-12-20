import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Layout from "../components/layout";
//import Header from "../components/header";
import ProjectHeader from "../components/projectHeader";
import { Spinner } from "@chakra-ui/spinner";
//import { TiArrowBack } from "react-icons/ti";

// individual project screencaps:
import DesignasaurImage from "../public/Projects_Designasaur-Park_680.jpg";
import ElseImage from "../public/Projects_Else-By-Elsewhere_680.jpg";
import GreetingImage from "../public/Projects_Greeting-Art_680.jpg";
import SimpleSmoreImage from "../public/Projects_Simple-Smore.png";

//social media icons:
import GithubDkGrey from "../public/github-dkgrey.png";
//import GlobeDkGrey from "../public/network-dkgrey.png";

export default function Projects({ value }) {
  const [loading, setLoading] = useState(true);

  // const handleNavChange = () => {
  //   console.log("ET Phone Home");
  // };

  useEffect(() => {
    setLoading(false);
    // setTimeout(() => console.log("At laaast!"), 5000);
  }, []);

  if (loading) return <Spinner color="white" />;

  return (
    <Layout>
      <main className={styles.container}>
        <section className={styles.upperContainer}>
          <section className={styles.topRow}>
            <ProjectHeader />
          </section>
          <div className={styles.scrollBorder}></div>
        </section>

        <section className={styles.lowerContainer}>
          <section className={styles.projectScrollArea}>
            <div className={styles.contentScrollArea}>
              <figure className={styles.projectImageArea}>
                <figcaption
                  style={{ width: "48px", textAlign: "center" }}
                ></figcaption>
                <a
                  href="https://greeting-art.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="deployed website link"
                >
                  <Image
                    src={GreetingImage}
                    alt="screenshot of greeting art app"
                    width="240"
                    height="240"
                    id="projects-top"
                  />
                </a>

                <figcaption style={{ width: "48px", textAlign: "center" }}>
                  {/* <p>
                    <a
                      href="https://greeting-art.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      title="deployed website link"
                    >
                      <Image src={GlobeDkGrey} width="32" height={32} />
                    </a>
                  </p> */}
                  <p>
                    <a
                      href="https://github.com/Greeting-Art"
                      target="_blank"
                      rel="noreferrer"
                      title="github repository link"
                    >
                      <Image src={GithubDkGrey} width="32" height={32} />
                    </a>
                  </p>
                  {/* <p>
                    <a
                      href="#projects-top"
                      rel="noreferrer"
                      title="return to top of page"
                    >
                      <TiArrowBack
                        style={{
                          transform: "rotate(90deg)",
                          fontSize: "1.8em",
                        }}
                      />
                    </a>
                  </p> */}
                </figcaption>
              </figure>
              <p style={{ fontSize: "1.8em" }}>Greeting Art</p>
              <div className={styles.projectSummaryArea}>
                <p>
                  Random generative art creation tool with gallery and
                  send-as-eCard service. Built in two-week remote team sprint,
                  using:
                </p>
                <ul>
                  <li>React + Node</li>
                  <li>p5.js</li>
                  <li>AWS</li>
                  <li>SendGrid</li>
                </ul>
                <p>
                  My role: I initiated and coordinated the project; wrote
                  customized art-rendering functions in p5.js with added
                  randomization logic; designed the interface from wireframe
                  through CSS, including incorporation of Material-UI
                  components; and did general testing and debugging throughout.
                </p>
              </div>
            </div>
            <div className={styles.contentScrollArea}>
              <figure className={styles.projectImageArea}>
                <figcaption
                  style={{ width: "48px", textAlign: "center" }}
                ></figcaption>
                <a
                  href="https://else-by-elsewhere.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="deployed website link"
                >
                  <Image
                    src={ElseImage}
                    alt="screenshot of else by elsewhere app"
                    width="240"
                    height="240"
                  />
                </a>

                <figcaption style={{ width: "48px", textAlign: "center" }}>
                  {/* <p>
                    <a
                      href="https://else-by-elsewhere.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      title="deployed website link"
                    >
                      <Image src={GlobeDkGrey} width="32" height={32} />
                    </a>
                  </p> */}
                  <p>
                    <a
                      href="https://github.com/where-in-the-search"
                      target="_blank"
                      rel="noreferrer"
                      title="github repository link"
                    >
                      <Image src={GithubDkGrey} width="32" height={32} />
                    </a>
                  </p>
                  {/* <p>
                    <a
                      href="#projects-top"
                      rel="noreferrer"
                      title="return to top of page"
                    >
                      <TiArrowBack
                        style={{
                          transform: "rotate(90deg)",
                          fontSize: "1.8em",
                        }}
                      />
                    </a>
                  </p> */}
                </figcaption>
              </figure>
              <p style={{ fontSize: "1.8em" }}>Else By Elsewhere</p>
              <div className={styles.projectSummaryArea}>
                <p>
                  API-driven geoguessing game app. primarily mob programmed in a
                  one-week remote sprint, using:
                </p>
                <ul>
                  <li>React + Node</li>
                  <li>Google Maps Street View Static API</li>
                  <li>GeoDataSource API</li>
                </ul>
                <p>
                  My role: I pitched the idea; researched APIs; and developed a
                  state-management framework for the user-controls to zoom and
                  rotate Google-sourced images.
                </p>
              </div>
            </div>
            <div className={styles.contentScrollArea}>
              <figure className={styles.projectImageArea}>
                <figcaption
                  style={{ width: "48px", textAlign: "center" }}
                ></figcaption>
                <a
                  href="https://designosaurpark.github.io/DesignasaurPark/"
                  target="_blank"
                  rel="noreferrer"
                  title="deployed website link"
                >
                  <Image
                    src={DesignasaurImage}
                    alt="screenshot of designasaur park app"
                    width="240"
                    height="240"
                  />
                </a>

                <figcaption style={{ width: "48px", textAlign: "center" }}>
                  {/* <p>
                    <a
                      href="https://designosaurpark.github.io/DesignasaurPark/"
                      target="_blank"
                      rel="noreferrer"
                      title="deployed website link"
                    >
                      <Image src={GlobeDkGrey} width="32" height={32} />
                    </a>
                  </p> */}
                  <p>
                    <a
                      href="https://github.com/DesignosaurPark/DesignasaurPark"
                      target="_blank"
                      rel="noreferrer"
                      title="github repository link"
                    >
                      <Image src={GithubDkGrey} width="32" height={32} />
                    </a>
                  </p>
                  {/* <p>
                    <a
                      href="#projects-top"
                      rel="noreferrer"
                      title="return to top of page"
                    >
                      <TiArrowBack
                        style={{
                          transform: "rotate(90deg)",
                          fontSize: "1.8em",
                        }}
                      />
                    </a>
                  </p> */}
                </figcaption>
              </figure>
              <p style={{ fontSize: "1.8em" }}>Designasaur Park</p>
              <div className={styles.projectSummaryArea}>
                <p>
                  Simulated DNA laboratory allowing users to custom-engineer new
                  dinosaur hybrids and observe their behavior in a virtual park.
                  Primarily mob-programmed in a one-week remote sprint, using:
                </p>
                <ul>
                  <li>Vanilla JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <p>
                  My role: I originated the app concept; handled composite image
                  rendering via the DOM; set up avatar selection and
                  thematically-styled sign-in on the homepage; and created
                  graphics assets.
                </p>
                <nav></nav>
              </div>
            </div>
            <div className={styles.contentScrollArea}>
              <figure className={styles.projectImageArea}>
                <figcaption
                  style={{ width: "48px", textAlign: "center" }}
                ></figcaption>
                <a
                  href="https://samger.itch.io/smplsmore"
                  target="_blank"
                  rel="noreferrer"
                  title="deployed website link"
                >
                  <Image
                    src={SimpleSmoreImage}
                    alt="screenshot of simple s'more game app"
                    width="240"
                    height="240"
                  />
                </a>

                <figcaption style={{ width: "48px", textAlign: "center" }}>
                  {/* <p>
                    <a
                      href="https://designosaurpark.github.io/DesignasaurPark/"
                      target="_blank"
                      rel="noreferrer"
                      title="deployed website link"
                    >
                      <Image src={GlobeDkGrey} width="32" height={32} />
                    </a>
                  </p> */}
                  {/* <p>
                    <a
                      href="https://github.com/DesignosaurPark/DesignasaurPark"
                      target="_blank"
                      rel="noreferrer"
                      title="github repository link"
                    >
                      <Image src={GithubDkGrey} width="32" height={32} />
                    </a>
                  </p> */}
                  {/* <p>
                    <a
                      href="#projects-top"
                      rel="noreferrer"
                      title="return to top of page"
                    >
                      <TiArrowBack
                        style={{
                          transform: "rotate(90deg)",
                          fontSize: "1.8em",
                        }}
                      />
                    </a>
                  </p> */}
                </figcaption>
              </figure>
              <p style={{ fontSize: "1.8em" }}>S'mple S'more</p>
              <div className={styles.projectSummaryArea}>
                <p>
                  A fun, very simple little camping-themed game that a friend
                  and I built over a couple of days using the Godot Game Engine
                  for the{" "}
                  <a
                    href="https://itch.io/jam/stop-waiting-for-godot"
                    target="blank"
                    rel="noreferrer"
                  >
                    <em>Stop Waiting For Godot</em>
                  </a>{" "}
                  game jam.
                </p>
                <nav></nav>
              </div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}
