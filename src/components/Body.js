import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import { BODY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantaCardPromoted = withPromotedLabel(RestaurantCard);

  //fetching data from API

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_API);
    const json = await data.json();

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //CHECKING ONLINE STATUS BY CREATED HOOKS useOnlineStatus();

  onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like your offline!! Please check your internet connection!!</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 p-4">
          <input
            className=" border border-solid m-2 border-gray-500"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 m-2 bg-green-100 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-gray-200 p-2 m-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap px-12">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantaCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
