import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import HeadLine from "../components/ui/HeadLine";

const Success = () => {
  return (
    <Container className="h-[70vh] w-full flex flex-col gap-5 justify-center items-center">
      <HeadLine className=" text-kbd-tertiary">
        Your Order Successfully Placed!
      </HeadLine>
      <Link
        to="/"
        className="text-3xl font-bold text-kbd-secondary hover:text-white hover:[text-shadow:_0_2px_0_rgb(0_0_0_)] shadow-red-500 text-center underline underline-offset-8 duration-300"
      >
        Continue shopping
      </Link>
    </Container>
  );
};

export default Success;
