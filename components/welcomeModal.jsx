import React from "react";
import styles from "../styles/Home.module.css";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/modal";

import { RiArrowRightCircleLine } from "react-icons/ri";

export default function WelcomeModal({ show, onClose }) {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  if (!show) {
    return null;
  }

  return (
    // <div>
    //   <Modal isOpen={isOpen} onClose={onClose}>
    //     <ModalOverlay />
    //     <ModalContent>
    //       <ModalHeader>Welcome</ModalHeader>
    //       <ModalCloseButton />
    //       <ModalBody>
    //         <p>What is up my friend</p>
    //       </ModalBody>

    //       <ModalFooter>
    //         <Button onClick={onClose}>Close</Button>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
    // </div>

    <>
      <section className={styles.modalContainer}>
        <div className={styles.modalArea}>
          <div>
            <p
              style={{
                width: "360px",
                textAlign: "center",
                fontSize: "1em",
                padding: "10px",
              }}
            >
              Welcome to my site! Tap below to get started, then use the menu to
              explore the cube!
            </p>
          </div>
          <div>
            <button
              onClick={onClose}
              style={{
                border: "none",
                backgroundColor: "rgb(53, 52, 52)",
                color: "white",
                fontSize: "1.5em",
              }}
            >
              <RiArrowRightCircleLine
                className={styles.enterButton}
                style={{ fontSize: "2em" }}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
