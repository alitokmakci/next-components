import React from "react";
import AvatarProps from "./type";
import classNames from "classnames";
import styles from "./index.module.css";
import Image from "next/image";

export default function Avatar({
  className,
  color = "white",
  size = "md",
  letter,
  img,
  flat,
  square,
  circle,
  dot,
  dotColor = "primary",
  dotPosition = "bottom-right",
  dotContent,
}: AvatarProps) {
  return (
    <div
      className={classNames(
        className,
        styles.avatar,
        styles[color],
        styles[size],
        {
          [styles.flat]: flat,
          [styles.square]: square,
          [styles.circle]: circle,
        }
      )}
    >
      {img ? (
        <Image
          className={styles.img}
          width={128}
          height={128}
          src={img}
          alt="avatar"
        ></Image>
      ) : (
        <span>{letter}</span>
      )}
      {dot && (
        <span
          className={classNames(
            styles.dot,
            styles[dotColor],
            styles[dotPosition]
          )}
        >
          {dotContent}
        </span>
      )}
    </div>
  );
}
