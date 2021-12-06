import React from "react";
import Link from "next/link";
import styles from "../styles/Tech.module.css";

export default function Tech() {
  return (
    <>
      <section>
        <div>
          <p>[html, css, javascript]</p>
          <Link href="/projects">Projects</Link>
        </div>
      </section>
    </>
  );
}
