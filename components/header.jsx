import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { RiMenuLine } from "react-icons/ri";

// Personal Logo:
import PlanetImage from "../public/blue-planet-01.png";

export default function Header({ onClick }) {
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
            className={styles.headerMenuButton}
            style={{ backgroundColor: "rgba(53, 52, 52,0)" }}
          >
            <RiMenuLine size="2.5em" color="white" />
          </MenuButton>

          <MenuList>
            <MenuItem
              className={styles.headerMenuItem}
              onClick={onClick}
              value="home"
              w="96px"
              h="28px"
              _active={{
                bgColor: "coral",
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
                bgColor: "coral",
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
                bgColor: "coral",
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
                bgColor: "coral",
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
