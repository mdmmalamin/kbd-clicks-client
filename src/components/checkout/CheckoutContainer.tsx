import { FieldValues, useForm } from "react-hook-form";
import Input from "../form/Input";
import Label from "../form/Label";
import Btn from "../ui/Btn";
import Container from "../ui/Container";
import { toast } from "sonner";

const CheckoutContainer = () => {
  const { register, handleSubmit } = useForm();

  const placeOrder = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Order processing");

    data?.payment === "stripe" &&
      toast.error("Stripe payment system under-construction", {
        id: toastId,
        duration: 3000,
      });

    try {
      // const orderInfo = {
      //   id: data,
      // };
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Container>
      <form
        className="max-w-96 mx-auto space-y-4"
        onSubmit={handleSubmit(placeOrder)}
      >
        <div className="flex gap-6 items-center justify-between">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            // id="fullName"
            type="text"
            register={{
              ...register("fullName", { required: "Full Name is required" }),
            }}
          />
        </div>
        <div className="flex gap-6 items-center justify-between">
          <Label htmlFor="email">Email</Label>
          <Input
            // id="email"
            type="email"
            register={{
              ...register("email", { required: "Email is required" }),
            }}
          />
        </div>
        <div className="flex gap-6 items-center justify-between">
          <Label htmlFor="phone">Phone</Label>
          <Input
            // id="phone"
            type="tel"
            register={{
              ...register("phone", { required: "Phone no. is required" }),
            }}
          />
        </div>
        <div className="flex gap-6 items-center justify-between">
          <Label htmlFor="address">Address</Label>
          <Input
            // id="address"
            type="text"
            register={{
              ...register("address", { required: "Address is required" }),
            }}
          />
        </div>

        <div className="flex justify-end">
          <select
            // id="payment"
            {...register("payment", {
              required: "Please select an payment option",
            })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              Payment Options
            </option>
            <option value="cod">Cash On Delivery</option>
            <option value="stripe">Strip</option>
          </select>
        </div>
        {/* <button type="submit">Submit</button> */}

        <Btn type="submit">Place Order</Btn>
      </form>
    </Container>
  );
};

export default CheckoutContainer;
