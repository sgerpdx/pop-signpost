import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";

//image imports
import MeForest from "../public/me-green_640x500.jpg";
import MeRedwoods from "../public/me_redwood_640x480.jpg";
import MeCoffee from "../public/me_cafftemplative_480.jpg";
import GithubDkGrey from "../public/github-dkgrey.png";

export default function About({ onClick }) {
  return (
    <>
      <section className={styles.aboutMeArea}>
        <section id="about-me">
          <div className={styles.aboutHeader}>
            <h2 id="about-top">About Me</h2>
            <figure className={styles.aboutImageWrapper}>
              <Image src={MeForest} width="320px" height="250px" />
            </figure>
          </div>

          <p className={styles.aboutTextParagraph}>
            Hi, I&apos;m Sam! I love finding the unexpected and often-amazing
            connections between things, even moreso between people. I&apos;m
            deeply inspired by tech&apos;s potential to bring out those
            connections between us.
          </p>
          <figure className={styles.aboutImageWrapper}>
            <Image src={MeCoffee} width="240px" height="240px" />
            <figcaption
              style={{
                textAlign: "center",
                width: "200px",
                fontStyle: "italic",
                fontSize: "0.9em",
              }}
            >
              an absurdly contemplative moment
            </figcaption>
          </figure>
          <p className={styles.aboutTextParagraph}>
            Along the road to software development, I&apos;ve been an accountant
            and studied linguistics. Having a lifelong passion for languages,
            I&apos;m energized by the universal nature of coding. It&apos;s an
            incredible thing to be able to communicate and collaborate
            regardless of borders or distance.
          </p>
          <figure className={styles.aboutImageWrapper}>
            <Image src={MeRedwoods} width="320px" height="240px" />
            <figcaption
              style={{
                textAlign: "center",
                width: "270px",
                fontStyle: "italic",
                fontSize: "0.9em",
              }}
            >
              requisite self-to-redwood comparison
            </figcaption>
          </figure>
          <p className={styles.aboutTextParagraph}>
            I was born/reside in Oregon, grew up in Alaska in between, and love
            getting out into our beautiful forests, visiting the coast or the
            mountains when I have the chance, as well as reading and writing
            fiction in my free time. Coffee, music and random humor also figure
            in. Feel free to{" "}
            <button
              className={styles.contactLink}
              onClick={onClick}
              value="contact"
            >
              send me a line
            </button>{" "}
            if you&apos;d like!
          </p>
        </section>
        <section id="about-credits">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.modularAboutSpan}>
              <h2>Site Credits</h2>
            </p>
            <p className={styles.modularAboutSpan}>
              <a
                href="https://github.com/sgerpdx/pop-signpost"
                target="_blank"
                rel="noreferrer"
                title="github repository link"
                style={{ cursor: "pointer" }}
              >
                <Image src={GithubDkGrey} width="32px" height="32px" />
              </a>
            </p>
          </div>
          <p>
            This website was built using React with a Next.js framework, the
            Framer Motion, Chakra UI and React Icons libraries, AWS S3 cloud
            storage, the NASA Open APIs, and image assets by the following
            creators at{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              <span style={{ textDecoration: "underline" }}>
                www.flaticon.com
              </span>
            </a>
            :
          </p>
          <ul>
            <li className={styles.creditsList}>
              {" "}
              <a
                href="https://www.flaticon.com/authors/fjstudio"
                title="fjstudio"
                target="_blank"
                rel="noreferrer"
              >
                fjstudio
              </a>
            </li>
            <li className={styles.creditsList}>
              {" "}
              <a
                href="https://www.freepik.com"
                title="Freepik"
                target="_blank"
                rel="noreferrer"
              >
                Freepik
              </a>
            </li>
            <li className={styles.creditsList}>
              {" "}
              <a
                href="https://www.flaticon.com/authors/md-tanvirul-haque"
                title="Md Tanvirul Haque"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Md Tanvirul Haque{" "}
              </a>
            </li>
            <li className={styles.creditsList}>
              {" "}
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Pixel perfect{" "}
              </a>
            </li>
            <li className={styles.creditsList}>
              <a
                href="https://www.flaticon.com/authors/riajulislam"
                title="riajulislam"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                riajulislam{" "}
              </a>
            </li>
            <li className={styles.creditsList}>
              <a
                href="https://www.flaticon.com/authors/maxim-basinski-premium"
                title="Maxim Basinski Premium"
                target="_blank"
                rel="noreferrer"
              >
                Maxim Basinski Premium
              </a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}
