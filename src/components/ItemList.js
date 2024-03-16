import { CDN_URL } from "../utils/constants";



const ItemList = ({items,dummy}) => {
  console.log(dummy)
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-400 border-b-2 text-left py-3 flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-lg font-semibold py-3">
              <span>{item.card.info.name}</span>
              <span> ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <div>
              <p className="text-s">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4 relative">
            <button className="absolute right-1/3 p-2 m-auto bg-gray-900 text-white rounded-lg">
              Add +
            </button>
            <img src={CDN_URL + item.card.info.imageId}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
