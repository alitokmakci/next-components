import classNames from "classnames";
import React from "react";
import { InputProps } from "./type";
import styles from "./index.module.css";
import formItemStyles from "../FormItem/index.module.css";

export default function Input({
  className,
  flat,
  pill,
  noOutline,
  onValidated,
  validator,
  onChange,
  onValidationEvent,
  ...props
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validator) {
      onChange?.(e);

      return;
    }

    if (e.target.value === "") {
      onValidationEvent?.(false);
      onValidated?.("");

      return;
    }

    const result = validator(e.target.value);

    onValidationEvent?.(!result);

    result ? onValidated?.(e.target.value) : onValidated?.("");
  };

  return (
    <input
      className={classNames(styles.input, formItemStyles.input, className, {
        [styles.noOutline]: noOutline,
        [styles.flat]: flat,
        [styles.pill]: pill,
      })}
      onChange={handleChange}
      {...props}
    />
  );
}
