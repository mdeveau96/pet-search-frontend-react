import { ReactNode } from "react";
import "./Auth.css";

interface AuthProps {
  children: ReactNode;
}

export default function Auth({ children }: AuthProps) {
  return <section className="auth-form">{children}</section>;
}
