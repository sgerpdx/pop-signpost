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
          {/* <div>
            <p style={{width: '360px', textAlign: 'center', fontSize: '1em'}}>
             Welcome and thanks for stopping by!
            </p>
          </div> */}
          <div>
            <button
              onClick={onClose}
              style={{
                border: "none",
                backgroundColor: "rgb(11, 90, 85)",
                color: "white",
                fontSize: "1.5em",
              }}
            >
              Enter
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
