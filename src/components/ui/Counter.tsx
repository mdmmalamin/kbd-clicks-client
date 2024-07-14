import { useState } from "react";
import IMinus from "../../assets/icons/IMinus";
import IPlus from "../../assets/icons/IPlus";

const Counter = () => {
  const [count, setCount] = useState(1);
  const result = count > 0 && count - 1;
  return (
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
  );
};

export default Counter;
