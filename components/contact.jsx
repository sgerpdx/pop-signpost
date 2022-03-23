import React from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

//image imports
import StarsImage from "../public/stars.png";
import EnvelopeImage from "../public/email-blue.png";

export default function Contact() {
  return (
    <>
      <section className={styles.contactMeArea}>
        <h2>Contact Details</h2>

        {/* concerning email */}
        <div className={styles.socialMediaTextArea}>
          <figure style={{ marginRight: "10px" }}>
            {" "}
            <Image
              src={EnvelopeImage}
              width="27px"
              height="27px"
              alt="mailing envelope icon"
            />
          </figure>
          <a
            style={{ textDecoration: "underline", marginLeft: "6px" }}
            href="mailto:samhgerber@protonmail.com"
            title="mailto:samhgerber@protonmail.com"
          >
            send me an email
          </a>
        </div>

        {/* concerning social media */}
        <div className={styles.socialMediaTextArea}>
          <figure style={{ marginRight: "10px" }}>
            {" "}
            <Image
              src={StarsImage}
              width="32px"
              height="32px"
              alt="stars icon"
            />
          </figure>

          <p style={{ width: "240px", textAlign: "left" }}>
            {" "}
            check out my social media links (below){" "}
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
