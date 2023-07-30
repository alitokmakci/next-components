import React, { cloneElement, ReactNode, useMemo } from "react";
import { ButtonGroupProps } from "./type";
import { ButtonProps } from "@ui/components/Button/type";
import template from "@ui/components/Button/template";

export default function ButtonGroup({ children }: ButtonGroupProps) {
  const buttons: ReactNode = useMemo(() => {
    return children.map((child, index) =>
      cloneElement(child, {
        ...child.props,
        key: index,
        groupPosition:
          index === 0
            ? "start"
            : index ===
              (children as React.ReactElement<ButtonProps>[]).length - 1
            ? "end"
            : "middle",
      })
    );
  }, [children]);

  return <div className={template.group.main}>{buttons}</div>;
}
