import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
//import Link from 'next/link';
//import MeClassic from "../public/red-grey_new-3.png";
import MeForest from "../public/me-green_640x500.jpg";
import MeRedwoods from "../public/me_redwood_640x480.jpg";
import MeCoffee from "../public/me_cafftemplative_480.jpg";

export default function About({ onClick }) {
  return (
    <>
      <section className={styles.aboutMeArea}>
        <div className={styles.aboutHeader}>
          <h2>About Me</h2>
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
          tech&apos;s potential to bring us together, to shorten the distance in
          all sorts of ways.
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
          in terms of collaboration, and in the potential for users anywhere in
          the world to benefit from a well-designed app.
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
            on the bright side, if only only horizontal
            dimensions are taken into account, almost as wide as a tree
          </figcaption>
        </figure>
        <p>
          I was born in and reside in Oregon, grew up in Alaska in between, and
          love getting out into our beautiful forests, visiting the coast or the
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
    </>
  );
}
