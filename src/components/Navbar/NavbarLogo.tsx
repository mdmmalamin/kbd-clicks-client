import { NavLink } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div>
      <NavLink to="/">
        <h1 className="bg-kbd-primary text-kbd-accent text-2xl font-extrabold inline-block py-2.5 px-5 border-2 border-kbd-accent">
          KBD Clicks
        </h1>
      </NavLink>
    </div>
  );
};

export default NavbarLogo;
