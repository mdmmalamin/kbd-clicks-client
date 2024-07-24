import Container from "../components/ui/Container";
import HeadLine from "../components/ui/HeadLine";

const Success = () => {
  return (
    <Container>
      <HeadLine className="h-[50vh] w-full flex justify-center items-center text-green-600">
        Your Order Successfully Placed!
      </HeadLine>
    </Container>
  );
};

export default Success;
