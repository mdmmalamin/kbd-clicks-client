import Counter from "../ui/Counter";
import ITrash from "../../assets/icons/ITrash";
import { useEffect, useState } from "react";
import {
  useDeleteCartMutation,
  useUpdateCartMutation,
} from "../../redux/features/cart/cartApi";
import { TProductCard } from "../productDashboard/ProductCard";
import { Link } from "react-router-dom";

export type TCartProps = {
  _id: string;
  productId: TProductCard;
  orderQty: number;
};

const CartCard = ({ _id, productId, orderQty }: TCartProps) => {
  const [count, setCount] = useState(orderQty!);
  const [updateQty] = useUpdateCartMutation();
  const [deletedCart] = useDeleteCartMutation();

  const total = (productId?.price * count).toFixed(2);
  
  useEffect(() => {
    const updateInfo = {
      id: _id,
      payload: {
        orderQty: count,
      },
    };
    updateQty(updateInfo);
  }, [_id, count, updateQty]);

  return (
    <div className="flex justify-between items-center p-5 bg-white hover:bg-white/50 backdrop-blur-3xl transition duration-300">
      <div className="flex-auto">
        <Link to={`/product-details/${productId?._id}`} state={productId}>
          <div className="flex items-center gap-6">
            <div className="size-16 object-contain object-center">
              <img
                className="size-16 border-2 border-kbd-accent shadow-lg text-xs"
                src={productId?.img}
                alt={`${productId?.title} image`}
              />
            </div>

            <div>{productId?.title}</div>
          </div>
        </Link>
      </div>

      <div className="flex-initial flex items-center justify-center text-center">
        <div className="w-20">{`$${productId?.price.toFixed(2)}`}</div>

        <Counter
          _id={_id}
          total={+total}
          quantity={productId?.quantity}
          orderQty={orderQty}
          count={count!}
          setCount={setCount}
        />

        <div className="w-20">${total}</div>

        <button className="w-20 mx-auto" onClick={() => deletedCart(_id)}>
          <div className="w-fit mx-auto">
            <ITrash />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
