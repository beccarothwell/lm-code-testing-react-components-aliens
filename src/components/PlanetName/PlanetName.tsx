import { ChangeEventHandler } from "react";

interface PlanetNameProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const PlanetName: React.FC<PlanetNameProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default PlanetName;
