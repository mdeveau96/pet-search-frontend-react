import { Link } from "react-router";
import "./Button.css";
import { ReactNode } from "react";

interface ButtonProps {
  link?: string;
  design?: string;
  mode?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
}

export default function Button({
  link,
  design,
  mode,
  onClick,
  disabled,
  loading,
  type,
  children,
}: ButtonProps) {
  return !link ? (
    <button
      className={["button", `button--${design}`, `button--${mode}`].join(" ")}
      onClick={onClick}
      disabled={disabled ?? loading}
      type={type}
    >
      {loading ? "Loading..." : children}
    </button>
  ) : (
    <Link
      className={["button", `button--${design}`, `button--${mode}`].join(" ")}
      to={link}
    >
      {children}
    </Link>
  );
}
