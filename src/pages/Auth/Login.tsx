import { ChangeEvent, useState } from "react";
import Auth from "./Auth";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      setError("Invalid email or password");
      return;
    }

    try {
      console.log("Login attempt:", loginData);
      setLoginData({ email: "", password: "" });
      setError("");
    } catch {
      setError("Incorrect email or password");
    }
  };

  return (
    <Auth>
      <form onSubmit={handleLoginAttempt} noValidate>
        <header className="login-header">
          <span>Pet Search</span>
        </header>
        <div className="email-input">
          <Input
            id="email"
            name="email"
            type="text"
            control="input"
            placeHolder="Email Address"
            required={true}
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div className="password-input">
          <Input
            id="password"
            name="password"
            type="password"
            control="input"
            placeHolder="Password"
            required={true}
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="remember-forgot">
          <label className="remember-me" htmlFor="remember-me"><input className="remember-me" type="checkbox" id="remember-me"/>Remember Me?</label>
          <div className="password-reset">
            <Link to="/reset-password">Forgot password?</Link>
          </div>
        </div>
        <p className="optional-logins"><span>OR</span></p>
        <Button design="submit" type="submit">
          Log In
        </Button>
      </form>
    </Auth>
  );
}
