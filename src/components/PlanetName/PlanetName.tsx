interface PlanetNameProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
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
        onChange={(e) => onChange(e.target.id, e.target.value)}
      />
    </label>
  );
};

export default PlanetName;
