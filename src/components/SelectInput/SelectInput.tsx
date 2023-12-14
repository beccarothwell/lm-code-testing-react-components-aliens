import { ChangeEventHandler } from "react";

interface SelectOption {
  value: string;
  text: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  id: string;
  options: Array<SelectOption>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  id,
  options,
  onChange,
}) => {
  return (
    <label>
      {`${label}: `}
      <select name={name} id={id} onChange={onChange}>
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </label>
  );
};

export default SelectInput;
