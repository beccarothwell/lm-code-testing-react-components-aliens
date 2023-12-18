import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface SpeciesNameProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
  validate: (value: string) => string[];
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
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
      <ErrorMessage messages={errorMessages} />
    </label>
  );
};

export default SpeciesName;
