//Style sheet
import "./style.css";

//Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

//Images
import katie from "./Images/katie.svg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img={katie}
        rating={"5.0"}
        reviewCount={6}
        country={"USA"}
        title={"Life Lessons with Katie Zaferes"}
        price={136}
      />
    </>
  );
}

export default App;
