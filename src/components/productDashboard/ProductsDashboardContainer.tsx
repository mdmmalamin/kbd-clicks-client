import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../redux/features/product/productSlice";
import Container from "../ui/Container";
import HeadLine from "../ui/HeadLine";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import CreateNewProductModal from "./CreateNewProductModal";
import ProductDeleteModal from "./ProductDeleteModal";
import ProductUpdateModal from "./ProductUpdateModal";

const ProductsDashboardContainer = () => {
  const { data: products } = useGetProductsQuery(undefined);

  return (
    <Container>
      <HeadLine>KBD Clicks - Products Dashboard Page</HeadLine>

      <section>
        <CreateNewProductModal />
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
            {products?.data?.map((product: TProduct, idx: number) => (
              <TableRow key={product?.id || idx}>
                <TableCell className="font-medium">
                  <img
                    className="text-xs line-clamp-1 border"
                    src={product?.img}
                    alt={`${product?.title} image`}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  {product?.title}
                </TableCell>
                <TableCell>{product?.price}</TableCell>
                <TableCell>{product?.brand}</TableCell>
                <TableCell className="text-right">
                  <ProductUpdateModal />
                  <ProductDeleteModal />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </Container>
  );
};

export default ProductsDashboardContainer;
