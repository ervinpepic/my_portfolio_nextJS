export interface FormInputProps {
  value: {
    [key: string]: string;
  };
  onChange: (fieldName: string, value: string) => void;
  errors?: {[key: string]: string};
}