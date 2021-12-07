import star from "../Images/Star.svg";

function Card({ img, rating, reviewCount, location, title, price, openSpots }) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card--container">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../../images/${img}`} alt="test" className="card--image" />
      <img src={star} alt="star icon" className="card--star" />
      <p className="card--rating">
        {rating}{" "}
        <span className="card--rating-span">
          ({reviewCount}) · {location}
        </span>
      </p>
      <h3 className="card--title">{title}</h3>
      <p className="card--cost">
        <span className="card--cost-span">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
