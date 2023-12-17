import { ChangeEventHandler } from "react";

interface NumberOfBeingsProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  label,
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <label>
      {label && `${label}: `}
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default NumberOfBeings;
