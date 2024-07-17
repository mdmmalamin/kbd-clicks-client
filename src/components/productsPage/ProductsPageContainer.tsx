import { Link } from "react-router-dom";
import FeaturedCard, {
  TFeaturedCardProps,
} from "../featuredProducts/FeaturedCard";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import SearchProduct from "./SearchProduct";
import FilterProduct from "./FilterProduct";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { useState } from "react";
import scrollToTop from "../ScrollToTop";

const ProductsPageContainer = () => {
  const [priceRange, setPriceRange] = useState("");
  const [search, setSearch] = useState("");
  const filter = {
    priceRange,
    search,
  };
  const { data: products } = useGetProductsQuery(filter);

  // isLoading && <p>Loading...</p>;
  // isError && <p>Something is wrong...</p>;
  return (
    <Container className="space-y-12">
      <HeadLine className="!text-left">All</HeadLine>

      <div className="flex justify-between items-center">
        <div>
          <SearchProduct setSearch={setSearch} />
        </div>

        <div className="flex items-center gap-2.5">
          <FilterProduct
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <button
            className="py-2.5 px-5 text-sm font-semibold rounded-md bg-slate-200 hover:bg-slate-300 transition duration-300"
            onClick={() => {
              setPriceRange("");
              // || setSearch("");
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 justify-between items-center">
        {products?.data?.map((product: TFeaturedCardProps) => (
          <Link
            to={`/product-details/${product?._id}`}
            state={product}
            key={product?._id}
            onClick={scrollToTop}
          >
            <FeaturedCard {...product} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ProductsPageContainer;
