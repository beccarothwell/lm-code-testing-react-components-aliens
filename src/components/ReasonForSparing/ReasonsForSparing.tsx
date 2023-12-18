import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface ReasonForSparingProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
  validate: (value: string) => string[];
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
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
        type="textarea"
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.id, e.target.value)}
      />
      <ErrorMessage messages={errorMessages} />
    </label>
  );
};

export default ReasonForSparing;
