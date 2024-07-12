import { ReactNode } from "react";

type TContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container = ({ className, children }: TContainerProps) => {
  return (
    <div className={`h-full w-full max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
