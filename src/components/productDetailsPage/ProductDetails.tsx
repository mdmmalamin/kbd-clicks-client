import { useState } from "react";
import keyboard from "../../assets/images/hero/kbd-6.png";
import IPlus from "../../assets/icons/IPlus";
import IMinus from "../../assets/icons/IMinus";
import { Button } from "../ui/button";
import IFiveStar from "../../assets/icons/IFiveStar";

type TProductDetailsProps = {
  id?: string;
  img?: string;
  title?: string;
  brand?: string;
  quantity?: number;
  unit?: string;
  price?: number;
  rating?: number;
  description?: string;
  stock?: string;
  status?: string;
};

const ProductDetails = ({
  id,
  img,
  title,
  brand,
  quantity,
  unit,
  price,
  rating,
  stock,
  status,
  description,
}: TProductDetailsProps) => {
  const [count, setCount] = useState(1);
  const result = count >= 0 && count - 1;

  return (
    <section className="flex justify-between items-start my-12">
      <div className="flex-1">
        <img
          className="h-full w-[80%] mx-auto border-2 border-kbd-accent shadow-lg"
          src={img || keyboard}
          alt=""
        />
      </div>

      <div className="flex-1">
        <div className="h-full w-[80%] mx-auto space-y-6">
          <h1 className="text-5xl font-thin">{title || "Tomorrow Keycaps"}</h1>

          <div className="border rounded-2xl py-6 px-4 relative">
            <p className="absolute -top-4 text-lg bg-slate-50 px-2">Price</p>
            <p className="px-2">
              <span>{unit || "$"}</span>
              {price || 124.54}
            </p>
          </div>

          <div className="flex gap-6">
            <div className="w-fit flex items-center gap-6 text-lg border rounded-md">
              <button className="p-4 flex-1" onClick={() => setCount(result)}>
                <IMinus />
              </button>
              <p className="flex-auto">{count || "1"}</p>
              <button
                className="p-4 flex-1"
                onClick={() => setCount((prev) => prev + 1)}
              >
                <IPlus />
              </button>
            </div>

            <div className="flex-auto">
              <Button
                disabled={quantity === 0}
                className="w-full h-full bg-kbd-primary hover:bg-kbd-accent text-white hover:text-kbd-primary font-semibold transition duration-300"
              >
                {quantity === 0 ? "Stock Out" : "Add To Cart"}
              </Button>
            </div>
          </div>

          <div>
            <p>Brand: {brand || "Mode"}</p>
          </div>

          <div className="flex justify-between items-center border rounded-md px-4 py-2">
            <p>
              Just <span className="">{quantity || "2"}</span> remaining
            </p>
            <p>{(5 || rating) && <IFiveStar rating={rating || 4} />}</p>
          </div>

          <div>
            {description ||
              "Mode keycaps provide the perfect finishing touch to your dream keyboard — whether it’s your first build or your endgame. These keycaps are the result of many many months of hard work and fine tuning. Read more about them here. Cherry Profile Cherry MX Compatible New Double Shot Legends PBT/ABS Blend optimized around scratch and shine resistance The base kit has basic (or greater) support for each of the following layouts: Full-size (104/108 key), 1800, TKL, 75%, 65%, 60%, HHKB (6u Centered Stem Spacebar), Tsangan/WKL, Alice, 40s, GK64, Terminal ISO."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
