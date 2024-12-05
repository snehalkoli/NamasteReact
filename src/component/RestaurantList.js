import { IMG_CDN_URL as img_url } from "../Constant";

const RestaurentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card w-48 h-60 bg-gray-400 p-2">
      <img
        className="h-32 w-full object-cover"
        src={img_url + cloudinaryImageId}
        alt="restocard"
      />
      <div className="h-full">
        <h2 className="text-lg font-semibold">{name}</h2>
        <h4 className="text-sm text-gray-700 truncate">
          {cuisines?.join(", ")}
        </h4>
        <h4 className="text-sm text-gray-700">{lastMileTravelString}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <span className="text-sm text-red-500">PROMOTED</span>
        <RestaurentCard {...props} />
      </div>
    );
  };
};


export default RestaurentCard;

