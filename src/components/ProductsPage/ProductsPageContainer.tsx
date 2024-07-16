import { Link } from "react-router-dom";
import FeaturedCard, {
  TFeaturedCardProps,
} from "../featuredProducts/FeaturedCard";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import SearchProduct from "./SearchProduct";
import FilterProduct from "./FilterProduct";
import {
  useGetProductsByPriceRangeQuery,
  useGetProductsQuery,
} from "../../redux/features/product/productApi";
import { useState } from "react";

const ProductsPageContainer = () => {
  const { data: products } = useGetProductsQuery(undefined);
  const [priority, setPriority] = useState("");

  console.log(priority)

  // const {
  //   data: productsPriceRange,
  //   isLoading,
  //   isError,
  // } = useGetProductsByPriceRangeQuery(priority);

  // isLoading && <p>Loading...</p>;
  // isError && <p>Something is wrong...</p>;
  return (
    <Container className="space-y-12">
      <HeadLine className="!text-left">All</HeadLine>

      <div className="flex justify-between items-center">
        <div>
          <SearchProduct />
        </div>

        <div>
          <FilterProduct priority={priority} setPriority={setPriority} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 justify-between items-center">
        {products?.data?.map(
          (product: TFeaturedCardProps) =>
            !product?.isDeleted && (
              <Link
                to={`/product-details/${product?._id}`}
                state={product}
                key={product?._id}
              >
                <FeaturedCard {...product} />
              </Link>
            )
        )}
      </div>
    </Container>
  );
};

export default ProductsPageContainer;
