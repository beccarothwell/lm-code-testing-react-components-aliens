import { ChangeEventHandler } from "react";

interface SpeciesNameProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default SpeciesName;
