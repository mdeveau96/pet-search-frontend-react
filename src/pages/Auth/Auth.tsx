import { ReactNode } from "react";
import "./Auth.css";
import Card from "../../components/Card/Card";

interface AuthProps {
  children: ReactNode;
}

export default function Auth({ children }: AuthProps) {
  return <Card><section className="auth-form">{children}</section></Card>;
}
