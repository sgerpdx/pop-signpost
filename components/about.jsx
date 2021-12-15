import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
//import Link from 'next/link';

export default function About() {
  return (
    <>
      <section className={styles.aboutMeArea}>
        <Image
          src="http://placekitten.com/200/300"
          width="100px"
          height="150px"
        />
        <p>
          Hi, I&apos;m Sam! I love discovering the amazing connections between
          things, and I think that one of the best things about tech is its
          potential to bring us together, to inspire, to shorten the distance in
          all sorts of ways.
        </p>
        <p>
          Along the road to software development, I&apos;ve been an account and
          studied linguistics, with a lifelong love a languages. I&apos;m
          energized by the unprecedentedly universal nature of coding languages,
          and how a great app can reach users anywhere in the world.
        </p>
        <p>
          I was born in and reside in Oregon, grew up in Alaska in between, and
          love getting out into our beautiful forests, visiting the coast or the
          mountains when I have the chance, as well as reading and writing
          fiction in my free time. Coffee, music and random humor also figure
          in. Feel free to{" "}
          <a
            href="http://placekitten.com/200/300"
            className={styles.contactLink}
          >
            send me a line
          </a>{" "}
          if you&apos;d like!
        </p>
      </section>
    </>
  );
}
