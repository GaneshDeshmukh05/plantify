import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | 
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}
