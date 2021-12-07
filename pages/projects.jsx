import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
import { RiHomeFill } from "react-icons/ri";
import ReturnHome from "../components/navigation/returnHome";

// individual project screencaps:
import DesignasaurImage from "../public/saturn-3d.png";
import ElseImage from "../public/saturn-3d.png";
import GreetingImage from "../public/saturn-3d.png";

export default function Projects() {
  const handleNavChange = () => {
    console.log("ET Phone Home");
  };

  return (
    <main className={styles.container}>
      <section className={styles.upperContainer}>
        <section className={styles.topRow}>
          <Header onClick={handleNavChange} icon={"home"} />
        </section>
      </section>
      <section className={styles.lowerContainer}>
        <section className={styles.projectScrollArea}>
          <div className={styles.contentScrollArea}>
            <h3>Designasaur Park</h3>
            <Image
              src={DesignasaurImage}
              alt="screenshot of designasaur park app"
              width="240"
              height="240"
            />
            <p>
              This app is a virtual dino-engineering and field a observation
              experience -- combine various DNA samples to create your own new
              species of dinosaur, and see how they fare when released into the
              wild!
            </p>
          </div>
          <div className={styles.contentScrollArea}>
            <h3>Else By Elsewhere</h3>
            <Image
              src={ElseImage}
              alt="screenshot of designasaur park app"
              width="240"
              height="240"
            />
            <p>
              This app is a geoguessing game that uses APIs to allow users to
              see random locations in Google street view, move the camera and
              access local hints in the effort to guess where the place is.
            </p>
          </div>
          <div className={styles.contentScrollArea}>
            <h3>Greeting Art</h3>
            <Image
              src={GreetingImage}
              alt="screenshot of designasaur park app"
              width="240"
              height="240"
            />
            <p>
              This app combines a random art generator, AWS-powered gallery and
              a greeting card service.
            </p>
          </div>
          <nav>
            <button onClick={handleNavChange}>return home</button>
          </nav>
        </section>
      </section>
    </main>
  );
}
