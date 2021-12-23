import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Background() {
  return (
    <>
      <div className={styles.backgroundTextureWrap}>
        <Image
          src="/seamles_topopatt04_edit-01-480.png"
          width="480px"
          height="480px"
          layout="fixed"
          objectFit="cover"
          quality={100}
        />
      </div>
    </>
  );
}
