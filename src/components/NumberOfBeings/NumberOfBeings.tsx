interface NumberOfBeingsProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  label,
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <label>
      {label && `${label}: `}
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

export default NumberOfBeings;
