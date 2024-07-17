import advertisementsInfo from "../../assets/constants/advertisementsInfo";

import Container from "../ui/Container";
import AdvertisementCard, { TCardProps } from "./AdvertisementCard";

const ServiceAdvertisementContainer = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:justify-between lg:items-start">
        {advertisementsInfo?.map((item: TCardProps, idx) => (
          <AdvertisementCard {...item} key={idx} />
        ))}
      </div>
    </Container>
  );
};

export default ServiceAdvertisementContainer;
