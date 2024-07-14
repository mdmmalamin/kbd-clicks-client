import { FieldValues } from "react-hook-form";

type TInputProps = {
  register?: FieldValues;
  type?: string;
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
};

const Input = ({
  register,
  type,
  placeholder,
  className,
  id,
  name,
}: TInputProps) => {
  return (
    <input
      className={`px-4 py-2 flex-auto border rounded-md placeholder:italic placeholder:text-kbd-secondary focus:outline-none focus:border-kbd-accent focus:ring-kbd-tertiary focus:ring-1 ${className}`}
      type={type || "text"}
      placeholder={placeholder || "Placeholder"}
      id={id}
      name={name}
      {...register}
    />
  );
};

export default Input;
