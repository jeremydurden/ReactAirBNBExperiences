import hero from "../Images/Hero Image.svg";

function Hero() {
  return (
    <section className="hero--container">
      <div className="hero--image__container">
        <img
          src={hero}
          alt="collection-of-activity-images"
          className="hero--image"
        />
      </div>
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
