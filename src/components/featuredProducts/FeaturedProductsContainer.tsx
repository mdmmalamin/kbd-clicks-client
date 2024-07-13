import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import FeaturedCard from "./FeaturedCard";

const FeaturedProductsContainer = () => {
  return (
    <Container className="space-y-12">
      <HeadLine>Featured Products Container</HeadLine>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 justify-between items-center">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </section>
    </Container>
  );
};

export default FeaturedProductsContainer;
