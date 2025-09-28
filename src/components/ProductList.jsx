import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 150, category: "Indoor", img: "🌵" },
  { id: 2, name: "Snake Plant", price: 200, category: "Indoor", img: "🌱" },
  { id: 3, name: "Peace Lily", price: 250, category: "Flowering", img: "🌸" },
  { id: 4, name: "Rose Plant", price: 300, category: "Flowering", img: "🌹" },
  { id: 5, name: "Bamboo", price: 180, category: "Outdoor", img: "🎍" },
  { id: 6, name: "Money Plant", price: 220, category: "Indoor", img: "💰" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <h2>Our Plants</h2>
      <div className="grid">
        {plants.map((plant) => {
          const inCart = cartItems.find((i) => i.id === plant.id);
          return (
            <div key={plant.id} className="card">
              <h3>{plant.img} {plant.name}</h3>
              <p>₹{plant.price}</p>
              <button disabled={!!inCart} onClick={() => handleAdd(plant)}>
                {inCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
