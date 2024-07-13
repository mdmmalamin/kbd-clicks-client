import { ReactNode } from "react";
import ISearch from "../../assets/icons/ISearch";

const ButtonKbd = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex items-center bg-kbd-primary rounded-full border border-kbd-tertiary">
      <label className="cursor-pointer" htmlFor="searchBtn">
        <ISearch />
      </label>
      {children}
    </div>
  );
};

export default ButtonKbd;
