import { Link } from "react-router-dom";
import "../styles.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>Plantify 🌱</h1>
      <p>Bringing greenery into every home with fresh and healthy plants.</p>
      <Link to="/products">
        <button className="start-btn">Get Started</button>
      </Link>
    </div>
  );
}
