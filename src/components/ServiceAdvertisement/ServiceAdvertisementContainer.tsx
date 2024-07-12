import advertisementsInfo from "../../assets/constants/advertisementsInfo";

import Container from "../ui/Container";
import AdvertisementCard, { TCardProps } from "./AdvertisementCard";

const ServiceAdvertisementContainer = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:justify-between lg:items-start">
          {advertisementsInfo?.map((item: TCardProps, idx) => (
            <AdvertisementCard {...item} key={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServiceAdvertisementContainer;
