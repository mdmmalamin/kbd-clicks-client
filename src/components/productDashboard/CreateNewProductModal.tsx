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

const CreateNewProductModal = () => {
  const { register, handleSubmit } = useForm();

  const createProduct = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("New item create processing...");

    try {
      console.log(data);
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
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              type="number"
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
              type="number"
              id="rating"
              className="col-span-3"
              register={{
                ...register("rating", {
                  required: "Please enter item rating.",
                }),
              }}
            />
          </div>
          <DialogFooter>
            <Button
              className="bg-kbd-accent hover:bg-kbd-tertiary text-kbd-primary hover:text-white"
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewProductModal;
