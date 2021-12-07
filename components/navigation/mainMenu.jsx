import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { RiMenuLine } from "react-icons/ri";
import styles from "../../styles/MainMenu.module.css";

export default function MainMenu({onClick}) {
  return (
    <>
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
    </>
  );
}
