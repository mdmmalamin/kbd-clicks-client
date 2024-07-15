import FeaturedProductsContainer from "../featuredProducts/FeaturedProductsContainer";
import Container from "../ui/Container";
import SingleProductDetails from "./SingleProductDetails";

const ProductDetailsPageContainer = () => {
  return (
    <Container>
      <SingleProductDetails />

      <hr className="my-24" />

      <FeaturedProductsContainer />
    </Container>
  );
};

export default ProductDetailsPageContainer;
