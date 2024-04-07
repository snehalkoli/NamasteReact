import { IMG_CDN_URL as img_url } from '../Constant';
const RestaurentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString
}) => {
  return (
    <div className="card">
      <img src={img_url + cloudinaryImageId} alt="restocard" />
      <h2>{name}</h2>
      <h4>{cuisines?.join('')}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};
export default RestaurentCard;
