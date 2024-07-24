import { ChangeEventHandler } from "react";
import { FieldValues } from "react-hook-form";

const Search = ({
  register,
  onChange,
}: {
  register?: FieldValues;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      className="w-80 pl-10 pr-3 py-2.5 text-sm border rounded-full placeholder:italic placeholder:text-kbd-secondary focus:outline-none focus:border-kbd-accent focus:ring-kbd-tertiary focus:ring-1"
      type="search"
      placeholder="Search product"
      {...register}
      onChange={onChange}
    />
  );
};

export default Search;
