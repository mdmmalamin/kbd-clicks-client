import CustomerReviewsContainer from "../components/customerReview/CustomerReviewsContainer";
import FaqContainer from "../components/faq/FaqContainer";
import FeaturedProductsContainer from "../components/featuredProducts/FeaturedProductsContainer";
import HeroContainer from "../components/hero/HeroContainer";
import ServiceAdvertisementContainer from "../components/serviceAdvertisement/ServiceAdvertisementContainer";
import TopFeaturedBrandsContainer from "../components/topFeaturedBrand/TopFeaturedBrandsContainer";

const Home = () => {
  return (
    <div className="space-y-12">
      <HeroContainer />

      <ServiceAdvertisementContainer />

      <FeaturedProductsContainer />

      <TopFeaturedBrandsContainer />

      <CustomerReviewsContainer />

      <FaqContainer />
    </div>
  );
};

export default Home;
