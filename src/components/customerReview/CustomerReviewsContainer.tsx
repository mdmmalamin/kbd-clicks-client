import { useEffect, useState } from "react";
import ILeftArrow from "../../assets/icons/ILeftArrow";
import IRightArrow from "../../assets/icons/IRightArrow";
import customerReviews from "../../assets/constants/customerReviews";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import Review from "./Review";

const CustomerReviewsContainer = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? customerReviews?.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === customerReviews?.length - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  });

  const isSmallScreen = window.innerWidth <= 768;
  return (
    <Container className="space-y-12">
      <HeadLine>Customer Reviews</HeadLine>

      <div className="max-w-full min-w-[350px] mx-auto h-full flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-5 lg:px-0">
        <div className="relative overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
            <button
              onClick={prevSlider}
              className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <ILeftArrow />
            </button>
            <button
              onClick={nextSlider}
              className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <IRightArrow />
            </button>
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 50)
              }%)`,
            }}
          >
            {/* sliders */}
            {customerReviews?.map((review, idx) => (
              <Review {...review} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CustomerReviewsContainer;
