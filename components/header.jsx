import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

//Chakra UI menu components
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";

//image imports:
import PlanetImage from "../public/saturn-simple.png";
import { RiMenuLine } from "react-icons/ri";
//import { BsStars } from "react-icons/bs";

export default function Header({ onClick, onClose, icon }) {
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
          <div>
            {" "}
            <h1
              onClick={onClose}
              title="tap here to enter site"
              style={{ paddingRight: "6px", borderRight: "solid 1px white" }}
            >
              Sam Gerber
            </h1>
          </div>
          <p
            className={styles.subHeading}
            style={{
              textAlign: "left",
              marginLeft: "6px",
            }}
          >
            software developer
          </p>
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
              <RiMenuLine size="3em" color="coral" />
            </MenuButton>
          </Menu>
        ) : (
          <Menu>
            <MenuButton
              className={styles.headerMenuButton}
              style={{ backgroundColor: "rgba(53, 52, 52,0)" }}
            >
              <RiMenuLine size="3em" color="#71c0bb" />
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
                  color: "#353434",
                }}
              >
                home
              </MenuItem>
              <MenuItem
                className={styles.headerMenuItem}
                onClick={onClick}
                value="tech"
                w="96px"
                h="28px"
                _active={{
                  bgColor: "coral",
                  color: "#353434",
                }}
              >
                tech
              </MenuItem>
              <MenuItem
                className={styles.headerMenuItem}
                onClick={onClick}
                value="about"
                w="96px"
                h="28px"
                _active={{
                  bgColor: "coral",
                  color: "#353434",
                }}
              >
                about
              </MenuItem>
              <MenuItem
                className={styles.headerMenuItem}
                onClick={onClick}
                value="contact"
                w="96px"
                h="28px"
                _active={{
                  bgColor: "coral",
                  color: "#353434",
                }}
              >
                contact
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </section>
    </>
  );
}
