import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { RiMenuLine } from "react-icons/ri";

// Personal Logo:
import PlanetImage from "../public/saturn-simple.png";
//import StarsImage from "../public/stars.png";

export default function Header({ onClick, icon }) {
  return (
    <>
      <section className={styles.mainLogoArea}>
        <div className={styles.logoImageArea}>
          <Image
            src={PlanetImage}
            alt="logo image of a blue ringed planet and stars"
            height="48"
            width="48"
          />
        </div>
      </section>
      <section className={styles.mainTitleArea}>
        <div className={styles.headlineTextArea}>
          <h1>Sam Gerber</h1>
          {/* <p className={styles.subHeading}>software engineer</p> */}
        </div>
      </section>
      <section className={styles.mainMenuArea}>
        {icon === "none" ? (
          <Menu>
            <MenuButton
              className={styles.headerMenuButton}
              style={{
                backgroundColor: "rgba(53, 52, 52,0)",
                padding: "4px",
                border: "none",
              }}
            >
              <RiMenuLine size="3em" color="grey" />
            </MenuButton>
          </Menu>
        ) : (
          <Menu>
            <MenuButton
              className={styles.headerMenuButton}
              style={{ backgroundColor: "rgba(53, 52, 52,0)" }}
            >
              <RiMenuLine size="3em" color="rgba(113, 192, 187, 255)" />
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
                value="tech"
                w="96px"
                h="28px"
                _active={{
                  bgColor: "coral",
                  color: "rgb(53, 52, 52)",
                }}
              >
                Tech
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
        )}
      </section>
    </>
  );
}
