import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-2.5 text-lg font-semibold">
        <li>
          <NavLink className="py-2 px-3 text-white hover:text-kbd-accent transition duration-300" to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink className="py-2 px-3 text-white hover:text-kbd-accent transition duration-300" to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink className="py-2 px-3 text-white hover:text-kbd-accent transition duration-300" to="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink className="py-2 px-3 text-white hover:text-kbd-accent transition duration-300" to="/contact-us">Contact</NavLink>
        </li>
        <li>
          <NavLink className="py-2 px-3 text-white hover:text-kbd-accent transition duration-300" to="/products-dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
