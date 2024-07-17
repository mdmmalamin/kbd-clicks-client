import keyboard from "../../assets/images/hero/kbd-6.png";
import Counter from "../ui/Counter";
import ITrash from "../../assets/icons/ITrash";
import { useState } from "react";
import { useDeleteCartMutation } from "../../redux/features/cart/cartApi";

export type TCartProps = {
  _id?: string;
  img?: string;
  title?: string;
  quantity?: number;
  price?: number;
};

const CartCard = ({ _id, img, title, price, quantity }: TCartProps) => {
  const [count, setCount] = useState(quantity);
  const [deletedCart, { data, isLoading, isError, isSuccess }] =
    useDeleteCartMutation();

  const total = Number(price?.toFixed(2));

  console.log({ data, isLoading, isError, isSuccess });

  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex-auto">
        <div className="flex items-start gap-6">
          <img
            className="size-20 border-2 border-kbd-accent shadow-lg"
            src={img || keyboard}
            alt=""
          />

          {title || "Tomorrow Keycaps"}
        </div>
      </div>

      <div className="flex-initial flex items-center gap-12">
        <div>{`$${price}` || "$124.54"}</div>

        <Counter count={count} setCount={setCount} />

        <div>${total * count}</div>

        <button onClick={() => deletedCart(_id)}>
          <ITrash />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
