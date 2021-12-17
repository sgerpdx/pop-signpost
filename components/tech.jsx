import React from "react";
import Link from "next/link";
import styles from "../styles/Tech.module.css";
import { RiArrowRightCircleLine } from "react-icons/ri";

export default function Tech({ onClick }) {
  return (
    <>
      <section>
        <div style={{ padding: "10px", justifyContent: "center" }}>
          <h2 style={{ textAlign: "center" }}>My Tech Stack:</h2>
          <dl style={{ fontSize: "0.9em" }}>
            <dt className={styles.techCategory}>
              <u>Languages</u>:
            </dt>{" "}
            <dd>JavaScript, HTML, CSS</dd>
            <dt className={styles.techCategory}>
              <u>Libraries/Runtimes/Frameworks</u>:
            </dt>{" "}
            <dd>
              <dt style={{ color: "#C4E175" }}>→ Front End:</dt>{" "}
              <dd>React.js, Next.js, React Native</dd>
            </dd>
            <dd>
              <dt style={{ color: "#C4E175" }}>→ Back End:</dt>
              <dd>Node.js, Express</dd>
            </dd>
            <dt className={styles.techCategory}>
              <u>Testing</u>:
            </dt>{" "}
            <dd>Jest, React Testing Library</dd>
            <dt className={styles.techCategory}>
              <u>Databases</u>:
            </dt>{" "}
            <dd> PostgresSQL, pgAdmin, Firebase, Supabase</dd>
            <dt className={styles.techCategory}>
              <u>Tools/Deployment</u>:
            </dt>{" "}
            <dd> Git, GitHub, Netlify, Heroku, Postman, AWS S3</dd>
          </dl>
          {/* <p style={{ fontSize: "0.9em", textIndent: "40px" }}>
            I've also done limited work with Python and Solidity, and am
            currently learning TypeScript.
          </p> */}
          <nav className={styles.projectLinksArea}>
            <p style={{ color: "rgba(113, 192, 187, 255)" }}>
              Go to{" "}
              <Link href="/projects" scroll={false}>
                <span onClick={onClick} className={styles.projectLinkSpan}>
                  Projects
                </span>
              </Link>
            </p>
            <Link href="/projects">
              <RiArrowRightCircleLine
                onClick={onClick}
                className={styles.projectLinkIcon}
                style={{ fontSize: "2em" }}
              />
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
