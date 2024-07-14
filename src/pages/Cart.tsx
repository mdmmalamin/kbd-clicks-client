import CartContainer from "../components/cart/CartContainer";
import ServiceAdvertisementContainer from "../components/serviceAdvertisement/ServiceAdvertisementContainer";

const Cart = () => {
  return (
    <div className="space-y-12">
      <CartContainer />

      <div className="bg-slate-500/20 py-12">
        <ServiceAdvertisementContainer />
      </div>
    </div>
  );
};

export default Cart;
