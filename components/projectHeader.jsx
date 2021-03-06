import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

//image imports
import SatelliteBlue from "../public/satellite-blue.png";
import { TiHome } from "react-icons/ti";

export default function ProjectHeader({ value }) {
  const changeStage = value.handleStageChange;

  return (
    <>
      <section className={styles.mainLogoArea}>
        <div className={styles.logoImageArea}>
          <Link href="/" passHref scroll={false}>
            <Image
              src={SatelliteBlue}
              alt="logo image of a blue planet with rings and stars"
              height="48"
              width="48"
            />
          </Link>
        </div>
      </section>
      <section className={styles.mainTitleArea}>
        <div className={styles.headlineTextArea}>
          <h1>My Projects</h1>
        </div>
      </section>
      <section className={styles.mainMenuArea}>
        <Link href="/" passHref scroll={false}>
          <span className={styles.backHomeSpan} title="return home">
            {" "}
            <TiHome
              size="3em"
              className={styles.homeIcon}
              onClick={changeStage}
            />
          </span>
        </Link>
      </section>
    </>
  );
}
