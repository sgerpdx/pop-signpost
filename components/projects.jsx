import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";

// individual project screencaps:
import DesignasaurImage from "../public/proj_designasaur-park_640x320.png";
import ElseImage from "../public/proj_else-by-elsewhere_640x320.png";
import GreetingImage from "../public/proj_greeting-art_640x320.png";

export default function Projects() {
  return (
    <>
      <section className={styles.projectScrollArea}>
        <div className={styles.contentScrollArea}>
          <h3>Designasaur Park</h3>
          <Image
            src={DesignasaurImage}
            alt="screenshot of designasaur park app"
            width="240"
            height="120"
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
            height="120"
          />
          <p>
            This app is a geoguessing game that uses APIs to allow users to see
            random locations in Google street view, move the camera and access
            local hints in the effort to guess where the place is.
          </p>
        </div>
        <div className={styles.contentScrollArea}>
          <h3>Greeting Art</h3>
          <Image
            src={GreetingImage}
            alt="screenshot of designasaur park app"
            width="240"
            height="120"
          />
          <p>
            This app combines a random art generator, AWS-powered gallery and a
            greeting card service.
          </p>
        </div>
      </section>
    </>
  );
}
