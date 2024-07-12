import { ReactNode } from "react";

type TTitleProps = {
  children?: ReactNode;
  className?: string;
};

const HeadLine = ({ children, className }: TTitleProps) => {
  return (
    <h1 className={`text-5xl font-bold text-center ${className}`}>
      {children}
    </h1>
  );
};

export default HeadLine;
