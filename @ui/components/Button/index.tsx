"use client";
import React, { forwardRef, useId, useMemo } from "react";
import { ButtonProps } from "./type";
import classNames from "classnames";
import Spinner from "@ui/components/Spinner";
import useRippleEffect from "@ui/hooks/useRippleEffect";
import { UIColorWithWhite } from "@ui/ui";
import { uiConfig } from "@ui/ui.config";
import template from "@ui/components/Button/template";

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
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
    noRipple = false,
    groupPosition,
    ...buttonProps
  },
  ref
) {
  const id = useId();

  useRippleEffect(
    uiConfig.buttonRippleEffect && !noRipple ? `[data-id='${id}']` : ""
  );

  function getSpinnerColor(): UIColorWithWhite {
    if (spinnerColor) {
      return spinnerColor;
    }

    if (flat) {
      return color;
    }

    return "white";
  }

  const buttonColor = useMemo(() => {
    if (flat) {
      return [template.flat.colors[color], template.flat.main];
    }

    if (bordered) {
      return [template.bordered.colors[color], template.bordered.main];
    }

    return [template.default.main, template.default.colors[color]];
  }, [bordered, color, flat]);

  return (
    <button
      ref={ref}
      data-id={id}
      {...buttonProps}
      className={classNames(
        className,
        template.main,
        template.sizes[size],
        buttonColor,
        {
          [template.square]: square,
          [template.pill]: pill,
          [template.block]: block,
          [template.group.children.main]: groupPosition,
          [template.group.children[
            groupPosition as "start" | "middle" | "end"
          ]]: groupPosition,
          [template.loading]: loading,
        }
      )}
    >
      {loading ? <Spinner size={size} color={getSpinnerColor()} /> : children}
    </button>
  );
});
