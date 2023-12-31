interface FormInputProps {
  label: string;
  name: string;
  id: string;
  autoComplete: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default FormInputProps;
