import { useState, ChangeEvent, JSX } from "react";
import "./Input.css";

interface Props {
  id: string;
  name: string;
  label?: string;
  type?: string;
  rows?: number;
  control: string;
  value?: string;
  placeHolder: string;
  required: boolean;
  valid?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input: React.FC<Props> = (props: Props) : JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    props.onChange(event);
  };

  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    props.onChange(event);
  };

  return (
    <div className="input">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {props.control === "input" && (
        <input
          className={[!props.valid ? "invalid" : "valid"].join(" ")}
          type={props.type}
          id={props.id}
          name={props.name}
          required={props.required}
          value={inputValue}
          placeholder={props.placeHolder}
          onChange={handleChange}
        />
      )}
      {props.control === "textarea" && (
        <textarea
          className={[!props.valid ? "invalid" : "valid"].join(" ")}
          id={props.id}
          name={props.name}
          rows={props.rows}
          required={props.required}
          value={inputValue}
          placeholder={props.placeHolder}
          onChange={handleChangeTextArea}
        />
      )}
    </div>
  );
}

export default Input
