import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Container from "../ui/Container";
import BrandCard, { TBrandProps } from "./BrandCard";
import { brandsInfo } from "../../assets/constants/topBrands";
import HeadLine from "../ui/HeadLine";

const TopFeaturedBrandsContainer = () => {
  console.log(brandsInfo);
  return (
    <div>
      <Container className="space-y-12">
        <HeadLine>Top Featured Brands</HeadLine>

        <div className="flex justify-between gap-6">
          <Carousel
            className="w-full max-w-7xl"
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {brandsInfo?.map((brand: TBrandProps, index: number) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <BrandCard {...brand} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default TopFeaturedBrandsContainer;
