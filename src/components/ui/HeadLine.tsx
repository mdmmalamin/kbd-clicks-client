import { ReactNode } from "react";

type TTitleProps = {
  children?: ReactNode;
};

const HeadLine = ({ children }: TTitleProps) => {
  return <h1 className="text-3xl font-bold text-center">{children}</h1>;
};

export default HeadLine;
