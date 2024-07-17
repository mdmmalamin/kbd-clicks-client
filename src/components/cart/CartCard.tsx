import keyboard from "../../assets/images/hero/kbd-6.png";
import Counter from "../ui/Counter";
import ITrash from "../../assets/icons/ITrash";
import { useState } from "react";
import { useDeleteCartMutation } from "../../redux/features/cart/cartApi";
import { TProductCard } from "../productDashboard/ProductCard";

export type TCartProps = {
  _id?: string;
  productId: TProductCard;
  orderQty?: number;
};

const CartCard = ({ _id, productId, orderQty }: TCartProps) => {
  const [count, setCount] = useState(orderQty!);
  const [deletedCart, { data, isLoading, isError, isSuccess }] =
    useDeleteCartMutation();

  const total = Number(productId?.price?.toFixed(2));

  console.log({ data, isLoading, isError, isSuccess });

  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex-auto">
        <div className="flex items-start gap-6">
          <img
            className="size-20 border-2 border-kbd-accent shadow-lg"
            src={productId?.img || keyboard}
            alt=""
          />

          {productId?.title || "Tomorrow Keycaps"}
        </div>
      </div>

      <div className="flex-initial flex items-center gap-12">
        <div>{`$${productId?.price}` || "$124.54"}</div>

        <Counter
          quantity={productId?.quantity}
          orderQty={orderQty}
          count={count!}
          setCount={setCount}
        />

        <div>${total * count}</div>

        <button onClick={() => deletedCart(_id)}>
          <ITrash />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
