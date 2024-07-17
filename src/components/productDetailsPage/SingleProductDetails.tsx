import keyboard from "../../assets/images/hero/kbd-6.png";
import IFiveStar from "../../assets/icons/IFiveStar";
import ButtonCart from "../ui/ButtonCart";
import Counter from "../ui/Counter";
import { useLocation } from "react-router-dom";
import { useCreateCartMutation } from "../../redux/features/cart/cartApi";
import { toast } from "sonner";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";

// type TSingleProductDetailsProps = {
//   id?: string;
//   img?: string;
//   title?: string;
//   brand?: string;
//   quantity?: number;
//   unit?: string;
//   price?: number;
//   currency?: string;
//   rating?: number;
//   description?: string;
//   stock?: string;
//   status?: string;
// };

const SingleProductDetails = () => {
  const [count, setCount] = useState(1);
  const { state } = useLocation();
  const {
    _id,
    img,
    title,
    brand,
    quantity,
    currency,
    price,
    rating,
    description,
  } = state;
  // console.log(state);
  const [setCart, { data, isError, isSuccess }] = useCreateCartMutation();

  // console.log(isError);

  const createAddToCart = async (data: FieldValues) => {
    const toastId = toast.loading("Add to cart processing...");

    try {
      const cartInfo = {
        productId: _id,
        quantity: count,
      };

      console.log("cartInfo:", cartInfo);

      await setCart(cartInfo);

      toast.success(`Cart successfully added.`, {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };

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
          <h1 className="text-5xl font-thin">{title || "Testing Title"}</h1>

          <div className="border rounded-2xl py-6 px-4 relative">
            <p className="absolute -top-4 text-lg bg-slate-50 px-2">Price</p>
            <p className="px-2">
              <span>{currency || "$"}</span>
              {price || 124.54}
            </p>
          </div>

          <div className="flex gap-6">
            <Counter count={count} setCount={setCount} quantity={quantity} />

            <ButtonCart quantity={quantity} onClick={createAddToCart} />
          </div>

          <div>
            <p>Brand: {brand || "Demo"}</p>
          </div>

          <div className="flex justify-between items-center border rounded-md px-4 py-2">
            <p>
              Just <span className="">{quantity || "2"}</span> remaining
            </p>
            <div>{(rating || 1) && <IFiveStar rating={rating || 1} />}</div>
          </div>

          <div>{description || "Test Demo Description"}</div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductDetails;
