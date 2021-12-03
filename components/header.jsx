import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";

// Personal Logo:
import PlanetImage from "../public/blue-planet-01.png";

export default function Header({ onClick }) {
  // const handleMenuClick1 = (e) => {
  //   console.log("Click");
  //   console.log("ETV:", e.target.value);
  // };

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
            <HamburgerIcon w={40} h={40} style={{ color: "white" }} />
          </MenuButton>

          <MenuList>
            <MenuItem
              className={styles.headerMenuItem}
              onClick={onClick}
              value="home"
              w="96px"
              h="28px"
              _active={{
                bgColor: "rgba(113, 192, 187, 255)",
                color: "rgb(53, 52, 52)",
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              className={styles.headerMenuItem}
              onClick={onClick}
              value="projects"
              w="96px"
              h="28px"
              _active={{
                bgColor: "rgba(113, 192, 187, 255)",
                color: "rgb(53, 52, 52)",
              }}
            >
              Projects
            </MenuItem>
            <MenuItem
              className={styles.headerMenuItem}
              onClick={onClick}
              value="about"
              w="96px"
              h="28px"
              _active={{
                bgColor: "rgba(113, 192, 187, 255)",
                color: "rgb(53, 52, 52)",
              }}
            >
              About
            </MenuItem>
            <MenuItem
              className={styles.headerMenuItem}
              onClick={onClick}
              value="contact"
              w="96px"
              h="28px"
              _active={{
                bgColor: "rgba(113, 192, 187, 255)",
                color: "rgb(53, 52, 52)",
              }}
            >
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      </section>
    </>
  );
}
