import IMinus from "../../assets/icons/IMinus";
import IPlus from "../../assets/icons/IPlus";

type TCounter = {
  quantity?: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ quantity, count, setCount }: TCounter) => {
  let decrement: number;
  let increment: number;

  count === 1 && (decrement = 1);
  count === quantity && (increment = quantity);

  return (
    <div className="w-fit flex items-center gap-6 text-lg border rounded-md">
      <button
        className="flex-1"
        onClick={() => setCount(decrement || count - 1)}
      >
        <IMinus />
      </button>
      <p className="flex-auto">{count}</p>
      <button
        className="flex-1"
        onClick={() => setCount(increment || count + 1)}
      >
        <IPlus />
      </button>
    </div>
  );
};

export default Counter;
