import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface PlanetNameProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
  validate: (value: string) => string[];
}

const PlanetName: React.FC<PlanetNameProps> = ({
  label,
  name,
  id,
  value,
  onChange,
  validate,
}) => {
  const errorMessages = validate(value);
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
      {errorMessages.length > 0 && <ErrorMessage messages={errorMessages} />}
    </label>
  );
};

export default PlanetName;
