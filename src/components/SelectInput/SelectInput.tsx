import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface SelectOption {
  value: string;
  text: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  id: string;
  options: Array<SelectOption>;
  value: string;
  onChange: (id: string, value: string) => void;
  validate: (value: string) => string[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  id,
  options,
  value,
  onChange,
  validate,
}) => {
  const errorMessages = validate(value);
  return (
    <label>
      {label && `${label}: `}
      <select
        name={name}
        id={id}
        onChange={(e) => onChange(e.target.id, e.target.value)}
      >
        <option value="">--Please choose an option--</option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {errorMessages.length > 0 && <ErrorMessage messages={errorMessages} />}
    </label>
  );
};

export default SelectInput;
