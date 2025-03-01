import { Link } from "react-router";
import "./Button.css";
import React, { JSX, ReactNode } from "react";

interface Props {
  link?: string;
  design?: string;
  mode?: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
}

const Button: React.FC<Props> = (props: Props): JSX.Element => {
  return !props.link ? (
    <button
      className={[
        "button",
        `button--${props.design}`,
        `button--${props.mode}`,
        `${props.selected ? "selected" : ""}`,
      ].join(" ")}
      onClick={props.onClick}
      disabled={props.disabled ?? props.loading}
      type={props.type}
    >
      {props.loading ? "Loading..." : props.children}
    </button>
  ) : (
    <Link
      className={[
        "button",
        `button--${props.design}`,
        `button--${props.mode}`,
        `${props.selected ? "selected" : ""}`,
      ].join(" ")}
      to={props.link}
    >
      {props.children}
    </Link>
  );
};

export default Button;
