import { FC } from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  label: string;
  addonLeftClassName?: string;
  addonRightClassName?: string;
  helpText?: React.ReactNode;
}

export const Input: FC<InputProps> = ({
  label,
  addonLeftClassName,
  addonRightClassName,
  className,
  onChange,
  value,
  helpText,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} />
      <div className={addonLeftClassName}>LEFT</div>
      <div className={addonRightClassName}>RIGHT</div>
      {helpText}
    </div>
  );
};
