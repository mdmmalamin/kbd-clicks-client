import { NavLink } from "react-router-dom";
import ICart from "../../assets/icons/ICart";
import { useGetAllCartsQuery } from "../../redux/features/cart/cartApi";

const NavbarCart = () => {
  const { data: carts } = useGetAllCartsQuery(undefined);
  return (
    <div className="relative hover:text-kbd-accent transition duration-300 group">
      <NavLink to="cart">
        <ICart />
        <div className="text-black text-sm absolute -top-2 -right-2.5 bg-white px-2 mx-auto rounded-full group-hover:bg-kbd-accent transition duration-300">
          {carts?.data?.length}
        </div>
      </NavLink>
    </div>
  );
};

export default NavbarCart;
