import { Button } from "./button";

const ButtonCart = ({ quantity }: { quantity: number }) => {
  return (
    <div className="flex-auto">
      <Button
        disabled={quantity === 0}
        className="w-full h-full bg-kbd-primary hover:bg-kbd-accent text-white hover:text-kbd-primary font-semibold transition duration-300"
      >
        {quantity === 0 ? "Stock Out" : "Add To Cart"}
      </Button>
    </div>
  );
};

export default ButtonCart;
