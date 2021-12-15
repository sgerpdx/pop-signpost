import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <section className={styles.contactMeArea}>
        <h4>send email</h4>
        <input type="text" placeholder="type here" />
        <button>submit</button>
        <p>
          <a
            href="/gerber-sam_resume-current.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>Resume</button>
          </a>
        </p>
      </section>
    </>
  );
}
