import { ChangeEventHandler } from "react";

interface PlanetNameProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const PlanetName: React.FC<PlanetNameProps> = ({
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

export default PlanetName;
