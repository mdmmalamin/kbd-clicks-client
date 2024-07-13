import { FieldValues } from "react-hook-form";

const Input = ({ register }: { register?: FieldValues }) => {
  return (
    <input
      className="w-80 pl-10 pr-3 py-2.5 text-sm border rounded-full placeholder:italic placeholder:text-kbd-secondary focus:outline-none focus:border-kbd-accent focus:ring-kbd-tertiary focus:ring-1"
      type="search"
      placeholder="Searching product... [ Under-Construction]"
      {...register}
    />
  );
};

export default Input;
