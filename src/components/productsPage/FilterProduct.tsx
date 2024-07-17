import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type TStateProps = {
  priceRange: string;
  setPriceRange: React.Dispatch<React.SetStateAction<string>>;
};

const FilterProduct = ({ priceRange, setPriceRange }: TStateProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={priceRange}
          onValueChange={setPriceRange}
        >
          <DropdownMenuRadioItem value="-price">
            high to low
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="price">
            low to high
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterProduct;
