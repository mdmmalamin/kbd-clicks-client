import keyboard from "../../assets/images/hero/kbd-6.png";
import Counter from "../ui/Counter";
import ITrash from "../../assets/icons/ITrash";

type TCartProps = {
  id?: string;
  img?: string;
  title?: string;
  quantity?: number;
  price?: number;
};

const CartCard = ({ img, title, price }: TCartProps) => {
  const total = 1;
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

        <Counter />

        <div>{`$${total}` || "$124.54"}</div>

        <button>
          <ITrash />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
