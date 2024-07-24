import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import FeaturedCard, {
  TFeaturedCardProps,
} from "../featuredProducts/FeaturedCard";
import Container from "../ui/Container";
import SingleProductDetails from "./SingleProductDetails";
import scrollToTop from "../ScrollToTop";
import getRandomNumber from "../../utils/getRandomNumber";
import HeadLine from "../ui/HeadLine";

const ProductDetailsPageContainer = () => {
  const { data: products } = useGetProductsQuery({});

  const dataLen = products?.data?.length-2;

  const start = getRandomNumber(dataLen);
  return (
    <Container>
      <SingleProductDetails />

      <hr className="my-24" />

      <HeadLine className="!text-left my-12">Recommended</HeadLine>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-between items-center my-12">
        {products?.data
          ?.slice(start, dataLen)
          .map((product: TFeaturedCardProps) => (
            <Link
              to={`/product-details/${product?._id}`}
              state={product}
              key={product?._id}
              onClick={scrollToTop}
              className="scale-95"
            >
              <FeaturedCard {...product} />
            </Link>
          ))}
      </section>
    </Container>
  );
};

export default ProductDetailsPageContainer;
