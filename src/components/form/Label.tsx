type TLabelProps = {
  children: string;
  htmlFor?: string;
  className?: string;
};

const Label = ({ htmlFor, className, children }: TLabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`font-semibold text-sm w-20 text-right text-nowrap ${className}`}>
      {children}
    </label>
  );
};

export default Label;
