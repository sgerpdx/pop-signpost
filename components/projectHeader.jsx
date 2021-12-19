import React from "react";
import SatelliteBlue from "../public/satellite-blue.png";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { RiHomeFill } from "react-icons/ri";

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
          <RiHomeFill
            title="return home"
            size="2em"
            color="rgba(113, 192, 187, 255)"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </section>
    </>
  );
}
