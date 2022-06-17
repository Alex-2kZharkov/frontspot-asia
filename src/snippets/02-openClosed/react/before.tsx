import { FC } from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  label: string;
  addonLeftClassName?: string;
  addonRightClassName?: string;
  helpText?: React.ReactNode;
  oneMore?: string;
  andEvenMore?: string;
  moreMoreAndMore?: string;
}

export const Input: FC<InputProps> = ({
  label,
  addonLeftClassName,
  addonRightClassName,
  onChange,
  value,
  helpText,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
      <div className={addonLeftClassName}>LEFT</div>
      <div className={addonRightClassName}>RIGHT</div>
      {helpText}
    </div>
  );
};
