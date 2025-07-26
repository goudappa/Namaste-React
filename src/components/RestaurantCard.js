import { CDN_URL, LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    cuisines,
    areaName,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card {StyleCard}">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>
        {avgRatingString} . {resData.info.sla.slaString}
      </h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
