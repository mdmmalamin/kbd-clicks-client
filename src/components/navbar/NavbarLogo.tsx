import { NavLink } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div>
      <NavLink to="/">
        <h1 className="bg-kbd-primary text-white text-2xl font-extrabold inline-block py-0.5 px-2.5 border-8 border-kbd-accent">
          kbd Clicks
        </h1>
      </NavLink>
    </div>
  );
};

export default NavbarLogo;
