import FeaturedCard from "../featuredProducts/FeaturedCard";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import FilterProduct from "./FilterProduct";
import SearchProduct from "./SearchProduct";

const ProductsPageContainer = () => {
  return (
    <Container className="space-y-12">
      <HeadLine className="!text-left">All</HeadLine>

      <div className="flex justify-between items-center">
        <div>
          <SearchProduct />
        </div>

        <div>
          <FilterProduct />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 justify-between items-center">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </Container>
  );
};

export default ProductsPageContainer;
