import "./Input.css";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  control: string;
  value?: string;
  placeHolder: string;
  required: boolean;
  valid?: boolean;
  onchange: () => void
}

export default function Input({
  id,
  name,
  label,
  type,
  control,
  value,
  placeHolder,
  required,
  valid,
}: InputProps) {
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
          value={value}
          placeholder={placeHolder}
        />
      )}
      {control === "textarea" && (
        <textarea
          className={[!valid ? "invalid" : "valid"].join(" ")}
          id={id}
          required={required}
          value={value}
          placeholder={placeHolder}
        />
      )}
    </div>
  );
}
