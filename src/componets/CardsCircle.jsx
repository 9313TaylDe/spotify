import { useState } from "react";
import Cards from "./Cards";
import { Lista } from "./Lista";
import "../App.css";

const CardsCircle = () => {
  const [isVerMais, setIsVerMais] = useState(4);
  const verMais = () => {
    setIsVerMais((prevIndex) => prevIndex + 4);
  };

  const verMenos = () => {
    setIsVerMais((prevvIndex) => prevvIndex - 4);
  };
  return (
    <div className="container_cardscircle_pai">
      <div className="container_vertodos">
        <h2>Todos os artitas</h2>
        <button className="button_vertodos">Ver todos</button>
      </div>{" "}
      <div className="container_cards_circle_filho">
        {Lista.slice(0, isVerMais).map((index) => (
          <div className="container_circle">
            <div className="cards_circle">
              <Cards
                img={index.img}
                name={index.name}
                genre={index.genre}
                id={index.id}
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div
        className="
      container_button_vermenos_vermais"
      >
        {isVerMais < Lista.length ? (
          <button className="button_vermais" onClick={verMais}>
            Ver mais
          </button>
        ) : (
          <button className="button_vermenos" onClick={verMenos}>
            Ver menos
          </button>
        )}
      </div> */}
    </div>
  );
};

export default CardsCircle;
