import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from '../../../styles/Modal.module.css'

export default function Modal({show, onClose, closeBtnName, children}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  }

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.body}>{children}</div>
        <div className={styles.header}>
          <a href="#resultid" onClick={handleClose}>
            <button className="btn btn-primary">{closeBtnName}</button>
          </a>
        </div>
      </div>
    </div>
  ) : null;

  if(isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }


}