import { ChangeEventHandler } from "react";

interface ReasonForSparingProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
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
        onChange={onChange}
      />
    </label>
  );
};

export default ReasonForSparing;
