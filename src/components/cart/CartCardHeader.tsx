const CartCardHeader = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex-auto font-bold">Product</div>

      <div className="flex-initial flex items-center text-center font-bold">
        <div className="w-20">Price</div>

        <div className="w-36">Quantity</div>

        <div className="w-20">Total</div>

        <div className="w-20">Remove</div>
      </div>
    </div>
  );
};

export default CartCardHeader;
