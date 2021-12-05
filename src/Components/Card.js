import star from "../Images/Star.svg";
import image from "../Images/katie.svg";

function Card() {
  return (
    <div className="card--container">
      <img src={image} alt="" className="card--image" />
      <img src={star} alt="" className="card--star" />
      <p className="card--rating">
        5.0 <span className="card--rating-span">(6) · USA</span>
      </p>
      <h3 className="card--title">Life Lessons with Katie Zaferes</h3>
      <p className="card--cost">
        <span className="card--cost-span">From $136</span> / person
      </p>
    </div>
  );
}

export default Card;
