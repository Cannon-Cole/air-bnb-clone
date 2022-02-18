import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "../data";

export default function Container() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  console.log(cards);

  return (
    <div className="float-middle">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
