import { ReactNode } from "react";
import { Button } from "./button";

const Btn = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <div className="flex-auto">
      <Button
        onClick={onClick}
        className="bg-kbd-accent hover:bg-rose-800 text-kbd-primary hover:text-white font-semibold transition duration-300"
      >
        {children}
      </Button>
    </div>
  );
};

export default Btn;
