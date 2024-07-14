
import Search from "../form/Search";
import ButtonKbd from "../ui/ButtonKbd";

const SearchProduct = () => {
  return (
    <form
      className="flex items-center gap-4 relative"
      // onSubmit={handleSubmit(handleSearch)}
    >
      <Search
      // register={{
      //   ...register("search", { required: true, maxLength: 100 }),
      // }}
      />
      <span className="absolute left-1 top-1/5">
        <ButtonKbd />
      </span>
      <div>
        A search bar to allow users to search for products by name, brand.
      </div>
    </form>
  );
};

export default SearchProduct;
