//Style sheet
import "./style.css";

//Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

//Data
import data from "./data.js";

function App() {
  console.log(data);
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card--list">{cards}</section>
    </>
  );
}

export default App;

//{ <Card
//img={katie}
//rating={"5.0"}
//reviewCount={6}
//country={"USA"}
//title={"Life Lessons with Katie Zaferes"}
//price={136}
///> } }
