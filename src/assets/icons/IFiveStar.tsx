import IStar from "./IStar";
import IStarSolid from "./IStarSolid";

type TStarProps = {
  rating: number;
};

const IFiveStar = ({ rating }: TStarProps) => {
  return (
    <div className="flex items-center">
      {[...Array(5 - rating)].map(( idx) => {
        return <IStar key={idx} />;
      })}

      {[...Array(rating)].map(( idx) => {
        return <IStarSolid key={idx} />;
      })}
    </div>
  );
};

export default IFiveStar;
