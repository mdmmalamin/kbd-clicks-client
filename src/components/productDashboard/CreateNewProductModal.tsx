import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Input from "../form/Input";
import Label from "../form/Label";
import IPlus from "../../assets/icons/IPlus";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateProductMutation } from "../../redux/features/product/productApi";
// import { useNavigate } from "react-router-dom";

const CreateNewProductModal = () => {
  const { register, handleSubmit } = useForm();
  const [setProduct, { data, isLoading, isError, isSuccess }] =
    useCreateProductMutation();
  // const navigate = useNavigate();

  console.log({ data, isLoading, isError, isSuccess });

  const createProduct = async (data: FieldValues) => {
    const toastId = toast.loading("New item create processing...");

    try {
      const productInfo = {
        title: data?.title,
        description: data?.description,
        brand: data?.brand,
        quantity: parseInt(data?.quantity),
        price: parseFloat(data?.price),
        rating: parseInt(data?.rating),
        status: data?.status,
        img: data?.img,
      };

      console.log(productInfo);

      await setProduct(productInfo);

      toast.success("Product create successfully.", {
        id: toastId,
        duration: 3000,
      });

      // navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IPlus /> <span className="ml-2">Create New Product</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[580px]">
        <DialogHeader>
          <DialogTitle>Add new product</DialogTitle>
          <DialogDescription>Fill the all input field.</DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={handleSubmit(createProduct)}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="img" className="text-right">
              Image
            </Label>
            <Input
              placeholder="Image Link"
              id="img"
              className="col-span-3"
              register={{
                ...register("img", {
                  required: "Please enter img link.",
                }),
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Name
            </Label>
            <Input
              placeholder="Product Title"
              id="title"
              className="col-span-3"
              register={{
                ...register("title", {
                  required: "Please enter item name.",
                }),
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Brand
            </Label>
            <Input
              placeholder="Brand Name"
              id="brand"
              className="col-span-3"
              register={{
                ...register("brand", {
                  required: "Please enter item name.",
                }),
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              placeholder="Price"
              id="price"
              className="col-span-3"
              register={{
                ...register("price", {
                  required: "Please enter item price.",
                }),
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              placeholder="Description"
              id="description"
              className="col-span-3"
              register={{
                ...register("description", {
                  required: "Please enter item description.",
                }),
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Available quantity
            </Label>
            <Input
              placeholder="Quantity"
              type="number"
              id="quantity"
              className="col-span-3"
              register={{
                ...register("quantity", {
                  required: "Please enter available quantity.",
                }),
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              placeholder="Rating"
              type="number"
              id="rating"
              className="col-span-3 appearance-none"
              register={{
                ...register("rating", {
                  required: "Please enter item rating.",
                  max: 5,
                  min: 0,
                  maxLength: 1,
                }),
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <select
              id="status"
              {...register("status", {
                required: "Please select an payment option",
              })}
              className="col-span-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Status options
              </option>
              <option value="in-stock">in-stock</option>
              <option value="out-of-stock">out-of-stock</option>
              <option value="discontinued">discontinued</option>
            </select>
          </div>
          <DialogFooter>
            <Button
              className="bg-kbd-accent hover:bg-kbd-tertiary text-kbd-primary hover:text-white"
              type="submit"
            >
              Add product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewProductModal;
