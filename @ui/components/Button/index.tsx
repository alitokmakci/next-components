"use client";
import React, { useRef } from "react";
import { ButtonProps } from "./type";
import classNames from "classnames";
import styles from "./index.module.css";
import Spinner from "@ui/components/Spinner";
import useRippleEffect from "@ui/hooks/useRippleEffect";
import { UIColorWithWhite } from "@ui/ui";

export default function Button(props: ButtonProps) {
  const {
    className,
    color = "primary",
    size = "md",
    bordered,
    children,
    flat,
    square,
    pill,
    block,
    loading,
    spinnerColor,
    ...buttonProps
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);

  useRippleEffect("." + styles.button);

  const getSpinnerColor = (): UIColorWithWhite => {
    if (spinnerColor) {
      return spinnerColor;
    }

    if (flat) {
      return color;
    }

    return "white";
  };

  return (
    <button
      ref={buttonRef}
      {...buttonProps}
      className={classNames(
        className,
        styles.button,
        styles[size],
        styles[color],
        {
          [styles.bordered]: bordered,
          [styles.flat]: flat,
          [styles.square]: square,
          [styles.pill]: pill,
          [styles.blockBtn]: block,
        }
      )}
    >
      {loading ? <Spinner size={size} color={getSpinnerColor()} /> : children}
    </button>
  );
}
