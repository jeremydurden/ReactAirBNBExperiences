import star from "../Images/Star.svg";

function Card({ img, rating, reviewCount, country, title, price }) {
  return (
    <div className="card--container">
      <img src={img} alt="diver" className="card--image" />
      <img src={star} alt="star icon" className="card--star" />
      <p className="card--rating">
        {rating}{" "}
        <span className="card--rating-span">
          ({reviewCount}) · {country}
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
