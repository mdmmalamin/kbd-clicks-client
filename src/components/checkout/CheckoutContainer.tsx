import { FieldValues, useForm } from "react-hook-form";
import Input from "../form/Input";
import Label from "../form/Label";
import Btn from "../ui/Btn";
import Container from "../ui/Container";
import { toast } from "sonner";
import { usePlacedOrderMutation } from "../../redux/features/cart/cartApi";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const [placedOrder] = usePlacedOrderMutation();

  const navigate = useNavigate();

  const placeOrder = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Order processing");

    if (data?.payment === "stripe") {
      toast.warning("Stripe payment system under-construction", {
        id: toastId,
        duration: 3000,
      });

      return;
    }

    try {
      await placedOrder("place-order");

      toast.success("Order placed successful.", {
        id: toastId,
        duration: 2000,
      });

      setTimeout(() => {
        navigate("/order-success");
      }, 800);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Container className="my-24">
      <form
        className="max-w-96 mx-auto space-y-4"
        onSubmit={handleSubmit(placeOrder)}
      >
        <div>
          <div className="flex gap-6 items-center justify-between">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              placeholder="Joe Doe"
              type="text"
              register={{
                ...register("fullName", { required: "Full Name is required" }),
              }}
            />
          </div>
          {errors.fullName && (
            <p
              role="alert"
              className="text-red-600 text-xs mx-2 my-1 text-right"
            >
              {!errors?.fullName?.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex gap-6 items-center justify-between">
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="joe.doe@example.com"
              type="email"
              register={{
                ...register("email", { required: "Email is required" }),
              }}
            />
          </div>
          {errors.email && (
            <p
              role="alert"
              className="text-red-600 text-xs mx-2 my-1 text-right"
            >
              {!errors?.email?.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex gap-6 items-center justify-between">
            <Label htmlFor="phone">Phone</Label>
            <Input
              placeholder="01700000000"
              type="tel"
              register={{
                ...register("phone", { required: "Phone no. is required" }),
              }}
            />
          </div>
          {errors.phone && (
            <p
              role="alert"
              className="text-red-600 text-xs mx-2 my-1 text-right"
            >
              {!errors?.phone?.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex gap-6 items-center justify-between">
            <Label htmlFor="address">Address</Label>
            <Input
              placeholder="Enter your shipping address"
              type="text"
              register={{
                ...register("address", { required: "Address is required" }),
              }}
            />
          </div>
          {errors.address && (
            <p
              role="alert"
              className="text-red-600 text-xs mx-2 my-1 text-right"
            >
              {!errors?.address?.message}
            </p>
          )}
        </div>

        <div className="flex gap-6 items-center justify-between">
          <Label htmlFor="address">Payment</Label>
          <select
            {...register("payment", {
              required: "Please select an payment option",
            })}
            className="appearance-none border rounded-md w-[280px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              Payment Options
            </option>
            <option value="cod">Cash On Delivery</option>
            <option value="stripe">Strip</option>
          </select>
        </div>

        <Btn type="submit" className="w-full">
          Place Order
        </Btn>
      </form>
    </Container>
  );
};

export default CheckoutContainer;
