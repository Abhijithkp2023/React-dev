import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    console.log("hi")
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-center text-2xl m-4 p-4">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 bg-gray-200 text-center"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        {cartItem.length===0 && <h1 className="p-2 m-2">Cart is empty. Add items to cart!</h1>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
