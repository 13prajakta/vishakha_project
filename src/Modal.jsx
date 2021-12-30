
import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen,content,website,reset }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}><img src="user.png" alt="avtar"/></h5>
          </div>
          {/* <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button> */}
          <div className={styles.modalContent}>
           {content?<><p>Email</p><div>{content}</div></>:<><p>Website</p><div>{website}</div></>}
          </div>
          <button
                className={`btn btn-success ${styles.resetBtn}`}
                onClick={reset}
              >
                Reset
              </button>
        </div>
      </div>
    </>
  );
};

export default Modal;