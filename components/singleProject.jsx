import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

//image imports
import GithubDkGrey from "../public/github-dkgrey.png";

export default function SingleProject({
  projectName,
  projectImage,
  deployed,
  github,
  isVisible,
  projectText,
}) {
  return (
    <>
      <div className={styles.contentScrollArea}>
        <figure className={styles.projectImageArea}>
          <figcaption
            style={{ width: "48px", textAlign: "center" }}
          ></figcaption>
          <a
            href={deployed}
            target="_blank"
            rel="noreferrer"
            title="deployed website link"
          >
            <Image
              src={projectImage}
              alt="screenshot of app"
              width="240"
              height="240"
            />
          </a>
          <figcaption style={{ width: "48px", textAlign: "center" }}>
            <p style={{ visibility: `${isVisible}` }}>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                title="github repository link"
              >
                <Image
                  src={GithubDkGrey}
                  width="32"
                  height="32"
                  alt="github logo icon"
                />
              </a>
            </p>
          </figcaption>
        </figure>
        <p style={{ fontSize: "1.8em" }}>{projectName}</p>
        <div className={styles.projectSummaryArea}>{projectText}</div>
      </div>
    </>
  );
}
