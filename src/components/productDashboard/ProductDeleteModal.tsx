import { toast } from "sonner";
import ITrash from "../../assets/icons/ITrash";
import { useDeleteProductMutation } from "../../redux/features/product/productApi";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ProductDeleteModal = ({ id }: { id?: string }) => {
  const [deletedProduct] = useDeleteProductMutation();

  const removedProduct = async () => {
    try {
      await deletedProduct(id);
      toast.success("Product successfully deleted.", { duration: 2500 });
    } catch (error) {
      toast.success("Something went wrong", { duration: 2500 });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ITrash />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete product</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item?
            <br />
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={removedProduct}
              className="bg-red-500 hover:bg-red-700"
              type="submit"
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDeleteModal;
