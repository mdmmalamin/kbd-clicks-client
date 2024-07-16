import Search from "../form/Search";
import ButtonKbd from "../ui/ButtonKbd";
import { FieldValues, useForm } from "react-hook-form";

type TStateProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchProduct = ({ setSearch }: TStateProps) => {
  const { register, handleSubmit } = useForm();

  const handleSearch = (data: FieldValues) => setSearch(data?.searchTerm);
  return (
    <form
      className="flex items-center gap-4 relative"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Search
        register={{
          ...register("searchTerm", { required: true, maxLength: 100 }),
        }}
      />
      <button type="submit" className="absolute left-1 top-1/5">
        <ButtonKbd />
      </button>
    </form>
  );
};

export default SearchProduct;
