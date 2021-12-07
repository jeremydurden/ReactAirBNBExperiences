import star from "../Images/Star.svg";

function Card({ img, rating, reviewCount, location, title, price }) {
  console.log(`../../public/images/${img}`, "image source");
  return (
    <div className="card--container">
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
