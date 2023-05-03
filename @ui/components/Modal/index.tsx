import classNames from "classnames";
import React from "react";
import { ModalProps } from "./type";
import styles from "./index.module.css";
import { useEffect } from "react";

export default function Modal({
  children,
  active,
  onHide,
  fullScreen,
  blockBackdropClick,
  hideClose = false,
}: ModalProps) {
  function onBackdropClick() {
    if (blockBackdropClick) return;
    onHide();
  }

  useEffect(() => {
    if (active) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [active]);

  if (!active) return null;

  return (
    <div onClick={onBackdropClick} className={styles.modal}>
      <div
        className={classNames(styles.body, {
          [styles.fullScreen]: fullScreen,
        })}
      >
        {!hideClose && (
          <button onClick={onHide} className={styles.close}>
            <span className={styles.closeIcon}></span>
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
