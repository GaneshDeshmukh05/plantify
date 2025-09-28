export default function PlantCard({ plant, inCart, handleAdd }) {
  return (
    <div className="card">
      <h3>
        {plant.img} {plant.name}
      </h3>
      <p>₹{plant.price}</p>
      <button disabled={!!inCart} onClick={() => handleAdd(plant)}>
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
