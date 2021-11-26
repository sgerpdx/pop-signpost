import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

// Personal Logo:
import PlanetImage from "../public/blue-planet-01.png";

export default function Header() {
  return (
    <>
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
    </>
  );
}
