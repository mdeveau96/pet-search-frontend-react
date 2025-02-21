import { useState, ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  rows?: number;
  control: string;
  value?: string;
  placeHolder: string;
  required: boolean;
  valid?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Input({
  id,
  name,
  label,
  type,
  rows,
  control,
  placeHolder,
  required,
  valid,
  onChange
}: InputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(event);
  };

  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(event);
  };

  return (
    <div className="input">
      {label && <label htmlFor={id}>{label}</label>}
      {control === "input" && (
        <input
          className={[!valid ? "invalid" : "valid"].join(" ")}
          type={type}
          id={id}
          name={name}
          required={required}
          value={inputValue}
          placeholder={placeHolder}
          onChange={handleChange}
        />
      )}
      {control === "textarea" && (
        <textarea
          className={[!valid ? "invalid" : "valid"].join(" ")}
          id={id}
          name={name}
          rows={rows}
          required={required}
          value={inputValue}
          placeholder={placeHolder}
          onChange={handleChangeTextArea}
        />
      )}
    </div>
  );
}
