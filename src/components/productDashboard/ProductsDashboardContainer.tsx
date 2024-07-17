import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../redux/features/product/productSlice";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import CreateNewProductModal from "./CreateNewProductModal";
import ProductCard from "./ProductCard";
import ProductDeleteItems from "./ProductDeleteItems";

const ProductsDashboardContainer = () => {
  const { data: products } = useGetProductsQuery({});
  console.log(products);

  return (
    <Container>
      <HeadLine className="my-12">
        KBD Clicks - Products Dashboard
      </HeadLine>

      <section className="flex justify-between items-center">
        <CreateNewProductModal />
        <ProductDeleteItems />
      </section>

      <section>
        <Table>
          <TableCaption>A list of your recent product.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.data?.map((product: TProduct) => (
              <ProductCard {...product} key={product?._id} />
            ))}
          </TableBody>
        </Table>
      </section>
    </Container>
  );
};

export default ProductsDashboardContainer;
