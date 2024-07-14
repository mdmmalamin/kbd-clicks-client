import { Link } from "react-router-dom";
import Btn from "../ui/Btn";

const CartSubTotal = ({ subTotal }: { subTotal: number }) => {
  return (
    <div className="flex flex-col items-end gap-6">
      <h4 className="text-3xl">Subtotal: ${subTotal || 102.55}</h4>
      <p>Taxes and shipping calculated at checkout</p>
      <Link to="/check-out"><Btn>Check Out</Btn></Link>
      <span className="text-red-700"><Link to='/products'>Continue shopping</Link></span>
    </div>
  );
};

export default CartSubTotal;
