import { SimpleSpread, UIColor } from "@ui/ui";
import React from "react";

interface Switch {
  color?: UIColor;
  square?: boolean;
  flat?: boolean;
  size?: string;
}

type SwitchProps = SimpleSpread<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  Switch
>;

export default SwitchProps;
