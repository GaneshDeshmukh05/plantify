import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name} - ₹{item.price}</h3>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          <span> {item.quantity} </span>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total Cost: ₹{totalCost}</h3>
      <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
}
