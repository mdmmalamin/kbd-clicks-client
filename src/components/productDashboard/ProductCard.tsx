import { TableCell, TableRow } from "../ui/table";
import ProductDeleteModal from "./ProductDeleteModal";
import ProductUpdateModal from "./ProductUpdateModal";

export type TProductCard = {
  _id?: string;
  img?: string;
  title?: string;
  price?: number;
  brand?: string;
  quantity?: number;
};

const ProductCard = ({ _id, img, title, price, brand }: TProductCard) => {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <img
          className="text-xs line-clamp-1 border"
          src={img}
          alt={`${title} image`}
        />
      </TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{brand}</TableCell>

      <TableCell className="text-right">
        <ProductUpdateModal />
        <ProductDeleteModal id={_id} />
      </TableCell>
    </TableRow>
  );
};

export default ProductCard;
