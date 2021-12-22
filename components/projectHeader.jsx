import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

//image imports
import SatelliteBlue from "../public/satellite-blue.png";
import { RiHomeFill } from "react-icons/ri";
import { TiArrowBack } from "react-icons/ti";
import { TiHome } from "react-icons/ti";

export default function ProjectHeader() {
  return (
    <>
      <section className={styles.mainLogoArea}>
        <div className={styles.logoImageArea}>
          <Link href="/" scroll={false}>
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
        <Link href="/" scroll={false}>
          <span className={styles.backHomeSpan} title="return home">
            {" "}
            <TiHome
              
              size="2.4em"
              color="rgba(113, 192, 187, 255)"
              style={{ margin: "0px 4px 0px 4px" }}
            />
            <TiArrowBack className={styles.backHomeIcon} />
          </span>
        </Link>
      </section>
    </>
  );
}
