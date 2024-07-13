import { Link } from "react-router-dom";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import FeaturedCard from "./FeaturedCard";

const FeaturedProductsContainer = () => {
  return (
    <Container className="space-y-12">
      <HeadLine>Featured Products Container</HeadLine>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 justify-between items-center">
        <FeaturedCard quantity={12} />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </section>

      <div className="flex justify-center items-center text-2xl font-bold">
        <Link
          to="/products"
          className="py-3 px-12 rounded-full bg-kbd-accent hover:bg-kbd-tertiary text-primary hover:text-white font-semibold transition duration-300"
        >
          See More
        </Link>
      </div>
    </Container>
  );
};

export default FeaturedProductsContainer;
