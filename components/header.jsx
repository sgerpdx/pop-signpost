import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";

// Personal Logo:
import PlanetImage from "../public/blue-planet-01.png";

export default function Header() {
  return (
    <>
      <section className={styles.mainTitleArea}>
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
      </section>
      <section className={styles.mainMenuArea}>
        <HamburgerIcon w={24} h={24} />
      </section>
    </>
  );
}
