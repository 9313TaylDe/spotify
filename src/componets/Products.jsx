import { useState } from "react";
import Cards from "./Cards";
import { Lista } from "./Lista";

const Products = () => {
  const [verMais, setVerMais] = useState(4);
  const FuncaoVerMais = () => {
    setVerMais((prevState) => prevState + 4);
  };

  const FuncaoVerMenos = () => {
    setVerMais((prevState) => prevState - 4);
  };
  return (
    <div className="container_products">
      <div className="container_vertodos">
        <h2>Todos os artitas</h2>
        <button className="button_vertodos">Ver todos</button>
      </div>
      {Lista.slice(0, verMais).map((index) => (
        <Cards
          {...index}
          name={index.name}
          image={index.img}
          album={index.album}
          genre={index.genre}
          qtdMusics={index.qtdMusics}
        />
      ))}
      {/* {verMais < Lista.length ? (
        <button className="buttonVerMais" onClick={FuncaoVerMais}>
          Ver mais
        </button>
      ) : (
        <button className="buttonVerMenos" onClick={FuncaoVerMenos}>
          {" "}
          Ver menos
        </button>
      )} */}
    </div>
  );
};

export default Products;
