import React from "react";
import Link from "next/link";
import styles from "../styles/Tech.module.css";
import { RiArrowRightCircleLine } from "react-icons/ri";

export default function Tech() {
  return (
    <>
      <section>
        <div style={{ padding: "10px", justifyContent: "center" }}>
          <h2>My Tech Stack:</h2>
          <dl style={{ fontSize: "0.9em" }}>
            <dt>
              <u>Languages</u>:
            </dt>{" "}
            <dd>JavaScript, HTML, CSS</dd>
            <dt>
              <u>Libraries/Runtimes/Frameworks</u>:
            </dt>{" "}
            <dd>
              <dt>Front End:</dt> <dd>React.js, Next.js, React Native</dd>
            </dd>
            <dd>
              <dt>Back End:</dt>
              <dd>Node.js, Express</dd>
            </dd>
            <dt>
              <u>Testing</u>:
            </dt>{" "}
            <dd>Jest, React Testing Library</dd>
            <dt>
              <u>Databases</u>:
            </dt>{" "}
            <dd> PostgresSQL, pgAdmin, Firebase, Supabase</dd>
            <dt>
              <u>Tools/Deployment</u>:
            </dt>{" "}
            <dd> Git, GitHub, Netlify, Heroku, Postman, AWS S3</dd>
          </dl>
          <p>
            I've also worked a little bit with Python and Solidity, and am
            currently learning TypeScript.
          </p>
          <RiArrowRightCircleLine
            className={styles.enterButton}
            style={{ fontSize: "2em" }}
          />
          <Link href="/projects">Go to Projects</Link>
        </div>
      </section>
    </>
  );
}
