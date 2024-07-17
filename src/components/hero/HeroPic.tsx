import hero01 from "../../assets/images/hero/broken-kbd.jpg";
import hero02 from "../../assets/images/hero/broken-kbd2.jpg";
import hero03 from "../../assets/images/hero/inspact-keyboard.jpg";
import hero04 from "../../assets/images/hero/kbd-6.png";

import Carousel from "../Carousel";

const HeroPic = () => {
  const testimonials = [hero01, hero03, hero02, hero04];

  return (
    <section className="space-y-16 my-32">
      <div className="shadow-lg rounded-2xl">
        <Carousel auto={true}>
          {testimonials.map((abc) => (
            <img
              className="rounded-2xl object-center bg-yellow-300 max-w-7xl"
              src={abc}
              alt=""
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroPic;
