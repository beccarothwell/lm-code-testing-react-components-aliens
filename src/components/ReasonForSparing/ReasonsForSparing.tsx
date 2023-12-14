import { ChangeEventHandler } from "react";

interface ReasonForSparingProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  value,
  onChange,
}) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default ReasonForSparing;
