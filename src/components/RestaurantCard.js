import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

  return (
    <div className="m-4 p-4 w-[230] h-[450px] bg-gray-200  rounded-lg hover:bg-gray-300 transform hover:scale-95 transition duration-100 ease-in-out }">
      <div className="w-[200px] h-[200px]">
        <img
          className="h-[200px] w-[200px] rounded-md"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="">
        <h3 className="font-bold m-2 text-center">{name}</h3>
        <h4 className="m-1">{cuisines.join(", ")}</h4>
        <h4 className="m-1">{avgRating}⭐</h4>
        <h4 className="m-1">{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return ( 
      <div className="static;z-index:2">
        <label className="relative top-0 bg-black text-white p-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;

//higher order function 
// input RestaurantCard => RestaurantaCardPromoted 


