import { useGetAllCartsQuery } from "../../redux/features/cart/cartApi";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import CartCard, { TCartProps } from "./CartCard";
import CartCardHeader from "./CartCardHeader";
import CartSubTotal from "./CartSubTotal";

const CartContainer = () => {
  const { data: carts } = useGetAllCartsQuery(undefined);
  // console.log(carts?.data);
  return (
    <Container className="space-y-12">
      <HeadLine>Shopping cart</HeadLine>

      <hr />

      <section className="divide-y divide-dashed">
        <CartCardHeader />

        {carts?.data?.map((cart: TCartProps) => (
          // console.log(cart?.productId?.img)
          <CartCard
            _id={cart?._id}
            productId={cart?.productId}
            orderQty={cart?.orderQty}
            key={cart?._id}
          />
        ))}
      </section>

      <hr />

      <section>
        <CartSubTotal subTotal={123} />
      </section>
    </Container>
  );
};

export default CartContainer;
