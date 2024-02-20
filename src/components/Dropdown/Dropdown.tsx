import { Item, Select } from './styles';

type DropdownProps = {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

export function Dropdown({ options, onChange }: DropdownProps) {
  return (
    <Select onChange={(event) => onChange(event.target.value)}>
      {options.map((option) => (
        <Item value={option.value}>{option.label}</Item>
      ))}
    </Select>
  );
}
