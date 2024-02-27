import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setrestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setrestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
