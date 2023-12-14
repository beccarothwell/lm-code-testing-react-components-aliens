import { ChangeEventHandler } from "react";

interface NumberOfBeingsProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default NumberOfBeings;
