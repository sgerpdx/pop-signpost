import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";

// Personal Logo:
import PlanetImage from "../public/blue-planet-01.png";

export default function Header() {
  const handleMenuClick = (e) => {
    console.log(e.target.value);
  };

  const handleMenuClick1 = (e) => {
    console.log("Click");
    console.log("ETV:", e.target.value);
  };

  return (
    <>
      <section className={styles.mainTitleArea}>
        <div className={styles.logoImageArea}>
          <Image
            src={PlanetImage}
            alt="logo image of a blue planet with golden-brown ring"
            height="53"
            width="75"
          />
        </div>
        <div className={styles.headlineTextArea}>
          <h1>Sam Gerber</h1>
        </div>
      </section>
      <section className={styles.mainMenuArea}>
        <Menu>
          <MenuButton
            style={{ backgroundColor: "rgba(53, 52, 52,0)", border: "none" }}
          >
            <HamburgerIcon w={32} h={32} style={{ color: "white" }} />
          </MenuButton>

          <MenuList>
            <MenuItem onClick={handleMenuClick1} value="tech">
              Tech
            </MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Blog</MenuItem>
          </MenuList>
        </Menu>
      </section>
    </>
  );
}
