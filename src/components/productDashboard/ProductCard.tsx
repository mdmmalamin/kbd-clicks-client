import { Link } from "react-router-dom";
import { TableCell, TableRow } from "../ui/table";
import ProductDeleteModal from "./ProductDeleteModal";
import ProductUpdateModal from "./ProductUpdateModal";
import { useGetSingleProductQuery } from "../../redux/features/product/productApi";

export type TProductCard = {
  _id: string;
  img: string;
  title: string;
  price: number;
  brand: string;
  quantity?: number;
};

const ProductCard = ({ _id, img, title, price, brand }: TProductCard) => {
  const { data: product } = useGetSingleProductQuery(_id);
  return (
    <TableRow>
      <TableCell className="font-medium">
        <Link to={`/product-details/${_id}`} state={product?.data}>
          <img
            className="text-xs line-clamp-1 border"
            src={img}
            alt={`${title} image`}
          />
        </Link>
      </TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{brand}</TableCell>

      <TableCell className="text-right">
        <ProductUpdateModal id={_id} />
        <ProductDeleteModal id={_id} />
      </TableCell>
    </TableRow>
  );
};

export default ProductCard;
