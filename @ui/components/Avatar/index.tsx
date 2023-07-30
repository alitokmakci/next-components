import React, { useMemo } from "react";
import AvatarProps from "./type";
import classNames from "classnames";
import Image from "next/image";
import template from "./template";

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
  const avatarColor = useMemo(() => {
    if (flat) {
      return [template.flat.main, template.flat.colors[color]];
    }

    return [template.default.main, template.default.colors[color]];
  }, [color, flat]);
  return (
    <div
      className={classNames(
        className,
        template["main"],
        template["sizes"][size],
        avatarColor,
        {
          [template.radius.square]: square,
          [template.radius.circle]: circle,
          [template.radius.default]: !square && !circle,
        }
      )}
    >
      {img ? (
        <Image
          className={template.image}
          width={128}
          height={128}
          src={img}
          alt="avatar"
          priority
        ></Image>
      ) : (
        <span>{letter}</span>
      )}
      {dot && (
        <span
          className={classNames(
            template.dot.main,
            template.default.colors[dotColor],
            template.dot.position[dotPosition]
          )}
        >
          {dotContent}
        </span>
      )}
    </div>
  );
}
