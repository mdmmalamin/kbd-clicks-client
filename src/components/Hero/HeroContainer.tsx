import Container from "../ui/Container";
// import HeroImages from "./HeroImages";

import bg from "../../assets/images/hero/broken-kbd.jpg";
import { Button } from "../ui/button";

const HeroContainer = () => {
  return (
    <div className="py-20 bg-primary-gradient">
      <Container>
        <div
          className="w-full h-[548px] rounded-2xl flex justify-center items-center shadow-kbd-primary"
          style={{ background: `url(${bg})` }}
        >
          {/* <HeroImages /> */}
          <div className="flex flex-col gap-10 items-center justify-center bg-secondary-gradient w-full h-full rounded-2xl">
            <h1 className="text-7xl font-extrabold text-white">Theseus75</h1>
            <Button className="bg-kbd-accent text-2xl text-kbd-primary hover:text-white hover:bg-kbd-tertiary font-bold rounded-full p-6 transition duration-300">
              Order Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroContainer;
