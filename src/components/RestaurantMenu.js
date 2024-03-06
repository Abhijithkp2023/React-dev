
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerCard from "./ShimmerCard";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) {
    return <ShimmerCard />;
  }

  return (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>{resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")}</h3>
      <h3>Main course</h3>
      <ul>
        {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (items) => {
            return (
              <li>
                {items.card?.info?.name} - Rs {items.card?.info?.price / 100}
              </li>
            );
          }
        )}
      </ul>
      <h3>Menu 2</h3>
      <ul>
        {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (items) => {
            return (
              <li>
                {items.card?.info?.name} - Rs {items.card?.info?.price / 100}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
  


export default RestaurantMenu;
