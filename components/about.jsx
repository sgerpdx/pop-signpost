import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
//import Link from 'next/link';
//import MeClassic from "../public/red-grey_new-3.png";
import MeForest from "../public/me-green_640x500.jpg";
import MeRedwoods from "../public/me_redwood_640x480.jpg";
import MeCoffee from "../public/me_cafftemplative_480.jpg";
import AsteroidImage from "../public/asteroid-blue.png";
import { TiArrowBack } from "react-icons/ti";

export default function About({ onClick }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          backgroundColor: "rgb(53, 52, 52)",
          border: "solid 4px rgba(113, 192, 187, 255)",
        }}
      >
        <p
          style={{
            color: "white",
            width: "180px",
            textAlign: "center",
          }}
        >
          <a href="#about-me">about</a> | <a href="#about-credits">credits</a>
        </p>
      </div>
      <section className={styles.aboutMeArea}>
        <section id="about-me">
          <div className={styles.aboutHeader}>
            <h2 id="about-top">About Me</h2>
            <figure
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={MeForest} width="320px" height="250px" />
            </figure>
          </div>

          <p>
            Hi, I&apos;m Sam! I love finding the often-amazing or surprising
            connections between things, and I&apos;m deeply inspired by
            tech&apos;s potential to bring us together, to shorten the distance
            in all sorts of ways.
          </p>
          <figure
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
          <p>
            Along the road to software development, I&apos;ve been an accountant
            and studied linguistics. Having a lifelong passion for languages,
            I&apos;m energized by the universal nature of coding languages, both
            in terms of collaboration, and in the potential for users anywhere
            in the world to benefit from a well-designed app.
          </p>
          <figure
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={MeRedwoods} width="320px" height="240px" />
            <figcaption
              style={{
                textAlign: "center",
                width: "270px",
                fontStyle: "italic",
                fontSize: "0.9em",
              }}
            >
              on the bright side, if only only horizontal dimensions are taken
              into account, almost as wide as a tree
            </figcaption>
          </figure>
          <p>
            I was born in and reside in Oregon, grew up in Alaska in between,
            and love getting out into our beautiful forests, visiting the coast
            or the mountains when I have the chance, as well as reading and
            writing fiction in my free time. Coffee, music and random humor also
            figure in. Feel free to{" "}
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
          {/* <Image src={AsteroidImage} width="32px" height="32px" /> */}
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Site Credits</h2>
            <a href="#about-top">
              <TiArrowBack className={styles.backToTopIcon} />
            </a>
          </span>
          <p>
            This website was built using React with a Next.js framework, the
            Framer Motion, Chakra UI and React Icons libraries, AWS S3 cloud
            storage, and image assets by the following creators at{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              <span style={{ textDecoration: "underline" }}>
                www.flaticon.com
              </span>
            </a>
            :
          </p>
          <ul>
            {/* <span style={{ textDecoration: "underline" }}>
              Creator credits from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
              :{" "}
            </span> */}
            <li className={styles.creditsList}>
              {" "}
              <a
                href="https://www.flaticon.com/authors/fjstudio"
                title="fjstudio"
              >
                fjstudio
              </a>
            </li>
            <li className={styles.creditsList}>
              {" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>
            </li>
            <li className={styles.creditsList}>
              {" "}
              <a
                href="https://www.flaticon.com/authors/md-tanvirul-haque"
                title="Md Tanvirul Haque"
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
              >
                {" "}
                Pixel perfect{" "}
              </a>
            </li>
            <li className={styles.creditsList}>
              <a
                href="https://www.flaticon.com/authors/riajulislam"
                title="riajulislam"
              >
                {" "}
                riajulislam{" "}
              </a>
            </li>
            <li className={styles.creditsList}>
              <a
                href="https://www.flaticon.com/authors/maxim-basinski-premium"
                title="Maxim Basinski Premium"
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

//https://chakra-ui.com/
//https://react-icons.github.io/react-icons/
//https://www.framer.com/motion/
