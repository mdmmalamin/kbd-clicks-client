import { Outlet } from "react-router-dom";
import NavbarContainer from "../navbar/NavbarContainer";
import FooterContainer from "../FooterContainer";

const MainLayout = () => {
  return (
    <div className="bg-slate-200">
      <div className="relative z-20">
        <NavbarContainer />
      </div>
      <div className="relative">
        <div className="w-screen h-screen fixed bottom-10 z-10 blur-3xl">
          <div className="w-[10vw] h-[10vh] clip-polygon rounded-full bg-kbd-accent fixed bottom-40 left-10"></div>
          <div className="w-36 h-36 rounded-full bg-red-500 fixed top-40 right-[10%]"></div>
          <div className="w-[10vw] h-[10vh] rounded-full bg-kbd-primary fixed top-1/3 right-2/4"></div>
        </div>
        <div className="relative z-20">
          <Outlet />
        </div>
      </div>
      <div className="relative z-20">
        <FooterContainer />
      </div>
    </div>
  );
};

export default MainLayout;
