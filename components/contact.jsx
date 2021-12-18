import React from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
//
import StarsImage from "../public/stars.png";

export default function Contact() {
  return (
    <>
      <section className={styles.contactMeArea}>
        <h2>Contact Details</h2>

        {/* concerning email */}
        <p>
          <span
            style={{
              color: "rgba(113, 192, 187, 255)",
              fontSize: "1.2em",
              marginRight: "10px",
            }}
          >
            ✉
          </span>
          <a
            style={{ textDecoration: "underline" }}
            href="mailto:samhgerber@protonmail.com"
            title="mailto:samhgerber@protonmail.com"
          >
            send me an email
          </a>
        </p>

        {/* concerning social media */}
        <div className={styles.socialMediaTextArea}>
          <figure style={{ marginRight: "10px" }}>
            {" "}
            <Image src={StarsImage} width="32px" height="32px" />
          </figure>

          <p style={{ width: "240px", textAlign: "left" }}>
            {" "}
            check out my social media links (below the cube){" "}
          </p>
        </div>

        {/* concerning resume access */}
        <div className={styles.resumeLinkArea}>
          <p>
            <a
              href="/gerber-sam_resume-current.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.resumeButtonContact}> resume </button>{" "}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
