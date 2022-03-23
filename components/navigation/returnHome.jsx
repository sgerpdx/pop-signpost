import React from "react";
import Link from "next/link";
import { RiHomeFill } from "react-icons/ri";

export default function ReturnHome() {
  return (
    <>
      <Link href="/" passHref>
        <RiHomeFill size="2.5em" />
      </Link>
    </>
  );
}
