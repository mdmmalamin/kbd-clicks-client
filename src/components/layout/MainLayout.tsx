import { Outlet } from "react-router-dom";
import NavbarContainer from "../Navbar/NavbarContainer";
import FooterContainer from "../FooterContainer";

const MainLayout = () => {
  return (
    <div className="bg-slate-50">
      <NavbarContainer />
      <Outlet />
      <FooterContainer />
    </div>
  );
};

export default MainLayout;
