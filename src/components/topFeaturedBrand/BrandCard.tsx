import { Link } from "react-router-dom";
import logo from "../../assets/images/brands/keygem.png";

export type TBrandProps = {
  src?: string;
  title?: string;
  link?: string;
};

const BrandCard = ({ src, title, link }: TBrandProps) => {
  return (
    <Link to={link!} target="_blank">
      <div className="size-80 bg-kbd-secondary/10">
        <img
          className="size-80 object-scale-down object-center p-6"
          src={src || logo}
          alt={`${title} brand logo`}
        />
      </div>
      <h3 className="text-xl font-semibold">{title || "KEY GEM"}</h3>
    </Link>
  );
};

export default BrandCard;
