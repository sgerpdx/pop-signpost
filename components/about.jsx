import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
//import Link from 'next/link';
//import MeClassic from "../public/red-grey_new-3.png";
import MeForest from "../public/me_forest-tones.JPG";

export default function About({ onClick }) {
  return (
    <>
      <section className={styles.aboutMeArea}>
        <div className={styles.aboutHeader}>
          <h4>About Me</h4>
          <figure>
            <Image src={MeForest} width="320px" height="240px" />
          </figure>
        </div>

        <p>
          Hi, I&apos;m Sam! I love discovering the amazing connections between
          things, and I think that one of the best things about tech is its
          potential to bring us together, to shorten the distance in all sorts
          of ways.
        </p>
        <p>
          Along the road to software development, I&apos;ve been an account and
          studied linguistics, with a lifelong love a languages. I&apos;m
          energized by the universal nature of coding languages, and how a great
          app can reach users anywhere in the world.
        </p>
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
