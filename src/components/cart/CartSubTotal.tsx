import { Link } from "react-router-dom";
import Btn from "../ui/Btn";
import { useGetAllCartsQuery } from "../../redux/features/cart/cartApi";
import { TCartProps } from "./CartCard";

const CartSubTotal = () => {
  const { data: orders } = useGetAllCartsQuery(undefined);

  const subTotal = orders?.data
    ?.map((order: TCartProps) => order?.orderQty * order?.productId?.price)
    ?.reduce((prev: number, curr: number) => prev + curr, 0)
    ?.toFixed(2);

  return (
    <div className="flex flex-col items-end gap-6">
      <h4 className="text-3xl">Subtotal: ${subTotal}</h4>
      <p>Taxes and shipping calculated at checkout</p>
      <Link to="/check-out">
        <Btn>Check Out</Btn>
      </Link>
      <span className="text-red-700 hover:scale-105 transition duration-300">
        <Link to="/products">Continue shopping</Link>
      </span>
    </div>
  );
};

export default CartSubTotal;
