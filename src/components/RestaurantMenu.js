import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerCard from "./ShimmerCard";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const dummy = "dummy data";

  if (resInfo === null) {
    return <ShimmerCard />;
  }

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleCategoryClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((categories, index) => (
        <RestaurantCategory
          key={categories?.card?.card?.data?.title}
          data={categories?.card?.card}
          showItems={index === showIndex}
          onClick={() => handleCategoryClick(index)}
          dummy= {dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
