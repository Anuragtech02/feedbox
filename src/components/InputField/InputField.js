import React from "react";
import styles from "./InputField.module.scss";
import clsx from "clsx";

const InputField = ({
  className,
  placeholder,
  value,
  onChange,
  multi,
  rows,
  ...rest
}) => {
  return multi ? (
    <textarea
      className={clsx(styles.inputArea, className)}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      {...rest}
    />
  ) : (
    <input
      className={clsx(styles.inputField, className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default InputField;
