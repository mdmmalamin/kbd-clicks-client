import { ReactNode } from "react";

type TBtnProps = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const Btn = ({ children, onClick, className, type }: TBtnProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex-auto px-7 py-3.5 rounded-md bg-kbd-accent hover:bg-rose-800 text-kbd-primary hover:text-white font-semibold transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Btn;
