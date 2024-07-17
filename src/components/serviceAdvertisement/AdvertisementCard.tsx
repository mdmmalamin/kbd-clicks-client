import { ReactNode } from "react";
import IHeart from "../../assets/icons/IHeart";

export type TCardProps = {
  icon?: ReactNode;
  title?: string;
  description?: string;
};

const AdvertisementCard = ({ icon, title, description }: TCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 max-w-96 min-w-80">
      <div>{icon || <IHeart />}</div>
      <h3 className="text-lg font-semibold">
        {title || "With Love From KBD Clicks"}
      </h3>
      <p>
        {description ||
          "Every Order is packed and checked by Keyboard Lovers who share the same passion about this Hobby as our Customers."}
      </p>
    </div>
  );
};

export default AdvertisementCard;
