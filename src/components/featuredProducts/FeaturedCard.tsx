import IFiveStar from "../../assets/icons/IFiveStar";
import keyboard from "../../assets/images/hero/inspact-keyboard.jpg";
import { Button } from "../ui/button";

export type TFeaturedCardProps = {
  _id: string;
  title: string;
  brand: string;
  rating: number;
  quantity: number;
  price: number;
  img: string;
  status: "in-stock" | "out-of-stock";
  isDeleted: boolean;
};

const FeaturedCard = ({
  title,
  brand,
  rating,
  quantity,
  price,
  img,
}: TFeaturedCardProps) => {
  return (
    <div className="w-[360px] h-full p-5 mx-auto hover:scale-105 transition duration-300 rounded-2xl bg-white hover:bg-kbd-accent/20">
      <div className="size-80 mx-auto rounded-[17px] border-2 border-kbd-accent shadow-lg">
        <img
          className="h-full w-full mx-auto rounded-2xl border-2 border-kbd-accent shadow-lg"
          src={img || keyboard}
          alt=""
        />
      </div>

      <div className="w-80 mx-auto pt-5 space-y-1">
        <div className="flex justify-between text-xs">
          <p className="border bg-kbd-tertiary text-white font-semibold px-5 py-0.5 rounded-full">
            {brand}
          </p>
          <>{rating && <IFiveStar rating={rating} />}</>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <p>${price}</p>
          {quantity >= 0 && (
            <p className="text-xs">
              Just{" "}
              <span className="text-base font-semibold text-kbd-tertiary">
                {quantity}
              </span>{" "}
              remaining
            </p>
          )}
        </div>
        <div>
          <p className="line-clamp-1 font-semibold normal-case">{title}</p>

          <Button className="w-full mt-2 bg-kbd-accent hover:bg-kbd-tertiary text-primary hover:text-white font-semibold transition duration-300">
            See Details Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
