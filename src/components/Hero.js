import photogrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero-collage" src={photogrid} />
      <div>
        <h1>Online Experiences</h1>
        <p>
          Join unique iteractive activities led by
          one-of-a-kind-hosts-all-without-leaving home.
        </p>
      </div>
    </div>
  );
}
