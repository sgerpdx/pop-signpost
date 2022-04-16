import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Intro.module.css";

//image imports
import SatelliteImage from "../public/satellite.png";
//import SatelliteGrey from "../public/satellite-dkgrey.png";
import { BsStars } from "react-icons/bs";
//import { FaSpaceShuttle } from "react-icons/fa";

export default function Intro({ onClick, toProjects, stage, spaceImage }) {
  return (
    <>
      <section className={styles.introTextContainer}>
        {stage > 1 ? (
          <figure
            style={{ border: "solid 2px white", backgroundColor: "#353434" }}
          >
            <figcaption className={styles.spaceImageCaption}>
              <a
                href={spaceImage}
                passHref
                target="_blank"
                rel="noreferrer"
                className={styles.spaceGraphic}
              >
                <Image
                  src={spaceImage}
                  width="180"
                  height="180"
                  alt="NASA mars rover photo"
                  title="NASA mars rover photo"
                />
              </a>
              <span>
                {/* <BsStars className={styles.spaceCaptionIcon} /> */}
                marsView from{" "}
                <a
                  href="https://github.com/chrisccerami/mars-photo-api"
                  passHref
                  target="_blank"
                  rel="noreferrer"
                  title="link to NASA Mars Rover Photo API"
                >
                  NASA
                </a>
                {/* <BsStars className={styles.spaceCaptionIcon} /> */}
              </span>
            </figcaption>
          </figure>
        ) : (
          <p className={styles.introTextArea}>
            I&apos;m a software developer building full-stack applications with a
            focus on inspiring, content-rich UX. Have a look around, and have a
            nice day :)
          </p>
        )}

        <div className={styles.introLinkArea}>
          <nav className={styles.linksLeft}>
            <button
              className={styles.introLinks}
              onClick={onClick}
              value="tech"
            >
              tech stack
            </button>

            <Link href="/projects" passHref scroll={false} onClick={toProjects}>
              <button className={styles.introLinks} onClick={toProjects}>
                projects
              </button>
            </Link>
          </nav>
          <Image
            alt="satellite illustration"
            height="180"
            width="180"
            src={SatelliteImage}
          />
          <nav className={styles.linksRight}>
            <button
              className={styles.introLinks}
              onClick={onClick}
              value="about"
            >
              about
            </button>
            <button
              className={styles.introLinks}
              onClick={onClick}
              value="contact"
            >
              contact
            </button>
            <button className={styles.introLinks}>
              <a
                href="/gerber-sam_resume-current.pdf"
                passHref
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </button>
          </nav>
        </div>
      </section>
    </>
  );
}
