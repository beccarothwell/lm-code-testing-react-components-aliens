import { ChangeEventHandler } from "react";

interface SpeciesNameProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
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
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default SpeciesName;