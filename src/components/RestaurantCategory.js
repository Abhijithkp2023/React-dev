import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, onClick ,dummy}) => {
 
  return (
    <div className="w-6/12 mx-auto my-4  bg-gray-200 shadow-lg p-4">
      <div className="flex justify-between  cursor-pointer" onClick={onClick}>
        <span className="font-bold text-xl py-4">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="mt-5">⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} dummy = {dummy} />}
    </div>
  );
};

export default RestaurantCategory;
