const CartCardHeader = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex-auto">Product</div>

      <div className="flex-initial flex items-center gap-12">
        <div>Price</div>

        <div>Quantity</div>

        <div>Total</div>

        <div>Remove</div>
      </div>
    </div>
  );
};

export default CartCardHeader;
