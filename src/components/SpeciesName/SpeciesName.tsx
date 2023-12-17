import { ChangeEventHandler } from "react";

interface SpeciesNameProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
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
        onChange={(e) => onChange(e.target.id, e.target.value)}
      />
    </label>
  );
};

export default SpeciesName;
