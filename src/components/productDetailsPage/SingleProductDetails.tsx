import keyboard from "../../assets/images/hero/kbd-6.png";
import IFiveStar from "../../assets/icons/IFiveStar";
import ButtonCart from "../ui/ButtonCart";
import Counter from "../ui/Counter";
import { useLocation } from "react-router-dom";
import {
  useCreateCartMutation,
  useGetAllCartsQuery,
} from "../../redux/features/cart/cartApi";
import { toast } from "sonner";
import { useState } from "react";
import { TCartProps } from "../cart/CartCard";

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
  const { data: allCarts } = useGetAllCartsQuery(undefined);
  const [setCart] = useCreateCartMutation();

  const isAlreadyAdded = allCarts?.data?.find(
    (cart: TCartProps) => cart?.productId?._id === _id
  );

  const createAddToCart = async () => {
    const toastId = toast.loading("Add to cart processing...");

    try {
      const cartInfo = {
        productId: _id,
        orderQty: count,
      };

      if (!isAlreadyAdded) {
        await setCart(cartInfo);

        toast.success("Cart successfully added.", {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.info(`${title} is already added! CHECKED the cart.`, {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:my-12">
      <div className="flex-1">
        <div className="max-w-[31rem] max-h-[31rem] mx-auto">
          <img
            className="h-full w-full bg-white p-5 mx-auto border-2 border-kbd-accent shadow-lg"
            src={img || keyboard}
            alt=""
          />
        </div>
      </div>

      <div className="flex-1 bg-white p-5">
        <div className="max-w-[31rem] max-h-full mx-auto space-y-6">
          <h1 className="text-5xl font-thin">{title}</h1>

          <div className="border rounded-2xl py-6 px-4 relative">
            <p className="absolute -top-4 text-lg bg-white px-2">Price</p>
            <p className="px-2">
              <span>{currency || "$"}</span>
              {price}
            </p>
          </div>

          <div className="flex gap-6">
            <Counter
              // _id={_id}
              // total={price * count}
              count={count}
              setCount={setCount}
              quantity={quantity}
            />

            <ButtonCart quantity={quantity} onClick={createAddToCart} />
          </div>

          <div>
            <p>Brand: {brand}</p>
          </div>

          <div className="flex justify-between items-center border rounded-md px-4 py-2">
            <p>
              Just <span className="">{quantity}</span> remaining
            </p>
            <div>{rating && <IFiveStar rating={rating} />}</div>
          </div>

          <div>{description}</div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductDetails;
