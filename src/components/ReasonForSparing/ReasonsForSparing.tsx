import { ChangeEventHandler } from "react";

interface ReasonForSparingProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  label,
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <label>
      {`${label}: `}
      <input
        type="textarea"
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.id, e.target.value)}
      />
    </label>
  );
};

export default ReasonForSparing;
