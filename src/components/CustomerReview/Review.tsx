import IQuotation from "../../assets/icons/IQuotation";

type TReviewProps = {
  name: string;
  designation: string;
  description: string;
  src: string;
};

const Review = ({ name, designation, description, src }: TReviewProps) => {
  return (
    <div className="p-4 min-w-full md:min-w-[50%]">
      <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
        <IQuotation />
        <p className="leading-relaxed mb-6 text-gray-500">{description}</p>
        <p className="inline-flex items-center">
          <img
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            src={src}
            alt="carousel navigate ui"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">{name}</span>
            <span className="text-gray-500 text-sm">{designation}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Review;
