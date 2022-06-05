import { FC } from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  children?: React.ReactNode;
}

export const Input: FC<InputProps> = ({ value, onChange, label, children }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} />
      {children}
    </div>
  );
};

export const FancyInput = () => {
  return (
    <div className="container">
      <Input
        value="Value"
        onChange={() => console.log("Hello world")}
        label="Label"
      >
        <div className="addonLeftClassName">LEFT</div>
        <div className="addonRightClassName">RIGHT</div>
      </Input>
    </div>
  );
};
