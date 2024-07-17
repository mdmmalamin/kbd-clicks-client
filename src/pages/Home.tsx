import CustomerReviewsContainer from "../components/customerReview/CustomerReviewsContainer";
import FaqContainer from "../components/faq/FaqContainer";
import FeaturedProductsContainer from "../components/featuredProducts/FeaturedProductsContainer";
import HeroContainer from "../components/hero/HeroContainer";
import ServiceAdvertisementContainer from "../components/serviceAdvertisement/ServiceAdvertisementContainer";
import TopFeaturedBrandsContainer from "../components/topFeaturedBrand/TopFeaturedBrandsContainer";

const Home = () => {
  return (
    <div className="sm:space-y-12 sm:mb-12 md:space-y-24 md:mb-24">
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
