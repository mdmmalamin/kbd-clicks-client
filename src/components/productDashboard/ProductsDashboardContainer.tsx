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
  const products = [
    {
      id: 2344322,
      img: "",
      title: "Paasfggsfgsfgfgssgffsid",
      price: "$250.00",
      brand: "Credit Card",
    },
    {
      id: 234466322,
      img: "",
      title: "Paasfggsfgsfgfgssgffsid",
      price: "$250.00",
      brand: "Credit Card",
    },
  ];
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
              <TableHead className="">Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  <img
                    className="text-xs line-clamp-1"
                    src={product.img}
                    alt={`${product.title} image`}
                  />
                </TableCell>
                <TableCell className="font-medium line-clamp-1">
                  {product.title}
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.brand}</TableCell>
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
