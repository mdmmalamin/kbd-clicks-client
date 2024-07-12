import CustomerReviewsContainer from "../components/CustomerReview/CustomerReviewsContainer";
import FaqContainer from "../components/FaqContainer";
import HeroContainer from "../components/Hero/HeroContainer";
import ServiceAdvertisementContainer from "../components/ServiceAdvertisement/ServiceAdvertisementContainer";
import TopFeaturedBrandsContainer from "../components/topFeaturedBrand/TopFeaturedBrandsContainer";

const Home = () => {
  return (
    <div className="space-y-12">
      <HeroContainer />

      <ServiceAdvertisementContainer />

      <TopFeaturedBrandsContainer />

      <CustomerReviewsContainer />

      <FaqContainer />
    </div>
  );
};

export default Home;
