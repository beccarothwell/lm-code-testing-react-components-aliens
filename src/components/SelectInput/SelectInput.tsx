interface SelectOption {
  value: string;
  text: string;
}

interface SelectInputProps {
  options: Array<SelectOption>;
}

const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  return (
    <select>
      <option value="">--Please choose an option--</option>
      {options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};

export default SelectInput;
