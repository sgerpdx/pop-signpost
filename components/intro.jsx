import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Intro.module.css";

//image imports
import SatelliteImage from "../public/satellite.png";
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
              <span>
                <BsStars className={styles.spaceCaptionIcon} />
                astroView courtesy of{" "}
                <a
                  href="https://apod.nasa.gov/apod/astropix.html"
                  target="_blank"
                  rel="noreferrer"
                  title="link to NASA astronomy picture of the day"
                >
                  NASA
                </a>
                <BsStars className={styles.spaceCaptionIcon} />
              </span>
            </figcaption>
            <a href={spaceImage} target="_blank" rel="noreferrer">
              <Image
                src={spaceImage}
                width="340"
                height="190"
                alt="astronomy picture of the day"
                title="astronomy picture of the day"
              />
            </a>
          </figure>
        ) : (
          <p className={styles.introTextArea}>
            I&apos;m a software engineer building full-stack applications with a
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

            <Link href="/projects" scroll={false} onClick={toProjects}>
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
