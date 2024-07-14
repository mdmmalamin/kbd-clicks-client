import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import CartCard from "./CartCard";
import CartCardHeader from "./CartCardHeader";
import CartSubTotal from "./CartSubTotal";

const CartContainer = () => {
  return (
    <Container className="space-y-12">
      <HeadLine>Shopping cart</HeadLine>

      <hr />

      <section className="divide-y divide-dashed">
        <CartCardHeader />

        <CartCard />
        <CartCard />
      </section>

      <hr />

      <section>
        <CartSubTotal subTotal={123} />
      </section>
    </Container>
  );
};

export default CartContainer;
