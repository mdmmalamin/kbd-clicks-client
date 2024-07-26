import IMinus from "../../assets/icons/IMinus";
import IPlus from "../../assets/icons/IPlus";
import { setCartPrice } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

type TCounter = {
  _id?: string;
  total?: number;
  orderQty?: number;
  quantity?: number;
  count?: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ _id, total, quantity, count, setCount }: TCounter) => {
  const dispatch = useAppDispatch();

  const countIncrement = (_id: string, total: number) => {
    let increment: number;
    (count === quantity && (increment = quantity!)) || (increment = count! + 1);
    setCount(increment);

    total && dispatch(setCartPrice({ _id: _id, total: total }));
  };

  const countDecrement = (_id: string, total: number) => {
    let decrement: number;
    (count === 1 && (decrement = 1)) || (decrement = count! - 1);
    setCount(decrement);

    total && dispatch(setCartPrice({ _id: _id, total: total }));
  };

  return (
    <div className="w-fit flex items-center text-lg border rounded-md">
      <button className="flex-1" onClick={() => countDecrement(_id!, total!)}>
        <IMinus />
      </button>
      <p className="flex-auto w-8 text-lg font-semibold text-center">{count}</p>
      <button
        className="flex-1"
        onClick={() => countIncrement(_id!, total!)}
        disabled={quantity === 0}
      >
        <IPlus />
      </button>
    </div>
  );
};

export default Counter;
