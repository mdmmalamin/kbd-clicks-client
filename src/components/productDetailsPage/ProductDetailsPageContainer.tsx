import FeaturedProductsContainer from "../featuredProducts/FeaturedProductsContainer";
import Container from "../ui/Container";
import ProductDetails from "./ProductDetails";

const ProductDetailsPageContainer = () => {
  return (
    <Container>
      <ProductDetails />

      <hr className="my-24" />

      <FeaturedProductsContainer />
    </Container>
  );
};

export default ProductDetailsPageContainer;
