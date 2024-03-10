import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="w-6/12 mx-auto my-4  bg-gray-200 shadow-lg p-4">
      <div
        className="flex justify-between  cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-xl py-4">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="mt-5">🔽</span>
      </div>x
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
