import React from "react";
import styles from "../styles/Home.module.css";

import { RiArrowRightCircleLine } from "react-icons/ri";

export default function WelcomeModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <>
      <section className={styles.modalContainer}>
        <div className={styles.modalArea}>
          <div>
            <p
              style={{
                width: "360px",
                textAlign: "center",
                fontSize: "1em",
                padding: "10px",
              }}
            >
              Welcome to my site! Tap the arrow below to get started, then use the menu to
              explore the cube!
            </p>
          </div>
          <div>
            <button
              onClick={onClose}
              style={{
                border: "none",
                backgroundColor: "rgb(53, 52, 52)",
                color: "white",
                fontSize: "1.5em",
              }}
            >
              <RiArrowRightCircleLine
                className={styles.enterButton}
                style={{ fontSize: "2em" }}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
